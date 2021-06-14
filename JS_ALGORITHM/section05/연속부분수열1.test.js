const solution = require('./연속부분수열1');

test('연속부분수열1', () => {
  const arr1 = [1, 2, 1, 3, 1, 1, 1, 2];

  expect(solution(8, 6, arr1)).toEqual(3);
});
