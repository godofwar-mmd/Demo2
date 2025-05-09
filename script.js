window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 4000);
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

let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX - 50) {
        toggleMenu(true);
    }
    if (touchendX > touchstartX + 50) {
        toggleMenu(false);
    }
}

// Language selector
const langBtnMain = document.querySelector('.lang-btn-main');
const langDropdown = document.getElementById('langDropdown');

langBtnMain.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.style.display = (langDropdown.style.display === 'flex') ? 'none' : 'flex';
});

document.addEventListener('click', () => {
    langDropdown.style.display = 'none';
});

document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        const t = translations[lang];
        if (t) {
            document.querySelector('.text-home').innerText = t.home;
            document.querySelector('.text-products').innerText = t.products;
            document.querySelector('.text-contact').innerText = t.contact;
            document.querySelector('.text-telegram').innerText = t.telegram;
            document.querySelector('.text-youtube').innerText = t.youtube;
            document.querySelector('.text-selectGame').innerText = t.selectGame;
            document.querySelector('.text-game1').innerText = t.game1;
            document.querySelector('.text-game2').innerText = t.game2;
        }
        langDropdown.style.display = 'none';
    });
});
