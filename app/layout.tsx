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
      'Axiom Facility Partners | Commercial Cleaning Service & Janitorial Company | Orlando, FL',
    template: '%s | Axiom Facility Partners',
  },
  description:
    'Axiom Facility Partners is a commercial cleaning service and janitorial company in Orlando, Florida. We provide office building cleaning, warehouse facility cleaning, facilities management, day porter services, floor care maintenance, and disinfection protocols for commercial properties across Central Florida. Call (407) 342-3195 for a free consultation.',
  keywords: [
    'commercial cleaning service',
    'commercial cleaning service Orlando',
    'janitorial service Orlando',
    'janitorial company Central Florida',
    'office building cleaning Orlando',
    'commercial facility maintenance',
    'warehouse cleaning service',
    'day porter services',
    'floor care maintenance',
    'disinfection protocols',
    'facilities management Orlando',
    'building maintenance service',
    'commercial property cleaning',
    'Axiom Facility Partners',
    'cleaning company Orlando FL',
    'janitorial services near me',
    'office cleaning service Central Florida',
  ],
  openGraph: {
    title: 'Axiom Facility Partners | Commercial Cleaning & Janitorial Service | Orlando, FL',
    description:
      'Commercial cleaning service and janitorial company serving Orlando and Central Florida. Office building cleaning, warehouse cleaning, facilities management, day porter, floor care, and disinfection. Rated 4.9/5 stars.',
    siteName: 'Axiom Facility Partners',
    type: 'website',
    locale: 'en_US',
    url: 'https://axiomfacilitypartners.com',
    images: [
      {
        url: '/hero-lobby.jpg',
        width: 1536,
        height: 1024,
        alt: 'Axiom Facility Partners — premium commercial cleaning service in a Central Florida luxury building lobby',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon-180.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Facility Partners | Commercial Cleaning & Janitorial Service',
    description:
      'Commercial cleaning service and janitorial company in Orlando, FL. Office cleaning, warehouse cleaning, facilities management, day porter services. Rated 4.9/5. Call (407) 342-3195.',
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
    languages: {
      'en-US': 'https://axiomfacilitypartners.com',
      'es-US': 'https://axiomfacilitypartners.com/es',
      'x-default': 'https://axiomfacilitypartners.com',
    },
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
