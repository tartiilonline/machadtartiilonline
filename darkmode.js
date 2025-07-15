// darkmode.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙 Toggle Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px 15px";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "8px";
  toggleBtn.style.background = "#800020";
  toggleBtn.style.color = "white";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.zIndex = "1000";

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });

  document.body.appendChild(toggleBtn);

  // Load saved preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
