//https://www.codewars.com/kata/5254ca2719453dcc0b00027d

const genPermutations = (a, size, result) => {
    if (size == 1 && !result.includes(a.join(''))) {
        result.push(a.join(''));
        return;
    }

    for (let i = 0; i < size; i++) {
        genPermutations(a, size - 1, result);

        if (size % 2 == 1) {
            let temp = a[0];
            a[0] = a[size - 1];
            a[size - 1] = temp;
        }

        if (size % 2 == 0) {
            let temp = a[i];
            a[i] = a[size - 1];
            a[size - 1] = temp;
        }
    }
};

function permutations(string) {
    let result = [];
    genPermutations(string.split(''), string.split('').length, result);

    return result;
}
