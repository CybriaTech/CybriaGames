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
                        links.forEach(link => {
                            const injectlinks = document.createElement('div');
                            injectlinks.classList.add('injectedlinks');
                            injectlinks.textContent = link;
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
