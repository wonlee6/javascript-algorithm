// 배열 중 최솟 값 구하기
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i in arr) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
