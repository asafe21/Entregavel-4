const quicksort = require("../funcoes/quicksort");

test("quicksort 5,4,3,1 = 1,3,4,5", () => {
    expect(quicksort([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test("quicksort 100,4,3,150 = 3,4,100,150", () => {
    expect(quicksort([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});

test("quicksort de array vazio = []", () => {
    expect(quicksort([])).toEqual([]);
});

test("quicksort com valor invalido lanca erro", () => {
    expect(() => quicksort([1, "a"])).toThrow(TypeError);
});
