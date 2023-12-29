//https://www.codewars.com/kata/5296bc77afba8baa690002d7

function isSafe(board, row, col, num) {
  //Check for row
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == num) {
      return false;
    }
  }

  //Check for col
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == num) {
      return false;
    }
  }

  //Check for 3x3 box

  //check which square is the pointer to fix the position to box boundary
  let sqrt = Math.floor(Math.sqrt(board.length));
  let boxRStart = row - (row % sqrt);
  let boxCStart = col - (col % sqrt);

  for (let i = boxRStart; i < boxRStart + sqrt; i++) {
    for (let j = boxCStart; j < boxCStart + sqrt; j++) {
      if (board[i][j] == num) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(board, size) {
  let row = -1;
  let col = -1;
  let solved = true;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] == 0) {
        row = i;
        col = j;
        solved = false;
        break;
      }
    }
    if (!solved) {
      break;
    }
  }

  if (solved) {
    return true;
  }

  for (let num = 1; num <= size; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;
      if (solveSudoku(board, size)) {
        return true;
      } else board[row][col] = 0;
    }
  }
}

function sudoku(puzzle) {
  solveSudoku(puzzle, puzzle.length);
  return puzzle;
}
