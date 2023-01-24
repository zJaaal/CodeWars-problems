function transpose(matrix) {
  let result = Array.from({ length: matrix[0].length }, (x) =>
    Array.from({ length: matrix.length }, (x) => 0)
  );

  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      result[j][i] = value;
    });
  });
  return result;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
