import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
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
    title: `${industry.title} Cleaning & Facility Maintenance | Orlando, FL`,
    description: `Commercial cleaning and facility maintenance for ${industry.title.toLowerCase()} in Orlando & Central Florida. ${industry.description} Axiom Facility Partners — call (407) 342-3195.`,
    path: `/industries/${industry.slug}`,
    keywords: [
      `${industry.title.toLowerCase()} cleaning service`,
      `${industry.title.toLowerCase()} facility maintenance`,
      `${industry.title.toLowerCase()} janitorial service`,
      `${industry.title.toLowerCase()} cleaning Orlando`,
      'commercial cleaning service',
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

      <Hero
        title={`${industry.title} Cleaning & Maintenance`}
        subtitle={industry.description}
        badge={`${industry.title} — Commercial Cleaning`}
      />

      {/* Overview */}
      <SectionWrapper heading="Industry Overview">
        <div className="max-w-3xl space-y-5" data-speakable>
          {industry.longDescription.map((paragraph, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-navy-600">
                {paragraph}
              </p>
            </AnimatedSection>
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
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card flex items-start gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-white/[0.04]">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-bronze-400/15">
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-bronze-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-navy-200">
                  {challenge}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Related Services */}
      <SectionWrapper
        heading="Related Services"
        subtitle="Facility maintenance programs relevant to this industry."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service, i) => (
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

      <CTASection />
    </>
  );
}
