// 정수를 입력받아 정수 까지의 합을 구하는 문제

// number 10 => 2,3,5,7 => 17
//  1. 최대공약수가 2개이면 배열에 넣고, 배열에 있는 수를 더한다
// ex 10 [2,3,5,7]
function solution(number) {
  let answer = 0;
  // let num = [];
  // for (let i = 1; i <= number; i++) {
  //   let count = 0;

  //   for (let j = 1; j <= i; j++) {
  //     if (i % j === 0) count++;
  //   }

  //   if (count === 2) {
  //     num.push(i);
  //   }
  // }
  // console.log(num);
  // for (const x of num) {
  //   answer += x;
  // }

  for (let i = 2; i <= number; i++) {
    //1은 소수가 아님
    //flag가 1이면 소수
    let flag = 1;
    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    } // i의 제곱근만 확인해보면 됨
    // 즉 j*j <= i
    //나눠서 0인게 없으면 flag는 여전히 1 즉, 해당 i는 소수이다
    if (flag == 1) answer += i;
  }

  return answer;
}

module.exports = solution;

//
// linkedList list
// useCallback
// 기술 질문
// get, post 차이점
// 은행사이트에서 mypage에서 정보를 받아온다고 하면, get post 방식 중 어떤게 더 좋은지
// 소켓 io 써본 적 있는지
// 나머진 project 관련 질문
// 타입 스크립트
