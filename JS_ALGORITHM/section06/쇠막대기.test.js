const solution = require('./쇠막대기');

test('쇠막대기', () => {
  const arr1 = '()(((()())(())()))(())';

  expect(solution(arr1)).toEqual(17);
});

// (((()(()()))(())()))(()()) 24
