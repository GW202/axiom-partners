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
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/80 bg-white/80 backdrop-blur-xl">
      {/* Top bar with phone number */}
      <div className="border-b border-navy-100/60 bg-navy-950">
        <Container>
          <div className="flex items-center justify-between py-1.5 text-xs">
            <span className="hidden text-navy-300 sm:inline">
              Central Florida&apos;s Premier Facility Partner
            </span>
            <a
              href="tel:+14073423195"
              className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-bronze-400"
            >
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              (407) 342-3195
            </a>
          </div>
        </Container>
      </div>

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
              aria-hidden="true"
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
                  <a
                    href="tel:+14073423195"
                    className="mt-2 flex items-center justify-center gap-2 rounded-md border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    (407) 342-3195
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
