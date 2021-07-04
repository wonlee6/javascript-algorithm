// 카카오 채팅방(2019년도 카카오 블라인드 채용 테스트 문제)
// 입력
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
// 출력
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
function solution(arr) {
  let answer = [];

  let result = [];
  for (const x of arr) {
    let str = x.split(' ');
    result.push(str);
  }
  //  [[ 'Enter', 'uid1234', 'Muzi' ],  [ 'Enter', 'uid4567', 'Prodo' ],[ 'Leave', 'uid1234' ],
  // [ 'Enter', 'uid1234', 'Prodo' ], [ 'Change', 'uid4567', 'Ryan' ]]
  // console.log(result);
  let map = new Map();
  for (let i = 0; i < result.length; i++) {
    let word = '';
    if (result[i][0] === 'Enter') {
      word = '님이 들어왔습니다.';
      answer.push([result[i][1], word]);
    } else if (result[i][0] === 'Leave') {
      word = '님이 나갔습니다.';
      answer.push([result[i][1], word]);
      continue;
    }
    map.set(result[i][1], result[i][2]);
  }
  return answer.map((value) => map.get(value[0]) + value[1]);
}

module.exports = solution;
