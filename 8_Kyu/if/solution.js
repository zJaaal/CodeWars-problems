//https://www.codewars.com/kata/54147087d5c2ebe4f1000805

// function _if(bool, func1, func2) {
//   return {
//     true: func1,
//     false: func2,
//   }[!!bool]();
// }

// const _if = (bool, func1, func2) =>
//     ({
//         true: func1,
//         false: func2
//     })[!!bool]();

const _if = (bool, func1, func2, result = bool ? func1() : func2()) => result;

for (let i = 0; i < 10; i++)
    _if(
        Math.random() * 3 > 2,
        () => console.log('Greater than 2'),
        () => console.log('Not greater than 2')
    );
