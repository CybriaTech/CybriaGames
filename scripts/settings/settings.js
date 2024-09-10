function redircloak(title, iconUrl) {
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
            link.href = iconUrl;
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

function cloaknt() {
  document.title = "New Tab";
  var links = document.getElementsByTagName("link");
  var chromeosua = navigator.userAgent.includes("CrOS");
  for (var i = 0, len = links.length; i < len; i++) {
    var link = links[i];
    if (link.rel.toLowerCase() == "icon" || link.rel.toLowerCase() == "shortcut icon") {
      link.type = "image/x-icon";
      link.rel = "shortcut icon";

      if (chromeosua) {
        link.href = "/images/cloak/favi/new-tab-page.png";
      } else {
        link.href = "/images/cloak/favi/new-tab-chrome.png";
      }

      if (!document.querySelector("link[rel='icon']")) {
          document.head.appendChild(link);
      }
    }
  }
}
