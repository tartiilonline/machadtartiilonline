// darkmode.js
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.background = "#800020";
  toggleBtn.style.color = "white";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "8px";
  toggleBtn.style.zIndex = "9999";
  toggleBtn.onclick = toggleDarkMode;
  document.body.appendChild(toggleBtn);
});
