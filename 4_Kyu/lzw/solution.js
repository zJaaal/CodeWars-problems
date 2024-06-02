//https://www.codewars.com/kata/55833364a2e09a6887000166

// Write your solution here

/**
  Returns list of codes: a comma separated string of the LZW compression decimal numbers (the last code must be 0)
  symbols: sorted string of valid data symbols for the text. The index will be the code of the intial dictionary
  stop: The last symbol of the text
  text: Uncompressed text: text is made of combinations of symbols. The stop symbol appears once and at the end of the text
*/
function encode(symbols, stop, text) {
    if (!symbols) return '';

    const dictionary = new Map(symbols.split('').map((symbol, index) => [symbol, index]));

    let startIndex = 0;

    let encoded = [];

    let finish = false;

    while (!finish) {
        let currentSymbols = '';
        for (let i = startIndex; i < text.length; i++) {
            currentSymbols += text[i];

            if (currentSymbols === stop) {
                encoded.push(dictionary.get(currentSymbols));
                finish = true;
                break;
            }

            // If the current next sequence is not in the dictionary, add it and encode the current sequence
            if (!dictionary.has(currentSymbols + text[i + 1])) {
                dictionary.set(currentSymbols + text[i + 1], dictionary.size); // Add the new sequence to the dictionary
                encoded.push(dictionary.get(currentSymbols)); // Encode the current sequence
                startIndex = i + 1; // Update the start index to the end of the current sequence
                break;
            }
        }
    }

    return encoded.join(',');
}

/**
  Returns a uncompressed text given a sequence of compressed codes
  symbols: Valid data symbols
  code: string of comma separated codes. The last code always will be 0
*/
function decode(symbols, code) {
    if (!symbols) return '';

    const dictionary = new Map(symbols.split('').map((symbol, index) => [index, symbol]));

    const codes = code.split(',').map(Number);

    return codes
        .map((code, index) => {
            if (index === 0) return dictionary.get(code);

            const previous = codes[index - 1];
            let symbol = dictionary.get(code);
            let previousSymbol = dictionary.get(previous);

            if (symbol) {
                dictionary.set(dictionary.size, previousSymbol + symbol[0]);
            } else {
                dictionary.set(dictionary.size, previousSymbol + previousSymbol[0]);
                symbol = dictionary.get(code);
            }

            return symbol;
        })
        .join('');
}

const symbols = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const text = 'TOBEORNOTTOBEORTOBEORNOT#';

const result = '20,15,2,5,15,18,14,15,20,27,29,31,36,30,32,34,0';

console.log(encode(symbols, '#', text));
console.log(result);

console.log(decode(symbols, result));
console.log(text);

const breakingSymbols = '@A';
const breakingText = 'AAAAAAAAAAAAAAAAAAAAAAAAAA@';
const stop = '@';

console.log(encode(breakingSymbols, stop, breakingText));

console.log(decode('@A', '1,2,3,4,5,6,5,0'));
