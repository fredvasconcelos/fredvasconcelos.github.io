import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
};