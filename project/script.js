$(document).ready(function () {
    const sliderContainer2 = $('.slider-container2');
    const sliderImages = $('.slider-images');
    const sliderImageWidth = $('.slider-image').outerWidth(true);
    const visibleSliderImages = Math.floor(sliderContainer2.width() / sliderImageWidth);
    const totalSliderImages = $('.slider-image').length;
    let isDraggingSlider = false;
    let startPositionSlider = 0;
    let currentTranslateSlider = 0;

    const bottomContainer2 = $('.bottom-images');
    const bottomImages = $('.bottom-images .bottom-image');  // Исправлено
    const bottomImageWidth = $('.bottom-images .bottom-image').outerWidth(true);  // Исправлено
    const visibleBottomImages = Math.floor(bottomContainer2.width() / bottomImageWidth);
    const totalBottomImages = $('.bottom-images .bottom-image').length;  // Исправлено
    let isDraggingBottom = false;
    let startPositionBottom = 0;
    let currentTranslateBottom = 0;

    function updateSlider(container2, images, imageWidth, isDragging, startPosition, currentTranslate, visibleImages, totalImages) {
      container2.on('mousedown touchstart', function (e) {
        isDragging = true;
        startPosition = e.pageX || e.originalEvent.touches[0].pageX;
      });

      $(document).on('mouseup touchend', function () {
        isDragging = false;
        const newPosition = currentTranslate / imageWidth;
        const roundedPosition = Math.round(newPosition);

        currentTranslate = roundedPosition * imageWidth;
        update(container2, images, imageWidth, currentTranslate, visibleImages, totalImages);
      });

      $(document).on('mousemove touchmove', function (e) {
        if (!isDragging) return;

        const currentPosition = e.pageX || e.originalEvent.touches[0].pageX;
        const difference = currentPosition - startPosition;
        currentTranslate += difference;

        images.css('transform', 'translateX(' + currentTranslate + 'px)');
        startPosition = currentPosition;
      });

      container2.on('click', function (e) {
        if (!isDragging) {
          const direction = e.clientX < container2.width() / 2 ? 1 : -1;
          currentTranslate += direction * imageWidth;
          update(container2, images, imageWidth, currentTranslate, visibleImages, totalImages);
        }
      });
    }

    function update(container2, images, imageWidth, currentTranslate, visibleImages, totalImages) {
      const minTranslate = -imageWidth * (totalImages - visibleImages);
      const maxTranslate = 0;

      if (currentTranslate > maxTranslate) {
        currentTranslate = minTranslate;
      } else if (currentTranslate < minTranslate) {
        currentTranslate = maxTranslate;
      }

      images.css('transform', 'translateX(' + currentTranslate + 'px)');
    }

    updateSlider(sliderContainer2, sliderImages, sliderImageWidth, isDraggingSlider, startPositionSlider, currentTranslateSlider, visibleSliderImages, totalSliderImages);
    updateSlider(bottomContainer2, bottomImages, bottomImageWidth, isDraggingBottom, startPositionBottom, currentTranslateBottom, visibleBottomImages, totalBottomImages);
  });
const feedbackForm = document.getElementById('feedbackForm');
const sucmes = document.getElementById('sucmes');
const ermes = document.getElementById('ermes');

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(feedbackForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formcarry.com/s/jpXL8tnTne', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 201) { // Check for a specific status indicating success (e.g., 201 Created)
        sucmes.style.display = 'block';
        feedbackForm.reset();
        localStorage.removeItem('feedbackFormData');
      } else {
        ermes.style.display = 'block';
        alert("Ошибка при отправке сообщения");
      }
    }
  };
  xhr.send(formData);
});

// Очистка сообщений об успешной отправке или ошибке при изменении формы
feedbackForm.addEventListener('input', () => {
  sucmes.style.display = 'none';
  ermes.style.display = 'none';
});
feedbackForm.addEventListener('submit', (e) => {
e.preventDefault();
const formData = new FormData(feedbackForm);
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://formcarry.com/s/jpXL8tnTne', true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      sucmes.style.display = 'block';
      feedbackForm.reset();
      localStorage.removeItem('feedbackFormData');
    } else {
     ermes.style.display='block';
     alert("Сообщение отправлено")
    }
  }
};
xhr.send(formData);
});
//Очистка сообщений об успешной отправен или ошибке при изменении формы
feedbackForm.addEventListener('input', () => {
sucmes.style.display = 'none';
ermes.style.display = 'none';
});
document.getElementById("feedbackForm").addEventListener("submit", function(event){
event.preventDefault();
document.getElementById("feedbackForm").reset();
})
document.addEventListener('DOMContentLoaded', function () {
        const slider = document.querySelector('.slider');
        const counter = document.getElementById('slider-counter');
        let currentSlide = 1;
        const totalSlides = document.querySelectorAll('.slide').length;

        function updateCounter() {
            counter.textContent = `${currentSlide} / ${totalSlides}`;
        }

        function showSlide(index) {
            slider.style.transform = `translateX(-${(index - 1) * 100}%)`;
            currentSlide = index;
            updateCounter();
        }

        // Handle next button click
        document.getElementById('next-btn').addEventListener('click', function () {
            if (currentSlide < totalSlides) {
                showSlide(currentSlide + 1);
            }
        });

        // Handle previous button click
        document.getElementById('prev-btn').addEventListener('click', function () {
            if (currentSlide > 1) {
                showSlide(currentSlide - 1);
            }
        });
    });
        $(document).ready(function () {
      $('.question').on('click', function () {
        const faqItem = $(this).closest('.faq-item');
        const answer = faqItem.find('.answer');
        answer.toggleClass('show');
        faqItem.toggleClass('clicked');
      });
    });