// A to #
function solution(arr) {
  let answer = "";

  // answer = arr.replace(/A/g, "#");

  for (let i of arr) {
    if (i === "A") {
      i = "#";
    }
    answer += i;
  }
  return answer;
}

arr = "BANANA";

console.log(solution(arr));
