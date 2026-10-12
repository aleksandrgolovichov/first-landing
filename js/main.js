const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('menuOverlay');

if (burger && nav && overlay) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}

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

  if (leftBtn && rightBtn && slides.length > 0) {
    leftBtn.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    rightBtn.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }

  showSlide(current);
});

const projectForm = document.getElementById('projectForm');
const formStatus = document.getElementById('formStatus');

if (projectForm && formStatus) {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('clientName').value.trim();
    const contact = document.getElementById('clientContact').value.trim();
    const details = document.getElementById('projectDetails').value.trim();

    if (!name || !contact || !details) {
      formStatus.style.color = '#ef4444';
      formStatus.textContent = 'Please fill out all required fields :)';
      return;
    }

    formStatus.style.color = '#22c55e';
    formStatus.textContent = 'Thank you! Your request has been sent successfully :)';
    projectForm.reset();

    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  });
}