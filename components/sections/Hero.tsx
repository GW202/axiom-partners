'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Request a Facility Consultation',
  ctaHref = '/consultation',
}: HeroProps) {
  return (
    <section className="bg-navy-950 py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-300 lg:text-xl">
            {subtitle}
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
