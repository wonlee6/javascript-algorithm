const solution = require('./베스트앨범');

test('베스트앨범', () => {
  const word1 = ['classic', 'pop', 'classic', 'classic', 'pop'];
  const word2 = [500, 600, 150, 800, 2500];

  expect(solution(word1, word2)).toEqual([4, 1, 3, 0]);
});
