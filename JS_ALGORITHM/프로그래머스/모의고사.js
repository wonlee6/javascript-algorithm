// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]
// 입출력 예 설명
// 입출력 예 #1

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 입출력 예 #2

// 모든 사람이 2문제씩을 맞췄습니다.
function solution(answers) {
  var answer = [];

  const list = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let result = [0, 0, 0];
  for (let i = 0; i <= answers.length; i++) {
    if (answers[i] === list[0][i % 5]) {
      console.log(i % 5);
      result[0]++;
    }
    if (answers[i] === list[1][i % 8]) {
      result[1]++;
    }
    if (answers[i] === list[2][i % 10]) {
      result[2]++;
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (const x of result) {
    if (x > max) {
      max = x;
    }
  }

  for (let k = 0; k < result.length; k++) {
    if (max === result[k]) answer.push(k + 1);
  }

  return answer;
}

module.exports = solution;
<<<<<<< HEAD
=======
// var answer = [];
//     var list = [
//         [1,2,3,4,5],
//         [2,1,2,3,2,4,2,5],
//         [3,3,1,1,2,2,4,4,5,5]
//     ]
//     var point = [0,0,0]

//     for(var i=0; i<answers.length; i++){
//         if(answers[i] === list[0][i%5])
//             point[0]++;
//         if(answers[i] === list[1][i%8])
//             point[1]++;
//         if(answers[i] === list[2][i%10])
//             point[2]++;
//     }
//     var max =0;
//     for(var j=0; j<point.length; j++){
//         if(point[j] > max)
//             max = point[j];
//     }
//     for(var k=0; k<point.length; k++){
//         if(max===point[k])
//             answer.push(k+1);
//     }
//     return answer;
>>>>>>> ff50e61458ee0622bc9c970b579c37bda7bdee7f
