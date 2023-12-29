//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

function zeros(n) {
    let count = 0;
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
        count += Math.floor(n / i);
        console.log(count);
    }

    return count;
}

// Explanation: The 0s are produced by the number of 5s in the factorial operation
// so you must count all the 5s in the operation, but it's not enough a division, because it will not reach all the 5s
// beacuse not all the numbers are multiple of 5
// so we divide n in fractions of multiples of 5 until we got to 1, there we know when we get to the final zero
