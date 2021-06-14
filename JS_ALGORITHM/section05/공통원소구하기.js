// 공통원소 구하기

function solution(arr1, arr2) {
  // let answer = [];
  // let num1 = [...arr1];
  // let num2 = [...arr2];

  // num1.map((v) => {
  //   num2.forEach((elem) => {
  //     if (v === elem) {
  //       answer.push(v);
  //     }
  //   });
  // });

  // console.log(answer);
  // return answer.sort((a, b) => a - b);

  // 인프런

  let answer = []
  arr1.sort();
  arr2.sort();

  let p1 = p2 = 0;
  while(p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++])
      p2++
    }
    else if (arr[p1] < arr2[p2]) p1++
    else p2++
  }
  return answer;
}

// const arr1 = [1, 3, 9, 5, 2];
// const arr2 = [3, 2, 5, 7, 8];
module.exports = solution;
