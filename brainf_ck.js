//5 kyu My smallest code interpreter (aka Brainf**k)
// https://www.codewars.com/kata/526156943dfe7ce06200063e

//Instructions
// > increment the data pointer (to point to the next cell to the right).
// < decrement the data pointer (to point to the next cell to the left).
// + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
// - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
// . output the byte at the data pointer.
// , accept one byte of input, storing its value in the byte at the data pointer.
// [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
// ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.

function brainLuck(code, input){
    let output = [];
    let pointer = 0;
    let memory = new Array(2000).fill(0);
    let codePointer = -1;
    let inputArray = input.split("");
    const instructions ={
        ">": () => {
            pointer = pointer + 1;
            if(pointer > 2000){
                pointer = 0;
                return;
            }
        },
        "<": () => {
            pointer = pointer - 1;
            if(pointer < 0){
                pointer = 2000;
                return;
            }
        },
        "+": () => {
            ++memory[pointer];
            if(memory[pointer] > 255){
                memory[pointer] = 0;
                return;
            }
        },
        "-": () => {
            --memory[pointer];
            if(memory[pointer] < 0){
                memory[pointer] = 255;
                return;
            }
        },
        ".": () => output.push(memory[pointer]),
        ",": () => memory[pointer] = inputArray.shift().charCodeAt(0),
        "[": () => {
            if(memory[pointer] == 0){
                codePointer = code.lastIndexOf("]");
                return;
            }
        },
        "]": () => {
            if(memory[pointer] != 0){
                codePointer = code.indexOf("[");
                return;
            }
        }
    };
    while(codePointer < code.length - 1){
        codePointer++;
        instructions[code[codePointer]]();
    }

    return String.fromCharCode.apply(null, output);
  }


  console.log(brainLuck(',+[-.,+]', 'Codewars'+String.fromCharCode(255)));