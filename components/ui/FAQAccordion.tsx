'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  dark?: boolean;
}

export default function FAQAccordion({ faqs, dark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y ${dark ? 'divide-white/10' : 'divide-navy-100/80'}`}>
      {faqs.map((faq, index) => (
        <div key={index} className="group">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            className="flex w-full items-center justify-between py-6 text-left transition-colors"
          >
            <span className={`pr-6 text-base font-semibold transition-colors duration-300 group-hover:text-bronze-400 ${dark ? 'text-white' : 'text-navy-950'}`}>
              {faq.question}
            </span>
            <span
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                openIndex === index
                  ? dark
                    ? 'rotate-45 border-bronze-400 bg-bronze-400/10 text-bronze-400'
                    : 'rotate-45 border-bronze-300 bg-bronze-50 text-bronze-600'
                  : dark
                    ? 'border-white/20 text-white/50 group-hover:border-bronze-400/40 group-hover:text-bronze-400'
                    : 'border-navy-200 text-navy-400 group-hover:border-bronze-300 group-hover:text-bronze-500'
              }`}
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="3" x2="8" y2="13" />
                <line x1="3" y1="8" x2="13" y2="8" />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-6 pl-0 pr-12">
                  <div className={`rounded-lg border p-4 ${dark ? 'border-white/10 bg-white/5' : 'border-navy-50 bg-navy-50/30'}`}>
                    <p data-answer="" className={`text-sm leading-relaxed ${dark ? 'text-navy-200' : 'text-navy-600'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
