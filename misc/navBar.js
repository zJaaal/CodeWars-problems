//current anchor
let current = '';

//This will check id the element is on viewport
function isElementOnViewPort(el) {
  let rect = el.getBoundingClientRect();

  //for main i use the y coor to know whether is in or out of viewport
  if (el.id == 'main') {
    return rect.y <= 100 && rect.y > 0;
  }

  //In the page I check like this :
  // rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight ) &&
  //   rect.bottom >= 0
  return (
    rect.top <= 0 &&
    rect.left <= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//get the anchors (nav bar buttons)
const anchors = document.querySelectorAll('.elementor-item-anchor');
// for some reason i got like 20 buttons, and are the same 5 but reapeted so i just filter by differents
const myAnchorsList = Array.from(new Set([{ hash: '#main' }, ...anchors]));

// Array to maintain each sections
const mySections = [];

// Fill the array
myAnchorsList.forEach((x) => mySections.push(document.querySelector(x.hash)));

window.addEventListener('scroll', () => {
  mySections.forEach((x) => {
    if (isElementOnViewPort(x)) {
      //Get the current anchor hash
      let myCurrentAnchor = myAnchorsList.find((el) =>
        el.hash.includes(x.id)
      ).hash;

      //In main we reset all the states
      if (x.id.includes('main')) {
        anchors.forEach((el) => {
          if (el && !el.hash.includes(x.id)) {
            el.style.opacity = '100%';
          }
        });
      } else {
        //We set the active opacity
        document.querySelector(
          `.elementor-item-anchor[href="#${x.id}"]`
        ).style.opacity = '1';

        //We set the rest to 10% opacity
        anchors.forEach((el) => {
          if (el && !el.hash.includes(x.id)) {
            el.style.opacity = '0.1';
          }
        });
      }

      //If the anchor hasn't change we don't set it
      if (myCurrentAnchor != current) {
        current = myCurrentAnchor;
      }
    }
  });
});
