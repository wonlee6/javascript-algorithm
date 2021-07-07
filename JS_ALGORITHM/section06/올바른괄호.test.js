const solution = require("./올바른괄호");

test("올바른괄호", () => {
  const arr1 = "(()(()))(())";

  expect(solution(arr1)).toEqual("YES");
});
