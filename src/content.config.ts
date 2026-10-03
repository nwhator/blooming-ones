import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['Girl Child', 'Menstrual Health', 'Education', 'Community', 'Events']),
    author: z.string().default('The Blooming Ones Initiative'),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { stories };
