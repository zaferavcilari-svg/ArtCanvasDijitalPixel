import { canvas } from './canvas.js';

let scale = 1.5;
let posX = 0, posY = 0;

export function initControls() {
    const panel = document.createElement('div');
    panel.id = 'control-panel';
    const btns = [
        { t: '⬆️', a: () => move(0, -20) }, { t: '⬇️', a: () => move(0, 20) },
        { t: '⬅️', a: () => move(-20, 0) }, { t: '➡️', a: () => move(20, 0) },
        { t: '➕', a: () => zoom(0.3) }, { t: '➖', a: () => zoom(-0.3) }
    ];
    btns.forEach(b => {
        const btn = document.createElement('button');
        btn.innerText = b.t; btn.onclick = b.a; btn.className = 'control-btn';
        panel.appendChild(btn);
    });
    document.body.appendChild(panel);
}

function move(x, y) { posX += x; posY += y; update(); }
function zoom(s) { scale = Math.max(0.5, scale + s); update(); }
function update() { canvas.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`; }
