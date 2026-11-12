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
  iconType: 'cv' | 'resume' | 'letter';
}
