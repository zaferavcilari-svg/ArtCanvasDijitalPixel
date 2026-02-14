const palette = document.getElementById("palette");

for (let hue = 0; hue <= 360; hue += 5) {
  const colorBox = document.createElement("div");
  colorBox.className = "color";
  colorBox.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

  colorBox.addEventListener("click", () => {
    selectedColor = `hsl(${hue}, 100%, 50%)`;
  });

  palette.appendChild(colorBox);
}
