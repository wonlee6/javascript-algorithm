// 졸업 선물
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사 줈수 있는지
// 선생님은 상품 하나를 50% 할인해서 살 수있는 쿠폰을 가지고 있습니다
// 반 학생수 n, 예산 m
// 각 학생들이 받고 싶은 상품의 가격과 배송비

// 인원 5 , 예산 28
// 상품 값, 배송비 (상품가격은 짝수로만)
// 인프런 참고
function solution(arr, money) {
  let answer = 0;

  // 할인받을 상품을 결정하고 나면 나머지는 예산에 맞춰 작은것부터 최대한 사야하니까 정렬한 것
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    money = money - arr[i][0] / 2 + arr[i][1];
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j][0] + arr[j][1] > money) break;
      if (i !== j && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

// 입력예제
// 5 28
// 6 6
// 2 2
// 4 3
// 4 5
// 10 3

module.exports = solution;
