// 숫자만 출력
// -> 자연수로 출력

function solution(s) {
  // let answer;
  // s = s.replace(/\D/g, '');
  // answer = Math.abs(s); // parseInt 가능할듯 
  // return answer;

  // 인프런
  let answer = '';
  for (let x of s) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}
word = 'g0en2T0s8eSoft';
console.log(solution(word));
