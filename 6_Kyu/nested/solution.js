//https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e

function checkDepth(array, helper) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            ++helper.count;
            checkDepth(array[i], helper);
        }
    }
    return helper;
}

function arrayDepth(array) {
    let helper = {
        count: 1
    };
    checkDepth(array, helper);
    return helper.count;
}
