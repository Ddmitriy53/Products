$('.js-tab-trigger').click(function () {
  let id = $(this).attr('data-tab'),
    content = $('.js-tab-content[data-tab="' + id + '"]');

  $('.js-tab-trigger.active').removeClass('active');
  $(this).addClass('active');

  $('.js-tab-content.active').removeClass('active');
  content.addClass('active');
});

$(document).ready(function () {
  $('.terms__top').click(function () {
    $(this).toggleClass('terms-item--active').next().slideToggle();
    $('.terms__top').not(this).removeClass('terms-item--active').next().slideUp();
  });
});