function solution(num) {
  let answer = 0;

  for (var i = 1; i <= num; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(6));
