const openPopupButton = document.getElementById('openPopupButton');
const popup = document.getElementById('popup');
const feedbackForm = document.getElementById('feedbackForm');
const sucmes = document.getElementById('sucmes');
const ermes = document.getElementById('ermes');
//Открытие попапа при клике на кнопку
openPopupButton.addEventListener('click', () => {
  openPopupButton.style.display = 'none'; 
  popup.style.display = 'block';
  history.pushState(null, '', '/feedback');
});
//Закрытие попапа при клике на кнопку "Назад"
window.addEventListener('popstate', () => {
  popup.style.display = 'none';
});
//Загрузка данных из LocalStorage и заполнение формы
window.addEventListener('load', () => {
  const savedFormData = JSON.parse(localStorage.getItem('feedbackFormData'));
  if (savedFormData) {
    document.getElementById('fullName').value = savedFormData.fullName;
    document.getElementById('email').value = savedFormData.email;
    document.getElementById('tel').value = savedFormData.tel;
    document.getElementById('organization').value = savedFormData.organization;
    document.getElementById('message').value = savedFormData.message;
    document.getElementById('agreement').checked = savedFormData.agreement;
  }
});
//Отправка формы с помощью XHR
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
//Сохранение данных из формы в LocalStorage при изменении
feedbackForm.addEventListener('change', () => {
  const formData = new FormData(feedbackForm);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('feedbackFormData', JSON.stringify(data));
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