'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/locations', label: 'Locations' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/80 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          <Link href="/" className="group flex items-center">
            <Image
              src="/logo.png"
              alt="Axiom Facility Partners"
              width={689}
              height={577}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-navy-600 transition-colors duration-300 hover:text-navy-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-bronze-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-bronze-600/20 transition-all duration-300 hover:from-bronze-700 hover:to-bronze-600 hover:shadow-bronze-600/30"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6 text-navy-950"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-navy-100 lg:hidden"
            >
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2 px-3"
                >
                  <Link
                    href="/consultation"
                    className="block rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-bronze-600/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    Request Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
