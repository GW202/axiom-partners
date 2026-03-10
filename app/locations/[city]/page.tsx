import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { locations } from '@/content/locations';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import { cityServicePages } from '@/content/city-services';
import { generatePageMetadata } from '@/lib/metadata';
import {
  generateLocalBusinessSchemaForCity,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { city: slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};
  return generatePageMetadata({
    title: `Commercial Facility Maintenance ${location.name}`,
    description: `Premium commercial facility maintenance in ${location.name}, ${location.state}. Office cleaning, warehouse cleaning, day porter services, and more.`,
    path: `/locations/${location.slug}`,
    keywords: [
      `${location.name} commercial cleaning`,
      `${location.name} facility maintenance`,
      `${location.name} janitorial services`,
      `${location.state} facility management`,
      'Axiom Facility Partners',
    ],
  });
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const cityServices = services.filter((s) =>
    location.services.includes(s.slug)
  );
  const cityIndustries = industries.filter((i) =>
    location.industries.includes(i.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocalBusinessSchemaForCity(location.name, location.state)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Locations', href: '/locations' },
              {
                name: location.name,
                href: `/locations/${location.slug}`,
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableSchema(`/locations/${location.slug}`)
          ),
        }}
      />

      <Hero
        title={`${location.name} Commercial Facility Maintenance`}
        subtitle={location.description}
        badge={`Serving ${location.name}, ${location.state}`}
      />

      {/* Services Available */}
      <SectionWrapper
        heading={`Services in ${location.name}`}
        subtitle="Comprehensive facility maintenance programs available in your area."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cityServices.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.08}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries Served */}
      <SectionWrapper
        heading="Industries We Serve"
        subtitle={`Specialized facility maintenance for ${location.name}'s key industries.`}
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          {cityIndustries.map((industry, i) => (
            <AnimatedSection key={industry.slug} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-7 transition-all duration-300 hover:bg-white/[0.04]">
                <h3 className="text-lg font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {industry.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* City+Service Landing Pages */}
      {(() => {
        const cityLandingPages = cityServicePages.filter(
          (p) => p.citySlug === location.slug
        );
        if (cityLandingPages.length === 0) return null;
        return (
          <SectionWrapper
            heading={`${location.name} Service Pages`}
            subtitle={`Explore detailed information about each service we provide in ${location.name}.`}
          >
            <div className="flex flex-wrap gap-3">
              {cityLandingPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-700 shadow-sm transition-all duration-200 hover:border-bronze-300 hover:text-bronze-700 hover:shadow-md"
                >
                  {page.service} in {page.city}
                </Link>
              ))}
            </div>
          </SectionWrapper>
        );
      })()}

      {/* Nearby Cities */}
      {(() => {
        const nearbyLocations = locations
          .filter((l) => l.slug !== location.slug)
          .slice(0, 6);
        return (
          <SectionWrapper
            heading="Nearby Service Areas"
            subtitle="Axiom Facility Partners serves the entire Central Florida metro."
            dark
          >
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-navy-200 backdrop-blur-sm transition-all duration-200 hover:border-bronze-400/30 hover:text-white"
                >
                  {loc.name}, {loc.state === 'Florida' ? 'FL' : loc.state}
                </Link>
              ))}
            </div>
          </SectionWrapper>
        );
      })()}

      <CTASection />
    </>
  );
}
