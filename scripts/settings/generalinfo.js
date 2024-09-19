async function generalinfo() {
    try {
        const response = await fetch('/cybriagames.config.json');
        const configdata = await response.json();

        document.getElementById('infotitle').textContent = `Title: ${configdata[0].Title}`;
        document.getElementById('infocreated').textContent = `Created: ${configdata[0].Created}`;
        document.getElementById('infover').textContent = `Version: ${configdata[0].Version}`;
        document.getElementById('infocreator').textContent = `Creator: ${configdata[0].Creator}`;
        const official = configdata[0].Creator === 'CybriaTech';
        document.getElementById('infoofficial').textContent = `Official: ${official}`;

        const gamejson = await fetch(configdata[0].Games);
        const gamedata = await gamejson.json();
        const gamecount = gamedata.filter(game => game.title).length;
        document.getElementById('infogmes').textContent = `Games: ${gamecount}`;

        const proxyjson = await fetch('/json/proxy.json');
        .then(response => response.json())
        .then(data => {
            const totals = data[0];  
            return totals;
                });
            });
        })
        
        const totalvalues = countvalue(totals);
        console.log('All:', totals);
        document.getElementById('infoprox').textContent = `Proxies: ${totals}`;
    } catch (error) {
        console.error('Err', error);
    }
}

generalinfo();
