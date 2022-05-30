//5 kyu Problem Calculating with Functions
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(func) {
   if(func){
      return Math.trunc(eval("0" + func));
   }
   return "0"; 
}
function one(func) {  
   if(func){
      return Math.trunc(eval("1" + func));
   }
   return "1"; 
}
function two(func) {
   if(func){
      return Math.trunc(eval("2" + func));
   }
   return "2"; 
}
function three(func) {  
   if(func){
      return Math.trunc(eval("3" + func));
   }
   return "3"; 
}
function four(func) {  
   if(func){
      return Math.trunc(eval("4" + func));
   }
   return "4"; 
}
function five(func){
   if(func){
      return Math.trunc(eval("5" + func));
   }
   return "5";
}
function six(func){  
   if(func){
      return Math.trunc(eval("6" + func));
   }
   return "6"; 
}
function seven(func) {  
   if(func){
      return Math.trunc(eval("7" + func));
   }
   return "7"; }

function eight(func){  
   if(func){
      return Math.trunc(eval("8" + func));
   }
   return "8"; 
}
function nine(func){  
   if(func){
      return Math.trunc(eval("9" + func));
   }
   return "9" ; 
}

function plus(func) {
   return ("+" + func);
}
function minus(func) {
   return ("-" + func);
}
function times(func) {
   return ("*" + func);
}
function dividedBy(func) {
   return ("/" + func);
}