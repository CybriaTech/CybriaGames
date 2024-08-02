document.addEventListener('DOMContentLoaded', () => {
    fetch('json/games.json')
        .then(response => response.json())
        .then(games => {
            const all_games = document.getElementById('all');
            games.forEach(game => {
                const game_button = document.createElement('div');
                game_button.className = 'game';

                const game_logo = document.createElement('img');
                game_logo.className = 'g-icon';
                game_logo.src = game.logo;
                game_logo.alt = game.title;

                const meta = document.createElement('div');
                meta.className = 'meta';

                const game_title = document.createElement('div');
                game_title.className = 'title';
                game_title.textContent = game.title;

                const creator = document.createElement('div');
                creator.className = 'creator';
                creator.textContent = `By: ${game.creator}`;

                meta.appendChild(game_title);
                meta.appendChild(creator);

                game_button.appendChild(game_logo);
                game_button.appendChild(meta);

                all_games.appendChild(game_button);
            });
        })
        .catch(error => console.error('Err:', error));
});
