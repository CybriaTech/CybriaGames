async function inject() {
    try {
        const response = await fetch('/json/hacks.json');
        const cheats = await response.json();

        cheats.sort((a, b) => a.title.localeCompare(b.title));

        const cheatarea = document.getElementById('cheats-area');

        cheatarea.innerHTML = '';

        cheats.forEach(cheat => {
            const cheatoption = document.createElement('a');
            cheatoption.classList.add('cheat');

            const titlep = document.createElement('p');
            titlep.classList.add('cheat-title');
            titlep.textContent = cheat.name;

            const creatorp = document.createElement('p');
            creatorp.classList.add('cheat-creator');
            creatorp.textContent = `By: ${cheat.author}`;

            cheatoption.appendChild(titlep);
            cheatoption.appendChild(creatorp);

            cheatoption.appendChild(img);
            cheatoption.appendChild(cheatoption);

            cheatarea.appendChild(cheatoption);
        });

inject();
