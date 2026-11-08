const PAROLE_AL_MINUTO = 200;

export function tempoDiLettura(testo: string): number {
    const pulito = testo
        .replace(/^import .*/gm, ' ')
        .replace(/\$\$[\s\S]*?\$\$/g, ' ')
        .replace(/<[^>]+>/g, ' ');
    const parole = pulito.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(parole / PAROLE_AL_MINUTO));
}