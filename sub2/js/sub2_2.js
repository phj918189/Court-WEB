$(document).ready(function () {
  $('.pro').hide();
  $('.pro').eq(0).show();

  $('.left_sub .tab-button').removeClass('active');
  $('.left_sub .tab-button').eq(0).addClass('active');

  $('.left_sub .tab-button').each(function (index) {
    $(this).on('click', function (e) {
      e.preventDefault();

      $('.pro').hide();
      $('.pro').eq(index).show();

      $('.left_sub .tab-button').removeClass('active');
      $(this).addClass('active');
    });
  });
});