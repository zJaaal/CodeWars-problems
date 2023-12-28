// 4 Kyu
// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript
// Finally solved.
console.clear();

let checkOrder = (reference, triplet) => {
  let order = '';

  reference.forEach((letter) => {
    order += triplet.includes(letter) ? letter : '';
  });

  return order === triplet.join('');
};

let checkUnOrdered = (reference, triplet) => {
  for (let [i, char] of triplet.entries()) {
    // If the current letter is greater than the next one, we return the next one which is unordered

    if (reference.indexOf(char) > reference.indexOf(triplet[i + 1]))
      return triplet[i + 1];
  }
};

var recoverSecret = function (triplets) {
  let result = [];

  for (let triplet of triplets) {
    let indexes = triplet.map((letter) => result.indexOf(letter));

    // Here we insert all missing letters at the beginning of the result array or where they belong.
    if (indexes.every((index) => index === -1)) {
      result.unshift(...triplet);
    } else if (indexes.some((index) => index === -1)) {
      let [first, second, third] = triplet;
      let [firstIndex, secondIndex, thirdIndex] = indexes;

      if (firstIndex === -1) {
        result.splice(secondIndex - 1, 0, first);
      }
      if (secondIndex == -1) {
        result.splice(firstIndex + 1, 0, second);
      }
      if (thirdIndex === -1) {
        result.splice(secondIndex + 1, 0, third);
      }
    }

    // Check the order
    while (!checkOrder(result, triplet)) {
      let [firstIndex, secondIndex, thirdIndex] = triplet.map((letter) =>
        result.indexOf(letter)
      );

      let found = checkUnOrdered(result, triplet); // Check which one is unordered

      let indexOfFound = triplet.indexOf(found);

      if (indexOfFound === 0) {
        // If it's the first one, we move it before the second one
        result.splice(firstIndex, 1);
        result.splice(secondIndex - 1, 0, found);
      } else if (indexOfFound === 1) {
        // If it's the second one, we move it after the first one
        result.splice(secondIndex, 1);
        result.splice(firstIndex, 0, found);
      } else if (indexOfFound === 2) {
        // If it's the third one, we move it after the second one
        result.splice(thirdIndex, 1);
        result.splice(secondIndex, 0, found);
      }
    }
  }

  return result.join('');
};

let triplets = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

let triplets2 = [
  ['t', 's', 'f'],
  ['a', 's', 'u'],
  ['m', 'a', 'f'],
  ['a', 'i', 'n'],
  ['s', 'u', 'n'],
  ['m', 'f', 'u'],
  ['a', 't', 'h'],
  ['t', 'h', 'i'],
  ['h', 'i', 'f'],
  ['m', 'h', 'f'],
  ['a', 'u', 'n'],
  ['m', 'a', 't'],
  ['f', 'u', 'n'],
  ['h', 's', 'n'],
  ['a', 'i', 's'],
  ['m', 's', 'n'],
  ['m', 's', 'u'],
];

let triplets3 = [
  ['g', 'a', 's'],
  ['o', 'g', 's'],
  ['c', 'n', 't'],
  ['c', 'o', 'n'],
  ['a', 't', 's'],
  ['g', 'r', 't'],
  ['r', 't', 's'],
  ['c', 'r', 'a'],
  ['g', 'a', 't'],
  ['n', 'g', 's'],
  ['o', 'a', 's'],
];

let triplets4 = [
  ['l', 'e', 'd'],
  ['o', 'e', 'd'],
  ['o', 'l', 'e'],
  ['o', 'v', 'e'],
  ['s', 'o', 'l'],
  ['s', 'e', 'd'],
  ['s', 'l', 'e'],
  ['v', 'e', 'd'],
  ['o', 'l', 'v'],
  ['l', 'v', 'd'],
];

console.log(recoverSecret(triplets));
console.log(recoverSecret(triplets2));
console.log(recoverSecret(triplets3));
console.log(recoverSecret(triplets4));
