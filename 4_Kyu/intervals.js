function sumIntervals(intervals) {
  let sortedIntervals = intervals.sort((x, y) => x[0] - y[0]);

  let mergedIntervals = sortedIntervals.reduce(
    (merged, interval, i) => {
      if (!i) return merged;

      let [start, end] = interval;

      let lastMerge = merged.at(-1);

      if (start <= lastMerge[1]) {
        merged[merged.length - 1] = [lastMerge[0], Math.max(end, lastMerge[1])];
      } else {
        merged.push(interval);
      }

      return merged;
    },
    [[sortedIntervals[0][0], sortedIntervals[0][1]]]
  );

  return mergedIntervals.reduce(
    (acc, interval) => (acc += interval[1] - interval[0]),
    0
  );
}

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ]),
  9
);
console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  7
);
console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ]),
  19
);
console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ]),
  100000030
);
