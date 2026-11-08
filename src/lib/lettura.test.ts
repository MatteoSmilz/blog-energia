import { describe, it, expect } from 'vitest';
import { tempoDiLettura } from './lettura';

describe('tempoDiLettura', () => {
    it('conta 200 parole al minuto', () => {
        expect(tempoDiLettura('parola '.repeat(400))).toBe(2);
    });

    it('non scende sotto un minuto', () => {
        expect(tempoDiLettura('')).toBe(1);
    });

    it('ignora import, formule e tag', () => {
        const testo = "import Nota from './Nota.astro';\n$$E = mc^2$$\n<Nota>uno due</Nota>";
        expect(tempoDiLettura(testo + ' parola'.repeat(200))).toBe(1);
    });
});
