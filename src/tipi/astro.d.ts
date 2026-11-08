declare module '*.astro' {
    const Componente: (props: Record<string, unknown>) => unknown;
    export default Componente;
}
