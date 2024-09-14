document.addEventListener('DOMContentLoaded', function() {
    applyls();

    document.document.getElementById("mode").addEventListener("change", function() {
        const svalue = this.value;
        if (svalue === "Light") {
            lightmode();
            localStorage.setItem('theme', 'light');
        } else if (svalue === "Dark") {
            darkmode();
        }
    });
});

function lightmode() {
  var body = document.body;
  var logo = document.querySelector('.header-img');
  var currenttheme = body.dataset.theme || 'light';
    
  body.dataset.theme = 'light';
  logo.src = '/images/cybriagames/logo-name2half-lightmode.png';

  body.classList.toggle('light-mode');
  header.classList.add('light-mode');
  footer.classList.add('light-mode');
  localStorage.setItem('theme', 'light');
  updateselect('Light');
}

function darkmode() {
  var body = document.body;
  var logo = document.querySelector('.header-img', '.title-img');
  var currenttheme = body.dataset.theme || 'dark';
    
  body.dataset.theme = 'dark';
  logo.src = '/images/cybriagames/logo-name2half.png';

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
