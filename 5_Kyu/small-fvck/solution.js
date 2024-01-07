//https://www.codewars.com/kata/58678d29dbca9a68d80000d7

// > - Move pointer to the right (by 1 cell)
// < - Move pointer to the left (by 1 cell)
// * - Flip the bit at the current cell
// [ - Jump past matching ] if value at current cell is 0
// ] - Jump back to matching [ (if value at current cell is nonzero)

function interpreter(code, tape) {
    let memory = tape.split('');
    let optimizedCode = code.replace(/[^><*\[\]]/g, '');
    let memoryPointer = 0;
    let codePointer = 0;

    let commands = {
        '>': () => (memoryPointer++, codePointer++),
        '<': () => (memoryPointer--, codePointer++),
        '*': () => (
            (memory[memoryPointer] = memory[memoryPointer] === '0' ? '1' : '0'), codePointer++
        ),
        '[': () => {
            if (memory[memoryPointer] === '0') {
                let count = 1;
                while (count > 0) {
                    let char = optimizedCode[++codePointer];
                    if (char === '[') count++;
                    else if (char === ']') count--;
                }
            } else codePointer++;
        },
        ']': () => {
            if (memory[memoryPointer] !== '0') {
                let count = 1;
                while (count > 0) {
                    let char = optimizedCode[--codePointer];

                    if (char == ']') count++;
                    else if (char == '[') count--;
                }
            } else codePointer++;
        }
    };

    while (
        memoryPointer >= 0 &&
        memoryPointer < memory.length &&
        codePointer < optimizedCode.length
    )
        commands[optimizedCode[codePointer]]();

    return memory.join('');
}

// Flips the leftmost cell of the tape
console.log(interpreter('*', '00101100'), '10101100');
// Flips the second and third cell of the tape
console.log(interpreter('>*>*', '00101100'), '01001100');
// Flips all the bits in the tape
console.log(interpreter('*>*>*>*>*>*>*>*', '00101100'), '11010011');
// Flips all the bits that are initialized to 0
console.log(interpreter('*>*>>*>>>*>*', '00101100'), '11111111');
// Goes somewhere to the right of the tape and then flips all bits that are initialized to 1, progressing leftwards through the tape
console.log(interpreter('>>>>>*<*<<*', '00101100'), '00000000');
console.log(
    interpreter(
        '*[>*]',
        '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    ),
    '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
);
console.log(
    interpreter(
        '[>*]',
        '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    ),
    '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
);
