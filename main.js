const config = {
    selectedColor: '#000000',
    canvasSize: 128,
    scale: 1.5,
    posX: 0,
    posY: 0,
    // Tüm renkleri buraya ekliyoruz:
    colors: [
        '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', 
        '#FFA500', '#FFDBAC', '#FFFF00', '#006400', '#008000', 
        '#0000FF', '#00008B', '#800080', '#FFC0CB', '#4B0082', '#00FFFF'
    ]
};

const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
canvas.width = config.canvasSize;
canvas.height = config.canvasSize;

// 1. Renk Kutucuklarını Palete Ekle
const palette = document.getElementById('palette-panel');
config.colors.forEach((color, index) => {
    const div = document.createElement('div');
    div.className = 'color-box' + (index === 0 ? ' selected' : '');
    div.style.backgroundColor = color;
    div.onclick = () => {
        document.querySelectorAll('.color-box').forEach(el => el.classList.remove('selected'));
        div.classList.add('selected');
        config.selectedColor = color;
    };
    palette.appendChild(div);
});

// 2. Butonları Ekle (Sağ Tarafta Duracaklar)
function initControls() {
    const panel = document.createElement('div');
    panel.id = 'control-panel';
    const btns = [
        { t: '⬆️', a: () => move(0, -25) }, { t: '⬇️', a: () => move(0, 25) },
        { t: '⬅️', a: () => move(-25, 0) }, { t: '➡️', a: () => move(25, 0) },
        { t: '➕', a: () => zoom(0.4) }, { t: '➖', a: () => zoom(-0.4) }
    ];
    btns.forEach(b => {
        const btn = document.createElement('button');
        btn.innerText = b.t; btn.onclick = b.a; btn.className = 'control-btn';
        panel.appendChild(btn);
    });
    document.body.appendChild(panel);
}

function move(x, y) { config.posX += x; config.posY += y; update(); }
function zoom(s) { config.scale = Math.max(0.2, config.scale + s); update(); }
function update() { 
    canvas.style.transform = `translate(${config.posX}px, ${config.posY}px) scale(${config.scale})`; 
}

// 3. Piksel Çizme
canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / (rect.width / config.canvasSize));
    const y = Math.floor((e.clientY - rect.top) / (rect.height / config.canvasSize));
    ctx.fillStyle = config.selectedColor;
    ctx.fillRect(x, y, 1, 1);
};

// 4. Senkronizasyon (1 saniyede bir kaydeder)
setInterval(() => {
    localStorage.setItem('artCanvas_last', canvas.toDataURL());
}, 1000);

initControls();
update();
