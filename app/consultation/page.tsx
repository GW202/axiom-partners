import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ConsultationForm from '@/components/ui/ConsultationForm';
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
  ogImage: '/worker-cleaning.jpg',
  ogImageAlt: 'Axiom Facility Partners professional cleaning a commercial office surface',
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
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            <p className="text-base leading-relaxed text-navy-600">
              Our consultation process is designed to understand your facility
              before we propose solutions. Here&apos;s what the process looks
              like:
            </p>
            <div className="space-y-5 pt-4">
            {[
              {
                step: '01',
                title: 'Initial Conversation',
                description:
                  'We discuss your facility type, current challenges, and what you need from a maintenance partner.',
              },
              {
                step: '02',
                title: 'Facility Assessment',
                description:
                  'We walk your facility to understand the layout, surface types, traffic patterns, and specific maintenance requirements.',
              },
              {
                step: '03',
                title: 'Custom Proposal',
                description:
                  'We present a tailored maintenance program with clear scope, pricing, and service expectations — no hidden fees or vague deliverables.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="flex items-start gap-5 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-950 text-xs font-bold text-bronze-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          </div>
          <AnimatedSection delay={0.3} className="hidden lg:block lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/worker-cleaning.jpg"
                alt="Axiom Facility Partners professional cleaning a commercial office desk surface with professional-grade disinfectant"
                width={800}
                height={1200}
                className="h-full w-full object-cover"
                quality={85}
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Start Your Consultation"
        subtitle="Fill out the form below and our team will be in touch within one business day."
      >
        <div className="mx-auto max-w-2xl">
          <AnimatedSection>
            <div className="rounded-xl border border-navy-100 bg-white p-8 shadow-sm sm:p-10">
              <ConsultationForm />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </>
  );
}
