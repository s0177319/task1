$(document).ready(function () {
    // Инициализация слайдера
    $('.slider').slick({
      infinite: false, // Отключает бесконечную прокрутку
      slidesToShow: 3, // Количество отображаемых слайдов на десктопе
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 981, // Адаптив для смартфонов
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  
    // Обновление информации о страницах при смене слайда
    $('.slider').on('afterChange', function (event, slick, currentSlide) {
      var currentPage = currentSlide + 1;
      var totalPages = slick.slideCount;
      $('.current-page').text(currentPage);
      $('.total-pages').text(totalPages);
    });
  });