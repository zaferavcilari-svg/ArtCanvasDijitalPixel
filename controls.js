import { canvas } from './canvas.js';

export function initControls() {
    const controlPanel = document.createElement('div');
    controlPanel.id = 'control-panel';
    
    // Buton Ayarları (Yukarı, Aşağı, Sol, Sağ, +, -)
    const buttons = [
        { text: '⬆️', action: () => move(0, -2) },
        { text: '⬇️', action: () => move(0, 2) },
        { text: '⬅️', action: () => move(-2, 0) },
        { text: '➡️', action: () => move(2, 0) },
        { text: '🔍+', action: () => zoom(0.2) },
        { text: '🔍-', action: () => zoom(-0.2) }
    ];

    buttons.forEach(btn => {
        const b = document.createElement('button');
        b.innerText = btn.text;
        b.onclick = btn.action;
        b.className = 'control-btn';
        controlPanel.appendChild(b);
    });

    document.body.appendChild(controlPanel);
}

let scale = 1.5;
let posX = 0, posY = 0;

function move(x, y) {
    posX += x;
    posY += y;
    update();
}

function zoom(amount) {
    scale = Math.max(0.5, scale + amount);
    update();
}

function update() {
    canvas.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

