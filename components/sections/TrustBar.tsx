'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const clientTypes = [
  'Class A Office Buildings',
  'Medical Facilities',
  'Distribution Centers',
  'Retail Properties',
  'Educational Campuses',
  'Government Buildings',
];

const trustSignals = [
  {
    icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
    label: 'Green Clean Certified',
    detail: 'Eco-friendly products & practices',
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
    label: 'Dedicated Account Manager',
    detail: 'Single point of contact for your facility',
  },
  {
    icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
    label: 'Fully Insured & Bonded',
    detail: '$2M general liability coverage',
  },
  {
    icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
    label: 'Background-Checked Teams',
    detail: 'Verified & trained professionals',
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream-50 py-10 lg:py-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Trust signals */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {trustSignals.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-navy-100/60 bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-lg hover:shadow-bronze-100/50"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-bronze-100 to-bronze-50">
                <svg
                  aria-hidden="true"
                  className="h-5.5 w-5.5 text-bronze-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={signal.icon} />
                </svg>
              </div>
              <p className="text-sm font-bold text-navy-950">{signal.label}</p>
              <p className="mt-0.5 text-xs text-navy-500">{signal.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Client types marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
            Trusted by facilities across Central Florida
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clientTypes.map((type, i) => (
              <motion.span
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="rounded-full border border-navy-200/60 bg-white px-4 py-2 text-xs font-medium text-navy-700 transition-colors duration-300 hover:border-bronze-300 hover:text-navy-900"
              >
                {type}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
