import Calculator from "./calculator";

describe("Calulator Testing", () => {
  const calculator = new Calculator();

  test("4 + 5 = 9", () => {
    expect(calculator.calculate(4, "+", 5)).toEqual(9);
  });
  test("13 - 5 = 8", () => {
    expect(calculator.calculate(13, "-", 5)).toEqual(8);
  });
  test("12 * 3 = 36", () => {
    expect(calculator.calculate(12, "*", 3)).toEqual(36);
  });
  test("20 / 4 = 5", () => {
    expect(calculator.calculate(20, "/", 4)).toEqual(5);
  });
  test(`2 / 0 = can't divide by 0`, () => {
    try{
      calculator.calculate(2, "/", 0)
    }
    catch(err){
      expect(err).toBe("operation is not supported");
    }
  });
});
