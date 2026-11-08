import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getArticoli } from "../lib/articoli";
import { url } from "../lib/url";

export async function GET(contesto: APIContext) {
    const articoli = await getArticoli();
    return rss({
        title: "Le centrali della natura",
        description:
            "La produzione di energia in natura e nella tecnologia, dalla cellula alle stelle.",
        site: new URL(url(), contesto.site),
        items: articoli.map((a) => ({
            title: a.data.titolo,
            description: a.data.descrizione,
            pubDate: a.data.pubblicato,
            link: url(`articoli/${a.id}`),
            categories: [...a.data.tag],
        })),
        customData: "<language>it-it</language>",
    });
}
