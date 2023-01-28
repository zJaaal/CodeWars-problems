function orderWeight(strng) {
  return strng
    .split(' ')
    .map((x) => [x, x.split('').reduce((acc, num) => (acc += +num), 0)])
    .sort((x, y) => x[1] - y[1] || x[0].localeCompare(y[0]))
    .map((x) => x[0])
    .join(' ');
}

console.log(orderWeight('103 123 4444 99 2000'), '\n2000 103 123 4444 99');
console.log(
  orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
  '\n11 11 2000 10003 22 123 1234000 44444444 9999'
);
