document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'enabled' : 'disabled');
  });
});
