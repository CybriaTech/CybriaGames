async function inject() {
    try {
        const response = await fetch('/json/games.json');
        const games = await response.json();

        const allsec = document.getElementById('all');

        games.forEach(game => {
            const gamebtn = document.createElement('div');
            gamebtn.classList.add('game');

            const img = document.createElement('img');
            img.classList.add('g-icon');
            img.src = game.logo;
            img.alt = game.title;

            const metaspin = document.createElement('div');
            metaspin.classList.add('meta');

            const titlesec = document.createElement('div');
            titlesec.classList.add('title');
            titlesec.textContent = game.title;

            const creatorsec = document.createElement('div');
            creatorsec.classList.add('creator');
            creatorsec.textContent = `By: ${game.creator}`;

            metaspin.appendChild(titlesec);
            metaspin.appendChild(creatorsec);

            gamebtn.appendChild(img);
            gamebtn.appendChild(metaspin);

            gamebtn.addEventListener('click', () => {
                const gameframe = document.getElementById('gframe');
                const gcontrols = document.getElementById('gcontrols');
                const garea = document.getElementById("garea");

                document.getElementById('main-area').style.display = 'none';
                document.querySelector('header').style.display = 'none';
                document.querySelector('footer').style.display = 'none';

                garea.style.display = 'block';

                gameframe.style.display = 'block';
                gcontrols.style.display = 'flex';
                document.body.style.overflow = 'none';

                gameframe.src = game.source;
            });

            allsec.appendChild(gamebtn);
        });
    } catch (error) {
        console.error('Err:', error);
    }
}

inject();
