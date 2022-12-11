function canReconfigure(from, to) {
  if (from.length != to.length) return false;

  let hashMap = {};

  let fromArray = from.split('');

  return fromArray.every(
    (char, i, result) => (
      (result = !hashMap[char] && !hashMap[to[i]]),
      result && (hashMap[char] = to[i]),
      result && (hashMap[to[i]] = char),
      hashMap[char] == to[i]
    )
  );
}

const from = 'CON';
const to = 'JUU';

console.log(canReconfigure(from, to));
