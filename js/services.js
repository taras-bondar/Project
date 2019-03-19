$(function() {
  console.log('hi')
  let $servicesOptions = $('.services-title');

  $servicesOptions.on('click', function () {
  let $activeLink = $(this);
  $activeLink
    .addClass('active-services')
    .siblings()
    .removeClass('active-services')
    .closest('.services-wrapper')
    .find('.service-description')
    .removeClass('active')
    .eq($(this).index())
    .addClass('active')
})
})

