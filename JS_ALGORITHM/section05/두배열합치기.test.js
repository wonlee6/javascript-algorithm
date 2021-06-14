const solution = require('./두배열합치기');

test('두배열합치기', () => {
  const arr1 = [1, 3, 5];
  const arr2 = [2, 3, 6, 7, 9];
  expect(solution(arr1, arr2)).toEqual([1, 2, 3, 3, 5, 6, 7, 9]);
});
