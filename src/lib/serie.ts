import type { ImageMetadata } from "astro";
import type { NomeIcona } from "../components/icone";

export interface InfoSerie {
    nome: string;
    descrizione: string;
    icona: NomeIcona;
    copertina?: ImageMetadata;
}

export const SERIE = {
    cellulare: {
        nome: "Scala cellulare",
        descrizione: "Testo segnaposto: descrizione della serie cellulare.",
        icona: "mitocondrio",
    },
    terrestre: {
        nome: "Scala terrestre",
        descrizione: "Testo segnaposto: descrizione della serie terrestre.",
        icona: "turbina",
    },
    cosmica: {
        nome: "Scala cosmica",
        descrizione: "Testo segnaposto: descrizione della serie cosmica.",
        icona: "stella",
    },
} satisfies Record<string, InfoSerie>;

export type Serie = keyof typeof SERIE;
export const NOMI_SERIE = Object.keys(SERIE) as [Serie, ...Serie[]];
