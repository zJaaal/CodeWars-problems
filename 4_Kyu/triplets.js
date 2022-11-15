// 4 Kyu
console.clear();

const sort = (triplet, result) => {
  // console.log(result);
  return result;
};

var recoverSecret = function (triplets) {
  let result = Array.from(new Set(triplets.flat(1)));
  triplets.forEach((triplet) => {
    result = sort(triplet, result);
  });
  return result.join('');
};

let triplets = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

console.log(recoverSecret(triplets));
