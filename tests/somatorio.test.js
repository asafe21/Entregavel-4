const calcularSomatorio = require("../funcoes/somatorio");

test("somatorio 10+20 = 30", () => {
    expect(calcularSomatorio([10, 20])).toBe(30);
});

test("somatorio -10+20 = 10", () => {
    expect(calcularSomatorio([-10, 20])).toBe(10);
});

test("somatorio de array vazio = 0", () => {
    expect(calcularSomatorio([])).toBe(0);
});

test("somatorio com valor invalido lanca erro", () => {
    expect(() => calcularSomatorio([1, "a"])).toThrow(TypeError);
});
