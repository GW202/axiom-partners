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

// Use /tmp on serverless (Vercel), fall back to project dir for local dev
function getDataDir(): string {
  const tmpPath = path.join('/tmp', 'axiom-data');
  const localPath = path.join(process.cwd(), 'data');

  // Try local first (dev), fall back to /tmp (production/serverless)
  try {
    if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath, { recursive: true });
    }
    // Test write access
    const testFile = path.join(localPath, '.write-test');
    fs.writeFileSync(testFile, '');
    fs.unlinkSync(testFile);
    return localPath;
  } catch {
    // Read-only filesystem — use /tmp
    if (!fs.existsSync(tmpPath)) {
      fs.mkdirSync(tmpPath, { recursive: true });
    }
    return tmpPath;
  }
}

const defaults: SiteConfig = {
  companyName: 'Axiom Facility Partners',
  phone: '(407) 342-3195',
  phoneRaw: '+14073423195',
  email: 'info@axiomfacilitypartners.com',
  streetAddress: '2750 Taylor Ave',
  city: 'Orlando',
  state: 'FL',
  postalCode: '32806',
  country: 'US',
};

export function getSiteConfig(): SiteConfig {
  try {
    const configPath = path.join(getDataDir(), 'site-config.json');
    if (fs.existsSync(configPath)) {
      const raw = fs.readFileSync(configPath, 'utf-8');
      return { ...defaults, ...JSON.parse(raw) };
    }
  } catch {
    // fall through to defaults
  }
  return { ...defaults };
}

export function saveSiteConfig(config: Partial<SiteConfig>): SiteConfig {
  const dataDir = getDataDir();
  const configPath = path.join(dataDir, 'site-config.json');
  const merged = { ...getSiteConfig(), ...config };
  fs.writeFileSync(configPath, JSON.stringify(merged, null, 2));
  return merged;
}

export { defaults as siteConfigDefaults };
