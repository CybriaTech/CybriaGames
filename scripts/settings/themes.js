document.addEventListener('DOMContentLoaded', function() {
    applyls();
    applytheme();

    document.getElementById("mode").addEventListener("change", function () {
        const svalue = this.value;
        if (svalue === "Light") {
            lightmode();
        } else if (svalue === "Dark") {
            darkmode();
        }
    });

    document.getElementById("theme").addEventListener("change", function () {
        const tvalue = this.value;
        if (tvalue === "Selenite") {
            selenite();
        } else if (tvalue === "Default") {
            themedef();
        }
    });
});

function lightmode() {
  var body = document.body;
  var logo = document.querySelector('.header-img');
  var homelogo = document.querySelector('.title-img');
  var currenttheme = body.dataset.mode || 'light';
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
    
  body.dataset.mode = 'light';

  if (logo) {
    logo.src = '/images/cybriagames/logo-name2half-lightmode.png';
  }
  if (homelogo) {
    homelogo.src = '/images/cybriagames/logo-name2half-lightmode.png';
  }

  body.classList.toggle('light-mode');
  header.classList.add('light-mode');
  footer.classList.add('light-mode');
  localStorage.setItem('mode', 'light');
  updateselect('Light');
}

function darkmode() {
  var body = document.body;
  var logo = document.querySelector('.header-img');
  var homelogo = document.querySelector('.title-img');
  var currenttheme = body.dataset.mode || 'dark';
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
    
  body.dataset.mode = 'dark';
    
  if (logo) {
    logo.src = '/images/cybriagames/logo-name2half.png';
  }
  if (homelogo) {
    homelogo.src = '/images/cybriagames/logo-name2half.png';
  }

  body.classList.remove('light-mode');
  header.classList.remove('light-mode');
  footer.classList.remove('light-mode');
  localStorage.removeItem('mode', 'light');
  document.getElementById("mode").value = 'Dark';
  updateselect('Dark');
}

function changemode() {
    var selector = document.getElementById("mode").value;
    if (selector === "Light") {
        lightmode();
    } else if (selector === "Dark") {
        darkmode();
    }
}

function updateselect(value) {
    document.getElementById("mode").value = value;
}

function applyls() {
    const selectsettings = document.getElementById("mode");
    const savedmode = localStorage.getItem('mode');
    if (savedmode === 'light') {
        lightmode();
        localStorage.setItem('mode', 'light');
    } else if (savedmode === 'dark') {
        darkmode();
    } else {
        darkmode();
    }
}

/* function hextorbgconvert(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { r, g, b };
}

function rbgtohexconvert(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function adjustrbghex(rgb, adjustment) {
    return {
        r: Math.min(Math.max(rgb.r + adjustment, 0), 255),
        g: Math.min(Math.max(rgb.g + adjustment, 0), 255),
        b: Math.min(Math.max(rgb.b + adjustment, 0), 255)
    };
}

function calcbright(r, g, b) {
    return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
}

function addboxshadow(bgcolor) {
    const boxshadowstuff = ['#header', '#footer'];
    const rgb = hextorbgconvert(bgcolor);
    const brightness = calcbright(rgb.r, rgb.g, rgb.b);

    const boxshadowcolor = brightness > 128 ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)';
    
    boxshadowstuff.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
        el.style.boxShadow = `0 0 7px ${boxshadowcolor}`;
        });
    });
}

function addbgcolor(selectedbgcolor) {
    document.body.style.backgroundColor = selectedbgcolor;

    const custombgitems = ['#header', '#footer', '#settings-box', '.settings-input-box', '.sidebar-btn', '#ab-cloak'];
    custombgitems.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach(el => {
            el.style.backgroundColor = selectedbgcolor;
        });
    });

    const custombglightitems = ['#colorpickerbg', '#colorpickertxt', '.settings-input', '.select-settings'];
    const rbghex = hextorbgconvert(selectedbgcolor);
    const subtractioncolor = adjustrbghex(rbghex, -24);
    const outputsubtractedrbg = rbgtohexconvert(subtractioncolor.r, subtractioncolor.g, subtractioncolor.b);

    custombglightitems.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach(el => {
            el.style.backgroundColor = outputsubtractedrbg;
        });
    });
}

function savetols(color) {
    localStorage.setItem('custombgcolor', color);
}

function loadcustomls() {
    const savedbg = localStorage.getItem('custombgcolor');
    if (savedbg) {
        document.getElementById('color_picker_bg').value = savedbg;
        document.getElementById('colorhex_bg').textContent = savedbg;
        addbgcolor(savedbg);
    }
}

document.getElementById('color_picker_bg').addEventListener('input', function() {
    const selectedbgcolor = this.value;
    document.getElementById('colorhex_bg').textContent = selectedbgcolor;

    addbgcolor(selectedbgcolor);

    savetols(selectedbgcolor);
});

document.addEventListener('DOMContentLoaded', function() {
    loadcustomls();
}); */

function themedef() {
    localStorage.removeItem('mode', 'light');
    window.location.reload();
}

function selenite() {
  var body = document.body;
  var logo = document.querySelector('.header-img');
  var homelogo = document.querySelector('.title-img');
  var currenttheme = body.dataset.theme || 'selenite';
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
    
  body.dataset.theme = 'selenite';

  body.classList.remove('light-mode', 'dark-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
  header.classList.remove('light-mode', 'dark-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
  footer.classList.remove('light-mode', 'dark-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
  body.classList.add('selenite-mode');
  header.classList.add('selenite-mode');
  footer.classList.add('selenite-mode');
  document.document.getElementById("theme").value = 'Selenite';
  localStorage.setItem('theme', 'selenite');
  updatetheme('Selenite');
}

function themedef() {
    var body = document.body;
    var logo = document.querySelector('.header-img');
    var homelogo = document.querySelector('.title-img');
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    window.location.reload();

    body.classList.remove('selenite-mode', 'light-mode', 'dark-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    header.classList.remove('selenite-mode', 'light-mode', 'dark-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    footer.classList.remove('selenite-mode', 'light-mode', 'dark-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    
    localStorage.removeItem('theme');
    document.getElementById("theme").value = 'Default';
}


function updatetheme(value) {
    document.getElementById("theme").value = value;
}

function changetheme() {
    var selector = document.getElementById("theme").value;
    if (selector === "Default") {
    } else if (selector === "Selenite") {
        selenite();
    }
}

function applytheme() {
    const themesettings = document.getElementById("theme");
    const savedtheme = localStorage.getItem('theme');
    if (savedtheme === 'selenite') {
        selenite();
        localStorage.setItem('theme', 'selenite');
    } else {
        themedef();
    }
}
