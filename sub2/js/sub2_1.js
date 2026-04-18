$(document).ready(function () {
  $('.table').hide();
  $('.table').eq(0).show();

  $('.tab_menu .tab').removeClass('active');
  $('.tab_menu .tab').eq(0).addClass('active');

  $('.tab_menu .tab').each(function (index) {
    $(this).on('click', function (e) {
      e.preventDefault();

      $('.table').hide();
      $('.table').eq(index).show();

      $('.tab_menu .tab').removeClass('active');
      $(this).addClass('active');
    });
  });
});