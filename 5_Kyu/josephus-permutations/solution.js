//https://www.codewars.com/kata/5550d638a99ddb113e0000a2

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
