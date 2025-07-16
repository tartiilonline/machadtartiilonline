document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙/☀️";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "0.5rem 1rem";
  toggle.style.backgroundColor = "#800020";
  toggle.style.color = "#fff";
  toggle.style.border = "none";
  toggle.style.borderRadius = "5px";
  toggle.style.cursor = "pointer";
  toggle.style.zIndex = "1000";

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });

  document.body.appendChild(toggle);

  // Load saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

