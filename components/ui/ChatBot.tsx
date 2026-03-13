'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  options?: string[];
}

type Step =
  | 'greeting'
  | 'service'
  | 'facility'
  | 'size'
  | 'name'
  | 'company'
  | 'email'
  | 'phone'
  | 'submitting'
  | 'done'
  | 'freeform';

const SERVICE_OPTIONS = [
  'Office Building Cleaning',
  'Warehouse Facility Cleaning',
  'Facilities Management',
  'Day Porter Services',
  'Floor Care & Maintenance',
  'Disinfection Protocols',
];

const FACILITY_OPTIONS = [
  'Office Building',
  'Warehouse / Distribution',
  'Medical Office',
  'Commercial Property',
  'Retail Space',
  'Other',
];

const SIZE_OPTIONS = [
  'Under 10,000 sq ft',
  '10,000 – 25,000 sq ft',
  '25,000 – 50,000 sq ft',
  '50,000 – 100,000 sq ft',
  '100,000+ sq ft',
];

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>('greeting');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pulse, setPulse] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Collected lead data
  const [leadData, setLeadData] = useState({
    service: '',
    facility: '',
    size: '',
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const addBotMessage = useCallback((text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: generateId(), role: 'bot', text, options },
      ]);
    }, 600);
  }, []);

  const addUserMessage = useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: generateId(), role: 'user', text },
    ]);
  }, []);

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setPulse(false);
      addBotMessage(
        "Hi! I'm Axiom's facility assistant. I can help you get a quick quote or answer questions about our services. What are you looking for today?",
        ['Get a Quick Quote', 'Learn About Services', 'Talk to Someone']
      );
    }
  }, [isOpen, messages.length, addBotMessage]);

  const handleOptionSelect = useCallback(
    (option: string) => {
      addUserMessage(option);

      switch (step) {
        case 'greeting':
          if (option === 'Talk to Someone') {
            addBotMessage(
              'Of course! You can reach us directly at (407) 342-3195 or fill out our consultation form. Would you like me to help you with a quick quote instead?',
              ['Yes, get a quote', 'No thanks']
            );
            setStep('freeform');
            return;
          }
          if (option === 'Learn About Services') {
            addBotMessage(
              "We offer 6 core facility services across Central Florida. Which area interests you most?",
              SERVICE_OPTIONS
            );
            setStep('service');
            return;
          }
          // "Get a Quick Quote" flow
          addBotMessage('Great! What service are you interested in?', SERVICE_OPTIONS);
          setStep('service');
          break;

        case 'service':
          setLeadData((prev) => ({ ...prev, service: option }));
          addBotMessage('What type of facility is this for?', FACILITY_OPTIONS);
          setStep('facility');
          break;

        case 'facility':
          setLeadData((prev) => ({ ...prev, facility: option }));
          addBotMessage("What's the approximate size?", SIZE_OPTIONS);
          setStep('size');
          break;

        case 'size':
          setLeadData((prev) => ({ ...prev, size: option }));
          addBotMessage(
            "I have all the details about your facility. To send you a custom quote, I just need a few quick details. What's your name?"
          );
          setStep('name');
          break;

        case 'freeform':
          if (option === 'Yes, get a quote') {
            addBotMessage('What service are you interested in?', SERVICE_OPTIONS);
            setStep('service');
          } else {
            addBotMessage(
              "No problem! Feel free to call us at (407) 342-3195 anytime. We're happy to help."
            );
            setStep('done');
          }
          break;

        default:
          break;
      }
    },
    [step, addBotMessage, addUserMessage]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const value = input.trim();
      if (!value) return;
      setInput('');
      addUserMessage(value);

      switch (step) {
        case 'name':
          setLeadData((prev) => ({ ...prev, name: value }));
          addBotMessage("What company or property are you with?");
          setStep('company');
          break;

        case 'company':
          setLeadData((prev) => ({ ...prev, company: value }));
          addBotMessage("What's your email address?");
          setStep('email');
          break;

        case 'email': {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            addBotMessage('That doesn\'t look like a valid email. Could you try again?');
            return;
          }
          setLeadData((prev) => ({ ...prev, email: value }));
          addBotMessage(
            "Last one — what's the best phone number to reach you? (optional — type 'skip' to skip)"
          );
          setStep('phone');
          break;
        }

        case 'phone': {
          const phone = value.toLowerCase() === 'skip' ? '' : value;
          const finalData = { ...leadData, phone, name: leadData.name };
          setLeadData(finalData);
          setStep('submitting');

          addBotMessage('Submitting your request...');

          try {
            const res = await fetch('/api/consultation', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: finalData.name,
                email: finalData.email,
                phone: finalData.phone || undefined,
                company: leadData.company,
                facilityType: leadData.facility,
                squareFootage: leadData.size,
                services: [leadData.service],
                message: `[Chat Bot Lead] Service: ${leadData.service}, Facility: ${leadData.facility}, Size: ${leadData.size}`,
              }),
            });

            if (res.ok) {
              addBotMessage(
                "Your request has been submitted! Our team will reach out within one business day with a custom quote. In the meantime, feel free to call us at (407) 342-3195."
              );
            } else {
              addBotMessage(
                "I wasn't able to submit that automatically, but you can call us directly at (407) 342-3195 or fill out our consultation form and we'll get right back to you."
              );
            }
          } catch {
            addBotMessage(
              "Something went wrong on our end. Please call us at (407) 342-3195 or use our consultation form — we'd love to help!"
            );
          }
          setStep('done');
          break;
        }

        default:
          break;
      }
    },
    [input, step, leadData, addBotMessage, addUserMessage]
  );

  const showInput = step === 'name' || step === 'company' || step === 'email' || step === 'phone';

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-bronze-600 to-bronze-500 text-white shadow-xl shadow-bronze-600/30 transition-all duration-300 hover:from-bronze-700 hover:to-bronze-600 hover:shadow-bronze-600/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Pulse indicator */}
        {pulse && !isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-bronze-500" />
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl sm:h-[32rem] sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-navy-950 to-navy-900 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bronze-500/20">
                <svg
                  className="h-5 w-5 text-bronze-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Axiom Facility Assistant</p>
                <p className="text-xs text-navy-300">Get a quick quote in 60 seconds</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id}>
                    <div
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'rounded-br-md bg-gradient-to-r from-bronze-600 to-bronze-500 text-white'
                            : 'rounded-bl-md bg-navy-50 text-navy-800'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                    {/* Option buttons */}
                    {msg.options && msg.role === 'bot' && (
                      <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleOptionSelect(opt)}
                            className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700 transition-all duration-200 hover:border-bronze-300 hover:bg-bronze-50 hover:text-bronze-700"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-navy-50 px-4 py-3">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input area */}
            {showInput && (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 border-t border-navy-100 px-4 py-3"
              >
                <input
                  ref={inputRef}
                  type={step === 'email' ? 'email' : 'text'}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    step === 'name'
                      ? 'Your name...'
                      : step === 'company'
                        ? 'Company or property name...'
                        : step === 'email'
                          ? 'your@email.com'
                          : 'Phone number...'
                  }
                  className="flex-1 rounded-lg border border-navy-200 bg-cream-50 px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-bronze-600 to-bronze-500 text-white transition-all hover:from-bronze-700 hover:to-bronze-600"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            )}

            {/* Done state */}
            {step === 'done' && (
              <div className="border-t border-navy-100 px-4 py-3 text-center">
                <a
                  href="tel:+14073423195"
                  className="text-xs font-medium text-bronze-600 transition-colors hover:text-bronze-700"
                >
                  Call us: (407) 342-3195
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
