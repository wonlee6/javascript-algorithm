function solution(scores) {
  let answer = '';

  for (let i = 0; i < scores.length; i++) {
    let sum = 0;
    let max = 0;
    let min = 101;
    let average = 0;
    let count = 0;
    // sum 을 구하고 max, min 구함
    for (let j = 0; j < scores.length; j++) {
      sum += scores[j][i];
      if (scores[j][i] > max) max = scores[j][i];
      else if (scores[j][i] < min) min = scores[j][i];
    }
    // max 및 min 개수 구함
    for (let k = 0; k < scores.length; k++) {
      if (max === scores[i][i]) {
        if (max === scores[k][i]) count++;
      } else if (min === scores[i][i]) {
        if (min === scores[k][i]) count++;
      }
    }
    // max일 때 평균
    if (max === scores[i][i] && count === 1) {
      sum -= scores[i][i];
      average = sum / (scores.length - 1);
      // min 평균
    } else if (min === scores[i][i] && count === 1) {
      sum -= scores[i][i];
      average = sum / (scores.length - 1);
      //
    } else {
      average = sum / scores.length;
    }
    console.log(`평균 : ${average}`);

    if (90 <= average) answer += 'A';
    else if (80 <= average) answer += 'B';
    else if (70 <= average) answer += 'C';
    else if (50 <= average) answer += 'D';
    else answer += 'F';
    console.log(answer);
  }
  return answer;
}

module.exports = solution;

// 자기 자신 점수가 최저 및 최고라면 제외
// [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]	"FBABD"
// 90점 이상	A
// 80점 이상 90점 미만	B
// 70점 이상 80점 미만	C
// 50점 이상 70점 미만	D
// 50점 미만	F
