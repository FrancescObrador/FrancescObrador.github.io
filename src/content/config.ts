import { defineCollection, z } from 'astro:content';
import { TAGS } from '../data/tags';

const experience = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        date: z.string(),
        startDate: z.string().optional(),
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
        tags: z.array(z.enum(Object.keys(TAGS) as [string, ...string[]])),
        link: z.string().optional(),
        github: z.string().optional(),
        type: z.enum(['work', 'personal']),
    }),
});

export const collections = {
    'experience': experience,
    'projects': projects,
};
