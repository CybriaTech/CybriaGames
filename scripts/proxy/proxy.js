document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("filter").addEventListener("click", filter);
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
                    }
                });
            });
        })
        .catch(error => {
            console.error('JSON is unreachable:', error);
        });

    function filter() {
        const links = document.querySelectorAll(".linkanchor");
        links.forEach(link => {
            const corsproxy = [
                'https://cors.timmytamle569.workers.dev/'
            ];

            scancors(link, corsproxy);
        });
    }

    function scancors(link, proxies) {
        if (proxies.length === 0) {
            link.id = 'fails';
            link.style.display = 'none';
            console.error('No available CORS proxies for:', link.href);
            return;
        }

        const proxy = proxies[0];
        const url = proxy + link.href;

        fetch(url, { method: 'HEAD' })
            .then(response => {
                if ([200, 203, 403].includes(response.status)) {
                } else if (response.status === 404 && link.href.endsWith('workers.dev')) {
                } else {
                    link.id = 'fails';
                    link.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('CORS Proxy Is Blocked:', proxy, 'Next Proxy', link.href);
                scancors(link, proxies.slice(1));
            });
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
