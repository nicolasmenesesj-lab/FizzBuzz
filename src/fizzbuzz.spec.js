import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia devolver el mismo numero", () => {
    expect(fizzbuzz(1)).toEqual(1);    
  });

  it("deberia devolver el mismo numero", () => {
    expect(fizzbuzz(2)).toEqual(2);   
  });

  it("deberia devolver Fizz", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");   
  });

  it("deberia devolver Buzz", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");   
  });

  it("deberia devolver FizzBuzz", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");   
  });
});

