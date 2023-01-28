function cache(func) {
  let cache = {};
  let voidCall = false;
  return (...args) => {
    let key = args
      .sort()
      .map((x) => JSON.stringify(x))
      .join('|');

    if (voidCall) return;

    if (!cache[key]) {
      cache[key] = func(...args);

      if (!cache[key]) voidCall = true;
    }

    return cache[key];
  };
}
