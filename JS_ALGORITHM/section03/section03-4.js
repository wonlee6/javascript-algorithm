// 가장 짧은 문자 거리

function solution(str, word) {
  let answer = [];

  let num = 0;

  for (let i of str) {
    if (i !== word) {
      num++;
      answer.push(num);
    } else {
      num = 0;
      answer.push(num);
    }
  }
  // 1 0 1 2 3 0 1 2 3 4 0

  answer2 = [];
  num = 0;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] !== word) {
      num++;
      answer2.push(num);
    } else {
      num = 0;
      answer2.push(num);

      // 인프런
      // answer = Math.min(answer[i], num)
    }
  }
  // 1 0 1 2 3 0 1 2 3 4 0
  console.log(answer);

  // 0 1 2 3 4 0 1 2 3 0 1
  answer2 = answer2.reverse();
  console.log(answer2);
  // 1 0 3 2 1 0 4 3 2 1 0
  let sum = [];
  for (let i = 0; i < str.length; i++) {
    if (answer[i] < answer2[i]) {
      sum.push(answer[i]);
    } else {
      sum.push(answer2[i]);
    }
  }
  console.log(sum);
  // 1 0 1 2 1 0 1 2 2 1 0
  answer = sum;
  return answer;
}
words = 'teachermode';
word = 'e';
console.log(solution(words, word));

// 출력
// 1 0 1 2 1 0 1 2 2 1 0
