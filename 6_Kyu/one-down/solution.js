//https://www.codewars.com/kata/56419475931903e9d1000087

function oneDown(str) {
    if (typeof str !== 'string') return 'Input is not a string';
    return str.replace(/[a-z]/gi, (char) => {
        if (char === 'A') return 'z';
        if (char === 'a') return 'Z';

        return String.fromCharCode(char.charCodeAt(0) - 1);
    });
}
console.log(oneDown('Ifmmp'), 'Hello');
console.log(oneDown('Uif usjdl up uijt lbub jt tjnqmf'), 'The trick to this kata is simple');
console.log(oneDown(45), 'Input is not a string');
console.log(oneDown('qVAamFt BsF gVo'), 'pUzZlEs ArE fUn');
