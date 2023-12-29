//https://www.codewars.com/kata/61393fd03e441f001ac9c7d4

function formatNumber(number, template) {
  let numbers = [...String(number)];

  let result = template
    .split('')
    .map((char) => {
      if (numbers[0] && char == '#') return numbers.shift();

      return char;
    })
    .join('');

  return result.includes('#') ? 'Invalid phone number' : result;
}
