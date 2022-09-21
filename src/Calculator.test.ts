import  Calculator  from './Calculator'; 


describe('Calulator Testing', () => {
  let calc: Calculator = new Calculator(4,5,"+");
test('4 + 5 = 9', () => {
    expect(calc.Calculate()).toEqual(9);
  });
});