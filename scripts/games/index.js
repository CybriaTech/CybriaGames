function full() {
    const gameframe = document.getElementById('frame');

    if (!document.fullscreenElement) {
        if (gameframe.requestFullscreen) {
            gameframe.requestFullscreen();
        } else if (gameframe.mozRequestFullScreen) {
            gameframe.mozRequestFullScreen();
        } else if (gameframe.webkitRequestFullscreen) {
            gameframe.webkitRequestFullscreen();
        } else if (gameframe.msRequestFullscreen) {
            gameframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const openPopupBtn = document.getElementById('embed');
  const closePopupBtn = document.getElementById('close');
  const popupContainer = document.getElementById('embed-screen');

  openPopupBtn.addEventListener('click', function () {
    popupContainer.style.display = 'flex';
  });

  closePopupBtn.addEventListener('click', function () {
    popupContainer.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var gamepage = window.location.origin;
    
    var embedbar = document.getElementById("embed-code");
    
    if(embedbar) {
        var iframelink = gamepage; // for later
        
        var iframe = '<iframe src="' + iframelink + '" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';

        embedbar.value = iframe;
    }
});

function copy() {
  var copytxt = document.getElementById("embed-code");
  copytxt.select();
  document.execCommand("copy");

  var cbtn = document.getElementById("copy-btn");
  cbtn.innerHTML = '<svg class="embed-fa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';

  setTimeout(function() {
    cbtn.innerHTML = '<svg class="embed-fa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg>';
  }, 1000);
}

function like() {
  const likes = document.querySelector('.like-amount');
  likes.textContent = parseInt(likes.textContent) + 1;
}

function dislike() {
  const dislike = document.querySelector('.dislike-amount');
  dislike.textContent = parseInt(dislike.textContent) + 1;
}
