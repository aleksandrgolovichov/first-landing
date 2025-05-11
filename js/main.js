const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('menuOverlay');

// Показать/скрыть бургер-меню
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Закрыть по клику вне
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});

// Автоматически закрыть меню при увеличении ширины
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  }
});
