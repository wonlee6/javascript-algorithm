// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
//노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// 제한사항
// genres[i]는 고유번호가 i인 노래의 장르입니다.
// plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// 장르 종류는 100개 미만입니다.
// 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// 모든 장르는 재생된 횟수가 다릅니다.
// 입출력 예
// genres	plays	return
// ["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]
// 입출력 예 설명
// classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

// 고유 번호 3: 800회 재생
// 고유 번호 0: 500회 재생
// 고유 번호 2: 150회 재생
// pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

// 고유 번호 4: 2,500회 재생
// 고유 번호 1: 600회 재생
// 따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.

// 1. 장르의 플레이 수를 비교한다. 가장 많이 들은 장르가 앞
// 2.
function solution(genres, plays) {
  let answer = [];
  let map = new Map();
  for (let x = 0; x < genres.length; x++) {
    if (map.has(genres[x])) map.set(genres[x], map.get(genres[x]) + plays[x]);
    else map.set(genres[x], plays[x]);
  }
  console.log(map); // 'classic' => 1450, 'pop' => 3100

  let indexMap = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (indexMap.has(genres[i])) indexMap.set(i, genres[i]);
    else indexMap.set(i, genres[i]); //
  }
  console.log(indexMap); //

  let playMap = new Map();
  for (let i = 0; i < plays.length; i++) {
    if (playMap.has(plays[i])) playMap.set(plays[i], playMap.get(plays[i]));
    else playMap.set(plays[i], i);
  }
  // console.log(playMap); //  500 => 0, 600 => 1, 150 => 2, 800 => 3, 2500 => 4

  const result = [...playMap.entries()];
  console.log(result); //  [ [ 500, 0 ], [ 600, 1 ], [ 150, 2 ], [ 800, 3 ], [ 2500, 4 ] ]

  const rank = [...genres].sort((a, b) => map.get(b) - map.get(a)); //   [ 'pop', 'pop', 'classic', 'classic', 'classic' ]
  console.log(rank);
  for (const x of map) {
  }

  return answer;
}
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

module.exports = solution;

// let answer = [];
//   let map = new Map();
//   for (let x = 0; x < genres.length; x++) {
//     if (map.has(genres[x])) map.set(genres[x], map.get(genres[x]) + plays[x]);
//     else map.set(genres[x], plays[x]);
//   }
//   console.log(map);

//   let hash = new Map();
//   for (let i = 0; i < genres.length; i++) {
//     hash.set(plays[i], genres[i]);
//   }
//   console.log(hash);

//   let hash2 = new Map([...hash.entries()].sort((a, b) => b[0] - a[0]));

//   const rank = [...genres].sort((a, b) => map.get(b) - map.get(a));

//   let ranks = [...new Set(rank)];

//   let result = [];
//   for (const i of ranks) {
//     for (const [key, value] of hash2) {
//       if (value === i) {
//         result.push(key);
//       }
//     }
//   }

//   let search = new Map();
//   for (let i = 0; i < plays.length; i++) {
//     search.set(plays[i], i);
//   }
//   console.log(search);

//   for (let i = 0; i < ranks.length * 2; i++) {
//     for (const [key, value] of search) {
//       if (result[i] === key) {
//         answer.push(value);
//       }
//     }
//   }

//   return answer;
// }
