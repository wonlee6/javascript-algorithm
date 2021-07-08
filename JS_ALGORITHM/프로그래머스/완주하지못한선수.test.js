const solution = require("./완주하지못한선수");

test("완주하지못한선수 ", () => {
  const participant = ["leo", "kiki", "eden"];
  const completion = ["eden", "kiki"];
  expect(solution(participant, completion)).toEqual("leo");
});
// [leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
