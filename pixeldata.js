// pixelData.js
export const pixelData = {
    selectedColor: '#000000', // Paletten seçilen renk burada saklanır
    canvasSize: 128,
    
    // Pikselleri 1 saniyede bir senkronize etmek için tetiği burada tutabiliriz
    updatePixel: function(x, y, color) {
        console.log(`Piksel güncellendi: ${x},${y} -> ${color}`);
        // Buraya ileride sunucu (database) bağlantısı gelecek
    }
};

