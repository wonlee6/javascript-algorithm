const solution = require('./위클리첼린지02');

test('위클리첼린지02', () => {
  const price = 3;
  const money = 20;
  const count = 4;

  const result = 10;
  expect(solution(price, money, count)).toEqual(result);
});
