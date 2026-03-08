import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { industries } from '@/content/industries';
import { services } from '@/content/services';
import { generatePageMetadata } from '@/lib/metadata';
import {
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { industry: slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return generatePageMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    keywords: [
      `${industry.title.toLowerCase()} facility maintenance`,
      `${industry.title.toLowerCase()} cleaning`,
      'commercial facility maintenance',
      'Central Florida',
      'Axiom Facility Partners',
    ],
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { industry: slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedServices = services.filter((s) =>
    industry.services.includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Industries', href: '/industries' },
              { name: industry.title, href: `/industries/${industry.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableSchema(`/industries/${industry.slug}`)
          ),
        }}
      />

      <Hero title={industry.title} subtitle={industry.description} />

      {/* Overview */}
      <SectionWrapper heading="Industry Overview">
        <div className="max-w-3xl space-y-4">
          {industry.longDescription.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-navy-700">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionWrapper>

      {/* Challenges */}
      <SectionWrapper
        heading="Challenges We Solve"
        subtitle="Common facility maintenance pain points in this industry — and how Axiom addresses them."
        dark
      >
        <div className="grid gap-4 md:grid-cols-2">
          {industry.challenges.map((challenge, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-bronze-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="2 9 7 14 16 4" />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-navy-200">
                {challenge}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Related Services */}
      <SectionWrapper
        heading="Related Services"
        subtitle="Facility maintenance programs relevant to this industry."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
