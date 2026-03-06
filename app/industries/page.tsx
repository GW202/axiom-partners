import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import { industries } from '@/content/industries';
import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Industries We Serve',
  description:
    'Specialized facility maintenance programs for corporate offices, logistics warehouses, commercial property management, and medical offices in Central Florida.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Industries We Serve"
        subtitle="Specialized facility maintenance programs designed for the unique demands of each industry we serve."
      />

      <SectionWrapper
        heading="Industry Expertise"
        subtitle="We don't offer one-size-fits-all cleaning. Every industry has specific requirements, and we build programs accordingly."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-sm border border-navy-100 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-navy-950 group-hover:text-bronze-600">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                {industry.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-bronze-600">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
