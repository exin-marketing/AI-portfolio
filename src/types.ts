export type PageId =
  | 'home'
  | 'aisp'
  | 'portfolio'
  | 'essentials'
  | 'foundation'
  | 'generative-ai'
  | 'machine-learning'
  | 'compliance'
  | 'risk-owasp'
  | 'partner'
  | 'learning-paths'
  | 'faqs'
  | 'case-studies';

export interface Certification {
  id: PageId;
  name: string;
  shortDesc: string;
  badgeUrl: string;
  levelTag: 'Entry Level' | 'Foundation' | 'Award' | 'Professional' | 'Coming Soon 🔐';
  levelColor: string; // Tailwinds colors or CSS Hex
  longDesc: string;
  targetAudience: string[];
  examInfo: {
    duration: string;
    questions: string;
    format: string;
    passingMark: string;
    languages: string;
  };
  syllabusObjectives: string[];
  keyBenefits: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Enterprise' | 'Partner' | 'AISP';
}

export interface CaseStudy {
  id: string;
  title: string;
  organisation: string;
  region: string;
  challenge: string;
  solution: string;
  impact: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
  certifiedCount: string;
  tags: string[];
}

export interface LeadSubmission {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  country: string;
  type: 'Enterprise Client' | 'Accredited Partner' | 'Professional Specialist';
  message?: string;
  interestInAISP?: boolean;
}
