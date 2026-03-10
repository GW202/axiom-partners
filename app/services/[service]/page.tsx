import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/content/services';
import { cityServicePages } from '@/content/city-services';
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
    title: `${service.title} | Commercial Cleaning Service Orlando, FL`,
    description: `${service.title} by Axiom Facility Partners in Orlando & Central Florida. ${service.description} Call (407) 342-3195 for a free consultation.`,
    path: `/services/${service.slug}`,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} Orlando`,
      `${service.title.toLowerCase()} Central Florida`,
      `${service.title.toLowerCase()} services`,
      'commercial cleaning service',
      'janitorial service',
      'commercial facility maintenance',
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

      <Hero
        title={service.title}
        subtitle={service.description}
        badge={`Commercial ${service.title} — Central Florida`}
      />

      {/* Overview */}
      <SectionWrapper heading="Overview">
        <div className="max-w-3xl space-y-5" data-speakable>
          {service.longDescription.map((paragraph, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-navy-600">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Protocols */}
      <SectionWrapper
        heading="Maintenance Protocols"
        subtitle="Our structured approach ensures consistent, documented results."
        dark
      >
        <div className="grid gap-4 md:grid-cols-2" data-speakable>
          {service.protocols.map((protocol, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card flex items-start gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-white/[0.04]">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-bronze-400/15 text-xs font-bold text-bronze-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-navy-200">
                  {protocol}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper
        heading="Benefits to Your Operation"
        subtitle="Measurable impact on your facility's performance and value."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm leading-relaxed text-navy-600">{benefit}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper heading="Frequently Asked Questions" dark>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white p-6 shadow-2xl shadow-navy-950/20 lg:p-8">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </SectionWrapper>

      {/* City-Specific Service Pages */}
      {(() => {
        const cityPages = cityServicePages.filter(
          (p) => p.serviceSlug === service.slug
        );
        if (cityPages.length === 0) return null;
        return (
          <SectionWrapper
            heading={`${service.title} by City`}
            subtitle={`Find ${service.title.toLowerCase()} services in your area.`}
          >
            <div className="flex flex-wrap gap-3">
              {cityPages.map((page) => (
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

      <CTASection />
    </>
  );
}
