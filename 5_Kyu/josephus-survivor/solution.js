//https://www.codewars.com/kata/555624b601231dc7a400017a

function josephusSurvivor(n, k) {
    let nArray = Array.from({ length: n }, (_, i) => i + 1);

    for (let i = (k - 1) % nArray.length; nArray.length > 1; i = (i + k - 1) % nArray.length) {
        nArray.splice(i, 1);
    }
    return nArray[0];
}
