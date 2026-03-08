import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { locations } from '@/content/locations';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
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
      />

      {/* Services Available */}
      <SectionWrapper
        heading={`Services in ${location.name}`}
        subtitle="Comprehensive facility maintenance programs available in your area."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cityServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
            />
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
          {cityIndustries.map((industry) => (
            <div
              key={industry.slug}
              className="rounded-sm border border-navy-700 bg-navy-900 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
