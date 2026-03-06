export interface Service {
  slug: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: 'office-building-cleaning',
    title: 'Office Building Cleaning',
    description:
      'Comprehensive cleaning programs designed to maintain professional environments, protect interior assets, and support tenant satisfaction across multi-tenant office buildings.',
  },
  {
    slug: 'warehouse-facility-cleaning',
    title: 'Warehouse Facility Cleaning',
    description:
      'Industrial-grade cleaning solutions that control dust accumulation, maintain floor integrity, and protect warehouse equipment from premature degradation.',
  },
  {
    slug: 'day-porter-services',
    title: 'Day Porter Services',
    description:
      'On-site daytime maintenance professionals ensuring continuous facility upkeep, real-time response to cleaning needs, and consistent presentation standards.',
  },
  {
    slug: 'floor-care-maintenance',
    title: 'Floor Care Maintenance',
    description:
      'Specialized floor maintenance programs including strip and wax, burnishing, and coating systems that extend flooring lifespan and reduce replacement costs.',
  },
  {
    slug: 'disinfection-protocols',
    title: 'Disinfection Protocols',
    description:
      'Evidence-based sanitation programs using hospital-grade disinfectants and documented protocols to maintain healthy facility environments.',
  },
];
