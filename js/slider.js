$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    slidesToShow: 3,
    invinite: true,
    nextArrow: '<div type="button" class="slick-next"><img src="arrow/next.png"></img></div>',
    prevArrow: '<div type="button" class="slick-prev"><img src="arrow/back.png"></img></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('[data-modal=order]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  })
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation').fadeOut('slow');
  })
});
