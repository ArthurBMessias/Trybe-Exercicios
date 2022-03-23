enum table {
    km = 1000,
    hm = 100,
    dam = 10,
    m = 1,
    dm = 0.1,
    cm = 0.01,
    mn = 0.001,
}

export function convert(valor: number, unidadeBase: string, unidadeConversao: string) {
    if (unidadeBase === 'km' && unidadeConversao === 'hm'){
        return valor / 10;
    }
}