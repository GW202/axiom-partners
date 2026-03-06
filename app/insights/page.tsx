import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import InsightCard from '@/components/ui/InsightCard';
import { insights } from '@/content/insights';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Insights',
  description:
    'Facility maintenance insights, industry knowledge, and operational best practices from Axiom Facility Partners.',
  path: '/insights',
});

export default function InsightsPage() {
  return (
    <>
      <Hero
        title="Insights"
        subtitle="Facility maintenance knowledge, industry perspectives, and operational best practices from the Axiom team."
      />

      <SectionWrapper
        heading="Knowledge Hub"
        subtitle="Practical guidance for property managers, facility directors, and operations leaders."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard
              key={insight.slug}
              title={insight.title}
              description={insight.description}
              category={insight.category}
              readTime={insight.readTime}
              href={`/insights/${insight.slug}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
