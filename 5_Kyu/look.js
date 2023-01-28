function lookSay(number) {
  let numberArray = (number + '').split('');

  return +numberArray
    .reduce(
      (acc, number, i) => (
        numberArray[i - 1] == number
          ? i && (acc[acc.length - 1][0] += 1)
          : i && acc.push([1, number]),
        acc
      ),
      [[1, numberArray[0]]]
    )
    .flatMap(([times, value]) => `${times}${value}`)
    .join('');
}

console.log(lookSay(0), 10);
console.log(lookSay(2014), 12101114);
console.log(lookSay(1122), 2122);
console.log(lookSay(22322), 221322);
