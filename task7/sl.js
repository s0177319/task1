$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    infinite: false, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 981, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

});
