//https://www.codewars.com/kata/54d558c72a5e542c0600060f

// Defuse all of the Bombs!
Bomb.diffuse(42);
Bomb.diffuse(0);
Bomb.diffuse(1);
Bomb.diffuse(2);
Bomb.diffuse(3);
Bomb.diffuse(4);
Bomb.diffuse(global.BombKey);
const diffuseTheBomb = () => true;
Bomb.diffuse();
Bomb.diffuse(3.14159);
let date = Date.now() - 31622400000 - 3 * 31536000000;
Bomb.diffuse(date);
let code = {
    key: 43
};

Object.freeze(code);
Bomb.diffuse(code);

var obj = function () {
    var flag = false;

    this.valueOf = function () {
        if (flag) {
            return 11;
        }

        flag = true;
        return 9;
    };
};

Bomb.diffuse(new obj());
var y = 2;
Math.random = () => (y == 2 ? (y = 0.5 / 2) : y == 0.25 ? (y = 2 / 0.5) : y / 8);
Array.prototype.valueOf = () => 14;
Bomb.diffuse(42);
Bomb.diffuse('eWVz');
