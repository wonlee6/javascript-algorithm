const solution = require('./위클리첼린지01');

test('위클리첼린지01 ', () => {
  const scores = [
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ];
  const result = 'FBABD';
  expect(solution(scores)).toEqual(result);
});
