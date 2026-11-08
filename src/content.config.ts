import { defineCollection, reference, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { NOMI_SERIE } from './lib/serie';

function schemaCopertina({ image }: SchemaContext) {
    return z.object({
        immagine: image(),
        alt: z.string().min(1),
        crediti: z.string().min(1),
        link: z.url().optional(),
    });
}

const articoli = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/articoli' }),
    schema: (contesto) =>
        z.object({
            titolo: z.string(),
            sottotitolo: z.string().optional(),
            descrizione: z.string().max(200),
            pubblicato: z.coerce.date(),
            aggiornato: z.coerce.date().optional(),
            serie: z.enum(NOMI_SERIE),
            tipo: z.enum(['articolo', 'intervista']).default('articolo'),
            tag: z.array(z.string()).default([]),
            copertina: schemaCopertina(contesto),
            inEvidenza: z.boolean().default(false),
            bozza: z.boolean().default(false),
        }),
});

const relazioni = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/relazioni' }),
    schema: (contesto) =>
        z.object({
            titolo: z.string(),
            descrizione: z.string().max(200),
            pubblicato: z.coerce.date(),
            materia: z.string().optional(),
            copertina: schemaCopertina(contesto).optional(),
            pdf: z.string().optional(),
            bozza: z.boolean().default(false),
        }),
});

const quinte = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/quinte' }),
    schema: (contesto) =>
        z.object({
            titolo: z.string(),
            descrizione: z.string().max(200),
            pubblicato: z.coerce.date(),
            articoli: z.array(reference('articoli')).min(1),
            copertina: schemaCopertina(contesto).optional(),
            bozza: z.boolean().default(false),
        }),
});

export const collections = { articoli, relazioni, quinte };
