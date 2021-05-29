// 10 부제
function solution(arr, day) {
  let answer = 0;

  for (let i of arr) {
    if (i % 10 === day) {
      answer++;
    }
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
day = 7;
console.log(solution(arr, day));
