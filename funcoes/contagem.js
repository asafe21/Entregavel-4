function contarValores(dados, limite) {
    if (!Array.isArray(dados) || dados.length === 0) {
        throw new TypeError("Os dados devem ser um array nao vazio.");
    }
    if (typeof limite !== "number" || Number.isNaN(limite)) {
        throw new TypeError("O limite deve ser um numero valido.");
    }

    const minimo = Math.min(dados[0], limite);
    const maximo = Math.max(dados[0], limite);

    let contador = 0;
    for (const valor of dados) {
        if (Number.isInteger(valor) && valor >= minimo && valor <= maximo) {
            contador++;
        }
    }
    return contador;
}

module.exports = contarValores;
