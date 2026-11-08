const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(percorso = ''): string {
    return `${base}/${percorso.replace(/^\//, '')}`;
}
