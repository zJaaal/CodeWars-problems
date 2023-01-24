function mergesorted(a, b) {
  if (!a.length || !b.length)
    return a.length && !b.length ? a : !a.length && b.length ? b : [];

  let finalLength = a.length + b.length;
  let result = [];

  while (result.length != finalLength) {
    if (a.length && !b.length) {
      result.push(...a);
      continue;
    } else if (!a.length && b.length) {
      result.push(...b);
      continue;
    }

    if (a[0] >= b[0]) result.push(b.shift());
    else result.push(a.shift());
  }

  return result;
}

const test = (a, b, c) => {
  let result = mergesorted(a, b);
  console.log(result, c);
};

test([], [], []);
test([1], [], [1]);
test([], [1], [1]);
test([1], [1], [1, 1]);
test([1, 2, 3], [4], [1, 2, 3, 4]);
test([4], [1, 2, 3], [1, 2, 3, 4]);
test([1, 1, 1], [2, 2, 2], [1, 1, 1, 2, 2, 2]);
test([2, 2, 2], [1, 1, 1], [1, 1, 1, 2, 2, 2]);
test([1, 2, 3], [1, 2, 3], [1, 1, 2, 2, 3, 3]);
test([1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6]);
test([2, 4, 6], [1, 3, 5], [1, 2, 3, 4, 5, 6]);
