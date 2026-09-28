/* Routes catalogue, single route, genre map. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  function routeSkills(route) {
    var set = {};
    route.lessons.forEach(function (id) {
      var l = SM.ui.lessonById(id);
      if (l) l.skills.forEach(function (s) { set[s] = true; });
    });
    return Object.keys(set);
  }

  function routeTile(route, isCurrent) {
    var prog = SM.ui.routeProgress(route);
    return '<article class="routecard" data-color="' + esc(route.color) + '">' +
      '<div class="routecard__head"><h2 class="routecard__title"><a href="#/route/' + esc(route.id) + '">' + esc(L(route.title)) + '</a></h2>' +
      (isCurrent ? SM.ui.chip(SM.t('routes.current'), 'chip--current') : '') + '</div>' +
      '<p class="routecard__tagline">' + esc(L(route.tagline)) + '</p>' +
      '<div class="routecard__outcome"><p class="routecard__label">' + esc(SM.t('routes.outcome')) + '</p><p>' + esc(L(route.outcome)) + '</p></div>' +
      '<div class="routecard__foot"><span class="muted">' + esc(SM.t('routes.lessons', { n: route.lessons.length })) +
      (prog.done ? ' · ' + esc(SM.t('routes.done', { n: prog.done })) : '') + '</span>' +
      '<a class="btn btn--small btn--ghost" href="#/route/' + esc(route.id) + '">' + esc(SM.t('routes.open')) + icon('arrow') + '</a></div>' +
      '</article>';
  }

  SM.views.routes = function () {
    var st = SM.store.state;
    var base = SM.content.routes.filter(function (r) { return r.id === 'base'; })[0];
    var others = SM.content.routes.filter(function (r) { return r.id !== 'base'; });
    var html = '<div class="page">' +
      SM.ui.pageHead({ kicker: SM.t('routes.kicker'), title: SM.t('routes.title'), lead: SM.t('routes.lead') }) +
      (base ? '<section class="basecard" data-color="ink"><div><p class="card__kicker">' + esc(SM.t('routes.startHere')) + '</p>' +
        '<h2 class="card__title">' + esc(L(base.title)) + '</h2><p>' + esc(L(base.tagline)) + '</p></div>' +
        '<ul class="lessonlist">' + base.lessons.map(function (id) { return SM.ui.lessonCard(id); }).join('') + '</ul></section>' : '') +
      '<div class="routegrid">' + others.map(function (r) { return routeTile(r, st.profile.route === r.id); }).join('') + '</div>' +
      '<aside class="note note--transfer">' + icon('map') + '<div><p class="note__title">' + esc(SM.t('routes.switchTitle')) + '</p>' +
      '<p>' + esc(SM.t('routes.switchText')) + '</p><a class="textlink" href="#/genres">' + esc(SM.t('routes.genreLink')) + '</a></div></aside>' +
      '</div>';
    return { title: SM.t('routes.title'), html: html };
  };

  SM.views.route = function (params) {
    var route = SM.ui.routeById(params.id);
    if (!route) return SM.views.notFound();
    var st = SM.store.state;
    var isCurrent = st.profile.route === route.id;
    var prog = SM.ui.routeProgress(route);
    var next = SM.ui.nextLesson(route);
    var skills = routeSkills(route);
    var html = '<div class="page route" data-color="' + esc(route.color) + '">' +
      SM.ui.pageHead({ back: { href: '#/routes', label: SM.t('nav.routes') }, kicker: SM.t('routes.kickerOne'), title: L(route.title), lead: L(route.tagline) }) +
      '<div class="route__intro">' +
      '<div class="route__for"><p class="routecard__label">' + esc(SM.t('routes.forWhom')) + '</p><p>' + esc(L(route.forWhom)) + '</p></div>' +
      '<div class="route__outcome"><p class="routecard__label">' + esc(SM.t('routes.outcome')) + '</p><p>' + esc(L(route.outcome)) + '</p></div>' +
      '</div>' +
      '<div class="route__actions">' +
      (next ? '<a class="btn btn--primary" href="#/lesson/' + esc(next) + '">' + icon('pen') + esc(SM.t(prog.done ? 'routes.continue' : 'routes.start')) + '</a>' : '') +
      (isCurrent ? SM.ui.chip(SM.t('routes.current'), 'chip--current') :
        '<button class="btn btn--ghost" type="button" data-make-current>' + esc(SM.t('routes.makeCurrent')) + '</button>') +
      '<span class="muted">' + esc(SM.t('home.routeProgress', { done: prog.done, total: prog.total })) + '</span>' +
      '</div>' +
      '<h2 class="section__title">' + esc(SM.t('routes.sequence')) + '</h2>' +
      '<ol class="lessonlist lessonlist--route">' + route.lessons.map(function (id, i) { return SM.ui.lessonCard(id, { n: i + 1 }); }).join('') + '</ol>' +
      (skills.length ? '<h2 class="section__title">' + esc(SM.t('routes.skills')) + '</h2><p class="chips">' + skills.map(function (s) { return SM.ui.chip(SM.ui.skillName(s), 'chip--skill'); }).join('') + '</p>' : '') +
      '<aside class="note note--transfer">' + icon('map') + '<div><p class="note__title">' + esc(SM.t('routes.switchTitle')) + '</p><p>' + esc(SM.t('routes.switchText')) + '</p>' +
      '<a class="textlink" href="#/routes">' + esc(SM.t('routes.all')) + '</a></div></aside>' +
      '</div>';
    return {
      title: L(route.title),
      html: html,
      mount: function (root) {
        var b = root.querySelector('[data-make-current]');
        if (b) b.addEventListener('click', function () {
          st.profile.route = route.id;
          SM.store.save(true);
          SM.ui.toast(SM.t('routes.madeCurrent'));
          SM.app.rerender();
        });
      }
    };
  };

  SM.views.genres = function () {
    var map = SM.content.genreMap;
    if (!map) return SM.views.notFound();
    var cols = map.columns;
    var truthClass = function (g) {
      var genre = SM.content.genres.filter(function (x) { return x.id === g; })[0];
      return genre ? 'truth--' + genre.truth : '';
    };
    var table = '<div class="tablewrap"><table class="genretable"><thead><tr><th scope="col"></th>' +
      cols.map(function (g) { return '<th scope="col" class="' + truthClass(g) + '">' + esc(SM.ui.genreName(g)) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + map.aspects.map(function (a) {
        return '<tr' + (a.id === 'truth' ? ' class="is-truth"' : '') + '><th scope="row">' + esc(L(a.title)) + '</th>' + cols.map(function (g) {
          return '<td>' + esc(L(map.cells[a.id][g])) + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';

    var cards = '<div class="genrecards">' + cols.map(function (g) {
      return '<details class="genrecard ' + truthClass(g) + '"><summary>' + esc(SM.ui.genreName(g)) + '</summary><dl>' + map.aspects.map(function (a) {
        return '<div><dt>' + esc(L(a.title)) + '</dt><dd>' + esc(L(map.cells[a.id][g])) + '</dd></div>';
      }).join('') + '</dl></details>';
    }).join('') + '</div>';

    var html = '<div class="page">' +
      SM.ui.pageHead({ back: { href: '#/routes', label: SM.t('nav.routes') }, kicker: SM.t('genres.kicker'), title: SM.t('genres.title'), lead: SM.t('genres.lead') }) +
      '<div class="genrenotes">' + map.notes.map(function (n) { return '<div class="note">' + icon('map') + '<div>' + md(L(n)) + '</div></div>'; }).join('') + '</div>' +
      '<p class="truthlegend"><span class="truth truth--fiction">' + esc(SM.t('genres.fiction')) + '</span>' +
      '<span class="truth truth--facts">' + esc(SM.t('genres.facts')) + '</span>' +
      '<span class="truth truth--self">' + esc(SM.t('genres.self')) + '</span></p>' +
      table + cards +
      '</div>';
    return { title: SM.t('genres.title'), html: html };
  };
})();
