export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  protocols: string[];
  benefits: string[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    slug: 'office-building-cleaning',
    title: 'Office Building Cleaning',
    description:
      'Comprehensive cleaning programs designed to maintain professional environments, protect interior assets, and support tenant satisfaction across multi-tenant office buildings.',
    longDescription: [
      'Office buildings are more than workspaces — they are capital assets that require systematic maintenance to preserve value. Axiom Facility Partners delivers comprehensive cleaning programs engineered for multi-tenant office environments, Class A commercial buildings, and corporate headquarters throughout Central Florida.',
      'Our approach goes beyond surface-level cleaning. We implement structured maintenance protocols that protect interior finishes, extend the lifespan of flooring and fixtures, and maintain the professional presentation standards that tenants and visitors expect. Every program is tailored to the specific traffic patterns, surface materials, and operational schedules of your building.',
      'From lobby presentation to restroom sanitation, breakroom upkeep to executive suite detailing, our teams execute consistent, documented service that property managers can rely on without micromanagement.',
    ],
    protocols: [
      'Nightly office and common area cleaning',
      'Restroom deep sanitation with documented checklists',
      'Lobby and entrance presentation maintenance',
      'Breakroom and kitchen cleaning and restocking',
      'Elevator cab and high-traffic surface detailing',
      'Trash removal and recycling program management',
      'Window and glass surface maintenance',
      'Carpet vacuuming with HEPA filtration',
    ],
    benefits: [
      'Protect interior finishes and building asset value',
      'Reduce tenant complaints and improve satisfaction scores',
      'Maintain consistent presentation standards across all floors',
      'Simplify vendor management with a single point of contact',
      'Documented service logs for property management reporting',
      'Flexible scheduling to minimize disruption to tenants',
    ],
    faqs: [
      {
        question: 'How do you customize cleaning for different tenant spaces?',
        answer:
          'We conduct a facility walkthrough with property management to understand each tenant\'s specific needs, operating hours, and sensitive areas. We then build a floor-by-floor cleaning scope that accounts for high-traffic zones, executive areas, and specialty spaces like server rooms or conference centers.',
      },
      {
        question: 'What happens if a tenant reports a cleaning issue?',
        answer:
          'We maintain direct communication channels for real-time feedback. Any reported issues are addressed within the same shift or next scheduled service. Our quality assurance program includes regular inspections and documented corrective actions.',
      },
      {
        question: 'Do you provide after-hours cleaning?',
        answer:
          'Yes. Most office building programs are executed during evening and overnight hours to minimize disruption to tenants. We coordinate schedules with building management and security protocols.',
      },
    ],
  },
  {
    slug: 'warehouse-facility-cleaning',
    title: 'Warehouse Facility Cleaning',
    description:
      'Industrial-grade cleaning solutions that control dust accumulation, maintain floor integrity, and protect warehouse equipment from premature degradation.',
    longDescription: [
      'Warehouse and distribution facilities face unique maintenance challenges — dust accumulation damages equipment, debris creates safety hazards, and neglected floors deteriorate rapidly under heavy load traffic. Axiom Facility Partners delivers industrial-grade cleaning programs designed specifically for logistics, manufacturing, and distribution environments.',
      'Our warehouse cleaning protocols address the operational realities of high-volume facilities: fork truck traffic patterns, loading dock exposure, racking system dust accumulation, and the constant battle against concrete floor degradation. We use commercial-grade equipment and proven methodologies to maintain safe, functional warehouse environments.',
      'Whether your facility operates single-shift or around the clock, we design maintenance programs that integrate with your operations without disrupting throughput.',
    ],
    protocols: [
      'Industrial floor scrubbing with ride-on equipment',
      'Dust control programs for racking and overhead systems',
      'Loading dock and staging area maintenance',
      'Restroom and break area cleaning',
      'Concrete floor sealing and maintenance',
      'Trash compactor area and waste management',
      'Safety line and marking maintenance',
      'High-bay dust removal programs',
    ],
    benefits: [
      'Reduce equipment maintenance costs from dust damage',
      'Maintain OSHA compliance for safe working conditions',
      'Extend concrete floor lifespan with proper maintenance',
      'Improve facility audit scores and client impressions',
      'Minimize slip and fall risks in high-traffic areas',
      'Flexible scheduling around operational shifts',
    ],
    faqs: [
      {
        question: 'Can you work around active warehouse operations?',
        answer:
          'Absolutely. Our teams are trained to operate safely in active warehouse environments. We coordinate with your operations team to schedule cleaning around shift changes, receiving schedules, and high-traffic periods to minimize any impact on throughput.',
      },
      {
        question: 'What equipment do you use for warehouse floors?',
        answer:
          'We deploy industrial ride-on floor scrubbers and sweepers designed for large-format concrete surfaces. Our equipment inventory includes machines suited for facilities ranging from 50,000 to over 500,000 square feet.',
      },
      {
        question: 'How do you handle dust control in high-bay facilities?',
        answer:
          'We implement multi-level dust control programs that address floor-level accumulation, mid-level racking systems, and overhead structures. Programs are scheduled on rotating frequencies based on dust generation rates in your specific facility.',
      },
    ],
  },
  {
    slug: 'facilities-management',
    title: 'Facilities Management',
    description:
      'End-to-end facilities management programs that coordinate maintenance operations, vendor oversight, and capital planning — so you can focus on your core business.',
    longDescription: [
      'Facilities management goes beyond cleaning — it encompasses the full spectrum of building operations, from preventative maintenance scheduling and vendor coordination to capital improvement planning and regulatory compliance. Axiom Facility Partners provides integrated facilities management services that give property owners and operators a single accountable partner for building performance.',
      'Our facilities management approach is built on operational transparency. We implement documented maintenance calendars, digital work order systems, and monthly performance reporting that gives stakeholders visibility into every aspect of building operations. No black boxes, no guesswork — just measurable outcomes tied to clear service standards.',
      'Whether you need full-scope facilities management for a single property or a standardized program across a multi-building portfolio from Ocala to Melbourne, our management team has the operational depth and Central Florida market knowledge to deliver results that protect your asset value and satisfy your tenants.',
    ],
    protocols: [
      'Preventative maintenance scheduling and execution tracking',
      'Vendor procurement, coordination, and performance management',
      'Work order management with documented response times',
      'Building systems inspection and lifecycle reporting',
      'Regulatory compliance tracking (fire, safety, ADA, environmental)',
      'Capital improvement planning and project oversight',
      'Emergency response coordination and after-hours coverage',
      'Monthly operational reporting with KPI dashboards',
    ],
    benefits: [
      'Single point of accountability for all building operations',
      'Reduce operating costs through preventative maintenance discipline',
      'Extend equipment and building system lifespan with proactive care',
      'Improve tenant satisfaction through responsive service delivery',
      'Documented compliance for audits, insurance, and ownership reporting',
      'Scalable programs for single properties or multi-building portfolios',
    ],
    faqs: [
      {
        question: 'What is the difference between facilities management and janitorial service?',
        answer:
          'Janitorial service covers cleaning and sanitation. Facilities management encompasses the full scope of building operations — maintenance planning, vendor management, regulatory compliance, capital planning, work order systems, and operational reporting. Think of facilities management as the operating system for your building, with cleaning as one component within it.',
      },
      {
        question: 'Can you manage facilities across multiple properties?',
        answer:
          'Yes. Our facilities management programs are designed to scale across multi-property portfolios. We implement standardized operating procedures, centralized reporting, and consistent service standards across all locations — giving portfolio managers a single dashboard view of building performance from Ocala to Tampa.',
      },
      {
        question: 'How do you handle emergency maintenance situations?',
        answer:
          'Our facilities management programs include 24/7 emergency response coordination. We maintain a network of vetted specialty contractors across Central Florida and provide after-hours coverage through a dedicated response line. All emergency events are documented with response times and resolution details for ownership reporting.',
      },
    ],
  },
  {
    slug: 'day-porter-services',
    title: 'Day Porter Services',
    description:
      'On-site daytime maintenance professionals ensuring continuous facility upkeep, real-time response to cleaning needs, and consistent presentation standards.',
    longDescription: [
      'High-traffic commercial facilities need more than overnight cleaning — they need continuous daytime maintenance to maintain presentation standards throughout business hours. Axiom Facility Partners provides professional day porter services that keep your facility looking its best from open to close.',
      'Our day porters are trained facility maintenance professionals, not just cleaners. They understand building systems, can identify maintenance issues before they escalate, and serve as an extension of your property management team. From lobby presentation to restroom upkeep, they maintain the standards your tenants and visitors expect throughout the day.',
      'Day porter programs are customized to your facility\'s traffic patterns, peak hours, and priority areas. Our porters operate from documented task lists while maintaining the flexibility to respond to real-time needs as they arise.',
    ],
    protocols: [
      'Continuous lobby and common area presentation',
      'Restroom monitoring and restocking throughout the day',
      'Spill response and immediate clean-up',
      'Conference room reset between meetings',
      'Elevator cab and high-touch surface maintenance',
      'Outdoor entry and courtyard upkeep',
      'Trash and recycling monitoring',
      'Real-time response to tenant requests',
    ],
    benefits: [
      'Maintain facility presentation during business hours',
      'Immediate response to spills and cleaning needs',
      'Reduce the burden on your property management team',
      'Improve tenant and visitor first impressions',
      'Proactive issue identification before problems escalate',
      'Documented daily activity logs for accountability',
    ],
    faqs: [
      {
        question: 'What is the difference between day porter and janitorial service?',
        answer:
          'Janitorial service is typically performed after hours and focuses on thorough cleaning. Day porter service provides continuous daytime maintenance — restroom monitoring, spill response, lobby upkeep, and real-time facility presentation throughout business hours. Most facilities benefit from both.',
      },
      {
        question: 'Can day porters handle light maintenance tasks?',
        answer:
          'Yes. Our day porters are trained to handle minor maintenance tasks like changing light bulbs, adjusting door hardware, and identifying issues that need escalation to your maintenance team. They serve as eyes and ears for your facility operation.',
      },
      {
        question: 'How do you ensure consistent service quality?',
        answer:
          'Day porters work from customized task checklists with documented completion requirements. Our field supervisors conduct regular quality inspections, and we provide monthly service reports to property management.',
      },
    ],
  },
  {
    slug: 'floor-care-maintenance',
    title: 'Floor Care Maintenance',
    description:
      'Specialized floor maintenance programs including strip and wax, burnishing, and coating systems that extend flooring lifespan and reduce replacement costs.',
    longDescription: [
      'Flooring is one of the most expensive and visible assets in any commercial facility. Proper floor care maintenance extends the lifespan of flooring materials by years, reduces replacement costs, and maintains the professional appearance that tenants and visitors notice first. Axiom Facility Partners provides specialized floor care programs for every commercial flooring type.',
      'Our floor care technicians are trained in the science of floor maintenance — understanding the specific chemistry, equipment, and techniques required for VCT, polished concrete, natural stone, carpet, and specialty flooring systems. We don\'t guess at floor care; we follow manufacturer specifications and proven restoration protocols.',
      'From routine maintenance programs to deep restoration projects, our floor care division delivers measurable results that protect your flooring investment and enhance your facility\'s presentation.',
    ],
    protocols: [
      'VCT strip, seal, and wax programs',
      'High-speed burnishing for maintained gloss levels',
      'Polished concrete maintenance and re-coating',
      'Natural stone cleaning and sealing',
      'Carpet extraction and restorative cleaning',
      'Tile and grout deep cleaning and sealing',
      'Anti-slip treatment application',
      'Scheduled maintenance programs with documented cycles',
    ],
    benefits: [
      'Extend flooring lifespan by 3-5 years with proper maintenance',
      'Reduce capital expenditure on premature floor replacement',
      'Maintain consistent appearance across all facility areas',
      'Improve safety with proper slip-resistance maintenance',
      'Documented maintenance history for asset management records',
      'Before and after documentation for property reporting',
    ],
    faqs: [
      {
        question: 'How often should VCT floors be stripped and waxed?',
        answer:
          'Frequency depends on traffic volume, but most commercial VCT floors benefit from a full strip and recoat every 6-12 months, with interim burnishing and top-coating on a monthly or quarterly basis. We assess your specific traffic patterns and recommend an optimal schedule.',
      },
      {
        question: 'Do you handle polished concrete maintenance?',
        answer:
          'Yes. Polished concrete requires specific maintenance protocols to maintain its reflective finish. We provide routine dust mopping, auto-scrubbing with pH-neutral solutions, and periodic re-densifying and re-polishing to maintain the concrete\'s appearance and durability.',
      },
      {
        question: 'Can you restore severely neglected floors?',
        answer:
          'In most cases, yes. We assess the current condition and provide an honest evaluation of whether restoration is viable or if replacement is more cost-effective. Our restoration projects include full documentation with before and after photos for property records.',
      },
    ],
  },
  {
    slug: 'disinfection-protocols',
    title: 'Disinfection Protocols',
    description:
      'Evidence-based sanitation programs using hospital-grade disinfectants and documented protocols to maintain healthy facility environments.',
    longDescription: [
      'Facility sanitation is no longer optional — it\'s a fundamental expectation of tenants, employees, and visitors. Axiom Facility Partners delivers evidence-based disinfection protocols that go beyond surface-level cleaning to create genuinely healthier facility environments.',
      'Our disinfection programs are built on proven methodologies using EPA-registered, hospital-grade disinfectants with documented kill claims. We follow CDC and OSHA guidelines for commercial facility sanitation, and every service is documented with product lot numbers, dwell times, and coverage verification.',
      'Whether you need enhanced daily disinfection for high-touch surfaces, periodic deep sanitization programs, or rapid response protocols for illness events, we deliver measurable results with full documentation for your records.',
    ],
    protocols: [
      'High-touch surface disinfection programs',
      'Electrostatic spray application for full-coverage treatment',
      'Restroom deep sanitization with ATP testing verification',
      'Common area and shared equipment disinfection',
      'Illness response rapid sanitization protocols',
      'Air quality improvement through HVAC-adjacent sanitation',
      'Documentation of products, dwell times, and coverage',
      'Monthly sanitation reporting with measurable metrics',
    ],
    benefits: [
      'Reduce illness-related absenteeism in your facility',
      'Meet tenant expectations for clean, healthy environments',
      'Documented compliance for regulatory and insurance requirements',
      'Evidence-based protocols — not marketing-driven claims',
      'Measurable results through ATP testing and verification',
      'Rapid response capability for illness events',
    ],
    faqs: [
      {
        question: 'What disinfectants do you use?',
        answer:
          'We exclusively use EPA-registered, hospital-grade disinfectants with documented kill claims for relevant pathogens. Product selection is based on surface compatibility, safety profile, and efficacy — not price. We can provide SDS sheets and product specifications for your records.',
      },
      {
        question: 'How do you verify that disinfection is effective?',
        answer:
          'We use ATP (adenosine triphosphate) testing to measure surface contamination levels before and after treatment. This provides objective, measurable data on the effectiveness of our protocols rather than relying on visual inspection alone.',
      },
      {
        question: 'Do you offer ongoing disinfection or just one-time treatments?',
        answer:
          'Both. We recommend ongoing disinfection programs integrated into your regular maintenance schedule for sustained results. One-time deep sanitization is available for specific events or as a starting point before transitioning to a maintenance program.',
      },
    ],
  },
];
