//https://www.codewars.com/kata/53f40dff5f9d31b813000774

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
