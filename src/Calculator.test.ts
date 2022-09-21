import  Calculator  from './Calculator'; 


describe('Calulator Testing', () => {
test('4 + 5 = 9', () => {
  let calc: Calculator = new Calculator(4,5,"+");
    expect(calc.Calculate()).toEqual(9);
  })
  test('13 - 5 = 8', () => {
    let calc: Calculator = new Calculator(13,5, "-");
    expect(calc.Calculate()).toEqual(8);
  })
  test('12 * 3 = 36', () => {
    let calc: Calculator = new Calculator(12,3, "*");
    expect(calc.Calculate()).toEqual(36);
  })
  test('20 / 4 = 5', () => {
    let calc: Calculator = new Calculator(20,4, "/");
    expect(calc.Calculate()).toEqual(5);
  })
  test('20 % 4 = error', () => {
    let calc: Calculator = new Calculator(20,4, "%");
    expect(calc.Calculate()).toEqual("error");
  })
});