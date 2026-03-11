'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/layout/Container';
import type { Industry } from '@/content/industries';

const industryIcons: Record<string, string> = {
  'corporate-offices':
    'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  'logistics-warehouses':
    'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
  'commercial-property-management':
    'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z',
  'medical-offices':
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
};

/* Accent gradient per industry for visual variety */
const accentGradients = [
  'from-navy-700 to-navy-800',
  'from-navy-800 to-navy-950',
  'from-bronze-700/80 to-navy-800',
  'from-navy-700 to-bronze-700/60',
];

export default function IndustriesShowcase({
  industries,
}: {
  industries: Industry[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-cream-50 via-white to-cream-50 py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-bronze-600 uppercase">
            Sectors We Specialize In
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 lg:text-4xl">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-500">
            Specialized facility maintenance programs for the industries that
            need it most.
          </p>
        </motion.div>

        {/* Stacked full-width cards with gradient accent strips */}
        <div className="space-y-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-200/25 md:flex-row"
              >
                {/* Left accent strip with icon */}
                <div
                  className={`flex items-center justify-center bg-gradient-to-br ${accentGradients[i] || accentGradients[0]} px-8 py-8 md:w-48 md:py-0`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 group-hover:ring-white/30">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                          industryIcons[industry.slug] ||
                          industryIcons['corporate-offices']
                        }
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 items-center justify-between gap-6 p-7 md:p-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-cream-50 transition-all duration-500 group-hover:border-bronze-200 group-hover:bg-bronze-50">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-navy-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-bronze-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover progress bar at bottom */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-bronze-500 to-bronze-300 transition-all duration-700 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bronze-600 transition-colors hover:text-bronze-700"
          >
            Explore all industries
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
