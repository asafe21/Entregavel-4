function calcularSomatorio(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError("A entrada deve ser um array.");
    }
    let soma = 0;
    for (const valor of numeros) {
        if (typeof valor !== "number" || !Number.isFinite(valor)) {
            throw new TypeError("O array deve conter apenas numeros validos.");
        }
        soma += valor;
    }
    return soma;
}

module.exports = calcularSomatorio;
