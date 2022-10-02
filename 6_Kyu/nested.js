//6 Kyu Nested List Depth
//https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e

console.clear();

function checkDepth(array, helper) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      ++helper.count;
      checkDepth(array[i], helper);
    }
  }
  return helper;
}

function arrayDepth(array) {
  let helper = {
    count: 1,
  };
  checkDepth(array, helper);
  return helper.count;
}

console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]));
console.log(arrayDepth([2, "yes", [true, false]]));
console.log(arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]));
