let deftitle = document.title;
const faviinput = document.getElementById('favi-input');
const titleinput = document.getElementById('title-input');

function savechanges(state) {
    localStorage.setItem('cloakState', JSON.stringify(state));
}

function loadchanges() {
    const state = localStorage.getItem('cloakState');
    return state ? JSON.parse(state) : {};
}

function redircloak(title, favicon) {
    let inFrame;
    
    try {
        inFrame = window !== top;
    } catch (e) {
        inFrame = true;
    }

    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
        const popup = window.open("about:blank", "_blank");

        if (!popup || popup.closed) {
        } else {
            const doc = popup.document;

            doc.title = title;

            const link = doc.createElement("link");
            link.rel = "icon";
            link.href = favicon;
            doc.head.appendChild(link);

            const iframe = doc.createElement("iframe");
            const style = iframe.style;
            iframe.src = location.href;
            style.position = "fixed";
            style.top = style.bottom = style.left = style.right = 0;
            style.border = style.outline = "none";
            style.width = style.height = "100%";

            doc.body.appendChild(iframe);

            location.replace("https://www.google.com");
        }
    }
}

function ab() {
    redircloak("about:blank", "/images/cloak/about-blank.png");
}

function cloak(state) {
    if (!deftitle) deftitle = document.title;
    document.title = state.title;
    var links = document.getElementsByTagName("link");
    for (var i = 0, len = links.length; i < len; i++) {
        var link = links[i];
        if (link.rel.toLowerCase() == "icon" || link.rel.toLowerCase() == "shortcut icon") {
            link.type = "image/x-icon";
            link.rel = "shortcut icon";
            link.href = state.favicon;
        }
    }
    savechanges(state);
}

function cloaknt() {
    cloak({
        title: "New Tab",
        favicon: navigator.userAgent.includes("CrOS") ? "/images/cloak/favi/new-tab-page.png" : "/images/cloak/favi/new-tab-chrome.png"
    });
}

function cloakab() {
    cloak({
        title: "about:blank",
        favicon: "/images/cloak/favi/about-blank.png"
    });
}

function cloakkhan() {
    cloak({
        title: "Dashboard | Khan Academy",
        favicon: "/images/cloak/favi/khan-academy.png"
    });
}

function cloakggle() {
    cloak({
        title: "Google",
        favicon: "/images/cloak/favi/google.png"
    });
}

function cloakschoology() {
    cloak({
        title: "Home | Schoology",
        favicon: "/images/cloak/favi/schoology.png"
    });
}

function cloakgclass() {
    cloak({
        title: "Home",
        favicon: "/images/cloak/favi/google-classroom.png"
    });
}

function cloakdgoc() {
    cloak({
        title: "Google Docs",
        favicon: "/images/cloak/favi/google-docs.png"
    });
}

function cloakgslide() {
    cloak({
        title: "Google Slides",
        iconUrl: "/images/cloak/favi/google-slides.png"
    });
}

function def() {
  var defa = "/images/cybriagames/favicon-circle.png";
  var link = document.querySelector("link[rel='icon']");

  if (deftitle) {
      document.title = deftitle;
  }

  var link = document.querySelector("link[rel='icon']") || document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "icon";
  link.href = defa;

  if (!document.querySelector("link[rel='icon']")) {
      document.head.appendChild(link);
  }
savechanges({
    title: deftitle,
    favicon: defa
   });
}

function customfavi(url) {
    if (!url.startsWith('https://')) {
        alert('Make sure it\'s a URL');
        return;
    }

    let img = new Image();
    img.onload = function() {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = url;
    };
    img.onerror = function() {
        alert('Your URL is not an image.');
    };
    img.src = url;
}

function customtitle(custom_title) {
    if (!deftitle) deftitle = document.title;
    document.title = custom_title;
    savechanges({
        title: custom_title,
        favicon: localStorage.getItem('favicon') || '/images/cybriagames/favicon-circle.png'
    });
}

window.addEventListener('load', function() {
    const state = loadchanges();
    if (state.title && state.favicon) {
        cloak(state);
    }
});

faviinput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const url = faviinput.value;
        if (url) {
            customfavi(url);
        }
    }
});

titleinput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const custom_title = titleinput.value;
        if (custom_title) {
            customtitle(custom_title);
        }
    }
});
