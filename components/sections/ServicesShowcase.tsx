'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/layout/Container';
import type { Service } from '@/content/services';

const serviceIcons: Record<string, string> = {
  'office-building-cleaning':
    'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  'warehouse-facility-cleaning':
    'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
  'facilities-management':
    'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75',
  'day-porter-services':
    'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
  'floor-care-maintenance':
    'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z',
  'disinfection-protocols':
    'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
};

/* Bento grid sizing: first two cards span wider on lg */
const bentoClasses = [
  'lg:col-span-2',
  'lg:col-span-2',
  '',
  '',
  '',
  '',
];

export default function ServicesShowcase({ services }: { services: Service[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      {/* Decorative dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-navy-950) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-bronze-600 uppercase">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-navy-950 lg:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-500">
              Comprehensive facility maintenance programs built for commercial
              operations that demand reliability and precision.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-bronze-600 transition-colors hover:text-bronze-700 lg:self-auto"
          >
            View all services
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={bentoClasses[i] || ''}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-200/30"
              >
                {/* Number badge */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-mono text-5xl font-black leading-none text-navy-950/[0.04] transition-colors duration-500 group-hover:text-bronze-400/10"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-950 to-navy-800 shadow-md shadow-navy-950/20 transition-all duration-500 group-hover:from-bronze-600 group-hover:to-bronze-500 group-hover:shadow-bronze-600/20">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={serviceIcons[service.slug] || serviceIcons['office-building-cleaning']}
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                  {service.description}
                </p>

                {/* Animated bottom bar */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-bronze-600">
                  <span>Learn more</span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-bronze-500 to-bronze-400 transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
