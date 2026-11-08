<script lang="ts">
    interface Props {
        etichetta: string;
        valore: number;
        min: number;
        max: number;
        passo?: number;
        unita?: string;
        formato?: (valore: number) => string;
    }

    let {
        etichetta,
        valore = $bindable(),
        min,
        max,
        passo = 1,
        unita = '',
        formato = (v: number) => v.toLocaleString('it-IT'),
    }: Props = $props();

    const id = $props.id();
</script>

<div class="cursore">
    <div class="intestazione">
        <label for={id}>{etichetta}</label>
        <output for={id}>{formato(valore)}{unita ? ` ${unita}` : ''}</output>
    </div>
    <input {id} type="range" {min} {max} step={passo} bind:value={valore} />
</div>

<style>
    .cursore {
        display: flex;
        flex-direction: column;
        gap: var(--spazio-2);
        flex: 1 1 12rem;
    }

    .intestazione {
        display: flex;
        justify-content: space-between;
        gap: var(--spazio-3);
        font-size: var(--testo-piccolo);
    }

    label {
        font-family: var(--font-titoli);
        font-weight: 600;
    }

    output {
        font-variant-numeric: tabular-nums;
        color: var(--serie);
    }

    input {
        width: 100%;
        accent-color: var(--serie);
    }
</style>