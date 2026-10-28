const burger = document.getElementById('burger');
const nav = document.getElementById('glass-nav');
const overlay = document.getElementById('menu-overlay');

function toggleMenu(isOpen) {
  if (!nav || !overlay) return;

  nav.classList.toggle('active', isOpen);
  overlay.classList.toggle('active', isOpen);

  document.body.style.overflow = isOpen ? 'hidden' : '';

  if (burger) {
    burger.setAttribute('aria-expanded', String(isOpen));
  }
}

if (burger && nav && overlay) {
  burger.setAttribute('aria-expanded', 'false');

  burger.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    toggleMenu(!nav.classList.contains('active'));
  });

  overlay.addEventListener('click', function () {
    toggleMenu(false);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(false);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      toggleMenu(false);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      toggleMenu(false);
    }
  });
}

document.querySelectorAll('.project__image-slider').forEach(function (slider) {
  const slides = slider.querySelectorAll('.project__item-img');
  const leftBtn = slider.querySelector('.project-arrow.left');
  const rightBtn = slider.querySelector('.project-arrow.right');

  let current = 0;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('active', i === index);
    });
  }

  if (leftBtn && rightBtn && slides.length > 0) {
    leftBtn.addEventListener('click', function () {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    rightBtn.addEventListener('click', function () {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }

  showSlide(current);
});