// function use(res, req) {
//   const [a, b, ...callbacks] = arguments;

//   function next() {
//     const callback = callbacks.shift(1);

//     callback(a, b, next);
//   }

//   next();
// }

function use(res, req) {
  //Should add validations for arguments
  const [a, b, ...callbacks] = arguments;

  //This function always lives in this closure so it will have the reference to the arguments of the HOC function
  function next(res, req) {
    callbacks.shift(1)(res, req, next);
  }

  next(res, req);
}

const middleware_1 = (res, req, next) => {
  console.log(res);
  res = "I was on middleware 1";
  req = "Im going to middleware 2";
  console.log(req);
  next(res, req);
};

const middleware_2 = (res, req) => {
  console.log(res);
  res = "Im on middleware 2";
  return console.log(res);
};

use("a", "b", middleware_1, middleware_2);
