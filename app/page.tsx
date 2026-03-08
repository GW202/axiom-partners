import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import {
  generateWebSiteSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

const valueProps = [
  {
    title: 'Asset Protection',
    description:
      'We maintain your facility to protect the building assets that drive your property value — floors, surfaces, HVAC systems, and more.',
  },
  {
    title: 'Operational Reliability',
    description:
      'Consistent, documented service delivery you can depend on. No missed shifts, no excuses, no surprises.',
  },
  {
    title: 'Facility Expertise',
    description:
      'Our team understands commercial building systems. We clean with purpose, protecting what matters most to your operation.',
  },
  {
    title: 'Executive Accountability',
    description:
      'Direct communication with leadership. Transparent reporting. A partner who takes ownership of your facility standards.',
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSpeakableSchema('/')),
        }}
      />

      <Hero
        title="Your Facility. Our Standard."
        subtitle="Axiom Facility Partners delivers premium commercial maintenance designed to protect your building assets, ensure operational continuity, and elevate your facility standards across Central Florida."
      />

      {/* Services Overview */}
      <SectionWrapper
        heading="Our Services"
        subtitle="Comprehensive facility maintenance programs built for commercial operations that demand reliability and precision."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Why Axiom */}
      <SectionWrapper
        heading="Why Axiom"
        subtitle="We are not a cleaning vendor. We are your facility maintenance partner."
        dark
      >
        <div className="grid gap-8 md:grid-cols-2">
          {valueProps.map((prop) => (
            <div key={prop.title} className="border-l-2 border-bronze-500 pl-6">
              <h3 className="text-lg font-semibold text-white">{prop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper
        heading="Industries We Serve"
        subtitle="Specialized facility maintenance programs for the industries that need it most."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.slug}
              className="rounded-sm border border-navy-100 bg-white p-8"
            >
              <h3 className="text-lg font-semibold text-navy-950">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
