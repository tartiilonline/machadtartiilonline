const API_URL = "YOUR_GOOGLE_SCRIPT_URL"; // Ku beddel URL script-kaaga

// BLOG
async function getBlog() {
  const res = await fetch(API_URL + '?type=getBlog');
  const data = await res.json();
  const blogContainer = document.getElementById("blogPosts");
  if (blogContainer) {
    blogContainer.innerHTML = "";
    data.forEach(post => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>${post.date}</small>`;
      blogContainer.appendChild(div);
    });
  }
}
async function addBlog(title, content) {
  await fetch(API_URL + `?type=addBlog&title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`);
}

// JADWAL
async function getJadwal() {
  const res = await fetch(API_URL + '?type=getJadwal');
  const data = await res.json();
  const display = document.getElementById("jadwalDisplay");
  if (display) {
    display.innerHTML = "";
    data.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.maalin} - ${item.waqti} - ${item.koorso} (${item.macalin})`;
      display.appendChild(div);
    });
  }
}
async function addJadwal(m, w, k, ma) {
  await fetch(API_URL + `?type=addJadwal&maalin=${encodeURIComponent(m)}&waqti=${encodeURIComponent(w)}&koorso=${encodeURIComponent(k)}&macalin=${encodeURIComponent(ma)}`);
}

// ARDAYDA
async function getStudents() {
  const res = await fetch(API_URL + '?type=getStudents');
  const data = await res.json();
  const container = document.getElementById("studentsDisplay");
  if (container) {
    container.innerHTML = "";
    data.forEach(std => {
      const div = document.createElement("div");
      div.innerHTML = `<img src="${std.image_url}" width="120"><br><strong>${std.name}</strong><br>${std.level}`;
      container.appendChild(div);
    });
  }
}
async function addStudent(name, level, image_url) {
  await fetch(API_URL + `?type=addStudent&name=${encodeURIComponent(name)}&level=${encodeURIComponent(level)}&image_url=${encodeURIComponent(image_url)}`);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("blogPosts")) getBlog();
  if (document.getElementById("jadwalDisplay")) getJadwal();
  if (document.getElementById("studentsDisplay")) getStudents();

  const blogForm = document.getElementById("blogForm");
  if (blogForm) {
    blogForm.onsubmit = async function(e) {
      e.preventDefault();
      await addBlog(blogForm.title.value, blogForm.content.value);
      alert("Blog waa la keydiyay");
      blogForm.reset();
    };
  }

  const jadwalForm = document.getElementById("jadwalForm");
  if (jadwalForm) {
    jadwalForm.onsubmit = async function(e) {
      e.preventDefault();
      await addJadwal(jadwalForm.maalin.value, jadwalForm.waqti.value, jadwalForm.koorso.value, jadwalForm.macalin.value);
      alert("Jadwal waa la keydiyay");
      jadwalForm.reset();
    };
  }

  const studentForm = document.getElementById("studentForm");
  if (studentForm) {
    studentForm.onsubmit = async function(e) {
      e.preventDefault();
      await addStudent(studentForm.name.value, studentForm.level.value, studentForm.image_url.value);
      alert("Ardayga waa la keydiyay");
      studentForm.reset();
    };
  }
});


// GALLERY
async function getGallery() {
  const res = await fetch(API_URL + '?type=getGallery');
  const data = await res.json();
  const container = document.getElementById("galleryContainer");
  if (container) {
    container.innerHTML = "";
    data.forEach(item => {
      const div = document.createElement("div");
      if (item.type === "image") {
        div.innerHTML = `<img src="${item.url}" width="200"><br><strong>${item.title}</strong>`;
      } else {
        div.innerHTML = `<iframe width="300" height="200" src="${item.url}" frameborder="0" allowfullscreen></iframe><br><strong>${item.title}</strong>`;
      }
      container.appendChild(div);
    });
  }
}

async function addGallery(type, title, url) {
  await fetch(API_URL + `?type=addGallery&typeVal=${encodeURIComponent(type)}&title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("galleryContainer")) getGallery();

  const galleryForm = document.getElementById("galleryForm");
  if (galleryForm) {
    galleryForm.onsubmit = async function(e) {
      e.preventDefault();
      await addGallery(galleryForm.type.value, galleryForm.title.value, galleryForm.url.value);
      alert("Muuqaal/Sawir waa la keydiyay");
      galleryForm.reset();
    };
  }
});
