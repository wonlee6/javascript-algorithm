const solution = require('./학급회장');

test('학급회장', () => {
  const arr1 = 'BACBACCACCBDEDE';

  expect(solution(arr1)).toBe('C');
});
