const solution = require('./k번째큰수');

test('k번째큰수', () => {
  const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42, 45];
  expect(solution(11, 3, arr)).toBe(144);
});
