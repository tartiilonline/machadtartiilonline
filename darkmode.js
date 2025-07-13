
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = '🌙 Bedel Muuqaalka';
  btn.style.margin = '1rem';
  document.body.prepend(btn);
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
