type Global = {
  title: string;
  description: string;
};

type Image = {
  id: string;
  src: string;
  alt?: string;
};

type Project = {
  id: number;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  title: string;
  heroImage: Image | null;
  description: string;
  isFeatured: boolean;
  content: string;
  slug?: string;
};

type NewsItem = {
  id: number;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  title: string;
  heroImage: Image | null;
  excerpt: string;
  isFeatured: boolean;
  content: string;
  slug?: string;
};

type Schema = {
  global: Global;
  projects: Project[];
  news: NewsItem[];
};

export type { Global, Image, Project, Schema, NewsItem };
