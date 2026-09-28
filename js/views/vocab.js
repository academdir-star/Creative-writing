/* Vocabulary module: word journal, activation tracking from the student's own texts, drills. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  var REGISTERS = ['neutral', 'formal', 'casual', 'bookish', 'special'];

  // How often each journal word appears in the student's own drafts
  function usage(word) {
    var drafts = SM.store.listDrafts();
    var hits = [];
    drafts.forEach(function (d) {
      var text = SM.exercise.collectText({}, d);
      if (!text) return;
      var lang = SM.exercise.detectLang(text, d.lang);
      if (lang !== word.lang) return;
      var n = SM.text.countWord(text, word.word, word.lang);
      // a word written in the drill sentence itself only counts once
      if (n > 0) hits.push({ id: d.id, n: n, t: d.updated });
    });
    hits.sort(function (a, b) { return a.t - b.t; });
    return { drafts: hits.length, total: hits.reduce(function (s, h) { return s + h.n; }, 0), activatedAt: hits.length >= 2 ? hits[1].t : null };
  }

  function weeksChart(words) {
    var weeks = [];
    var now = new Date();
    for (var i = 9; i >= 0; i--) {
      var d = new Date(now.getTime() - i * 7 * 86400000);
      weeks.push({ key: U.weekKey(d), added: 0, active: 0 });
    }
    var byKey = {};
    weeks.forEach(function (w) { byKey[w.key] = w; });
    words.forEach(function (w) {
      var k = U.weekKey(new Date(w.added));
      if (byKey[k]) byKey[k].added++;
      if (w.u.activatedAt) {
        var ka = U.weekKey(new Date(w.u.activatedAt));
        if (byKey[ka]) byKey[ka].active++;
      }
    });
    var max = Math.max.apply(null, weeks.map(function (w) { return Math.max(w.added, w.active); }).concat([3]));
    return '<div class="weekchart" role="img" aria-label="' + esc(SM.t('vocab.chartAria')) + '">' + weeks.map(function (w) {
      return '<div class="weekchart__col" title="' + esc(w.key + ': +' + w.added + ' / ✓' + w.active) + '">' +
        '<span class="weekchart__bars"><span class="weekchart__bar weekchart__bar--added" style="height:' + Math.round(w.added / max * 100) + '%"></span>' +
        '<span class="weekchart__bar weekchart__bar--active" style="height:' + Math.round(w.active / max * 100) + '%"></span></span>' +
        '<span class="weekchart__label">' + esc(w.key.slice(-3)) + '</span></div>';
    }).join('') + '</div>' +
      '<p class="fb__legend"><span class="legend legend--added">' + esc(SM.t('vocab.legendAdded')) + '</span> <span class="legend legend--active">' + esc(SM.t('vocab.legendActive')) + '</span></p>';
  }

  function journalHtml(words) {
    if (!words.length) return '<p class="muted">' + esc(SM.t('vocab.emptyJournal')) + '</p>';
    return '<ul class="wordlist">' + words.map(function (w) {
      var state = w.u.drafts >= 2 ? 'active' : (w.u.drafts === 1 ? 'tried' : 'new');
      return '<li class="worditem worditem--' + state + '"><div class="worditem__head"><span class="worditem__word">' + esc(w.word) + '</span>' +
        SM.ui.chip(SM.t('vocab.reg.' + w.register), 'chip--genre') + SM.ui.chip(w.lang.toUpperCase()) +
        '<span class="worditem__state">' + esc(SM.t('vocab.state.' + state, { n: w.u.drafts })) + '</span>' +
        '<button class="iconbtn iconbtn--small" type="button" data-word-del="' + esc(w.id) + '" aria-label="' + esc(SM.t('common.delete')) + '">' + icon('trash') + '</button></div>' +
        (w.meaning ? '<p class="worditem__meaning">' + esc(w.meaning) + '</p>' : '') +
        (w.example ? '<p class="worditem__example">' + esc(w.example) + '</p>' : '') +
        (w.source ? '<p class="muted small">' + esc(SM.t('vocab.foundIn')) + ': ' + esc(w.source) + '</p>' : '') + '</li>';
    }).join('') + '</ul>';
  }

  SM.views.vocab = function () {
    var v = SM.content.vocab;
    var words = SM.store.state.vocab.map(function (w) { var x = Object.create(w); x.u = usage(w); return x; });
    var activated = words.filter(function (w) { return w.u.drafts >= 2; }).length;
    var tried = words.filter(function (w) { return w.u.drafts === 1; }).length;

    var html = '<div class="page vocab">' +
      SM.ui.pageHead({ kicker: SM.t('vocab.kicker'), title: SM.t('vocab.title'), lead: SM.t('vocab.lead') }) +
      (v ? '<section class="prose vocab__intro">' + md(L(v.intro)) + '</section>' : '') +
      '<div class="stats">' +
      '<div class="stat"><span class="stat__n">' + words.length + '</span><span class="stat__label">' + esc(SM.t('vocab.statWords')) + '</span></div>' +
      '<div class="stat"><span class="stat__n">' + tried + '</span><span class="stat__label">' + esc(SM.t('vocab.statTried')) + '</span></div>' +
      '<div class="stat"><span class="stat__n">' + activated + '</span><span class="stat__label">' + esc(SM.t('vocab.statActive')) + '</span></div>' +
      '</div>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('vocab.progress')) + '</h2>' + weeksChart(words) +
      '<p class="muted">' + esc(SM.t('vocab.activeHow')) + '</p></section>' +

      '<section><h2 class="section__title">' + esc(SM.t('vocab.journal')) + '</h2>' +
      '<form class="wordform" data-word-form>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('vocab.word')) + '</span><input class="input" name="word" required autocomplete="off"></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('vocab.meaning')) + '</span><input class="input" name="meaning" autocomplete="off"></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('vocab.register')) + '</span><select class="input" name="register">' +
      REGISTERS.map(function (r) { return '<option value="' + r + '">' + esc(SM.t('vocab.reg.' + r)) + '</option>'; }).join('') + '</select></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('vocab.source')) + '</span><input class="input" name="source" autocomplete="off"></label>' +
      '<label class="field field--wide"><span class="field__label">' + esc(SM.t('vocab.example')) + '</span><textarea class="input input--area" name="example" rows="2"></textarea></label>' +
      '<button class="btn btn--primary" type="submit">' + icon('plus') + esc(SM.t('vocab.add')) + '</button></form>' +
      '<div data-journal>' + journalHtml(words) + '</div></section>' +

      (v ? '<section><h2 class="section__title">' + esc(SM.t('vocab.drills')) + '</h2><div class="cards">' + v.drills.map(function (d) {
        var dr = SM.store.findDraft('vocab', d.id);
        return '<a class="libcard" href="#/vocab/' + esc(d.id) + '"><span class="libcard__title">' + esc(L(d.title)) + '</span>' +
          '<span class="libcard__meta muted">' + esc(U.plain(L(d.how)).slice(0, 110)) + '…</span>' +
          (dr ? SM.ui.chip(SM.t('status.started'), 'chip--started') : '') + '</a>';
      }).join('') + '</div></section>' : '') +

      (v ? '<section class="card"><h2 class="section__title">' + esc(SM.t('vocab.method')) + '</h2><div class="prose">' + md(L(v.method)) + '</div>' +
        (v.weekPlan ? '<h3 class="step__sub">' + esc(SM.t('vocab.weekPlan')) + '</h3><ol class="changes">' + v.weekPlan.map(function (x) { return '<li>' + md(L(x)).replace(/^<p>|<\/p>$/g, '') + '</li>'; }).join('') + '</ol>' : '') +
        '</section>' : '') +

      (v && v.shades ? '<details class="panel"><summary>' + icon('words') + esc(SM.t('vocab.shades')) + '</summary><div class="tablewrap"><table class="simpletable"><tbody>' +
        (v.shades[SM.lang()] || []).map(function (row) {
          return '<tr><th scope="row">' + esc(row.base) + '</th><td>' + esc((row.words || []).join(' → ')) + (row.note ? '<br><span class="muted small">' + esc(row.note) + '</span>' : '') + '</td></tr>';
        }).join('') + '</tbody></table></div></details>' : '') +
      (v && v.registers ? '<details class="panel"><summary>' + icon('chat') + esc(SM.t('vocab.registers')) + '</summary><div class="tablewrap"><table class="simpletable"><thead><tr><th>' +
        esc(SM.t('vocab.reg.formal')) + '</th><th>' + esc(SM.t('vocab.reg.neutral')) + '</th><th>' + esc(SM.t('vocab.reg.casual')) + '</th></tr></thead><tbody>' +
        (v.registers[SM.lang()] || []).map(function (row) {
          return '<tr><td>' + esc(row.formal) + '</td><td>' + esc(row.neutral) + '</td><td>' + esc(row.casual) + '</td></tr>';
        }).join('') + '</tbody></table></div></details>' : '') +
      '</div>';

    return {
      title: SM.t('vocab.title'),
      html: html,
      mount: function (root) {
        root.querySelector('[data-word-form]').addEventListener('submit', function (e) {
          e.preventDefault();
          var f = e.target;
          var lang = SM.exercise.detectLang(f.word.value + ' ' + f.example.value + ' ' + f.meaning.value, SM.lang());
          if (/[а-яё]/i.test(f.word.value)) lang = 'ru'; else if (/[a-z]/i.test(f.word.value)) lang = 'en';
          var w = SM.store.addWord({ word: f.word.value, meaning: f.meaning.value.trim(), register: f.register.value, source: f.source.value.trim(), example: f.example.value.trim(), lang: lang });
          if (!w) return;
          f.reset();
          SM.ui.toast(SM.t('vocab.added'));
          SM.app.rerender();
        });
        root.addEventListener('click', function (e) {
          var b = e.target.closest('[data-word-del]');
          if (!b) return;
          SM.ui.confirm(SM.t('vocab.deleteConfirm'), SM.t('common.delete'), function () {
            SM.store.removeWord(b.dataset.wordDel);
            SM.app.rerender();
          }, true);
        });
      }
    };
  };

  SM.views.vocabDrill = function (params) {
    var v = SM.content.vocab;
    var drill = v && v.drills.filter(function (d) { return d.id === params.drill; })[0];
    if (!drill) return SM.views.notFound();
    var controller = null;
    var ex = drill.exercise;
    var journalWords = SM.store.state.vocab.filter(function (w) { return w.lang === SM.lang(); }).slice(0, 3).map(function (w) { return w.word; });
    var useJournal = drill.id === 'reuse' && journalWords.length >= 1;

    var html = '<div class="page">' +
      SM.ui.pageHead({ back: { href: '#/vocab', label: SM.t('vocab.title') }, kicker: SM.t('vocab.drill'), title: L(drill.title) }) +
      '<div class="prose">' + md(L(drill.how)) + '</div>' +
      (useJournal ? '<aside class="note">' + icon('words') + '<div><p>' + esc(SM.t('vocab.fromJournal', { words: journalWords.join(', ') })) + '</p></div></aside>' : '') +
      '<div data-ex></div></div>';

    return {
      title: L(drill.title),
      html: html,
      mount: function (root) {
        var d = SM.store.ensureDraft({ kind: 'vocab', ref: drill.id, skills: ['words'] });
        controller = SM.exercise.mount(root.querySelector('[data-ex]'), {
          exercise: ex, draft: d, ctx: { skills: ['words'], kind: 'vocab', mustWords: useJournal ? journalWords : null }
        });
      },
      destroy: function () { if (controller) controller.destroy(); }
    };
  };
})();
