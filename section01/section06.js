// 홀수 구하기
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let i of arr) {
    if (i % 2 !== 0) {
      sum += i;
      if (i < min) min = i;
    }
  }
  answer.push(sum, min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
