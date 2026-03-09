import Link from 'next/link';
import Image from 'next/image';
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
            <Image
              src="/logo.png"
              alt="Axiom Facility Partners"
              width={689}
              height={577}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-sm leading-relaxed text-navy-400">
              Premium commercial facility maintenance protecting your building
              assets with operational excellence across Central Florida.
            </p>
            <a href="tel:+14072946601" className="mt-6 flex items-center gap-2 text-sm text-navy-300 transition-colors duration-300 hover:text-white">
              <svg className="h-4 w-4 text-bronze-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>(407) 294-6601</span>
            </a>
            <a href="mailto:info@axiomfacilitypartners.com" className="mt-3 flex items-center gap-2 text-sm text-navy-300 transition-colors duration-300 hover:text-white">
              <svg className="h-4 w-4 text-bronze-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>info@axiomfacilitypartners.com</span>
            </a>
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
                <Link
                  key={loc}
                  href={`/locations/${loc.toLowerCase().replace(/\s+/g, '-')}`}
                  className="rounded-md border border-navy-800 bg-navy-900/50 px-2.5 py-1 text-xs text-navy-400 transition-colors duration-300 hover:border-bronze-400/30 hover:text-white"
                >
                  {loc}
                </Link>
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
