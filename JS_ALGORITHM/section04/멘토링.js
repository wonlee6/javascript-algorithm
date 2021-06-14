// 멘토링
// 반학생수 n,m
// 수학 테스트 결과가 학생번로, 제일 앞에서부터 1,2 ...
// 만약 한 줄에 n = 4이고, 테스트결과가  3,4,1,2 라면 3번학생이 1등 4번학생이 2등
// 1번학생이 3등 2번학생이 4등
// 멘토가 될려면 a학생은 m번의 시험에서 b보다 높아야함
// m번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들수있는 경우의 수 구하라

// 못 풀어서 인프런 보고 함
function solution(arr) {
  let answer = 0;
  let m = arr.length;
  let n = arr[0].length;

  // 반 학생수 n 의 총 경우의 수 16
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          // console.log(`arr[k][s] : ${arr[k][s]}`, `i : ${i}`);
          // k번째 테스트에서 s등을 하는 학생의 번호
          if (arr[k][s] === i) {
            pi = s; // pi는 멘토가 되는 i번 학생의 등수
          }
          if (arr[k][s] === j) pj = s; // pj는 멘티가 되는 j번 학생의 등수
        }
        // console.log(pi, pj);
        if (pi > pj) count++;
      }
      if (count === m) answer++;
    }
  }
  return answer;
}

// 3 4 1 2
// 4 3 2 1
// 3 1 4 2

module.exports = solution;
