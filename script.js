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
    }).catch(err => console.log('Autoplay failed:', err));
});

function toggleMenu(open) {
    const menu = document.getElementById('menuItems');
    document.getElementById('menuBtn').style.opacity = open ? '0' : '1';
    menu.classList.toggle('show', open);
}

document.getElementById('menuBtn').addEventListener('click', () => {
    toggleMenu(!document.getElementById('menuItems').classList.contains('show'));
});

document.getElementById('playSoundBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const icon = document.getElementById('soundIcon');
    if (isPlaying) {
        audio.pause();
        icon.src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png';
    } else {
        audio.play();
        icon.src = 'https://cdn-icons-png.flaticon.com/512/727/727245.png';
    }
    isPlaying = !isPlaying;
});

document.querySelectorAll('.menu-items a').forEach(item => {
    item.addEventListener('click', function () {
        const span = this.querySelector('span');
        const originalColor = span.style.color;
        span.style.color = 'yellow';
        setTimeout(() => { span.style.color = originalColor || 'white'; }, 1500);
    });
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const title = product.querySelector('h2').textContent.toLowerCase();
        product.style.display = title.includes(query) ? '' : 'none';
    });
});

// swipe handling
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            toggleMenu(false);
        } else {
            toggleMenu(true);
        }
    }
}

// Language selector handling
document.getElementById('languageSelector').addEventListener('click', function(e) {
    e.preventDefault();
    const langList = document.getElementById('languageList');
    langList.classList.toggle('show');
});
