import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import { about } from '@/content/about';
import { locations } from '@/content/locations';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'About',
  description:
    'Axiom Facility Partners is a premium commercial facility maintenance company serving Central Florida. Learn about our mission, values, and commitment to operational excellence.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Axiom Facility Partners"
        subtitle={about.mission}
      />

      {/* Our Story */}
      <SectionWrapper heading="Our Story">
        <div className="max-w-3xl space-y-4">
          {about.story.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-navy-700">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper
        heading="What Drives Us"
        subtitle="The principles behind every facility we maintain."
        dark
      >
        <div className="grid gap-8 md:grid-cols-2">
          {about.values.map((value) => (
            <div key={value.title} className="border-l-2 border-bronze-500 pl-6">
              <h3 className="text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Service Areas */}
      <SectionWrapper
        heading="Where We Serve"
        subtitle="Premium facility maintenance across Central Florida."
      >
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {locations.map((location) => (
            <div
              key={location.slug}
              className="rounded-sm border border-navy-100 bg-white p-6 text-center"
            >
              <p className="font-semibold text-navy-950">{location.name}</p>
              <p className="mt-1 text-sm text-navy-400">{location.state}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
