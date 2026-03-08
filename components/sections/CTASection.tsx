'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  heading = 'Ready to Elevate Your Facility Standards?',
  description = 'Schedule a consultation with our facility maintenance experts. We\'ll assess your needs and design a maintenance program built for your operation.',
  ctaText = 'Request a Facility Consultation',
  ctaHref = '/consultation',
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="hero-gradient relative overflow-hidden py-24 lg:py-32"
    >
      <div className="grid-pattern pointer-events-none absolute inset-0" />

      {/* Decorative accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-bronze-400/[0.06]" />
        <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-bronze-400/[0.06]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-bronze-400 to-transparent" />
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-300">
            {description}
          </p>
          <div className="mt-10">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
