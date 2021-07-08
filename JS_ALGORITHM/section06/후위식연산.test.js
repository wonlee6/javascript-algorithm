const solution = require('./후위식연산');

test('후위식연산', () => {
  const word = '352+*9-3/';
  expect(solution(word)).toEqual(4);
});
