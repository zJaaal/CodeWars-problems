let red = 255;
let green = 255;
let blue = 255;

let lastScroll = 0;

const section = document.querySelector('#sobre-mi');
section.style.backgroundColor = '#FFFFFF';
window.addEventListener('scroll', () => {
  let currentPos = window.pageYOffset || document.documentElement.scrollTop;

  if (lastScroll > currentPos) {
    //going up
    if (red >= 255 || green >= 255 || blue >= 255) {
      return;
    }
    if (section.getBoundingClientRect().y >= 200)
      section.style.backgroundColor = `rgb(${(red = red + 0.07)}, ${(green =
        green + 0.07)}, ${(blue = blue + 0.07)})`;
  } else {
    //going down
    if (red <= 248 || green <= 248 || blue <= 248) {
      return;
    }
    if (section.getBoundingClientRect().y <= 500)
      section.style.backgroundColor = `rgb(${(red = red - 0.07)}, ${(green =
        green - 0.07)}, ${(blue = blue - 0.07)})`;
  }
  lastScroll = currentPos <= 0 ? 0 : currentPos;
});
