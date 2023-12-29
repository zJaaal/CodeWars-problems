//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

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
