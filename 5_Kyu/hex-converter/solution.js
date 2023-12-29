//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
    //Didn't know that strings got slice method
    let r = parseInt(hexString.slice(1, 3), 16);
    let g = parseInt(hexString.slice(3, 5), 16);
    let b = parseInt(hexString.slice(5, 7), 16);
    return { r: r, g: g, b: b };
}
