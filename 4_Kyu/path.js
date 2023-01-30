function pathFinder(maze) {
  if (maze.length == 1) return 0;

  let calculateDistance = (next, end) =>
    Math.sqrt((next.x - end.x) ** 2 + (next.y - end.y) ** 2);

  let steps = [
    [-1, 0], //up
    [1, 0], // down
    [0, 1], //right
    [0, -1], // left
  ];
  let mazeMap = maze.split(/\n+\s/).map((x) => x.split(''));

  let hashMap = {
    '0-0': {
      x: 0,
      y: 0,
      value: '.',
      gScore: 0,
      fScore: Infinity,
    },
    [`${mazeMap.length - 1}-${mazeMap.length - 1}`]: {
      x: mazeMap.length - 1,
      y: mazeMap.length - 1,
      value: mazeMap[mazeMap.length - 1][mazeMap.length - 1],
      gScore: 0,
      fScore: Infinity,
    },
  };
  let start = hashMap[`0-0`];
  let end = hashMap[`${mazeMap.length - 1}-${mazeMap.length - 1}`];

  let open = [start];

  while (open.length) {
    let next = open.sort((x, y) => y.fScore - x.fScore).pop();

    for (let point of steps) {
      if (
        next.y + point[0] >= 0 &&
        next.y + point[0] <= mazeMap.length - 1 &&
        next.x + point[1] >= 0 &&
        next.x + point[1] <= mazeMap.length - 1
      ) {
        hashMap[`${next.y + point[0]}-${next.x + point[1]}`] ??
          (hashMap[`${next.y + point[0]}-${next.x + point[1]}`] = {
            y: next.y + point[0],
            x: next.x + point[1],
            value: mazeMap[next.y + point[0]][next.x + point[1]],
            gScore: 0,
            fScore: Infinity,
          });

        let neighbor = hashMap[`${next.y + point[0]}-${next.x + point[1]}`];

        if (neighbor.value !== 'W') {
          if (neighbor.y == end.y && neighbor.x == end.x) return true;
          let newGScore = next.gScore + 1;

          if (newGScore < neighbor.gScore || neighbor.gScore == 0) {
            neighbor.gScore = newGScore;
            neighbor.fScore = newGScore + calculateDistance(next, end);
            if (
              !open.find((node) => node.x == neighbor.x && node.y == neighbor.y)
            )
              open.push(neighbor);
          }
        }
      }
    }
  }

  return false;
}

const testMaze = (solution, maze) => {
  let result = pathFinder(maze);
  console.log(result, solution);
};

testMaze(
  4,
  `.W.
  .W.
  ...`
);

testMaze(
  false,
  `.W.
  .W.
  W..`
);

testMaze(
  10,
  `......
  ......
  ......
  ......
  ......
  ......`
);

testMaze(
  false,
  `......
  ......
  ......
  ......
  .....W
  ....W.`
);
