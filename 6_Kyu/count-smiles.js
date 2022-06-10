//6 kyu Problem Count the smiley faces!
//https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) { //Could have been use RegExp
    arr = arr.filter((smile) => smile.length <= 3);
    arr = arr.filter((smile) => smile.includes(":") || smile.includes(";"));
    arr = arr.filter((smile) => smile.includes(")") || smile.includes("D"));
    arr = arr.filter((smile) => smile.length == 3 ? (smile.includes("~") || smile.includes("-")) : smile.length == 2 ).length;
    return arr ;
}