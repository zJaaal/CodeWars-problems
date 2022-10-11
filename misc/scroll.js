let current = '';

function isElementOnViewPort(el) {
  let rect = el.getBoundingClientRect();
  if (el.id == 'main') {
    return rect.y <= 100 && rect.y > 0;
  }
  return (
    rect.top <= 0 &&
    rect.left <= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const anchors = document.querySelectorAll('.elementor-item-anchor');
const mySections = [];
const myAnchorsList = Array.from(new Set([{ hash: '#main' }, ...anchors]));

myAnchorsList.forEach((x) => mySections.push(document.querySelector(x.hash)));
window.addEventListener('scroll', () => {
  mySections.forEach((x) => {
    if (isElementOnViewPort(x)) {
      let myCurrentAnchor = myAnchorsList.find((el) =>
        el.hash.includes(x.id)
      ).hash;

      if (x.id.includes('main')) {
        anchors.forEach((el) => {
          if (el && !el.hash.includes(x.id)) {
            el.style.opacity = '100%';
          }
        });
      } else {
        document.querySelector(
          `.elementor-item-anchor[href="#${x.id}"]`
        ).style.opacity = '1';
        anchors.forEach((el) => {
          if (el && !el.hash.includes(x.id)) {
            el.style.opacity = '0.1';
          }
        });
      }
      if (myCurrentAnchor != current) {
        current = myCurrentAnchor;
      }
    }
  });
});
