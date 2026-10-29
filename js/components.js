// Shared header and footer, injected into every page so the layout
// only needs to be maintained in one place.

(function () {
  var NAV_LINKS = [
    { href: 'about.html', label: 'About' },
    { href: 'https://stevewortphotography.pixieset.com', label: 'Client Galleries', external: true },
    { href: 'contact.html', label: 'Contact' },
    { href: 'portfolio.html', label: 'Portfolio' },
    { href: 'services.html', label: 'Services' }
  ];

  function currentPage() {
    var path = window.location.pathname.split('/').pop();
    return path === '' ? 'index.html' : path;
  }

  // External links (e.g. Pixieset) open in a new tab so visitors keep the site open.
  function linkAttrs(link) {
    return link.external ? ' target="_blank" rel="noopener"' : '';
  }

  function renderHeader() {
    var page = currentPage();
    var navItems = NAV_LINKS.map(function (link) {
      var activeClass = link.href === page ? ' class="active"' : '';
      return '<li><a href="' + link.href + '"' + activeClass + linkAttrs(link) + '>' + link.label + '</a></li>';
    }).join('');

    return (
      '<div class="site-banner"><h1><a href="index.html">Steve Wort Photography</a></h1></div>' +
      '<nav class="site-nav"><ul>' + navItems + '</ul></nav>' +
      '<hr class="site-header-rule">'
    );
  }

  function renderFooter() {
    var year = new Date().getFullYear();
    var footerLinks = NAV_LINKS.map(function (link) {
      return '<a href="' + link.href + '"' + linkAttrs(link) + '>' + link.label + '</a>';
    }).join('');

    return (
      '<p>&copy; ' + year + ' Steve Wort Photography. All rights reserved.</p>' +
      '<p>Based in the Pacific North West &middot; Available for bookings worldwide</p>' +
      '<p class="footer-links">' + footerLinks + '</p>'
    );
  }

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('site-header');
    var footer = document.getElementById('site-footer');
    if (header) header.innerHTML = renderHeader();
    if (footer) footer.innerHTML = renderFooter();
  });
})();
