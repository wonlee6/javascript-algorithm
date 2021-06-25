// 아나그램
// 두 문자열이 알파벳의 나열 순서 다르지만 그 구성이 일치하면 아나그램
// 예) AbaAeCe, baeeACA 알파벳의 나열순서는 다리즈만 구성을보면
// A(2) a(1) b(1) C(1) e(2) 알파벳과 그 개수가 일치

function solution(word1, word2) {
  let answer = '';

  let map = new Map();
  let words1 = word1.split('').sort().join('');
  let words2 = word2.split('').sort().join('');
  // console.log(word);

  for (const i of words1) {
    // console.log(i);
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }
  let map2 = new Map();

  for (const i of words2) {
    if (map2.has(i)) map2.set(i, map2.get(i) + 1);
    else map2.set(i, 1);
  }

  // 배열로 변경해서 비교
  // map 자체를 비교할려니 itrable 반환
  arr = Array.from(map.values());
  arr2 = Array.from(map2.values());
  console.log(arr, arr2);

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) count++;
  }

  if (count > 0) answer = 'NO';
  else answer = 'yes';
  console.log(answer);

  // 인프런
  // let answer = 'yes';
  // let sH = new Map();
  // for (let x of word1) {
  //   if (sH.has(x)) sH.set(x, sH.get(x) + 1);
  //   else sH.set(x, 1);
  // }

  // for (let x of word2) {
  //   if (!sH.has(x) || sH.get(x) === 0) return 'NO';
  //   sH.set(x, sH.get(x) - 1);
  // }

  return answer;
}

module.exports = solution;
