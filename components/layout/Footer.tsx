import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { getSiteConfig } from '@/lib/site-config';

const serviceLinks = [
  { href: '/services/office-building-cleaning', label: 'Office Building Cleaning' },
  { href: '/services/warehouse-facility-cleaning', label: 'Warehouse Cleaning' },
  { href: '/services/facilities-management', label: 'Facilities Management' },
  { href: '/services/day-porter-services', label: 'Day Porter Services' },
  { href: '/services/floor-care-maintenance', label: 'Floor Care' },
  { href: '/services/disinfection-protocols', label: 'Disinfection Protocols' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/locations', label: 'Locations' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/consultation', label: 'Request Consultation' },
];

/* Geographic clusters for footer service area links */
const geoClusters: { region: string; links: { href: string; label: string }[] }[] = [
  {
    region: 'Orlando Metro',
    links: [
      { href: '/orlando-commercial-cleaning', label: 'Orlando Commercial Cleaning' },
      { href: '/orlando-office-cleaning', label: 'Orlando Office Cleaning' },
      { href: '/orlando-warehouse-cleaning', label: 'Orlando Warehouse Cleaning' },
      { href: '/orlando-day-porter-services', label: 'Orlando Day Porter' },
      { href: '/orlando-floor-care-maintenance', label: 'Orlando Floor Care' },
      { href: '/orlando-disinfection-protocols', label: 'Orlando Disinfection' },
      { href: '/orlando-facilities-management', label: 'Orlando Facilities Mgmt' },
    ],
  },
  {
    region: 'North I-4 Corridor',
    links: [
      { href: '/winter-park-commercial-cleaning', label: 'Winter Park Cleaning' },
      { href: '/winter-park-office-cleaning', label: 'Winter Park Office Cleaning' },
      { href: '/maitland-commercial-cleaning', label: 'Maitland Cleaning' },
      { href: '/altamonte-springs-commercial-cleaning', label: 'Altamonte Springs' },
      { href: '/longwood-commercial-cleaning', label: 'Longwood Cleaning' },
      { href: '/casselberry-commercial-cleaning', label: 'Casselberry Cleaning' },
    ],
  },
  {
    region: 'Seminole County',
    links: [
      { href: '/lake-mary-commercial-cleaning', label: 'Lake Mary Commercial' },
      { href: '/lake-mary-office-cleaning', label: 'Lake Mary Office Cleaning' },
      { href: '/sanford-commercial-cleaning', label: 'Sanford Cleaning' },
      { href: '/sanford-warehouse-cleaning', label: 'Sanford Warehouse' },
      { href: '/oviedo-commercial-cleaning', label: 'Oviedo Cleaning' },
    ],
  },
  {
    region: 'South Orlando & I-4 West',
    links: [
      { href: '/doctor-phillips-commercial-cleaning', label: 'Doctor Phillips' },
      { href: '/lake-nona-commercial-cleaning', label: 'Lake Nona Cleaning' },
      { href: '/kissimmee-commercial-cleaning', label: 'Kissimmee Cleaning' },
      { href: '/kissimmee-warehouse-cleaning', label: 'Kissimmee Warehouse' },
      { href: '/tampa-commercial-cleaning', label: 'Tampa Cleaning' },
      { href: '/tampa-warehouse-cleaning', label: 'Tampa Warehouse' },
      { href: '/lakeland-warehouse-cleaning', label: 'Lakeland Warehouse' },
    ],
  },
];

export default function Footer() {
  const config = getSiteConfig();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt={config.companyName}
              width={689}
              height={577}
              className="h-16 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-navy-400">
              Premium commercial facility maintenance protecting your building
              assets with operational excellence across Central Florida.
            </p>
            <a href={`tel:${config.phoneRaw}`} className="mt-6 flex items-center gap-2 text-sm text-navy-300 transition-colors duration-300 hover:text-white">
              <svg className="h-4 w-4 text-bronze-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>{config.phone}</span>
            </a>
            <a href={`mailto:${config.email}`} className="mt-3 flex items-center gap-2 text-sm text-navy-300 transition-colors duration-300 hover:text-white">
              <svg className="h-4 w-4 text-bronze-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>{config.email}</span>
            </a>
            <div className="mt-3 flex items-start gap-2 text-sm text-navy-400">
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-bronze-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>{config.streetAddress}, {config.city}, {config.state} {config.postalCode}</span>
            </div>
            <p className="mt-3 text-xs text-navy-500">Mon–Fri 7:00 AM – 6:00 PM</p>
          </div>

          {/* Services */}
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-400">
              <span className="h-px w-4 bg-bronze-400/40" />
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-400">
              <span className="h-px w-4 bg-bronze-400/40" />
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-400">
              <span className="h-px w-4 bg-bronze-400/40" />
              Service Areas
            </p>
            <div className="mt-5 space-y-5">
              {geoClusters.map((cluster) => (
                <div key={cluster.region}>
                  <p className="mb-2 text-xs font-medium text-navy-300">{cluster.region}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-md border border-navy-800 bg-navy-900/50 px-2 py-0.5 text-[11px] text-navy-400 transition-colors duration-300 hover:border-bronze-400/30 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/locations"
                className="mt-2 inline-block text-xs font-medium text-bronze-400/80 transition-colors hover:text-bronze-300"
              >
                All locations &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-800/60 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-navy-500">
              &copy; {new Date().getFullYear()} {config.companyName}. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-navy-500 transition-colors duration-300 hover:text-navy-300"
              >
                Privacy Policy
              </Link>
              <span className="text-navy-700">|</span>
              <Link
                href="/terms"
                className="text-xs text-navy-500 transition-colors duration-300 hover:text-navy-300"
              >
                Terms &amp; Conditions
              </Link>
              <span className="text-navy-700">|</span>
              <Link
                href="/sitemap.xml"
                className="text-xs text-navy-500 transition-colors duration-300 hover:text-navy-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
