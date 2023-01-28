function incrementString(string) {
  return /[0-9]+$/.test(string)
    ? string.replace(/[0-9]+$/, (match) => {
        let result = String(1 + +match);

        if (result.length != match.length) {
          return result.padStart(match.length, '0');
        } else return result;
      })
    : string + 1;
}

function doTest(input, expected) {
  const actual = incrementString(input);
  console.assert(actual == expected, `for string: "${input}"\n`);
}

doTest('foobar000', 'foobar001');
doTest('foobar999', 'foobar1000');
doTest('foobar00999', 'foobar01000');
doTest('foo', 'foo1');
doTest('foobar001', 'foobar002');
doTest('foobar1', 'foobar2');
doTest('1', '2');
doTest('009', '010');
doTest('fo99obar99', 'fo99obar100');
