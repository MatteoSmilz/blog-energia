<script lang="ts">
    import { onMount } from 'svelte';

    type FunzioneDisegno = (
        ctx: CanvasRenderingContext2D,
        larghezza: number,
        altezza: number,
        tempo: number,
    ) => void;

    interface Props {
        disegna: FunzioneDisegno;
        etichetta: string;
        rapporto?: number;
        animata?: boolean;
        inPausa?: boolean;
        dati?: unknown;
    }

    let {
        disegna,
        etichetta,
        rapporto = 16 / 9,
        animata = false,
        inPausa = $bindable(false),
        dati,
    }: Props = $props();

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let larghezza = 0;
    let altezza = 0;
    let tempo = 0;
    let ultimo: number | null = null;
    let visibile = false;
    let richiesta = 0;

    function ridisegna() {
        if (ctx) {
            disegna(ctx, larghezza, altezza, tempo);
        }
    }

    function fotogramma(ora: number) {
        if (ultimo !== null) {
            tempo += (ora - ultimo) / 1000;
        }
        ultimo = ora;
        ridisegna();
        richiesta = requestAnimationFrame(fotogramma);
    }

    function avvia() {
        if (!richiesta && animata && visibile && !inPausa) {
            ultimo = null;
            richiesta = requestAnimationFrame(fotogramma);
        }
    }

    function ferma() {
        cancelAnimationFrame(richiesta);
        richiesta = 0;
    }

    onMount(() => {
        ctx = canvas.getContext('2d');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            inPausa = true;
        }

        const dimensioni = new ResizeObserver(() => {
            const dpr = window.devicePixelRatio || 1;
            const riquadro = canvas.getBoundingClientRect();
            larghezza = riquadro.width;
            altezza = riquadro.height;
            canvas.width = Math.round(larghezza * dpr);
            canvas.height = Math.round(altezza * dpr);
            ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
            ridisegna();
        });
        dimensioni.observe(canvas);

        const visibilita = new IntersectionObserver(([voce]) => {
            visibile = voce.isIntersecting;
            if (visibile) {
                avvia();
            } else {
                ferma();
            }
        });
        visibilita.observe(canvas);

        return () => {
            ferma();
            dimensioni.disconnect();
            visibilita.disconnect();
        };
    });

    $effect(() => {
        if (inPausa) {
            ferma();
        } else {
            avvia();
        }
    });

    $effect(() => {
        dati;
        disegna;
        ridisegna();
    });
</script>

<canvas bind:this={canvas} role="img" aria-label={etichetta} style:aspect-ratio={rapporto}></canvas>

<style>
    canvas {
        display: block;
        width: 100%;
        height: auto;
    }
</style>