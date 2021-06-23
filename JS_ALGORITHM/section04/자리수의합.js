// 자리수의 합
// [128, 460, 603, 40, 521, 137, 123];
//  11, 10, 9, 4, 8, 11, 6
// 값이 동일일 경우 큰 수로

function solution(n, arr) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;

  // filter는 true일 때 값을 반환
  answer = arr.filter((value, index) => {
    let sum = 0;
    // 숫자는 iterable이 아니기 때문에 문자열로 변환
    let strnum = value.toString();
    for (let i of strnum) {
      sum += parseInt(i);
    }
    // console.log(`sum : ${sum}`, `max : ${max}`, `value : ${value}`);

    // 첫 번째 배열 이후부터 비교
    if (sum > max) {
      max = sum;
      return value;
    } else if (sum === max) {
      return value;
    }
    // console.log(`bignumber : ${bignumber}`);
  });

  // 배열안의 큰 수 찾기
  answer = answer.reduce((acc, val) => {
    if (acc < val) acc = val;
    return acc;
  });
  // console.log(`answer : ${answer}`);

  return answer;
}

module.exports = solution;
