import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'Insights',
  description:
    'Facility maintenance insights, industry knowledge, and operational best practices from Axiom Facility Partners.',
  path: '/insights',
  keywords: [
    'facility maintenance insights',
    'commercial cleaning best practices',
    'facility management knowledge',
    'operational excellence',
    'building maintenance tips',
  ],
});

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Insights', href: '/insights' },
            ])
          ),
        }}
      />

      <Hero
        title="Insights"
        subtitle="Facility maintenance knowledge, industry perspectives, and operational best practices from the Axiom team."
      />

      <SectionWrapper heading="Coming Soon">
        <div className="max-w-2xl">
          <p className="text-base leading-relaxed text-navy-700">
            We&apos;re building a knowledge hub with practical insights on
            facility maintenance, cost optimization, and operational best
            practices for commercial property professionals. Check back soon.
          </p>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
