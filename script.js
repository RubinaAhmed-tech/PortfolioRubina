// Rubina Portfolio - Custom Script

document.addEventListener('DOMContentLoaded', () => {
  /** Typing Animation */
  const typingElement = document.querySelector(".animate-typing");
  if (typingElement) {
    const text = typingElement.innerText;
    typingElement.innerText = "";
    let index = 0;
    function type() {
      if (index < text.length) {
        typingElement.innerText += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  }

  /** Dark Mode Toggle */
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
  }

  /** Scroll Progress */
  const progress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const width = (scrolled / height) * 100;
    if (progress) progress.style.width = width + '%';
  });

  /** Counter Animation */
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const update = () => {
          const max = +counter.getAttribute('data-count');
          const current = +counter.innerText;
          const increment = max / 100;
          if (current < max) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
          } else {
            counter.innerText = max;
          }
        };
        update();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 1 });
  counters.forEach(counter => observer.observe(counter));

  /** Modal Toggle */
  window.toggleModal = () => {
    const modal = document.getElementById('contactModal');
    if (modal) {
      modal.classList.toggle('hidden');
      modal.classList.toggle('flex');
    }
  };

  /** AOS Initialization */
  AOS.init({ once: true, duration: 1000 });
});
