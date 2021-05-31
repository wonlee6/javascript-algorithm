// 가위바위보
// A가 이기면 A출력 B가이기면 B출력 비비면 D출력
// 1. 가위 2. 바위 3. 보
// 두 사람의 각 회 가위,바위,보 정부가 주어지면 각 회를 누가 이겼는지 출력

// 첫 번째 줄에 게임 횟수
// 두 번째 줄 A의 가위 바위 보 정보
// 세 번째 줄 B의 가위 바위 보 정보
// 승자 출력 비길경우 D

function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 3) {
      answer += 'A';
    } else if (a[i] === 2 && b[i] === 1) {
      answer += 'A';
    } else if (a[i] === 3 && b[i] === 2) {
      answer += 'A';
    } else if (a[i] === b[i]) {
      answer += 'D';
    } else {
      answer += 'B';
    }
  }

  return answer;
}
A = [2, 3, 3, 1, 3];
B = [1, 1, 2, 2, 3];
console.log(solution(A, B));
