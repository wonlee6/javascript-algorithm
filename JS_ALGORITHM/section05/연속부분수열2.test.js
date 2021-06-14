const solution = require('./연속부분수열2');

test('연속부분수열2', () => {
  const arr1 = [1, 3, 1, 2, 3];

  expect(solution(5, 5, arr1)).toEqual(10);
});
