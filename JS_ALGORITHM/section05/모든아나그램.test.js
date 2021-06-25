const solution = require('./모든아나그램');

test('모든아나그램', () => {
  const word1 = 'bacaAacba';
  const word2 = 'abc';

  expect(solution(word1, word2)).toBe(3);
});
