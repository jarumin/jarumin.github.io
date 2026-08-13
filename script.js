

document.addEventListener('DOMContentLoaded', function () {

  
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        mainNav.classList.remove('open');
      });
    });
  }

  
  let currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage.startsWith('view-project')) currentPage = 'projects.html';
  document.querySelectorAll('.main-nav a[data-page]').forEach(function (link) {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  
  const track = document.querySelector('.projects-track');
  if (track) {
    const cards = track.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let index = 0;

    function cardsPerView() {
      if (window.innerWidth <= 860) return 1;
      return 3;
    }

    function maxIndex() {
      return Math.max(0, cards.length - cardsPerView());
    }

    function update() {
      const perView = cardsPerView();
      const gap = 26;
      const cardWidth = track.parentElement.clientWidth / perView;
      const offset = index * (cardWidth) ;
      track.style.transform = 'translateX(-' + (index * (100 / perView)) + '%)';
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index >= maxIndex();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (index < maxIndex()) { index++; update(); }
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (index > 0) { index--; update(); }
      });
    }

    window.addEventListener('resize', function () {
      index = Math.min(index, maxIndex());
      update();
    });

    update();
  }

  
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const statusEl = contactForm.querySelector('.form-status');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const firstName = contactForm.querySelector('#firstName');
      const lastName = contactForm.querySelector('#lastName');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !message.value.trim()) {
        showStatus('Please fill in every field before sending.', false);
        return;
      }

      if (!emailPattern.test(email.value.trim())) {
        showStatus('Please enter a valid email address.', false);
        return;
      }

      // No backend is wired up yet — this simply confirms the message is ready.
      showStatus('Thanks, ' + firstName.value.trim() + '! Your message is ready — connect a form backend (e.g. Formspree) to deliver it.', true);
      contactForm.reset();
    });

    function showStatus(msg, ok) {
      statusEl.textContent = msg;
      statusEl.style.color = ok ? 'var(--color-green)' : '#c33128';
    }
  }

});
