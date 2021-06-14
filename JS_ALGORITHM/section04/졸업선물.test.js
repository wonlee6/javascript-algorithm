const solution = require('./졸업선물');

test('졸업선물', () => {
  const arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];
  const money = 28;
  expect(solution(arr, money)).toBe(4);
});
