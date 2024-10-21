async function dynamicinfo() {
  const cloak = document.getElementById('infocloak');
  const keys = document.getElementById('infokeys');
  const themes = document.getElementById('infothemes');
  const font = document.getElementById('infofont');
  const cors = document.getElementById('infocors');

  cloak.textContent = 'Cloaks: ' + localStorage.getItem('cloakState');
  keys.textContent = 'Panic Key & Location: ' + localStorage.getItem('panickey') || '`' + ' (Key) ' +  localStorage.getItem('panicloc') || 'https://www.google.com' + ' (Location)';
  themes.textContent = 'Theme: ' + localStorage.getItem('theme');
  font.textContent = 'Font: ' + localStorage.getItem('font');
  cors.textContent = 'Cors Proxy: ' + localStorage.getItem('corsproxy');
}

dynamicinfo();
