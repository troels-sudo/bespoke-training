// menu.js — handles overlay and scroll lock
const nav = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu-overlay');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
});
