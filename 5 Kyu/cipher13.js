//5 kyu Problem Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716

// The ASCII value of the lowercase alphabet is from 97 to 122. 
//And, the ASCII value of the uppercase alphabet is from 65 to 90.

function rot13(message){
    message = message.split("").map((char) =>{
        let currentAscii = char.charCodeAt(0);
        if(currentAscii >=65 && currentAscii <= 77 || currentAscii >=97 && currentAscii <= 109){
            currentAscii += 13;
        }else if(currentAscii > 77 && currentAscii <= 90 || currentAscii > 109 && currentAscii <= 122){
            currentAscii += 13 - 26;
        }
        return String.fromCharCode(currentAscii);
    }).join("");
    return message;
}


console.log(rot13("grfg"));