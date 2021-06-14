// 격자판 최대합
// n*n의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0; // 행의 합
  let sum2 = 0; // 열의 합

  for (let i = 0; i < arr.length; i++) {
    (sum1 = 0), (sum2 = 0);
    for (let j = 0; j < arr.length; j++) {
      //   console.log(arr[i], arr[j]);
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    console.log(sum1, sum2);
    answer = Math.max(answer, sum1, sum2); // 가장 큰 값이 들어간다
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
