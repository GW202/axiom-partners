import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { getSiteConfig } from '@/lib/site-config';

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description:
    'Axiom Facility Partners Privacy Policy. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
});

const sections = [
  {
    heading: '1. Introduction',
    content: `Axiom Facility Partners ("Axiom", "Company", "we", "our", or "us") respects your privacy and is committed to protecting the personal information of visitors, customers, and partners who interact with our website and services.\n\nThis Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform and services.\n\nBy accessing or using our website, you agree to the practices described in this policy.`,
  },
  {
    heading: '2. Information We Collect',
    content: `We may collect several types of information from users.`,
    subsections: [
      {
        title: 'Personal Information',
        text: 'Information that identifies an individual may include:',
        items: [
          'Name',
          'Email address',
          'Phone number',
          'Company name',
          'Job title',
          'Business address',
          'Account login credentials',
        ],
        after:
          'This information may be collected when you request a consultation, contact us, create an account, subscribe to communications, or use our platform.',
      },
      {
        title: 'Technical and Usage Information',
        text: 'We may automatically collect technical data including:',
        items: [
          'IP address',
          'Browser type',
          'Device type',
          'Operating system',
          'Referring URLs',
          'Pages visited',
          'Session duration',
          'Website interactions',
        ],
        after:
          'This information helps us improve performance and user experience.',
      },
      {
        title: 'Business Information',
        text: 'For enterprise customers and partners we may collect operational information related to facility services, service requests, or platform analytics.',
      },
    ],
  },
  {
    heading: '3. How We Use Information',
    content: 'We use collected information to:',
    items: [
      'Provide and operate our services',
      'Respond to inquiries and consultation requests',
      'Manage accounts and platform access',
      'Improve website performance',
      'Analyze service usage',
      'Communicate updates and service notifications',
      'Enhance security and fraud prevention',
      'Comply with legal obligations',
    ],
    after: 'We do not sell personal information to third parties.',
  },
  {
    heading: '4. Cookies and Tracking Technologies',
    content: `Our website may use cookies and similar technologies to remember user preferences, analyze traffic, measure engagement, and improve website functionality.\n\nUsers may disable cookies through their browser settings, although certain website features may not function properly.`,
  },
  {
    heading: '5. Data Sharing and Disclosure',
    content:
      'We may share information with trusted third parties only when necessary, including:',
    items: [
      'Cloud hosting providers',
      'Analytics providers',
      'Communication platforms',
      'Customer support tools',
      'Professional advisors',
      'Legal authorities when required by law',
    ],
    after:
      'All third-party providers are required to maintain appropriate security and confidentiality protections.',
  },
  {
    heading: '6. Data Security',
    content: `We implement reasonable technical and organizational measures to protect data from unauthorized access, alteration, disclosure, and destruction. These protections may include encryption, access controls, and secure infrastructure practices.\n\nHowever, no internet transmission or storage system can be guaranteed 100% secure.`,
  },
  {
    heading: '7. Data Retention',
    content:
      'We retain personal data only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer needed it may be securely deleted or anonymized.',
  },
  {
    heading: '8. Your Privacy Rights',
    content:
      'Depending on your jurisdiction, you may have rights to:',
    items: [
      'Access personal data',
      'Correct inaccurate information',
      'Request deletion of personal data',
      'Restrict certain processing activities',
      'Receive a copy of your information',
    ],
    after:
      'Requests may be submitted by contacting us at the email listed below.',
  },
  {
    heading: '9. Third-Party Links',
    content:
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Users should review the privacy policies of any third-party services they visit.',
  },
  {
    heading: '10. Children\u2019s Privacy',
    content:
      'Our services are intended for business use and are not directed toward individuals under the age of 13. We do not knowingly collect personal information from children.',
  },
  {
    heading: '11. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised effective date. Continued use of our website after updates constitutes acceptance of the revised policy.',
  },
  {
    heading: '12. Contact Information',
    content:
      `If you have questions regarding this Privacy Policy, please contact:\n\n${getSiteConfig().companyName}\nEmail: ${getSiteConfig().email}\nPhone: ${getSiteConfig().phone}\nWebsite: axiomfacilitypartners.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Privacy Policy', href: '/privacy' },
            ])
          ),
        }}
      />

      <Hero
        title="Privacy Policy"
        subtitle="Your privacy matters. This policy explains how Axiom Facility Partners collects, uses, and protects your information."
        badge="Legal"
        ctaText="Request a Consultation"
        ctaHref="/consultation"
      />

      <SectionWrapper heading="Privacy Policy" subtitle="Last Updated: March 8, 2026">
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
                {section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-5">
                    <h4 className="text-sm font-semibold text-navy-800">
                      {sub.title}
                    </h4>
                    <p className="mt-2 text-sm text-navy-600">{sub.text}</p>
                    {sub.items && (
                      <ul className="mt-2 space-y-1 pl-5">
                        {sub.items.map((item) => (
                          <li
                            key={item}
                            className="list-disc text-sm text-navy-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sub.after && (
                      <p className="mt-3 text-sm text-navy-600">{sub.after}</p>
                    )}
                  </div>
                ))}
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
