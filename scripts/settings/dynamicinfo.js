async function dynamicinfo() {
  const cloak = document.getElementById('infocloak');
  const keys = document.getElementById('infokeys');
  const themes = document.getElementById('infothemes');
  const font = document.getElementById('infofont');
  const cors = document.getElementById('infocors');

  cloak.textContent = 'Cloaks:' + localstorage.getItem('cloakState');
  keys.textContent = 'Panic Key & Location:' + localstorage.getItem('panickey') + '(Key)' + '' + localstorage.getItem('panicloc') + '(Location)';
  themes.textContent = 'Theme:' + localstorage.getItem('theme');
  font.textContent = 'Font:' + localstorage.getItem('font');
  cors.textContent = 'Cors Proxy:' + localstorage.getItem('corsproxy');
}

dynamicinfo();
