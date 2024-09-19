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

        const proxyjson = await fetch(configdata[0].Proxies);
        const proxydata = await proxyjson.json();

        const countvalue = (data) => {
            let total = 0;
            if (typeof data === 'object' && data !== null) {
                for (const key in data) {
                    if (Array.isArray(data[key])) {
                        total += data[key].length;
                    }
                }
            }
            return total;
        };
        
        const totalvalues = countvalue(proxydata);
        console.log('All:', totalvalues);
        document.getElementById('infoprox').textContent = `Proxies: ${totalvalues}`;
    } catch (error) {
        console.error('Err', error);
    }
}

generalinfo();
