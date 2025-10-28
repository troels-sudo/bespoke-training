document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger');
  const menuOverlay = document.querySelector('.menu-overlay');
  if (!menuBtn || !menuOverlay) return;

  menuBtn.addEventListener('click', () => {
    menuOverlay.classList.toggle('open');
  });

  document.querySelectorAll('.menu-overlay a').forEach(link => {
    link.addEventListener('click', () => menuOverlay.classList.remove('open'));
  });
});
