$(function() {
  
  $('.img-section').hide();
  $('.img-section').slice(0,12).show();
  
  
  $('.work-example').on('click', function() {
    let $categoty = $(this).attr('id');
    if($categoty == 'all-img-section') {
      $('.img-section').addClass('hide');
      setTimeout(function() {
        $('.img-section').removeClass('hide');
      }, 500);
    } 
    else {
      $('.img-section').addClass('hide');
      setTimeout(function() {
          $('.' + $categoty).removeClass('hide');
      }, 500)
    }
  });



})