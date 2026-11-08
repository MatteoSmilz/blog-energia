# Le centrali della natura

[English](README.md) | **Italiano**

Blog di divulgazione scientifica sulla produzione di energia in natura e nella tecnologia: dalla respirazione cellulare nei mitocondri alla fusione nucleare nelle stelle. Gli articoli sono accompagnati da simulazioni interattive scritte da zero.

Il progetto è un lavoro scolastico per il corso di Scienze Naturali.

**Sito:** https://matteosmilz.github.io/blog-energia/

## Stack

- [Astro](https://astro.build) con MDX per pagine e articoli
- Svelte e Canvas per le simulazioni interattive
- KaTeX per le formule, BibTeX per la bibliografia
- Python (NumPy, SciPy, pandas) per l'analisi dei dati di laboratorio e i modelli di riferimento delle simulazioni
- Vitest per i test, Pagefind per la ricerca
- GitHub Actions e GitHub Pages per la pubblicazione

## Struttura

```
src/content/articoli/   articoli in MDX
src/content/relazioni/  relazioni di laboratorio
src/sim/                simulazioni (motore fisico, test, interfaccia)
src/components/         componenti riutilizzabili
python/                 analisi dei dati e modelli di riferimento
dati-grezzi/            misure di laboratorio originali
notebooks/              esplorazioni e prototipi
```

## Eseguire il progetto in locale

Requisiti: Node.js 26 e Python 3.

```bash
git clone https://github.com/matteosmilz/blog-energia.git
cd blog-energia
npm ci
python -m venv .venv
source .venv/bin/activate
pip install -r python/requirements-dev.txt
npm run dev
```

Il sito è poi disponibile su http://localhost:4321/blog-energia/.

## Comandi

| Comando           | Cosa fa                                         |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | server di sviluppo con ricaricamento automatico |
| `npm run dati`    | rigenera i dati prodotti dagli script Python    |
| `npm test`        | esegue i test delle simulazioni                 |
| `npm run build`   | genera il sito statico in `dist/`               |
| `npm run preview` | mostra la build come sarà pubblicata            |

## Licenza

- **Codice**: [MIT](LICENSE)
- **Contenuti** (articoli, relazioni, immagini e dati originali): [CC BY 4.0](LICENSE-CONTENT.md)

Le immagini e i materiali di terze parti mantengono la propria licenza, indicata nei crediti di ciascuna pagina.

## Contributi

Vedi [CONTRIBUTING.md](CONTRIBUTING.md).
