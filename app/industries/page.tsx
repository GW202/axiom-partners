import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { industries } from '@/content/industries';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Industries We Serve',
  description:
    'Specialized facility maintenance programs for corporate offices, logistics warehouses, commercial property management, and medical offices in Central Florida.',
  path: '/industries',
  keywords: [
    'corporate office cleaning',
    'warehouse cleaning',
    'medical office cleaning',
    'commercial property management',
    'facility maintenance by industry',
    'Central Florida',
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Industries', href: '/industries' },
            ])
          ),
        }}
      />

      <Hero
        title="Industries We Serve"
        subtitle="Specialized facility maintenance programs designed for the unique demands of each industry we serve."
        badge="Industry Focus"
      />

      <SectionWrapper
        heading="Industry Expertise"
        subtitle="We don't offer one-size-fits-all cleaning. Every industry has specific requirements, and we build programs accordingly."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.slug} delay={i * 0.1}>
              <Link
                href={`/industries/${industry.slug}`}
                className="gradient-border group block rounded-xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-200/30"
              >
                <h3 className="text-lg font-semibold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {industry.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-600">
                  Learn more
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
