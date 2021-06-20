// const genres = ["classic", "pop", "classic", "classic", "pop"];
// const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  let answer = [];

  const list = genres.reduce((acc, value, index) => {
    if (!acc[value]) {
      acc[value] = { plays: plays[index], music: [] };
    } else {
      acc[value].plays += plays[index];
    }
    acc[value].music.push([index, plays[index]]);
    return acc;
  }, {});
  // {
  //   classic: { plays: 1450, music: [ [Array], [Array], [Array] ] },
  //   pop: { plays: 3100, music: [ [Array], [Array] ] }
  // }
  // console.log(list);

  const sort = Object.values(list).sort((a, b) => b.plays - a.plays);
  console.log(sort);
  // { plays: 3100, music: [ [Array], [Array] ] },
  // { plays: 1450, music: [ [Array], [Array], [Array] ] }\

  sort.forEach((value) => {
    if (value.music.length > 1) {
      value.music.sort((a, b) => {
        if (a[1] > b[1]) return -1;
        else if (a[1] < b[1]) return 1;
        else return a[0] > b[0] ? 1 : -1;
      });
      answer.push(value.music[0][0]);
      answer.push(value.music[1][0]);
    } else {
      answer.push(value.music[0][0]);
    }
  });

  return answer;
}

module.exports = solution;
