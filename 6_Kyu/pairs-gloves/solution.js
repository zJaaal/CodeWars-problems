//https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(gloves) {
    let pairs = [];
    let count = 0;
    gloves.forEach((x) => {
        if (pairs.find((p) => p == x)) {
            pairs = pairs.filter((p) => p != x);
            ++count;
        } else {
            pairs.push(x);
        }
    });
    return count;
}
