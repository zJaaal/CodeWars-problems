//https://www.codewars.com/kata/58e24788e24ddee28e000053

function simple_assembler(program) {
  let variables = {};
  let pointer = 0;
  const actions = {
    mov: (x, y) => {
      variables[x] = isNaN(y) ? Number(variables[y]) : Number(y);
      ++pointer;
    },
    inc: (x) => {
      ++variables[x];
      ++pointer;
    },
    dec: (x) => {
      --variables[x];
      ++pointer;
    },
    jnz: (x, y) => {
      if (variables[x] != 0) {
        pointer += isNaN(y) ? Number(variables[y]) : Number(y);
      } else ++pointer;
    },
  };

  while (pointer < program.length) {
    let action = program[pointer].split(' ')[0];
    let arg1 = program[pointer].split(' ')[1];
    let arg2 =
      program[pointer].split(' ').length == 3
        ? program[pointer].split(' ')[2]
        : 0;

    actions[action](arg1, arg2);
  }

  return variables;
}
