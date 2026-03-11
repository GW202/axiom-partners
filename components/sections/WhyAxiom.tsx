'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/layout/Container';

interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export default function WhyAxiom({ valueProps }: { valueProps: ValueProp[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy-950 py-24 lg:py-32"
    >
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 60% 40% at 0% 50%, rgba(196,154,42,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 50% at 100% 30%, rgba(42,79,122,0.15) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center lg:mb-20"
        >
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-bronze-400 uppercase">
            The Axiom Difference
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-5xl">
            Why Axiom
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-300">
            We are not a cleaning vendor. We are your facility maintenance
            partner.
          </p>
        </motion.div>

        {/* Timeline-style vertical layout */}
        <div className="relative">
          {/* Vertical connector line */}
          <motion.div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-bronze-500/40 via-bronze-400/20 to-transparent lg:left-1/2 lg:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-8 lg:space-y-0">
            {valueProps.map((prop, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={prop.title}
                  initial={{
                    opacity: 0,
                    x: isEven ? -40 : 40,
                  }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-10"
                >
                  {/* Dot on timeline */}
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-bronze-400 bg-navy-950 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:block"
                  />

                  {/* Content — alternates sides on desktop */}
                  <div
                    className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:border-bronze-400/15 hover:bg-white/[0.05] ${
                      isEven
                        ? 'lg:col-start-1 lg:text-right'
                        : 'lg:col-start-2'
                    }`}
                  >
                    {/* Large decorative number */}
                    <span
                      aria-hidden="true"
                      className={`absolute top-4 font-mono text-7xl font-black leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-bronze-400/[0.06] ${
                        isEven ? 'right-6 lg:left-6 lg:right-auto' : 'right-6'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div
                      className={`flex items-start gap-5 ${
                        isEven
                          ? 'lg:flex-row-reverse lg:text-left'
                          : ''
                      }`}
                    >
                      {/* Icon container */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-bronze-500/20 to-bronze-400/5 ring-1 ring-bronze-400/10 transition-all duration-500 group-hover:from-bronze-500/30 group-hover:ring-bronze-400/25">
                        <svg
                          aria-hidden="true"
                          className="h-6 w-6 text-bronze-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={prop.icon}
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">
                          {prop.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-navy-300">
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  {isEven ? <div className="hidden lg:block" /> : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
