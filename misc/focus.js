//This way you can make focus to an element that has display none until a click

const button = document.querySelector('.et_pb_menu__search-button');
button.addEventListener('click', () => {
  button.blur();
  console.log(document.activeElement);
  setTimeout(() => {
    const input = document.querySelector('#keyword');
    input.setAttribute('tabindex', '0');
    input.focus();
    console.log(document.activeElement);
  }, 1);
});
