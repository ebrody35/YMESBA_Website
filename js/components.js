/* Shared nav + footer, injected into #site-header / #site-footer placeholders
   present on every page. Keeping this as JS (rather than fetch of an .html
   partial) means pages still work when opened directly from disk. */

(function () {
  var NAV_LINKS = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/get-involved', label: 'Get Involved', page: 'get-involved' },
    { href: '/events-speakers', label: 'Events & Speakers', page: 'events-speakers' },
    { href: '/leadership', label: 'Leadership', page: 'leadership' },
    { href: '/partnerships', label: 'Partnerships', page: 'partnerships' },
    { href: '/contact', label: 'Contact', page: 'contact' }
  ];

  var JOIN_LINK_HREF = 'https://docs.google.com/forms/d/e/1FAIpQLSd21pc8LH04YIKbgOU5Cm9KX7Fs5GaVizZjVH_Nwhwwr_F9vg/viewform?pli=1';

  var LOGO_MARK = '<img class="logo-mark" src="/images/logo-mark.png" alt="YMESBA" width="480" height="403">';

  function renderHeader(currentPage) {
    var links = NAV_LINKS.map(function (link) {
      var current = link.page === currentPage ? ' aria-current="page"' : '';
      return '<a href="' + link.href + '"' + current + '>' + link.label + '</a>';
    }).join('');

    return (
      '<header>' +
        '<nav class="wrap">' +
          '<a href="/" class="brand">' + LOGO_MARK + '</a>' +
          '<div class="navlinks" id="navlinks">' + links + '</div>' +
          '<div class="navcta">' +
            '<button type="button" class="navtoggle" id="navtoggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navlinks"><span></span></button>' +
            '<a href="' + JOIN_LINK_HREF + '" class="btn solid" target="_blank" rel="noopener">Join YMESBA</a>' +
          '</div>' +
        '</nav>' +
      '</header>'
    );
  }

  function renderFooter() {
    return (
      '<footer>' +
        '<div class="wrap">' +
          '<div class="foot-grid">' +
            '<div>' +
              '<div class="foot-brand">' + LOGO_MARK + '</div>' +
              '<p style="max-width:280px; font-size:0.85rem;">Yale Media, Entertainment, and Sports Business Association</p>' +
              '<div class="foot-social">' +
                '<a href="https://www.instagram.com/ymesba/" aria-label="Instagram" target="_blank" rel="noopener">IG</a>' +
              '</div>' +
            '</div>' +
            '<div class="foot-links">' +
              '<a href="/">Home</a>' +
              '<a href="/get-involved">Get Involved</a>' +
              '<a href="/events-speakers">Events &amp; Speakers</a>' +
              '<a href="/leadership">Leadership</a>' +
              '<a href="/partnerships">Partnerships</a>' +
              '<a href="mailto:yalemesba@gmail.com">Contact</a>' +
            '</div>' +
          '</div>' +
          '<div class="foot-bottom">' +
            '<span>&copy; 2026 Yale Media, Entertainment, and Sports Business Association</span>' +
            '<span class="disclaimer">"Yale" and "Yale University" are registered trademarks of Yale University. This site is maintained independently by students and is not an official Yale University site.</span>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  function initNavToggle() {
    var toggle = document.getElementById('navtoggle');
    var links = document.getElementById('navlinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var currentPage = document.body.getAttribute('data-page') || '';
    var headerMount = document.getElementById('site-header');
    var footerMount = document.getElementById('site-footer');
    if (headerMount) headerMount.outerHTML = renderHeader(currentPage);
    if (footerMount) footerMount.outerHTML = renderFooter();
    initNavToggle();
  });
})();
