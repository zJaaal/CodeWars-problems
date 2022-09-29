console.clear();
const arr = [{ a: 1 }, { a: 2 }];

const arr2 = [...arr];

arr2[0].a = 12;

console.log(
  arr2[0].a === arr[0].a
    ? "The Reference exists"
    : "The Reference doesn't exists"
);

//Force map for mapping objects

Array.prototype.forceMap = function (callback) {
  if (typeof callback != "function")
    throw new Error("callback is not a function");

  //Destroys the reference
  return JSON.parse(JSON.stringify(this)).map(callback);
};

const arr3 = arr2.forceMap((x) => ({ ...x, a: "Hi from forceMap" }));

console.log(arr3[0].a, arr[0].a);

console.log(
  arr3[0].a === arr[0].a
    ? "The Reference exists"
    : "The Reference doesn't exists"
);