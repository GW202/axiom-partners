export interface Industry {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  challenges: string[];
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: 'corporate-offices',
    title: 'Corporate Offices',
    description:
      'Maintaining professional environments that reflect corporate standards, protect interior finishes, and support employee productivity.',
    longDescription: [
      'Corporate office environments demand a level of cleanliness and presentation that directly impacts employee productivity, client perception, and tenant retention. Axiom Facility Partners understands that your office building is both a workplace and a brand statement — every detail matters.',
      'Our corporate office maintenance programs address the complete facility environment: from executive suites and board rooms to open floor plans, shared kitchens, and high-traffic corridors. We build programs around your operating hours, security requirements, and the specific standards your organization expects.',
    ],
    challenges: [
      'Inconsistent cleaning quality across different areas and floors',
      'Vendor turnover leading to constant retraining and quality drops',
      'Difficulty maintaining presentation during business hours',
      'Tenant complaints about restroom cleanliness and supply levels',
      'Lack of documented service for property management reporting',
      'Cleaning vendors who don\'t understand commercial building operations',
    ],
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'facilities-management',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
  },
  {
    slug: 'logistics-warehouses',
    title: 'Logistics Warehouses',
    description:
      'Controlling dust, maintaining floors, and ensuring safety compliance in high-traffic distribution and logistics facilities.',
    longDescription: [
      'Distribution centers, fulfillment facilities, and logistics warehouses operate under constant pressure — high throughput, heavy equipment traffic, and relentless operational demands. Facility maintenance in these environments requires industrial capability and an understanding of logistics operations.',
      'Axiom Facility Partners delivers warehouse cleaning programs that address the real challenges of logistics facilities: concrete floor degradation, dust accumulation on equipment and inventory, safety compliance, and the need for maintenance that doesn\'t interfere with operations.',
    ],
    challenges: [
      'Concrete floor deterioration from heavy fork truck traffic',
      'Dust accumulation damaging equipment and inventory',
      'Safety compliance concerns with debris and spill management',
      'Finding vendors with industrial-grade equipment capability',
      'Scheduling maintenance around 24/7 operations',
      'Poor audit scores from neglected facility conditions',
    ],
    services: [
      'warehouse-facility-cleaning',
      'floor-care-maintenance',
      'day-porter-services',
    ],
  },
  {
    slug: 'commercial-property-management',
    title: 'Commercial Property Management',
    description:
      'Reliable facility maintenance programs that protect property value, reduce tenant complaints, and simplify vendor management.',
    longDescription: [
      'Property managers juggle dozens of responsibilities — facility maintenance shouldn\'t require constant oversight. Axiom Facility Partners serves as a true maintenance partner for commercial property management companies, delivering reliable service that protects asset value and keeps tenants satisfied.',
      'We understand the property management perspective: you need consistent quality, transparent communication, documented service for owner reporting, and a vendor who takes ownership of problems instead of creating them. Our programs are built around accountability, reporting, and the operational reality of managing multi-tenant commercial assets.',
    ],
    challenges: [
      'Unreliable vendors requiring constant supervision',
      'Tenant complaints escalating to property management',
      'Lack of documentation for owner and investor reporting',
      'Managing multiple cleaning vendors across a portfolio',
      'Balancing quality expectations with budget constraints',
      'Vendor turnover disrupting service continuity',
    ],
    services: [
      'office-building-cleaning',
      'day-porter-services',
      'facilities-management',
      'floor-care-maintenance',
      'disinfection-protocols',
    ],
  },
  {
    slug: 'medical-offices',
    title: 'Medical Offices',
    description:
      'Strict sanitation protocols and compliance-driven cleaning programs designed for healthcare environments and patient safety.',
    longDescription: [
      'Medical offices and healthcare facilities operate under strict sanitation requirements that general cleaning vendors often fail to meet. Axiom Facility Partners delivers compliance-driven cleaning programs designed specifically for medical environments — where patient safety and infection prevention are non-negotiable.',
      'Our healthcare cleaning protocols follow CDC guidelines for ambulatory care settings, with documented procedures for exam rooms, waiting areas, lab spaces, and common areas. We train our teams specifically for medical facility requirements, including proper PPE use, biohazard awareness, and HIPAA-compliant practices.',
    ],
    challenges: [
      'General cleaning vendors who don\'t understand healthcare requirements',
      'Infection prevention compliance and documentation gaps',
      'Exam room turnover cleaning between patients',
      'Biohazard and sharps container management',
      'Maintaining sterile standards in procedure areas',
      'Meeting regulatory audit requirements for cleanliness documentation',
    ],
    services: [
      'office-building-cleaning',
      'disinfection-protocols',
      'day-porter-services',
      'floor-care-maintenance',
    ],
  },
];
