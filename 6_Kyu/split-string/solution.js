//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
    if (!str) return [];

    let strArray = str.match(/.{1,2}/g);
    strArray = strArray.map((str) => {
        return str.length == 2 ? str : str + '_';
    });
    return strArray;
}
