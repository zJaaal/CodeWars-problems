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

const buttons = document.querySelectorAll('.et_pb_menu__search-button');
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    setTimeout(() => {
      const input = document.querySelector(
        '.et_pb_menu__search-container--visible>#keyword'
      );
      const results = document.querySelector(
        '.et_pb_menu__search-container--visible>#datafetch'
      );
      results.innerHTML = '';
      input.value = '';
      input.setAttribute('tabindex', '0');
      input.focus();
      input.onkeyup = null;

      function fetch() {
        let keyword = jQuery(
          '.et_pb_menu__search-container--visible>#keyword'
        ).val();

        if (!keyword.trim().length) {
          jQuery('.et_pb_menu__search-container--visible>#datafetch').html('');
          return;
        }

        jQuery.ajax({
          url: 'https://mrc2stg.wpengine.com/wp-admin/admin-ajax.php',
          type: 'post',
          data: {
            action: 'data_fetch',
            keyword: keyword,
          },
          success: function (data) {
            jQuery('.et_pb_menu__search-container--visible>#datafetch').html(
              data
            );
          },
        });
      }
      input.addEventListener('keyup', fetch);
    }, 0);
  })
);
