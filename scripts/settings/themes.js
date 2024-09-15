document.addEventListener('DOMContentLoaded', function() {
    applyls();

    document.getElementById("mode").addEventListener("change", function() {
        const mode = this.value;
        setmode(mode);
    });

    document.getElementById("theme").addEventListener("change", function() {
        const theme = this.value;
        settheme(theme);
    });
});

function applyls() {
    const savedmode = localStorage.getItem('mode') || 'light';
    const savedtheme = localStorage.getItem('theme') || 'Default';
    setmode(savedmode);
    settheme(savedtheme);
}

function setmode(mode) {
    const body = document.body;
    const logo = document.querySelector('.header-img');
    const homelogo = document.querySelector('.title-img');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    body.classList.remove('light-mode', 'dark-mode');
    header.classList.remove('light-mode', 'dark-mode');
    footer.classList.remove('light-mode', 'dark-mode');

    body.dataset.mode = mode;

    if (mode === 'Light') {
        body.classList.add('light-mode');
        header.classList.add('light-mode');
        footer.classList.add('light-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half-lightmode.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half-lightmode.png';
    } else if (mode === 'Dark') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half.png';
    }

    localStorage.setItem('mode', mode);
    document.getElementById("mode").value = mode;
}

function settheme(theme) {
    const body = document.body;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    body.classList.remove('selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    header.classList.remove('selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    footer.classList.remove('selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');

    if (theme === 'Selenite') {
        body.classList.add('selenite-mode');
        header.classList.add('selenite-mode');
        footer.classList.add('selenite-mode');
    }

    localStorage.setItem('theme', theme);
    document.getElementById("theme").value = theme;
}

function reverts() {
    setmode('Light');
    settheme('Default');
}

