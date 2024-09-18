document.addEventListener('DOMContentLoaded', function() {
    applyls();

    document.getElementById("theme").addEventListener("change", function() {
        const theme = this.value;
        settheme(theme);
    });
});

function applyls() {
    const savedtheme = localStorage.getItem('theme') || 'Default';
    settheme(savedtheme);
    const savedparticle = localStorage.getItem('particles') || 'Default';
    settheme(savedparticle);
}

function settheme(theme) {
    const body = document.body;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const logo = document.querySelector('.header-img');
    const homelogo = document.querySelector('.title-img');

    body.classList.remove('light-mode', 'dark-mode');
    header.classList.remove('light-mode', 'dark-mode');
    footer.classList.remove('light-mode', 'dark-mode');

    body.dataset.theme = theme;

    body.classList.remove('selenite-mode', 'light-mode', 'ugly-mode', 'space-mode');
    header.classList.remove('selenite-mode', 'light-mode', 'ugly-mode', 'space-mode');
    footer.classList.remove('selenite-mode', 'light-mode', 'ugly-mode', 'space-mode');

    const spacemode = document.getElementById('space-particles');
    if (spacemode) {
        spacemode.innerHTML = '';
    }

    if (theme === 'Selenite') {
        body.classList.add('selenite-mode');
        header.classList.add('selenite-mode');
        footer.classList.add('selenite-mode');
    } else if (theme === 'Ugly') {
        body.classList.add('ugly-mode');
        header.classList.add('ugly-mode');
        footer.classList.add('ugly-mode');
    } else if (theme === 'Space') {
        body.classList.add('space-mode');
        header.classList.add('space-mode');
        footer.classList.add('space-mode');
        spaceparticle();
    } else if (theme === 'Light') {
        body.classList.add('light-mode');
        header.classList.add('light-mode');
        footer.classList.add('light-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half-lightmode.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half-lightmode.png';
    } else if (theme === 'Dark') {
        body.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'ugly-mode', 'space-mode');
        header.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'ugly-mode', 'space-mode');
        footer.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'ugly-mode', 'space-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half.png';
    } else if (theme === 'Flames') {
        body.classList.add('flames-mode');
        header.classList.add('flames-mode');
        footer.classList.add('flames-mode');
    } else if (theme === 'Oceans') {
        body.classList.add('oceans-mode');
        header.classList.add('oceans-mode');
        footer.classList.add('oceans-mode');
    }

    localStorage.setItem('theme', theme);
    document.getElementById("theme").value = theme;
}

function spaceparticle() {
particlesJS("space-particles", {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
}

function reverts() {
    settheme('Default');
}

function clearparticles() {
    const particlesarea = document.getElementById('particles-js');
    if (particlesarea) {
        particlesarea.innerHTML = '';
    }
}

function setparticles(particle) {
    body.dataset.particles = particles;

    clearparticles();

    if (particles === 'None') {
        localStorage.setItem('particles');
        clearparticles();
    } else if (particles === 'Graphs') {
        clearparticles();
   particlesJS('particles-js', {
     particles: {
       number: { value: 80, density: { enable: true, value_area: 800 } },
       color: { value: '#ffffff' },
       shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
       opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
       size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
       line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
       move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'bounce', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
     },
     interactivity: {
       detect_on: 'canvas',
       events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
       modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
     },
     retina_detect: true
   });
    } else if (particles === 'Bubble') {
        
    } else if (particles === 'Snow') {
        
    }

    localStorage.setItem('particles', particles);
    document.getElementById("particles").value = particles;
}


