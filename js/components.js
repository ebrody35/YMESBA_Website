/* Shared nav + footer, injected into #site-header / #site-footer placeholders
   present on every page. Keeping this as JS (rather than fetch of an .html
   partial) means pages still work when opened directly from disk. */

(function () {
  var NAV_LINKS = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'get-involved.html', label: 'Get Involved', page: 'get-involved' },
    { href: 'events-speakers.html', label: 'Events & Speakers', page: 'events-speakers' },
    { href: 'leadership.html', label: 'Leadership', page: 'leadership' },
    { href: 'partnerships.html', label: 'Partnerships', page: 'partnerships' },
    { href: 'contact.html', label: 'Contact', page: 'contact' }
  ];

  var JOIN_LINK_HREF = 'https://docs.google.com/forms/d/e/1FAIpQLSd21pc8LH04YIKbgOU5Cm9KX7Fs5GaVizZjVH_Nwhwwr_F9vg/viewform?pli=1';

  /* Adapted from the original Y/MESBA badge logo: same diagonal-split
     badge shape, redrawn in the site's Yale Blue / light grey palette. */
  var LOGO_SVG =
    '<svg class="logo-mark" viewBox="0 0 168 40" role="img" aria-label="YMESBA" xmlns="http://www.w3.org/2000/svg">' +
      '<clipPath id="logoClip"><rect x="1" y="1" width="166" height="38" rx="6"/></clipPath>' +
      '<g clip-path="url(#logoClip)">' +
        '<polygon points="0,0 50,0 38,40 0,40" style="fill:#00356B"/>' +
        '<polygon points="50,0 58,0 46,40 38,40" style="fill:#9BA4B4"/>' +
        '<polygon points="58,0 168,0 168,40 46,40" style="fill:#00203F"/>' +
      '</g>' +
      '<rect x="1" y="1" width="166" height="38" rx="6" fill="none" style="stroke:#9BA4B4" stroke-width="2"/>' +
      '<text x="25" y="28" text-anchor="middle" transform="skewX(-10)" font-family="\'Big Shoulders Display\', sans-serif" font-weight="800" font-size="23" fill="#FFFFFF">Y</text>' +
      '<text x="111" y="27" text-anchor="middle" transform="skewX(-10)" font-family="\'Big Shoulders Display\', sans-serif" font-weight="800" font-size="18" letter-spacing="0.5" fill="#FFFFFF">MESBA</text>' +
    '</svg>';

  function renderHeader(currentPage) {
    var links = NAV_LINKS.map(function (link) {
      var current = link.page === currentPage ? ' aria-current="page"' : '';
      return '<a href="' + link.href + '"' + current + '>' + link.label + '</a>';
    }).join('');

    return (
      '<header>' +
        '<nav class="wrap">' +
          '<a href="index.html" class="brand">' + LOGO_SVG + '</a>' +
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
              '<div class="foot-brand">' + LOGO_SVG + '</div>' +
              '<p style="max-width:280px; font-size:0.85rem;">Yale Media, Entertainment, and Sports Business Association</p>' +
              '<div class="foot-social">' +
                '<a href="https://www.instagram.com/ymesba/" aria-label="Instagram" target="_blank" rel="noopener">IG</a>' +
              '</div>' +
            '</div>' +
            '<div class="foot-links">' +
              '<a href="index.html">Home</a>' +
              '<a href="get-involved.html">Get Involved</a>' +
              '<a href="events-speakers.html">Events &amp; Speakers</a>' +
              '<a href="leadership.html">Leadership</a>' +
              '<a href="partnerships.html">Partnerships</a>' +
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
