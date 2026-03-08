import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/content/services';
import { generatePageMetadata } from '@/lib/metadata';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [
      service.title.toLowerCase(),
      'commercial facility maintenance',
      'Central Florida',
      `${service.title.toLowerCase()} services`,
      'Axiom Facility Partners',
    ],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(service.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: service.title, href: `/services/${service.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableSchema(`/services/${service.slug}`)
          ),
        }}
      />

      <Hero title={service.title} subtitle={service.description} />

      {/* Overview */}
      <SectionWrapper heading="Overview">
        <div className="max-w-3xl space-y-4">
          {service.longDescription.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-navy-700">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionWrapper>

      {/* Protocols */}
      <SectionWrapper
        heading="Maintenance Protocols"
        subtitle="Our structured approach ensures consistent, documented results."
        dark
      >
        <div className="grid gap-4 md:grid-cols-2">
          {service.protocols.map((protocol, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-bronze-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-navy-200">
                {protocol}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper
        heading="Benefits to Your Operation"
        subtitle="Measurable impact on your facility's performance and value."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit, i) => (
            <div
              key={i}
              className="border-l-2 border-bronze-500 pl-4"
            >
              <p className="text-sm leading-relaxed text-navy-700">{benefit}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper heading="Frequently Asked Questions" dark>
        <div className="mx-auto max-w-2xl rounded-sm bg-white p-6 lg:p-8">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
