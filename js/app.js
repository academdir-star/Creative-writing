/* App shell: hash router, navigation, language and theme. */
(function () {
  'use strict';

  var SM = window.SM;
  var esc = SM.util.esc;
  var icon = SM.ui.icon;
  SM.views = SM.views || {};

  var ROUTES = [
    ['', 'home'],
    ['routes', 'routes'],
    ['route/:id', 'route'],
    ['genres', 'genres'],
    ['lesson/:id', 'lesson'],
    ['draft/:id', 'draft'],
    ['write', 'write'],
    ['lab', 'lab'],
    ['lab/:id', 'labItem'],
    ['library', 'library'],
    ['reading/:id', 'reading'],
    ['compare/:id', 'compare'],
    ['portfolio', 'portfolio'],
    ['portfolio/:tab', 'portfolio'],
    ['essay', 'essays'],
    ['essay/:id', 'essay'],
    ['essay/:id/:stage', 'essay'],
    ['workshops', 'workshops'],
    ['workshop/:id', 'workshop'],
    ['vocab', 'vocab'],
    ['vocab/:drill', 'vocabDrill'],
    ['daily', 'daily'],
    ['teacher', 'teacher'],
    ['settings', 'settings']
  ];

  var NAV = [
    { key: 'home', href: '#/', icon: 'home', label: 'nav.home', match: ['home'] },
    { key: 'routes', href: '#/routes', icon: 'compass', label: 'nav.routes', match: ['routes', 'route', 'lesson', 'genres'] },
    { key: 'lab', href: '#/lab', icon: 'flask', label: 'nav.short.lab', match: ['lab', 'labItem'] },
    { key: 'library', href: '#/library', icon: 'book', label: 'nav.library', match: ['library', 'reading', 'compare'] },
    { key: 'essay', href: '#/essay', icon: 'essay', label: 'nav.short.essay', match: ['essays', 'essay'] },
    { key: 'portfolio', href: '#/portfolio', icon: 'folder', label: 'nav.portfolio', match: ['portfolio', 'draft', 'write'] }
  ];

  var MORE = [
    { href: '#/daily', icon: 'calendar', label: 'nav.daily', match: ['daily'] },
    { href: '#/workshops', icon: 'spark', label: 'nav.workshops', match: ['workshops', 'workshop'] },
    { href: '#/vocab', icon: 'words', label: 'nav.vocab', match: ['vocab', 'vocabDrill'] },
    { href: '#/genres', icon: 'map', label: 'nav.genres', match: ['genres'] },
    { href: '#/teacher', icon: 'cap', label: 'nav.teacher', match: ['teacher'] },
    { href: '#/settings', icon: 'gear', label: 'nav.settings', match: ['settings'] }
  ];

  var TABS = [
    { href: '#/', icon: 'home', label: 'nav.home', match: ['home'] },
    { href: '#/routes', icon: 'compass', label: 'nav.learn', match: ['routes', 'route', 'lesson', 'genres'] },
    { href: '#/daily', icon: 'pen', label: 'nav.write', match: ['daily', 'write'] },
    { href: '#/lab', icon: 'flask', label: 'nav.tab.lab', match: ['lab', 'labItem'] },
    { href: '#/portfolio', icon: 'folder', label: 'nav.portfolio', match: ['portfolio', 'draft'] }
  ];

  var current = { view: null, name: null, params: {} };

  function parse(hash) {
    var path = (hash || '').replace(/^#\/?/, '').replace(/\/$/, '');
    var parts = path ? path.split('/') : [];
    for (var i = 0; i < ROUTES.length; i++) {
      var pattern = ROUTES[i][0] ? ROUTES[i][0].split('/') : [];
      if (pattern.length !== parts.length) continue;
      var params = {};
      var ok = pattern.every(function (seg, ix) {
        if (seg.charAt(0) === ':') { params[seg.slice(1)] = decodeURIComponent(parts[ix]); return true; }
        return seg === parts[ix];
      });
      if (ok) return { name: ROUTES[i][1], params: params };
    }
    return { name: 'notFound', params: {} };
  }

  function navLinks(list, cls, active) {
    return list.map(function (item) {
      var on = item.match.indexOf(active) !== -1;
      return '<a class="' + cls + (on ? ' is-active' : '') + '" href="' + item.href + '"' + (on ? ' aria-current="page"' : '') + '>' +
        icon(item.icon) + '<span>' + esc(SM.t(item.label)) + '</span></a>';
    }).join('');
  }

  function renderChrome(active) {
    document.querySelector('[data-mainnav]').innerHTML = navLinks(NAV, 'mainnav__link', active);
    document.querySelector('[data-tabbar]').innerHTML = navLinks(TABS, 'tabbar__link', active);
    document.querySelector('[data-menu]').innerHTML =
      '<div class="menu__inner"><div class="menu__group menu__group--main">' + navLinks(NAV, 'menu__link', active) + '</div>' +
      '<div class="menu__group">' + navLinks(MORE, 'menu__link', active) + '</div></div>';
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === SM.lang());
      b.setAttribute('aria-pressed', String(b.dataset.lang === SM.lang()));
    });
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = SM.t(el.dataset.i18n); });
    var toggle = document.querySelector('[data-menu-toggle]');
    toggle.setAttribute('aria-label', SM.t('nav.menu'));
  }

  function setMenu(open) {
    var menu = document.querySelector('[data-menu]');
    menu.hidden = !open;
    document.querySelector('[data-menu-toggle]').setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  }

  function render(opts) {
    var route = parse(location.hash);
    var main = document.querySelector('[data-main]');
    if (current.view && current.view.destroy) {
      try { current.view.destroy(); } catch (e) { /* ignore */ }
    }
    SM.ui.closeModal();
    setMenu(false);
    document.body.classList.remove('focus-mode');

    var factory = SM.views[route.name] || SM.views.notFound;
    var view;
    try {
      view = factory(route.params) || {};
    } catch (e) {
      if (window.console) console.error(e);
      view = SM.views.error(e);
    }
    if (view.redirect) {
      location.replace(view.redirect);
      return;
    }
    current = { view: view, name: route.name, params: route.params };
    renderChrome(route.name);
    // A fresh container per view: listeners attached by a view disappear with it
    var viewRoot = document.createElement('div');
    viewRoot.className = 'viewroot';
    viewRoot.innerHTML = view.html || '';
    main.replaceChildren(viewRoot);
    main.dataset.view = route.name;
    document.title = (view.title ? view.title + ' — ' : '') + SM.t('app.name') + ' · Skill Matrix';
    if (view.mount) {
      try { view.mount(viewRoot); } catch (e) { if (window.console) console.error(e); }
    }
    if (!opts || !opts.keepScroll) window.scrollTo(0, 0);
    var h1 = main.querySelector('h1');
    if (h1 && !(opts && opts.keepScroll) && document.activeElement !== document.body) h1.focus({ preventScroll: true });
  }

  function applyTheme() {
    var theme = SM.store.state.theme || 'auto';
    if (theme === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
  }

  function storageWarning() {
    var el = document.querySelector('[data-storage-warning]');
    if (!SM.store.persistent()) {
      el.hidden = false;
      el.textContent = SM.t('storage.warning');
    } else {
      el.hidden = true;
    }
  }

  SM.app = {
    render: render,
    rerender: function () { render({ keepScroll: true }); },
    applyTheme: applyTheme,
    go: function (hash) { if (location.hash === hash) render(); else location.hash = hash; }
  };

  SM.views.notFound = function () {
    return {
      title: SM.t('notFound.title'),
      html: '<div class="page">' + SM.ui.pageHead({ title: SM.t('notFound.title'), lead: SM.t('notFound.text') }) +
        '<a class="btn btn--primary" href="#/">' + esc(SM.t('nav.home')) + '</a></div>'
    };
  };

  SM.views.error = function (e) {
    return {
      title: SM.t('error.title'),
      html: '<div class="page">' + SM.ui.pageHead({ title: SM.t('error.title'), lead: SM.t('error.text') }) +
        '<pre class="muted">' + esc(e && e.message) + '</pre><a class="btn btn--primary" href="#/">' + esc(SM.t('nav.home')) + '</a></div>'
    };
  };

  function boot() {
    if (SM.store.state.lang) SM.setLang(SM.store.state.lang);
    applyTheme();
    storageWarning();
    SM.store.on(function (type) { if (type === 'storage-error') storageWarning(); });

    document.querySelector('[data-langswitch]').addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang]');
      if (!b || b.dataset.lang === SM.lang()) return;
      SM.setLang(b.dataset.lang);
      storageWarning();
      render({ keepScroll: true });
    });

    document.querySelector('[data-menu-toggle]').addEventListener('click', function () {
      setMenu(document.querySelector('[data-menu]').hidden);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (!document.querySelector('[data-modal]').hidden) SM.ui.closeModal();
        else if (!document.querySelector('[data-menu]').hidden) setMenu(false);
      }
    });

    document.querySelector('[data-modal]').addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-modal-close')) SM.ui.closeModal();
    });

    document.addEventListener('click', function (e) {
      var menu = document.querySelector('[data-menu]');
      if (!menu.hidden && !e.target.closest('[data-menu]') && !e.target.closest('[data-menu-toggle]')) setMenu(false);
    });

    window.addEventListener('hashchange', function () { render(); });
    window.addEventListener('pagehide', function () { SM.store.save(true); });
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') SM.store.save(true); });
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
