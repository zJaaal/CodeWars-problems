//https://www.codewars.com/kata/57fa537f8b0760c7da000407

function diamondsAndToads(sentence, fairy, isGood = fairy == 'good') {
    let map = {
        s: 'squirrel',
        p: 'python',
        r: 'ruby',
        c: 'crystal'
    };
    let regex = isGood ? /([RC])|([rc])/g : /([SP])|([sp])/g;
    let result = isGood ? { ruby: 0, crystal: 0 } : { python: 0, squirrel: 0 };
    sentence.replace(regex, (_, upper, lower) => {
        let key = (upper || lower).toLowerCase();

        result[map[key]] = (result[map[key]] || 0) + (upper ? 2 : 1);
    });

    return result;
}

console.log(diamondsAndToads('Ruby and Crystal', 'good'), { ruby: 3, crystal: 2 });
console.log(diamondsAndToads('This string contain some Ruby and some Crystal in it', 'good'), {
    ruby: 4,
    crystal: 3
});
console.log(diamondsAndToads('Python and Squirrel', 'evil'), { python: 2, squirrel: 2 });
console.log(diamondsAndToads('This string contain some Python and some Squirrel in it', 'evil'), {
    python: 2,
    squirrel: 6
});
