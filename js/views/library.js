/* Library: analytical reading and version comparisons. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  var READ_TAGS = ['word', 'detail', 'rhythm', 'pov', 'effect'];
  var STD_Q = ['compare.q1', 'compare.q2', 'compare.q3'];

  function readingState(key) {
    var st = SM.store.state.readings;
    if (!st[key]) st[key] = { tags: {}, qa: {}, revealed: false };
    return st[key];
  }

  SM.views.library = function () {
    var readings = SM.content.readings;
    var comps = SM.content.comparisons;
    var html = '<div class="page">' +
      SM.ui.pageHead({ kicker: SM.t('library.kicker'), title: SM.t('library.title'), lead: SM.t('library.lead') }) +
      '<h2 class="section__title">' + esc(SM.t('library.readings')) + '</h2>' +
      '<p class="muted">' + esc(SM.t('library.readingsHow')) + '</p>' +
      (readings.length ? '<div class="cards">' + readings.map(function (r) {
        var s = SM.store.state.readings[r.id];
        return '<a class="libcard" href="#/reading/' + esc(r.id) + '">' + SM.ui.chip(SM.ui.genreName(r.genre), 'chip--genre') +
          '<span class="libcard__title">' + esc(L(r.title)) + '</span>' +
          '<span class="libcard__meta muted">' + esc(SM.t('common.minutes', { n: r.minutes || 5 })) + (s && Object.keys(s.tags).length ? ' · ' + esc(SM.t('library.started')) : '') + '</span></a>';
      }).join('') + '</div>' : SM.ui.emptyState(SM.t('common.soon'))) +
      '<h2 class="section__title">' + esc(SM.t('library.comparisons')) + '</h2>' +
      '<p class="muted">' + esc(SM.t('library.comparisonsHow')) + '</p>' +
      (comps.length ? '<div class="cards">' + comps.map(function (c) {
        return '<a class="libcard libcard--compare" href="#/compare/' + esc(c.id) + '"><span class="libcard__ab">A / B</span>' +
          '<span class="libcard__title">' + esc(L(c.title)) + '</span><span class="libcard__meta muted">' + esc(U.plain(L(c.task)).slice(0, 90)) + '</span></a>';
      }).join('') + '</div>' : SM.ui.emptyState(SM.t('common.soon'))) +
      '<a class="tile tile--wide" href="#/genres">' + icon('map', 'tile__icon') + '<span class="tile__title">' + esc(SM.t('nav.genres')) + '</span><span class="tile__text">' + esc(SM.t('home.tile.genres')) + '</span></a>' +
      '</div>';
    return { title: SM.t('library.title'), html: html };
  };

  function tokenized(text, tags) {
    var i = 0;
    return esc(text).replace(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu, function (w) {
      var tag = tags[i];
      var s = '<button type="button" class="tok' + (tag ? ' tok--' + tag : '') + '" data-tok="' + i + '">' + w + '</button>';
      i++;
      return s;
    }).replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
  }

  function notesMarked(text, notes) {
    var m = [];
    notes.forEach(function (n, i) {
      var q = U.plain(L(n.quote));
      var ix = text.indexOf(q);
      if (ix !== -1) m.push({ start: ix, end: ix + q.length, cls: 'note', title: String(i + 1) });
    });
    return SM.text.highlight(text, m);
  }

  SM.views.reading = function (params) {
    var r = SM.content.readings.filter(function (x) { return x.id === params.id; })[0];
    if (!r) return SM.views.notFound();
    var st = readingState(r.id);
    var text = U.plain(L(r.text));
    var controller = null;
    var currentTag = st.currentTag || 'word';

    function palette() {
      return READ_TAGS.map(function (t, ti) {
        var count = Object.keys(st.tags).filter(function (k) { return st.tags[k] === t; }).length;
        return '<button type="button" class="tagbtn tagbtn--' + ti + (currentTag === t ? ' is-active' : '') + '" data-tag="' + t + '" aria-pressed="' + (currentTag === t) + '">' +
          esc(SM.t('read.tag.' + t)) + ' <span class="tagbtn__n">' + count + '</span></button>';
      }).join('');
    }

    var html = '<div class="page reading">' +
      SM.ui.pageHead({ back: { href: '#/library', label: SM.t('library.title') }, kicker: SM.ui.genreName(r.genre), title: L(r.title) }) +
      '<p class="muted">' + esc(SM.t('read.how')) + '</p>' +
      '<style>' + READ_TAGS.map(function (t, ti) { return '.tok--' + t + '{--tagc:var(--tag' + ti + ')}'; }).join('') + '</style>' +
      '<div class="tagpalette" role="group" data-palette>' + palette() + '</div>' +
      '<div class="annotext annotext--reading" data-text>' + tokenized(text, st.tags) + '</div>' +
      '<div class="ex__row"><button class="btn btn--small btn--ghost" type="button" data-clear>' + esc(SM.t('read.clear')) + '</button>' +
      '<button class="btn btn--small" type="button" data-reveal>' + icon('eye') + esc(SM.t(st.revealed ? 'read.hideNotes' : 'read.showNotes')) + '</button></div>' +
      '<section class="notes" data-notes' + (st.revealed ? '' : ' hidden') + '><h2 class="section__title">' + esc(SM.t('read.notes')) + '</h2>' +
      '<div class="mirror mirror--reading">' + notesMarked(text, r.notes) + '</div>' +
      '<ol class="notes__list">' + r.notes.map(function (n) {
        return '<li><p class="notes__quote">«' + esc(U.plain(L(n.quote))) + '»</p>' + md(L(n.comment)) + '</li>';
      }).join('') + '</ol></section>' +
      '<section><h2 class="section__title">' + esc(SM.t('read.questions')) + '</h2><div class="ex__fields">' + r.questions.map(function (q, i) {
        return '<label class="field"><span class="field__label">' + esc(U.plain(L(q))) + '</span>' +
          '<textarea class="input input--area" rows="2" data-qa="' + i + '">' + esc(st.qa[i] || '') + '</textarea></label>';
      }).join('') + '</div></section>' +
      '<section class="card"><p class="card__kicker">' + icon('pen') + esc(SM.t('read.try')) + '</p><div data-try></div></section>' +
      '</div>';

    return {
      title: L(r.title),
      html: html,
      mount: function (root) {
        var d = SM.store.ensureDraft({ kind: 'reading', ref: r.id, skills: ['observation', 'words'] });
        controller = SM.exercise.mount(root.querySelector('[data-try]'), {
          exercise: { type: 'free', prompt: r.tryIt }, draft: d, ctx: { skills: ['observation', 'words'], kind: 'reading' }
        });
        root.querySelectorAll('[data-qa]').forEach(SM.ui.autosize);
        root.addEventListener('input', function (e) {
          var el = e.target.closest('[data-qa]');
          if (!el) return;
          st.qa[el.dataset.qa] = el.value;
          SM.ui.autosize(el);
          SM.store.save();
        });
        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          if (b.dataset.tag) {
            currentTag = b.dataset.tag; st.currentTag = currentTag; SM.store.save();
            root.querySelector('[data-palette]').innerHTML = palette();
            return;
          }
          if (b.dataset.tok != null) {
            if (st.tags[b.dataset.tok] === currentTag) delete st.tags[b.dataset.tok]; else st.tags[b.dataset.tok] = currentTag;
            SM.store.save();
            b.className = 'tok' + (st.tags[b.dataset.tok] ? ' tok--' + st.tags[b.dataset.tok] : '');
            root.querySelector('[data-palette]').innerHTML = palette();
            return;
          }
          if (b.hasAttribute('data-clear')) {
            st.tags = {}; SM.store.save();
            root.querySelector('[data-text]').innerHTML = tokenized(text, st.tags);
            root.querySelector('[data-palette]').innerHTML = palette();
            return;
          }
          if (b.hasAttribute('data-reveal')) {
            st.revealed = !st.revealed; SM.store.save();
            root.querySelector('[data-notes]').hidden = !st.revealed;
            b.innerHTML = icon('eye') + esc(SM.t(st.revealed ? 'read.hideNotes' : 'read.showNotes'));
            if (st.revealed) root.querySelector('[data-notes]').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      },
      destroy: function () { if (controller) controller.destroy(); }
    };
  };

  SM.views.compare = function (params) {
    var c = SM.content.comparisons.filter(function (x) { return x.id === params.id; })[0];
    if (!c) return SM.views.notFound();
    var st = readingState('c:' + c.id);
    var a = U.plain(L(c.a)), b = U.plain(L(c.b));
    var qs = STD_Q.map(function (k) { return SM.t(k); });

    var html = '<div class="page compare">' +
      SM.ui.pageHead({ back: { href: '#/library', label: SM.t('library.title') }, kicker: SM.t('compare.kicker'), title: L(c.title) }) +
      '<aside class="note">' + icon('target') + '<div><p class="note__title">' + esc(SM.t('compare.task')) + '</p>' + md(L(c.task)) + '</div></aside>' +
      '<div class="versions2">' +
      '<div class="versions2__col"><p class="ex__label">' + esc(SM.t('compare.a')) + '</p>' + md(L(c.a)) + '</div>' +
      '<div class="versions2__col"><p class="ex__label">' + esc(SM.t('compare.b')) + '</p>' + md(L(c.b)) + '</div></div>' +
      '<details class="panel"><summary>' + icon('eye') + esc(SM.t('compare.showDiff')) + '</summary><div class="diff">' + U.diffHtml(a, b) + '</div></details>' +
      '<section><h2 class="section__title">' + esc(SM.t('compare.yourAnswers')) + '</h2><div class="ex__fields">' + qs.map(function (q, i) {
        return '<label class="field"><span class="field__label">' + esc(q) + '</span><textarea class="input input--area" rows="2" data-qa="' + i + '">' + esc(st.qa[i] || '') + '</textarea></label>';
      }).join('') + '</div>' +
      '<button class="btn" type="button" data-reveal>' + icon('eye') + esc(SM.t(st.revealed ? 'compare.hide' : 'compare.reveal')) + '</button></section>' +
      '<section class="notes" data-notes' + (st.revealed ? '' : ' hidden') + '><h2 class="section__title">' + esc(SM.t('compare.changed')) + '</h2>' + md(L(c.changed)) +
      (c.better ? '<h2 class="section__title">' + esc(SM.t('compare.better')) + '</h2>' + md(L(c.better)) : '') + '</section>' +
      '</div>';

    return {
      title: L(c.title),
      html: html,
      mount: function (root) {
        root.querySelectorAll('[data-qa]').forEach(SM.ui.autosize);
        root.addEventListener('input', function (e) {
          var el = e.target.closest('[data-qa]');
          if (!el) return;
          st.qa[el.dataset.qa] = el.value;
          SM.ui.autosize(el);
          SM.store.save();
        });
        root.querySelector('[data-reveal]').addEventListener('click', function (e) {
          st.revealed = !st.revealed;
          SM.store.save();
          root.querySelector('[data-notes]').hidden = !st.revealed;
          e.currentTarget.innerHTML = icon('eye') + esc(SM.t(st.revealed ? 'compare.hide' : 'compare.reveal'));
        });
      }
    };
  };
})();
