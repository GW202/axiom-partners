export interface Testimonial {
  name: string;
  title: string;
  company: string;
  location: string;
  quote: string;
  highlight: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'David Hartman',
    title: 'Director of Operations',
    company: 'Meridian Property Group',
    location: 'Orlando, FL',
    quote:
      "We went through three janitorial companies in two years before we found Axiom. The difference wasn't just the cleaning — it was that someone finally understood what we were actually asking for. Our tenants stopped complaining. Our maintenance calls dropped by half. I don't think people realize how much a dirty building costs you until someone shows you what a clean one looks like.",
    highlight: 'Maintenance calls dropped by half',
  },
  {
    name: 'Rachel Simmons',
    title: 'Facilities Manager',
    company: 'Lakeview Medical Center',
    location: 'Lake Mary, FL',
    quote:
      "In healthcare, clean isn't a preference — it's a regulation. I've worked with companies that treated disinfection like an afterthought. Axiom treats it like it matters, because in our world, it genuinely does. The first week they were here, one of their team members flagged a cross-contamination risk in our break room that we'd been living with for months. That's not cleaning. That's partnership.",
    highlight: 'Flagged a contamination risk we missed for months',
  },
  {
    name: 'Marcus Okafor',
    title: 'General Manager',
    company: 'Southeast Logistics Hub',
    location: 'Sanford, FL',
    quote:
      "I manage 280,000 square feet of warehouse space that runs 24/7. When I tell you I've had cleaning crews quit after one shift because of the scale, I'm not exaggerating. Axiom came in, walked the whole facility, and didn't flinch. They built a program around our shift changes and dock schedules — nobody ever asked us about that before. It's been fourteen months now and I honestly forget they're here, which is the highest compliment I can give.",
    highlight: "Fourteen months and I forget they're here",
  },
  {
    name: 'Jennifer Walsh',
    title: 'VP of Asset Management',
    company: 'Cornerstone Commercial Real Estate',
    location: 'Winter Park, FL',
    quote:
      "I oversee eleven commercial properties. When prospective tenants walk a space, the first thing they notice isn't the floor plan — it's whether the lobby smells right, whether the elevator is clean, whether someone cares. Axiom gave us that. Our vacancy rate on managed properties dropped from 12% to under 4% in the same year we brought them on. Correlation? Maybe. But I'm not changing a thing.",
    highlight: 'Vacancy rate dropped from 12% to under 4%',
  },
  {
    name: 'Thomas Reeves',
    title: 'Building Superintendent',
    company: 'SunTrust Office Tower',
    location: 'Tampa, FL',
    quote:
      "I've been in this building for nineteen years. I've seen every vendor come through — the ones that promise the world and the ones that actually show up. Axiom shows up. Every single day. And when something's off, I don't have to chase anyone. Their day porter, Miguel, knows this building better than most of my own staff. You can't buy that kind of consistency. You earn it.",
    highlight: 'They show up. Every single day.',
  },
  {
    name: 'Christine Delgado',
    title: 'Office Manager',
    company: 'Pinnacle Financial Advisors',
    location: 'Winter Garden, FL',
    quote:
      "We're a small firm — only 6,000 square feet — and I wasn't sure a company like Axiom would take us seriously. They treated us exactly the same as their big accounts. Our conference room used to have this persistent dust issue that drove our partners insane during client meetings. Gone. Completely gone. It sounds like a small thing, but when your clients are trusting you with their retirement, every detail matters.",
    highlight: 'They treated us exactly like their big accounts',
  },
];
