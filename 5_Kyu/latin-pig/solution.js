//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    let strArray = str.split(' ');

    let regex = new RegExp(/\w/);
    strArray.forEach((x, i) => {
        let currentArray = x.split('');
        if (regex.test(x)) {
            console.log(x);
            let first = currentArray.shift();
            currentArray.push(first + 'ay');
        }
        strArray[i] = currentArray.join('');
    });
    return strArray.join(' ');
}
