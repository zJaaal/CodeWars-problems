const menu = document.querySelectorAll('.elementor-menu-toggle');
menu[1].style.background = 'transparent';
menu[1].innerHTML = `  <img
aria-hidden="true"
role="presentation"
class="elementor-menu-toggle__icon--open eicon-menu-bar"
src="https://www.cbassessors.cat/wp-content/uploads/2022/10/menu-icon.svg"
/>
<i
aria-hidden="true"
role="presentation"
class="elementor-menu-toggle__icon--close eicon-close"
></i>
<span class="elementor-screen-only">Menu</span>`;

//Close the menu on scroll
window.addEventListener('scroll', () => {
  [...menu].forEach((x) => x.classList.remove('elementor-active'));
});
window.addEventListener('touchmove', () => {
  [...menu].forEach((x) => x.classList.remove('elementor-active'));
});
