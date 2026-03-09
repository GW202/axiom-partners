'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/layout/Container';

interface SectionWrapperProps {
  children: React.ReactNode;
  heading?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionWrapper({
  children,
  heading,
  subtitle,
  dark = false,
  className = '',
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className={`relative py-24 lg:py-32 ${dark ? 'bg-navy-950 text-white' : 'bg-cream-50'} ${className}`}
    >
      {dark && (
        <div className="diagonal-lines pointer-events-none absolute inset-0 opacity-30" />
      )}
      <Container>
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`h-px w-8 ${dark ? 'bg-bronze-400' : 'bg-bronze-500'}`}
              />
            </div>
            <h2
              className={`text-3xl font-bold tracking-tight lg:text-4xl ${dark ? 'text-white' : 'text-navy-950'}`}
            >
              {heading}
            </h2>
            {subtitle && (
              <p
                className={`mt-4 text-lg leading-relaxed ${dark ? 'text-navy-300' : 'text-navy-500'}`}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
