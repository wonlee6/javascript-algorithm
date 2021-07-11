const solution = require('./모의고사');

test('모의고사', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 3, 2, 4, 2];

  expect(solution(arr2)).toEqual([1, 2, 3]);
});
