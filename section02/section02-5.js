// 5. 등수구하기
// 같은 점수가 입력될 경우 높은 등수로 동일처리
// 가장 높은 점수가 92일 경우 1등 3명 그다음 학생4등

function solution(arr) {
  //인프런 답
  //   let n = arr.length;
  //   let answer = Array.from({ length: n }, () => 1); // 1로 초기화

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       if (arr[j] > arr[i]) {
  //         answer[i]++;
  //       }
  //     }
  //   }
  let answer = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}

arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
