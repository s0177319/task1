const openPopupButton = document.getElementById('openPopupButton');
const popup = document.getElementById('popup');
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Открытие попапа при клике на кнопку
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
  history.pushState(null, '', '/feedback');
});

// Закрытие попапа при нажатии кнопки "Назад" в браузере
window.addEventListener('popstate', () => {
  popup.style.display = 'none';
});

// Загрузка данных из LocalStorage и заполнение формы
window.addEventListener('load', () => {
  const savedFormData = JSON.parse(localStorage.getItem('feedbackFormData'));

  if (savedFormData) {
    document.getElementById('fullName').value = savedFormData.fullName;
    document.getElementById('email').value = savedFormData.email;
    document.getElementById('phone').value = savedFormData.phone;
    document.getElementById('organization').value = savedFormData.organization;
    document.getElementById('message').value = savedFormData.message;
    document.getElementById('agreement').checked = savedFormData.agreement;
  }
});

// Отправка формы с помощью XHR
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(feedbackForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formcarry.com/s/lv9aZjYmaU', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        successMessage.style.display = 'block';
        feedbackForm.reset();
        localStorage.removeItem('feedbackFormData');
      } else {
        errorMessage.style.display = 'block';
      }
    }
  };
  xhr.send(formData);
});

// Сохранение данных из формы в LocalStorage при изменении
feedbackForm.addEventListener('change', () => {
  const formData = new FormData(feedbackForm);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('feedbackFormData', JSON.stringify(data));
});

// Очистка сообщений об успешной отправке или ошибке при изменении формы
feedbackForm.addEventListener('input', () => {
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';
});
document.getElementById("feedbackForm").addEventListener("submit", function(event){
  // Предотвращаем отправку формы на сервер
  event.preventDefault();
  
  // Очищаем данные в форме
  document.getElementById("feedbackForm").reset();
})