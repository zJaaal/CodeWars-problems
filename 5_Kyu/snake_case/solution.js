//https://www.codewars.com/kata/529b418d533b76924600085d

function toUnderscore(string) {
  return isNaN(string)
    ? string.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase()).slice(1)
    : '' + string;
}
