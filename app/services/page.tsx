import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/content/services';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'Our Services',
  description:
    'Comprehensive commercial facility maintenance services including office cleaning, warehouse cleaning, day porter services, floor care, and disinfection protocols.',
  path: '/services',
  keywords: [
    'commercial cleaning services',
    'facility maintenance services',
    'office cleaning',
    'warehouse cleaning',
    'day porter',
    'floor care',
    'disinfection',
    'Central Florida',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
            ])
          ),
        }}
      />

      <Hero
        title="Our Services"
        subtitle="Comprehensive facility maintenance programs built for commercial operations that demand reliability, precision, and asset protection."
        badge="What We Do"
      />

      <SectionWrapper
        heading="Commercial Facility Maintenance"
        subtitle="Every service program is tailored to your facility's specific requirements, operating schedule, and quality standards."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.08}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
