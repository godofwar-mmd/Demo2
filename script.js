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

let translations = {};

fetch('translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        console.log('Translations loaded');
    });

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        if (translations[lang]) {
            document.querySelector('.text-home').innerText = translations[lang].home;
            document.querySelector('.text-products').innerText = translations[lang].products;
            document.querySelector('.text-contact').innerText = translations[lang].contact;
            document.querySelector('.text-telegram').innerText = translations[lang].telegram;
            document.querySelector('.text-youtube').innerText = translations[lang].youtube;
            document.querySelector('.text-selectGame').innerText = translations[lang].selectGame;
            document.querySelector('.text-game1').innerText = translations[lang].game1;
            document.querySelector('.text-game2').innerText = translations[lang].game2;
            langDropdown.style.display = 'none';
        }
    });
});
