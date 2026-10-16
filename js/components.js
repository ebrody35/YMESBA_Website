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

  /* Keeps the Events & Speakers page from going stale. Everything stays
     visible through the day of the event and is cleaned up from the next
     day on:
       - upcoming speaker cards (.upcoming-card) move into the Past
         Speakers list under the current academic year
       - upcoming event cards (.event-card) are removed
       - any other element with data-expires="YYYY-MM-DD" (e.g. a
         registration button) is hidden
     A card's date is read from its date line ("Oct 6, 2026 · ...") unless
     it carries its own data-expires. A speaker card can set
     data-past-title="Title · Organization" to control how it reads in
     the past list; otherwise the bio's last comma becomes " · ". */
  var MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };

  function eventDate(el) {
    var attr = el.getAttribute('data-expires');
    if (attr) {
      var p = attr.split('-').map(Number);
      return new Date(p[0], p[1] - 1, p[2]);
    }
    var label = el.querySelector('.date, .mono');
    var m = label && label.textContent.match(/^\s*([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),\s*(\d{4})/);
    return m ? new Date(+m[3], MONTHS[m[1].toLowerCase()], +m[2]) : null;
  }

  function hasPassed(date, today) {
    return !!date && today >= new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }

  function archiveListFor(panel, startYear) {
    var label = startYear + '–' + String(startYear + 1).slice(2);
    var heads = panel.querySelectorAll('h3.archive-year');
    var before = null;
    for (var i = 0; i < heads.length; i++) {
      if (heads[i].textContent.trim() === label) return heads[i].nextElementSibling;
      if (!before && parseInt(heads[i].textContent, 10) < startYear) before = heads[i];
    }
    var head = document.createElement('h3');
    head.className = 'archive-year';
    head.textContent = label;
    var list = document.createElement('ul');
    list.className = 'archive-list';
    panel.insertBefore(head, before);
    panel.insertBefore(list, before);
    return list;
  }

  function archiveSpeaker(card, date) {
    var panel = document.getElementById('panel-past-speakers');
    var nameEl = card.querySelector('h3');
    var bioEl = card.querySelector('p');
    if (panel && nameEl) {
      var name = nameEl.textContent.trim();
      var what = card.getAttribute('data-past-title') ||
        (bioEl ? bioEl.textContent.trim().replace(/,\s+([^,]*)$/, ' · $1') : '');
      var startYear = date.getMonth() >= 7 ? date.getFullYear() : date.getFullYear() - 1;
      var list = archiveListFor(panel, startYear);
      var seen = Array.prototype.some.call(list.querySelectorAll('.who'), function (w) {
        return w.textContent.trim() === name;
      });
      if (!seen) {
        var li = document.createElement('li');
        var who = document.createElement('span');
        who.className = 'who';
        who.textContent = name;
        var desc = document.createElement('span');
        desc.className = 'what';
        desc.textContent = what;
        li.appendChild(who);
        li.appendChild(desc);
        list.appendChild(li);
      }
    }
    card.remove();
  }

  function pruneExpired() {
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    document.querySelectorAll('.upcoming-card').forEach(function (card) {
      var date = eventDate(card);
      if (hasPassed(date, today)) archiveSpeaker(card, date);
    });
    document.querySelectorAll('.event-card').forEach(function (card) {
      if (hasPassed(eventDate(card), today)) card.remove();
    });
    document.querySelectorAll('[data-expires]').forEach(function (el) {
      if (hasPassed(eventDate(el), today)) el.style.display = 'none';
    });

    // Drop season dividers with no cards left under them.
    document.querySelectorAll('.upcoming-divider').forEach(function (divider) {
      var next = divider.nextElementSibling;
      while (next && !next.classList.contains('upcoming-divider')) {
        if (next.classList.contains('upcoming-card')) return;
        next = next.nextElementSibling;
      }
      divider.remove();
    });

    // Friendly empty states when a whole list has been cleared out.
    [['.upcoming-grid', '.upcoming-card', 'New speakers will be announced soon — check back!'],
     ['.events-grid', '.event-card', 'Nothing confirmed yet — check back soon!']].forEach(function (cfg) {
      var grid = document.querySelector(cfg[0]);
      if (grid && !grid.querySelector(cfg[1])) {
        var note = document.createElement('div');
        note.className = 'empty-state';
        note.textContent = cfg[2];
        grid.replaceWith(note);
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
    pruneExpired();
  });
})();
