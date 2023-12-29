//https://www.codewars.com/kata/52fba2a9adcd10b34300094c

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
