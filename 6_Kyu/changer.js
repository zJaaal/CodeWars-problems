function changer(str) {
  let alphabet = Array.from({ length: 26 }, (x, i) =>
    String.fromCharCode(i + 97)
  );

  return str
    .split('')
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        char = alphabet[(char.toLowerCase().charCodeAt(0) - 96) % 26];
        if (/[a|e|i|o|u]/i.test(char)) char = char.toUpperCase();
        else {
          char = char.toLowerCase();
        }
      }
      return char;
    })
    .join('');
}

console.log(changer('Cat30'), 'dbU30');
console.log(changer('Alice'), 'bmjdf');
console.log(changer('sponge1'), 'tqpOhf1');
console.log(changer('Hello World'), 'Ifmmp xpsmE');
console.log(changer('dogs'), 'Epht');
console.log(changer('z'), 'A');
console.log(changer('Cat30'), 'dbU30');
console.log(changer('Alice'), 'bmjdf');
console.log(changer('sponge1'), 'tqpOhf1');
console.log(changer('Hello World'), 'Ifmmp xpsmE');
console.log(changer('dogs'), 'Epht');
console.log(changer('z'), 'A');
