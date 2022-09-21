jest.mock('./Calculator');
const calculator= require('./Calculator');
const addition= new calculator(4,5,"+")

test('4 + 5 = 9', () => {
    expect(addition).toBe(9);
  });