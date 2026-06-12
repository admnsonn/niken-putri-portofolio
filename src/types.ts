export interface Project {
  id: string;
  title: string;
  category: "Alat Peraga" | "Pembelajaran Digital" | "Literasi & Numerasi" | "Ekstrakurikuler" | "Lainnya";
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  impact: string;
  tools: string[];
  imageUrl: string;
  achievementBadge?: string;
  colorTheme: string; // Tailwind class background
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface Testimony {
  quote: string;
  author: string;
  role: string;
  relationOrSchool: string;
}
