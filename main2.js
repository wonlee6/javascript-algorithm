// 1. 앞의 수보다 큰 수 출력하기(맨 앞의 수는 무조건 출력)
// 2. 보이는 학생 카운트
// 3. 가위바위보
// 4. 점수 계산
// 5. 등수구하기
// 6. 격자판 최대합
// 7. 봉우리

// 자신의 바로 앞 수보다 큰 수만 출력(맨 앞의 수는 무조건 출력)
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  return answer;
}


let arr = [7, 3, 9, 5, 6, 12, 55, 18];
console.log('1. ', solution(arr)); // [7,9,6,12]


// 앞에 수보다 높으면 카운트 작거나 같으면 패스
function solution2(arr) {
  let answer = 1;

  return answer;
}

let arr2 = [135, 130, 139, 145, 146, 140, 155, 180];
console.log('2. ', solution2(arr2)); // 6


// 1 : 가위 2: 바위 3: 보
// 승자 출력 
// 비기면 D로 출력
function solution3(a, b) {
  let answer = '';

  return answer;
}

A = [2, 3, 3, 1, 3];
B = [1, 1, 2, 2, 3];
console.log('3. ', solution3(A, B)); // A B A B D

// 1 0 1 1 1 0 0 1 1 0 점수 라면 연속된 1은 +1
// 1 0 1 2 3 0 0 1 2 0 으로 계산하여 총점을 구하라
function solution4(arr) {
  let answer = 0;

  return answer;
}


let arr4 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log('4. ', solution4(arr4)); // 10

// 등수구하기
// 같은 점수 일시 동일 등수로 처리
// 92 92 92 100 80
// 2 2 2 1 5
function solution5(arr) {
  let answer = [];

  return answer;
}

let arr5 = [87, 89, 92, 100, 76];
console.log('5. ', solution5(arr5)); // 4 3 2 1 5


// 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 구하라
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
console.log('6. ', solution6(arr6)); // 155

// 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역
// 봉우리 지역은 몇 개인가?
// 상하좌우 비교를 해서 상하좌우보다 큰 수가 봉우리 지역이다.
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

console.log('7. ', solution7(arr7)); // 10
