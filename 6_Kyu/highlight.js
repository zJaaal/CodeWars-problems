// F - Wrap this command around <span style="color: pink"> and </span> tags so that it is highlighted pink in our editor
// L - Wrap this command around <span style="color: red"> and </span> tags so that it is highlighted red in our editor
// R - Wrap this command around <span style="color: green"> and </span> tags so that it is highlighted green in our editor
// Digits from 0 through 9 - Wrap these around <span style="color: orange"> and </span>

function highlight(code) {
  const match = {
    F: (match) => `<span style="color: pink">${match}</span>`,
    number: (match) => `<span style="color: orange">${match}</span>`,
    L: (match) => `<span style="color: red">${match}</span>`,
    R: (match) => `<span style="color: green">${match}</span>`,
  };
  return code.replace(/F+|[0-9]+|L+|R+/g, (code) =>
    isNaN(code) ? match[code[0]](code) : match['number'](code)
  );
}

console.log(
  highlight('F3RF5LF7'),
  '<span style="color: pink">F</span><span style="color: orange">3</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">5</span><span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">7</span>'
);
console.log(
  highlight('FFFR345F2LL'),
  '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
);
