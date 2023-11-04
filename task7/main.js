document.addEventListener('DOMContentLoaded', function() {
  $(".multiple-items").slick({
      dots: true,
      infinite: true,
      arrows: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive:[

            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
      ]
    });
}, false);
