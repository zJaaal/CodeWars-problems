//https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => {
    return new Array(n).fill(n).map((x, i) => x - i);
};
