const gerarFibonacci = require("../funcoes/fibonacci");

test("os 10 primeiros numeros de fibonacci devem ser os corretos", () => {
    expect(gerarFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("os 2 primeiros numeros de fibonacci devem ser 0 e 1", () => {
    expect(gerarFibonacci(2)).toEqual([0, 1]);
});

test("fibonacci de 1 termo = [0]", () => {
    expect(gerarFibonacci(1)).toEqual([0]);
});

test("fibonacci com valor invalido lanca erro", () => {
    expect(() => gerarFibonacci("x")).toThrow(TypeError);
});
