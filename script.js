let scale = 1; // Başlangıç zoom seviyesi
let pointX = 0;
let pointY = 0;
let start = { x: 0, y: 0 };

const canvas = document.getElementById('artCanvas');

// Kendi yakınlaştırma sistemimiz
window.onwheel = function (e) {
    e.preventDefault();
    const step = 0.1;
    if (e.deltaY < 0) {
        scale += step; // Yakınlaştır
    } else {
        scale = Math.max(0.5, scale - step); // Uzaklaştır (0.5'ten küçük olmasın)
    }
    updateTransform();
};

function updateTransform() {
    canvas.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

// Kanvası sürükleme (Hareket etme)
window.onmousedown = function (e) {
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    window.onmousemove = function (e) {
        pointX = e.clientX - start.x;
        pointY = e.clientY - start.y;
        
        // Kanvasın dışına çok çıkmayı engelleme (Mavi alanda sınırlama)
        const limit = 300; 
        pointX = Math.max(-limit, Math.min(limit, pointX));
        pointY = Math.max(-limit, Math.min(limit, pointY));
        
        updateTransform();
    };
};

window.onmouseup = function () {
    window.onmousemove = null;
};
