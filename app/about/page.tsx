import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { about } from '@/content/about';
import { locations } from '@/content/locations';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'About',
  description:
    'Axiom Facility Partners is a premium commercial facility maintenance company serving Central Florida. Learn about our mission, values, and commitment to operational excellence.',
  path: '/about',
  keywords: [
    'about Axiom Facility Partners',
    'commercial facility maintenance company',
    'Central Florida facility management',
    'premium cleaning company',
    'facility maintenance values',
  ],
  ogImage: '/team-photo.jpg',
  ogImageAlt: 'Axiom Facility Partners professional cleaning team in branded navy uniforms',
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
            ])
          ),
        }}
      />

      <Hero
        title="About Axiom Facility Partners"
        subtitle={about.mission}
        badge="Our Mission"
      />

      {/* Our Story */}
      <SectionWrapper heading="Our Story">
        <div className="max-w-3xl space-y-5">
          {about.story.map((paragraph, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-navy-600">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Photo */}
      <SectionWrapper heading="Our Team">
        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/team-photo.jpg"
              alt="The Axiom Facility Partners team — professional commercial cleaning crew in branded navy uniforms with equipment at our Orlando, Florida facility"
              width={1400}
              height={933}
              className="w-full object-cover"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
          <p className="mt-4 text-center text-sm text-navy-400">
            Our trained facility maintenance professionals delivering premium service across Central Florida.
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper
        heading="What Drives Us"
        subtitle="The principles behind every facility we maintain."
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          {about.values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-8 transition-all duration-500 hover:border-bronze-400/20 hover:bg-white/[0.04]">
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-bronze-400 to-bronze-600" />
                <h3 className="text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Service Areas */}
      <SectionWrapper
        heading="Where We Serve"
        subtitle="Premium facility maintenance across Central Florida."
      >
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {locations.map((location, i) => (
            <AnimatedSection key={location.slug} delay={i * 0.05}>
              <Link
                href={`/locations/${location.slug}`}
                className="group block rounded-lg border border-navy-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-md"
              >
                <p className="font-semibold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
                  {location.name}
                </p>
                <p className="mt-1 text-sm text-navy-400">{location.state}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <Testimonials />

      <CTASection />
    </>
  );
}
