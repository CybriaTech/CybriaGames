async function inject() {
    try {
        const response = await fetch('/json/hacks.json');
        const cheats = await response.json();

        cheats.sort((a, b) => a.title.localeCompare(b.title));

        const cheatarea = document.getElementById('cheats-area');
        cheatarea.innerHTML = '';

        for (let cheat of cheats) {
            if (cheat.asset.endsWith('.txt')) {
                try {
                    const txtresult = await fetch(cheat.asset);
                    if (!txtresult.ok) {
                        throw new Error(`Response is no ok: ${txtresult.statusText}`);
                    }
                    cheat.asset = await txtresult.text();
                } catch (error) {
                    console.error('DId not get txt content:', error);
                    continue;
                }
            }

        cheats.forEach(cheat => {
            const cheatoption = document.createElement('a');
            cheatoption.classList.add('cheat');
            cheatoption.href = cheat.asset;

            const titlep = document.createElement('p');
            titlep.classList.add('cheat-title');
            titlep.textContent = cheat.name;

            const creatorp = document.createElement('p');
            creatorp.classList.add('cheat-creator');
            creatorp.textContent = `By: ${cheat.author}`;

            cheatoption.appendChild(titlep);
            cheatoption.appendChild(creatorp);
            
            cheatoption.appendChild(cheatoption);

            cheatarea.appendChild(cheatoption);
        });
    } catch (error) {
        console.error('Failed:', error);
    }
}

inject();
