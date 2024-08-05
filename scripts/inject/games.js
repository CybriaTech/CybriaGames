document.addEventListener('DOMContentLoaded', function() {
    gamegen();
});

function gamegen() {
    fetch('/json/games.json')
    .then(response => response.json())
    .then(data => {
        const allsec = document.getElementById('all');
        const injected = new Set();
        data.forEach(game => {
            if (game.tags && game.tags.length > 0) {
                game.tags.forEach(tag => {
                    if (categoryDiv && !injected.has(game.title)) {
                        const gamebtn = document.createElement('div');
                        gamebtn.classList.add('game');
                        gamebtn.innerHTML = `
                        <div class="game">
                            <img class="g-icon" src="${game.logo}" alt="${game.title}">
                            <div class="meta">
                                <div class="title">${game.title}</div>
                                <div class="creator">By: ${game.creator}</div>
                            </div>
                        </div>
                        `;
                        allsec.appendChild(gamebtn);
                        injected.add(game.title);
                    }
                });
            }
        });
    })
    .catch(error => {
        console.error('404:', error);
    });
}
