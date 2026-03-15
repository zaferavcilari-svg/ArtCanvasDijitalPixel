export const pixelData = {
    selectedColor: '#000000',
    canvasSize: 128,
    colors: [
        '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', 
        '#FFA500', '#FFDBAC', '#FFFF00', '#006400', '#008000', 
        '#0000FF', '#00008B', '#800080', '#FFC0CB', '#4B0082', '#00FFFF'
    ],
    sync: function(canvasElement) {
        setInterval(() => {
            const data = canvasElement.toDataURL();
            localStorage.setItem('artCanvas_save', data);
            console.log("Senkronize edildi...");
        }, 1000);
    }
};
