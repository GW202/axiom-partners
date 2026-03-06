'use client';

import { useState } from 'react';
import Link from 'next/link';
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
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-navy-950"
          >
            AXIOM
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-700 transition-colors hover:text-navy-950"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="rounded-sm bg-bronze-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-bronze-700"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
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
        {mobileOpen && (
          <div className="border-t border-navy-100 pb-6 md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy-700 transition-colors hover:text-navy-950"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/consultation"
                className="mt-2 rounded-sm bg-bronze-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-bronze-700"
                onClick={() => setMobileOpen(false)}
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
