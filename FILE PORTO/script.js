// Efek Lampu Senter / Cursor Spotlight Berjalan Mengikuti Mouse
const spotlight = document.querySelector('.cursor-spotlight');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX + 'px';
    const y = e.clientY + 'px';
    
    spotlight.style.setProperty('--x', x);
    spotlight.style.setProperty('--y', y);
});

// Interaksi Tambahan: Log Sambutan Mewah di Konsol Browser
console.log(
    "%c Portfolio Minimalis & Mewah Aktif ",
    "background: #111; color: #fff; padding: 6px 12px; border-radius: 4px; font-weight: bold;"
);