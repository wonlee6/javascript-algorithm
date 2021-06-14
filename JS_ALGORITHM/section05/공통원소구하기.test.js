const solution = require('./공통원소구하기');

test('공통원소구하기', () => {
  const arr1 = [1, 3, 9, 5, 2];
  const arr2 = [3, 2, 5, 7, 8];
  expect(solution(arr1, arr2)).toEqual([2, 3, 5]);
});
