//https://www.codewars.com/kata/52336a4436e0b095d8000093

function mergesorted(a, b) {
    if (!a.length || !b.length) return a.length && !b.length ? a : !a.length && b.length ? b : [];

    let finalLength = a.length + b.length;
    let result = [];

    while (result.length != finalLength) {
        if (a.length && !b.length) {
            result.push(...a);
            continue;
        } else if (!a.length && b.length) {
            result.push(...b);
            continue;
        }

        if (a[0] >= b[0]) result.push(b.shift());
        else result.push(a.shift());
    }

    return result;
}
