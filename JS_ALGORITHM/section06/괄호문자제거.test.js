const solution = require("./괄호문자제거");

test("괄호문자제거", () => {
  const arr1 = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

  expect(solution(arr1)).toEqual("EFLM");
});
