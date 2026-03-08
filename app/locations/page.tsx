import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import { locations } from '@/content/locations';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Service Areas',
  description:
    'Axiom Facility Partners provides commercial facility maintenance across Central Florida including Orlando, Lake Mary, Sanford, Winter Park, and Tampa.',
  path: '/locations',
  keywords: [
    'Central Florida commercial cleaning',
    'Orlando facility maintenance',
    'Tampa facility maintenance',
    'Winter Park cleaning services',
    'Lake Mary janitorial services',
    'Sanford warehouse cleaning',
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
        title="Service Areas"
        subtitle="Premium commercial facility maintenance across Central Florida. We serve Orlando and the surrounding metro area with the same standard of excellence at every location."
      />

      <SectionWrapper
        heading="Our Locations"
        subtitle="Select a city to learn about our facility maintenance services in your area."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group rounded-sm border border-navy-100 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-navy-950 group-hover:text-bronze-600">
                {location.name}
              </h3>
              <p className="mt-1 text-sm text-navy-400">{location.state}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-600 line-clamp-3">
                {location.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-bronze-600">
                View services &rarr;
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
