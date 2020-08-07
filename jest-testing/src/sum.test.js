const sum = require('./sum');

test('1 + 2 は 3と等しい', () => {
  expect(sum(1, 2)).toBe(3);
});