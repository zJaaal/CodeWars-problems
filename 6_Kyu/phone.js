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

console.log(formatNumber(79052479075, '+# ### ### ## ##'), '+7 905 247 90 75');
console.log(
  formatNumber(79052479075, '+# (###) ### ##-##'),
  '+7 (905) 247 90-75'
);
console.log(formatNumber(79052479075, '+# ### ### ## ##'), '+7 905 247 90 75');
console.log(
  formatNumber(81237068908090, '+## ### ### ## ##'),
  '+81 237 068 90 80'
);
console.log(
  formatNumber(8123706890, '+## ### ### ##-##'),
  'Invalid phone number'
);
console.log(formatNumber(112, '+ () -'), '+ () -');
