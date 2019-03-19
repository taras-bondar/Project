$(function() {
$('.text-description').hide().first().show();
$('.team-member').hide().first().show();
$('.member-photo').hide().first().show();


$('.slider-photo').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  switchContent();
})

$('.slider-arrow.right').click(function(){
  let activeIndex = $('.slider-photo.active').index() - 1;
  let newIndex = (activeIndex == 3) ? 0 : activeIndex + 1;
  $(`.slider-photo:eq(${newIndex})`).addClass('active').siblings().removeClass('active');
  switchContent();
})

$('.slider-arrow.left').click(function(){
  let activeIndex = $('.slider-photo.active').index() - 1;
  let newIndex = (activeIndex == 0) ? 3 : activeIndex - 1;
  $(`.slider-photo:eq(${newIndex})`).addClass('active').siblings().removeClass('active');
  switchContent();
})

function switchContent () {
  let activeIndex =  $('.slider-photo.active').index() - 1;        
  $(`.text-description:eq(${activeIndex})`).show().siblings('.text-description').hide();
  $(`.team-member:eq(${activeIndex})`).show().siblings('.team-member').hide();
  $(`.member-photo:eq(${activeIndex})`).show().siblings('.member-photo').hide();
}
})