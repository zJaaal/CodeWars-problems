function josephusSurvivor(n, k) {
  let nArray = Array.from({ length: n }, (_, i) => i + 1);

  for (
    let i = (k - 1) % nArray.length;
    nArray.length > 1;
    i = (i + k - 1) % nArray.length
  ) {
    nArray.splice(i, 1);
  }
  return nArray[0];
}
// console.log(josephusSurvivor(11, 19), 10);
// console.log(josephusSurvivor(7, 3), 4);
// console.log(josephusSurvivor(1, 300), 1);
// console.log(josephusSurvivor(14, 2), 13);
// console.log(josephusSurvivor(100, 1), 100);

function josephus(items, k) {
  if (!items.length) return [];
  let result = [];

  for (
    let i = (k - 1) % items.length;
    items.length > 1;
    i = (i + k - 1) % items.length
  ) {
    result.push(...items.splice(i, 1));
  }
  return [...result, items.pop()];
}

console.log(
  josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
console.log(
  josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
  [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
);
console.log(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4), [
  'e',
  's',
  'W',
  'o',
  'C',
  'd',
  'r',
  'a',
]);
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3), [3, 6, 2, 7, 5, 1, 4]);
console.log(josephus([], 3), []);
