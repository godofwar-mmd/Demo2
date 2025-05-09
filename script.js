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
    isPlaying ? audio.pause() : audio.play();
    icon.src = isPlaying ? 'https://cdn-icons-png.flaticon.com/512/727/727269.png' : 'https://cdn-icons-png.flaticon.com/512/727/727245.png';
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

// Language selector
const flags = {
    fa: 'https://flagcdn.com/w40/ir.png',
    en: 'https://flagcdn.com/w40/us.png',
    ar: 'https://flagcdn.com/w40/sa.png',
    fr: 'https://flagcdn.com/w40/fr.png'
};

fetch('translation.json')
.then(res => res.json())
.then(translations => {
    const langList = document.getElementById('languageList');
    for (let code in translations) {
        const langDiv = document.createElement('div');
        langDiv.innerHTML = `<img src="${flags[code] || ''}"><span>${code.toUpperCase()}</span>`;
        langDiv.addEventListener('click', () => applyTranslation(translations[code]));
        langList.appendChild(langDiv);
    }
});

function applyTranslation(data) {
    document.querySelector('.text-home').textContent = data.home;
    document.querySelector('.text-products').textContent = data.products;
    document.querySelector('.text-selectGame').textContent = data.selectGame;
    document.querySelector('.text-game1').textContent = data.game1;
    document.querySelector('.text-game2').textContent = data.game2;
    document.querySelector('#languageSelector span').textContent = 'انتخاب زبان';
    document.querySelector('a[href*="telegram"] span').textContent = data.telegram;
    document.querySelector('a[href*="youtube"] span').textContent = data.youtube;
}

document.getElementById('languageSelector').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('languageList').classList.toggle('show');
});
