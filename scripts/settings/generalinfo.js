async function generalinfo() {
    try {
        const response = await fetch('/cybriagames.config.json');
        const configdata = await response.json();

        document.getElementById('infotitle').textContent = configdata[0].Title;
        document.getElementById('infocreated').textContent = configdata[0].Created;
        document.getElementById('infover').textContent = `Version: ${configdata[0].Version}`;

        const gamejson = await fetch(configdata[0].Games);
        const gamedata = await gamejson.json();
        const gamecount = gamedata.filter(game => game.title).length;
        document.getElementById('infogmes').textContent = `Games: ${gamecount}`;

        const proxyjson = await fetch(configdata[0].Proxies);
        const proxydata = await proxyjson.json();
        const proxyvalue = Object.values(proxydata).flat().length;
        document.getElementById('infoprox').textContent = `Proxies: ${proxyvalue}`;
    } catch (error) {
        console.error('Err', error);
    }
}

generalinfo();
