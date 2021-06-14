// 두 배열 합치기

function solution(arr1, arr2) {
  // let answer;
  // answer = arr1.concat(arr2).sort((a, b) => a - b);

  // 인프런
  let answer = []
  let n = arr.length;
  let m = arr2.length;
  let p1 = p2 =0;
  while(p1 < n && p2 < m) {
    if (arr[p1] <= arr2[p2]) answer.push(arr1[p1++])
    else answer.push(arr2[p2++])
  }

  while (p1 < n) answer.push(arr1[p1++])
  while(p2 <m) answer.push(arr2[p2++])
  return answer;
}

module.exports = solution;
