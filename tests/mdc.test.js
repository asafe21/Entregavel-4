const calcularMDC = require("../funcoes/mdc");

test("mdc 5 e 10 = 5", () => {
    expect(calcularMDC(5, 10)).toBe(5);
});

test("mdc 1 e 1 = 1", () => {
    expect(calcularMDC(1, 1)).toBe(1);
});

test("mdc 48 e 18 = 6", () => {
    expect(calcularMDC(48, 18)).toBe(6);
});

test("mdc com valor invalido lanca erro", () => {
    expect(() => calcularMDC(2.5, 3)).toThrow(TypeError);
});
