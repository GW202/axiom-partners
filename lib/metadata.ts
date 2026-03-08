import type { Metadata } from 'next';

const SITE_NAME = 'Axiom Facility Partners';
const SITE_URL = 'https://axiomfacilitypartners.com';
const DEFAULT_DESCRIPTION =
  'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida. Protecting your facility assets with operational excellence.';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export function generatePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  keywords,
  ogImage,
  ogImageAlt,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const imageAlt = ogImageAlt || 'Axiom Facility Partners — Premium Commercial Facility Maintenance';

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? [
      'commercial facility maintenance',
      'office building cleaning',
      'Central Florida',
      'facility management',
      'janitorial services',
      'Axiom Facility Partners',
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
