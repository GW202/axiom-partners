import type { Metadata } from 'next';

const SITE_NAME = 'Axiom Facility Partners';
const SITE_URL = 'https://axiomfacilitypartners.com';
const DEFAULT_DESCRIPTION =
  'Axiom Facility Partners is a commercial cleaning service and janitorial company in Orlando, FL. Office building cleaning, warehouse cleaning, facilities management, day porter services, floor care, and disinfection for commercial properties across Central Florida.';
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
  const dynamicOgUrl = title
    ? `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description || '')}`
    : undefined;
  const image = ogImage || dynamicOgUrl || DEFAULT_OG_IMAGE;
  const imageAlt = ogImageAlt || `${title || SITE_NAME} — Commercial Cleaning & Facility Maintenance`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? [
      'commercial cleaning service',
      'janitorial service',
      'office building cleaning',
      'commercial facility maintenance',
      'Central Florida',
      'Orlando FL',
      'facility management',
      'janitorial company',
      'building maintenance',
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
      languages: {
        'en-US': url,
        'x-default': url,
      },
    },
  };
}
