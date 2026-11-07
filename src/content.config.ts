import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articoli = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/articoli' }),
    schema: z.object({
        titolo: z.string(),
        sottotitolo: z.string().optional(),
        data: z.coerce.date(),
        serie: z.enum(['cellulare', 'terrestre', 'cosmica']),
        tag: z.array(z.string()).default([]),
        bozza: z.boolean().default(false),
    }),
});

const relazioni = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/relazioni' }),
    schema: z.object({
        titolo: z.string(),
        data: z.coerce.date(),
        pdf: z.string().optional(),
        bozza: z.boolean().default(false),
    }),
});

export const collections = { articoli, relazioni };