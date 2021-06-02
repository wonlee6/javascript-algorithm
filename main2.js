// 1. 앞의 수보다 큰 수 출력하기(맨 앞의 수는 무조건 출력)
// 2. 보이는 학생 카운트
// 3. 가위바위보
// 4. 점수 계산
// 5. 등수구하기
// 6. 격자판 최대합
// 7. 봉우리

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12, 55, 18];
console.log('1. ', solution(arr));

function solution2(arr) {
  let answer = 1;

  return answer;
}

let arr2 = [135, 130, 139, 145, 146, 140, 155, 180];
console.log('2. ', solution2(arr2));

// 1. 가위 2. 바위 3. 보
function solution3(a, b) {
  let answer = '';

  return answer;
}

A = [2, 3, 3, 1, 3];
B = [1, 1, 2, 2, 3];
console.log('3. ', solution3(A, B));

function solution4(arr) {
  let answer = 0;

  return answer;
}

let arr4 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log('4. ', solution4(arr4));

function solution5(arr) {
  let answer = [];

  return answer;
}

let arr5 = [87, 89, 92, 100, 76];
console.log('5. ', solution5(arr5));

function solution6(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  return answer;
}
let arr6 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log('6. ', solution6(arr6));

function solution7(arr) {
  let answer = 0;

  return answer;
}

let arr7 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log('7. ', solution7(arr7));
