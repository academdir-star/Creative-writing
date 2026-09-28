/* Teacher page: principles, running a class, feedback protocol, safety, sources, notes. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  SM.sourceName = function (id) {
    var t = SM.content.teacher;
    var s = t && t.sources.filter(function (x) { return x.id === id; })[0];
    return s ? (s.author ? s.author + ' — ' : '') + s.title : id;
  };

  // Which lessons, workshops and lab techniques cite each source
  function usage() {
    var map = {};
    function add(ids, label, href) {
      (ids || []).forEach(function (id) {
        map[id] = map[id] || [];
        map[id].push({ label: label, href: href });
      });
    }
    Object.keys(SM.content.lessons).forEach(function (id) {
      var l = SM.content.lessons[id];
      if (l.teacher) add(l.teacher.source, L(l.title), '#/lesson/' + id);
    });
    SM.content.workshops.forEach(function (w) { if (w.teacher) add(w.teacher.source, L(w.title), '#/workshop/' + w.id); });
    SM.content.lab.forEach(function (t) { add(t.source, L(t.title), '#/lab/' + t.id); });
    return map;
  }

  SM.views.teacher = function () {
    var t = SM.content.teacher;
    if (!t) return SM.views.notFound();
    var used = usage();
    var books = [];
    SM.content.workshops.forEach(function (w) {
      (w.reading || []).forEach(function (b) { books.push({ ws: L(w.title), b: b }); });
    });

    var lessonNotes = SM.content.routes.map(function (r) {
      var items = r.lessons.map(function (id) { return SM.ui.lessonById(id); }).filter(Boolean);
      if (!items.length) return '';
      return '<details class="panel"><summary>' + esc(L(r.title)) + ' <span class="muted">(' + items.length + ')</span></summary>' +
        '<p class="muted">' + esc(SM.t('routes.outcome')) + ': ' + esc(L(r.outcome)) + '</p><ol class="teachernotes">' + items.map(function (l) {
          return '<li><p><a href="#/lesson/' + esc(l.id) + '"><strong>' + esc(L(l.title)) + '</strong></a> · ' + esc(SM.t('common.minutes', { n: l.minutes })) + ' · ' +
            esc(SM.t('teacher.type')) + ': ' + esc(SM.t('extype.' + l.exercise.type)) + '</p>' +
            (l.teacher ? md(L(l.teacher.note)) : '') +
            '<p class="muted small">' + esc(SM.t('lesson.discuss')) + ': ' + esc(L(l.discuss)) + '</p>' +
            (l.teacher && l.teacher.source ? '<p class="muted small">' + esc(SM.t('teacher.sourcesShort')) + ': ' + esc(l.teacher.source.join(', ')) + '</p>' : '') +
            '</li>';
        }).join('') + '</ol></details>';
    }).join('');

    var types = {};
    Object.keys(SM.content.lessons).forEach(function (id) {
      var l = SM.content.lessons[id];
      types[l.exercise.type] = (types[l.exercise.type] || 0) + 1;
      if (l.harder && l.harder.type) types[l.harder.type] = (types[l.harder.type] || 0) + 1;
    });
    SM.content.workshops.forEach(function (w) { [w.warmup, w.main].forEach(function (e) { types[e.type] = (types[e.type] || 0) + 1; }); });
    var totalEx = Object.keys(SM.content.lessons).length * 2 + SM.content.workshops.length * 2 + SM.content.lab.length +
      ((SM.content.vocab && SM.content.vocab.drills.length) || 0) + SM.content.daily.length;

    var html = '<div class="page teacher">' +
      SM.ui.pageHead({ kicker: SM.t('teacher.kicker'), title: SM.t('teacher.title'), lead: SM.t('teacher.lead') }) +
      '<div class="stats">' +
      '<div class="stat"><span class="stat__n">' + Object.keys(SM.content.lessons).length + '</span><span class="stat__label">' + esc(SM.t('teacher.statLessons')) + '</span></div>' +
      '<div class="stat"><span class="stat__n">' + totalEx + '</span><span class="stat__label">' + esc(SM.t('teacher.statExercises')) + '</span></div>' +
      '<div class="stat"><span class="stat__n">' + Object.keys(types).length + '</span><span class="stat__label">' + esc(SM.t('teacher.statTypes')) + '</span></div>' +
      '<div class="stat"><span class="stat__n">' + SM.content.workshops.length + '</span><span class="stat__label">' + esc(SM.t('teacher.statWorkshops')) + '</span></div>' +
      '</div>' +
      '<section><h2 class="section__title">' + esc(SM.t('teacher.principles')) + '</h2><ol class="principles__list principles__list--full">' +
      t.principles.map(function (p) { return '<li><p class="principles__title">' + esc(L(p.title)) + '</p>' + md(L(p.text)) + '</li>'; }).join('') + '</ol></section>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('teacher.howTo')) + '</h2><div class="prose">' + md(L(t.howTo)) + '</div></section>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('teacher.feedback')) + '</h2><div class="prose">' + md(L(t.feedback)) + '</div></section>' +
      '<section class="card card--safety"><h2 class="section__title">' + icon('lock') + esc(SM.t('teacher.safety')) + '</h2><div class="prose">' + md(L(t.safety)) + '</div></section>' +
      '<section><h2 class="section__title">' + esc(SM.t('teacher.map')) + '</h2><p class="muted">' + esc(SM.t('teacher.mapHow')) + '</p>' + lessonNotes +
      '<p class="chips">' + Object.keys(types).map(function (k) { return SM.ui.chip(SM.t('extype.' + k) + ' · ' + types[k]); }).join('') + '</p></section>' +
      (t.dependencies ? '<section><h2 class="section__title">' + esc(SM.t('teacher.deps')) + '</h2><div class="tablewrap"><table class="simpletable"><thead><tr><th>' + esc(SM.t('teacher.depFeature')) +
        '</th><th>' + esc(SM.t('teacher.depNow')) + '</th><th>' + esc(SM.t('teacher.depNeeds')) + '</th></tr></thead><tbody>' +
        t.dependencies.map(function (d) { return '<tr><td>' + esc(L(d.feature)) + '</td><td>' + esc(L(d.now)) + '</td><td>' + esc(L(d.needs)) + '</td></tr>'; }).join('') +
        '</tbody></table></div></section>' : '') +
      '<section><h2 class="section__title">' + esc(SM.t('teacher.sources')) + '</h2><p class="muted">' + esc(SM.t('teacher.sourcesHow')) + '</p><ul class="sources">' +
      t.sources.map(function (s) {
        var list = used[s.id] || [];
        return '<li class="source" id="src-' + esc(s.id) + '"><p class="source__title"><strong>' + esc(s.title) + '</strong>' + (s.author ? ' — ' + esc(s.author) : '') + (s.year ? ', ' + esc(s.year) : '') +
          ' <code>' + esc(s.id) + '</code></p>' +
          (s.url ? '<p class="small"><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + '</a></p>' : '') +
          '<p>' + esc(L(s.used)) + '</p>' +
          (s.licence ? '<p class="muted small">' + esc(SM.t('teacher.licence')) + ': ' + esc(L(s.licence)) + '</p>' : '') +
          (list.length ? '<details><summary class="small">' + esc(SM.t('teacher.usedIn', { n: list.length })) + '</summary><p class="small">' +
            list.map(function (x) { return '<a href="' + esc(x.href) + '">' + esc(x.label) + '</a>'; }).join(' · ') + '</p></details>' : '') +
          '</li>';
      }).join('') + '</ul></section>' +
      (books.length ? '<section><h2 class="section__title">' + esc(SM.t('teacher.reading')) + '</h2><ul class="booklist">' + books.map(function (x) {
        return '<li><span class="booklist__title">' + esc(SM.L(x.b.title)) + '</span> — ' + esc(SM.L(x.b.author)) + ' ' + SM.ui.chip(x.b.age || '13+', 'chip--age') + ' <span class="muted small">(' + esc(x.ws) + ')</span></li>';
      }).join('') + '</ul>' + (t.adultNote ? '<aside class="note">' + icon('lock') + '<div>' + md(L(t.adultNote)) + '</div></aside>' : '') + '</section>' : '') +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('teacher.docs')) + '</h2><p>' + esc(SM.t('teacher.docsText')) + '</p></section>' +
      '</div>';
    return { title: SM.t('teacher.title'), html: html };
  };
})();
