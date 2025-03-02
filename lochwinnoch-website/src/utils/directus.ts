type Global = {
  title: string;
  description: string;
};

type Image = {
  id: string;
  src: string;
  description?: string;
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
  isPublished: boolean;
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
  isPublished: boolean;
  content: string;
  slug?: string;
};

type AboutItem = {
  id: number;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  title: string;
  heroImage: Image | null;
  isPublished: boolean;
  content: string;
  slug?: string;
};

type Schema = {
  global: Global;
  projects: Project[];
  news: NewsItem[];
  aboutItems: AboutItem[];
};

export type { Global, Image, Project, NewsItem, AboutItem, Schema };
