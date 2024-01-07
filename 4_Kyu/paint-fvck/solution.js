//https://www.codewars.com/kata/5868a68ba44cfc763e00008d

// Grid is toroidal
// n - Move data pointer north (up)
// e - Move data pointer east (right)
// s - Move data pointer south (down)
// w - Move data pointer west (left)
// * - Flip the bit at the current cell (same as in Smallfuck)
// [ - Jump past matching ] if bit under current pointer is 0 (same as in Smallfuck)
// ] - Jump back to the matching [ (if bit under current pointer is nonzero) (same as in Smallfuck)

function interpreter(code, iterations, width, height) {
    let pos = { x: 0, y: 0 };
    let sanitizedCode = code.replace(/[^nesw*\[\]]/g, '');
    let grid = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));

    let codePointer = 0;

    let commands = {
        n: () => ((pos.y = pos.y - 1 < 0 ? height - 1 : pos.y - 1), codePointer++),
        e: () => ((pos.x = (pos.x + 1) % width), codePointer++),
        s: () => ((pos.y = (pos.y + 1) % height), codePointer++),
        w: () => ((pos.x = pos.x - 1 < 0 ? width - 1 : pos.x - 1), codePointer++),
        '*': () => ((grid[pos.y][pos.x] ^= 1), codePointer++),
        '[': () => {
            if (grid[pos.y][pos.x] == 0) {
                let count = 1;
                while (count > 0) {
                    let char = sanitizedCode[++codePointer];
                    if (char === '[') count++;
                    else if (char === ']') count--;
                }
                codePointer++;
            } else codePointer++;
        },
        ']': () => {
            if (grid[pos.y][pos.x] != 0) {
                let count = 1;
                while (count > 0) {
                    let char = sanitizedCode[--codePointer];

                    if (char == ']') count++;
                    else if (char == '[') count--;
                }
                codePointer++;
            } else codePointer++;
        }
    };

    while (sanitizedCode[codePointer] && iterations > 0) {
        commands[sanitizedCode[codePointer]]();
        --iterations;
    }

    return grid.map((row) => row.join('')).join('\r\n');
}

// console.log(
//     interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 0, 6, 9) + '\n',
//     '000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\n',
//     'Your interpreter should initialize all cells in the datagrid to 0'
// );
// console.log('-------------');
// console.log(
//     interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 7, 6, 9) + '\n',
//     '111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\n',
//     'Your interpreter should adhere to the number of iterations specified'
// );
// console.log('-------------');
// console.log(
//     interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 19, 6, 9) + '\n',
//     '111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000\n',
//     'Your interpreter should traverse the 2D datagrid correctly'
// );
// console.log('-------------');
// console.log(
//     interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 42, 6, 9) + '\n',
//     '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000\n',
//     'Your interpreter should traverse the 2D datagrid correctly for all of the "n", "e", "s" and "w" commands'
// );
// console.log('-------------');
// console.log(
//     interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 100, 6, 9) + '\n',
//     '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000\n',
//     'Your interpreter should terminate normally and return a representation of the final state of the 2D datagrid when all commands have been considered from left to right even if the number of iterations specified have not been fully performed'
// );
// console.log(
//     interpreter('*[es*]', 9, 5, 6) + '\n',
//     '10000\r\n01000\r\n00100\r\n00000\r\n00000\r\n00000',
//     'Your interpreter should jump to the command straight *after* the matching "[" on the iteration where it hits the "]" and *not* the matching "[" itself'
// );
// console.log(
//     interpreter('*[es*]', 1000, 5, 6) + '\n',
//     '01111\r\n11111\r\n11111\r\n11111\r\n11111\r\n11111',
//     'Your interpreter should exit the loop at the correct conditions'
// );
console.log(
    interpreter('*[s[e]*]', 5, 5, 5) + '\n',
    '10000\r\n10000\r\n00000\r\n00000\r\n00000',
    'Nested'
);
