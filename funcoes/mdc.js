function calcularMDC(primeiroNumero, segundoNumero) {
    if (!Number.isInteger(primeiroNumero) || !Number.isInteger(segundoNumero)) {
        throw new TypeError("Os dois valores devem ser numeros inteiros.");
    }
    let a = Math.abs(primeiroNumero);
    let b = Math.abs(segundoNumero);
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

module.exports = calcularMDC;
