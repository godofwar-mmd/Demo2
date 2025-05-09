let audio = new Audio('ps2_startup.mp3');
audio.loop = true;
let isPlaying = false;

window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 4000);

    audio.play().then(() => {
        isPlaying = true;
        document.getElementById('soundIcon').src = 'https://cdn-icons-png.flaticon.com/512/727/727245.png';
    }).catch(err => {
        console.log('Autoplay failed:', err);
    });
});

function toggleMenu(open) {
    const menu = document.getElementById('menuItems');
    const btn = document.getElementById('menuBtn');
    if (open) {
        menu.classList.add('show');
        btn.style.opacity = '0';
    } else {
        menu.classList.remove('show');
        btn.style.opacity = '1';
    }
}

document.getElementById('menuBtn').addEventListener('click', () => {
    const menu = document.getElementById('menuItems');
    toggleMenu(!menu.classList.contains('show'));
});

document.getElementById('playSoundBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const soundIcon = document.getElementById('soundIcon');

    if (!isPlaying) {
        audio.play();
        soundIcon.src = 'https://cdn-icons-png.flaticon.com/512/727/727245.png';
        isPlaying = true;
    } else {
        audio.pause();
        soundIcon.src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png';
        isPlaying = false;
    }
});

// swipe detection
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    const menu = document.getElementById('menuItems');
    const isMenuOpen = menu.classList.contains('show');
    const swipeThreshold = 50; // فاصله حداقل برای تشخیص swipe

    if (touchStartX - touchEndX > swipeThreshold) {
        // کشیدن به چپ → باز شدن منو
        toggleMenu(true);
    }

    if (touchEndX - touchStartX > swipeThreshold && isMenuOpen) {
        // کشیدن به راست → بستن منو
        toggleMenu(false);
    }
}

document.querySelectorAll('.menu-items a').forEach(item => {
    item.addEventListener('click', function () {
        const span = this.querySelector('span');
        const originalColor = span.style.color;
        span.style.color = 'yellow';
        setTimeout(() => {
            span.style.color = originalColor || 'white';
        }, 1500); // 1500 میلی‌ثانیه = 1.5 ثانیه
    });
});
