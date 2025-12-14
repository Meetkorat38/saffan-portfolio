export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  year?: string;
  services?: string;
  gallery?: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  gpa: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  description?: string;
}

export interface Software {
  name: string;
  abbr: string;
}
