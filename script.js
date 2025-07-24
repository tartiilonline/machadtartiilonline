document.getElementById("diiwaangelinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;

  const formData = {
    Magaca: form.magaca.value,
    WhatsApp: form.whatsapp.value,
    Wadanka: form.wadanka.value,
    Heerka: form.heerka.value,
    Qeybta: form.qeybta.value,
    Waqtiga: form.waqtiga.value,
    Qaabka: form.qaabka.value,
    Dhalasho: form.dhalasho.value,
    Taariikh: new Date().toLocaleDateString("so-SO")
  };

  fetch("YOUR_SCRIPT_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ " + data.message);
    form.reset();
  })
  .catch(err => {
    alert("❌ Khalad ayaa dhacay. Fadlan dib isku day.");
    console.error(err);
  });
});
