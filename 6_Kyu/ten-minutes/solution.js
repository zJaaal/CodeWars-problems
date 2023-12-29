//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    let coors = {
        x: 0,
        y: 0
    };

    let steps = {
        n: () => (coors.y += 1),
        s: () => (coors.y -= 1),
        w: () => (coors.x -= 1),
        e: () => (coors.x += 1)
    };

    walk.forEach((dir) => {
        steps[dir]();
    });

    return coors.x == 0 && coors.y == 0;
}
