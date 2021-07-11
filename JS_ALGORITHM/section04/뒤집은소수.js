// 뒤집은 소수
// 예) 32 =-> 23, 23은 소수 = 23 출력
// 단 910 => 19로  첫자리부터의 0은 무시

// [32, 55, 62, 20, 250, 370, 200, 30, 100];
function solution(arr) {
  let answer;

  answer = [...arr]
    .map((v) => {
      // 문자열 > (배열만들면서)쪼개고 > 반대로 > 배열벗어나고 > 다시 숫자로
      return parseInt(v.toString().split("").reverse().join(""));
    })
    .filter((value) => {
      // console.log(value); // 23, 55, 26,2, 52,73,2,3,1
      if (value === 2 || value === 3) {
        return value;
      } else if (value % 2 !== 0) {
        // console.log(value); // 23, 55, 73, 1
        let count = 0;
        for (let i = 3; i <= value; i += 2) {
          // console.log(i, value);
          if (value % i === 0) {
            // console.log(value); // 55 , 73, 23
            count++;
          }
        }
        if (count < 2 && value !== 1) return value;
      }
    });
  console.log(`arr : ${answer}`);

  return answer;
}

// 출력 23, 2, 73, 2, 3
module.exports = solution;

// let answer = [];

//   for (const x of arr) {
//     let str = parseInt(x.toString().split('').reverse().join(''));
//     // console.log(str);
//     let flag = 1;
//     if (str !== 1) {
//       for (let i = 2; i < Math.sqrt(str); i++) {
//         if (str % i === 0) flag = 0;
//       }
//       if (flag) answer.push(str);
//     }
//   }

//   return answer;
