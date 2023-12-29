//https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  markers.forEach((element) => {
    let regex = new RegExp(`(\\s)\\${element}(\\s)?\\w\.\*\$`, 'gm');
    input = input.replace(regex, '');
  });
  return input;
}
