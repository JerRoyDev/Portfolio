export interface ProjectData {
  src: string;
  alt: string;
  title: string;
  description: string;
  repoURL: string;
  pageURL: string;
  tools: string[];
  category: string;
  role: string;
  status: string;
}

export interface ProjectCardProps {
  data: ProjectData;
  even?: boolean;
}

export interface ProjectModalProps {
  data: ProjectData;
}