//https://www.codewars.com/kata/54fb853b2c8785dd5e000957

function chain(input, fs) {
  let result = [input];
  fs.forEach((f, i) => {
    result.push(f(result[i]));
  });
  return result.pop();
}
