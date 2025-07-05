
// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');

  toggle.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
});
