function canReconfigure(from, to) {
  if (from.length != to.length) return false;

  let hashMap = {};

  let fromArray = from.split('');

  for (let i = 0; i < fromArray.length; i++) {
    let char = fromArray[i];
    if (!hashMap[char] && !hashMap[to[i]]) {
      hashMap[char] = to[i];
      hashMap[to[i]] = char;
    }
    if (hashMap[char] != to[i]) return false;
  }
  return true;
}

const from = 'CON';
const to = 'JUU';

console.log(canReconfigure(from, to));
