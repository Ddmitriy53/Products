$(document).ready(function () {

  $('.js-tab-trigger').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
      .closest('.product-tabs').find('.js-tab-content').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('.terms__top').click(function () {
    $(this).toggleClass('terms-item--active').next().slideToggle();
    $('.terms__top').not(this).removeClass('terms-item--active').next().slideUp();
  });

  $('#phone').mask('+38(000) 00 - 00 - 000', {
    placeholder: "+38 (0xx) xx - xx - xxx"
  });

});