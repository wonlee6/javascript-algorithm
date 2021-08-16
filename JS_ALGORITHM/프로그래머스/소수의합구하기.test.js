const solution = require('./소수의합구하기');

test('소수의합구하기 ', () => {
  const number = 10;
  // 2, 3, 5, 7
  const result = 17;
  expect(solution(number)).toEqual(result);
});
