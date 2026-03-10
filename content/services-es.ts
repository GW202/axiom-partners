export interface ServicioES {
  slug: string;
  /** Original English slug for linking to English version */
  slugEn: string;
  titulo: string;
  descripcion: string;
  descripcionLarga: string[];
  protocolos: string[];
  beneficios: string[];
  faqs: { pregunta: string; respuesta: string }[];
}

export const serviciosES: ServicioES[] = [
  {
    slug: 'limpieza-de-oficinas',
    slugEn: 'office-building-cleaning',
    titulo: 'Limpieza de Edificios de Oficinas',
    descripcion:
      'Programas completos de limpieza diseñados para mantener ambientes profesionales, proteger los activos interiores y apoyar la satisfacción de los inquilinos en edificios de oficinas multi-inquilino.',
    descripcionLarga: [
      'Los edificios de oficinas son más que espacios de trabajo — son activos de capital que requieren mantenimiento sistemático para preservar su valor. Axiom Facility Partners ofrece programas completos de limpieza diseñados para entornos de oficinas multi-inquilino, edificios comerciales Clase A y sedes corporativas en todo Central Florida.',
      'Nuestro enfoque va más allá de la limpieza superficial. Implementamos protocolos de mantenimiento estructurados que protegen los acabados interiores, extienden la vida útil de los pisos y accesorios, y mantienen los estándares de presentación profesional que los inquilinos y visitantes esperan.',
      'Desde la presentación del vestíbulo hasta la sanitización de baños, el mantenimiento de la cocina hasta el detallado de suites ejecutivas, nuestros equipos ejecutan un servicio consistente y documentado en el que los administradores de propiedades pueden confiar.',
    ],
    protocolos: [
      'Limpieza nocturna de oficinas y áreas comunes',
      'Sanitización profunda de baños con listas de verificación documentadas',
      'Mantenimiento de presentación del vestíbulo y entradas',
      'Limpieza y reposición de comedores y cocinas',
      'Detallado de cabinas de ascensores y superficies de alto tráfico',
      'Gestión de recolección de basura y programas de reciclaje',
      'Mantenimiento de ventanas y superficies de vidrio',
      'Aspirado de alfombras con filtración HEPA',
    ],
    beneficios: [
      'Proteja los acabados interiores y el valor del edificio',
      'Reduzca las quejas de inquilinos y mejore los índices de satisfacción',
      'Mantenga estándares de presentación consistentes en todos los pisos',
      'Simplifique la gestión de proveedores con un solo punto de contacto',
      'Registros de servicio documentados para informes de administración',
      'Horarios flexibles para minimizar la interrupción a los inquilinos',
    ],
    faqs: [
      {
        pregunta: '¿Cómo personalizan la limpieza para diferentes espacios de inquilinos?',
        respuesta:
          'Realizamos un recorrido de la instalación con la administración de la propiedad para entender las necesidades específicas de cada inquilino, horarios de operación y áreas sensibles. Luego construimos un alcance de limpieza piso por piso que tiene en cuenta las zonas de alto tráfico, áreas ejecutivas y espacios especiales como salas de servidores o centros de conferencias.',
      },
      {
        pregunta: '¿Qué sucede si un inquilino reporta un problema de limpieza?',
        respuesta:
          'Mantenemos canales de comunicación directa para retroalimentación en tiempo real. Cualquier problema reportado se atiende dentro del mismo turno o el próximo servicio programado. Nuestro programa de aseguramiento de calidad incluye inspecciones regulares y acciones correctivas documentadas.',
      },
      {
        pregunta: '¿Ofrecen limpieza fuera del horario laboral?',
        respuesta:
          'Sí. La mayoría de los programas de limpieza de edificios de oficinas se ejecutan durante horas nocturnas y de madrugada para minimizar la interrupción a los inquilinos. Coordinamos horarios con la administración del edificio y los protocolos de seguridad.',
      },
    ],
  },
  {
    slug: 'limpieza-de-almacenes',
    slugEn: 'warehouse-facility-cleaning',
    titulo: 'Limpieza de Almacenes',
    descripcion:
      'Soluciones de limpieza de grado industrial que controlan la acumulación de polvo, mantienen la integridad del piso y protegen el equipo de almacén de la degradación prematura.',
    descripcionLarga: [
      'Los almacenes y centros de distribución enfrentan desafíos únicos de mantenimiento — la acumulación de polvo daña el equipo, los desechos crean riesgos de seguridad y los pisos descuidados se deterioran rápidamente bajo el tráfico de carga pesada. Axiom Facility Partners ofrece programas de limpieza de grado industrial diseñados específicamente para entornos de logística, manufactura y distribución.',
      'Nuestros protocolos de limpieza de almacenes abordan las realidades operativas de instalaciones de alto volumen: patrones de tráfico de montacargas, exposición en muelles de carga, acumulación de polvo en sistemas de estanterías y la batalla constante contra la degradación del piso de concreto.',
      'Ya sea que su instalación opere en un solo turno o las 24 horas del día, diseñamos programas de mantenimiento que se integran con sus operaciones sin interrumpir el rendimiento.',
    ],
    protocolos: [
      'Fregado industrial de pisos con equipo de operador sentado',
      'Programas de control de polvo para estanterías y sistemas elevados',
      'Mantenimiento de muelles de carga y áreas de preparación',
      'Limpieza de baños y áreas de descanso',
      'Sellado y mantenimiento de pisos de concreto',
      'Gestión de áreas de compactadores y residuos',
      'Mantenimiento de líneas de seguridad y señalización',
      'Programas de remoción de polvo en techos altos',
    ],
    beneficios: [
      'Reduzca los costos de mantenimiento de equipos por daño de polvo',
      'Mantenga el cumplimiento de OSHA para condiciones de trabajo seguras',
      'Extienda la vida útil del piso de concreto con mantenimiento apropiado',
      'Mejore los puntajes de auditoría y las impresiones de los clientes',
      'Minimice los riesgos de resbalones y caídas en áreas de alto tráfico',
      'Horarios flexibles alrededor de turnos operativos',
    ],
    faqs: [
      {
        pregunta: '¿Pueden trabajar durante las operaciones activas del almacén?',
        respuesta:
          'Por supuesto. Nuestros equipos están capacitados para operar de manera segura en entornos de almacén activos. Coordinamos con su equipo de operaciones para programar la limpieza durante cambios de turno, horarios de recepción y períodos de menor tráfico para minimizar el impacto en el rendimiento.',
      },
      {
        pregunta: '¿Qué equipo utilizan para los pisos del almacén?',
        respuesta:
          'Desplegamos fregadoras industriales de pisos de operador sentado y barredoras diseñadas para superficies grandes de concreto. Nuestro inventario de equipos incluye máquinas adecuadas para instalaciones que van desde 50,000 hasta más de 500,000 pies cuadrados.',
      },
      {
        pregunta: '¿Cómo manejan el control de polvo en instalaciones de techo alto?',
        respuesta:
          'Implementamos programas de control de polvo de múltiples niveles que abordan la acumulación a nivel del piso, sistemas de estanterías intermedias y estructuras elevadas. Los programas se programan en frecuencias rotativas basadas en las tasas de generación de polvo en su instalación específica.',
      },
    ],
  },
  {
    slug: 'gestion-de-instalaciones',
    slugEn: 'facilities-management',
    titulo: 'Gestión de Instalaciones',
    descripcion:
      'Programas integrales de gestión de instalaciones que coordinan operaciones de mantenimiento, supervisión de proveedores y planificación de capital — para que pueda enfocarse en su negocio principal.',
    descripcionLarga: [
      'La gestión de instalaciones va más allá de la limpieza — abarca todo el espectro de operaciones del edificio, desde la programación de mantenimiento preventivo y la coordinación de proveedores hasta la planificación de mejoras de capital y el cumplimiento regulatorio. Axiom Facility Partners proporciona servicios integrados de gestión de instalaciones que brindan a los propietarios y operadores un solo socio responsable del rendimiento del edificio.',
      'Nuestro enfoque de gestión de instalaciones se basa en la transparencia operativa. Implementamos calendarios de mantenimiento documentados, sistemas digitales de órdenes de trabajo e informes mensuales de rendimiento que brindan a las partes interesadas visibilidad de cada aspecto de las operaciones del edificio.',
      'Ya sea que necesite gestión completa de instalaciones para una sola propiedad o un programa estandarizado en un portafolio de múltiples edificios, nuestro equipo de gestión tiene la profundidad operativa y el conocimiento del mercado de Central Florida para entregar resultados.',
    ],
    protocolos: [
      'Programación y seguimiento de mantenimiento preventivo',
      'Adquisición, coordinación y gestión del rendimiento de proveedores',
      'Gestión de órdenes de trabajo con tiempos de respuesta documentados',
      'Inspección de sistemas del edificio e informes de ciclo de vida',
      'Seguimiento de cumplimiento regulatorio (incendios, seguridad, ADA)',
      'Planificación de mejoras de capital y supervisión de proyectos',
      'Coordinación de respuesta a emergencias y cobertura fuera de horario',
      'Informes operativos mensuales con tableros de KPIs',
    ],
    beneficios: [
      'Un solo punto de responsabilidad para todas las operaciones del edificio',
      'Reduzca costos operativos mediante disciplina de mantenimiento preventivo',
      'Extienda la vida útil de equipos y sistemas con cuidado proactivo',
      'Mejore la satisfacción del inquilino con servicio receptivo',
      'Cumplimiento documentado para auditorías, seguros e informes',
      'Programas escalables para propiedades individuales o portafolios',
    ],
    faqs: [
      {
        pregunta: '¿Cuál es la diferencia entre gestión de instalaciones y servicio de conserjería?',
        respuesta:
          'El servicio de conserjería cubre la limpieza y sanitización. La gestión de instalaciones abarca todo el alcance de las operaciones del edificio — planificación de mantenimiento, gestión de proveedores, cumplimiento regulatorio, planificación de capital, sistemas de órdenes de trabajo e informes operativos. Piense en la gestión de instalaciones como el sistema operativo de su edificio, con la limpieza como un componente dentro de él.',
      },
      {
        pregunta: '¿Pueden gestionar instalaciones en múltiples propiedades?',
        respuesta:
          'Sí. Nuestros programas están diseñados para escalar en portafolios de múltiples propiedades. Implementamos procedimientos operativos estandarizados, informes centralizados y estándares de servicio consistentes en todas las ubicaciones.',
      },
      {
        pregunta: '¿Cómo manejan las situaciones de mantenimiento de emergencia?',
        respuesta:
          'Nuestros programas incluyen coordinación de respuesta a emergencias 24/7. Mantenemos una red de contratistas especializados verificados en todo Central Florida y proporcionamos cobertura fuera de horario a través de una línea de respuesta dedicada.',
      },
    ],
  },
  {
    slug: 'porteria-diurna',
    slugEn: 'day-porter-services',
    titulo: 'Servicios de Portería Diurna',
    descripcion:
      'Profesionales de mantenimiento diurno en sitio que aseguran el mantenimiento continuo de la instalación, respuesta en tiempo real y estándares de presentación consistentes.',
    descripcionLarga: [
      'Las instalaciones comerciales de alto tráfico necesitan más que limpieza nocturna — necesitan mantenimiento diurno continuo para mantener los estándares de presentación durante el horario comercial. Axiom Facility Partners proporciona servicios profesionales de portería diurna que mantienen su instalación en las mejores condiciones desde la apertura hasta el cierre.',
      'Nuestros porteros diurnos son profesionales de mantenimiento de instalaciones capacitados, no solo personal de limpieza. Entienden los sistemas del edificio, pueden identificar problemas de mantenimiento antes de que se agraven y sirven como una extensión de su equipo de administración de propiedad.',
      'Los programas de portería diurna se personalizan según los patrones de tráfico de su instalación, horas pico y áreas prioritarias. Nuestros porteros operan con listas de tareas documentadas mientras mantienen la flexibilidad para responder a necesidades en tiempo real.',
    ],
    protocolos: [
      'Presentación continua del vestíbulo y áreas comunes',
      'Monitoreo y reposición de baños durante todo el día',
      'Respuesta a derrames y limpieza inmediata',
      'Preparación de salas de conferencias entre reuniones',
      'Mantenimiento de cabinas de ascensores y superficies de alto contacto',
      'Mantenimiento de entradas exteriores y patios',
      'Monitoreo de basura y reciclaje',
      'Respuesta en tiempo real a solicitudes de inquilinos',
    ],
    beneficios: [
      'Mantenga la presentación de la instalación durante horario comercial',
      'Respuesta inmediata a derrames y necesidades de limpieza',
      'Reduzca la carga sobre su equipo de administración de propiedad',
      'Mejore las primeras impresiones de inquilinos y visitantes',
      'Identificación proactiva de problemas antes de que escalen',
      'Registros diarios de actividad documentados para rendición de cuentas',
    ],
    faqs: [
      {
        pregunta: '¿Cuál es la diferencia entre portería diurna y servicio de conserjería?',
        respuesta:
          'El servicio de conserjería típicamente se realiza fuera del horario y se enfoca en limpieza profunda. El servicio de portería diurna proporciona mantenimiento continuo durante el día — monitoreo de baños, respuesta a derrames, mantenimiento del vestíbulo y presentación de la instalación en tiempo real durante el horario comercial. La mayoría de las instalaciones se benefician de ambos.',
      },
      {
        pregunta: '¿Pueden los porteros manejar tareas de mantenimiento menor?',
        respuesta:
          'Sí. Nuestros porteros están capacitados para manejar tareas menores como cambiar bombillas, ajustar herrajes de puertas e identificar problemas que necesitan escalamiento a su equipo de mantenimiento. Sirven como ojos y oídos para la operación de su instalación.',
      },
      {
        pregunta: '¿Cómo aseguran la calidad consistente del servicio?',
        respuesta:
          'Los porteros trabajan con listas de verificación personalizadas con requisitos de cumplimiento documentados. Nuestros supervisores de campo realizan inspecciones regulares de calidad, y proporcionamos informes mensuales de servicio a la administración de la propiedad.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-pisos',
    slugEn: 'floor-care-maintenance',
    titulo: 'Mantenimiento de Pisos',
    descripcion:
      'Programas especializados de mantenimiento de pisos incluyendo decapado y encerado, pulido y sistemas de revestimiento que extienden la vida útil y reducen costos de reemplazo.',
    descripcionLarga: [
      'Los pisos son uno de los activos más costosos y visibles en cualquier instalación comercial. El mantenimiento adecuado extiende la vida útil de los materiales por años, reduce los costos de reemplazo y mantiene la apariencia profesional que los inquilinos y visitantes notan primero. Axiom Facility Partners proporciona programas especializados para cada tipo de piso comercial.',
      'Nuestros técnicos de cuidado de pisos están capacitados en la ciencia del mantenimiento de pisos — entendiendo la química específica, equipos y técnicas requeridas para VCT, concreto pulido, piedra natural, alfombra y sistemas de pisos especializados. No improvisamos; seguimos especificaciones del fabricante y protocolos de restauración probados.',
      'Desde programas de mantenimiento rutinario hasta proyectos de restauración profunda, nuestra división de cuidado de pisos entrega resultados medibles que protegen su inversión en pisos y mejoran la presentación de su instalación.',
    ],
    protocolos: [
      'Programas de decapado, sellado y encerado de VCT',
      'Pulido de alta velocidad para niveles de brillo mantenidos',
      'Mantenimiento y re-revestimiento de concreto pulido',
      'Limpieza y sellado de piedra natural',
      'Extracción de alfombras y limpieza restaurativa',
      'Limpieza profunda y sellado de azulejos y lechada',
      'Aplicación de tratamientos antideslizantes',
      'Programas de mantenimiento programados con ciclos documentados',
    ],
    beneficios: [
      'Extienda la vida útil de los pisos 3-5 años con mantenimiento adecuado',
      'Reduzca el gasto de capital en reemplazo prematuro de pisos',
      'Mantenga apariencia consistente en todas las áreas de la instalación',
      'Mejore la seguridad con mantenimiento adecuado de resistencia al deslizamiento',
      'Historial de mantenimiento documentado para registros de gestión de activos',
      'Documentación de antes y después para informes de propiedad',
    ],
    faqs: [
      {
        pregunta: '¿Con qué frecuencia se deben decapar y encerar los pisos VCT?',
        respuesta:
          'La frecuencia depende del volumen de tráfico, pero la mayoría de los pisos VCT comerciales se benefician de un decapado y re-revestimiento completo cada 6-12 meses, con pulido intermedio y aplicación de capas superiores mensual o trimestralmente. Evaluamos sus patrones de tráfico específicos y recomendamos un horario óptimo.',
      },
      {
        pregunta: '¿Manejan el mantenimiento de concreto pulido?',
        respuesta:
          'Sí. El concreto pulido requiere protocolos de mantenimiento específicos para mantener su acabado reflectante. Proporcionamos trapeado de polvo rutinario, fregado automático con soluciones de pH neutro y re-densificación y re-pulido periódicos para mantener la apariencia y durabilidad del concreto.',
      },
      {
        pregunta: '¿Pueden restaurar pisos severamente descuidados?',
        respuesta:
          'En la mayoría de los casos, sí. Evaluamos la condición actual y proporcionamos una evaluación honesta de si la restauración es viable o si el reemplazo es más rentable. Nuestros proyectos de restauración incluyen documentación completa con fotos de antes y después para los registros de la propiedad.',
      },
    ],
  },
  {
    slug: 'protocolos-de-desinfeccion',
    slugEn: 'disinfection-protocols',
    titulo: 'Protocolos de Desinfección',
    descripcion:
      'Programas de sanitización basados en evidencia usando desinfectantes de grado hospitalario y protocolos documentados para mantener ambientes saludables.',
    descripcionLarga: [
      'La sanitización de instalaciones ya no es opcional — es una expectativa fundamental de inquilinos, empleados y visitantes. Axiom Facility Partners ofrece protocolos de desinfección basados en evidencia que van más allá de la limpieza superficial para crear ambientes genuinamente más saludables.',
      'Nuestros programas de desinfección se basan en metodologías comprobadas usando desinfectantes de grado hospitalario registrados por la EPA con declaraciones de eliminación documentadas. Seguimos las directrices de los CDC y OSHA para la sanitización de instalaciones comerciales, y cada servicio se documenta con números de lote de productos, tiempos de contacto y verificación de cobertura.',
      'Ya sea que necesite desinfección diaria mejorada para superficies de alto contacto, programas periódicos de sanitización profunda o protocolos de respuesta rápida para eventos de enfermedad, entregamos resultados medibles con documentación completa.',
    ],
    protocolos: [
      'Programas de desinfección de superficies de alto contacto',
      'Aplicación por pulverización electrostática para cobertura completa',
      'Sanitización profunda de baños con verificación por prueba ATP',
      'Desinfección de áreas comunes y equipo compartido',
      'Protocolos de sanitización rápida para respuesta a enfermedades',
      'Mejora de calidad del aire mediante sanitización adyacente a HVAC',
      'Documentación de productos, tiempos de contacto y cobertura',
      'Informes mensuales de sanitización con métricas medibles',
    ],
    beneficios: [
      'Reduzca el ausentismo por enfermedad en su instalación',
      'Cumpla las expectativas de los inquilinos para ambientes limpios y saludables',
      'Cumplimiento documentado para requisitos regulatorios y de seguros',
      'Protocolos basados en evidencia — no afirmaciones de marketing',
      'Resultados medibles a través de pruebas ATP y verificación',
      'Capacidad de respuesta rápida para eventos de enfermedad',
    ],
    faqs: [
      {
        pregunta: '¿Qué desinfectantes utilizan?',
        respuesta:
          'Usamos exclusivamente desinfectantes de grado hospitalario registrados por la EPA con declaraciones de eliminación documentadas para patógenos relevantes. La selección de productos se basa en la compatibilidad con superficies, perfil de seguridad y eficacia. Podemos proporcionar hojas SDS y especificaciones de productos para sus registros.',
      },
      {
        pregunta: '¿Cómo verifican que la desinfección es efectiva?',
        respuesta:
          'Usamos pruebas de ATP (adenosín trifosfato) para medir los niveles de contaminación de superficies antes y después del tratamiento. Esto proporciona datos objetivos y medibles sobre la efectividad de nuestros protocolos en lugar de depender únicamente de la inspección visual.',
      },
      {
        pregunta: '¿Ofrecen desinfección continua o solo tratamientos únicos?',
        respuesta:
          'Ambos. Recomendamos programas de desinfección continuos integrados en su horario de mantenimiento regular para resultados sostenidos. La sanitización profunda única está disponible para eventos específicos o como punto de partida antes de la transición a un programa de mantenimiento.',
      },
    ],
  },
];

export function getServicioES(slug: string): ServicioES | undefined {
  return serviciosES.find((s) => s.slug === slug);
}

export function getAllServicioSlugs(): string[] {
  return serviciosES.map((s) => s.slug);
}
