import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia devolver el mismo numero", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
});

