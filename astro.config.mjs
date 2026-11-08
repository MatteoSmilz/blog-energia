import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';

export default defineConfig({
    site: 'https://matteosmilz.github.io',
    base: '/blog-energia',
    integrations: [mdx(), svelte()],
    image: {
        domains: ['i.ytimg.com'],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Bricolage Grotesque',
            cssVariable: '--font-bricolage',
            weights: ['200 800'],
            styles: ['normal'],
            fallbacks: ['system-ui', 'sans-serif'],
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Literata',
            cssVariable: '--font-literata',
            weights: ['200 900'],
            styles: ['normal', 'italic'],
            fallbacks: ['Georgia', 'serif'],
        },
    ],
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [
                rehypeKatex,
                [rehypeCitation, { bibliography: 'src/bibliografia.bib', csl: 'apa', linkCitations: true }],
            ],
        }),
    },
});