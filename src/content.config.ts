import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    niche: z.array(z.string()),
    format: z.string(),
    client: z.string().optional(),
    publication: z.string().optional(),
    role: z.string().optional(),
    date: z.string().optional(),
    featured: z.boolean().default(false),
    ghostwritten: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    status: z.enum(["published", "sample", "placeholder"]).default("published"),
    workType: z.enum([
      "ghostwritten",
      "bylined",
      "website-copy",
      "campaign",
      "sample-set"
    ]),
    summary: z.string(),
    objective: z.string(),
    approach: z.string(),
    angle: z.string(),
    deliverableType: z.string(),
    proofLabel: z.string(),
    industries: z.array(z.string()).default([]),
    placeholder: z.boolean().default(false)
  })
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    audience: z.string(),
    fit: z.string(),
    includes: z.array(z.string()),
    order: z.number()
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({}).passthrough()
});

export const collections = { work, services, pages };
