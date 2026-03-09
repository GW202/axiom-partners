import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description:
    'Axiom Facility Partners Terms and Conditions. Review the terms governing use of our website and services.',
  path: '/terms',
});

const sections = [
  {
    heading: '1. Acceptance of Terms',
    content:
      'By accessing or using the Axiom Facility Partners website and services, you agree to be bound by these Terms and Conditions.\n\nIf you do not agree with these terms, you should not use this website.',
  },
  {
    heading: '2. Description of Services',
    content:
      'Axiom Facility Partners provides professional commercial facility services, consultation, and related technology platforms designed to support facility operations and asset protection.\n\nServices may include:',
    items: [
      'Commercial facility maintenance',
      'Operational consultation',
      'Digital reporting and analytics tools',
      'Platform access for facility intelligence',
    ],
    after:
      'All services are provided subject to separate service agreements where applicable.',
  },
  {
    heading: '3. Use of the Website',
    content: 'Users agree to use the website only for lawful purposes. You agree not to:',
    items: [
      'Violate any applicable laws or regulations',
      'Attempt unauthorized access to systems or data',
      'Interfere with website functionality',
      'Use automated scraping tools without permission',
      'Transmit malicious code or harmful content',
    ],
  },
  {
    heading: '4. Intellectual Property',
    content:
      'All content on this website including text, graphics, branding, logos, software, and design elements is the property of Axiom Facility Partners or its licensors.\n\nThese materials are protected by intellectual property laws and may not be copied, distributed, or reproduced without prior written permission.',
  },
  {
    heading: '5. User Accounts',
    content:
      'If platform accounts are provided, users are responsible for maintaining account confidentiality, protecting login credentials, and all activity performed under their account.\n\nAxiom reserves the right to suspend or terminate accounts that violate these terms.',
  },
  {
    heading: '6. Service Availability',
    content:
      'We strive to maintain continuous service availability, however we do not guarantee that the website or platform will be uninterrupted or error-free.\n\nWe reserve the right to modify or discontinue services at any time.',
  },
  {
    heading: '7. Limitation of Liability',
    content:
      'To the maximum extent permitted by law, Axiom Facility Partners shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.\n\nThis includes but is not limited to loss of profits, data loss, or business interruption.',
  },
  {
    heading: '8. Disclaimer',
    content:
      'The website and its content are provided "as is" without warranties of any kind.\n\nWhile we strive for accuracy, we do not guarantee that all information on the website is complete or current.',
  },
  {
    heading: '9. Third-Party Services',
    content:
      'Our website may integrate with third-party platforms or services. We are not responsible for the practices, policies, or availability of third-party providers.',
  },
  {
    heading: '10. Governing Law',
    content:
      'These Terms and Conditions shall be governed by and interpreted according to the laws of the State of Florida.',
  },
  {
    heading: '11. Changes to Terms',
    content:
      'We may update these Terms and Conditions periodically. Continued use of the website after updates constitutes acceptance of the revised terms.',
  },
  {
    heading: '12. Contact Information',
    content:
      'For questions regarding these Terms and Conditions, please contact:\n\nAxiom Facility Partners\nEmail: info@axiomfacilitypartners.com\nPhone: (407) 294-6601\nWebsite: axiomfacilitypartners.com',
  },
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Terms & Conditions', href: '/terms' },
            ])
          ),
        }}
      />

      <Hero
        title="Terms & Conditions"
        subtitle="Please review the terms governing your use of the Axiom Facility Partners website and services."
        badge="Legal"
        ctaText="Request a Consultation"
        ctaHref="/consultation"
      />

      <SectionWrapper
        heading="Terms & Conditions"
        subtitle="Last Updated: March 8, 2026"
      >
        <div className="max-w-3xl space-y-12">
          {sections.map((section, i) => (
            <AnimatedSection key={section.heading} delay={i * 0.05}>
              <div>
                <h3 className="text-lg font-semibold text-navy-950">
                  {section.heading}
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-600">
                  {section.content.split('\n\n').map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
                {section.items && (
                  <ul className="mt-3 space-y-1 pl-5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="list-disc text-sm text-navy-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.after && (
                  <p className="mt-3 text-sm font-medium text-navy-700">
                    {section.after}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
