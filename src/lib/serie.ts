import type { ImageMetadata } from 'astro';

export interface InfoSerie {
    nome: string;
    descrizione: string;
    copertina?: ImageMetadata;
}

export const SERIE = {
    cellulare: {
        nome: 'Scala cellulare',
        descrizione: 'Testo segnaposto: descrizione della serie cellulare.',
    },
    terrestre: {
        nome: 'Scala terrestre',
        descrizione: 'Testo segnaposto: descrizione della serie terrestre.',
    },
    cosmica: {
        nome: 'Scala cosmica',
        descrizione: 'Testo segnaposto: descrizione della serie cosmica.',
    },
} satisfies Record<string, InfoSerie>;

export type Serie = keyof typeof SERIE;
export const NOMI_SERIE = Object.keys(SERIE) as [Serie, ...Serie[]];