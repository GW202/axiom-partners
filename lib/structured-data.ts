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
      'Premium commercial facility maintenance company serving Central Florida. Specializing in office building cleaning, warehouse cleaning, janitorial services, facilities management, and commercial property maintenance.',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: [
      `${SITE_URL}/hero-lobby.jpg`,
      `${SITE_URL}/team-photo.jpg`,
      `${SITE_URL}/team-action.jpg`,
      `${SITE_URL}/og-image.jpg`,
    ],
    telephone: config.phoneRaw,
    email: config.email,
    slogan: 'Your Facility. Our Standard.',
    knowsAbout: [
      'Commercial cleaning',
      'Janitorial services',
      'Office building cleaning',
      'Warehouse facility cleaning',
      'Facilities management',
      'Day porter services',
      'Floor care maintenance',
      'Disinfection protocols',
      'Commercial property maintenance',
      'Building maintenance',
    ],
    areaServed: {
      '@type': 'State',
      name: 'Florida',
      containedInPlace: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Facility Maintenance Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Cleaning Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Building Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warehouse Facility Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Disinfection Protocols' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Facility Maintenance Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facilities Management' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Day Porter Services' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Floor Care Maintenance' } },
          ],
        },
      ],
    },
  };
}

export function generateLocalBusinessSchema() {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    additionalType: [
      'https://schema.org/CleaningBusiness',
      'https://schema.org/LocalBusiness',
    ],
    name: config.companyName,
    description:
      'Axiom Facility Partners is a premium commercial cleaning service and janitorial company serving Central Florida. We provide office building cleaning, warehouse facility cleaning, facilities management, day porter services, floor care maintenance, and disinfection protocols for commercial properties in Orlando and surrounding cities.',
    url: SITE_URL,
    image: [
      `${SITE_URL}/team-photo.jpg`,
      `${SITE_URL}/hero-lobby.jpg`,
      `${SITE_URL}/team-action.jpg`,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    telephone: config.phoneRaw,
    email: config.email,
    priceRange: '$$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Invoice',
    slogan: 'Your Facility. Our Standard.',
    knowsAbout: [
      'Commercial cleaning',
      'Janitorial services',
      'Facilities management',
      'Building maintenance',
      'Floor care',
      'Disinfection',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.streetAddress,
      addressLocality: config.city,
      addressRegion: config.state,
      postalCode: config.postalCode,
      addressCountry: config.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5233,
      longitude: -81.3786,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: config.phoneRaw,
        email: config.email,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        telephone: config.phoneRaw,
        contactType: 'sales',
        areaServed: {
          '@type': 'State',
          name: 'Florida',
        },
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Orlando', containedInPlace: { '@type': 'State', name: 'Florida' } },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
  };
}

export function generateLocalBusinessSchemaForCity(
  city: string,
  state: string
) {
  const config = getSiteConfig();
  const stateAbbr = state === 'Florida' ? 'FL' : state;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    additionalType: 'https://schema.org/CleaningBusiness',
    name: `${config.companyName} — ${city}`,
    description: `Commercial cleaning service and janitorial company in ${city}, ${stateAbbr}. Axiom Facility Partners provides office building cleaning, warehouse cleaning, facilities management, day porter services, and floor care maintenance in ${city} and surrounding areas.`,
    url: `${SITE_URL}/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: config.phoneRaw,
    email: config.email,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: stateAbbr,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    parentOrganization: {
      '@type': 'Organization',
      name: config.companyName,
      url: SITE_URL,
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
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#localbusiness`,
      name: ORG_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${service.slug}`,
    serviceType: service.title,
    category: 'Commercial Facility Maintenance',
    areaServed: {
      '@type': 'State',
      name: 'Florida',
      containedInPlace: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'State',
        name: 'Florida',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
    termsOfService: `${SITE_URL}/terms`,
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
      'Premium commercial cleaning service and facility maintenance for office buildings, warehouses, and commercial properties in Central Florida. Janitorial services, day porter, floor care, and disinfection protocols.',
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      '@id': `${SITE_URL}/#localbusiness`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/resources?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };
}

export function generateSpeakableSchema(
  url: string,
  cssSelectors: string[] = ['h1', '[data-speakable]', '[data-answer]']
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
    isPartOf: {
      '@type': 'WebSite',
      name: ORG_NAME,
      url: SITE_URL,
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
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: ORG_NAME,
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David Hartman' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2025-01-15',
        reviewBody:
          'We went through three janitorial companies in two years before we found Axiom. The difference was immediate — our tenants stopped complaining and maintenance calls dropped by half.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jennifer Walsh' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2025-02-08',
        reviewBody:
          'Our vacancy rate on managed properties dropped from 12% to under 4% in the same year we brought Axiom on. The building presentation transformed completely.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rachel Simmons' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2025-03-22',
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
    serviceType: page.service,
    category: 'Commercial Facility Maintenance',
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#localbusiness`,
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
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'City',
        name: page.city,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
  };
}
