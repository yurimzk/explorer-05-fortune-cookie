const closedCookie = document.querySelector('.closed-cookie');
const openedCookie = document.querySelector('.opened-cookie');
const cookieImg = document.querySelector('.closed-cookie img');
const button = document.querySelector('.opened-cookie button');

function toggleElements() {
  closedCookie.classList.toggle('hide');
  openedCookie.classList.toggle('hide');
}

cookieImg.addEventListener('click', () => {
  toggleElements();
});

button.addEventListener('click', () => {
  toggleElements();
});