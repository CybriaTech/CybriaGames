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

                    const pagesandbox = data[0]['Page Sandbox'];
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
                'https://cors.timmytamle569.workers.dev/',
                'https://kors.onrender.com/',
                'https://tcors.vercel.app/',
                'https://tcors.duckdns.org/',
                'https://tcors.hopto.org/',
                'https://tcors.mywire.org/',
                'https://tcors.loseyourip.com/',
                'https://tcors.ddnsfree.com/',
                'https://tcors.accesscam.org/',
                'https://tcors.camdvr.org/',
                'https://tcors.webredirect.org',
                'https://tcors.freeddns.org/',
                'https://tcors.casacam.net/'
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
        
        fetch(url, { method: 'GET', redirect: 'manual' })
            .then(response => {
                if (response.type === 'opaqueredirect' || response.url !== url) {
                    link.id = 'fails';
                    link.style.display = 'none';
                    console.error('Redirects:', link.href);
                } else if (response.ok) {
                    link.id = 'works';
                } else {
                    link.id = 'fails';
                    link.style.display = 'none';
                    console.error('Blocked:', link.href);
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
