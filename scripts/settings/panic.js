document.addEventListener('DOMContentLoaded', function() {
  panickey();
});

const pkey = localStorage.getItem('panickey');
const ploc = localStorage.getItem('panicloc');

function panickey() {
    document.addEventListener('keydown', (e) => {
        if (pkey.toLowerCase()) {
            e.preventDefault();
            window.location.href = ploc;
        } else {
          console.log('Error');
        }
    });
}
