// 문자 찾기
function solution(arr, find) {
  let answer = 0;

  for (let i of arr) {
    if (i === find) {
      answer++;
    }
  }
  return answer;
}

arr = "COMPUTERPROGRAMMING";
find = "R";
console.log(solution(arr, find));
