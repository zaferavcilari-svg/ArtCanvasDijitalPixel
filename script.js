const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const worldSize = 3000;   // büyük dünya
const pixelSize = 3;      // küçük pixel

let offsetX = worldSize / 2 - canvas.width / 2;
let offsetY = worldSize / 2 - canvas.height / 2;

let selectedColor = "red";

let userId = "kullanıcı" + Math.floor(Math.random() * 1000);
console.log("User:", userId);

const pixels = {};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Beyaz dünya
  ctx.fillStyle = "white";
  ctx.fillRect(-offsetX, -offsetY, worldSize, worldSize);

  // Pixel çiz
  for (let key in pixels) {
    const [x, y] = key.split("_").map(Number);
    ctx.fillStyle = pixels[key];
    ctx.fillRect(x - offsetX, y - offsetY, pixelSize, pixelSize);
  }
}

canvas.addEventListener("click", (e) => {
  const x = Math.floor((e.clientX + offsetX) / pixelSize) * pixelSize;
  const y = Math.floor((e.clientY + offsetY) / pixelSize) * pixelSize;
  pixels[`${x}_${y}`] = selectedColor;
  draw();
});

// Sürükleyerek gezme
let dragging = false;
let startX, startY;

canvas.addEventListener("mousedown", (e) => {
  dragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  offsetX -= e.clientX - startX;
  offsetY -= e.clientY - startY;

  // sınır kontrolü
  offsetX = Math.max(0, Math.min(worldSize - canvas.width, offsetX));
  offsetY = Math.max(0, Math.min(worldSize - canvas.height, offsetY));

  startX = e.clientX;
  startY = e.clientY;

  draw();
});

canvas.addEventListener("mouseup", () => dragging = false);
canvas.addEventListener("mouseleave", () => dragging = false);

// Renk Paleti
const palette = document.getElementById("palette");

for (let i = 0; i < 360; i += 10) {
  const div = document.createElement("div");
  div.className = "color";
  div.style.backgroundColor = `hsl(${i}, 100%, 50%)`;

  div.onclick = () => {
    selectedColor = `hsl(${i}, 100%, 50%)`;
  };

  palette.appendChild(div);
}

draw();
