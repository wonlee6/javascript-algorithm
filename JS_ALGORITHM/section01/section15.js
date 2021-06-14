// 중복 문자 삭제
function solution(arr) {
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i], arr.indexOf(arr[i]));
    if (arr.indexOf(arr[i]) === i) {
      answer += arr[i];
    }
  }
  return answer;
}

arr = "ksekksetplace";
console.log(solution(arr));
