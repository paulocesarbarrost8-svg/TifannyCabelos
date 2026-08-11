const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

for (const item of document.querySelectorAll('.faq-item')) {
  item.querySelector('.faq-question')?.addEventListener('click', () => {
    item.classList.toggle('open');
  });
}

for (const link of document.querySelectorAll('.mobile-nav a, .nav-links a')) {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
}
