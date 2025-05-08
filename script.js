const translations = {
    'fa': { home: 'خانه', products: 'محصولات', selectGame: 'انتخاب بازی', moreInfo: 'دیدن اطلاعات بیشتر' },
    'en': { home: 'Home', products: 'Products', selectGame: 'Select Game', moreInfo: 'See More Info' },
    'fr': { home: 'Accueil', products: 'Produits', selectGame: 'Sélectionner un jeu', moreInfo: 'Voir plus d\'infos' },
    'es': { home: 'Inicio', products: 'Productos', selectGame: 'Seleccionar juego', moreInfo: 'Ver más info' },
    'de': { home: 'Startseite', products: 'Produkte', selectGame: 'Spiel auswählen', moreInfo: 'Mehr Infos' },
    'it': { home: 'Home', products: 'Prodotti', selectGame: 'Seleziona gioco', moreInfo: 'Vedi più info' },
    'ru': { home: 'Главная', products: 'Продукты', selectGame: 'Выбрать игру', moreInfo: 'Подробнее' }
};

const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');

menuBtn.addEventListener('click', () => {
    if (menuItems.style.right === '0%') {
        menuItems.style.right = '-60%';
    } else {
        menuItems.style.right = '0%';
    }
});

languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-dropdown') && !e.target.closest('#languageBtn')) {
        languageDropdown.style.display = 'none';
    }
});

document.querySelectorAll('.language-dropdown a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks[0].innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"> ${translations[lang].home}`;
    menuLinks[1].innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/891/891419.png"> ${translations[lang].products}`;
    document.querySelector('#products h1').innerText = translations[lang].selectGame;
    document.querySelectorAll('.info-btn').forEach(btn => btn.innerText = translations[lang].moreInfo);
}