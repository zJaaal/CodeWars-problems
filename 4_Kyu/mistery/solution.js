//https://www.codewars.com/kata/56b2abae51646a143400001d

// Write your solution here

function mystery(number) {
    return number ^ (number >> 1); // The XOR of a number and its right shift by 1 is the Gray Code of that number
}

function mysteryInv(grayCodeNumber) {
    let originalBinary = grayCodeNumber; // G = B from the begginning
    let shift = 1; // The MBS of the Gray Code is the same as the MBS of the binary number, so we start from the second bit

    let obCurrentBit = grayCodeNumber >> shift;

    // We shift the Gray Code to the right until there is no bit left
    while (((obCurrentBit = grayCodeNumber >> shift++), obCurrentBit > 0))
        originalBinary ^= obCurrentBit; // We XOR the current bit with the previous bit to build the original binary

    return originalBinary;
}

function nameOfMystery() {
    return 'Gray code';
}

console.log(mystery(6), 5, 'mystery(6) ');
console.log(mysteryInv(5), 6, 'mysteryInv(5)');
console.log(mystery(9), 13, 'mystery(9) ');
console.log(mysteryInv(13), 9, 'mysteryInv(13)');
console.log(mystery(19), 26, 'mystery(19) ');
console.log(mysteryInv(26), 19, 'mysteryInv(26)');
