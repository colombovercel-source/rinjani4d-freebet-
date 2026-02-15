const historyList = document.getElementById("historyList");
const claimBtn = document.getElementById("claimBtn");
const popup = document.getElementById("popup");
const popupPrize = document.getElementById("popupPrize");
const popupUser = document.getElementById("popupUser");
const popupTime = document.getElementById("popupTime");

// Background Angpao
const scene = document.getElementById("scene");
setInterval(() => {
  const el = document.createElement("div");
  el.className = "bg-angpao";
  el.innerText = "🧧";
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDuration = 5 + Math.random() * 5 + "s";
  scene.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}, 500);

// Generate History
function maskUser() {
  return "USER***" + Math.floor(10 + Math.random() * 90);
}

function randomPrize() {
  return "Rp " + (50000 + Math.floor(Math.random() * 10) * 50000).toLocaleString("id-ID");
}

for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  div.className = "history-item";
  div.innerText = `${maskUser()} mendapatkan ${randomPrize()}`;
  historyList.appendChild(div);
}

// Claim Logic
claimBtn.onclick = () => {
  claimBtn.innerText = "Memeriksa data...";
  claimBtn.disabled = true;

  setTimeout(() => {
    const prize = randomPrize();
    popupPrize.innerText = prize;
    popupUser.innerText = maskUser();
    popupTime.innerText = "Waktu klaim: " + new Date().toLocaleString("id-ID");
    popup.style.display = "flex";
    claimBtn.innerText = "Cek Bonus";
    claimBtn.disabled = false;
  }, 1200);
};

function closePopup() {
  popup.style.display = "none";
}
