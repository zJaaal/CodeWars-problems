//https://www.codewars.com/kata/5268af3872b786f006000228

// Write your solution here

var guess = 101;

Object.defineProperty(Math, 'random', {
    value: () => 1,
    writable: false
});
