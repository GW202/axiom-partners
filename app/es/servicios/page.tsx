import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { serviciosES } from '@/content/services-es';
import { generateBreadcrumbSchema, generateSpeakableSchema } from '@/lib/structured-data';

const SITE_URL = 'https://axiomfacilitypartners.com';

export const metadata: Metadata = {
  title: 'Nuestros Servicios | Axiom Facility Partners | Orlando, FL',
  description:
    'Servicios completos de mantenimiento de instalaciones comerciales en Orlando y Central Florida. Limpieza de oficinas, limpieza de almacenes, gestión de instalaciones, portería diurna, mantenimiento de pisos y protocolos de desinfección.',
  openGraph: {
    title: 'Servicios de Mantenimiento Comercial | Axiom Facility Partners',
    description:
      'Programas profesionales de mantenimiento de instalaciones comerciales en Orlando, FL. Llame al (407) 342-3195.',
    locale: 'es_US',
    url: `${SITE_URL}/es/servicios`,
  },
  alternates: {
    canonical: `${SITE_URL}/es/servicios`,
    languages: {
      'en-US': `${SITE_URL}/services`,
      'es-US': `${SITE_URL}/es/servicios`,
      'x-default': `${SITE_URL}/services`,
    },
  },
};

export default function ServiciosPage() {
  return (
    <div lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', href: '/es' },
              { name: 'Servicios', href: '/es/servicios' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSpeakableSchema('/es/servicios')),
        }}
      />

      <Hero
        title="Nuestros Servicios"
        subtitle="Programas completos de mantenimiento de instalaciones construidos para operaciones comerciales que exigen confiabilidad y precisión en todo Central Florida."
        badge="Servicios de Mantenimiento Comercial — Orlando, FL"
        ctaText="Solicite una Consulta"
      />

      <SectionWrapper
        heading="Soluciones de Mantenimiento Comercial"
        subtitle="Seleccione un servicio para conocer más sobre nuestros programas, protocolos y beneficios."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviciosES.map((servicio, i) => (
            <AnimatedSection key={servicio.slug} delay={i * 0.08}>
              <Link
                href={`/es/servicios/${servicio.slug}`}
                className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-navy-950 transition-colors group-hover:text-bronze-700">
                  {servicio.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                  {servicio.descripcion}
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
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading="Hablemos de su Instalación"
        description="Solicite una consulta gratuita. Le mostraremos cómo un socio de mantenimiento profesional puede transformar su operación."
        ctaText="Solicitar Consulta Gratuita"
      />

      <div className="border-t border-navy-100 bg-cream-50 py-6 text-center">
        <Link
          href="/services"
          className="text-sm font-medium text-navy-500 transition-colors hover:text-bronze-600"
        >
          View this page in English →
        </Link>
      </div>
    </div>
  );
}
