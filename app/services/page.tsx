import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/content/services';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Our Services',
  description:
    'Comprehensive commercial facility maintenance services including office cleaning, warehouse cleaning, day porter services, floor care, and disinfection protocols.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive facility maintenance programs built for commercial operations that demand reliability, precision, and asset protection."
      />

      <SectionWrapper
        heading="Commercial Facility Maintenance"
        subtitle="Every service program is tailored to your facility's specific requirements, operating schedule, and quality standards."
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

      <CTASection />
    </>
  );
}
