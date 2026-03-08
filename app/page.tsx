import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import {
  generateWebSiteSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

const stats = [
  { value: '10+', label: 'Cities Served', detail: 'Across Central Florida' },
  { value: '5', label: 'Core Services', detail: 'Facility maintenance solutions' },
  { value: '80%+', label: 'Coverage Target', detail: 'Quality assurance standard' },
  { value: '24/7', label: 'Availability', detail: 'Flexible scheduling' },
];

const valueProps = [
  {
    title: 'Asset Protection',
    description:
      'We maintain your facility to protect the building assets that drive your property value — floors, surfaces, HVAC systems, and more.',
    icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
  {
    title: 'Operational Reliability',
    description:
      'Consistent, documented service delivery you can depend on. No missed shifts, no excuses, no surprises.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    title: 'Facility Expertise',
    description:
      'Our team understands commercial building systems. We clean with purpose, protecting what matters most to your operation.',
    icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z',
  },
  {
    title: 'Executive Accountability',
    description:
      'Direct communication with leadership. Transparent reporting. A partner who takes ownership of your facility standards.',
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
  },
];

const industryIcons: Record<string, string> = {
  'corporate-offices': 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  'logistics-warehouses': 'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
  'commercial-property-management': 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z',
  'medical-offices': 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
};

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
        badge="Central Florida's Premier Facility Partner"
      />

      {/* Stats Bar */}
      <section className="relative -mt-1 border-y border-navy-800/50 bg-navy-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-navy-800/50 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="px-4 py-8 text-center lg:py-10">
                <p className="text-gradient text-3xl font-bold lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-navy-400">{stat.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Hero Image — Premium Lobby */}
      <section className="relative overflow-hidden">
        <AnimatedSection>
          <Image
            src="/hero-lobby.jpg"
            alt="Axiom Facility Partners — premium commercial facility maintenance in a luxury building lobby"
            width={1536}
            height={1024}
            className="h-[28rem] w-full object-cover object-center lg:h-[36rem]"
            quality={85}
            priority
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-transparent" />
        </AnimatedSection>
      </section>

      {/* Services Overview */}
      <SectionWrapper
        heading="Our Services"
        subtitle="Comprehensive facility maintenance programs built for commercial operations that demand reliability and precision."
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

      {/* Why Axiom */}
      <SectionWrapper
        heading="Why Axiom"
        subtitle="We are not a cleaning vendor. We are your facility maintenance partner."
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          {valueProps.map((prop, i) => (
            <AnimatedSection key={prop.title} delay={i * 0.1}>
              <div className="glass-card group rounded-xl p-8 transition-all duration-500 hover:border-bronze-400/20 hover:bg-white/[0.04]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bronze-400/10">
                  <svg
                    className="h-6 w-6 text-bronze-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={prop.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {prop.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {prop.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper
        heading="Industries We Serve"
        subtitle="Specialized facility maintenance programs for the industries that need it most."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.slug} delay={i * 0.1}>
              <Link
                href={`/industries/${industry.slug}`}
                className="gradient-border group flex items-start gap-6 rounded-xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-200/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-950/5 transition-colors duration-300 group-hover:bg-bronze-50">
                  <svg
                    className="h-6 w-6 text-navy-400 transition-colors duration-300 group-hover:text-bronze-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={industryIcons[industry.slug] || industryIcons['corporate-offices']}
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy-950 transition-colors duration-300 group-hover:text-bronze-600">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {industry.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-600">
                    View solutions
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
