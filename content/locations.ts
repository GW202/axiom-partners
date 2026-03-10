export interface Location {
  slug: string;
  name: string;
  state: string;
  description: string;
  services: string[];
  industries: string[];
}

export const locations: Location[] = [
  {
    slug: 'orlando',
    name: 'Orlando',
    state: 'Florida',
    description:
      'As Central Florida\'s largest metropolitan area, Orlando is home to thousands of commercial properties requiring professional facility maintenance. From downtown corporate towers to industrial parks along the I-4 corridor, Axiom Facility Partners delivers premium maintenance services to Orlando\'s diverse commercial landscape.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'facilities-management',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'lake-mary',
    name: 'Lake Mary',
    state: 'Florida',
    description:
      'Lake Mary has become one of Central Florida\'s premier corporate corridors, with major employers and Class A office developments concentrated along the I-4 and Lake Mary Boulevard corridors. Axiom Facility Partners provides tailored maintenance programs for Lake Mary\'s growing commercial business community.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'sanford',
    name: 'Sanford',
    state: 'Florida',
    description:
      'Sanford\'s strategic location near the Port of Sanford and major transportation routes makes it a hub for logistics, distribution, and industrial operations. Axiom Facility Partners serves Sanford\'s warehouse and commercial facilities with industrial-grade maintenance programs.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
    ],
    industries: [
      'logistics-warehouses',
      'commercial-property-management',
      'corporate-offices',
    ],
  },
  {
    slug: 'winter-park',
    name: 'Winter Park',
    state: 'Florida',
    description:
      'Winter Park\'s upscale commercial district demands the highest standards of facility presentation. From boutique office buildings to medical practices along Aloma Avenue, Axiom Facility Partners maintains the premium standard that Winter Park businesses and their clientele expect.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'medical-offices',
      'commercial-property-management',
    ],
  },
  {
    slug: 'tampa',
    name: 'Tampa',
    state: 'Florida',
    description:
      'Tampa\'s booming commercial real estate market and expanding logistics sector create strong demand for professional facility maintenance. Axiom Facility Partners extends our Central Florida operations to serve Tampa\'s commercial office buildings, distribution centers, and medical facilities.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'facilities-management',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'winter-garden',
    name: 'Winter Garden',
    state: 'Florida',
    description:
      'Winter Garden\'s rapid growth along the West Orange corridor has brought new commercial developments, medical offices, and retail centers that require professional facility maintenance. Axiom Facility Partners serves Winter Garden\'s expanding commercial community with tailored maintenance programs.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'windermere',
    name: 'Windermere',
    state: 'Florida',
    description:
      'Windermere\'s prestigious commercial and professional office spaces demand the highest caliber of facility maintenance. Axiom Facility Partners delivers premium service standards that match the expectations of Windermere\'s discerning business community.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'medical-offices',
      'commercial-property-management',
    ],
  },
  {
    slug: 'ocoee',
    name: 'Ocoee',
    state: 'Florida',
    description:
      'Ocoee\'s strategic position along the Florida Turnpike and State Road 50 corridor makes it a growing hub for commercial and industrial development. Axiom Facility Partners provides comprehensive facility maintenance for Ocoee\'s office parks, warehouses, and commercial properties.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
    ],
  },
  {
    slug: 'clermont',
    name: 'Clermont',
    state: 'Florida',
    description:
      'Clermont\'s booming growth in South Lake County has driven significant commercial development, from professional office buildings to medical facilities and retail centers. Axiom Facility Partners brings premium facility maintenance to Clermont\'s expanding commercial market.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'apopka',
    name: 'Apopka',
    state: 'Florida',
    description:
      'Apopka\'s mix of industrial, commercial, and agricultural operations creates diverse facility maintenance needs. Axiom Facility Partners serves Apopka\'s warehouse districts, office parks, and commercial properties with reliable, professional maintenance programs.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
    ],
    industries: [
      'logistics-warehouses',
      'corporate-offices',
      'commercial-property-management',
    ],
  },
  {
    slug: 'maitland',
    name: 'Maitland',
    state: 'Florida',
    description:
      'Maitland\'s Maitland Center business park and surrounding corridors house some of Central Florida\'s most prominent corporate offices, financial firms, and professional services companies. Axiom Facility Partners delivers premium facility maintenance tailored to Maitland\'s Class A office environments and executive suites.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'altamonte-springs',
    name: 'Altamonte Springs',
    state: 'Florida',
    description:
      'Altamonte Springs is a thriving commercial hub along the I-4 corridor with a strong mix of corporate offices, medical facilities, and retail centers concentrated around Altamonte Mall and the Cranes Roost district. Axiom Facility Partners provides comprehensive facility maintenance for Altamonte Springs\' diverse commercial properties.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'oviedo',
    name: 'Oviedo',
    state: 'Florida',
    description:
      'Oviedo\'s rapidly expanding commercial landscape includes modern office developments, medical centers, and retail properties serving the growing east Seminole County corridor. Axiom Facility Partners brings professional facility maintenance to Oviedo\'s new-build commercial spaces and established business parks.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'doctor-phillips',
    name: 'Doctor Phillips',
    state: 'Florida',
    description:
      'Doctor Phillips is one of Orlando\'s most affluent commercial and professional districts, home to premium office buildings, medical practices, and high-end retail spaces along Sand Lake Road and the Restaurant Row corridor. Axiom Facility Partners delivers the elevated maintenance standards that Doctor Phillips businesses demand.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'medical-offices',
      'commercial-property-management',
    ],
  },
  {
    slug: 'lake-nona',
    name: 'Lake Nona',
    state: 'Florida',
    description:
      'Lake Nona is Central Florida\'s fastest-growing planned community and innovation hub, anchored by Medical City and the USTA National Campus. The area\'s cutting-edge office buildings, medical facilities, and technology campuses require the advanced facility maintenance programs Axiom Facility Partners delivers.',
    services: [
      'office-building-cleaning',
      'facilities-management',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'medical-offices',
      'commercial-property-management',
    ],
  },
  {
    slug: 'longwood',
    name: 'Longwood',
    state: 'Florida',
    description:
      'Longwood\'s commercial corridor along State Road 434 and the I-4 interchange supports a healthy mix of professional offices, medical facilities, and industrial properties. Axiom Facility Partners provides reliable facility maintenance programs for Longwood\'s established business community.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
    ],
  },
  {
    slug: 'casselberry',
    name: 'Casselberry',
    state: 'Florida',
    description:
      'Casselberry\'s central Seminole County location makes it a convenient commercial hub with office parks, medical offices, and light industrial properties along the US-17/92 corridor. Axiom Facility Partners serves Casselberry\'s commercial facilities with consistent, professional maintenance programs.',
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'kissimmee',
    name: 'Kissimmee',
    state: 'Florida',
    description:
      'Kissimmee\'s position along the US-192 corridor and proximity to major tourism infrastructure drives strong demand for commercial facility maintenance. From hospitality-adjacent office complexes to distribution centers serving the tourism corridor, Axiom Facility Partners delivers reliable maintenance programs to Kissimmee\'s diverse commercial properties.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'melbourne',
    name: 'Melbourne',
    state: 'Florida',
    description:
      'Melbourne\'s Space Coast location attracts aerospace, defense, and technology companies that demand exacting facility maintenance standards. Axiom Facility Partners serves Melbourne\'s advanced manufacturing facilities, corporate offices, and medical complexes with precision-driven maintenance programs built for high-standard environments.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'facilities-management',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'ocala',
    name: 'Ocala',
    state: 'Florida',
    description:
      'Ocala\'s growing distribution and logistics sector along the I-75 corridor, combined with expanding medical and professional services, creates substantial demand for commercial facility maintenance. Axiom Facility Partners brings Central Florida\'s premium maintenance standards to Ocala\'s commercial buildings, warehouses, and healthcare facilities.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'logistics-warehouses',
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'lakeland',
    name: 'Lakeland',
    state: 'Florida',
    description:
      'Lakeland\'s strategic location between Orlando and Tampa on the I-4 corridor has made it one of Florida\'s fastest-growing logistics and distribution markets. Axiom Facility Partners provides industrial-grade warehouse maintenance, corporate office cleaning, and commercial facility programs for Lakeland\'s booming business community.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'facilities-management',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'logistics-warehouses',
      'corporate-offices',
      'commercial-property-management',
      'medical-offices',
    ],
  },
  {
    slug: 'daytona-beach',
    name: 'Daytona Beach',
    state: 'Florida',
    description:
      'Daytona Beach\'s commercial and professional services sector, anchored by healthcare facilities, corporate offices, and growing logistics operations along the I-95 corridor, requires reliable facility maintenance. Axiom Facility Partners extends premium maintenance services to Daytona Beach\'s diverse commercial portfolio.',
    services: [
      'office-building-cleaning',
      'warehouse-facility-cleaning',
      'day-porter-services',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
    industries: [
      'corporate-offices',
      'logistics-warehouses',
      'commercial-property-management',
      'medical-offices',
    ],
  },
];
