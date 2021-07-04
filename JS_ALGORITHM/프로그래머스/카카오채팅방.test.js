const solution = require('./카카오채팅방');

test('카카오채팅방 ', () => {
  const arr = [
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ];
  const answer = [
    'Prodo님이 들어왔습니다.',
    'Ryan님이 들어왔습니다.',
    'Prodo님이 나갔습니다.',
    'Prodo님이 들어왔습니다.',
  ];
  expect(solution(arr)).toEqual(answer);
});
