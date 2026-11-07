import { getCollection, type CollectionEntry } from "astro:content";

export type Articolo = CollectionEntry<'articoli'>;
export type Relazione = CollectionEntry<'relazioni'>;

const mostraBozze = import.meta.env.DEV;

function piuRecentiPrima<T extends { data: { pubblicato: Date } }>(voci: T[]): T[] {
    return voci.sort((a, b) => b.data.pubblicato.getTime() - a.data.pubblicato.getTime());
}

export async function getArticoli(): Promise<Articolo[]> {
    const articoli = await getCollection('articoli', ({ data }) => mostraBozze || !data.bozza);
    return piuRecentiPrima(articoli);
}

export async function getRelazioni(): Promise<Relazione[]> {
    const relazioni = await getCollection('relazioni', ({ data }) => mostraBozze || !data.bozza);
    return piuRecentiPrima(relazioni);
}

export function scegliInEvidenza(articoli: Articolo[]): Articolo | undefined {
    return articoli.find((a) => a.data.inEvidenza) ?? articoli[0];
}