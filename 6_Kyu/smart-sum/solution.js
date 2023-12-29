//https://www.codewars.com/kata/5831200eb812b8016d000094

function smartSum() {
    let sum = 0;
    let argsArray = [...arguments].flat();

    for (let i = 0; i < argsArray.length; i++) {
        if (Array.isArray(argsArray[i])) return smartSum(sum, ...argsArray.slice(i));

        sum += argsArray[i];
    }
    return sum;
}
