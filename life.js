//5 kyu Problem Conway's Game of Life
// https://www.codewars.com/kata/525fbff0594da0665c0003a3

// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

const steps = [
    [-1, 0],  //Up
    [0, 1],  //Right
    [1, 0], //Down
    [0, -1], //Left
    [-1, -1], //Up Left
    [-1, 1],  //Up Right
    [1, 1], //Down Right
    [1, -1] //Down Left
]

const doSteps = (cells, x , y) =>{
    let aliveCell = cells[y][x];
    let alive = 0;
    steps.forEach((step) =>{
        if(y + step[0] < 0 || y + step[0] > cells.length - 1 || x + step[1] > cells[y].length - 1 || x + step[1] < 0){
            return;
        }
        alive = cells[y + step[0]][x + step[1]] ? alive + 1: alive;
    });

    if(!aliveCell && alive == 3){
        return 1;
    }else if(aliveCell && alive < 2){
        return 0;
    }else if(aliveCell && (alive == 2 || alive == 3)){
        return 1;
    }else if(aliveCell && alive > 3){
        return 0;
    }

    return 0;
};


function nextGen (cells) {
    let result = new Array(cells.length).fill(0);
    result.forEach((_,i) =>{
        result[i] = new Array(cells[0].length).fill(0);
    })
    cells.forEach((cellRow, y) =>{
        cellRow.forEach((_, x) =>{
            result[y][x] = doSteps(cells, x, y);
        })
    })
    return result;
}

console.log(nextGen([
    [1,0,0,0,0,0,0],
    [0,1,1,0,0,0,0],
    [1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]      
  ]));
  