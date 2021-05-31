// 큰 수 출력하기
// N(1 <= N <= 100) 개의 정수를 입력받아 자신의 앞 수보다 큰수만 출력(첫번쨰수는 무조건 출력)
// 입력 6개   --   7 3 9 5 6 12
// 출력 7 9 6 12

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

arr = [7, 3, 9, 5, 6, 12, 55, 18];
console.log(solution(arr));
