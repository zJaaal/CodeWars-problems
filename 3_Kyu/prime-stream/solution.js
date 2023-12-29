//https://www.codewars.com/kata/5519a584a73e70fa570005f5

class Primes {
  static *stream() {
    let start = 0;
    while (true) {
      start = this.nextPrime(start);

      yield start;
    }
  }

  static isPrime(n) {
    // Corner cases
    if (n <= 1) return false;
    if (n <= 3) return true;

    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n % 2 == 0 || n % 3 == 0) return false;

    // Using concept of prime number can be represented in form of (6*k + 1) or(6*k - 1)
    for (let i = 5; i * i <= n; i = i + 6)
      if (n % i == 0 || n % (i + 2) == 0) return false;

    return true;
  }

  static nextPrime(N) {
    // Base case
    if (N <= 1) return 2;

    let prime = N;
    let found = false;

    // Loop continuously until isPrime returns
    // true for a number greater than n
    while (!found) {
      prime++;

      if (this.isPrime(prime)) found = true;
    }

    return prime;
  }
}
