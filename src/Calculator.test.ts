const addition= require('./Calculator');
test('1 + 2 = 3', () => {
    expect(addition(1, 2)).toBe(3);
  });