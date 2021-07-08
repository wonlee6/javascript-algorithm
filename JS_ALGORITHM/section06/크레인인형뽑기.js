// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];
// const moves = [1, 5, 3, 5, 1, 2, 1, 4];
//                4  3  1  1  3  2  0  4
//사라진 인형의 개수를 return

function solution(board, moves) {
  var answer = 0;

  const stack = [];
  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        let temp = board[i][x - 1];
        board[i][x - 1] = 0;
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(temp);
        break;
      }
    }
  }

  console.log(stack);

  return answer;
}

module.exports = solution;
