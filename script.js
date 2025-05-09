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

const translations = {
    fa: { home: "خانه", products: "محصولات", contact: "ارتباط با ما", telegram: "تلگرام", youtube: "یوتیوب", selectGame: "انتخاب بازی", game1: "خدای جنگ ۲", game2: "رزیدنت اویل ۴" },
    en: { home: "Home", products: "Products", contact: "Contact Us", telegram: "Telegram", youtube: "YouTube", selectGame: "Select Game", game1: "God of War 2", game2: "Resident Evil 4" },
    fr: { home: "Accueil", products: "Produits", contact: "Contactez-nous", telegram: "Telegram", youtube: "YouTube", selectGame: "Choisir un jeu", game1: "Dieu de la guerre 2", game2: "Resident Evil 4" },
    de: { home: "Startseite", products: "Produkte", contact: "Kontakt", telegram: "Telegram", youtube: "YouTube", selectGame: "Spiel auswählen", game1: "God of War 2", game2: "Resident Evil 4" },
    es: { home: "Inicio", products: "Productos", contact: "Contáctanos", telegram: "Telegram", youtube: "YouTube", selectGame: "Seleccionar juego", game1: "God of War 2", game2: "Resident Evil 4" },
    ru: { home: "Главная", products: "Продукты", contact: "Связаться с нами", telegram: "Телеграм", youtube: "Ютуб", selectGame: "Выбор игры", game1: "God of War 2", game2: "Resident Evil 4" },
    cn: { home: "首页", products: "产品", contact: "联系我们", telegram: "电报", youtube: "油管", selectGame: "选择游戏", game1: "战神2", game2: "生化危机4" }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        document.querySelector('.text-home').innerText = translations[lang].home;
        document.querySelector('.text-products').innerText = translations[lang].products;
        document.querySelector('.text-contact').innerText = translations[lang].contact;
        document.querySelector('.text-telegram').innerText = translations[lang].telegram;
        document.querySelector('.text-youtube').innerText = translations[lang].youtube;
        document.querySelector('.text-selectGame').innerText = translations[lang].selectGame;
        document.querySelector('.text-game1').innerText = translations[lang].game1;
        document.querySelector('.text-game2').innerText = translations[lang].game2;
    });
});
