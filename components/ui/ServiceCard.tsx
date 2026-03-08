'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Link
        href={href}
        className="gradient-border group block h-full rounded-lg border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-200/40"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950/5 transition-colors duration-300 group-hover:bg-bronze-50">
          <svg
            className="h-5 w-5 text-navy-400 transition-colors duration-300 group-hover:text-bronze-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-500">
          {description}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-bronze-600">
          <span>Learn more</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </Link>
    </motion.div>
  );
}
