'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'axiom-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);

    // Disable GA4 tracking
    const w = window as unknown as { dataLayer: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'consent_update',
      analytics_storage: 'denied',
    });
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy-700 bg-navy-900/95 px-4 py-4 backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <p className="text-sm leading-relaxed text-navy-200">
          We use cookies and analytics to improve your experience and measure
          site performance. See our{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-md border border-navy-600 px-4 py-2 text-xs font-semibold tracking-wide text-navy-300 transition-colors hover:border-navy-400 hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:from-bronze-700 hover:to-bronze-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
