# Le centrali della natura

**English** | [Italiano](README.it.md)

A science communication blog about how energy is produced in nature and technology: from cellular respiration in mitochondria to nuclear fusion in stars. Articles are written in Italian and come with interactive simulations built from scratch.

This is a school project for a Natural Sciences course.

**Website:** https://matteosmilz.github.io/blog-energia/

## Stack

- [Astro](https://astro.build) with MDX for pages and articles
- Svelte and Canvas for interactive simulations
- KaTeX for equations, BibTeX for references
- Python (NumPy, SciPy, pandas) for lab data analysis and reference models of the simulations
- Vitest for testing, Pagefind for search
- GitHub Actions and GitHub Pages for deployment

## Structure

```
src/content/articoli/   articles (MDX)
src/content/relazioni/  lab reports
src/sim/                simulations (physics engine, tests, UI)
src/components/         reusable components
python/                 data analysis and reference models
dati-grezzi/            raw lab measurements
notebooks/              explorations and prototypes
```

## Running locally

Requirements: Node.js 26 and Python 3.

```bash
git clone https://github.com/matteosmilz/blog-energia.git
cd blog-energia
npm ci
python -m venv .venv
source .venv/bin/activate
pip install -r python/requirements-dev.txt
npm run dev
```

The site is then available at http://localhost:4321/blog-energia/.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | development server with hot reload |
| `npm run dati` | regenerate data produced by the Python scripts |
| `npm test` | run the simulation tests |
| `npm run build` | build the static site into `dist/` |
| `npm run preview` | preview the production build |

## License

- **Code**: [MIT](LICENSE)
- **Content** (articles, reports, original images and data): [CC BY 4.0](LICENSE-CONTENT.md)

Third-party images and materials keep their own licenses, as stated in the credits of each page.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).