//https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(string) {
    return /[0-9]+$/.test(string)
        ? string.replace(/[0-9]+$/, (match) => {
              let result = String(1 + +match);

              if (result.length != match.length) {
                  return result.padStart(match.length, '0');
              } else return result;
          })
        : string + 1;
}

// Looks like i solved this twice, this is a simpler solution, don't know if it works though
// function incrementString (strng) {
//   let regex = new RegExp(/[1-9]/);
//   return strng.replace(regex, (c) => +c + 1);
// }
