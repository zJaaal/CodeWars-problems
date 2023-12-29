//https://www.codewars.com/kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
  for (let i = 1; i < array.length; i++) {
    if (
      array[i] !== 0 &&
      array[i] !== '0' &&
      (array[i - 1] === 0 || array[i - 1] === '0')
    ) {
      for (let j = i; j > 0; j--) {
        let current = array[j];
        array[j] = array[j - 1];
        array[j - 1] = current;
        if (array[j - 2] !== 0 && array[j - 2] !== '0') break;
      }
    }
  }

  return array;
}
