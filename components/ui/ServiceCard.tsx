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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className="group block rounded-sm border border-navy-100 bg-white p-8 transition-shadow hover:shadow-lg"
      >
        <h3 className="text-lg font-semibold text-navy-950 group-hover:text-bronze-600">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600">
          {description}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-bronze-600">
          Learn more &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
