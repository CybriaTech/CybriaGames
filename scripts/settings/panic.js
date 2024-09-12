let panickey = localStorage.getItem('panickey') || defaultkey;
let panicloc = localStorage.getItem('panicloc') || defaultloc;

document.addEventListener('keydown', (e) => {
    localStorage.setItem('panickey', panickey);
    if (e.key === panickey) {
        localStorage.setItem('panicloc', panicloc);
        window.location.href = panicloc;
    }
});
