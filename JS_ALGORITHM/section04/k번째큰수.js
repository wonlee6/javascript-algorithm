// k번쨰수
// 3장의 카드를 뽑아 합한 값
// k번째 큰 수 출력

function solution(n, k, arr) {
  let answer = [];
  let sum = 0;

  // 3개의 합을 빈 배열로 넣는다
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        answer.push(sum);
      }
    }
  }

  // 내림차순 정렬 후 중복 제거
  answer = answer
    .sort((a, b) => b - a)
    .filter((v, i) => {
      return answer.indexOf(v) === i;
    });

  // console.log(answer);
  return answer[k - 1];
}

// const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
module.exports = solution;
