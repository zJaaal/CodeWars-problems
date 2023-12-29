//https://www.codewars.com/kata/5822d89270ca28c85c0000f3

function scramble(str, arr) {
  let newStr = new Array(str.length);
  arr.forEach((pos, i) => {
    newStr[pos] = str[i];
  });
  return newStr.join('');
}
