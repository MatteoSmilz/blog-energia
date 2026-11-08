import Atp from './Atp.astro';
import Elio from './Elio.astro';
import Fissione from './Fissione.astro';
import Fotone from './Fotone.astro';
import Glucosio from './Glucosio.astro';
import Mitocondrio from './Mitocondrio.astro';
import Stella from './Stella.astro';
import Turbina from './Turbina.astro';

export const ICONE = {
    atp: Atp,
    fotone: Fotone,
    glucosio: Glucosio,
    elio: Elio,
    fissione: Fissione,
    mitocondrio: Mitocondrio,
    turbina: Turbina,
    stella: Stella,
};

export type NomeIcona = keyof typeof ICONE;
