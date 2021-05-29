// 중복 단어삭제
function solution(arr) {
  let answer = [];
  let word;
  let fil;
  let sset;

  // set
  sset = [...new Set(arr)];
  console.log(sset);

  // reduce
  word = arr.reduce((acc, value) => {
    return acc.includes(value) ? acc : [...acc, value];
  }, []);
  console.log(word);

  // filter
  fil = arr.filter((v, i) => arr.indexOf(v) === i);
  console.log(fil);

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));
