import Link from 'next/link';
import Container from './Container';

const serviceLinks = [
  { href: '/services/office-building-cleaning', label: 'Office Building Cleaning' },
  { href: '/services/warehouse-facility-cleaning', label: 'Warehouse Cleaning' },
  { href: '/services/day-porter-services', label: 'Day Porter Services' },
  { href: '/services/floor-care-maintenance', label: 'Floor Care' },
  { href: '/services/disinfection-protocols', label: 'Disinfection Protocols' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/locations', label: 'Locations' },
  { href: '/insights', label: 'Insights' },
  { href: '/consultation', label: 'Request Consultation' },
];

const locations = [
  'Orlando', 'Lake Mary', 'Sanford', 'Winter Park', 'Tampa',
  'Winter Garden', 'Windermere', 'Ocoee', 'Clermont', 'Apopka',
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bronze-600">
                <span className="text-sm font-black tracking-tighter text-white">
                  A
                </span>
              </div>
              <div>
                <p className="text-sm font-bold tracking-tight text-white">
                  AXIOM
                </p>
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-navy-400">
                  Facility Partners
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-navy-400">
              Premium commercial facility maintenance protecting your building
              assets with operational excellence across Central Florida.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-navy-300">
              <svg className="h-4 w-4 text-bronze-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>(407) 555-0100</span>
            </div>
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
            <div className="mt-5 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-md border border-navy-800 bg-navy-900/50 px-2.5 py-1 text-xs text-navy-400"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-800/60 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-navy-500">
              &copy; {new Date().getFullYear()} Axiom Facility Partners. All
              rights reserved.
            </p>
            <p className="text-xs text-navy-600">
              Serving Central Florida with operational excellence.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
