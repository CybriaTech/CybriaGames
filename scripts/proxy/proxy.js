document.addEventListener("DOMContentLoaded", function() {
    const console = document.getElementById("proxy-console");
    const button = document.querySelectorAll(".proxy-button");

    fetch('/json/proxy.json')
        .then(response => response.json())
        .then(data => {
            button.forEach(button => {
                button.addEventListener("click", function() {
                    const proxyid = this.id;
                    const links = data[0][proxyid];
                    if (links) {
                        console.innerHTML = '';

                        const injectlinks = document.createElement('div');
                        injectlinks.classList.add('injectedlinks');
                        injectlinks.style.marginTop = '0';
                        
                        links.forEach(link => {
                            const linkanchor = document.createElement('a');
                            linkanchor.classList.add('linkanchor');
                            linkanchor.href = link;
                            linkanchor.textContent = link;
                            linkanchor.target = "_blank";
                            
                            injectlinks.appendChild(linkanchor);
                            console.appendChild(injectlinks);
                        });

                        filter();
                    }
                });
            });
        })
        .catch(error => {
            console.error('JSON is unreachable:', error);
        });

    
    async function scan(url, proxy) {
        try {
            const response = await fetch(proxy + url);
            return response.status;
        } catch (error) {
            console.error(`Couldn't scan ${url} via ${proxy}:`, error);
            return null;
        }
    }

    async function filter() {
        const corsProxyList = [
            "https://cors-anywhere.herokuapp.com/",
            "https://cors.timmytamle569.workers.dev/"
        ];

        const links = consoleElement.querySelectorAll('.linkanchor');

        for (let link of links) {
            let url = link.innerText.trim();
            let status = null;

            for (let proxy of corsProxyList) {
                status = await scan(url, proxy);
                if (status !== null) break;
            }

            if (![200, 203, 403].includes(status)) {
                link.id = "fails";
                link.style.display = "none";
            }
        }
    }
});

function copy() {
    const linkspace = document.querySelector('.injectedlinks');
    const copylink = linkspace.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = copylink;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    const button = document.getElementById('copy');
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = 'Copy All';
    }, 1000);
}
