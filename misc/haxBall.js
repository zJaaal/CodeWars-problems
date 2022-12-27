var abort = false;

function genColor() {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = [];

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
    result.push(currentValue);
  }

  return result.join('');
}

let intervalId = setInterval(() => {
  let teams = {
    red: 'FF0000',
    blue: '00FFEE',
  };
  let colors = ['red', 'blue'];
  let input = document.querySelector('.input>input');
  if (!input || abort) {
    clearInterval(intervalId);
    console.log('Successfully aborted');
  }
  let button = document.querySelector('.input>button');

  colors.forEach((team) => {
    let color = genColor();
    input.value = '';
    input.value = `\/colors ${team} 90 ${
      team == 'blue' ? teams.blue : teams.red
    } ${color}`;
    button.click();
  });
}, 500);
