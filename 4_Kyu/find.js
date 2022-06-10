// 4 kyu Problem Find the unknown digit
//https://www.codewars.com/kata/546d15cebed2e10334000ed9

function solveExpression(exp) {
    let regex = new RegExp(/\?/g);
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    if(/--/.test(exp)){
        exp = exp.replace(/--/, "+","g");
    }
    if(exp[0] == "?" && /[0-9]|\?/.test(exp[1]) || /\?\?/.test(exp.split("=")[1])){
        numbers.splice(0,1);
    }

    exp.split("").forEach((char) =>{
        if(numbers.includes(char)){
            numbers.splice(numbers.indexOf(char), 1);
        }
    });
    let solution = -1;
    for(let i = 0; i < numbers.length; i++){
        let newExp = exp.replace(regex,numbers[i]);
        let currentExp = newExp.split("=")[0];
        if(eval(currentExp) == newExp.split("=")[1]){
            solution = +numbers[i];
            break;
        }
    }
  return solution;
}
console.log(solveExpression("?*11=??")); 