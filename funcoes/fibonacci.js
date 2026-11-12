function gerarFibonacci(quantidadeTermos) {
    if (!Number.isInteger(quantidadeTermos)) {
        throw new TypeError("A quantidade de termos deve ser um numero inteiro.");
    }
    if (quantidadeTermos <= 0) return [];
    if (quantidadeTermos === 1) return [0];

    const sequencia = [0, 1];
    for (let i = 2; i < quantidadeTermos; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
    return sequencia;
}

module.exports = gerarFibonacci;
