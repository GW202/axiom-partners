import type { FAQ } from '@/content/services';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Axiom Facility Partners',
    description:
      'Premium commercial facility maintenance company serving Central Florida. Specializing in office buildings, warehouses, and commercial properties.',
    url: 'https://axiomfacilitypartners.com',
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
    name: 'Axiom Facility Partners',
    description:
      'Premium commercial facility maintenance serving Central Florida.',
    url: 'https://axiomfacilitypartners.com',
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
    name: 'Axiom Facility Partners',
    description: `Premium commercial facility maintenance in ${city}, ${state}.`,
    url: `https://axiomfacilitypartners.com/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state === 'Florida' ? 'FL' : state,
      addressCountry: 'US',
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
      name: 'Axiom Facility Partners',
    },
    url: `https://axiomfacilitypartners.com/services/${service.slug}`,
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
