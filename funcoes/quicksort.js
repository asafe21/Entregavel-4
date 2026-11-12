function ordenar(lista) {
    if (lista.length <= 1) return lista;

    const pivo = lista[0];
    const menores = [];
    const maiores = [];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < pivo) {
            menores.push(lista[i]);
        } else {
            maiores.push(lista[i]);
        }
    }
    return ordenar(menores).concat(pivo, ordenar(maiores));
}

function quicksort(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError("A entrada deve ser um array.");
    }
    if (numeros.some((valor) => typeof valor !== "number" || Number.isNaN(valor))) {
        throw new TypeError("O array deve conter apenas numeros validos.");
    }
    return ordenar(numeros);
}

module.exports = quicksort;
