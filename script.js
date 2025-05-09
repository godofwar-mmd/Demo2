window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loading').style.display = 'none', 4000);
});

const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');
menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});

const langBtn = document.getElementById('languageBtn');
const langDropdown = document.getElementById('languageDropdown');
langBtn.addEventListener('click', e => {
    e.preventDefault();
    langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', e => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.style.display = 'none';
    }
});

const translations = {
    fa: {
        home: "خانه",
        products: "محصولات",
        contact: "ارتباط با ما",
        telegram: "تلگرام",
        youtube: "یوتیوب",
        selectGame: "انتخاب بازی",
        game1: "خدای جنگ ۲",
        game2: "رزیدنت اویل ۴"
    },
    en: {
        home: "Home",
        products: "Products",
        contact: "Contact Us",
        telegram: "Telegram",
        youtube: "YouTube",
        selectGame: "Select Game",
        game1: "God of War 2",
        game2: "Resident Evil 4"
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        contact: "اتصل بنا",
        telegram: "تيليجرام",
        youtube: "يوتيوب",
        selectGame: "اختر لعبة",
        game1: "إله الحرب 2",
        game2: "ريزدنت إيفل 4"
    },
    fr: {
        home: "Accueil",
        products: "Produits",
        contact: "Contactez-nous",
        telegram: "Telegram",
        youtube: "YouTube",
        selectGame: "Choisir un jeu",
        game1: "Dieu de la guerre 2",
        game2: "Resident Evil 4"
    }
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
        langDropdown.style.display = 'none';
    });
});
