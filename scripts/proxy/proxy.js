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
