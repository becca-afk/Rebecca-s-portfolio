export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  badge?: string;
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
}

export interface Coursework {
  title: string;
  grade?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  downloadName?: string;
  iconType: 'cv' | 'resume' | 'letter';
}

export interface SkillItem {
  name: string;
  detail?: string;
  grade?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}
