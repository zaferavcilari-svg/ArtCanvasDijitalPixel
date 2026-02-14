const chatBtn = document.getElementById("chatBtn");
const chatPanel = document.getElementById("chatPanel");

chatBtn.onclick = () => {
  chatPanel.style.display =
    chatPanel.style.display === "block" ? "none" : "block";
};

chatPanel.innerHTML = "<h3>Sohbet</h3><p>Demo sürüm</p>";
