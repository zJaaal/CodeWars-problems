console.clear();

// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
const genArray = () => {
  let array = Array.from({ length: 100000 }, (x) => {
    let decide = Math.random();
    if (decide >= 0.5) return Math.floor(Math.random() * 1000000);
    else return Math.floor(-Math.random() * 1000000);
  });

  return array;
};

function solution(A) {
  let result = Array.from({ length: A.length }, (x) => 'a');

  A.forEach((x, i) => {
    if (x > 0) result[x - 1] = x;
  });

  return result.findIndex((x) => x == 'a') + 1 || A.length + 1;
}

console.log(solution([1, 2, 3]));
console.log(solution([-1, -2, -3]));
console.log(solution(genArray()));

// const axios = require('axios');

// require('./callMock');

// const baseURL = `https://example.com/data/2.5/weather?`;

// async function cityWeather(city) {
//   if (typeof city !== 'string') throw new Error('not a string');
//   else if (!city.trim().length) throw new Error('string is empty');

//   const urlParams = new URLSearchParams({ city });
//   let result = await axios.get(baseURL + urlParams);

//   return new Promise((resolve, reject) => {
//     if (result.status == 200) resolve({ ...result.data.main });
//     else {
//       reject(result.data.message);
//     }
//   });
// }

// export default class Counter extends Component {
//   constructor() {
//     super();

//     this.state = { count: 42 };
//     this.handleAddCount.bind(this);
//   }

//   handleAddCount = () =>
//     this.setState((prev) => ({ ...prev, count: prev.count + 1 }));

//   render() {
//     return (
//       <>
//         <div>
//           <h2 className="counter">{this.state.count}</h2>
//           <button className="counter-button" onClick={this.handleAddCount}>
//             Click
//           </button>
//         </div>
//         <style>
//           {`
//                   .counter-button {
//                       font-size: 1rem;
//                       padding: 5px 10px;
//                       color:  #585858;
//                   }
//               `}
//         </style>
//       </>
//     );
//   }
// }
