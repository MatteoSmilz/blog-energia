const PREFISSI = ['', 'k', 'M', 'G', 'T'];

export const EV_IN_JOULE = 1.602176634e-19;

export function formattaEV(ev: number): string {
    const esponente = Math.floor(Math.log10(ev));
    const gruppo = Math.max(0, Math.min(PREFISSI.length - 1, Math.floor(esponente / 3)));
    const valore = ev / 10 ** (3 * gruppo);
    return `${valore.toLocaleString('it-IT', { maximumSignificantDigits: 3 })} ${PREFISSI[gruppo]}eV`;
}

export function potenzaDieci(valore: number): { mantissa: string; esponente: string } {
    const esponente = Math.floor(Math.log10(valore));
    const mantissa = valore / 10 ** esponente;
    return {
        mantissa: mantissa.toLocaleString('it-IT', { maximumFractionDigits: 1 }),
        esponente: String(esponente).replace('-', '−'),
    };
}