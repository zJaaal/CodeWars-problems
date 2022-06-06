//5 kyu Problem String incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString (strng) {
    let regex = new RegExp(/[1-9]/);
    return strng.replace(regex, (c) => +c + 1);
}

console.log(incrementString("foobar099"));