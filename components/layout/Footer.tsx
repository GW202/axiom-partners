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

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-200">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-tight text-white">
              AXIOM
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              Premium commercial facility maintenance protecting your building
              assets with operational excellence across Central Florida.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-bronze-400">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-bronze-400">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-center text-sm text-navy-400">
            &copy; {new Date().getFullYear()} Axiom Facility Partners. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
