import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from '@/lib/structured-data';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axiomfacilitypartners.com'),
  title: {
    default:
      'Axiom | Premium Facility Maintenance | Commercial Cleaning',
    template: '%s | Axiom Facility Partners',
  },
  description:
    'Premium commercial facility maintenance and commercial cleaning for office buildings, warehouses, and commercial properties in Central Florida. Protecting your facility assets with operational excellence.',
  keywords: [
    'commercial facility maintenance',
    'office building cleaning',
    'warehouse cleaning',
    'day porter services',
    'floor care maintenance',
    'disinfection protocols',
    'Central Florida',
    'Orlando',
    'facility management',
    'janitorial services',
    'commercial cleaning',
    'Axiom Facility Partners',
  ],
  openGraph: {
    title: 'Axiom | Premium Facility Maintenance | Commercial Cleaning',
    description:
      'Premium commercial facility maintenance and commercial cleaning for office buildings, warehouses, and commercial properties in Central Florida.',
    siteName: 'Axiom Facility Partners',
    type: 'website',
    locale: 'en_US',
    url: 'https://axiomfacilitypartners.com',
    images: [
      {
        url: '/hero-lobby.jpg',
        width: 1536,
        height: 1024,
        alt: 'Axiom Facility Partners — premium commercial facility maintenance in a Central Florida luxury building lobby',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon-180.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom | Premium Facility Maintenance | Commercial Cleaning',
    description:
      'Premium commercial facility maintenance and commercial cleaning for office buildings, warehouses, and commercial properties in Central Florida.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://axiomfacilitypartners.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V5DS98Y2EC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V5DS98Y2EC');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0a1628" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Orlando" />
        <meta name="geo.position" content="28.5233;-81.3786" />
        <meta name="ICBM" content="28.5233, -81.3786" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-bronze-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
