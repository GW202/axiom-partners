import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'Request a Facility Consultation',
  description:
    'Schedule a consultation with Axiom Facility Partners. We\'ll assess your facility needs and design a maintenance program built for your operation.',
  path: '/consultation',
  keywords: [
    'facility consultation',
    'commercial cleaning quote',
    'facility maintenance assessment',
    'Central Florida facility services',
    'free facility consultation',
  ],
});

export default function ConsultationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Consultation', href: '/consultation' },
            ])
          ),
        }}
      />

      <Hero
        title="Request a Facility Consultation"
        subtitle="Tell us about your facility and we'll design a maintenance program built for your operation. No obligation, no pressure — just a straightforward conversation about what your building needs."
        ctaText="Call Us: (407) 555-0100"
        ctaHref="tel:+14075550100"
      />

      <SectionWrapper heading="What to Expect">
        <div className="max-w-2xl space-y-4">
          <p className="text-base leading-relaxed text-navy-700">
            Our consultation process is designed to understand your facility
            before we propose solutions. Here&apos;s what the process looks
            like:
          </p>
          <div className="space-y-6 pt-4">
            {[
              {
                step: '1',
                title: 'Initial Conversation',
                description:
                  'We discuss your facility type, current challenges, and what you need from a maintenance partner.',
              },
              {
                step: '2',
                title: 'Facility Assessment',
                description:
                  'We walk your facility to understand the layout, surface types, traffic patterns, and specific maintenance requirements.',
              },
              {
                step: '3',
                title: 'Custom Proposal',
                description:
                  'We present a tailored maintenance program with clear scope, pricing, and service expectations — no hidden fees or vague deliverables.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="pt-4 text-sm text-navy-500">
            Full consultation form coming soon. In the meantime, call us
            directly or reach out via email.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
