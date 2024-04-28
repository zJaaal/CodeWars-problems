//https://www.codewars.com/kata/54f6e7a62e2c167e29000112

// Write your solution here
var oldMath = Math;

Math = JSON.parse(JSON.stringify(Math));

var baseInTest = 0.0000001;
var increment = baseInTest;

var guess = 1;

function* genNumber() {
    while (true) {
        baseInTest += increment;

        yield baseInTest;
    }
}

function random() {
    return generator.next().value;
}

Object.setPrototypeOf(random, {
    toString: () => 'function random() { [native code] }'
});

Object.setPrototypeOf(oldMath.floor, {
    toString: () => 'function floor() { [native code] }'
});

var generator = genNumber();

Object.defineProperties(Math, {
    random: {
        value: random,
        writable: false
    },
    floor: {
        value: oldMath.floor,
        writable: false
    },
    toString: {
        value: () => '[object Math]'
    }
});

Object.setPrototypeOf(Math, oldMath);

Object.freeze(Math);

for (let i = 0; i < 100; i++) {
    console.log(guess);
    guess = Math.random();
}

// Elegant solution:

// let rnd = 0.00000001;
// Math = Object.create(Math, { random: { value: () => rnd += 0.00000001 } }); // Override the Math object crwatng a new one with the random method returning the next number in the sequence
// Math.random.toString = () => 'function random() { [native code] }';
// Object.freeze(Math);
// guess = 1;
