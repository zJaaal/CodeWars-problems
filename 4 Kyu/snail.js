// 4 kyu Problem Snail
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function(array) {
    let result = [];
    let currentDirection = "right";
    let lastCoordinates = [0,0];
    const directions = ["right", "down", "left", "up"];
  
  const move ={
      "right": (array, x, y)=>{
          lastCoordinates[0] = y;
          lastCoordinates[1] = ++x;
          if(lastCoordinates[1] > array[0].length - 1){
              lastCoordinates[0] = y;
              lastCoordinates[1] = --x;
              currentDirection = directions[1];
              return;
          }else if(array[lastCoordinates[0]][lastCoordinates[1]] == 0){
              lastCoordinates[0] = y;
              lastCoordinates[1] = --x;
              currentDirection = directions[1];
              return;
          }
          result.push(array[y][x]);
          array[y][x] = 0;
      },
      "down": (array, x, y)=>{
          lastCoordinates[0] = ++y;
          lastCoordinates[1] = x;
          if(lastCoordinates[0] > array.length - 1){
              lastCoordinates[0] = --y;
              lastCoordinates[1] = x;
              currentDirection = directions[2];
              return;
          }else if(array[lastCoordinates[0]][lastCoordinates[1]] == 0){
              lastCoordinates[0] = --y;
              lastCoordinates[1] = x;
              currentDirection = directions[2];
              return;
          }
          result.push(array[y][x]);
          array[y][x] = 0;
      },
      "left": (array, x, y)=>{
          lastCoordinates[0] = y;
          lastCoordinates[1] = --x;
          if(lastCoordinates[1] < 0){
              lastCoordinates[0] = y;
              lastCoordinates[1] = ++x;
              currentDirection = directions[3];
              return;
          }else if(array[lastCoordinates[0]][lastCoordinates[1]] == 0){
              lastCoordinates[0] = y;
              lastCoordinates[1] = ++x;
              currentDirection = directions[3];
              return;
          }
          result.push(array[y][x]);
          array[y][x] = 0;
      },
      "up": (array, x, y)=>{
          lastCoordinates[0] = --y;
          lastCoordinates[1] = x;
          if(lastCoordinates[0] < 0){
              lastCoordinates[0] = ++y;
              lastCoordinates[1] = x;
              currentDirection = directions[0];
              return;
          }else if(array[lastCoordinates[0]][lastCoordinates[1]] == 0){
              lastCoordinates[0] = ++y;
              lastCoordinates[1] = x;
              currentDirection = directions[0];
              return;
          }
          result.push(array[y][x]);
          array[y][x] = 0;
      }
  };
    
      if(array[0].length == 0){
          return array = [];
      }else if(array[0] == 1)
        return array = [array[0][0]];
    
      let size = array.length * array[0].length;
      result.push(array[0][0]);
      array[0][0] = 0;
      while(result.length < size){
          move[currentDirection](array, lastCoordinates[1], lastCoordinates[0]);
      }
    return result;
}

console.log(snail([[]]));
console.log(snail([[1,   2,  3,  4,  5, 6], 
                   [20, 21, 22, 23, 24, 7], 
                   [19, 32, 33, 34, 25, 8], 
                   [18, 31, 36, 35, 26, 9], 
                   [17, 30, 29, 28, 27, 10], 
                   [16, 15, 14, 13, 12, 11]]
                 ));