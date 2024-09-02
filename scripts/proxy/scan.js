async function scan(url, proxy) {
    try {
        const response = await fetch(proxy + url);
        return response.status;
    } catch (error) {
        console.error(`Couldn't scan ${url} via ${proxy}:`, error);
        return null;
    }
}

function filter() {
    const console = document.getElementById("proxy-console");
    const corsproxy = [
        "https://cors-anywhere.herokuapp.com/",
        "https://cors.timmytamle569.workers.dev/"
    ];

    const links = console.querySelectorAll('.injectedlinks');

    for (let link of links) {
        let url = link.innerText.trim();
        let status = null;

        for (let proxy of corsproxy) {
            status = await scan(url, proxy);
            if (status !== null) break;
        }

        if (![200, 203, 403].includes(status)) {
            link.style.display = "none";
        }
    }
}
