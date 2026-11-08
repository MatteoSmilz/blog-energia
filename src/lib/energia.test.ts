import { describe, it, expect } from "vitest";
import { formattaEV, potenzaDieci, EV_IN_JOULE } from "./energia";

describe("formattaEV", () => {
    it("usa il prefisso giusto", () => {
        expect(formattaEV(0.32)).toBe("0,32 eV");
        expect(formattaEV(29.7)).toBe("29,7 eV");
        expect(formattaEV(2500)).toBe("2,5 keV");
        expect(formattaEV(26.7e6)).toBe("26,7 MeV");
        expect(formattaEV(2e8)).toBe("200 MeV");
        expect(formattaEV(1e9)).toBe("1 GeV");
    });
});

describe("potenzaDieci", () => {
    it("converte 1 eV in joule", () => {
        expect(potenzaDieci(EV_IN_JOULE)).toEqual({
            mantissa: "1,6",
            esponente: "−19",
        });
    });

    it("converte 1 MeV in joule", () => {
        expect(potenzaDieci(1e6 * EV_IN_JOULE)).toEqual({
            mantissa: "1,6",
            esponente: "−13",
        });
    });
});
