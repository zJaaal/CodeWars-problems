function smartSum() {
  let sum = 0;
  let argsArray = [...arguments].flat();

  for (let i = 0; i < argsArray.length; i++) {
    if (Array.isArray(argsArray[i]))
      return smartSum(sum, ...argsArray.slice(i));

    sum += argsArray[i];
  }
  return sum;
}

console.log(smartSum(1, [2, 3], 4, [[5], [6, 7]], 8));
