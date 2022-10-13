const accordionHeaders = document.querySelectorAll('.dvfaq-accordion-header');

let lastActive = [...accordionHeaders].find((el) =>
  el.classList.contains('dvfaq-active-header')
);

// accordionHeaders.forEach((x) => {
//   x.addEventListener('click', () => {
// 		console.log(lastActive.nextSibling.nextSibling);
// 		lastActive.classList.remove('dvfaq-active-header');
//     lastActive.classList.add('dvfaq-inactive-header');
//     lastActive.nextSibling.nextSibling.classList.remove('dvfaq-open-content');
//     lastActive = x;
//   });
// });

//Not working
