function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let coors = {
    x: 0,
    y: 0,
  };

  let steps = {
    n: () => (coors.y += 1),
    s: () => (coors.y -= 1),
    w: () => (coors.x -= 1),
    e: () => (coors.x += 1),
  };

  walk.forEach((dir) => {
    steps[dir]();
  });

  return coors.x == 0 && coors.y == 0;
}

console.log(
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  'should return true'
);
console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
  'should return false'
);
console.log(isValidWalk(['w']), 'should return false');
console.log(
  isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  'should return false'
);
