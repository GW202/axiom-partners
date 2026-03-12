import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import WhyAxiom from '@/components/sections/WhyAxiom';
import IndustriesShowcase from '@/components/sections/IndustriesShowcase';
import TrustBar from '@/components/sections/TrustBar';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import {
  generateWebSiteSchema,
  generateSpeakableSchema,
  generateReviewSchema,
} from '@/lib/structured-data';

const stats = [
  { value: '22', label: 'Cities Served', detail: 'Across Central Florida' },
  { value: '6', label: 'Core Services', detail: 'Facility maintenance solutions' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateReviewSchema()),
        }}
      />

      <Hero
        title="Your Facility. Our Standard."
        subtitle="Axiom Facility Partners is a commercial cleaning service and janitorial company in Orlando, Florida. We deliver premium facility maintenance designed to protect your building assets, ensure operational continuity, and elevate your facility standards across Central Florida."
        badge="Commercial Cleaning & Janitorial Service — Orlando, FL"
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
            alt="Axiom Facility Partners — premium commercial facility maintenance in a Central Florida luxury building lobby"
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

      {/* Services Overview — Bento grid with numbered badges & service-specific icons */}
      <ServicesShowcase services={services} />

      {/* Why Axiom — Timeline layout with alternating sides & animated connector */}
      <WhyAxiom valueProps={valueProps} />

      {/* Industries — Full-width stacked cards with gradient accent strips */}
      <IndustriesShowcase industries={industries} />

      {/* Top Service Areas — City+Service Landing Pages */}
      <SectionWrapper
        heading="Top Service Areas"
        subtitle="Professional commercial cleaning and facility maintenance across Central Florida's key markets."
        dark
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: '/orlando-commercial-cleaning', label: 'Orlando Commercial Cleaning' },
            { href: '/orlando-office-cleaning', label: 'Orlando Office Cleaning' },
            { href: '/orlando-warehouse-cleaning', label: 'Orlando Warehouse Cleaning' },
            { href: '/orlando-day-porter-services', label: 'Orlando Day Porter Services' },
            { href: '/winter-park-commercial-cleaning', label: 'Winter Park Commercial Cleaning' },
            { href: '/winter-park-office-cleaning', label: 'Winter Park Office Cleaning' },
            { href: '/maitland-commercial-cleaning', label: 'Maitland Commercial Cleaning' },
            { href: '/lake-mary-commercial-cleaning', label: 'Lake Mary Commercial Cleaning' },
            { href: '/lake-mary-office-cleaning', label: 'Lake Mary Office Cleaning' },
            { href: '/altamonte-springs-commercial-cleaning', label: 'Altamonte Springs Cleaning' },
            { href: '/sanford-warehouse-cleaning', label: 'Sanford Warehouse Cleaning' },
            { href: '/tampa-commercial-cleaning', label: 'Tampa Commercial Cleaning' },
            { href: '/tampa-warehouse-cleaning', label: 'Tampa Warehouse Cleaning' },
            { href: '/lakeland-warehouse-cleaning', label: 'Lakeland Warehouse Cleaning' },
            { href: '/lake-nona-commercial-cleaning', label: 'Lake Nona Commercial Cleaning' },
            { href: '/doctor-phillips-commercial-cleaning', label: 'Doctor Phillips Cleaning' },
            { href: '/kissimmee-commercial-cleaning', label: 'Kissimmee Commercial Cleaning' },
            { href: '/melbourne-commercial-cleaning', label: 'Melbourne Commercial Cleaning' },
          ].map((area, i) => (
            <AnimatedSection key={area.href} delay={i * 0.03}>
              <Link
                href={area.href}
                className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-navy-200 transition-all duration-300 hover:border-bronze-400/20 hover:bg-white/[0.06] hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 flex-shrink-0 text-bronze-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {area.label}
                <svg
                  aria-hidden="true"
                  className="ml-auto h-3.5 w-3.5 text-navy-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-bronze-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/locations"
            className="text-sm font-medium text-bronze-400 transition-colors hover:text-bronze-300"
          >
            View all service locations &rarr;
          </Link>
        </div>
      </SectionWrapper>

      <Testimonials />

      {/* Trust Signals — reinforces credibility after reviews */}
      <TrustBar />

      <CTASection />
    </>
  );
}
