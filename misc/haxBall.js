var abort = false;

function genColors() {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = [''];

  for (let i = 0; i < 3; i++) {
    let currentValue = '';

    for (let j = 0; j < 2; j++) {
      let flag = Math.random();

      if (flag > 0.5)
        currentValue +=
          letters[Math.floor(Math.random() * (letters.length - 1))];
      else
        currentValue +=
          numbers[Math.floor(Math.random() * (numbers.length - 1))];
    }
    result[0] += currentValue;
  }

  result.push(
    result[0].split('').reverse().join(''),
    result[0].split('').sort().join('')
  );

  return result;
}

var myInterval = setInterval(() => {
  let teams = {
    red: 'FF0000',
    blue: '0011FF',
  };
  let colors = ['red', 'blue'];
  let input = document.querySelector('.input>input');
  if (abort || !input) {
    clearInterval(myInterval);
    console.log('Successfully aborted');
  }
  let button = document.querySelector('.input>button');

  input.value = `/avatar ${String(Math.floor(Math.random() * 99)).padStart(
    2,
    '0'
  )}`;
  button.click();

  colors.forEach((team) => {
    let color = genColors();
    input.value = '';
    input.value = `\/colors ${team} ${team == 'blue' ? -45 : 45} ${
      team == 'blue' ? teams.blue : teams.red
    } ${color.join(' ')}`;
    button.click();
  });
}, 1000);
