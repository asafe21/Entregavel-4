const verificaPrimo = require("../funcoes/numeroprimo");

test("numeroprimo 10 = false", () => {
    expect(verificaPrimo(10)).toBe(false);
});

test("numeroprimo 3 = true", () => {
    expect(verificaPrimo(3)).toBe(true);
});

test("numeroprimo 1 = false", () => {
    expect(verificaPrimo(1)).toBe(false);
});

test("numeroprimo com valor invalido lanca erro", () => {
    expect(() => verificaPrimo("abc")).toThrow(TypeError);
});
