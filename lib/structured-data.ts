import type { FAQ } from '@/content/services';

const SITE_URL = 'https://axiomfacilitypartners.com';
const ORG_NAME = 'Axiom Facility Partners';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    description:
      'Premium commercial facility maintenance company serving Central Florida. Specializing in office buildings, warehouses, and commercial properties.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [
      `${SITE_URL}/hero-lobby.jpg`,
      `${SITE_URL}/team-photo.jpg`,
      `${SITE_URL}/team-action.jpg`,
      `${SITE_URL}/og-image.jpg`,
    ],
    telephone: '+14072946601',
    email: 'info@axiomfacilitypartners.com',
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    serviceType: [
      'Office Building Cleaning',
      'Warehouse Facility Cleaning',
      'Day Porter Services',
      'Floor Care Maintenance',
      'Disinfection Protocols',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ORG_NAME,
    description:
      'Premium commercial facility maintenance serving Central Florida.',
    url: SITE_URL,
    image: `${SITE_URL}/team-photo.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: '+14072946601',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orlando',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'City', name: 'Lake Mary' },
      { '@type': 'City', name: 'Sanford' },
      { '@type': 'City', name: 'Winter Park' },
      { '@type': 'City', name: 'Tampa' },
      { '@type': 'City', name: 'Winter Garden' },
      { '@type': 'City', name: 'Windermere' },
      { '@type': 'City', name: 'Ocoee' },
      { '@type': 'City', name: 'Clermont' },
      { '@type': 'City', name: 'Apopka' },
    ],
  };
}

export function generateLocalBusinessSchemaForCity(
  city: string,
  state: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ORG_NAME,
    description: `Premium commercial facility maintenance in ${city}, ${state}.`,
    url: `${SITE_URL}/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: '+14072946601',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state === 'Florida' ? 'FL' : state,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    image: `${SITE_URL}/team-action.jpg`,
    provider: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORG_NAME,
    url: SITE_URL,
    description:
      'Premium commercial facility maintenance for office buildings, warehouses, and commercial properties in Central Florida.',
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
    },
  };
}

export function generateSpeakableSchema(
  url: string,
  cssSelectors: string[] = ['h1', '[data-speakable]']
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: ORG_NAME,
    url: `${SITE_URL}${url}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };
}

export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ORG_NAME,
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David Hartman' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody:
          'We went through three janitorial companies in two years before we found Axiom. The difference was immediate — our tenants stopped complaining and maintenance calls dropped by half.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jennifer Walsh' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody:
          'Our vacancy rate on managed properties dropped from 12% to under 4% in the same year we brought Axiom on. The building presentation transformed completely.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rachel Simmons' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody:
          'In healthcare, clean is a regulation. Axiom treats disinfection like it matters. Their team flagged a cross-contamination risk we had been living with for months.',
      },
    ],
  };
}
