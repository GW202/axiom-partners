import type { Metadata } from 'next';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { strategicFAQs } from '@/content/faqs';
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'FAQ | Commercial Cleaning & Janitorial Service Questions',
  description:
    'Frequently asked questions about Axiom Facility Partners — commercial cleaning service pricing, janitorial staff vetting, quality assurance, emergency response, sustainability, and facility maintenance in Orlando & Central Florida.',
  alternates: {
    canonical: 'https://axiomfacilitypartners.com/faq',
  },
  keywords: [
    'commercial cleaning FAQ',
    'janitorial service questions',
    'facility maintenance pricing',
    'commercial cleaning cost',
    'janitorial company Orlando',
    'Axiom Facility Partners FAQ',
  ],
};

export default function FAQPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(strategicFAQs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSpeakableSchema('/faq')),
        }}
      />

      <SectionWrapper
        heading="Frequently Asked Questions"
        subtitle="Answers to the most important questions facility managers and property owners ask before choosing a maintenance partner."
      >
        <div className="mx-auto max-w-3xl">
          <FAQAccordion faqs={strategicFAQs} />
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
