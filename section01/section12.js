// 대문자 찾기, 대소문자 찾기
function solution(arr) {
  let answer;

  answer = arr.toUpperCase();

  return answer;
}

function solution2(arr) {
  let answer = "";

  for (let i of arr) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}
arr = "ITisTimeToStudy";
console.log(solution(arr));
console.log(solution2(arr));
