//https://www.codewars.com/kata/52998bf8caa22d98b800003a

function manhattanDistance([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

console.log(manhattanDistance([1, 1], [1, 1]), 0);
console.log(manhattanDistance([5, 4], [3, 2]), 4);
console.log(manhattanDistance([1, 1], [0, 3]), 3);
