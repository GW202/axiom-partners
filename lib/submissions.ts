import fs from 'fs';
import path from 'path';

export interface Submission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  facilityType: string;
  squareFootage?: string;
  services: string[];
  message?: string;
  createdAt: string;
}

// Use /tmp on serverless (Vercel), fall back to project dir for local dev
function getDataDir(): string {
  const tmpPath = path.join('/tmp', 'axiom-data');
  const localPath = path.join(process.cwd(), 'data');

  try {
    if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath, { recursive: true });
    }
    const testFile = path.join(localPath, '.write-test');
    fs.writeFileSync(testFile, '');
    fs.unlinkSync(testFile);
    return localPath;
  } catch {
    if (!fs.existsSync(tmpPath)) {
      fs.mkdirSync(tmpPath, { recursive: true });
    }
    return tmpPath;
  }
}

function getFilePath(): string {
  return path.join(getDataDir(), 'submissions.json');
}

export function getSubmissions(): Submission[] {
  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

function saveSubmissions(submissions: Submission[]): void {
  fs.writeFileSync(getFilePath(), JSON.stringify(submissions, null, 2), 'utf-8');
}

export function addSubmission(data: Omit<Submission, 'id' | 'createdAt'>): Submission {
  const submissions = getSubmissions();
  const submission: Submission = {
    ...data,
    id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  submissions.unshift(submission);
  saveSubmissions(submissions);
  return submission;
}

export function deleteSubmission(id: string): boolean {
  const submissions = getSubmissions();
  const filtered = submissions.filter((s) => s.id !== id);
  if (filtered.length === submissions.length) return false;
  saveSubmissions(filtered);
  return true;
}
