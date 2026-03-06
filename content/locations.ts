export interface Location {
  slug: string;
  name: string;
  state: string;
}

export const locations: Location[] = [
  { slug: 'orlando', name: 'Orlando', state: 'Florida' },
  { slug: 'lake-mary', name: 'Lake Mary', state: 'Florida' },
  { slug: 'sanford', name: 'Sanford', state: 'Florida' },
  { slug: 'winter-park', name: 'Winter Park', state: 'Florida' },
  { slug: 'tampa', name: 'Tampa', state: 'Florida' },
];
