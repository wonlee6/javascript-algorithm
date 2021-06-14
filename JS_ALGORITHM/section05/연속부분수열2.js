// 연속 부분수열2
// 연속부분수열의 합이 특정숫자 M이하가 되는 경우
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3},
// {3, 1}, {1, 2}, {2, 3},{1, 3, 1}로 총 10가지입니다.
function solution(n, m, arr) {
  let answer = 0;

  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum > m) {
      sum -= arr[lt++];
    }

    answer += rt - lt + 1;
    // console.log(answer);
  }

  return answer;
}

// 1 3 1 2 3
module.exports = solution;
