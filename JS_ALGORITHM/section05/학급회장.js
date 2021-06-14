// 학생회장
// Hash Map 사용

//  const arr1 = 'BACBACCACCBDEDE';
function solution(arr) {
  let answer;

  let map = new Map(); // 1. 맵 만들고

  for (let i of arr) {
    if (map.has(i)) {
      // 3. 있으면 카운트
      map.set(i, map.get(i) + 1);
    } else map.set(i, 1); // 2. 없으면 key i와 1을 넣는다
  }
  let max = Number.MIN_SAFE_INTEGER;

  // 반복문돌면서 큰값찾기
  for (const [key, value] of map) {
    // console.log(k, v);
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

module.exports = solution;
