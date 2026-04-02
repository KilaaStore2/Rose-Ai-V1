// Smooth Scrolling untuk link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Abaikan jika cuma '#'

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset untuk header tetap
                behavior: 'smooth'
            });
        }
    });
});

// Efek pop-up sederhana saat tombol demo diklik
const demoBtn = document.querySelector('.btn-demo');
const startBtn = document.querySelector('.btn-primary');

[demoBtn, startBtn].forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Terima kasih atas ketertarikan Anda pada Rose AI V1! \n\nIni adalah halaman demo. Integrasi AI yang sesungguhnya memerlukan backend server.");
    });
});
