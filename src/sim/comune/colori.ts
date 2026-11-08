const cache = new WeakMap<Element, Map<string, string>>();

export function leggiColore(elemento: Element, variabile: string): string {
    let colori = cache.get(elemento);
    if (!colori) {
        colori = new Map();
        cache.set(elemento, colori);
    }
    let colore = colori.get(variabile);
    if (colore === undefined) {
        colore = getComputedStyle(elemento).getPropertyValue(variabile).trim();
        colori.set(variabile, colore);
    }
    return colore;
}
