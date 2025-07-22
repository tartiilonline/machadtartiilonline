document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  // Load saved preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
});
