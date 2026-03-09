'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import { testimonials } from '@/content/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      {/* Background */}
      <div className="diagonal-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-400/[0.03] blur-3xl" />

      <Container>
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-bronze-400">
            <span className="h-px w-6 bg-bronze-400/40" />
            Client Testimonials
            <span className="h-px w-6 bg-bronze-400/40" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Quote */}
              <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12">
                {/* Quote mark */}
                <svg
                  className="absolute -top-3 left-8 h-10 w-10 text-bronze-500/30 sm:left-12"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <blockquote className="relative pt-4">
                  <p className="text-lg leading-relaxed text-navy-200 sm:text-xl sm:leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Highlight bar */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-bronze-400/20 bg-bronze-400/5 px-4 py-2">
                  <svg className="h-4 w-4 text-bronze-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium text-bronze-300">
                    {current.highlight}
                  </span>
                </div>

                {/* Attribution */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-bronze-500 to-bronze-700 text-lg font-bold text-white">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{current.name}</p>
                    <p className="text-sm text-navy-400">
                      {current.title}, {current.company}
                    </p>
                    <p className="text-xs text-navy-500">{current.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots + names */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`Read testimonial from ${t.name}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  i === active
                    ? 'bg-bronze-600 text-white shadow-lg shadow-bronze-600/20'
                    : 'border border-white/10 text-navy-400 hover:border-white/20 hover:text-navy-200'
                }`}
              >
                {t.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
