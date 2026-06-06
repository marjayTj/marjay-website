export type ProjectMockupType = "payroll" | "pos" | "counseling" | "map";

export interface ProjectScreenshot {
  id: number;
  title: string;
  image: string;
  alt: string;
  isFeatured?: boolean;
}

export interface Project {
  id: number;
  slug: string;
  number: string;
  title: string;
  description: string;
  category: ProjectCategory;
  projectType: string;
  role: string;
  output: string;
  techStack: string[];
  features: string[];
  screenshots: ProjectScreenshot[];
  problem: string;
  solution: string;
  coreModules: string[];
  businessValue: string[];
  designedFor: string[];
  workflow: string[];
  isFeatured: boolean;
  mockup: ProjectMockupType;
  mockupTitle: string;
}

export type ProjectCategory =
  | "Automation"
  | "Analytics"
  | "Web Apps"
  | "Mobile Apps";

export interface LabModule {
  number: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
