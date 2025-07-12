document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.textContent = 'Dark Mode';
  toggle.style.position = 'fixed';
  toggle.style.bottom = '15px';
  toggle.style.right = '15px';
  toggle.style.zIndex = '999';
  toggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  };
  document.body.appendChild(toggle);

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
