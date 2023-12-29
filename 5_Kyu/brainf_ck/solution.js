//https://www.codewars.com/kata/526156943dfe7ce06200063e

function brainLuck(code, input) {
  let output = [];
  let pointer = 0;
  let memory = new Array(2000).fill(0);
  let codePointer = -1;
  let inputArray = input.split('');
  const instructions = {
    '>': () => {
      ++pointer;
      if (pointer > 2000) {
        pointer = 0;
      }
    },
    '<': () => {
      --pointer;
      if (pointer < 0) {
        pointer = 2000;
      }
    },
    '+': () => {
      ++memory[pointer];
      if (memory[pointer] > 255) {
        memory[pointer] = 0;
      }
    },
    '-': () => {
      --memory[pointer];
      if (memory[pointer] < 0) {
        memory[pointer] = 255;
      }
    },
    '.': () => output.push(memory[pointer]),
    ',': () => (memory[pointer] = inputArray.shift().charCodeAt(0)),
    '[': () => {
      if (memory[pointer] == 0) {
        let brackets = 1;
        for (let i = codePointer + 1; i < code.length; i++) {
          if (code[i] == '[') {
            ++brackets;
            continue;
          }
          if (code[i] == ']') {
            --brackets;
          }
          if (code[i] == ']' && brackets == 0) {
            codePointer = i;
            break;
          }
        }
      }
    },
    ']': () => {
      if (memory[pointer] != 0) {
        let brackets = 1;
        for (let i = codePointer - 1; i > 0; i--) {
          if (code[i] == ']') {
            ++brackets;
            continue;
          }
          if (code[i] == '[') {
            --brackets;
          }
          if (code[i] == '[' && brackets == 0) {
            codePointer = i;
            break;
          }
        }
      }
    },
  };
  while (codePointer < code.length - 1) {
    codePointer++;
    instructions[code[codePointer]]();
  }

  return String.fromCharCode.apply(null, output);
}
