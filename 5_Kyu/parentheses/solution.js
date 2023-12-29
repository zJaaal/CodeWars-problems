//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  let count = 0;
  parens.split('').forEach((paren) => {
    if (count < 0) {
      count = -1; // This is for checking the order, theorycally, count cant be negative
      //if you open and close parenthesis in the correct order
      return;
    }
    if (paren == '(') {
      ++count;
      return;
    }
    --count;
  });
  return (count = count >= 0 ? !count : false);
}
