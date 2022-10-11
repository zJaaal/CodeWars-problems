let red = 255;
let green = 255;
let blue = 255;

let lastScroll = 0;

const section = document.querySelector('#sobre-mi');
//Set the initial state
section.style.backgroundColor = '#FFFFFF';

window.addEventListener('scroll', () => {
  //Get the current position of the viewport on the page
  let currentPos = window.pageYOffset || document.documentElement.scrollTop;

  if (lastScroll > currentPos) {
    //going up
    //if its already white stop
    if (red >= 255 || green >= 255 || blue >= 255) {
      return;
    }

    //200 is a acceptable position where it can start to change to white
    //0.07 is an acceptable to number so it will be white when out of viewport
    if (section.getBoundingClientRect().y >= 200)
      section.style.backgroundColor = `rgb(${(red = red + 0.07)}, ${(green =
        green + 0.07)}, ${(blue = blue + 0.07)})`;
  } else {
    //going down
    //if its already gray stop
    if (red <= 248 || green <= 248 || blue <= 248) {
      return;
    }

    //500 is a acceptable position where it can start to change to gray
    //0.07 is an acceptable to number so it will be gray when its on the viewport
    if (section.getBoundingClientRect().y <= 500)
      section.style.backgroundColor = `rgb(${(red = red - 0.07)}, ${(green =
        green - 0.07)}, ${(blue = blue - 0.07)})`;
  }
  lastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
});
