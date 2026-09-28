/* Thematic workshops. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  SM.views.workshops = function () {
    var list = SM.content.workshops;
    var html = '<div class="page">' +
      SM.ui.pageHead({ kicker: SM.t('workshops.kicker'), title: SM.t('workshops.title'), lead: SM.t('workshops.lead') }) +
      (list.length ? '<div class="wsgrid">' + list.map(function (w) {
        var started = SM.store.findDraft('workshop', w.id, 'main') || SM.store.findDraft('workshop', w.id, 'warmup');
        return '<a class="wscard" href="#/workshop/' + esc(w.id) + '">' +
          '<span class="wscard__meta">' + SM.ui.chip(w.age || '13+', 'chip--age') + SM.ui.chip(SM.t('common.minutes', { n: w.minutes }), 'chip--time') +
          (started ? SM.ui.chip(SM.t('status.started'), 'chip--started') : '') + '</span>' +
          '<span class="wscard__title">' + esc(L(w.title)) + '</span>' +
          '<span class="wscard__hook">' + esc(U.plain(L(w.hook)).slice(0, 150)) + (U.plain(L(w.hook)).length > 150 ? '…' : '') + '</span></a>';
      }).join('') + '</div>' : SM.ui.emptyState(SM.t('common.soon'))) +
      '<aside class="note">' + icon('lock') + '<div><p>' + esc(SM.t('workshops.altNote')) + '</p></div></aside>' +
      '</div>';
    return { title: SM.t('workshops.title'), html: html };
  };

  SM.views.workshop = function (params) {
    var w = SM.content.workshops.filter(function (x) { return x.id === params.id; })[0];
    if (!w) return SM.views.notFound();
    var controllers = [];
    var skills = w.skills || ['ideas', 'scene'];

    var html = '<article class="page workshop">' +
      SM.ui.pageHead({ back: { href: '#/workshops', label: SM.t('workshops.title') }, kicker: SM.t('workshops.one'), title: L(w.title) }) +
      '<div class="lesson__meta">' + SM.ui.chip(w.age || '13+', 'chip--age') + SM.ui.chip(SM.t('common.minutes', { n: w.minutes }), 'chip--time') + '</div>' +
      '<div class="lesson__hook">' + md(L(w.hook)) + '</div>' +
      '<section class="step"><p class="step__n"><span>1</span>' + esc(SM.t('workshop.angle')) + '</p><div class="prose">' + md(L(w.angle)) + '</div>' +
      '<h3 class="step__sub">' + esc(SM.t('workshop.techniques')) + '</h3><ul class="changes">' + w.techniques.map(function (t) {
        return '<li>' + md(L(t)).replace(/^<p>|<\/p>$/g, '') + '</li>';
      }).join('') + '</ul></section>' +
      '<section class="step"><p class="step__n"><span>2</span>' + esc(SM.t('workshop.warmup')) + '</p><div data-warmup></div></section>' +
      '<section class="step"><p class="step__n"><span>3</span>' + esc(SM.t('workshop.main')) + '</p><div data-main-ex></div>' +
      '<aside class="note note--alt">' + icon('lock') + '<div><p class="note__title">' + esc(SM.t('workshop.alt')) + '</p>' + md(L(w.alt)) + '</div></aside></section>' +
      '<section class="step"><p class="step__n"><span>4</span>' + esc(SM.t('workshop.avoid')) + '</p><div class="prose">' + md(L(w.avoid)) + '</div></section>' +
      (w.reading && w.reading.length ? '<section class="step"><p class="step__n"><span>5</span>' + esc(SM.t('workshop.reading')) + '</p>' +
        '<ul class="booklist">' + w.reading.map(function (b) {
          return '<li><span class="booklist__title">' + esc(SM.L(b.title)) + '</span> — ' + esc(SM.L(b.author)) + ' ' + SM.ui.chip(b.age || '13+', 'chip--age') + '</li>';
        }).join('') + '</ul><p class="muted small">' + esc(SM.t('workshop.readingNote')) + '</p></section>' : '') +
      (w.teacher ? '<details class="panel panel--teacher"><summary>' + icon('cap') + esc(SM.t('lesson.teacherNote')) + '</summary>' + md(L(w.teacher.note)) + '</details>' : '') +
      '</article>';

    return {
      title: L(w.title),
      html: html,
      mount: function (root) {
        [['warmup', '[data-warmup]'], ['main', '[data-main-ex]']].forEach(function (pair) {
          var d = SM.store.ensureDraft({ kind: 'workshop', ref: w.id, part: pair[0], skills: skills });
          controllers.push(SM.exercise.mount(root.querySelector(pair[1]), {
            exercise: w[pair[0]], draft: d, ctx: { skills: skills, kind: 'workshop' }, noFeedback: pair[0] === 'warmup'
          }));
        });
      },
      destroy: function () { controllers.forEach(function (c) { c.destroy(); }); }
    };
  };
})();
