const profileBtn = document.getElementById("profileBtn");
const profilePanel = document.getElementById("profilePanel");

profileBtn.onclick = () => {
  profilePanel.style.display =
    profilePanel.style.display === "block" ? "none" : "block";
};

profilePanel.innerHTML = "<h3>Profil</h3><p>Demo sürüm</p>";
