const solution = require('./이상한문자만들기');

test('이상한문자만들기', () => {
  const word1 = 'try hello world';

  expect(solution(word1)).toEqual('TrY HeLlO WoRlD');
});
