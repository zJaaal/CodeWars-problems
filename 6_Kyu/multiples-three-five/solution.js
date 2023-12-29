//https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0) return 0;
  let result = 0;
  --number;
  while (number > 0) {
    result += number % 5 == 0 || number % 3 == 0 ? number : 0;
    --number;
  }
  return result;
}
