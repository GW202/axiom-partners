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
        width: 512,
        height: 512,
      },
    },
    keywords: post.tags.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Commercial Facility Maintenance',
      description: 'Best practices and insights for commercial cleaning, janitorial services, and facility management.',
    },
    mentions: [
      {
        '@type': 'Organization',
        name: ORG_NAME,
        url: SITE_URL,
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]', 'article'],
    },
    isPartOf: {
      '@type': 'WebSite',
      name: ORG_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/resources/${post.slug}`,
    },
    inLanguage: 'en-US',
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

export function generateHowToSchema(service: {
  title: string;
  slug: string;
  protocols: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How Axiom Performs ${service.title}`,
    description: `Step-by-step maintenance protocols for ${service.title.toLowerCase()} at commercial facilities, performed by Axiom Facility Partners.`,
    url: `${SITE_URL}/services/${service.slug}`,
    totalTime: 'PT2H',
    supply: [
      { '@type': 'HowToSupply', name: 'Commercial-grade cleaning equipment' },
      { '@type': 'HowToSupply', name: 'EPA-registered cleaning solutions' },
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Quality inspection checklist' },
      { '@type': 'HowToTool', name: 'Digital reporting system' },
    ],
    step: service.protocols.map((protocol, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Step ${i + 1}`,
      text: protocol,
      url: `${SITE_URL}/services/${service.slug}#step-${i + 1}`,
    })),
    performedBy: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Process-specific HowTo schemas for cleaning procedures             */
/* ------------------------------------------------------------------ */

export interface CleaningHowTo {
  name: string;
  description: string;
  totalTime: string;
  supplies: string[];
  tools: string[];
  steps: { name: string; text: string }[];
  serviceSlug: string;
}

const cleaningHowTos: CleaningHowTo[] = [
  {
    name: 'How to Strip and Wax VCT Commercial Floors',
    description:
      'Step-by-step professional process for stripping old wax, cleaning, and applying new finish to vinyl composition tile (VCT) floors in commercial buildings.',
    totalTime: 'PT4H',
    supplies: [
      'Chemical floor stripper (alkaline-based)',
      'Floor finish / wax (multi-coat commercial grade)',
      'Neutral pH floor cleaner',
      'Clean water for rinse passes',
    ],
    tools: [
      'Low-speed floor machine with stripping pad',
      'Wet vacuum or auto scrubber',
      'Mop and wringer bucket',
      'Floor finish applicator / flat mop',
      'Caution / wet floor signs',
    ],
    steps: [
      { name: 'Clear and prepare the area', text: 'Remove all furniture, mats, and obstructions from the floor area. Post wet floor signage and block access to the work zone.' },
      { name: 'Apply stripping solution', text: 'Dilute alkaline floor stripper per manufacturer instructions and apply generously to the floor using a mop, allowing 5-10 minutes of dwell time without letting it dry.' },
      { name: 'Agitate with floor machine', text: 'Use a low-speed floor machine (175 RPM) fitted with a black stripping pad to agitate the solution and break down the old finish. Work in overlapping passes.' },
      { name: 'Extract slurry', text: 'Use a wet vacuum or auto scrubber to pick up the dissolved finish slurry. Make multiple passes to ensure complete removal of all residue.' },
      { name: 'Rinse the floor', text: 'Mop or auto-scrub the floor with clean, pH-neutral water to remove any remaining stripper residue. Allow the floor to dry completely.' },
      { name: 'Apply first coat of finish', text: 'Apply a thin, even coat of commercial floor finish using a clean flat mop or finish applicator. Work from the farthest point toward the exit. Allow 30-45 minutes to dry.' },
      { name: 'Apply additional coats', text: 'Apply 3-5 additional coats of floor finish, allowing full drying between each coat. Apply in alternating directions for even coverage and build.' },
      { name: 'Inspect and restore access', text: 'Inspect the finished floor for evenness and coverage. Remove signage and restore furniture only after the final coat has fully cured (typically 1-2 hours).' },
    ],
    serviceSlug: 'floor-care-maintenance',
  },
  {
    name: 'How to Deep Clean a Commercial Warehouse Floor',
    description:
      'Professional process for deep cleaning industrial warehouse concrete floors using ride-on scrubbing equipment to remove embedded grime, tire marks, and contaminants.',
    totalTime: 'PT3H',
    supplies: [
      'Industrial degreaser / concrete cleaner',
      'Clean water supply',
      'Concrete densifier / sealer (optional)',
    ],
    tools: [
      'Ride-on floor scrubber with aggressive pad or brush',
      'Industrial floor sweeper',
      'Pressure washer (for dock areas)',
      'Wet vacuum for detail areas',
      'PPE: non-slip boots, safety glasses',
    ],
    steps: [
      { name: 'Pre-sweep the warehouse floor', text: 'Use an industrial ride-on sweeper to remove loose debris, dust, pallet fragments, and shrink wrap from the entire floor surface before wet cleaning.' },
      { name: 'Pre-treat heavy stains', text: 'Apply industrial degreaser directly to oil stains, tire marks, and heavily soiled areas. Allow 10-15 minutes of dwell time for the chemical to break down contaminants.' },
      { name: 'Scrub with ride-on equipment', text: 'Fill the ride-on scrubber with cleaning solution at the recommended dilution. Scrub the floor in systematic passes with 20% overlap, using aggressive pads for heavy soiling or standard pads for maintenance cleans.' },
      { name: 'Address dock and transition areas', text: 'Use a pressure washer or detail scrubber for loading dock areas, floor drains, and transitions between zones that the ride-on equipment cannot reach.' },
      { name: 'Final rinse pass', text: 'Run the scrubber with clean water only for a final rinse pass across the entire floor to remove any remaining cleaning solution residue.' },
      { name: 'Inspect and document', text: 'Walk the floor to inspect for missed areas or persistent stains. Document the completed service with photos for the facility manager\'s maintenance records.' },
    ],
    serviceSlug: 'warehouse-facility-cleaning',
  },
  {
    name: 'How to Perform Electrostatic Disinfection in an Office Building',
    description:
      'Step-by-step procedure for performing electrostatic spray disinfection of commercial office spaces using EPA-registered hospital-grade disinfectants with ATP verification.',
    totalTime: 'PT2H',
    supplies: [
      'EPA-registered hospital-grade disinfectant',
      'ATP testing swabs and luminometer',
      'Microfiber cloths for detail wiping',
    ],
    tools: [
      'Electrostatic sprayer (backpack or handheld)',
      'ATP luminometer for verification testing',
      'PPE: N95 respirator, nitrile gloves, safety glasses',
      'Documentation tablet / checklist',
    ],
    steps: [
      { name: 'Pre-clean surfaces', text: 'Wipe down visibly soiled high-touch surfaces (door handles, light switches, elevator buttons, desks) with microfiber cloths to remove dirt and organic matter that can reduce disinfectant efficacy.' },
      { name: 'Conduct baseline ATP testing', text: 'Swab 5-10 high-touch surfaces and record baseline ATP readings on the luminometer. Document surface locations, readings, and timestamps for the compliance report.' },
      { name: 'Prepare electrostatic sprayer', text: 'Fill the electrostatic sprayer tank with EPA-registered disinfectant at the manufacturer\'s recommended dilution ratio. Verify the sprayer\'s charge indicator is functioning properly.' },
      { name: 'Apply disinfectant systematically', text: 'Spray disinfectant in a systematic pattern starting from the back of each room and working toward the exit. The electrostatic charge wraps the solution around surfaces for 360-degree coverage. Maintain 4-6 feet of distance from surfaces.' },
      { name: 'Observe required dwell time', text: 'Allow the disinfectant to remain wet on surfaces for the full contact time specified on the product label (typically 2-10 minutes). Do not wipe surfaces during this period.' },
      { name: 'Post-treatment ATP testing', text: 'After dwell time, swab the same surfaces tested at baseline and record post-treatment ATP readings. Document the percentage reduction in contamination levels.' },
      { name: 'Generate compliance documentation', text: 'Complete the service report including product lot number, dilution ratio, dwell time observed, areas treated, and before/after ATP readings. Provide the report to the facility manager.' },
    ],
    serviceSlug: 'disinfection-protocols',
  },
  {
    name: 'How to Maintain Polished Concrete Floors in Commercial Buildings',
    description:
      'Ongoing maintenance protocol for preserving the reflective finish, durability, and appearance of polished concrete floors in office buildings and modern commercial spaces.',
    totalTime: 'PT1H30M',
    supplies: [
      'pH-neutral concrete floor cleaner',
      'Concrete densifier (lithium silicate)',
      'Polishing guard / surface protectant',
      'Clean water',
    ],
    tools: [
      'Microfiber dust mop (36-48 inch)',
      'Auto scrubber with non-abrasive pad',
      'High-speed burnisher (2000+ RPM)',
      'Diamond polishing pads (3000 grit)',
    ],
    steps: [
      { name: 'Daily dust mopping', text: 'Use a treated microfiber dust mop to remove fine dust, grit, and debris from the polished concrete surface. Grit left on the surface acts as an abrasive under foot traffic and accelerates finish degradation.' },
      { name: 'Wet clean with pH-neutral solution', text: 'Auto-scrub the floor with a pH-neutral cleaner specifically formulated for polished concrete. Avoid acidic or alkaline cleaners that can etch the surface and dull the finish.' },
      { name: 'Spot treat stains promptly', text: 'Address spills and stains immediately. For oil-based stains, apply a poultice or concrete-safe degreaser. For organic stains, use an enzymatic cleaner. Extended contact with contaminants can permanently stain polished concrete.' },
      { name: 'Apply densifier periodically', text: 'Every 6-12 months, apply a lithium silicate densifier to re-harden the concrete surface. This fills microscopic pores, increases stain resistance, and restores surface hardness lost through daily wear.' },
      { name: 'Burnish to restore reflectivity', text: 'Use a high-speed burnisher (2000+ RPM) with diamond-impregnated polishing pads (3000 grit) to restore the floor\'s reflective finish. Burnishing closes the surface and brings back the high-gloss appearance.' },
      { name: 'Apply guard product', text: 'Apply a polished concrete guard / surface protectant to provide a sacrificial wear layer that protects the polished surface from staining and traffic wear between maintenance cycles.' },
    ],
    serviceSlug: 'floor-care-maintenance',
  },
  {
    name: 'How to Set Up a Day Porter Program for a Commercial Building',
    description:
      'Process for establishing a professional day porter program including needs assessment, task scheduling, communication protocols, and quality assurance for multi-tenant office buildings.',
    totalTime: 'PT3H',
    supplies: [
      'Restroom consumables inventory (paper, soap, liners)',
      'Cleaning supplies (microfiber cloths, spray bottles, mop)',
      'Spill response kit',
    ],
    tools: [
      'Task checklist / digital task management system',
      'Two-way radio or messaging system',
      'Cleaning cart with organized supplies',
      'Quality inspection forms',
    ],
    steps: [
      { name: 'Conduct building walkthrough and needs assessment', text: 'Walk every floor with the property manager to identify high-traffic areas, restroom usage patterns, tenant density, common area requirements, and any special concerns. Document specific problem areas and priority zones.' },
      { name: 'Design the task schedule', text: 'Build an hourly task rotation based on the walkthrough findings. Assign restroom checks, lobby sweeps, elevator cab cleaning, breakroom resets, and common area maintenance at intervals matching traffic patterns. Front-load morning hours for high-visibility areas.' },
      { name: 'Establish communication protocols', text: 'Set up a direct communication channel between the day porter, property management, and tenants. Define how tenant requests are received, prioritized, and documented. Provide the porter with a two-way radio or mobile device for real-time coordination.' },
      { name: 'Stock and position supplies', text: 'Set up a centralized supply closet with inventory for the porter\'s shift: restroom consumables, cleaning chemicals, microfiber cloths, spill kits, and replacement supplies. Ensure the cleaning cart is organized for efficient room-to-room transitions.' },
      { name: 'Train on building-specific procedures', text: 'Train the assigned day porter on building-specific systems: alarm codes, elevator service mode, tenant-specific rules, restricted areas, emergency procedures, and communication with security staff.' },
      { name: 'Implement quality assurance inspections', text: 'Schedule weekly supervisor inspections using standardized quality forms. Inspect restrooms, lobbies, elevators, and common areas against documented standards. Review findings with the porter and property manager, adjusting the task schedule as needed.' },
    ],
    serviceSlug: 'day-porter-services',
  },
];

export function generateCleaningProcessHowToSchemas(serviceSlug: string) {
  return cleaningHowTos
    .filter((h) => h.serviceSlug === serviceSlug)
    .map((howTo) => ({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      totalTime: howTo.totalTime,
      supply: howTo.supplies.map((s) => ({
        '@type': 'HowToSupply',
        name: s,
      })),
      tool: howTo.tools.map((t) => ({
        '@type': 'HowToTool',
        name: t,
      })),
      step: howTo.steps.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
        url: `${SITE_URL}/services/${serviceSlug}#process-${i + 1}`,
      })),
      performedBy: {
        '@type': 'Organization',
        name: ORG_NAME,
        url: SITE_URL,
      },
    }));
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
