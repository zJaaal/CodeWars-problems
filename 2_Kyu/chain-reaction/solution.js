//https://www.codewars.com/kata/65c420173817127b06ff7ea7

// Write your solution here

// You need to map the bombs with neighbors
// Then create clusters that will start a chain reaction by visiting, neigtbors, then go to the next bomb if not visited and check if it can start any cluster
// If so navigate that bomb outside of the cluster and append that cluster to the other cluster, otherwise just create a new cluster, the number of clusters is the answer

// The clusters can be represented as a supernode in a graph, the nodes are the bombs and the edges are the neighbors

const DIRECTIONS = {
    x: [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ],
    '+': [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ],
    ALL: [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ]
};

const visited = new Set();

function getVisited(x, y) {
    return visited.has(`${x}-${y}`);
}
function setVisited(x, y) {
    visited.add(`${x}-${y}`);
}

function clearVisited() {
    visited.clear();
}

function shouldVisit(cell, x, y) {
    return cell && cell !== '0' && !getVisited(x, y);
}

function getValidNeighbors(map, x, y) {
    return DIRECTIONS.ALL.reduce((acc, [dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;

        const cell = map[newY]?.[newX];

        const valid = shouldVisit(cell, newX, newY);

        if (valid) {
            acc.push({
                x: newX,
                y: newY,
                cell: cell
            });
        }

        return acc;
    }, []);
}

function traverse(map, x, y) {
    const cluster = [{ x, y, cell: map[y][x] }];
    const currentCell = map[y][x];

    setVisited(x, y);
    const neighbors = getValidNeighbors(map, x, y);

    for (let neighbor of neighbors) {
        // Check if neighbor can explode the current bomb

        // The fact that neighbor can explode the current bomb is not enough to add it to the cluster
        // we need to check if the current bomb can add to the chain reaction
        // Because sometimes it can explode the direct bomb, but not trigger the chain reaction
        // Clustering is not the solution
        DIRECTIONS[neighbor.cell].forEach(([dx, dy]) => {
            const newX = neighbor.x + dx;
            const newY = neighbor.y + dy;

            if (
                (newX === x && newY === y) ||
                DIRECTIONS[currentCell].some(
                    ([dx, dy]) => x + dx == neighbor.x && y + dy == neighbor.y
                )
            ) {
                cluster.push(...traverse(map, neighbor.x, neighbor.y));
            }
        });
    }

    return cluster;
}

function minBombsNeeded(grid) {
    clearVisited();
    const clusters = [];
    const map = grid.split('\n').map((row) => row.split(''));

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (shouldVisit(map[y][x], x, y)) {
                clusters.push(traverse(map, x, y));
            }
        }
    }

    // console.log(clusters);

    return clusters.length;
}

const simpleCases = [
    // Each 2D array below gets converted to a '\n'-delimited
    // string before calling the user code.

    [[['x'], ['+']], 1],

    [
        [
            ['+', '0', '+'],
            ['+', '+', '+']
        ],
        1
    ],

    [
        [
            ['+', '+', '+', '0', '+', '+', '+'],
            ['+', '+', '+', '0', '0', '+', '+']
        ],
        2
    ],

    [
        [
            ['0', '+', '+', '0', '+'],
            ['+', '0', '+', '+', '0'],
            ['+', '+', '0', '0', '+']
        ],
        4
    ],

    [
        [
            ['x', '0', 'x'],
            ['x', 'x', 'x']
        ],
        3
    ],

    [
        [
            ['x', 'x', 'x', '0', 'x'],
            ['x', 'x', 'x', 'x', 'x'],
            ['x', 'x', 'x', '0', 'x']
        ],
        3
    ],

    [
        [
            ['x', 'x', 'x', '0', 'x'],
            ['0', 'x', '0', 'x', 'x'],
            ['x', 'x', 'x', '0', 'x']
        ],
        4
    ],

    [
        [
            ['x', '0', 'x', '0', 'x'],
            ['0', 'x', 'x', 'x', '0'],
            ['x', '0', 'x', '0', 'x'],
            ['0', 'x', 'x', 'x', '0'],
            ['x', '0', 'x', '0', 'x']
        ],
        3
    ],
    ['0+000x000xx\n' + '++000++000+\n' + '00x0x00000x\n' + '0+000000x+0', 3],
    [
        'x+0+x0x0+0\n' +
            '+0+x00x00x\n' +
            '0+xx+0000x\n' +
            'x++0000x++\n' +
            'xx+xx+x0x+\n' +
            'x00+00xx00\n' +
            '++x0+000x0\n' +
            '00x0++0+xx\n' +
            '0x++00x++0\n' +
            '+++0+x0x0x',
        11
    ]
];

function normalise(grid) {
    if (typeof grid == 'string') return grid;
    return grid.map((r) => r.join('')).join('\n');
}

function act(grid, expected) {
    const actual = minBombsNeeded(grid);
    const msg =
        grid.length <= 121
            ? `grid =\n\n${grid}\n\n`
            : `grid.dimension = ${(d = grid.indexOf('\n'))}x${d}`;
    console.log(msg);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    console.log(`Match: ${actual === expected ? 'Pass' : 'Fail'}\n`);
}

for (let [grid, expected] of simpleCases) {
    grid = normalise(grid);

    act(grid, expected);
}
