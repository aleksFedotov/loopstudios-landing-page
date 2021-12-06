const burger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');
const navMobile = document.querySelector('.nav-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('opened');
  modal.classList.toggle('active');
});
