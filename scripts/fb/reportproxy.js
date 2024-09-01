function report() {
  const close = document.getElementById('close');
  const reportscreen = document.getElementById('report-screen');
  
  reportscreen.style.display = 'flex';

  close.addEventListener('click', function () {
    reportscreen.style.display = 'none';
  });
}
