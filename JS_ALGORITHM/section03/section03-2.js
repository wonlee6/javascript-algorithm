// 유효한 팰린드롬
// 앞으로 읽을 때나 뒤에서 읽을 때나 같은 문자열 을 팰린드롬이라고함
// 맞으면 yes, 틀리면 no
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않음
// 알파벳 이외의 문자들은 무시

function solution(s) {
  // let answer = 'YES';
  // s = s.toLowerCase();
  // let reg = s.replace(/[\W,\d]/g, '');
  // let len = reg.length / 2;
  // console.log(reg, len);

  // for (let i = 0; i < len; i++) {
  //   console.log(reg[i], reg[reg.length - i - 1]);
  //   if (reg[i] !== reg[reg.length - i - 1]) return 'NO';
  // }
  // return answer;

  // 인프런

  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');

  if (s.split('').reverse().join('') !== s) return 'NO';

  return answer;
}
word = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(word));
