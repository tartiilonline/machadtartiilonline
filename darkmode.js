document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "0.5rem";
  toggleButton.style.zIndex = "1000";
  toggleButton.style.borderRadius = "50%";
  toggleButton.style.border = "none";
  toggleButton.style.cursor = "pointer";
  toggleButton.title = "Toggle Dark Mode";

  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Mobile nav toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  if (menuToggle && navUl) {
    menuToggle.addEventListener("click", () => {
      navUl.classList.toggle("active");
    });
  }
});
