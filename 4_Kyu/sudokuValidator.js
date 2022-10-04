//4 Kyu Sudoku Solution Validator
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

let pass = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

let fail = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5],
];

console.log(validSolution(pass));
console.log(validSolution(fail));
