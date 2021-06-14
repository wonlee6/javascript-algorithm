const solution = require('./jestSample');

test('jestSample ', () => {
  const a = 2;
  const b = 3;
  expect(solution(a, b)).toBe(5);
});
