const contarValores = require("../funcoes/contagem");

test("contagem de inteiros entre 1 e 10 = 10", () => {
    expect(contarValores([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(10);
});

test("contagem ignora valores nao inteiros", () => {
    expect(contarValores([1, 2.5, 3], 3)).toBe(2);
});

test("contagem com array vazio lanca erro", () => {
    expect(() => contarValores([], 3)).toThrow(TypeError);
});
