<script lang="ts">
    import Tela from '../comune/Tela.svelte';
    import Cursore from '../comune/Cursore.svelte';
    import { leggiColore } from '../comune/colori';

    let frequenza = $state(1);
    let ampiezza = $state(0.6);
    let inPausa = $state(false);

    function disegna(
        ctx: CanvasRenderingContext2D,
        larghezza: number,
        altezza: number,
        tempo: number,
    ) {
        const colore = leggiColore(ctx.canvas, '--serie');
        const bordo = leggiColore(ctx.canvas, '--bordo');
        const centro = altezza / 2;

        ctx.clearRect(0, 0, larghezza, altezza);

        ctx.strokeStyle = bordo;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, centro);
        ctx.lineTo(larghezza, centro);
        ctx.stroke();

        ctx.strokeStyle = colore;
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let x = 0; x <= larghezza; x += 2) {
            const fase = (x / larghezza) * 4 * Math.PI * frequenza - tempo * 2;
            const y = centro - Math.sin(fase) * ampiezza * centro;
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }
</script>

<Tela {disegna} animata bind:inPausa etichetta="Un'onda sinusoidale che scorre verso destra" />

<div class="controlli">
    <Cursore etichetta="Frequenza" bind:valore={frequenza} min={0.5} max={4} passo={0.1} />
    <Cursore etichetta="Ampiezza" bind:valore={ampiezza} min={0} max={1} passo={0.05} />
    <button type="button" onclick={() => (inPausa = !inPausa)}>
        {inPausa ? 'Riprendi' : 'Pausa'}
    </button>
</div>

<style>
    button {
        min-height: 2.75rem;
        padding: 0 var(--spazio-5);
        background: var(--accento);
        color: var(--accento-testo);
        border: 0;
        border-radius: var(--raggio-pillola);
        font-family: var(--font-titoli);
        font-weight: 600;
        cursor: pointer;
    }
</style>
