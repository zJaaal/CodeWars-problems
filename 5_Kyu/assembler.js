//5 Kyu Problem Simple assembler interpreter
//https://www.codewars.com/kata/58e24788e24ddee28e000053

// mov x y - copies y (either a constant value or the content of a register) into register x
// inc x - increases the content of the register x by one
// dec x - decreases the content of the register x by one
// jnz x y - jumps to an instruction y steps away
//          (positive means forward, negative means backward, y can be a register or a constant), 
//          but only if x (a constant or a register) is not zero

function simple_assembler(program) {
    let variables ={};
    let pointer = 0;
    const actions ={
        "mov": (x,y)=>{
            variables[x] = isNaN(y) ? Number(variables[y]) : Number(y);
            ++pointer;
        },
        "inc":(x) =>{
            ++variables[x];
            ++pointer;
        },
        "dec":(x)=>{
            --variables[x];
            ++pointer;
        },
        "jnz":(x,y)=>{
            if(variables[x]!= 0){
                pointer += isNaN(y) ? Number(variables[y]) : Number(y);
            }else
                ++pointer;
            
        }
    };

    while(pointer < program.length){
        let action = program[pointer].split(" ")[0];
        let arg1 = program[pointer].split(" ")[1];
        let arg2 = program[pointer].split(" ").length == 3 ? program[pointer].split(" ")[2] : 0;

        actions[action](arg1,arg2);
    }

    return variables;
}

console.log(simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));