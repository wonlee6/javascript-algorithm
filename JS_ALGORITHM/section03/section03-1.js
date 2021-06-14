// 회문 문자열
// 앞으로 읽을 때나 뒤에서 읽을 때나 같은 문자열 을 회문문자열이라고함
// true, false

function solution(arr) {
  // let answer = '';
  // let r = arr.length / 2;
  // let array = arr.toUpperCase();
  // console.log(array);

  // for (let i = 0; i < r; i++) {
  //   console.log(array[i], array[arr.length - i - 1]);
  //   if (array[i] === array[arr.length - i - 1]) {
  //     answer = 'true';
  //   } else {
  //     answer = 'false';
  //     break;
  //   }
  // }
  // return answer;

  // 인프런 풀이

  let answer = 'YES';
  arr = arr.toLowerCase();

  // let len = arr.length;
  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (arr[i] !== arr[len - i - 1]) return 'NO';
  // }
  console.log(arr.split('').reverse().join(''));
  if (arr.split('').reverse().join('') !== arr) return 'NO';
  return answer;
}
word = 'ghgolpoghg';
console.log(solution(word));
