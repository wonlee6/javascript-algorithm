//  1 2 3
//  4 5 6
//  7 8 9
//  * 0 #

// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// "L  R  L  L  L  R  L  L  R  R  L";
// "right";
function solution(numbers, hand) {
  let answer = "";

  // 2중 배열을 만듬
  //   const phone = [
  //     [1, 4, 7],
  //     [2, 5, 8, 0],
  //     [3, 6, 9],
  //   ];
  const phone = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const result = numbers.reduce((acc, value) => {
    if (value % 3 === 0) {
      acc += "R";
    } else if (value % 3 === 1) {
      acc += "L";
    } else {
    }
    return acc;
  }, "");

  let lt = (rt = 0);

  for (let k = 0; k < numbers.length; k++) {
    let middle = 0;
    for (let i = 0; i < phone.length; i++) {
      for (let j = 0; j < phone[i].length; j++) {
        if (numbers[k] === phone[i][j]) {
          //   console.log(j);
          if (j === 0) {
            answer += "L";
            lt = j;
          } else if (j === 2) {
            answer += "R";
            rt = j;
          } else {
            middle = j;
            // 5 -> 1,1 왼쪽 1,0 오른쪽 0,1
            if (lt - rt === 0) {
              if (hand === "right") {
                answer += "R";
                rt = j;
              } else {
                answer += "L";
                lt = j;
              }
            }
          }
        }
      }
    }
  }

  return answer;
}

module.exports = solution;
