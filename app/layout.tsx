import type { Metadata } from 'next';
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
      'Axiom Facility Partners | Premium Commercial Facility Maintenance',
    template: '%s | Axiom Facility Partners',
  },
  description:
    'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida. Protecting your facility assets with operational excellence.',
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
    title: 'Axiom Facility Partners | Premium Commercial Facility Maintenance',
    description:
      'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida.',
    siteName: 'Axiom Facility Partners',
    type: 'website',
    locale: 'en_US',
    url: 'https://axiomfacilitypartners.com',
    images: [
      {
        url: '/hero-lobby.jpg',
        width: 1536,
        height: 1024,
        alt: 'Axiom Facility Partners — premium commercial facility maintenance in a luxury building lobby',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon-180.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Facility Partners | Premium Commercial Facility Maintenance',
    description:
      'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida.',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
