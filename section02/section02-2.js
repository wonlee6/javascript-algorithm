// 보이는 학생
// 맨 앞에 보이는 학생 수 구하기
// 앞에 서있는 수보다 크면 보이고, 작으면 안보임

function solution(arr) {
  let answer = 0;
  if (arr[0] < arr[1]) {
    //   answer.push(arr[0]);
    answer++;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      //   answer.push(arr[i]);
      answer++;
    }
  }
  return answer;
  // 인프런 답
  //   let answer = 1,
  //     max = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > max) {
  //       answer++;
  //       max = arr[i];
  //     }
  //   }
  //   return answer;
}
arr = [130, 132, 135, 148, 145, 150, 150, 153];
console.log(solution(arr));
