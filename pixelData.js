export const pixelData = {
    selectedColor: '#000000',
    canvasSize: 128,
    // Palet renkleri
    colors: [
        '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', 
        '#FFA500', '#FFDBAC', '#FFFF00', '#006400', '#008000', 
        '#0000FF', '#00008B', '#800080', '#FFC0CB', '#4B0082', '#00FFFF'
    ],
    // Senkronizasyon (1 saniyede bir çalışacak tetikleyici)
    sync: function(canvasElement) {
        setInterval(() => {
            const data = canvasElement.toDataURL();
            localStorage.setItem('artCanvas_backup', data);
            console.log("Art Canvas: 1s Senkronizasyon sağlandı.");
        }, 1000);
    }
};
