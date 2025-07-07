document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'enabled' : 'disabled');
  });

  const API_URL = "https://script.google.com/macros/s/AKfycbyXYuK9iJxCrKcWuXNo_m5ON1hRYNhk3Z0kK3r43frjc-UKhexo24FxkWiHImL8gkM/exec";

  const blogContainer = document.getElementById('blogContainer');
  const jadwalContainer = document.getElementById('jadwalContainer');
  const studentsContainer = document.getElementById('studentsContainer');

  if (API_URL) {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.Blog && blogContainer) {
          blogContainer.innerHTML = "";
          data.Blog.forEach((item) => {
            blogContainer.innerHTML += `<div class="blog-post"><h3>${item.title}</h3><p>${item.content}</p></div>`;
          });
        }

        if (data.Jadwal && jadwalContainer) {
          jadwalContainer.innerHTML = "";
          data.Jadwal.forEach((row) => {
            jadwalContainer.innerHTML += `<tr><td>${row.maadada}</td><td>${row.macalinka}</td><td>${row.waqtiga}</td></tr>`;
          });
        }

        if (data.Ardayda && studentsContainer) {
          studentsContainer.innerHTML = "";
          data.Ardayda.forEach((s) => {
            if (s.type === "image") {
              studentsContainer.innerHTML += `<div class="student"><img src="${s.url}" alt="${s.title}"><p>${s.title}</p></div>`;
            } else if (s.type === "video") {
              if (s.url.includes("youtube.com/embed")) {
                studentsContainer.innerHTML += `
                  <div class="student">
                    <iframe width="300" height="200" src="${s.url}" frameborder="0" allowfullscreen></iframe>
                    <p>${s.title}</p>
                  </div>`;
              } else {
                studentsContainer.innerHTML += `<div class="student"><video src="${s.url}" controls></video><p>${s.title}</p></div>`;
              }
            }
          });
        }
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }
});
