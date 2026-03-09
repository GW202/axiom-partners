import fs from 'fs';
import path from 'path';

export interface SiteConfig {
  companyName: string;
  phone: string;
  phoneRaw: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

const CONFIG_PATH = path.join(process.cwd(), 'data', 'site-config.json');

const defaults: SiteConfig = {
  companyName: 'Axiom Facility Partners',
  phone: '(407) 294-6601',
  phoneRaw: '+14072946601',
  email: 'info@axiomfacilitypartners.com',
  streetAddress: '100 E Pine St',
  city: 'Orlando',
  state: 'FL',
  postalCode: '32801',
  country: 'US',
};

export function getSiteConfig(): SiteConfig {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
      return { ...defaults, ...JSON.parse(raw) };
    }
  } catch {
    // fall through to defaults
  }
  return { ...defaults };
}

export function saveSiteConfig(config: Partial<SiteConfig>): SiteConfig {
  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const merged = { ...getSiteConfig(), ...config };
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(merged, null, 2));
  return merged;
}

export { defaults as siteConfigDefaults };
