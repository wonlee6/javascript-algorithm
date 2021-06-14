const solution = require('./자리수의합');

test('자리수의 합 ', () => {
  const input1 = [460, 128, 603, 40, 521, 137, 123];
  let num = 7;
  expect(solution(num, input1)).toBe(137);
});
