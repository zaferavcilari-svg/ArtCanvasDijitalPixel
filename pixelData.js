export const pixelData = {
    selectedColor: '#000000',
    canvasSize: 128,
    colors: [
        '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', 
        '#FFA500', '#FFDBAC', '#FFFF00', '#006400', '#008000', 
        '#0000FF', '#00008B', '#800080', '#FFC0CB', '#4B0082', '#00FFFF'
    ],
    sync: function(canvas) {
        setInterval(() => {
            localStorage.setItem('artCanvas_backup', canvas.toDataURL());
            console.log("Senkronizasyon: Kayıt yapıldı.");
        }, 1000);
    }
};
