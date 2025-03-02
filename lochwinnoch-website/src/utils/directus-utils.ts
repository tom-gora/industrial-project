import type { AboutItem, NewsItem, Project, Schema } from "./directus";
import { createDirectus, readItems, readSingleton, rest } from "@directus/sdk";

const DIRECTUS_URL: string = import.meta.env.DIRECTUS_URL;

// declare fields retrieved from cms for each collection

const siteConfigDataScope = {
  fields: [
    "headerNavLinks",
    "footerNavLinks",
    "socialLinks",
    "title",
    "description",
    { logo: ["id", "description"] },
    { image: ["id", "description"] },
    { hero: ["title", "text"] },
    "newsPerPage",
    "projectsPerPage"
  ]
};

const publicProjectsDataScope = {
  fields: [
    "id",
    "title",
    "description",
    "content",
    "isFeatured",
    "isPublished",
    "slug",
    "date_created",
    "date_updated",
    {
      heroImage: ["id", "description"]
    }
  ]
};

const publicNewsDataScope = {
  fields: [
    "id",
    "title",
    "excerpt",
    "content",
    "tags",
    "isFeatured",
    "isPublished",
    "slug",
    "date_created",
    "date_updated",
    {
      heroImage: ["id", "description"]
    }
  ]
};

const aboutDataScope = {
  fields: [
    "id",
    "title",
    "content",
    "isPublished",
    "slug",
    "date_created",
    "date_updated",
    {
      heroImage: ["id", "description"]
    }
  ]
};

// instantiate sdk client object
const directusClient = createDirectus<Schema>(DIRECTUS_URL).with(rest());

// getters filtering out unpublished content:

const getConfig = async () => {
  if (!DIRECTUS_URL) return [];
  return (await directusClient.request(readSingleton("site_config", siteConfigDataScope))) as any;
};

const fetchProjects = async () => {
  if (!DIRECTUS_URL) return [];
  const projects = (await directusClient.request(readItems("projects", publicProjectsDataScope))) as Project[];
  return projects.filter((p) => Boolean(p.isPublished));
};

const fetchNews = async () => {
  if (!DIRECTUS_URL) return [];
  const news = (await directusClient.request(readItems("news", publicNewsDataScope))) as NewsItem[];
  return news.filter((n) => Boolean(n.isPublished));
};

const fetchAbout = async () => {
  if (!DIRECTUS_URL) return [];
  const aboutItems = (await directusClient.request(readItems("aboutItems", aboutDataScope))) as AboutItem[];
  return aboutItems.filter((a) => Boolean(a.isPublished));
};

// data helpers:

const sortDirectusByDate = (itemA: NewsItem | Project, itemB: NewsItem | Project) => {
  const valA = itemA.date_updated ?? itemA.date_created;
  const valB = itemB.date_updated ?? itemB.date_created;

  return new Date(valB).getTime() - new Date(valA).getTime();
};

const setPagination = (collection: NewsItem[] | Project[], limit: number, currentUrl: URL) => {
  const count = collection.length;
  const lastPage = Math.ceil(count / limit);
  const currentPage = parseInt(currentUrl.searchParams.get("page") || "1");
  const startIndex = (currentPage - 1) * limit;
  const endIndex = Math.min(startIndex + limit, count);
  const currentBatch: NewsItem[] | Project[] = collection.slice(startIndex, endIndex);
  return {
    slice: currentBatch,
    current: currentPage,
    last: lastPage,
    prev: currentPage > 1 ? currentPage - 1 : null,
    next: currentPage < lastPage ? currentPage + 1 : null
  };
};

export { fetchProjects, fetchNews, fetchAbout, getConfig, setPagination, sortDirectusByDate };
