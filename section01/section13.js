// 가장 긴 문자열 찾기
function solution(arr) {
  let answer = arr[0];

  for (let i of arr) {
    if (answer.length < i.length) {
      answer = i;
    }
  }

  return answer;
}

arr = ["teacher", "time", "student", "beautiful", "good", "tosomeplace"];
console.log(solution(arr));
