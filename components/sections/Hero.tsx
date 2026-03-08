'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Request a Facility Consultation',
  ctaHref = '/consultation',
  badge,
}: HeroProps) {
  return (
    <section className="hero-gradient relative overflow-hidden py-28 lg:py-40">
      {/* Grid pattern overlay */}
      <div className="grid-pattern pointer-events-none absolute inset-0" />

      {/* Decorative geometric accents */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2">
        <div className="absolute right-[10%] top-[15%] h-64 w-64 rounded-full border border-white/[0.03]" />
        <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full border border-white/[0.02]" />
        <div className="absolute right-[20%] bottom-[10%] h-48 w-48 rounded-full border border-bronze-400/[0.06]" />
      </div>

      {/* Accent line */}
      <div className="pulse-glow pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-bronze-500/20 to-transparent" />

      <Container>
        <div className="relative max-w-3xl">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-bronze-400/20 bg-bronze-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-bronze-300">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 h-0.5 bg-gradient-to-r from-bronze-400 to-bronze-600"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-navy-200/80 lg:text-xl"
            data-speakable
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
