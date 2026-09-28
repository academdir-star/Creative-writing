/* Style lab: pick a technique, edit a flat text, watch a live meter. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  function marks(list, cls) {
    return list.map(function (t) { return { start: t.start, end: t.end, cls: cls }; });
  }

  // Live meter for a technique
  function meter(kind, text, original) {
    var lang = SM.exercise.detectLang(text);
    var a = SM.text.analyze(text, lang);
    var out = '';
    var hl = [];
    switch (kind) {
      case 'adjectives':
        hl = marks(a.adjectives, 'label').concat(marks(a.labels, 'emotion'));
        out = row(SM.t('meter.adjectives'), a.adjectives.length) + row(SM.t('meter.labels'), a.labels.length) +
          '<p class="meter__note">' + esc(SM.t('meter.adjNote')) + '</p>';
        break;
      case 'emotions':
        hl = marks(a.emotions, 'emotion');
        out = row(SM.t('meter.emotions'), a.emotions.length) + row(SM.t('meter.sensory'), a.sensory.length);
        break;
      case 'rhythm':
        out = rhythmBars(a) + row(SM.t('meter.avg'), a.avgLen.toFixed(1)) + row(SM.t('meter.range'), a.shortest + '–' + a.longest);
        break;
      case 'verbs':
        hl = marks(a.weakVerbs, 'filler');
        out = row(SM.t('meter.weakVerbs'), a.weakVerbs.length) + row(SM.t('meter.words'), a.words);
        break;
      case 'cliches':
        hl = marks(a.cliches, 'cliche').concat(marks(a.labels, 'label'));
        out = row(SM.t('meter.cliches'), a.cliches.length) + row(SM.t('meter.labels'), a.labels.length);
        break;
      case 'dialogue':
        hl = marks(a.explain, 'cliche').concat(marks(a.said, 'filler')).concat(marks(a.emotions, 'emotion'));
        out = row(SM.t('meter.lines'), a.dialogue.length) + row(SM.t('meter.said'), a.said.length) +
          row(SM.t('meter.explain'), a.explain.length) + row(SM.t('meter.emotions'), a.emotions.length);
        break;
      case 'pov':
        out = povBars(a);
        break;
      case 'cut': {
        var before = SM.text.wordCount(original);
        var pct = before ? Math.round((before - a.words) / before * 100) : 0;
        hl = marks(a.fillers, 'filler').concat(marks(a.repeats.reduce(function (acc, r) { return acc.concat(r.tokens.slice(1)); }, []), 'label'));
        out = row(SM.t('meter.wordsNow'), a.words) + row(SM.t('meter.wordsBefore'), before) + row(SM.t('meter.cutBy'), pct + '%') +
          row(SM.t('meter.fillers'), a.fillers.length);
        break;
      }
      case 'sensory':
        hl = a.sensory.map(function (t) { return { start: t.start, end: t.end, cls: 'sense', title: SM.t('sense.' + t.sense) }; });
        var bySense = {};
        a.sensory.forEach(function (t) { bySense[t.sense] = (bySense[t.sense] || 0) + 1; });
        out = ['sight', 'sound', 'smell', 'touch', 'taste'].map(function (s) { return row(SM.t('sense.' + s), bySense[s] || 0); }).join('');
        break;
      case 'repeats':
        hl = marks(a.repeats.reduce(function (acc, r) { return acc.concat(r.tokens); }, []), 'label');
        out = row(SM.t('meter.repeats'), a.repeats.map(function (r) { return r.word + ' ×' + r.n; }).join(', ') || '—');
        break;
      default:
        out = row(SM.t('meter.words'), a.words) + '<p class="meter__note">' + esc(SM.t('meter.none')) + '</p>';
    }
    return {
      stats: out,
      mirror: hl.length ? SM.text.highlight(text, hl) : ''
    };
  }

  function row(label, value) {
    return '<div class="meter__row"><span>' + esc(label) + '</span><strong>' + esc(String(value)) + '</strong></div>';
  }

  function rhythmBars(a) {
    if (!a.sentences.length) return '';
    var max = Math.max.apply(null, a.lengths.concat([12]));
    return '<div class="rhythm" role="img" aria-label="' + esc(SM.t('meter.rhythmAria')) + '">' + a.sentences.map(function (s) {
      return '<span class="rhythm__bar" style="width:' + Math.max(4, Math.round(s.words / max * 100)) + '%" title="' + esc(s.text) + '"><span>' + s.words + '</span></span>';
    }).join('') + '</div>';
  }

  function povBars(a) {
    var total = a.pov.first + a.pov.second + a.pov.third || 1;
    return ['first', 'second', 'third'].map(function (k) {
      return '<div class="meter__row meter__row--bar"><span>' + esc(SM.t('meter.pov.' + k)) + '</span>' +
        '<span class="bar"><span style="width:' + Math.round(a.pov[k] / total * 100) + '%"></span></span><strong>' + a.pov[k] + '</strong></div>';
    }).join('');
  }

  SM.views.lab = function () {
    var list = SM.content.lab;
    var html = '<div class="page">' +
      SM.ui.pageHead({ kicker: SM.t('lab.kicker'), title: SM.t('lab.title'), lead: SM.t('lab.lead') }) +
      (list.length ? '<div class="labgrid">' + list.map(function (t, i) {
        return '<a class="labcard" href="#/lab/' + esc(t.id) + '"><span class="labcard__n">' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</span>' +
          '<span class="labcard__title">' + esc(L(t.title)) + '</span><span class="labcard__short">' + esc(L(t.short)) + '</span></a>';
      }).join('') + '</div>' : SM.ui.emptyState(SM.t('common.soon'))) +
      '<aside class="note">' + icon('eye') + '<div><p>' + esc(SM.t('lab.honest')) + '</p></div></aside>' +
      '</div>';
    return { title: SM.t('lab.title'), html: html };
  };

  SM.views.labItem = function (params) {
    var list = SM.content.lab;
    var ix = -1;
    list.forEach(function (t, i) { if (t.id === params.id) ix = i; });
    if (ix === -1) return SM.views.notFound();
    var t = list[ix];
    var flat = U.plain(L(t.flat));
    var saved = SM.store.findDraft('lab', t.id, 'sandbox');
    var start = saved && saved.lang === SM.lang() && saved.text ? saved.text : flat;
    var prev = list[ix - 1], next = list[ix + 1];

    var html = '<div class="page labitem">' +
      SM.ui.pageHead({ back: { href: '#/lab', label: SM.t('lab.title') }, kicker: SM.t('lab.technique', { n: ix + 1, total: list.length }), title: L(t.title), lead: L(t.short) }) +
      '<section class="labitem__example"><p class="ex__label">' + esc(SM.t('lab.example')) + '</p>' + md(L(t.example)) + '</section>' +
      '<section class="sandbox"><div class="sandbox__head"><h2 class="section__title">' + esc(SM.t('lab.sandbox')) + '</h2>' +
      '<button class="btn btn--small btn--ghost" type="button" data-reset>' + icon('refresh') + esc(SM.t('lab.reset')) + '</button></div>' +
      '<div class="sandbox__task">' + icon('target') + md(L(t.task)) + '</div>' +
      '<div class="sandbox__grid"><div class="sandbox__edit"><textarea class="writer" rows="8" data-sandbox aria-label="' + esc(SM.t('lab.sandbox')) + '">' + esc(start) + '</textarea>' +
      '<details class="panel"><summary>' + icon('eye') + esc(SM.t('lab.diff')) + '</summary><div class="diff" data-diff></div></details></div>' +
      '<div class="meter" aria-live="polite"><p class="meter__title">' + esc(SM.t('lab.meter')) + '</p><div data-stats></div><div class="mirror mirror--small" data-mirror></div></div></div>' +
      '</section>' +
      '<div class="proscons">' +
      '<section class="proscons__col proscons__col--helps"><h2>' + esc(SM.t('lab.helps')) + '</h2>' + md(L(t.helps)) + '</section>' +
      '<section class="proscons__col proscons__col--hurts"><h2>' + esc(SM.t('lab.hurts')) + '</h2>' + md(L(t.hurts)) + '</section>' +
      '</div>' +
      '<section class="fail"><h2 class="section__title">' + esc(SM.t('lab.fail')) + '</h2>' +
      '<div class="fail__text">' + md(L(t.fail.text)) + '</div><div class="fail__why">' + icon('bulb') + md(L(t.fail.why)) + '</div></section>' +
      '<section class="card"><p class="card__kicker">' + icon('pen') + esc(SM.t('lab.try')) + '</p>' + md(L(t.tryPrompt)) +
      '<button class="btn btn--primary" type="button" data-try>' + esc(SM.t('lab.tryButton')) + icon('arrow') + '</button></section>' +
      '<nav class="pager">' +
      (prev ? '<a class="btn btn--ghost" href="#/lab/' + esc(prev.id) + '">' + icon('back') + esc(L(prev.title)) + '</a>' : '<span></span>') +
      (next ? '<a class="btn btn--ghost" href="#/lab/' + esc(next.id) + '">' + esc(L(next.title)) + icon('arrow') + '</a>' : '') +
      '</nav></div>';

    return {
      title: L(t.title),
      html: html,
      mount: function (root) {
        var ta = root.querySelector('[data-sandbox]');
        var draft = saved;
        function update() {
          var m = meter(t.meter, ta.value, flat);
          root.querySelector('[data-stats]').innerHTML = m.stats;
          root.querySelector('[data-mirror]').innerHTML = m.mirror;
          root.querySelector('[data-diff]').innerHTML = U.diffHtml(flat, ta.value);
        }
        var persist = U.debounce(function () {
          if (!draft) draft = SM.store.createDraft({ kind: 'lab', ref: t.id, part: 'sandbox', skills: [], title: SM.t('nav.lab') + ': ' + L(t.title) });
          SM.store.updateDraft(draft.id, { text: ta.value, lang: SM.lang() });
        }, 500);
        SM.ui.autosize(ta);
        update();
        ta.addEventListener('input', function () { SM.ui.autosize(ta); update(); persist(); });
        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          if (b.hasAttribute('data-reset')) { ta.value = flat; SM.ui.autosize(ta); update(); persist(); }
          if (b.hasAttribute('data-try')) {
            var d = SM.store.createDraft({ kind: 'lab', ref: t.id, skills: [], title: SM.t('nav.lab') + ': ' + L(t.title) });
            SM.app.go('#/draft/' + d.id);
          }
        });
      }
    };
  };

  SM.labMeter = meter;
})();
