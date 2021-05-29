function solution(a, b, c) {
  let max;

  max = a > b ? (a > c ? a : c) : b > c ? b : c;
  if (a + b + c - max > max) return true;
  else return false;
}

console.log(solution(13, 1, 11));
