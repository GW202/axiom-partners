import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/content/services';
import { generateBreadcrumbSchema, generateSpeakableSchema } from '@/lib/structured-data';

const SITE_URL = 'https://axiomfacilitypartners.com';

export const metadata: Metadata = {
  title: 'Axiom Facility Partners | Servicio de Limpieza Comercial | Orlando, FL',
  description:
    'Axiom Facility Partners es una empresa de limpieza comercial y servicios de conserjería en Orlando, Florida. Ofrecemos limpieza de edificios de oficinas, limpieza de almacenes, gestión de instalaciones, servicios de portería diurna, mantenimiento de pisos y protocolos de desinfección. Llame al (407) 342-3195.',
  keywords: [
    'limpieza comercial Orlando',
    'servicio de limpieza comercial',
    'empresa de conserjería Orlando',
    'limpieza de oficinas Orlando FL',
    'mantenimiento de instalaciones',
    'limpieza de almacenes',
    'servicios de conserjería',
    'limpieza comercial Central Florida',
  ],
  openGraph: {
    title: 'Axiom Facility Partners | Limpieza Comercial | Orlando, FL',
    description:
      'Servicio de limpieza comercial y empresa de conserjería en Orlando y Central Florida. Limpieza de oficinas, almacenes, gestión de instalaciones. Calificación 4.9/5.',
    siteName: 'Axiom Facility Partners',
    type: 'website',
    locale: 'es_US',
    url: `${SITE_URL}/es`,
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent('Servicio de Limpieza Comercial — Orlando, FL')}&subtitle=${encodeURIComponent('Mantenimiento profesional de instalaciones comerciales en Central Florida')}`,
        width: 1200,
        height: 630,
        alt: 'Axiom Facility Partners — Servicio de limpieza comercial en Orlando, Florida',
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      'en-US': SITE_URL,
      'es-US': `${SITE_URL}/es`,
      'x-default': SITE_URL,
    },
  },
};

const serviciosTraducidos: Record<string, { nombre: string; descripcion: string }> = {
  'office-building-cleaning': {
    nombre: 'Limpieza de Edificios de Oficinas',
    descripcion: 'Mantenimiento profesional de oficinas comerciales que protege sus activos e impresiona a sus clientes.',
  },
  'warehouse-facility-cleaning': {
    nombre: 'Limpieza de Almacenes',
    descripcion: 'Limpieza industrial y mantenimiento de pisos para centros de distribución y logística.',
  },
  'facilities-management': {
    nombre: 'Gestión de Instalaciones',
    descripcion: 'Programas completos de mantenimiento de instalaciones con un solo punto de contacto.',
  },
  'day-porter-services': {
    nombre: 'Servicios de Portería Diurna',
    descripcion: 'Personal de limpieza durante el día para mantener áreas comunes impecables.',
  },
  'floor-care-maintenance': {
    nombre: 'Mantenimiento de Pisos',
    descripcion: 'Cuidado especializado de pisos — encerado, pulido, restauración de concreto y más.',
  },
  'disinfection-protocols': {
    nombre: 'Protocolos de Desinfección',
    descripcion: 'Desinfección de nivel hospitalario para espacios comerciales y oficinas médicas.',
  },
};

export default function SpanishHomepage() {
  return (
    <div lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', href: '/es' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSpeakableSchema('/es')),
        }}
      />

      <Hero
        title="Su Instalación. Nuestro Estándar."
        subtitle="Axiom Facility Partners es una empresa de limpieza comercial y servicios de conserjería en Orlando, Florida. Brindamos mantenimiento premium de instalaciones diseñado para proteger los activos de su edificio, garantizar la continuidad operativa y elevar los estándares de su instalación en toda Central Florida."
        badge="Limpieza Comercial y Conserjería — Orlando, FL"
        ctaText="Solicite una Consulta"
      />

      {/* Servicios */}
      <SectionWrapper
        heading="Nuestros Servicios"
        subtitle="Programas completos de mantenimiento de instalaciones para operaciones comerciales que exigen confiabilidad y precisión."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const traducido = serviciosTraducidos[service.slug];
            return (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-navy-950 transition-colors group-hover:text-bronze-700">
                    {traducido?.nombre || service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {traducido?.descripcion || service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bronze-600">
                    Ver detalles
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Por qué Axiom */}
      <SectionWrapper
        heading="¿Por Qué Axiom?"
        subtitle="No somos un proveedor de limpieza. Somos su socio de mantenimiento de instalaciones."
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: 'Protección de Activos', description: 'Mantenemos su instalación para proteger los activos del edificio que impulsan el valor de su propiedad.' },
            { title: 'Confiabilidad Operativa', description: 'Servicio consistente y documentado en el que puede confiar. Sin turnos perdidos, sin excusas, sin sorpresas.' },
            { title: 'Experiencia en Instalaciones', description: 'Nuestro equipo entiende los sistemas de edificios comerciales. Limpiamos con propósito, protegiendo lo que más importa.' },
            { title: 'Responsabilidad Ejecutiva', description: 'Comunicación directa con la gerencia. Informes transparentes. Un socio que se responsabiliza de los estándares de su instalación.' },
          ].map((prop, i) => (
            <AnimatedSection key={prop.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-lg font-semibold text-white">{prop.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">{prop.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        heading="Hablemos de su Instalación"
        description="Solicite una consulta gratuita. Le mostraremos cómo un socio de mantenimiento profesional puede transformar su operación."
        ctaText="Solicitar Consulta Gratuita"
      />

      {/* Language switch */}
      <div className="border-t border-navy-100 bg-cream-50 py-6 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-navy-500 transition-colors hover:text-bronze-600"
        >
          View this page in English →
        </Link>
      </div>
    </div>
  );
}
