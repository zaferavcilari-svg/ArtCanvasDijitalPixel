import { pixelData } from './pixelData.js';

export function initPalette() {
    const palettePanel = document.getElementById('palette-panel');
    
    pixelData.colors.forEach((color, index) => {
        const div = document.createElement('div');
        div.className = 'color-box';
        div.style.backgroundColor = color;
        
        // İlk renk (Siyah) seçili başlasın
        if(index === 0) div.classList.add('selected');

        div.onclick = () => {
            document.querySelectorAll('.color-box').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            pixelData.selectedColor = color;
        };
        palettePanel.appendChild(div);
    });
}
