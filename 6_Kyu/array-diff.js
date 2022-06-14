//6 kyu Problem Array.diff
//https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    b.forEach(x => a = a.filter(y=>y!=x));
    return a;
  }