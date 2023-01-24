function pathFinder(maze) {
  if (maze.length == 1) return 0;

  let calculateDistance = (node, end) =>
    Math.sqrt((node.x - end.x) ** 2 + (node.y - end.y) ** 2);

  let steps = [
    [-1, 0], //up
    [1, 0], // down
    [0, 1], //right
    [0, -1], // left
  ];
  let heightMap = maze.split(/\n+\s/).map((x) => x.split(''));

  heightMap = heightMap
    .map((row, y) => {
      return row.map((value, x) => {
        let node = {
          x,
          y,
          value,
          neighbors: [],
          gScore: 0,
          fScore: Infinity,
        };
        return node;
      });
    })
    .map((row, _, heightMap) => {
      return row.map((node) => {
        steps.forEach((point) => {
          if (
            node.y + point[0] >= 0 &&
            node.y + point[0] <= heightMap.length - 1 &&
            node.x + point[1] >= 0 &&
            node.x + point[1] <= heightMap.length - 1
          ) {
            let neighbor = heightMap[node.y + point[0]][node.x + point[1]];
            if (neighbor) node.neighbors.push(neighbor);
          }
        });
        return node;
      });
    });
  let start = heightMap[0][0];
  let end = heightMap[heightMap.length - 1][heightMap.length - 1];

  let open = [start];

  while (open.length) {
    let next = open.sort((x, y) => y.fScore - x.fScore).pop();
    next.neighbors.forEach((neighbor) => {
      if (neighbor.value !== 'W') {
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
    });
  }

  return end.gScore || false;
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
