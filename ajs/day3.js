let distributeGifts = (packOfGifts, reindeers) => {
  let maxLength =
    packOfGifts.length > reindeers.length
      ? packOfGifts.length
      : reindeers.length;

  let giftWeight = 0;
  let reindeersCapacity = 0;

  for (let i = 0; i < maxLength; i++) {
    if (packOfGifts[i]) giftWeight += packOfGifts[i].length;
    if (reindeers[i]) reindeersCapacity += reindeers[i].length * 2;
  }
  return (reindeersCapacity / giftWeight) >> 0;
};

console.log(
  distributeGifts(
    ['music'],
    [
      'midudev',
      'pheralb',
      'codingwithdani',
      'carlosble',
      'blasco',
      'facundocapua',
      'madeval',
      'memxd',
    ]
  )
);
