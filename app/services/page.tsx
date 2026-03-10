import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/content/services';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'Commercial Cleaning Services | Janitorial & Facility Maintenance',
  description:
    'Axiom Facility Partners provides commercial cleaning services in Orlando & Central Florida: office building cleaning, warehouse cleaning, janitorial services, day porter, floor care maintenance, and disinfection protocols. Call (407) 342-3195.',
  path: '/services',
  keywords: [
    'commercial cleaning services Orlando',
    'janitorial services Central Florida',
    'office building cleaning',
    'warehouse cleaning service',
    'day porter services',
    'floor care maintenance',
    'disinfection protocols',
    'facility maintenance services',
    'commercial cleaning company Orlando FL',
    'Axiom Facility Partners',
  ],
  ogImage: '/team-action.jpg',
  ogImageAlt: 'Axiom Facility Partners team performing commercial cleaning services — surface disinfection, vacuuming, and sanitization',
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
        title="Commercial Cleaning & Janitorial Services"
        subtitle="Axiom Facility Partners provides comprehensive commercial cleaning and janitorial services for office buildings, warehouses, and commercial properties across Orlando and Central Florida. Every program is tailored to your facility's specific requirements."
        badge="Commercial Cleaning Services — Orlando, FL"
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

      {/* Service in Action */}
      <SectionWrapper
        heading="Service in Action"
        subtitle="Our trained professionals delivering precision facility maintenance across commercial properties."
        dark
      >
        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/team-action.jpg"
              alt="Axiom Facility Partners team in action — Orlando commercial cleaning professionals performing surface disinfection, floor vacuuming, and conference table sanitization in a Central Florida office"
              width={1400}
              height={933}
              className="w-full object-cover"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
