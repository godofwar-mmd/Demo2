window.addEventListener('load', function() {
    setTimeout(() => document.getElementById('loading').style.display = 'none', 4000);
});

const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');

menuBtn.addEventListener('click', () => menuItems.classList.toggle('show'));
langBtn.addEventListener('click', e => {
    e.stopPropagation();
    langMenu.classList.toggle('show');
});
document.addEventListener('click', () => langMenu.classList.remove('show'));

const translations = {
    fa: { home: "خانه", products: "محصولات", contact: "ارتباط با ما", telegram: "تلگرام", youtube: "یوتیوب", instagram: "اینستاگرام", twitter: "توییتر", selectGame: "انتخاب بازی", game1: "خدای جنگ ۲", game2: "رزیدنت اویل ۴" },
    en: { home: "Home", products: "Products", contact: "Contact Us", telegram: "Telegram", youtube: "YouTube", instagram: "Instagram", twitter: "Twitter", selectGame: "Select Game", game1: "God of War 2", game2: "Resident Evil 4" },
    fr: { home: "Accueil", products: "Produits", contact: "Contactez-nous", telegram: "Telegram", youtube: "YouTube", instagram: "Instagram", twitter: "Twitter", selectGame: "Choisir un jeu", game1: "Dieu de la guerre 2", game2: "Resident Evil 4" },
    de: { home: "Startseite", products: "Produkte", contact: "Kontakt", telegram: "Telegram", youtube: "YouTube", instagram: "Instagram", twitter: "Twitter", selectGame: "Spiel auswählen", game1: "God of War 2", game2: "Resident Evil 4" },
    es: { home: "Inicio", products: "Productos", contact: "Contáctanos", telegram: "Telegram", youtube: "YouTube", instagram: "Instagram", twitter: "Twitter", selectGame: "Seleccionar juego", game1: "God of War 2", game2: "Resident Evil 4" },
    ru: { home: "Главная", products: "Продукты", contact: "Связаться с нами", telegram: "Телеграм", youtube: "Ютуб", instagram: "Инстаграм", twitter: "Твиттер", selectGame: "Выбор игры", game1: "God of War 2", game2: "Resident Evil 4" },
    cn: { home: "首页", products: "产品", contact: "联系我们", telegram: "电报", youtube: "油管", instagram: "Instagram", twitter: "Twitter", selectGame: "选择游戏", game1: "战神2", game2: "生化危机4" },
    ar: { home: "الرئيسية", products: "المنتجات", contact: "اتصل بنا", telegram: "تيليجرام", youtube: "يوتيوب", instagram: "انستغرام", twitter: "تويتر", selectGame: "اختيار اللعبة", game1: "إله الحرب 2", game2: "ريزدنت إيفل 4" }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const lang = btn.dataset.lang;
        document.querySelector('.text-home').innerText = translations[lang].home;
        document.querySelector('.text-products').innerText = translations[lang].products;
        document.querySelector('.text-contact').innerText = translations[lang].contact;
        document.querySelector('.text-telegram').innerText = translations[lang].telegram;
        document.querySelector('.text-youtube').innerText = translations[lang].youtube;
        document.querySelector('.text-instagram').innerText = translations[lang].instagram;
        document.querySelector('.text-twitter').innerText = translations[lang].twitter;
        document.querySelector('.text-selectGame').innerText = translations[lang].selectGame;
        document.querySelector('.text-game1').innerText = translations[lang].game1;
        document.querySelector('.text-game2').innerText = translations[lang].game2;
    });
});
