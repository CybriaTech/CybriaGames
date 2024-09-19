async function generalinfo() {
    try {
        const response = await fetch('/cybriagames.config.json');
        const configdata = await response.json();

        document.getElementById('infotitle').textContent = `Title: ${configdata[0].Title}`;
        document.getElementById('infocreated').textContent = `Created: ${configdata[0].Created}`;
        document.getElementById('infover').textContent = `Version: ${configdata[0].Version}`;
        document.getElementById('infocreator').textContent = `Creator: ${configdata[0].Creator}`;
        const pageurl = window.location.origin + '/';

        const officiallinks = configdata[0].officiallinks;

        const official = pageurl === officiallinks;
        document.getElementById('infoofficial').textContent = `Official: ${official}`;

        const gamejson = await fetch(configdata[0].Games);
        const gamedata = await gamejson.json();
        const gamecount = gamedata.filter(game => game.title).length;
        document.getElementById('infogmes').textContent = `Games: ${gamecount}`;

        const proxyjson = await fetch('/json/proxy.json');
        const proxydata = await proxyjson.json();

        const countvalue = (data) => {
            let total = 0;
            data.forEach(item => {
                for (let key in item) {
                    if (item.hasOwnProperty(key)) {
                        total += item[key].length;
                    }
                }
        });
            
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
