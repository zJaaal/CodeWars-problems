//https://www.codewars.com/kata/52a78825cdfc2cfc87000005

const calc = function (expression) {
    const reductionRegex = /(.+)\s*-\s*\1/g;
    expression = expression.replace(reductionRegex, (match, p1) => {
        return match.replaceAll('(', '').trim() == '-' ? match : 0;
    });

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b
    };

    const BEMDASWeight = ['*', '-'];

    const regexes = {
        '-': /(-*\d+\.*\d*)\s*([+-])\s*(-*\d+\.*\d*)/,
        '*': /(-*\d+\.*\d*)\s*([\*\/])\s*(-*\d+\.*\d*)/
    };

    const parenthesesRegex = /\(([^\(\)]+)\)/;

    while (!/^-?\d*\.?\d+$/.exec(expression.trim())) {
        expression = expression.replace('--', '');
        if (parenthesesRegex.exec(expression)) {
            expression = expression.replace(parenthesesRegex, (_, subExpression) => {
                return isNaN(Number(subExpression)) ? calc(subExpression) : subExpression;
            });
        } else {
            for (const group of BEMDASWeight) {
                const opRegex = regexes[group];

                do {
                    expression = expression.replace(opRegex, (_, first, op, second) => {
                        return operations[op]?.(Number(first.trim()), Number(second.trim()));
                    });
                } while (opRegex.exec(expression));
            }
        }
    }

    return +expression.replace(parenthesesRegex, (match, subExpression) => {
        return subExpression;
    });
};

const tests = [
    ['123', 123],
    ['12*-1', -12],
    ['12* 123/-(-5 + 2)', 492],
    ['((80 - (19)))', 61],
    ['(1 - 2) + -(-(-(-4)))', 3],
    ['1 - -(-(-(-4)))', -3],
    ['12* 123/(-5 + 2)', -492],
    [
        '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11)',
        1
    ]
];

console.time('Timer');
for (const [input, expected] of tests) {
    calc(input);
    console.log('Result: ' + calc(input), 'Expected: ' + expected);
}
console.timeEnd('Timer');
