import { getCollection, type CollectionEntry } from "astro:content";
import { slug } from "./testo";

export type Articolo = CollectionEntry<"articoli">;
export type Relazione = CollectionEntry<"relazioni">;
export type Quinta = CollectionEntry<"quinte">;

const mostraBozze = import.meta.env.DEV;

function piuRecentiPrima<T extends { data: { pubblicato: Date } }>(
    voci: T[],
): T[] {
    return voci.sort(
        (a, b) => b.data.pubblicato.getTime() - a.data.pubblicato.getTime(),
    );
}

export async function getArticoli(): Promise<Articolo[]> {
    const articoli = await getCollection(
        "articoli",
        ({ data }) => mostraBozze || !data.bozza,
    );
    return piuRecentiPrima(articoli);
}

export async function getRelazioni(): Promise<Relazione[]> {
    const relazioni = await getCollection(
        "relazioni",
        ({ data }) => mostraBozze || !data.bozza,
    );
    return piuRecentiPrima(relazioni);
}

export function scegliInEvidenza(articoli: Articolo[]): Articolo | undefined {
    return articoli.find((a) => a.data.inEvidenza) ?? articoli[0];
}

export async function getQuinte(): Promise<Quinta[]> {
    const quinte = await getCollection(
        "quinte",
        ({ data }) => mostraBozze || !data.bozza,
    );
    return piuRecentiPrima(quinte);
}

export async function getQuintePerArticolo(
    idArticolo: string,
): Promise<Quinta[]> {
    const quinte = await getQuinte();
    return quinte.filter((q) =>
        q.data.articoli.some((rif) => rif.id === idArticolo),
    );
}

export interface GruppoTag {
    nome: string;
    articoli: Articolo[];
}

export function raggruppaPerTag(articoli: Articolo[]): Map<string, GruppoTag> {
    const gruppi = new Map<string, GruppoTag>();
    for (const articolo of articoli) {
        for (const tag of articolo.data.tag) {
            const chiave = slug(tag);
            if (!gruppi.has(chiave)) {
                gruppi.set(chiave, { nome: tag, articoli: [] });
            }
            gruppi.get(chiave)!.articoli.push(articolo);
        }
    }
    return gruppi;
}
