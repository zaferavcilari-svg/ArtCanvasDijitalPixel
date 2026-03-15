import { pixelData } from './pixelData.js';

export function initPalette() {
    const panel = document.getElementById('palette-panel');
    pixelData.colors.forEach((color, index) => {
        const div = document.createElement('div');
        div.className = 'color-box' + (index === 0 ? ' selected' : '');
        div.style.backgroundColor = color;
        div.onclick = () => {
            document.querySelectorAll('.color-box').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            pixelData.selectedColor = color;
        };
        panel.appendChild(div);
    });
}
