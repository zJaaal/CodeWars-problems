//https://www.codewars.com/kata/58708934a44cfccca60000c4

function highlight(code) {
    const match = {
        F: (match) => `<span style="color: pink">${match}</span>`,
        number: (match) => `<span style="color: orange">${match}</span>`,
        L: (match) => `<span style="color: red">${match}</span>`,
        R: (match) => `<span style="color: green">${match}</span>`
    };
    return code.replace(/F+|[0-9]+|L+|R+/g, (code) =>
        isNaN(code) ? match[code[0]](code) : match['number'](code)
    );
}
