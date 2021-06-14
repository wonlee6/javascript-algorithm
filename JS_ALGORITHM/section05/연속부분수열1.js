// 연속 부분수열
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다
function solution(n, m, arr) {
  let answer = 0;

  // two pointer
  // 오른쪾으로 순서대로 더하고 만약 m이상이 되면
  // 왼쪽부터 하나씪 뺸다
  let sum = 0,
    left = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) {
        answer++;
      }
    }
  }
  console.log(answer);
  return answer;
}

// 1 2 1 3 1 1 1 2
module.exports = solution;
