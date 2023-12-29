//https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validateRow(board, row) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result.push(board[row][i]);
  }
  return !result.includes(0) && new Set(result).size == board.length;
}

function validateCol(board, col) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result.push(board[i][col]);
  }
  return !result.includes(0) && new Set(result).size == board.length;
}

function navigateThroughBox(board) {
  let coor = [];
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      coor.push([i, j]);
    }
  }
  return coor;
}

function validateBox(board, row, col) {
  let result = [];
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      result.push(board[i][j]);
    }
  }
  return !result.includes(0) && new Set(result).size == board.length;
}

function validSolution(board) {
  let coors = navigateThroughBox(board);
  for (let i = 0; i < board.length; i++) {
    if (
      !validateRow(board, i) ||
      !validateCol(board, i) ||
      !validateBox(board, coors[i][0], coors[i][1])
    )
      return false;
  }
  return true;
}
