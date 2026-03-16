const config = {
    selectedColor: '#000000',
    canvasSize: 128,
    scale: 1.0,
    posX: 0,
    posY: 0,
    // Siyah, Beyaz ve Gri en başa eklendi
    colors: [
        '#000000', '#808080', '#FFFFFF', '#FF0000', '#800000', 
        '#FFA500', '#FFDBAC', '#FFFF00', '#006400', '#008000', 
        '#0000FF', '#00008B', '#800080', '#FFC0CB', '#4B0082', '#00FFFF'
    ]
};

// ... Diğer kodların (canvas, initUI vb.) aynı kalabilir ...
// Sadece renkleri oluştururken yeni config.colors'ı kullanacak.

// SENKRONİZASYON NEDİR?
// Senin "SENKRIZASYOJ" dediğin şey, aslında verilerin sunucuyla aynı anda güncellenmesidir. 
// Şu an sadece senin telefonuna kaydediyor (LocalStorage). 
// İleride Berat veya Alpay siteye girdiğinde senin bayrağını görsün istiyorsan, 
// o zaman gerçek bir veritabanı senkronizasyonu kurmamız gerekecek.
