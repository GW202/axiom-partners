import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { locations } from '@/content/locations';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Service Areas | Commercial Cleaning Locations in Central Florida',
  description:
    'Axiom Facility Partners provides commercial cleaning and janitorial services across Central Florida — Orlando, Tampa, Lake Mary, Sanford, Winter Park, Kissimmee, Melbourne, and 15+ cities. Find commercial cleaning near you.',
  path: '/locations',
  keywords: [
    'commercial cleaning service near me',
    'janitorial service Central Florida',
    'Orlando commercial cleaning',
    'Tampa commercial cleaning',
    'Winter Park cleaning services',
    'Lake Mary janitorial services',
    'Central Florida janitorial company',
    'commercial cleaning company near me',
    'Axiom Facility Partners locations',
  ],
});

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Locations', href: '/locations' },
            ])
          ),
        }}
      />

      <Hero
        title="Commercial Cleaning Service Areas"
        subtitle="Axiom Facility Partners provides commercial cleaning and janitorial services across 20+ cities in Central Florida — from Orlando and Tampa to Melbourne and Ocala. Find our commercial cleaning services in your area."
        badge="Commercial Cleaning — Central Florida"
      />

      <SectionWrapper
        heading="Our Locations"
        subtitle="Select a city to learn about our facility maintenance services in your area."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, i) => (
            <AnimatedSection key={location.slug} delay={i * 0.06}>
              <Link
                href={`/locations/${location.slug}`}
                className="gradient-border group block rounded-xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-200/30"
              >
                <div className="mb-3 flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-bronze-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wider text-navy-400">
                    {location.state}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
                  {location.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500 line-clamp-3">
                  {location.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-600">
                  View services
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
