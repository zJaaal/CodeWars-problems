//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(gap, min, max) {
    let firstPrime = 0;
    let nextPrime = 0;

    for (min; min <= max; min++) {
        if (!firstPrime) {
            firstPrime = isPrime(min) ? min : 0;
            continue;
        } else if (!nextPrime) {
            nextPrime = isPrime(min) ? min : 0;
        }
        if (!nextPrime) continue;

        if (nextPrime - firstPrime == gap) return [firstPrime, nextPrime];
        else {
            firstPrime = nextPrime;
            nextPrime = 0;
        }
    }
    return null;
}

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
};
