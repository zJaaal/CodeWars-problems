//https://www.codewars.com/kata/588f3e0dfa74475a2600002a

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
