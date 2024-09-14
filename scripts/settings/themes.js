document.addEventListener('DOMContentLoaded', function() {
    applyls();

    document.document.getElementById("mode").addEventListener("change", function() {
        const svalue = this.value;
        if (svalue === "Light") {
            lightmode();
            localStorage.setItem('theme', 'light');
        } else if (svalue === "Dark") {
            darkmode();
            localStorage.setItem('theme', 'dark');
        }
    });
});

function lightmode() {
  var body = document.body;
  var logo = document.querySelector('.header-img');
  var homelogo = document.querySelector('.title-img');
  var currenttheme = body.dataset.theme || 'light';
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
    
  body.dataset.theme = 'light';

  if (logo) {
    logo.src = '/images/cybriagames/logo-name2half-lightmode.png';
  }
  if (homelogo) {
    homelogo.src = '/images/cybriagames/logo-name2half-lightmode.png';
  }

  body.classList.toggle('light-mode');
  header.classList.add('light-mode');
  footer.classList.add('light-mode');
  localStorage.setItem('theme', 'light');
  updateselect('Light');
}

function darkmode() {
  var body = document.body;
  var logo = document.querySelector('.header-img');
  var homelogo = document.querySelector('.title-img');
  var currenttheme = body.dataset.theme || 'dark';
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
    
  body.dataset.theme = 'dark';
    
  if (logo) {
    logo.src = '/images/cybriagames/logo-name2half.png';
  }
  if (homelogo) {
    homelogo.src = '/images/cybriagames/logo-name2half.png';
  }

  body.classList.remove('light-mode');
  header.classList.remove('light-mode');
  footer.classList.remove('light-mode');
  localStorage.removeItem('theme', 'light');
  document.document.getElementById("mode").value = 'Dark';
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
    const savedmode = localStorage.getItem('theme');
    if (savedmode === 'light') {
        lightmode();
        localStorage.setItem('theme', 'light');
    } else if (savedmode === 'dark') {
        darkmode();
    } else {
        darkmode();
    }
}

function hextorbgconvert(hex) {
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

function addbgcolor(selectedbgcolor) {
    document.body.style.backgroundColor = selectedbgcolor;

    const custombgitems = ['#header', '#footer', '#settings-box', '.settings-input-box', '.sidebar-btn'];
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
});
