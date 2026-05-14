(function () {
  var nav = document.getElementById('site-nav');
  var btn = nav && nav.querySelector('button');
  var vlinks = nav && nav.querySelector('.visible-links');
  if (!nav || !btn || !vlinks) return;

  var isOpen = false;

  function open() {
    isOpen = true;
    var title = vlinks.querySelector('li.masthead__menu-item--lg');
    if (title) title.style.display = 'none';
    var items = vlinks.querySelectorAll('li:not(.masthead__menu-item--lg)');
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'block';
      items[i].style.borderBottom = i < items.length - 1 ? '1px solid #f2f3f3' : 'none';
    }
    vlinks.style.display = 'block';
    vlinks.style.position = 'absolute';
    vlinks.style.top = '100%';
    vlinks.style.right = '0';
    vlinks.style.zIndex = '9999';
    vlinks.style.background = '#fff';
    vlinks.style.border = '1px solid #d3d3d3';
    vlinks.style.borderRadius = '4px';
    vlinks.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
    vlinks.style.padding = '5px';
    vlinks.style.minWidth = '200px';
    vlinks.style.maxWidth = 'calc(100vw - 2rem)';
  }

  function close() {
    isOpen = false;
    var items = vlinks.querySelectorAll('li');
    for (var i = 0; i < items.length; i++) {
      items[i].style.cssText = '';
    }
    vlinks.style.cssText = '';
  }

  btn.addEventListener('click', function (e) {
    isOpen ? close() : open();
    e.stopPropagation();
  });

  document.addEventListener('click', function () {
    if (isOpen) close();
  });
}());
