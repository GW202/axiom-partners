export interface Industry {
  slug: string;
  title: string;
  description: string;
}

export const industries: Industry[] = [
  {
    slug: 'corporate-offices',
    title: 'Corporate Offices',
    description:
      'Maintaining professional environments that reflect corporate standards, protect interior finishes, and support employee productivity.',
  },
  {
    slug: 'logistics-warehouses',
    title: 'Logistics Warehouses',
    description:
      'Controlling dust, maintaining floors, and ensuring safety compliance in high-traffic distribution and logistics facilities.',
  },
  {
    slug: 'commercial-property-management',
    title: 'Commercial Property Management',
    description:
      'Reliable facility maintenance programs that protect property value, reduce tenant complaints, and simplify vendor management.',
  },
  {
    slug: 'medical-offices',
    title: 'Medical Offices',
    description:
      'Strict sanitation protocols and compliance-driven cleaning programs designed for healthcare environments and patient safety.',
  },
];
