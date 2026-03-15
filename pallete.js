// palette.js
import { pixelData } from './pixelData.js';

const colors = [
    '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', 
    '#FFA500', '#FFDBAC', '#FFFF00', '#006400', '#008000', 
    '#0000FF', '#00008B', '#800080', '#FFC0CB', '#4B0082', '#00FFFF'
];

export function initPalette() {
    const palettePanel = document.createElement('div');
    palettePanel.id = 'palette-panel';
    
    // CSS ile aşağıya sabitleme
    Object.assign(palettePanel.style, {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        display: 'flex',
        justify-content: center,
        padding: '15px 0',
        gap: '8px',
        borderTop: '3px solid #00BFFF',
        zIndex: '1000'
    });

    colors.forEach((color, index) => {
        const btn = document.createElement('div');
        btn.className = 'color-box';
        btn.style.width = '35px';
        btn.style.height = '35px';
        btn.style.borderRadius = '50%';
        btn.style.backgroundColor = color;
        btn.style.border = '3px solid transparent';
        btn.style.cursor = 'pointer';

        if(index === 0) btn.style.borderColor = '#00BFFF'; // Varsayılan seçim

        btn.onclick = () => {
            document.querySelectorAll('.color-box').forEach(b => b.style.borderColor = 'transparent');
            btn.style.borderColor = '#00BFFF';
            pixelData.selectedColor = color; // Pixel dosyasıyla iletişim
        };
        palettePanel.appendChild(btn);
    });

    document.body.appendChild(palettePanel);
}

