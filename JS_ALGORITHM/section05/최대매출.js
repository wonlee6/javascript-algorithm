// 최대매출
// N일 동안의 매출기록을 주고 연속된 k일 동안의 최대 매출액 구하라
// 만약 n = 10이고 10일 간의 매출기록, k = 3이라면
// 12 15 11 20 25 10 19 35 15
// 11 + 20 + 25 = 56

function solution(n, k, arr) {
  let answer = 0;
  let sum = 0;

  for (let j = 0; j < k; j++) {
    sum += arr[j];
  }
  // k 만큼의 합을 구해서 첫부분은 빼고 끝부분은 더한다.
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(sum, answer);
  }

  return answer;
}

module.exports = solution;
