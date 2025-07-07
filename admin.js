const USERNAME = "tartiilonline";
const PASSWORD = "tartiilonline25";
const API_URL = "https://script.google.com/macros/s/AKfycbxKh-_tqVu4-N7Tqdni6Vg1OcvyjG2kQgYjN8_-HBQLgGC-_FoUDdRAi0WbYi48wexhpA/exec";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === USERNAME && pass === PASSWORD) {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    document.getElementById("loginError").innerText = "Username ama Password waa khalad.";
  }
}

function logout() {
  location.reload();
}

function submitBlog() {
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;
  if (!title || !content) return alert("Fadlan buuxi dhamaan meelaha.");
  sendData({ sheet: "Blog", title, content });
}

function submitJadwal() {
  const maadada = document.getElementById("jadwalMaadada").value;
  const macalinka = document.getElementById("jadwalMacalinka").value;
  const waqtiga = document.getElementById("jadwalWaqtiga").value;
  if (!maadada || !macalinka || !waqtiga) return alert("Fadlan buuxi dhamaan meelaha.");
  sendData({ sheet: "Jadwal", maadada, macalinka, waqtiga });
}

function submitStudent() {
  const title = document.getElementById("studentTitle").value;
  const type = document.getElementById("studentType").value;
  const url = document.getElementById("studentURL").value;
  if (!title || !type || !url) return alert("Fadlan buuxi dhamaan meelaha.");
  sendData({ sheet: "Ardayda", title, type, url });
}

function sendData(data) {
  document.getElementById("status").innerText = "Diraya...";
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.text())
    .then(msg => {
      document.getElementById("status").innerText = "Waa la keydiyay!";
    }).catch(err => {
      document.getElementById("status").innerText = "Error: " + err.message;
    });
}
