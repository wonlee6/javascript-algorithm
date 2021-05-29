// 가운데 문자 찾기 (길이가 짝수일시 가운데 2개)
function solution(arr) {
  let answer = arr;

  let middle = Math.floor(arr.length / 2);
  // console.log(middle); // 2

  if (arr.length % 2 !== 0) {
    answer = arr.substr(middle, 1);
  } else {
    answer = arr.substr(middle - 1, 2);
  }

  return answer;
}

arr = "tosomeplace";
console.log(solution(arr));
