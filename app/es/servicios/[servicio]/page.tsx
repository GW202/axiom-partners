import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { serviciosES, getAllServicioSlugs, getServicioES } from '@/content/services-es';
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

const SITE_URL = 'https://axiomfacilitypartners.com';

interface ServicioPageProps {
  params: Promise<{ servicio: string }>;
}

export async function generateStaticParams() {
  return getAllServicioSlugs().map((slug) => ({ servicio: slug }));
}

export async function generateMetadata({ params }: ServicioPageProps) {
  const { servicio: slug } = await params;
  const servicio = getServicioES(slug);
  if (!servicio) return {};
  return {
    title: `${servicio.titulo} | Axiom Facility Partners | Orlando, FL`,
    description: `${servicio.titulo} por Axiom Facility Partners en Orlando y Central Florida. ${servicio.descripcion} Llame al (407) 342-3195.`,
    openGraph: {
      title: `${servicio.titulo} | Axiom Facility Partners`,
      description: servicio.descripcion,
      locale: 'es_US',
      url: `${SITE_URL}/es/servicios/${servicio.slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/es/servicios/${servicio.slug}`,
      languages: {
        'en-US': `${SITE_URL}/services/${servicio.slugEn}`,
        'es-US': `${SITE_URL}/es/servicios/${servicio.slug}`,
        'x-default': `${SITE_URL}/services/${servicio.slugEn}`,
      },
    },
  };
}

export default async function ServicioDetailPage({ params }: ServicioPageProps) {
  const { servicio: slug } = await params;
  const servicio = getServicioES(slug);
  if (!servicio) notFound();

  const faqsForSchema = servicio.faqs.map((f) => ({
    question: f.pregunta,
    answer: f.respuesta,
  }));

  return (
    <div lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqsForSchema)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Inicio', href: '/es' },
              { name: 'Servicios', href: '/es/servicios' },
              { name: servicio.titulo, href: `/es/servicios/${servicio.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSpeakableSchema(`/es/servicios/${servicio.slug}`)),
        }}
      />

      <Hero
        title={servicio.titulo}
        subtitle={servicio.descripcion}
        badge={`${servicio.titulo} — Central Florida`}
        ctaText="Solicite una Consulta"
      />

      {/* Descripción */}
      <SectionWrapper heading="Descripción General">
        <div className="max-w-3xl space-y-5" data-speakable>
          {servicio.descripcionLarga.map((parrafo, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-navy-600">{parrafo}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Protocolos */}
      <SectionWrapper
        heading="Protocolos de Mantenimiento"
        subtitle="Nuestro enfoque estructurado garantiza resultados consistentes y documentados."
        dark
      >
        <div className="grid gap-4 md:grid-cols-2" data-speakable>
          {servicio.protocolos.map((protocolo, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card flex items-start gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-white/[0.04]">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-bronze-400/15 text-xs font-bold text-bronze-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-navy-200">
                  {protocolo}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Beneficios */}
      <SectionWrapper
        heading="Beneficios para su Operación"
        subtitle="Impacto medible en el rendimiento y valor de su instalación."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicio.beneficios.map((beneficio, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className="text-sm leading-relaxed text-navy-600">{beneficio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Preguntas Frecuentes */}
      <SectionWrapper heading="Preguntas Frecuentes" dark>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white p-6 shadow-2xl shadow-navy-950/20 lg:p-8">
          <div className="space-y-4">
            {servicio.faqs.map((faq, i) => (
              <details key={i} className="group border-b border-navy-100 pb-4 last:border-0 last:pb-0">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-navy-900 transition-colors hover:text-bronze-700">
                  {faq.pregunta}
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-navy-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600" data-answer>
                  {faq.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Otros Servicios */}
      <SectionWrapper
        heading="Otros Servicios"
        subtitle="Explore nuestra gama completa de programas de mantenimiento de instalaciones comerciales."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviciosES
            .filter((s) => s.slug !== servicio.slug)
            .slice(0, 3)
            .map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/es/servicios/${s.slug}`}
                  className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-navy-950 transition-colors group-hover:text-bronze-700">
                    {s.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {s.descripcion}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
        </div>
      </SectionWrapper>

      <CTASection
        heading={`¿Listo para ${servicio.titulo}?`}
        description="Solicite una consulta gratuita. Evaluaremos su propiedad y diseñaremos un programa de mantenimiento construido para su operación."
        ctaText="Solicitar Consulta Gratuita"
      />

      <div className="border-t border-navy-100 bg-cream-50 py-6 text-center">
        <Link
          href={`/services/${servicio.slugEn}`}
          className="text-sm font-medium text-navy-500 transition-colors hover:text-bronze-600"
        >
          View this page in English →
        </Link>
      </div>
    </div>
  );
}
