// 1.  2배열 합치기
function solution01(arr1, arr2) {
  let answer;

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log('1.', solution01(arr1, arr2));

// 2 배열의 공통된 수 구하기
function solution02(arr1, arr2) {
  let answer;

  return answer;
}

const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];
console.log('2.', solution02(a, b));

// 연속 부분 수열1
// 연속부분수열의 합이 특정 숫자m이 되는경우의수구하기
// n = 8, m = 6
// 합이 6이 되는 연속부분 수열은 {2,1,3},{1,3,1,1},{3,1,1,1} 총 3가지
function solution03(n, m, arr) {
  let answer;

  return answer;
}

const arr3 = [1, 2, 1, 3, 1, 1, 1, 2];
console.log('3.', solution03(8, 6, arr3));

// 연속부분수열2
// 연속부분수열의 합이 m이하가 되는 경우의 수
// n = 5, m = 5,
// {1},{3},{1},{2},{3},{1,3},{3,1},{1,2},{2,3},{1,3,1} 총 10가지
function solution04(arr1, arr2) {
  let answer;

  return answer;
}

const arr4 = [1, 3, 1, 2, 3];
console.log('4.', solution04(5, arr4));

// 최대매출
// n일동안의 매출기록 중 연속된 k일 동안의 최대매출액이 얼마인가
// n = 10, 10일간의 매출기록중 k = 3이라면
// 12, 15, 11, 20, 25, 10, 20, 19, 13, 15
// 11 + 20 + 25 = 56
function solution05(arr1, arr2) {
  let answer;

  return answer;
}

const arr5 = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log('5.', solution05(3, arr5));
