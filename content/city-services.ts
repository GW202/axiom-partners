/**
 * City + Service landing page data model for Local SEO Domination Map.
 *
 * Each entry represents a unique city+service combination with content
 * that proves: (A) we serve the city, (B) we understand the city,
 * (C) we are part of the regional network.
 */

export interface CityServicePage {
  /** URL slug, e.g. "orlando-commercial-cleaning" */
  slug: string;
  /** City name for display */
  city: string;
  /** State abbreviation */
  state: string;
  /** Service display name */
  service: string;
  /** Corresponding service slug in /content/services.ts */
  serviceSlug: string;
  /** Corresponding city slug in /content/locations.ts */
  citySlug: string;
  /** Page title tag */
  title: string;
  /** Meta description */
  metaDescription: string;
  /** H1 text */
  h1: string;
  /** Intro paragraph — must mention city, neighborhoods, local context */
  intro: string;
  /** Service description contextualized for this city */
  serviceContext: string[];
  /** Local neighborhoods, business districts, corridors */
  neighborhoods: string[];
  /** Types of facilities common in this city */
  facilityTypes: string[];
  /** FAQs specific to this city+service combo */
  faqs: { question: string; answer: string }[];
  /** Nearby city slugs for cross-linking (same service) */
  nearbyCities: string[];
  /** Related service slugs for this same city */
  relatedServices: string[];
}

/* ------------------------------------------------------------------ */
/*  TIER 1 — 10 highest-priority city+service pages                   */
/* ------------------------------------------------------------------ */

export const cityServicePages: CityServicePage[] = [
  // ── ORLANDO ──────────────────────────────────────────────────────
  {
    slug: 'orlando-commercial-cleaning',
    city: 'Orlando',
    state: 'FL',
    service: 'Commercial Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'orlando',
    title: 'Commercial Cleaning in Orlando, FL',
    metaDescription:
      'Professional commercial cleaning services in Orlando, FL. Axiom Facility Partners delivers premium facility maintenance for office buildings, corporate towers, and commercial properties across the Orlando metro.',
    h1: 'Commercial Cleaning Services in Orlando, Florida',
    intro:
      'Orlando is Central Florida\'s commercial epicenter — home to thousands of office buildings, corporate headquarters, and commercial properties that require consistent, professional cleaning programs. From the high-rise towers of Downtown Orlando and the corporate campuses along International Drive to the growing business parks near Orlando International Airport, Axiom Facility Partners delivers the commercial cleaning standards that protect your facility investment and keep your tenants satisfied.',
    serviceContext: [
      'Our Orlando commercial cleaning programs are built for the specific demands of Central Florida\'s largest metro market. High-traffic lobbies, multi-tenant common areas, and executive suites all receive tailored cleaning protocols that account for Orlando\'s year-round humidity, heavy foot traffic, and the elevated presentation standards that Class A properties demand.',
      'We work with property managers, building owners, and facility directors across Orlando to deliver nightly cleaning, day porter support, and deep-clean cycles that maintain consistent building standards without disrupting tenant operations. Every program includes documented service logs, quality inspections, and a dedicated account manager.',
    ],
    neighborhoods: [
      'Downtown Orlando',
      'Central Business District',
      'International Drive corridor',
      'Millenia area',
      'MetroWest',
      'UCF Research Park area',
      'Orlando International Airport corridor',
      'Lee Road / I-4 corridor',
    ],
    facilityTypes: [
      'Class A office towers',
      'Multi-tenant commercial buildings',
      'Corporate headquarters',
      'Medical office complexes',
      'Retail and mixed-use properties',
      'Government and institutional buildings',
    ],
    faqs: [
      {
        question: 'What areas of Orlando do you provide commercial cleaning services?',
        answer:
          'We serve all of greater Orlando including Downtown, International Drive, MetroWest, Millenia, the UCF corridor, the airport district, and surrounding communities. Our teams are based in Central Florida and can respond quickly to any location across the Orlando metro.',
      },
      {
        question: 'How do you handle commercial cleaning for high-rise buildings in Downtown Orlando?',
        answer:
          'Our Downtown Orlando cleaning programs account for high-traffic lobbies, elevator cabs, multi-floor common areas, and secure tenant spaces. We coordinate with building security for after-hours access and maintain floor-by-floor cleaning scopes customized to each tenant\'s needs.',
      },
      {
        question: 'Can you provide same-day cleaning service for Orlando commercial properties?',
        answer:
          'Yes. For existing clients, we offer rapid-response cleaning for unexpected needs such as post-event cleanup, tenant move-out preparation, or emergency sanitation. Contact us to discuss your specific requirements.',
      },
    ],
    nearbyCities: [
      'winter-park-commercial-cleaning',
      'maitland-commercial-cleaning',
      'altamonte-springs-commercial-cleaning',
      'kissimmee-commercial-cleaning',
    ],
    relatedServices: [
      'orlando-office-cleaning',
      'orlando-warehouse-cleaning',
    ],
  },

  {
    slug: 'orlando-office-cleaning',
    city: 'Orlando',
    state: 'FL',
    service: 'Office Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'orlando',
    title: 'Office Cleaning in Orlando, FL',
    metaDescription:
      'Professional office cleaning services in Orlando, FL. Tailored nightly cleaning, day porter support, and deep-clean programs for Orlando office buildings and corporate spaces.',
    h1: 'Office Cleaning Services in Orlando, Florida',
    intro:
      'Orlando\'s office market spans everything from the glass towers of the Central Business District to the suburban office parks lining the I-4 corridor and beyond. Whether you manage a single-tenant corporate headquarters or a multi-floor office building with dozens of tenants, Axiom Facility Partners provides the structured, reliable office cleaning programs that keep your spaces looking professional and your tenants satisfied.',
    serviceContext: [
      'Our Orlando office cleaning programs address the full scope of daily and periodic maintenance: lobby presentation, restroom sanitation, breakroom upkeep, carpet care, and executive suite detailing. We build each program around your building\'s traffic patterns, tenant mix, and operating schedule so cleaning happens efficiently and invisibly.',
      'Orlando\'s subtropical climate brings unique challenges — tracked-in moisture, pollen infiltration, and higher humidity that accelerates restroom odor. Our protocols account for these regional factors with HEPA-filtered vacuuming, enhanced restroom ventilation schedules, and moisture-barrier entrance matting programs.',
    ],
    neighborhoods: [
      'Downtown Orlando',
      'SoDo district',
      'Maitland Center area',
      'Sand Lake Road corridor',
      'Millenia',
      'Lee Vista / Airport area',
      'Colonial Drive corridor',
    ],
    facilityTypes: [
      'Single-tenant corporate offices',
      'Multi-tenant office buildings',
      'Executive suites and coworking spaces',
      'Professional services offices',
      'Medical and dental offices',
    ],
    faqs: [
      {
        question: 'Do you offer after-hours office cleaning in Orlando?',
        answer:
          'Yes. The majority of our Orlando office cleaning programs are executed during evening and overnight hours to avoid disrupting your team during business hours. We coordinate access with building management and security.',
      },
      {
        question: 'How do you customize office cleaning for different Orlando tenants?',
        answer:
          'We conduct a detailed facility walkthrough with each property manager to understand every tenant\'s requirements — operating hours, sensitive areas, and specific cleaning preferences. We then build a floor-by-floor scope that is consistent yet customized.',
      },
      {
        question: 'What makes your Orlando office cleaning different from other providers?',
        answer:
          'Our programs include documented quality inspections, dedicated account management, and structured communication channels for real-time feedback. We focus on protecting your building\'s interior finishes and long-term asset value, not just surface-level cleaning.',
      },
    ],
    nearbyCities: [
      'winter-park-commercial-cleaning',
      'maitland-commercial-cleaning',
    ],
    relatedServices: [
      'orlando-commercial-cleaning',
      'orlando-warehouse-cleaning',
    ],
  },

  {
    slug: 'orlando-warehouse-cleaning',
    city: 'Orlando',
    state: 'FL',
    service: 'Warehouse Cleaning',
    serviceSlug: 'warehouse-facility-cleaning',
    citySlug: 'orlando',
    title: 'Warehouse Cleaning in Orlando, FL',
    metaDescription:
      'Industrial-grade warehouse cleaning services in Orlando, FL. Floor scrubbing, high-dust removal, dock area maintenance, and compliance-ready programs for Orlando distribution and logistics facilities.',
    h1: 'Warehouse Cleaning Services in Orlando, Florida',
    intro:
      'Orlando\'s position as a major logistics and distribution hub means the metro is home to millions of square feet of warehouse, fulfillment, and industrial space. From the distribution corridors near Orlando International Airport and the Florida Turnpike to the industrial parks along John Young Parkway and Orange Blossom Trail, Axiom Facility Partners delivers industrial-grade warehouse cleaning programs built for the demands of high-volume facilities.',
    serviceContext: [
      'Our Orlando warehouse cleaning programs cover the full facility: concrete and epoxy floor scrubbing, high-dust and rafter cleaning, dock area pressure washing, restroom and breakroom sanitation, and office area maintenance within warehouse environments. We use industrial ride-on scrubbers and commercial equipment sized for facilities from 25,000 to 500,000+ square feet.',
      'Central Florida\'s humidity and storm season create unique warehouse challenges — moisture infiltration, mold risk in poorly ventilated areas, and debris tracking from loading docks. Our programs include preventive protocols for these regional factors, keeping your facility compliant and your team safe.',
    ],
    neighborhoods: [
      'Airport Industrial Park',
      'Florida Turnpike corridor',
      'Orange Blossom Trail industrial area',
      'John Young Parkway corridor',
      'Taft / South Orlando distribution zone',
      'Mid-Florida Logistics Park area',
    ],
    facilityTypes: [
      'Distribution and fulfillment centers',
      'Cold storage facilities',
      'Light manufacturing plants',
      'Third-party logistics (3PL) warehouses',
      'E-commerce fulfillment facilities',
    ],
    faqs: [
      {
        question: 'What size warehouses do you clean in Orlando?',
        answer:
          'We service warehouses from 25,000 square feet to 500,000+ square feet across the Orlando metro. Our equipment fleet includes ride-on scrubbers, industrial vacuums, and pressure washing systems sized for large-format facilities.',
      },
      {
        question: 'Can you clean warehouses during active operations in Orlando?',
        answer:
          'Yes. We regularly execute cleaning programs in active distribution and fulfillment centers. Our teams coordinate with your operations staff to work around shipping schedules, active pick paths, and equipment traffic.',
      },
      {
        question: 'Do your Orlando warehouse cleaning programs meet OSHA compliance standards?',
        answer:
          'Our programs are designed to support OSHA housekeeping compliance including slip-hazard prevention, dust control, spill management, and clear egress path maintenance. We provide documented service logs for your compliance records.',
      },
    ],
    nearbyCities: [
      'sanford-warehouse-cleaning',
      'kissimmee-commercial-cleaning',
    ],
    relatedServices: [
      'orlando-commercial-cleaning',
      'orlando-office-cleaning',
    ],
  },

  // ── WINTER PARK ──────────────────────────────────────────────────
  {
    slug: 'winter-park-commercial-cleaning',
    city: 'Winter Park',
    state: 'FL',
    service: 'Commercial Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'winter-park',
    title: 'Commercial Cleaning in Winter Park, FL',
    metaDescription:
      'Premium commercial cleaning services in Winter Park, FL. Axiom Facility Partners maintains the elevated standards that Winter Park\'s boutique offices, medical practices, and commercial properties demand.',
    h1: 'Commercial Cleaning Services in Winter Park, Florida',
    intro:
      'Winter Park\'s reputation for quality extends to its commercial properties. From the boutique office buildings along Park Avenue and Aloma Avenue to the professional complexes near Winter Park Village and the Fairbanks corridor, businesses here expect a higher standard of facility presentation. Axiom Facility Partners delivers commercial cleaning programs that match the refined expectations of Winter Park\'s discerning business community.',
    serviceContext: [
      'Our Winter Park commercial cleaning programs are tailored for the city\'s predominantly professional and medical office environments. We focus on the details that matter in upscale settings: immaculate lobby presentation, pristine restrooms, executive-grade office detailing, and specialty surface care for hardwood, marble, and designer finishes common in Winter Park properties.',
      'Many Winter Park commercial buildings serve client-facing businesses — law firms, financial advisors, medical practices, and boutique consultancies — where first impressions are critical. Our cleaning protocols prioritize the visible touchpoints that shape visitor perception while protecting the high-end interior finishes that define these spaces.',
    ],
    neighborhoods: [
      'Park Avenue district',
      'Winter Park Village area',
      'Aloma Avenue corridor',
      'Fairbanks Avenue corridor',
      'Orange Avenue commercial area',
      'Winter Park Tech area',
    ],
    facilityTypes: [
      'Boutique office buildings',
      'Medical and dental practices',
      'Professional services offices',
      'Mixed-use retail and office',
      'Executive suite facilities',
    ],
    faqs: [
      {
        question: 'Do you serve small commercial properties in Winter Park?',
        answer:
          'Yes. Many of our Winter Park clients are boutique offices and single-tenant professional buildings. We tailor programs to match the scale and needs of smaller facilities without sacrificing the quality standards we bring to larger properties.',
      },
      {
        question: 'How do you handle specialty surfaces in Winter Park commercial buildings?',
        answer:
          'Winter Park properties often feature hardwood floors, marble lobbies, and designer fixtures. Our teams are trained in appropriate care methods for premium surfaces, using pH-neutral cleaners, microfiber applications, and manufacturer-recommended maintenance protocols.',
      },
      {
        question: 'Can you provide day porter services for Winter Park office buildings?',
        answer:
          'Absolutely. Day porter services are popular with Winter Park properties that want continuous daytime attention to lobbies, restrooms, and common areas. Our porters maintain real-time facility presentation throughout business hours.',
      },
    ],
    nearbyCities: [
      'orlando-commercial-cleaning',
      'maitland-commercial-cleaning',
    ],
    relatedServices: [],
  },

  // ── MAITLAND ─────────────────────────────────────────────────────
  {
    slug: 'maitland-commercial-cleaning',
    city: 'Maitland',
    state: 'FL',
    service: 'Commercial Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'maitland',
    title: 'Commercial Cleaning in Maitland, FL',
    metaDescription:
      'Professional commercial cleaning services in Maitland, FL. Axiom Facility Partners serves Maitland Center office parks, corporate campuses, and Class A commercial buildings with premium facility maintenance.',
    h1: 'Commercial Cleaning Services in Maitland, Florida',
    intro:
      'Maitland is one of Central Florida\'s most established corporate corridors, anchored by the Maitland Center office park — one of the region\'s largest Class A office complexes. With major employers in technology, finance, healthcare, and professional services calling Maitland home, the demand for consistent, high-quality commercial cleaning is constant. Axiom Facility Partners serves Maitland\'s office parks, corporate campuses, and professional buildings with the structured maintenance programs these properties require.',
    serviceContext: [
      'Our Maitland commercial cleaning programs are designed for the corporate office environments that define the area. Multi-story office buildings at Maitland Center, professional suites along Maitland Boulevard, and mixed-use properties near I-4 all receive customized cleaning scopes built around tenant density, floor configuration, and building management expectations.',
      'Maitland\'s concentration of corporate tenants means higher expectations for common area presentation, restroom standards, and after-hours cleaning reliability. Our programs deliver consistent results backed by documented quality inspections and dedicated account management — the accountability that Maitland property managers depend on.',
    ],
    neighborhoods: [
      'Maitland Center',
      'Maitland Boulevard corridor',
      'I-4 / Maitland interchange area',
      'Lake Destiny area',
      'Concourse area',
    ],
    facilityTypes: [
      'Class A office parks',
      'Corporate campus buildings',
      'Multi-tenant professional offices',
      'Financial and insurance offices',
      'Technology company headquarters',
    ],
    faqs: [
      {
        question: 'Do you serve Maitland Center office buildings?',
        answer:
          'Yes. Maitland Center is within our core service area. We currently maintain commercial properties in the Maitland office corridor and can begin service for new buildings with minimal onboarding time.',
      },
      {
        question: 'How quickly can you start commercial cleaning services in Maitland?',
        answer:
          'Most Maitland properties can be onboarded within 5-7 business days after our initial facility walkthrough. We prioritize smooth transitions for buildings changing cleaning providers.',
      },
      {
        question: 'Do you provide cleaning for both office and common areas in Maitland buildings?',
        answer:
          'Yes. Our Maitland programs cover individual tenant spaces, shared lobbies, elevators, restrooms, breakrooms, parking garages, and exterior entryways — everything under one contract with one point of contact.',
      },
    ],
    nearbyCities: [
      'winter-park-commercial-cleaning',
      'orlando-commercial-cleaning',
      'altamonte-springs-commercial-cleaning',
    ],
    relatedServices: [],
  },

  // ── LAKE MARY ────────────────────────────────────────────────────
  {
    slug: 'lake-mary-office-cleaning',
    city: 'Lake Mary',
    state: 'FL',
    service: 'Office Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'lake-mary',
    title: 'Office Cleaning in Lake Mary, FL',
    metaDescription:
      'Professional office cleaning services in Lake Mary, FL. Axiom Facility Partners serves Lake Mary\'s premier corporate campuses, professional offices, and Class A buildings with tailored cleaning programs.',
    h1: 'Office Cleaning Services in Lake Mary, Florida',
    intro:
      'Lake Mary has emerged as one of Central Florida\'s premier corporate corridors. The Lake Mary Boulevard and International Parkway corridors are home to major employers including technology firms, financial institutions, and healthcare companies occupying modern Class A office buildings. Axiom Facility Partners delivers the structured, professional office cleaning programs that Lake Mary\'s corporate community expects.',
    serviceContext: [
      'Our Lake Mary office cleaning programs are built for modern corporate environments: open floor plans, high-end conference centers, executive suites, and expansive common areas that require consistent daily maintenance. We customize every program to the specific layout, traffic patterns, and tenant requirements of your Lake Mary office building.',
      'Lake Mary\'s corporate tenants expect building services that match the quality of their facilities. Our cleaning programs include detailed restroom sanitation, breakroom maintenance, glass and surface care, and carpet programs using HEPA-filtered equipment — all documented and inspected regularly to maintain the standards Lake Mary property managers require.',
    ],
    neighborhoods: [
      'Lake Mary Boulevard corridor',
      'International Parkway area',
      'Colonial Town Park area',
      'Greenwood Boulevard corridor',
      'Heathrow area',
      'I-4 / Lake Mary interchange',
    ],
    facilityTypes: [
      'Class A corporate campuses',
      'Technology company offices',
      'Financial services offices',
      'Medical and professional suites',
      'Multi-tenant office buildings',
    ],
    faqs: [
      {
        question: 'Do you serve the Heathrow and Lake Mary corporate parks?',
        answer:
          'Yes. Heathrow and the Lake Mary Boulevard corridor are within our core service area. We serve multiple properties in the International Parkway and Lake Mary Boulevard office clusters.',
      },
      {
        question: 'What office cleaning schedule works best for Lake Mary buildings?',
        answer:
          'Most Lake Mary corporate offices prefer nightly cleaning after standard business hours. We coordinate schedules with building security and customize service frequency based on tenant density and traffic volume.',
      },
      {
        question: 'Can you provide green cleaning programs for Lake Mary offices?',
        answer:
          'Yes. We offer environmentally responsible cleaning programs using Green Seal-certified products, HEPA filtration, and sustainable waste management practices that align with corporate ESG objectives.',
      },
    ],
    nearbyCities: [
      'sanford-warehouse-cleaning',
      'altamonte-springs-commercial-cleaning',
    ],
    relatedServices: [],
  },

  // ── SANFORD ──────────────────────────────────────────────────────
  {
    slug: 'sanford-warehouse-cleaning',
    city: 'Sanford',
    state: 'FL',
    service: 'Warehouse Cleaning',
    serviceSlug: 'warehouse-facility-cleaning',
    citySlug: 'sanford',
    title: 'Warehouse Cleaning in Sanford, FL',
    metaDescription:
      'Industrial warehouse cleaning services in Sanford, FL. Floor scrubbing, high-dust removal, dock maintenance, and compliance-ready cleaning programs for Sanford\'s logistics and distribution facilities.',
    h1: 'Warehouse Cleaning Services in Sanford, Florida',
    intro:
      'Sanford\'s strategic location near the Port of Sanford, Orlando Sanford International Airport, and major transportation routes along US-17/92 and SR-46 has made it one of Central Florida\'s most important logistics and distribution hubs. From large-format distribution centers to light manufacturing operations, Sanford\'s industrial facilities require the kind of systematic, industrial-grade warehouse cleaning that Axiom Facility Partners specializes in.',
    serviceContext: [
      'Our Sanford warehouse cleaning programs address the full spectrum of industrial facility maintenance. Concrete and epoxy floor scrubbing, high-dust and overhead cleaning, dock area pressure washing, pallet racking dust removal, and restroom/breakroom sanitation are all included in our comprehensive programs.',
      'Sanford\'s industrial corridors see heavy truck traffic, loading dock activity, and seasonal volume surges that accelerate facility soiling. Our programs include flexible scheduling to accommodate peak shipping seasons and 24/7 operations, with equipment and staffing scaled to match your facility\'s square footage and activity level.',
    ],
    neighborhoods: [
      'Port of Sanford area',
      'Orlando Sanford Airport corridor',
      'US-17/92 industrial corridor',
      'SR-46 logistics zone',
      'Sanford Commerce Park',
      'Lake Monroe industrial area',
    ],
    facilityTypes: [
      'Distribution and fulfillment centers',
      'Third-party logistics (3PL) warehouses',
      'Cold storage and refrigerated facilities',
      'Light manufacturing operations',
      'Industrial flex spaces',
    ],
    faqs: [
      {
        question: 'Can you clean warehouses near the Port of Sanford?',
        answer:
          'Yes. The Port of Sanford industrial corridor is one of our primary service areas. We currently maintain warehouse and distribution facilities throughout the Sanford logistics zone.',
      },
      {
        question: 'Do you handle warehouse floor scrubbing for large Sanford facilities?',
        answer:
          'We operate industrial ride-on scrubbers capable of maintaining warehouse floors from 25,000 to 500,000+ square feet. Our equipment fleet is sized for the large-format distribution centers common in the Sanford area.',
      },
      {
        question: 'Can you work around 24/7 warehouse operations in Sanford?',
        answer:
          'Absolutely. Many Sanford distribution facilities operate around the clock. We schedule cleaning during shift changes, low-volume periods, or designated maintenance windows to minimize operational disruption.',
      },
    ],
    nearbyCities: [
      'orlando-warehouse-cleaning',
      'lake-mary-office-cleaning',
    ],
    relatedServices: [],
  },

  // ── ALTAMONTE SPRINGS ────────────────────────────────────────────
  {
    slug: 'altamonte-springs-commercial-cleaning',
    city: 'Altamonte Springs',
    state: 'FL',
    service: 'Commercial Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'altamonte-springs',
    title: 'Commercial Cleaning in Altamonte Springs, FL',
    metaDescription:
      'Professional commercial cleaning services in Altamonte Springs, FL. Axiom Facility Partners maintains office buildings, medical facilities, and commercial properties across the Altamonte Springs I-4 corridor.',
    h1: 'Commercial Cleaning Services in Altamonte Springs, Florida',
    intro:
      'Altamonte Springs sits at a strategic crossroads of the I-4 corridor and SR-436, making it one of Central Florida\'s busiest commercial hubs. The city\'s mix of corporate offices near Cranes Roost, medical facilities along the hospital corridor, and retail properties around Altamonte Mall creates consistent demand for reliable commercial cleaning. Axiom Facility Partners serves Altamonte Springs\' diverse commercial portfolio with cleaning programs tailored to each property type.',
    serviceContext: [
      'Our Altamonte Springs commercial cleaning programs cover the full range of property types: corporate offices requiring nightly tenant-space cleaning, medical offices needing enhanced sanitation protocols, and multi-use properties demanding flexible service scopes. We customize every program to match the property\'s operating hours, traffic patterns, and management expectations.',
      'Altamonte Springs\' central location draws businesses from across the region, meaning your building\'s common areas, lobbies, and restrooms see heavy daily traffic. Our programs include enhanced high-traffic protocols, mid-day restroom checks, and rapid-response capabilities to keep your property performing at its best.',
    ],
    neighborhoods: [
      'Cranes Roost / Uptown Altamonte area',
      'SR-436 commercial corridor',
      'I-4 / Altamonte interchange',
      'Palm Springs Drive area',
      'Altamonte Mall area',
      'Douglas Avenue corridor',
    ],
    facilityTypes: [
      'Corporate office buildings',
      'Medical and dental offices',
      'Retail and mixed-use properties',
      'Professional services buildings',
      'Government offices',
    ],
    faqs: [
      {
        question: 'What types of commercial properties do you clean in Altamonte Springs?',
        answer:
          'We serve office buildings, medical facilities, retail properties, professional suites, and multi-use commercial buildings throughout Altamonte Springs. Our programs are customized for each property type.',
      },
      {
        question: 'Do you provide medical office cleaning in Altamonte Springs?',
        answer:
          'Yes. We maintain medical and dental offices in Altamonte Springs with enhanced sanitation protocols including EPA-registered disinfectants, clinical surface care, and waiting room maintenance designed for healthcare environments.',
      },
      {
        question: 'How do you handle cleaning for Altamonte Springs properties with evening business hours?',
        answer:
          'We build flexible schedules around your tenants\' operating hours. For properties with evening or weekend activity, we can shift cleaning to early morning or late-night windows that work with your building\'s specific needs.',
      },
    ],
    nearbyCities: [
      'maitland-commercial-cleaning',
      'orlando-commercial-cleaning',
      'lake-mary-office-cleaning',
    ],
    relatedServices: [],
  },

  // ── OVIEDO ───────────────────────────────────────────────────────
  {
    slug: 'oviedo-commercial-cleaning',
    city: 'Oviedo',
    state: 'FL',
    service: 'Commercial Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'oviedo',
    title: 'Commercial Cleaning in Oviedo, FL',
    metaDescription:
      'Professional commercial cleaning services in Oviedo, FL. Axiom Facility Partners provides office and commercial building cleaning for Oviedo\'s growing business community in east Seminole County.',
    h1: 'Commercial Cleaning Services in Oviedo, Florida',
    intro:
      'Oviedo\'s rapid growth in east Seminole County has brought a wave of new commercial development — modern office complexes, medical centers, and mixed-use properties serving the expanding Oviedo and University of Central Florida corridor. Axiom Facility Partners provides the professional commercial cleaning programs that Oviedo\'s new-build and established commercial properties require to maintain their competitive edge.',
    serviceContext: [
      'Our Oviedo commercial cleaning programs are designed for the area\'s evolving commercial landscape. New office developments along Oviedo Marketplace and Mitchell Hammock Road, established medical practices, and community retail centers all receive tailored cleaning programs built around their specific facility requirements and operating schedules.',
      'As Oviedo continues to grow, property managers need cleaning partners who can scale. Our programs accommodate phased occupancy, expanding tenant rosters, and evolving building needs with the operational flexibility and consistent quality that Oviedo\'s commercial community demands.',
    ],
    neighborhoods: [
      'Oviedo Marketplace area',
      'Mitchell Hammock Road corridor',
      'Alafaya Trail / UCF corridor',
      'Oviedo on the Park district',
      'Red Bug Lake Road area',
      'Tuskawilla area',
    ],
    facilityTypes: [
      'Modern office developments',
      'Medical and wellness centers',
      'Mixed-use retail and office',
      'Professional services offices',
      'Community commercial buildings',
    ],
    faqs: [
      {
        question: 'Do you serve the Oviedo and UCF area?',
        answer:
          'Yes. Our service area covers all of Oviedo and the UCF corridor including properties along Alafaya Trail, Mitchell Hammock Road, Red Bug Lake Road, and the Oviedo Marketplace area.',
      },
      {
        question: 'Can you scale cleaning as our Oviedo building adds tenants?',
        answer:
          'Absolutely. We build programs that grow with your property. As new tenants move in and occupancy increases, we adjust staffing, scope, and scheduling to maintain consistent quality across your entire building.',
      },
      {
        question: 'What cleaning certifications do your Oviedo teams hold?',
        answer:
          'Our teams follow industry-standard cleaning protocols and are trained in proper chemical handling, equipment operation, and safety procedures. We carry full liability and workers\' compensation insurance for all properties we serve.',
      },
    ],
    nearbyCities: [
      'orlando-commercial-cleaning',
      'winter-park-commercial-cleaning',
    ],
    relatedServices: [],
  },

  // ── KISSIMMEE ────────────────────────────────────────────────────
  {
    slug: 'kissimmee-commercial-cleaning',
    city: 'Kissimmee',
    state: 'FL',
    service: 'Commercial Cleaning',
    serviceSlug: 'office-building-cleaning',
    citySlug: 'kissimmee',
    title: 'Commercial Cleaning in Kissimmee, FL',
    metaDescription:
      'Professional commercial cleaning services in Kissimmee, FL. Axiom Facility Partners maintains office buildings, commercial properties, and distribution facilities along the US-192 and I-4 corridors.',
    h1: 'Commercial Cleaning Services in Kissimmee, Florida',
    intro:
      'Kissimmee\'s commercial landscape is shaped by its position along the US-192 corridor and proximity to Central Florida\'s major tourism and logistics infrastructure. From the office complexes and professional buildings near downtown Kissimmee to the distribution centers and commercial properties along the I-4 and Florida Turnpike corridors, Axiom Facility Partners delivers reliable commercial cleaning programs built for Osceola County\'s diverse commercial market.',
    serviceContext: [
      'Our Kissimmee commercial cleaning programs serve the city\'s wide range of property types: traditional office buildings, hospitality-adjacent commercial properties, medical offices along the US-192 corridor, and industrial-commercial flex facilities. Each program is tailored to the property\'s specific environment, traffic patterns, and cleaning priorities.',
      'Kissimmee\'s tourism-driven economy means many commercial properties experience variable traffic patterns and seasonal volume changes. Our programs include the scheduling flexibility and staffing scalability to maintain consistent cleaning standards year-round, even during Central Florida\'s peak seasons.',
    ],
    neighborhoods: [
      'Downtown Kissimmee',
      'US-192 / Irlo Bronson corridor',
      'I-4 / Kissimmee interchange area',
      'Florida Turnpike corridor',
      'Poinciana area',
      'Osceola Heritage Park area',
    ],
    facilityTypes: [
      'Office buildings and professional suites',
      'Commercial and retail properties',
      'Medical offices and clinics',
      'Distribution and flex facilities',
      'Hospitality-adjacent commercial properties',
    ],
    faqs: [
      {
        question: 'Do you serve commercial properties along the US-192 corridor in Kissimmee?',
        answer:
          'Yes. The US-192 / Irlo Bronson corridor is one of our active service areas in Kissimmee. We maintain commercial properties, office buildings, and professional facilities throughout the corridor and greater Osceola County.',
      },
      {
        question: 'Can you provide commercial cleaning for Kissimmee industrial-commercial flex spaces?',
        answer:
          'Yes. We clean flex facilities that combine office and warehouse components under one roof. Our teams apply appropriate cleaning protocols to each zone — office-grade cleaning for front areas and industrial methods for warehouse spaces.',
      },
      {
        question: 'How does Axiom handle seasonal cleaning demand changes in Kissimmee?',
        answer:
          'We staff and schedule proactively based on seasonal traffic patterns common in the Kissimmee market. Our flexible program structure accommodates increased cleaning frequency during peak periods without the need for contract renegotiation.',
      },
    ],
    nearbyCities: [
      'orlando-commercial-cleaning',
      'orlando-warehouse-cleaning',
    ],
    relatedServices: [],
  },
];

/* ------------------------------------------------------------------ */
/*  Helper: get a page by slug                                         */
/* ------------------------------------------------------------------ */
export function getCityServicePage(slug: string): CityServicePage | undefined {
  return cityServicePages.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Helper: get all slugs (for generateStaticParams)                   */
/* ------------------------------------------------------------------ */
export function getAllCityServiceSlugs(): string[] {
  return cityServicePages.map((p) => p.slug);
}
