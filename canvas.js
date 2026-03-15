import { pixelData } from './pixelData.js';
export const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

export function initCanvas() {
    canvas.width = pixelData.canvasSize;
    canvas.height = pixelData.canvasSize;
    canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / (rect.width / pixelData.canvasSize));
        const y = Math.floor((e.clientY - rect.top) / (rect.height / pixelData.canvasSize));
        ctx.fillStyle = pixelData.selectedColor;
        ctx.fillRect(x, y, 1, 1);
    };
}
