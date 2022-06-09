//4 kyu Problem Remove Zeros
//https://www.codewars.com/kata/52aae14aa7fd03d57400058f

    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.

//Now Solved!
function removeZeros(array) {

    for(let i=1; i<array.length; i++){
        if((array[i]!== 0 && array[i] !== "0") && 
           (array[i-1] === 0 || array[i-1] === "0")){
            for(let j = i; j > 0; j--){
                let current = array[j];
                array[j] = array[j-1];
                array[j-1] = current;
                if(array[j-2] !== 0 && array[j-2] !== "0")
                    break;
            }
        }
    }

    return array;
}


console.log(removeZeros([7, 2, 3, "0", 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
                       //7, 2, 3, 4, 6, 13, 78, 19, 14, "0", 0, 0, 0, 0, 0