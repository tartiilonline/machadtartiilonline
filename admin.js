
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (user === 'tartiilonline' && pass === 'tartiil2025') {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  } else {
    error.textContent = 'Magaca isticmaalaha ama furaha sirta waa khalad!';
  }
}

function logout() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('dashboard').classList.add('hidden');
}
