'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface InsightCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  href: string;
}

export default function InsightCard({
  title,
  description,
  category,
  readTime,
  href,
}: InsightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className="group block rounded-sm border border-navy-100 bg-white p-8 transition-shadow hover:shadow-lg"
      >
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-bronze-600">
          <span>{category}</span>
          <span className="text-navy-300">&middot;</span>
          <span className="text-navy-400">{readTime}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-navy-950 group-hover:text-bronze-600">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600">
          {description}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-bronze-600">
          Read article &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
