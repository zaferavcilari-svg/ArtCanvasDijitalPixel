// canvas.js
import { pixelData } from './pixelData.js';

const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

export function initCanvas() {
    canvas.width = pixelData.canvasSize;
    canvas.height = pixelData.canvasSize;

    canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / (rect.width / pixelData.canvasSize));
        const y = Math.floor((e.clientY - rect.top) / (rect.height / pixelData.canvasSize));
        
        // Çizimi yap
        ctx.fillStyle = pixelData.selectedColor; // Pixel verisindeki seçili rengi al
        ctx.fillRect(x, y, 1, 1);
        
        // Veriyi güncelle (Senkronizasyon için)
        pixelData.updatePixel(x, y, pixelData.selectedColor);
    };
}

