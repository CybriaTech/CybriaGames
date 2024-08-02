document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/games.json')
        .then(response => response.json())
        .then(games => {
            const all_games = document.getElementById('all');
            games.forEach(game => {
                const game_button = document.createElement('div');
                game_button.className = 'game';

                const game_logo = document.createElement('game_logo');
                game_logo.className = 'g-icon';
                game_logo.src = game.logo;
                game_logo.alt = game.title;

                const meta = document.createElement('div');
                meta.className = 'meta';

                const title = document.createElement('div');
                title.className = 'title';
                title.textContent = game.title;

                const creator = document.createElement('div');
                creator.className = 'creator';
                creator.textContent = `By: ${game.creator}`;

                meta.appendChild(title);
                meta.appendChild(creator);

                game_button.appendChild(game_logo);
                game_button.appendChild(meta);

                all_games.appendChild(game_button);
            });
        })
        .catch(error => console.error(error));
});
