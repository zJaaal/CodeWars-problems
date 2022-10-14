const button = document.querySelector('.et_pb_menu__search-button');
button.addEventListener('click', () => {
  setTimeout(() => {
    const input = document.querySelector('#keyword');
    const results = document.querySelector('#datafetch');
    results.innerHTML = '';
    input.value = '';
    input.setAttribute('tabindex', '0');
    input.focus();
    input.onkeyup = null;

    function fetch() {
      let keyword = jQuery('#keyword').val();

      if (!keyword.trim().length) {
        jQuery('#datafetch').html('');
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
          jQuery('#datafetch').html(data);
        },
      });
    }

    input.addEventListener('keyup', fetch);
  }, 0);
});
