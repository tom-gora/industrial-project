import type { NewsItem, Project, Schema } from "./directus";
import { createDirectus, readItems, rest } from "@directus/sdk";

const DIRECTUS_URL: string = import.meta.env.DIRECTUS_URL;

// types:

const publicProjectsDataScope = {
  fields: [
    "id",
    "title",
    "description",
    "content",
    "isFeatured",
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
    "isFeatured",
    "tags",
    "slug",
    "date_created",
    "date_updated",
    {
      heroImage: ["id", "description"]
    }
  ]
};

// getters:

const directusClient = createDirectus<Schema>(DIRECTUS_URL).with(rest());

const fetchProjects = async () => {
  if (!DIRECTUS_URL) return [];
  return (await directusClient.request(readItems("projects", publicProjectsDataScope))) as Project[];
};

const fetchNews = async () => {
  if (!DIRECTUS_URL) return [];
  return (await directusClient.request(readItems("news", publicNewsDataScope))) as NewsItem[];
};

//data utils

const sortDirectusByDate = (itemA: NewsItem | Project, itemB: NewsItem | Project) => {
  const valA = itemA.date_updated ?? itemA.date_created;
  const valB = itemB.date_updated ?? itemB.date_created;

  return new Date(valB).getTime() - new Date(valA).getTime();
};

export { fetchProjects, fetchNews, sortDirectusByDate };
