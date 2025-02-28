import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(["website", "article"]).default("website")
});

// Collections by category:
// - Projects
// - News
// - About Items
// - Misc Text

// Define project collection schema
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string().optional()
      })
      .optional(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional()
  })
});

// Define news collection schema
const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    featureImage: z
      .object({
        src: z.string(),
        alt: z.string().optional()
      })
      .optional(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    isFeatured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seo: seoSchema.optional()
  })
});

//Define about items collection schema
const aboutItems = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/aboutItems" }),
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional()
  })
});

//Define about items collection schema
const miscText = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/miscText" }),
  schema: z.object({
    title: z.string(),
    featureImage: z
      .object({
        src: z.string(),
        alt: z.string().optional()
      })
      .optional(),
    seo: seoSchema.optional()
  })
});

export const collections = { news, projects, aboutItems, miscText };
