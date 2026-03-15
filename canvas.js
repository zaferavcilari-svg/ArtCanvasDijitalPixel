import { pixelData } from './pixelData.js';

const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
let scale = 1.5;
let posX = 0, posY = 0;

export function initCanvas() {
    canvas.width = pixelData.canvasSize;
    canvas.height = pixelData.canvasSize;

    // Yakınlaştırma (Zoom) Sistemi
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) scale += 0.2; 
        else scale = Math.max(0.5, scale - 0.2);
        updateTransform();
    }, { passive: false });

    function updateTransform() {
        canvas.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    }

    // Tıklama ile Piksel Koyma
    canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / (rect.width / pixelData.canvasSize));
        const y = Math.floor((e.clientY - rect.top) / (rect.height / pixelData.canvasSize));
        
        ctx.fillStyle = pixelData.selectedColor;
        ctx.fillRect(x, y, 1, 1);
    };

    // Hareket sistemini (dragging) buraya ekleyebilirsin
    updateTransform();
}

export { canvas };
