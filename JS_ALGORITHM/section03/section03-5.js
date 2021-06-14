// 문자열 압축
// 오른쪽에 반복횟수 (단 1은 생략)

function solution(str) {
  let answer = '';

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count > 1) {
        answer += count;
        count = 1;
      }
    }
  }

  return answer;
}

words = 'KKHSSSSSSSE';
console.log(solution(words));

// 출력결과 K2HS7E
