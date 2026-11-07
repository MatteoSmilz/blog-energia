export const SERIE = {
    cellulare: {
        nome: 'Scala cellulare',
        descrizione: 'Testo segnaposto: descrizione della serie cellulare.',
    },
    terrestre: {
        nome: 'Scala terrestre',
        descrizione: 'Testo segnaposto: descrizione della serie cellulare.',
    },
    cosmica: {
        nome: 'Scala cosmica',
        descrizione: 'Testo segnaposto: descrizione della serie cellulare.',
    },
} as const;

export type Serie = keyof typeof SERIE;
export const NOMI_SERIE = Object.keys(SERIE) as [Serie, ...Serie[]];