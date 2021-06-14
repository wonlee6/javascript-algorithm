// 점수 계산
// 연속된 답일 경우 +1점씩 가산점
// 1 0 1 1 1 0 0 1 1 0
// 1 0 1 2 3 0 0 1 2 0 = 10점

function solution(arr) {
  let answer = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      //   console.log(`count: ${count}`);
      answer += count;
    } else if (arr[i] === 0) {
      count = 0;
    }
  }
  return answer;
}

arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
