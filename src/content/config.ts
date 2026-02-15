import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        date: z.string(),
        employmentType: z.string().optional(),
        location: z.string().optional(),
        technologies: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        tags: z.array(z.any()), // Tags are currently complex objects in tags.ts
        link: z.string().optional(),
        github: z.string().optional(),
        type: z.enum(['work', 'personal']),
    }),
});

export const collections = {
    'experience': experience,
    'projects': projects,
};
