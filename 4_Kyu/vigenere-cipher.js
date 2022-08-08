//4 kyu Problem Vigenère Cipher Helper
//https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let keyChar = -1;
       str = str.split("").map((char) =>{
          keyChar = ++keyChar > key.length - 1 ? 0 : keyChar;
          let abcChar = abc.indexOf(char);
          if(abcChar == -1) return char;
          let encodeChar = abc.indexOf(key[keyChar]);
          let result = abc.indexOf(char) + encodeChar > abc.length - 1 ?  abc.indexOf(char) + encodeChar - abc.length :  abc.indexOf(char) + encodeChar;
          return abc[result];
        }).join("");

        return str;
    };
    this.decode = function (str) {
      let keyChar = -1;
      str = str.split("").map((char) =>{
        keyChar = ++keyChar > key.length -1 ? 0: keyChar;
        let abcChar = abc.indexOf(char);
        if(abcChar == -1) return char;
        let encodeChar = abc.indexOf(key[keyChar]);
        let result = abc.indexOf(char) - encodeChar < -1 ?  abc.indexOf(char) - encodeChar + abc.length:  abc.indexOf(char) - encodeChar;
        return abc[result];
      }).join("");
      
      return str;
    };
}

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "pizza"
c = new VigenèreCipher(key, abc);

console.log(c.encode("asodavwt"));
console.log(c.decode("pancakes"));
