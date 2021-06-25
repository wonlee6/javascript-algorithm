const solution = require('./아나그램');

test('아나그램', () => {
  const word1 = 'AbaAeCe';
  const word2 = 'baeeACA';
  const word3 = 'abaCC';
  const word4 = 'Caaab';

  expect(solution(word3, word4)).toBe('NO');
});
