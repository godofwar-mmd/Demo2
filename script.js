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

// Search functionality in menu
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const title = product.querySelector('h2').textContent.toLowerCase();
        product.style.display = title.includes(query) ? '' : 'none';
    });
});

// Swipe handling
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

// Language selector with flags
const translations = {
    "fa": { name: "فارسی", flag: "https://flagcdn.com/w40/ir.png" },
    "en": { name: "English", flag: "https://flagcdn.com/w40/gb.png" },
    "ar": { name: "العربية", flag: "https://flagcdn.com/w40/sa.png" },
    "fr": { name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
    "de": { name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
    "ru": { name: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
    "zh": { name: "中文", flag: "https://flagcdn.com/w40/cn.png" }
};

const languageSelector = document.getElementById('languageSelector');
const languageList = document.getElementById('languageList');

languageSelector.addEventListener('click', function(e) {
    e.preventDefault();
    languageList.classList.toggle('show');
});

Object.entries(translations).forEach(([key, { name, flag }]) => {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${flag}" alt="${name}"><span>${name}</span>`;
    div.addEventListener('click', () => changeLanguage(key));
    languageList.appendChild(div);
});

function changeLanguage(lang) {
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.text-home').textContent = data[lang].home;
            document.querySelector('.text-products').textContent = data[lang].products;
            document.querySelector('.text-selectGame').textContent = data[lang].selectGame;
            document.querySelector('.text-game1').textContent = data[lang].game1;
            document.querySelector('.text-game2').textContent = data[lang].game2;
            document.querySelector('.text-telegram').textContent = data[lang].telegram;
            document.querySelector('.text-youtube').textContent = data[lang].youtube;
            languageList.classList.remove('show');
        });
           }
