function possibilities(str) {
  let result = [];

  if (str.includes('?')) {
    fillWildCard(str, result);
  } else {
    return str;
  }

  return result;
}

function fillWildCard(str, result) {
  if (str.includes('?')) {
    fillWildCard(str.replace('?', '1'), result);
    fillWildCard(str.replace('?', '0'), result);
  } else {
    result.push(str);
  }
}

console.log(possibilities('101?'), ['1010', '1011']);
console.log(possibilities('1?1?'), ['1010', '1110', '1011', '1111']);
