const claimBtn = document.getElementById("claimBtn");
const csBtn = document.getElementById("csBtn");
const userIdInput = document.getElementById("userId");
const infoMessage = document.getElementById("infoMessage");
const bonusBox = document.getElementById("bonusBox");
const bonusAmount = document.getElementById("bonusAmount");
const historyList = document.getElementById("historyList");

const BONUS_OPTIONS = [50000, 75000, 100000, 150000];
const STORAGE_KEY = "rinjani4d_claimed_users";

let claimedUsers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// history (scrollable)
function loadHistory() {
  historyList.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    const li = document.createElement("li");
    const bonus = BONUS_OPTIONS[Math.floor(Math.random() * BONUS_OPTIONS.length)];
    li.textContent = `USER***${Math.floor(Math.random() * 90 + 10)} — Freebet Rp ${bonus.toLocaleString("id-ID")}`;
    historyList.appendChild(li);
  }
}
loadHistory();

claimBtn.addEventListener("click", () => {
  const userId = userIdInput.value.trim();
  infoMessage.style.color = "#ff6b6b";
  bonusBox.classList.add("hidden");

  if (!userId) {
    infoMessage.textContent = "User ID wajib diisi.";
    return;
  }

  if (claimedUsers.includes(userId)) {
    infoMessage.textContent = "Bonus sudah pernah diklaim untuk User ID ini.";
    return;
  }

  const bonus = BONUS_OPTIONS[Math.floor(Math.random() * BONUS_OPTIONS.length)];
  bonusAmount.textContent = `Freebet Rp ${bonus.toLocaleString("id-ID")}`;

  claimedUsers.push(userId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(claimedUsers));

  infoMessage.style.color = "#7CFC98";
  infoMessage.textContent = "Bonus tersedia untuk akun ini.";
  bonusBox.classList.remove("hidden");
});

csBtn.addEventListener("click", () => {
  window.location.href = "https://rinjanipuncak.com";
});
