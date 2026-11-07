import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';

export default defineConfig({
    site: 'https://tuoutente.github.io',
    base: '/blog-energia',
    integrations: [mdx(), svelte()],
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