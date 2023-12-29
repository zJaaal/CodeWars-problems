//https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  message = message
    .split('')
    .map((char) => {
      let currentAscii = char.charCodeAt(0);
      if (
        (currentAscii >= 65 && currentAscii <= 77) ||
        (currentAscii >= 97 && currentAscii <= 109)
      ) {
        currentAscii += 13;
      } else if (
        (currentAscii > 77 && currentAscii <= 90) ||
        (currentAscii > 109 && currentAscii <= 122)
      ) {
        currentAscii += 13 - 26;
      }
      return String.fromCharCode(currentAscii);
    })
    .join('');
  return message;
}
