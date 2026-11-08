import type { NomeIcona } from '../components/icone';
import type { Serie } from '../lib/serie';

export interface EventoEnergia {
    nome: string;
    valoreEV: number;
    icona: NomeIcona;
    serie?: Serie;
    approssimato?: boolean;
    articolo?: string;
    fonte: string;
}

export const EVENTI_HOME: EventoEnergia[] = [
    {
        nome: 'idrolisi di una molecola di ATP',
        valoreEV: 0.32,
        icona: 'atp',
        serie: 'cellulare',
        fonte: '[fonte da inserire]',
    },
    {
        nome: 'un fotone di luce visibile',
        valoreEV: 2,
        icona: 'fotone',
        approssimato: true,
        fonte: '[fonte da inserire]',
    },
    {
        nome: 'ossidazione di una molecola di glucosio',
        valoreEV: 29.7,
        icona: 'glucosio',
        serie: 'cellulare',
        fonte: '[fonte da inserire]',
    },
    {
        nome: 'fusione di un nucleo di elio nel Sole',
        valoreEV: 26.7e6,
        icona: 'elio',
        serie: 'cosmica',
        fonte: '[fonte da inserire]',
    },
    {
        nome: 'fissione di un nucleo di uranio-235',
        valoreEV: 2e8,
        icona: 'fissione',
        serie: 'terrestre',
        approssimato: true,
        fonte: '[fonte da inserire]',
    },
];
