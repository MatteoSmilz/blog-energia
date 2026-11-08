const formato = new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

export function formattaData(data: Date): string {
    return formato.format(data);
}
