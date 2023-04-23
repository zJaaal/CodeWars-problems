// 3 Kyu Nested Arrays
// https://www.codewars.com/kata/5992757ab2555777fb000067

// Find prime factors
// If is 2 then is array if not replace with the position of the prime factor
// Repeat unitl all numbers are array
function findPrimes(n) {
  let primes = [];

  let primeFactor = 2;
  while (n > 1) {
    if (n % primeFactor == 0) {
      primes.push(primeFactor);
      n /= primeFactor;
    } else primeFactor++;
  }
  return [...primes];
}

function findPrimePosition(n) {
  // Eratosthenes algorithm to find all primes under n
  let array = new Array(n).fill(1);

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i * i < n; i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = 0;
      }
    }
  }

  return array.filter((x) => x).length - 1;
}

function isPrime(k) {
  // Corner cases
  if (k <= 1) return 0;
  if (k == 2 || k == 3) return 1;

  // below 5 there is only two prime numbers 2 and 3
  if (k % 2 == 0 || k % 3 == 0) return 0;

  // Using concept of prime number can be represented in form of (6*k + 1) or(6*k - 1)
  for (let i = 5; i * i <= k; i = i + 6)
    if (k % i == 0 || k % (i + 2) == 0) return 0;

  return 1;
}

function findNthPrime(n) {
  let i = 2;

  while (n > 0) {
    // each time if a prime number found decrease n
    if (isPrime(i)) n--;

    i++; //increase the integer to go ahead
  }
  i -= 1; // since decrement of k is being done before
  return i;
}

function nestArray(primeArray) {
  return primeArray.map((prime) => {
    if (prime == 2) return [];
    else
      return nestArray(...[findPrimePosition(prime)].map((x) => findPrimes(x)));
  });
}

function unnestArray(nestedArray) {
  return [
    nestedArray
      .map((value) => {
        if (!Array.isArray(value)) return value;
        else
          return unnestArray(value).map((x) =>
            Array.isArray(x) ? unnestArray(x) : findNthPrime(x)
          );
      })
      .reduce((a, c) => a * c, 1),
  ];
}

function closeBrackets(string) {
  let toCloseBrackets = 0;

  return (
    string
      .split('')
      .map((char, index) => {
        if (char == '[') toCloseBrackets++;
        else if (char == ']') toCloseBrackets--;

        return string[index + 1] == '[' && char == ']' ? char + ',' : char;
      })
      .join('') + ']'.repeat(toCloseBrackets)
  );
}

function encode(n) {
  // Find the first primes
  let primes = findPrimes(n);

  return parseInt(
    JSON.stringify(nestArray(primes))
      .replace(/\[|\]|\,/g, (match) => {
        if (match == '[') return '1';
        else if (match == ']') return '0';
        else return '';
      })
      .replace(/10+$/g, '')
      .replace(/^1/g, ''),
    2
  );
}

function decode(n) {
  let binary = n.toString(2);

  let nestedArray = JSON.parse(
    '[' +
      closeBrackets(
        binary.replace(/0|1/g, (match) => {
          if (match == '0') return ']';
          else return '[';
        }) + '['
      )
        .replace(/\[\]/g, 2)
        .replace('[2]', 3) +
      ']'
  );

  return unnestArray(nestedArray)[0];
}

let test = [
  [46, 185],
  [3, 1],
  [4, 2],
  [5, 3],
  [6, 5],
  [7, 6],
  [8, 10],
  [9, 25],
  [10, 11],
  [10000, 179189987],
  [10001, 944359],
  [10002, 183722],
  [10003, 216499],
  [10004, 2863321],
  [10005, 27030299],
  [10006, 93754],
  [10007, 223005],
  [10008, 1402478],
  [9999991, 2115705627],
];

console.log('--------------| TEST |--------------');

// console.log(findPrimes(46));
// console.log(findPrimes(2));
// console.log(findPrimes(23));
// console.log(findPrimes(12));
// console.log(findPrimePosition(9));
// console.log(findNthPrime(2));

console.log('-------------| ENCODE |---------------');

test.forEach(([decoded, encoded]) => {
  let result = encode(decoded);
  let testResult = result == encoded;

  console.log(
    `Encoding ${decoded}\nResult: ${result} ${testResult ? 'PASSED' : 'FAILED'}`
  );
});

console.log('-------------| DECODE |---------------');

test.forEach(([decoded, encoded]) => {
  let result = decode(encoded);
  let testResult = result == decoded;

  console.log(
    `Decoding ${encoded}\nResult: ${result} ${testResult ? 'PASSED' : 'FAILED'}`
  );
});
