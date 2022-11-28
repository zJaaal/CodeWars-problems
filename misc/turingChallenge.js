console.clear();

function findTheDifference(s, t) {
  let tArray = t.split('');

  s.split('').forEach((char) => {
    let index = tArray.findIndex((x) => x == char);

    if (index >= 0) tArray.splice(index, 1);
  });

  return tArray[0];
}

let s = 'abcd';

let t = 'dbcae';

console.log(findTheDifference(s, t));

var findErrorNums = (nums) => {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] =
      typeof hashMap[nums[i]] != 'undefined' ? ++hashMap[nums[i]] : 1;

    if (hashMap[nums[i]] == 2) {
      return [nums[i], i + 1];
    }
  }
};

console.log(findErrorNums([1, 2, 3, 4, 3]));
