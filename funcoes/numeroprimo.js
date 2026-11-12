function verificaPrimo(numero) {
    if (!Number.isInteger(numero)) {
        throw new TypeError("O valor informado deve ser um numero inteiro.");
    }
    if (numero <= 1) return false;
    for (let divisor = 2; divisor * divisor <= numero; divisor++) {
        if (numero % divisor === 0) return false;
    }
    return true;
}

module.exports = verificaPrimo;
