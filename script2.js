document.addEventListener("DOMContentLoaded", () => {
    const stickerImages = [
        'images/noa1.png',
        'images/noa2.png',
        'images/noa3.png',
        'images/bambi1.png',
        'images/bambi2.png',
        'images/bambi3.png'
    ];

    const totalStickers = 50; 

    for (let i = 0; i < totalStickers; i++) {
        const sticker = document.createElement('img');
        
        const randomSrc = stickerImages[Math.floor(Math.random() * stickerImages.length)];
        sticker.src = randomSrc;
        sticker.className = 'sticker';

        // 1. สุ่มเลือกว่าจะให้อยู่ "ฝั่งซ้าย" หรือ "ฝั่งขวา" ของหน้าจอ
        const isLeftInside = Math.random() < 0.5; 
        let randomLeft;

        if (isLeftInside) {
            // สุ่มพื้นที่ฝั่งซ้ายนอกกรอบ (ตั้งแต่ 1% ถึง 18% ของหน้าจอ)
            randomLeft = Math.floor(Math.random() * 20) + 1; 
        } else {
            // สุ่มพื้นที่ฝั่งขวานอกกรอบ (ตั้งแต่ 82% ถึง 95% ของหน้าจอ)
            randomLeft = Math.floor(Math.random() * 10) + 82; 
        }

        // 2. ตั้งค่าตำแหน่งความสูงและเอฟเฟกต์อื่นๆ เหมือนเดิม
        const randomTop = Math.floor(Math.random() * 5000) + 50; 
        const randomRotate = Math.floor(Math.random() * 60) - 30; 
        const randomSize = Math.floor(Math.random() * 40) + 60; 

        sticker.style.top = `${randomTop}px`;
        sticker.style.left = `${randomLeft}%`;
        sticker.style.transform = `rotate(${randomRotate}deg)`;
        sticker.style.width = `${randomSize}px`;

        document.body.appendChild(sticker);
    }
});
