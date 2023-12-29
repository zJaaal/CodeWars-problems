//https://www.codewars.com/kata/55c6126177c9441a570000cc

function orderWeight(strng) {
  return strng
    .split(' ')
    .map((x) => [x, x.split('').reduce((acc, num) => (acc += +num), 0)])
    .sort((x, y) => x[1] - y[1] || x[0].localeCompare(y[0]))
    .map((x) => x[0])
    .join(' ');
}
