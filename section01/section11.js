// 대문자 찾기
function solution(arr, find) {
  let answer = 0;

  for (let i of arr) {
    if (i === i.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

arr = "KoreaTimeGOOD";
console.log(solution(arr));
