jest.mock('./Calculator');
const Сalculator= require('./Calculator');
const addition= new Сalculator(4,5,"+")

test('4 + 5 = 9', () => {
    expect(addition).toBe(9);
  });