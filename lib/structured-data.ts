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
    ],
  };
}
