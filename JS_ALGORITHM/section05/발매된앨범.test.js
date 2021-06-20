const solution = require("./발매된앨범");

test("발매된앨범", () => {
  const arr1 = ["classic", "pop", "classic", "classic", "pop"];
  const arr2 = [500, 600, 150, 800, 2500];

  expect(solution(arr1, arr2)).toEqual([4, 1, 3, 0]);
});
