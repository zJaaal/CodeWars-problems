//https://www.codewars.com/kata/530045e3c7c0f4d3420001af

function lookSay(number) {
    let numberArray = (number + '').split('');

    return +numberArray
        .reduce(
            (acc, number, i) => (
                numberArray[i - 1] == number
                    ? i && (acc[acc.length - 1][0] += 1)
                    : i && acc.push([1, number]),
                acc
            ),
            [[1, numberArray[0]]]
        )
        .flatMap(([times, value]) => `${times}${value}`)
        .join('');
}
