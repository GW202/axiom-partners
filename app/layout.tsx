import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generateOrganizationSchema } from '@/lib/structured-data';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axiom Facility Partners | Premium Commercial Facility Maintenance',
  description:
    'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida. Protecting your facility assets with operational excellence.',
  openGraph: {
    title: 'Axiom Facility Partners | Premium Commercial Facility Maintenance',
    description:
      'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida.',
    siteName: 'Axiom Facility Partners',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
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
