//https://www.codewars.com/kata/58039f8efca342e4f0000023

function changer(str) {
    let alphabet = Array.from({ length: 26 }, (x, i) => String.fromCharCode(i + 97));

    return str
        .split('')
        .map((char) => {
            if (/[a-z]/i.test(char)) {
                char = alphabet[(char.toLowerCase().charCodeAt(0) - 96) % 26];
                if (/[a|e|i|o|u]/i.test(char)) char = char.toUpperCase();
                else {
                    char = char.toLowerCase();
                }
            }
            return char;
        })
        .join('');
}
