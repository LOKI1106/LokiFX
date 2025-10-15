export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface Niche {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}

declare global {
  interface Window {
  }
}