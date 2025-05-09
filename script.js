document.getElementById('menuBtn').addEventListener('click', () => {
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('show');
});

document.getElementById('langIcon').addEventListener('click', (e) => {
    const menu = document.getElementById('langMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    e.stopPropagation();
});

document.addEventListener('click', () => {
    document.getElementById('langMenu').style.display = 'none';
});

function buildLangMenu() {
    const menu = document.getElementById('langMenu');
    Object.keys(translations).forEach(lang => {
        const div = document.createElement('div');
        div.className = 'lang-btn';
        div.setAttribute('data-lang', lang);
        div.innerHTML = `<img src="${translations[lang].flag}"> ${translations[lang].name}`;
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            applyTranslations(lang);
            menu.style.display = 'none';
        });
        menu.appendChild(div);
    });
}

function applyTranslations(lang) {
    document.querySelector('.text-home').innerText = translations[lang].home;
    document.querySelector('.text-products').innerText = translations[lang].products;
    document.querySelector('.text-contact').innerText = translations[lang].contact;
    document.querySelector('.text-telegram').innerText = translations[lang].telegram;
    document.querySelector('.text-youtube').innerText = translations[lang].youtube;
    document.querySelector('.text-selectGame').innerText = translations[lang].selectGame;
    document.querySelector('.text-game1').innerText = translations[lang].game1;
    document.querySelector('.text-game2').innerText = translations[lang].game2;
}

buildLangMenu();
