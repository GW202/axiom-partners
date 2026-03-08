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
    logo: `${SITE_URL}/logo-vertical.jpg`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: '+14075550100',
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
    telephone: '+14075550100',
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
    telephone: '+14075550100',
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
    provider: {
      '@type': 'Organization',
      name: ORG_NAME,
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
