//https://www.codewars.com/kata/5287e858c6b5a9678200083c

const narcissistic = (number) => {
  let arrNumber = String(number)
    .split('')
    .map((num) => Number(num));
  let result = arrNumber.reduce((x, y) => x + Math.pow(y, arrNumber.length), 0);
  return number == result;
};
