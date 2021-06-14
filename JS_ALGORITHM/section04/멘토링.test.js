const solution = require('./멘토링');

test('멘토링 ', () => {
  const input1 = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];
  const result = 3;
  expect(solution(input1)).toBe(result);
});
