setTimeout(function () {
  if (document.getElementById('loader-container') !== null) {
    document.getElementById('loader-container').style.display = 'none';
    document.querySelector('.content').style.display = 'contents';
  }
}, 500);


