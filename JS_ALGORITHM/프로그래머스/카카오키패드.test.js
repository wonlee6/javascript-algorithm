const solution = require("./카카오키패드");

test("카카오키패드 ", () => {
  const arr = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
  const hand = "right";
  const result = "LRLLLRLLRRL";
  expect(solution(arr, hand)).toEqual(result);
});

// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left" "LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] "right" "LLRLLRLLRL"
