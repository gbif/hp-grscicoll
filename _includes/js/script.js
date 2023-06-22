window.setTimeout(function() {
  let a = document.getElementById('headline-offset');
  a.parentElement.style.marginLeft = '-' + a.offsetWidth + 'px';
  // a.parentElement.parentElement.style.paddingLeft = a.offsetWidth + 'px';
}, 300);