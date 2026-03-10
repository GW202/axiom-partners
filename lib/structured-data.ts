import type { FAQ } from '@/content/services';
import type { CityServicePage } from '@/content/city-services';
import { getSiteConfig } from '@/lib/site-config';

const SITE_URL = 'https://axiomfacilitypartners.com';
const ORG_NAME = 'Axiom Facility Partners';

export function generateOrganizationSchema() {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.companyName,
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
    telephone: config.phoneRaw,
    email: config.email,
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
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.companyName,
    description:
      'Premium commercial facility maintenance serving Central Florida.',
    url: SITE_URL,
    image: `${SITE_URL}/team-photo.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: config.phoneRaw,
    email: config.email,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.streetAddress,
      addressLocality: config.city,
      addressRegion: config.state,
      postalCode: config.postalCode,
      addressCountry: config.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.phoneRaw,
      email: config.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'City', name: 'Winter Park' },
      { '@type': 'City', name: 'Maitland' },
      { '@type': 'City', name: 'Altamonte Springs' },
      { '@type': 'City', name: 'Lake Mary' },
      { '@type': 'City', name: 'Sanford' },
      { '@type': 'City', name: 'Oviedo' },
      { '@type': 'City', name: 'Kissimmee' },
      { '@type': 'City', name: 'Doctor Phillips' },
      { '@type': 'City', name: 'Lake Nona' },
      { '@type': 'City', name: 'Longwood' },
      { '@type': 'City', name: 'Casselberry' },
      { '@type': 'City', name: 'Tampa' },
      { '@type': 'City', name: 'Winter Garden' },
      { '@type': 'City', name: 'Windermere' },
      { '@type': 'City', name: 'Ocoee' },
      { '@type': 'City', name: 'Clermont' },
      { '@type': 'City', name: 'Apopka' },
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'City', name: 'Ocala' },
      { '@type': 'City', name: 'Lakeland' },
      { '@type': 'City', name: 'Daytona Beach' },
    ],
  };
}

export function generateLocalBusinessSchemaForCity(
  city: string,
  state: string
) {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.companyName,
    description: `Premium commercial facility maintenance in ${city}, ${state}.`,
    url: `${SITE_URL}/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: config.phoneRaw,
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

export function generateArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/resources/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    keywords: post.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/resources/${post.slug}`,
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

export function generateCityServiceSchema(page: CityServicePage) {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.service} in ${page.city}, ${page.state}`,
    description: page.metaDescription,
    url: `${SITE_URL}/${page.slug}`,
    image: `${SITE_URL}/team-action.jpg`,
    provider: {
      '@type': 'LocalBusiness',
      name: config.companyName,
      telephone: config.phoneRaw,
      email: config.email,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.streetAddress,
        addressLocality: config.city,
        addressRegion: config.state,
        postalCode: config.postalCode,
        addressCountry: config.country,
      },
    },
    areaServed: {
      '@type': 'City',
      name: page.city,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    serviceType: page.service,
  };
}
