document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.textContent = "Toggle Dark Mode";
  toggle.style.position = 'fixed';
  toggle.style.bottom = '10px';
  toggle.style.right = '10px';
  toggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
  };
  document.body.appendChild(toggle);
});