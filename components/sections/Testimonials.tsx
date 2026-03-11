'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import { testimonials } from '@/content/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-bronze-50 to-cream-100 py-24 lg:py-32">
      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-bronze-200/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-navy-200/20 blur-[100px]"
      />

      <Container>
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-bronze-600 uppercase">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 lg:text-5xl">
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
              {/* Quote card */}
              <div className="relative rounded-2xl border border-bronze-200/60 bg-white/80 p-8 shadow-xl shadow-bronze-200/20 backdrop-blur-sm sm:p-12">
                {/* Large decorative quote mark */}
                <svg
                  className="absolute -top-5 left-8 h-14 w-14 text-bronze-400/20 sm:left-12"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                {/* Star rating */}
                <div className="relative mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-5 w-5 text-bronze-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="relative">
                  <p className="text-lg leading-relaxed text-navy-800 sm:text-xl sm:leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Highlight bar */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-bronze-300/40 bg-bronze-50 px-4 py-2">
                  <svg className="h-4 w-4 text-bronze-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium text-bronze-700">
                    {current.highlight}
                  </span>
                </div>

                {/* Attribution */}
                <div className="mt-8 flex items-center gap-4 border-t border-navy-100 pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 text-lg font-bold text-white shadow-md shadow-navy-950/20">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950">{current.name}</p>
                    <p className="text-sm text-navy-500">
                      {current.title}, {current.company}
                    </p>
                    <p className="text-xs text-navy-400">{current.location}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-gradient-to-r from-bronze-400 via-bronze-500 to-bronze-400" />
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
                    ? 'bg-navy-950 text-white shadow-lg shadow-navy-950/20'
                    : 'border border-navy-200 text-navy-500 hover:border-navy-300 hover:text-navy-700'
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
