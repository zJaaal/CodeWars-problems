//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
    let currentIndex = -1;
    const reduct = {
        NORTH: () => {
            if (arr[currentIndex + 1] && arr[currentIndex + 1] == 'SOUTH') {
                arr.splice(currentIndex, 2);
                return -1;
            } else return currentIndex;
        },
        SOUTH: () => {
            if (arr[currentIndex + 1] && arr[currentIndex + 1] == 'NORTH') {
                arr.splice(currentIndex, 2);
                return -1;
            } else return currentIndex;
        },
        WEST: () => {
            if (arr[currentIndex + 1] && arr[currentIndex + 1] == 'EAST') {
                arr.splice(currentIndex, 2);
                return -1;
            } else return currentIndex;
        },
        EAST: () => {
            if (arr[currentIndex + 1] && arr[currentIndex + 1] == 'WEST') {
                arr.splice(currentIndex, 2);
                return -1;
            } else return currentIndex;
        }
    };
    while (++currentIndex < arr.length) {
        currentIndex = reduct[arr[currentIndex]]();
    }
    return arr;
}
