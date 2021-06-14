const solution = require('./최대매출');

test('최대매출', () => {
  const arr1 = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

  expect(solution(10, 3, arr1)).toEqual(56);
});
