const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('menuOverlay');

// Показать/скрыть бургер-меню
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');

  // Меняем цвет бургер-меню при открытии
  if (nav.classList.contains('active')) {
    burger.style.color = '#d9d9d9';
  } else {
    burger.style.color = '';
  }
});

// Закрыть по клику вне
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  burger.style.color = '';
});

// Автоматически закрыть меню при увеличении ширины
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    burger.style.color = '';
  }
});

// Закрытие меню при клике на любую ссылку
const navLinks = nav.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    burger.style.color = '';
  });
});

document.querySelectorAll('.project__image-slider').forEach(slider => {
  const slides = slider.querySelectorAll('.project__item-img');
  const leftBtn = slider.querySelector('.project-arrow.left');
  const rightBtn = slider.querySelector('.project-arrow.right');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  leftBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  rightBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});
