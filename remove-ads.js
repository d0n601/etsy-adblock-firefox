var ads = document.getElementsByClassName('position-absolute position-top ml-xs-1 mt-xs-1 normal z-index-1');

// Polyfill Element.prototype.matches
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {
      }
      return i > -1;
    };
}

function closestMatching(matcher, el) {
  while (!el.matches(matcher)) {
    el = el.parentElement;
  }
  return el;
}

var containers = [],
  container;

for (var i = 0; i < ads.length; i++) {
  container = closestMatching('ul > li', ads[ i ]);
  if (container) {
    containers.push(container);
  }
}

for (var ii = 0; ii < containers.length; ii++) {
  containers[ ii ].remove();
}
