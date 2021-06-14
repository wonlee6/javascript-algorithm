const solution = require('./뒤집은소수');

test('뒤집은소수 ', () => {
  const input1 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  const result = [23, 2, 73, 2, 3];
  expect(solution(input1)).toEqual(result);
});

//toStrictEqual === undefined  허용하지않음
