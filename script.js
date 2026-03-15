const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
const colorsContainer = document.getElementById('colors-container');

// 1. Kanvas Ayarları
const size = 128;
canvas.width = size;
canvas.height = size;

// 2. Renk Paleti (İstediğin 16 renk)
const colors = [
    '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', '#FFA500', 
    '#FFDBAC', '#FFFF00', '#006400', '#008000', '#0000FF', '#00008B', 
    '#800080', '#FFC0CB'
]; // Eksik renkleri listeye ekleyebilirsin

let selectedColor = '#000000';

// Paleti Oluşturma
colors.forEach(color => {
    const div = document.createElement('div');
    div.className = 'color-box';
    div.style.backgroundColor = color;
    div.onclick = () => {
        document.querySelectorAll('.color-box').forEach(el => el.classList.remove('selected'));
        div.classList.add('selected');
        selectedColor = color;
    };
    colorsContainer.appendChild(div);
});

// 3. Zoom ve Hareket Sistemi (Kamera Kontrolü)
let scale = 4;
let posX = 0, posY = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Burada sunucudan gelen verileri çizdirebilirsin
}

// 4. Senkronizasyon (Her 1 saniyede bir)
setInterval(() => {
    console.log("Senkronize ediliyor...");
    // Burada Fetch API ile GitHub üzerinden veya bir veritabanından veri çekebilirsin
}, 1000);

// Pixel Koyma Fonksiyonu
canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (rect.width / size));
    const y = Math.floor((e.clientY - rect.top) / (rect.height / size));
    
    ctx.fillStyle = selectedColor;
    ctx.fillRect(x, y, 1, 1);
};

