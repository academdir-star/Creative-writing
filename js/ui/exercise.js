/* Exercise editor: renders any exercise type, saves into a draft, gives feedback
   and lets the student rewrite a fragment. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  var TEXT_TYPES = ['free', 'rewrite', 'constraint', 'generator'];

  function hasMain(ex) { return TEXT_TYPES.indexOf(ex.type) !== -1; }

  function normalize(ex) {
    if (!ex) return { type: 'free', prompt: { ru: '', en: '' }, config: {} };
    if (!ex.type) return { type: 'free', prompt: ex.prompt, config: ex.config || {} };
    return { type: ex.type, prompt: ex.prompt, config: ex.config || {} };
  }

  function detectLang(text, fallback) {
    var s = String(text || '');
    var cyr = (s.match(/[а-яё]/gi) || []).length;
    var lat = (s.match(/[a-z]/gi) || []).length;
    if (cyr + lat < 12) return fallback || SM.lang();
    return cyr >= lat ? 'ru' : 'en';
  }

  // All text the student wrote in this draft, in reading order
  function collectText(ex, draft) {
    var d = draft.data || {};
    var parts = [];
    if (Array.isArray(d.items)) parts = parts.concat(d.items);
    if (Array.isArray(d.cols)) parts = parts.concat(d.cols);
    if (d.fields) Object.keys(d.fields).forEach(function (k) { parts.push(d.fields[k]); });
    if (Array.isArray(d.own)) parts = parts.concat(d.own);
    if (d.qa) Object.keys(d.qa).forEach(function (k) { parts.push(d.qa[k]); });
    parts.push(draft.text);
    if (typeof d.after === 'string') parts.push(d.after);
    return parts.filter(function (p) { return p && String(p).trim(); }).join('\n\n');
  }

  // The text that feedback should read: the main/"then" text if written, otherwise everything
  function feedbackText(ex, draft) {
    var after = (draft.data && draft.data.after) || '';
    if (SM.text.wordCount(after) >= 8) return after;
    if (SM.text.wordCount(draft.text) >= 12) return draft.text;
    return collectText(ex, draft);
  }

  function mount(container, opts) {
    var ex = normalize(opts.exercise);
    var draft = opts.draft;
    var cfg = ex.config;
    var ctx = opts.ctx || {};
    var timer = { left: (cfg.minutes || 0) * 60, running: false, id: null, done: false };
    var selection = '';
    var lastFeedback = null;
    if (!draft.data) draft.data = {};

    var persist = U.debounce(function () {
      SM.store.updateDraft(draft.id, { text: draft.text, data: draft.data });
      setSaved(true);
      if (opts.onUpdate) opts.onUpdate(draft);
    }, 350);

    function changed() {
      draft.updated = Date.now();
      SM.store.save();
      setSaved(false);
      updateCount();
      if (ex.type === 'constraint') renderRules();
      persist();
    }

    function setSaved(ok) {
      var el = container.querySelector('[data-saved]');
      if (el) el.textContent = ok ? SM.t('ex.saved') : SM.t('ex.saving');
    }

    // ---- Rendering ----------------------------------------------------------

    function sourceBlock() {
      if (ex.type === 'rewrite' && cfg.source) {
        return '<div class="ex__source"><p class="ex__label">' + esc(SM.t('ex.source')) + '</p>' + md(L(cfg.source)) +
          '<button class="btn btn--small btn--ghost" type="button" data-copy-source>' + icon('copy') + esc(SM.t('ex.copySource')) + '</button></div>';
      }
      if (cfg.shared) {
        return '<div class="ex__source"><p class="ex__label">' + esc(SM.t('ex.situation')) + '</p>' + md(L(cfg.shared)) + '</div>';
      }
      if (ex.type === 'constraint') {
        var cut = (cfg.rules || []).filter(function (r) { return r.kind === 'cut'; })[0];
        var src = cfg.source || (cut && cut.source);
        if (src) {
          return '<div class="ex__source"><p class="ex__label">' + esc(SM.t('ex.source')) + '</p>' + md(L(src)) +
            '<button class="btn btn--small btn--ghost" type="button" data-copy-source>' + icon('copy') + esc(SM.t('ex.copySource')) + '</button></div>';
        }
      }
      return '';
    }

    function mainArea() {
      var ph = cfg.placeholder ? L(cfg.placeholder) : SM.t('ex.placeholder');
      return '<textarea class="writer" rows="8" data-main placeholder="' + esc(ph) + '" aria-label="' + esc(SM.t('ex.yourText')) + '">' + esc(draft.text || '') + '</textarea>';
    }

    function listArea() {
      var items = draft.data.items || [];
      var n = cfg.count || 5;
      var out = '<ol class="ex__list">';
      for (var i = 0; i < n; i++) {
        var label = cfg.labels && cfg.labels[i] ? L(cfg.labels[i]) : '';
        out += '<li class="ex__item"><label>' + (label ? '<span class="ex__itemlabel">' + esc(label) + '</span>' : '') +
          '<textarea class="input input--area" rows="1" data-item="' + i + '" aria-label="' + esc(label || (i + 1) + '') + '">' + esc(items[i] || '') + '</textarea></label></li>';
      }
      return out + '</ol>';
    }

    function columnsArea() {
      var cols = draft.data.cols || [];
      return '<div class="ex__columns ex__columns--' + cfg.columns.length + '">' + cfg.columns.map(function (c, i) {
        return '<label class="ex__col"><span class="ex__collabel">' + esc(L(c.label)) + '</span>' +
          '<textarea class="writer writer--col" rows="7" data-col="' + i + '" placeholder="' + esc(c.placeholder ? L(c.placeholder) : '') + '">' + esc(cols[i] || '') + '</textarea></label>';
      }).join('') + '</div>';
    }

    function fieldsArea() {
      var vals = draft.data.fields || {};
      return '<div class="ex__fields">' + cfg.fields.map(function (f) {
        return '<label class="field"><span class="field__label">' + esc(L(f.label)) + '</span>' +
          (f.hint ? '<span class="field__hint">' + esc(L(f.hint)) + '</span>' : '') +
          '<textarea class="input input--area" rows="' + (f.rows || 2) + '" data-field="' + esc(f.id) + '">' + esc(vals[f.id] || '') + '</textarea></label>';
      }).join('') + '</div>';
    }

    function chooseArea() {
      var answers = draft.data.answers || {};
      var checked = draft.data.checked || {};
      var out = cfg.text ? '<div class="ex__source ex__source--text">' + md(L(cfg.text)) + '</div>' : '';
      out += cfg.questions.map(function (q, qi) {
        var multi = Array.isArray(q.correct) && q.correct.length > 1;
        var chosen = answers[qi] || [];
        var isChecked = !!checked[qi];
        var opts2 = q.options.map(function (o, oi) {
          var cls = 'option';
          if (chosen.indexOf(oi) !== -1) cls += ' is-chosen';
          if (isChecked && Array.isArray(q.correct)) {
            if (q.correct.indexOf(oi) !== -1) cls += ' is-right';
            else if (chosen.indexOf(oi) !== -1) cls += ' is-wrong';
          }
          return '<button type="button" class="' + cls + '" data-q="' + qi + '" data-o="' + oi + '" aria-pressed="' + (chosen.indexOf(oi) !== -1) + '">' +
            '<span class="option__mark">' + (multi ? '☐' : '○') + '</span>' + md(L(o)).replace(/^<p>|<\/p>$/g, '') + '</button>';
        }).join('');
        return '<fieldset class="question"><legend class="question__q">' + md(L(q.q)).replace(/^<p>|<\/p>$/g, '') + '</legend>' +
          (multi ? '<p class="question__hint">' + esc(SM.t('ex.multi')) + '</p>' : '') +
          '<div class="question__options">' + opts2 + '</div>' +
          '<div class="question__foot"><button class="btn btn--small" type="button" data-check="' + qi + '"' + (chosen.length ? '' : ' disabled') + '>' + esc(SM.t(q.correct === null ? 'ex.showComment' : 'ex.check')) + '</button></div>' +
          (isChecked ? '<div class="question__explain">' + md(L(q.explain)) + '</div>' : '') +
          '</fieldset>';
      }).join('');
      return out;
    }

    function currentOrder() {
      var n = cfg.blocks.length;
      var order = draft.data.order;
      if (!Array.isArray(order) || order.length !== n) {
        var base = [];
        for (var i = 0; i < n; i++) base.push(i);
        order = U.shuffle(base, U.hash(draft.id) % 233280);
        if (order.every(function (v, i) { return v === i; }) && n > 2) order = order.slice(1).concat(order[0]);
        draft.data.order = order;
      }
      return order;
    }

    function orderList(listName, indices, textOf) {
      return '<ol class="reorder" data-list="' + listName + '">' + indices.map(function (ix, pos) {
        return '<li class="reorder__item" data-pos="' + pos + '"><span class="reorder__text">' + esc(textOf(ix)) + '</span>' +
          '<span class="reorder__btns">' +
          '<button type="button" class="iconbtn iconbtn--small" data-move="-1" data-list="' + listName + '" data-pos="' + pos + '" aria-label="' + esc(SM.t('ex.up')) + '"' + (pos === 0 ? ' disabled' : '') + '>' + icon('up') + '</button>' +
          '<button type="button" class="iconbtn iconbtn--small" data-move="1" data-list="' + listName + '" data-pos="' + pos + '" aria-label="' + esc(SM.t('ex.down')) + '"' + (pos === indices.length - 1 ? ' disabled' : '') + '>' + icon('down') + '</button>' +
          '</span></li>';
      }).join('') + '</ol>';
    }

    function reorderArea() {
      if (cfg.blocks) {
        var order = currentOrder();
        var res = draft.data.orderChecked ? '<p class="ex__result">' + esc(SM.t('ex.orderResult', {
          n: order.filter(function (v, i) { return v === i; }).length, total: order.length
        })) + '</p>' : '';
        return orderList('blocks', order, function (ix) { return U.plain(L(cfg.blocks[ix])); }) +
          '<div class="ex__row"><button class="btn btn--small" type="button" data-check-order>' + esc(SM.t('ex.checkOrder')) + '</button></div>' + res;
      }
      var n = cfg.own;
      var own = draft.data.own || [];
      var out = '<p class="ex__step">' + esc(SM.t('ex.ownStep1', { n: n })) + '</p><ol class="ex__list">';
      for (var i = 0; i < n; i++) {
        out += '<li class="ex__item"><textarea class="input input--area" rows="2" data-own="' + i + '" aria-label="' + (i + 1) + '">' + esc(own[i] || '') + '</textarea></li>';
      }
      out += '</ol>';
      var filled = own.filter(function (x) { return x && x.trim(); }).length;
      if (filled >= 2) {
        var idx = [];
        for (var k = 0; k < n; k++) if (own[k] && own[k].trim()) idx.push(k);
        ['chrono', 'mosaic'].forEach(function (name) {
          var arr = (draft.data[name] || []).filter(function (x) { return idx.indexOf(x) !== -1; });
          idx.forEach(function (x) { if (arr.indexOf(x) === -1) arr.push(x); });
          draft.data[name] = arr;
        });
        out += '<div class="ex__columns ex__columns--2">' +
          '<div class="ex__col"><p class="ex__collabel">' + esc(SM.t('ex.chrono')) + '</p>' + orderList('chrono', draft.data.chrono, function (ix) { return own[ix]; }) + '</div>' +
          '<div class="ex__col"><p class="ex__collabel">' + esc(SM.t('ex.mosaic')) + '</p>' + orderList('mosaic', draft.data.mosaic, function (ix) { return own[ix]; }) + '</div>' +
          '</div>';
      } else {
        out += '<p class="muted">' + esc(SM.t('ex.ownWait')) + '</p>';
      }
      return out;
    }

    function annotateArea() {
      var tags = draft.data.tags || {};
      var current = draft.data.currentTag || cfg.tags[0].id;
      var text = U.plain(L(cfg.text));
      var i = 0;
      var html = esc(text).replace(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu, function (w) {
        var tag = tags[i];
        var s = '<button type="button" class="tok' + (tag ? ' tok--' + esc(tag) : '') + '" data-tok="' + i + '">' + w + '</button>';
        i++;
        return s;
      }).replace(/\n\n/g, '<br><br>');
      var palette = cfg.tags.map(function (t, ti) {
        var count = Object.keys(tags).filter(function (k) { return tags[k] === t.id; }).length;
        return '<button type="button" class="tagbtn tagbtn--' + ti + (current === t.id ? ' is-active' : '') + '" data-tag="' + esc(t.id) + '" aria-pressed="' + (current === t.id) + '">' +
          esc(L(t.label)) + ' <span class="tagbtn__n">' + count + '</span></button>';
      }).join('');
      var colorMap = cfg.tags.map(function (t, ti) { return '.tok--' + t.id + '{--tagc:var(--tag' + ti + ')}'; }).join('');
      return '<style>' + colorMap + '</style>' +
        '<p class="ex__step">' + esc(SM.t('ex.annotateHow')) + '</p>' +
        '<div class="tagpalette" role="group">' + palette + '</div>' +
        '<div class="annotext">' + html + '</div>' +
        questionsArea(cfg.questions);
    }

    function questionsArea(questions) {
      if (!questions || !questions.length) return '';
      var qa = draft.data.qa || {};
      return '<div class="ex__fields">' + questions.map(function (q, qi) {
        return '<label class="field"><span class="field__label">' + esc(U.plain(L(q))) + '</span>' +
          '<textarea class="input input--area" rows="2" data-qa="' + qi + '">' + esc(qa[qi] || '') + '</textarea></label>';
      }).join('') + '</div>';
    }

    function compareArea() {
      return '<div class="versions2">' +
        '<div class="versions2__col"><p class="ex__label">A</p>' + md(L(cfg.a)) + '</div>' +
        '<div class="versions2__col"><p class="ex__label">B</p>' + md(L(cfg.b)) + '</div>' +
        '</div>' + questionsArea(cfg.questions);
    }

    function generatorArea() {
      var cards = draft.data.cards || [];
      return '<div class="decks">' + cfg.decks.map(function (d, di) {
        var item = cards[di] != null ? L(d.items[cards[di]]) : '?';
        return '<div class="deck"><p class="deck__label">' + esc(L(d.label)) + '</p>' +
          '<p class="deck__card' + (cards[di] == null ? ' is-empty' : '') + '">' + esc(U.plain(item)) + '</p>' +
          '<button type="button" class="iconbtn iconbtn--small" data-reroll="' + di + '" aria-label="' + esc(SM.t('ex.reroll')) + '">' + icon('refresh') + '</button></div>';
      }).join('') + '</div>' +
        '<div class="ex__row"><button class="btn btn--small" type="button" data-draw>' + icon('dice') + esc(SM.t(cards.length ? 'ex.drawAgain' : 'ex.draw')) + '</button></div>';
    }

    function body() {
      switch (ex.type) {
        case 'list': return listArea();
        case 'columns': return columnsArea();
        case 'fields': return fieldsArea();
        case 'choose': return chooseArea();
        case 'reorder': return reorderArea();
        case 'annotate': return annotateArea();
        case 'compare': return compareArea();
        case 'generator': return generatorArea() + mainArea();
        default: return mainArea();
      }
    }

    function thenBlock() {
      if (hasMain(ex) || !cfg.then) return '';
      return '<div class="ex__then"><div class="ex__thenprompt">' + icon('arrow') + md(L(cfg.then)) + '</div>' +
        '<textarea class="writer" rows="6" data-main placeholder="' + esc(SM.t('ex.placeholder')) + '">' + esc(draft.text || '') + '</textarea></div>';
    }

    function thenAfterMain() {
      if (!hasMain(ex) || !cfg.then) return '';
      var extra = draft.data.after || '';
      return '<div class="ex__then"><div class="ex__thenprompt">' + icon('arrow') + md(L(cfg.then)) + '</div>' +
        '<textarea class="writer" rows="5" data-after placeholder="' + esc(SM.t('ex.placeholder')) + '">' + esc(extra) + '</textarea></div>';
    }

    function timerBlock() {
      if (!cfg.minutes) return '';
      return '<div class="timer" data-timer><span class="timer__time" data-timer-time>' + fmt(timer.left) + '</span>' +
        '<button class="btn btn--small" type="button" data-timer-toggle>' + icon('clock') + '<span>' + esc(SM.t('ex.timerStart')) + '</span></button>' +
        '<button class="btn btn--small btn--ghost" type="button" data-timer-reset>' + esc(SM.t('ex.timerReset')) + '</button></div>';
    }

    function hintBlock() {
      if (!opts.hint) return '';
      return '<details class="hint"><summary>' + icon('bulb') + esc(SM.t('lesson.hint')) + '</summary>' + md(L(opts.hint)) + '</details>';
    }

    function render() {
      container.innerHTML =
        '<div class="ex ex--' + esc(ex.type) + '" data-ex>' +
        '<div class="ex__top">' +
        '<div class="ex__prompt">' + md(L(ex.prompt)) + '</div>' +
        '<button class="iconbtn ex__focus" type="button" data-focus aria-label="' + esc(SM.t('ex.focus')) + '" title="' + esc(SM.t('ex.focus')) + '">' + icon('expand') + '</button>' +
        '</div>' +
        hintBlock() +
        sourceBlock() +
        timerBlock() +
        '<div class="ex__body" data-body>' + body() + '</div>' +
        thenAfterMain() +
        thenBlock() +
        (ex.type === 'constraint' ? '<div class="rules" data-rules aria-live="polite"></div>' : '') +
        '<div class="ex__bar">' +
        '<span class="ex__count" data-count></span>' +
        '<span class="ex__saved" data-saved>' + esc(SM.t('ex.saved')) + '</span>' +
        '<span class="ex__tools">' +
        '<button class="btn btn--small btn--ghost" type="button" data-phrase disabled title="' + esc(SM.t('ex.phraseHelp')) + '">' + icon('quote') + '<span>' + esc(SM.t('ex.phrase')) + '</span></button>' +
        '<button class="btn btn--small btn--ghost" type="button" data-version>' + icon('history') + '<span>' + esc(SM.t('ex.saveVersion')) + '</span></button>' +
        '</span></div>' +
        (opts.noFeedback ? '' : '<div class="ex__actions"><button class="btn btn--primary" type="button" data-get-feedback>' + icon('spark') + esc(SM.t('ex.getFeedback')) + '</button></div>') +
        '<div class="fb" data-fb hidden></div>' +
        '</div>';
      container.querySelectorAll('textarea').forEach(SM.ui.autosize);
      updateCount();
      if (ex.type === 'constraint') renderRules();
    }

    function fmt(sec) {
      var m = Math.floor(sec / 60), s = sec % 60;
      return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function updateCount() {
      var el = container.querySelector('[data-count]');
      if (!el) return;
      var n = SM.text.wordCount(collectText(ex, draft));
      var limitNote = ctx.limit ? ' / ' + ctx.limit : '';
      el.textContent = SM.t('common.words', { n: n }) + limitNote;
      el.classList.toggle('is-over', !!(ctx.limit && n > ctx.limit));
    }

    function renderRules() {
      var box = container.querySelector('[data-rules]');
      if (!box) return;
      var text = draft.text || '';
      var a = SM.text.analyze(text, detectLang(text));
      var extra = ctx.mustWords ? { words: ctx.mustWords } : null;
      var results = (cfg.rules || []).map(function (r) { return SM.text.checkRule(r, a, extra); });
      var empty = !text.trim();
      box.innerHTML = '<p class="rules__title">' + esc(SM.t('ex.rules')) + '</p><ul>' + results.map(function (r) {
        var state = empty ? 'wait' : (r.ok ? 'ok' : 'no');
        var detail = '';
        if (!empty && r.detail && r.detail.length) {
          detail = ' <span class="rules__detail">' + esc(SM.t(r.missing ? 'ex.missing' : 'ex.found')) + ': ' + esc(r.detail.slice(0, 8).join(', ')) + '</span>';
        }
        return '<li class="rule rule--' + state + '">' + '<span class="rule__mark">' + (state === 'ok' ? '✓' : state === 'no' ? '•' : '○') + '</span>' +
          '<span>' + esc(r.label) + (r.approx ? ' <span class="rules__approx">' + esc(SM.t('ex.approx')) + '</span>' : '') + detail + '</span></li>';
      }).join('') + '</ul>';
    }

    // ---- Feedback -------------------------------------------------------------

    function showFeedback() {
      var text = feedbackText(ex, draft);
      var lang = detectLang(text, draft.lang);
      var fb = SM.feedback.build(text, { lang: lang, skills: ctx.skills, kind: ctx.kind, rules: cfg.rules, limit: ctx.limit, minWords: ctx.minWords || cfg.minWords, totalWords: SM.text.wordCount(collectText(ex, draft)) });
      lastFeedback = fb;
      var panel = container.querySelector('[data-fb]');
      panel.hidden = false;
      if (fb.empty) {
        panel.innerHTML = '<p class="fb__empty">' + esc(SM.t('fb.empty')) + '</p>';
        return;
      }
      SM.store.addVersion(draft.id, SM.t('versions.feedback'));
      var a = fb.analysis;
      var mirrorMarks = []
        .concat(a.emotions.map(function (t) { return { start: t.start, end: t.end, cls: 'emotion' }; }))
        .concat(a.labels.map(function (t) { return { start: t.start, end: t.end, cls: 'label' }; }))
        .concat(a.cliches.map(function (t) { return { start: t.start, end: t.end, cls: 'cliche' }; }))
        .concat(a.fillers.map(function (t) { return { start: t.start, end: t.end, cls: 'filler' }; }))
        .concat(a.sensory.map(function (t) { return { start: t.start, end: t.end, cls: 'sense' }; }));
      var strengthText = SM.t(fb.strength.key);
      var nextText = SM.t(fb.next.key, fb.next.vars);
      var improvePrompt = opts.improve ? L(opts.improve) : '';

      panel.innerHTML =
        '<div class="fb__head"><h3 class="fb__title">' + esc(SM.t('fb.title')) + '</h3>' +
        '<p class="fb__note">' + icon('eye') + esc(SM.t('fb.limits.' + lang)) + '</p></div>' +
        '<section class="fb__block fb__block--good"><h4>' + esc(SM.t('fb.good')) + '</h4><p>' + esc(strengthText) + '</p>' +
        (fb.strength.quote ? '<blockquote>' + esc(fb.strength.quote) + '</blockquote>' : '') + '</section>' +
        '<section class="fb__block fb__block--next"><h4>' + esc(SM.t('fb.next')) + '</h4><p>' + esc(nextText) + '</p></section>' +
        '<section class="fb__block fb__block--rewrite" data-improve><h4>' + esc(SM.t('fb.rewrite')) + '</h4>' +
        (improvePrompt ? '<div class="fb__improve">' + md(improvePrompt) + '</div>' : '') +
        (fb.rewrite ? '<p class="fb__small">' + esc(SM.t('fb.rewriteHow')) + '</p><blockquote data-target>' + esc(fb.rewrite) + '</blockquote>' +
          '<textarea class="writer writer--small" rows="3" data-rewrite>' + esc(fb.rewrite) + '</textarea>' +
          '<div class="ex__row"><button class="btn btn--primary btn--small" type="button" data-apply>' + icon('check') + esc(SM.t('fb.apply')) + '</button>' +
          '<button class="btn btn--ghost btn--small" type="button" data-pick-other>' + esc(SM.t('fb.pickOther')) + '</button></div>' +
          '<div data-applied></div>' : '') +
        '</section>' +
        '<details class="fb__more"><summary>' + esc(SM.t('fb.more')) + '</summary>' +
        (fb.signals.length ? '<ul class="fb__signals">' + fb.signals.map(function (s) {
          return '<li class="' + (s.good ? 'is-good' : '') + '">' + esc(SM.t(s.key, { n: s.n })) + ': <em>' + esc(s.list.join(', ')) + '</em></li>';
        }).join('') + '</ul>' : '<p class="muted">' + esc(SM.t('fb.noSignals')) + '</p>') +
        '<p class="fb__small">' + esc(SM.t('fb.mirror')) + '</p>' +
        '<div class="mirror">' + SM.text.highlight(a.text, mirrorMarks) + '</div>' +
        '<p class="fb__legend"><mark class="hl hl--emotion">' + esc(SM.t('fb.legend.emotion')) + '</mark> <mark class="hl hl--label">' + esc(SM.t('fb.legend.label')) + '</mark> <mark class="hl hl--cliche">' + esc(SM.t('fb.legend.cliche')) + '</mark> <mark class="hl hl--filler">' + esc(SM.t('fb.legend.filler')) + '</mark> <mark class="hl hl--sense">' + esc(SM.t('fb.legend.sense')) + '</mark></p>' +
        '</details>';
      panel.querySelectorAll('textarea').forEach(SM.ui.autosize);
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (opts.onFeedback) opts.onFeedback(fb);
    }

    // Replace a fragment wherever it lives in the draft
    function replaceFragment(before, after) {
      var done = false;
      function swap(s) {
        if (done || typeof s !== 'string') return s;
        var ix = s.indexOf(before);
        if (ix === -1) return s;
        done = true;
        return s.slice(0, ix) + after + s.slice(ix + before.length);
      }
      draft.text = swap(draft.text);
      var d = draft.data;
      ['items', 'cols', 'own'].forEach(function (k) { if (Array.isArray(d[k])) d[k] = d[k].map(swap); });
      ['fields', 'qa'].forEach(function (k) { if (d[k]) Object.keys(d[k]).forEach(function (f) { d[k][f] = swap(d[k][f]); }); });
      if (typeof d.after === 'string') d.after = swap(d.after);
      return done;
    }

    function applyRewrite() {
      var panel = container.querySelector('[data-fb]');
      var target = panel.querySelector('[data-target]').textContent;
      var next = panel.querySelector('[data-rewrite]').value.trim();
      var out = panel.querySelector('[data-applied]');
      if (!next || next === target) {
        out.innerHTML = '<p class="fb__small">' + esc(SM.t('fb.sameText')) + '</p>';
        return;
      }
      SM.store.addVersion(draft.id, SM.t('versions.beforeImprove'));
      var ok = replaceFragment(target, next);
      if (!ok) {
        out.innerHTML = '<p class="fb__small">' + esc(SM.t('fb.notFound')) + '</p>';
        return;
      }
      draft.improvements = (draft.improvements || []).concat([{ before: target, after: next, t: Date.now() }]);
      SM.store.updateDraft(draft.id, { text: draft.text, data: draft.data, improvements: draft.improvements });
      SM.store.addVersion(draft.id, SM.t('versions.afterImprove'));
      refreshInputs();
      out.innerHTML = '<div class="improved"><p class="fb__small">' + esc(SM.t('fb.applied')) + '</p>' +
        '<div class="diff">' + U.diffHtml(target, next) + '</div></div>';
      panel.querySelector('[data-target]').textContent = next;
      if (opts.onImprove) opts.onImprove(draft);
      if (opts.onUpdate) opts.onUpdate(draft);
    }

    function pickOther() {
      if (!lastFeedback) return;
      var sents = lastFeedback.analysis.sentences;
      if (!sents.length) return;
      var panel = container.querySelector('[data-fb]');
      var current = panel.querySelector('[data-target]').textContent;
      var ix = sents.map(function (s) { return s.text; }).indexOf(current);
      var next = sents[(ix + 1) % sents.length].text;
      panel.querySelector('[data-target]').textContent = next;
      var ta = panel.querySelector('[data-rewrite]');
      ta.value = next;
      SM.ui.autosize(ta);
      panel.querySelector('[data-applied]').innerHTML = '';
    }

    // Update textarea values after a programmatic change without re-rendering focus
    function refreshInputs() {
      var main = container.querySelector('[data-main]');
      if (main) { main.value = draft.text || ''; SM.ui.autosize(main); }
      var d = draft.data;
      container.querySelectorAll('[data-item]').forEach(function (el) { el.value = (d.items || [])[+el.dataset.item] || ''; SM.ui.autosize(el); });
      container.querySelectorAll('[data-col]').forEach(function (el) { el.value = (d.cols || [])[+el.dataset.col] || ''; SM.ui.autosize(el); });
      container.querySelectorAll('[data-field]').forEach(function (el) { el.value = (d.fields || {})[el.dataset.field] || ''; SM.ui.autosize(el); });
      container.querySelectorAll('[data-own]').forEach(function (el) { el.value = (d.own || [])[+el.dataset.own] || ''; SM.ui.autosize(el); });
      container.querySelectorAll('[data-qa]').forEach(function (el) { el.value = (d.qa || {})[el.dataset.qa] || ''; SM.ui.autosize(el); });
      var after = container.querySelector('[data-after]');
      if (after) { after.value = d.after || ''; SM.ui.autosize(after); }
      updateCount();
      if (ex.type === 'constraint') renderRules();
    }

    function rerenderBody() {
      var b = container.querySelector('[data-body]');
      var active = document.activeElement;
      var key = active && active.dataset ? JSON.stringify(active.dataset) : null;
      b.innerHTML = body();
      b.querySelectorAll('textarea').forEach(SM.ui.autosize);
      if (key) {
        var match = Array.prototype.filter.call(b.querySelectorAll('*'), function (el) { return JSON.stringify(el.dataset) === key; })[0];
        if (match && match.focus) match.focus();
      }
      updateCount();
    }

    // ---- Timer ------------------------------------------------------------------

    function tick() {
      timer.left = Math.max(0, timer.left - 1);
      var el = container.querySelector('[data-timer-time]');
      if (el) el.textContent = fmt(timer.left);
      if (timer.left === 0) {
        stopTimer();
        timer.done = true;
        var box = container.querySelector('[data-timer]');
        if (box) box.classList.add('is-done');
        SM.ui.toast(SM.t('ex.timerDone'));
      }
    }

    function stopTimer() {
      timer.running = false;
      clearInterval(timer.id);
      var btn = container.querySelector('[data-timer-toggle] span');
      if (btn) btn.textContent = SM.t(timer.left === 0 ? 'ex.timerDoneShort' : 'ex.timerResume');
    }

    function toggleTimer() {
      if (timer.running) { stopTimer(); return; }
      if (timer.left === 0) timer.left = cfg.minutes * 60;
      timer.running = true;
      timer.id = setInterval(tick, 1000);
      var btn = container.querySelector('[data-timer-toggle] span');
      if (btn) btn.textContent = SM.t('ex.timerPause');
      var main = container.querySelector('[data-main]');
      if (main) main.focus();
    }

    // ---- Events -------------------------------------------------------------------

    function onInput(e) {
      var el = e.target;
      if (!el.matches('textarea, input')) return;
      var d = draft.data;
      if (el.hasAttribute('data-main')) draft.text = el.value;
      else if (el.dataset.item != null) { d.items = d.items || []; d.items[+el.dataset.item] = el.value; }
      else if (el.dataset.col != null) { d.cols = d.cols || []; d.cols[+el.dataset.col] = el.value; }
      else if (el.dataset.field != null) { d.fields = d.fields || {}; d.fields[el.dataset.field] = el.value; }
      else if (el.dataset.qa != null) { d.qa = d.qa || {}; d.qa[el.dataset.qa] = el.value; }
      else if (el.dataset.own != null) {
        d.own = d.own || [];
        var before = d.own.filter(function (x) { return x && x.trim(); }).length;
        d.own[+el.dataset.own] = el.value;
        var afterN = d.own.filter(function (x) { return x && x.trim(); }).length;
        if ((before < 2) !== (afterN < 2)) { changed(); rerenderBody(); return; }
      }
      else if (el.hasAttribute('data-after')) d.after = el.value;
      else if (el.hasAttribute('data-rewrite')) { SM.ui.autosize(el); return; }
      else return;
      if (el.tagName === 'TEXTAREA') SM.ui.autosize(el);
      changed();
    }

    function onSelect(e) {
      var el = e.target;
      if (!el || el.tagName !== 'TEXTAREA') return;
      var s = el.value.slice(el.selectionStart, el.selectionEnd).trim();
      selection = s;
      var btn = container.querySelector('[data-phrase]');
      if (btn) btn.disabled = s.length < 3;
    }

    function move(listName, pos, dir) {
      var arr = listName === 'blocks' ? draft.data.order : draft.data[listName];
      var to = pos + dir;
      if (!arr || to < 0 || to >= arr.length) return;
      var tmp = arr[pos]; arr[pos] = arr[to]; arr[to] = tmp;
      if (listName === 'blocks') draft.data.orderChecked = false;
      if (listName !== 'blocks') {
        // keep a preview of the assembled order in the "then" field placeholder
      }
      changed();
      rerenderBody();
      var btn = container.querySelector('[data-list="' + listName + '"][data-pos="' + to + '"][data-move="' + dir + '"]') ||
        container.querySelector('[data-list="' + listName + '"][data-pos="' + to + '"][data-move]');
      if (btn && !btn.disabled) btn.focus();
    }

    function onClick(e) {
      var t = e.target.closest('button');
      if (!t || !container.contains(t)) return;
      var d = draft.data;

      if (t.hasAttribute('data-get-feedback')) { showFeedback(); return; }
      if (t.hasAttribute('data-apply')) { applyRewrite(); return; }
      if (t.hasAttribute('data-pick-other')) { pickOther(); return; }
      if (t.hasAttribute('data-timer-toggle')) { toggleTimer(); return; }
      if (t.hasAttribute('data-timer-reset')) {
        stopTimer(); timer.left = cfg.minutes * 60;
        container.querySelector('[data-timer-time]').textContent = fmt(timer.left);
        var tb = container.querySelector('[data-timer-toggle] span'); if (tb) tb.textContent = SM.t('ex.timerStart');
        container.querySelector('[data-timer]').classList.remove('is-done');
        return;
      }
      if (t.hasAttribute('data-focus')) { toggleFocus(); return; }
      if (t.hasAttribute('data-version')) {
        SM.store.updateDraft(draft.id, { text: draft.text, data: draft.data });
        SM.store.addVersion(draft.id, SM.t('versions.manual'));
        SM.ui.toast(SM.t('ex.versionSaved'));
        if (opts.onUpdate) opts.onUpdate(draft);
        return;
      }
      if (t.hasAttribute('data-phrase')) {
        if (selection && SM.store.addPhrase(selection, draft.id)) SM.ui.toast(SM.t('ex.phraseSaved'));
        else SM.ui.toast(SM.t('ex.phraseExists'));
        return;
      }
      if (t.hasAttribute('data-copy-source')) {
        var src = ex.type === 'rewrite' ? cfg.source : (cfg.source || ((cfg.rules || []).filter(function (r) { return r.kind === 'cut'; })[0] || {}).source);
        var main = container.querySelector('[data-main]');
        if (main && !main.value.trim()) {
          main.value = U.plain(L(src));
          draft.text = main.value;
          SM.ui.autosize(main);
          changed();
          main.focus();
        } else {
          U.copyText(U.plain(L(src)));
          SM.ui.toast(SM.t('common.copied'));
        }
        return;
      }
      if (t.dataset.q != null && t.dataset.o != null) {
        var qi = +t.dataset.q, oi = +t.dataset.o;
        var q = cfg.questions[qi];
        var multi = Array.isArray(q.correct) && q.correct.length > 1;
        d.answers = d.answers || {};
        var cur = d.answers[qi] || [];
        if (multi) cur = cur.indexOf(oi) === -1 ? cur.concat([oi]) : cur.filter(function (x) { return x !== oi; });
        else cur = [oi];
        d.answers[qi] = cur;
        d.checked = d.checked || {};
        d.checked[qi] = false;
        changed();
        rerenderBody();
        return;
      }
      if (t.dataset.check != null) {
        d.checked = d.checked || {};
        d.checked[t.dataset.check] = true;
        changed();
        rerenderBody();
        return;
      }
      if (t.dataset.move != null) { move(t.dataset.list, +t.dataset.pos, +t.dataset.move); return; }
      if (t.hasAttribute('data-check-order')) { d.orderChecked = true; changed(); rerenderBody(); return; }
      if (t.dataset.tag != null) { d.currentTag = t.dataset.tag; changed(); rerenderBody(); return; }
      if (t.dataset.tok != null) {
        d.tags = d.tags || {};
        var tag = d.currentTag || cfg.tags[0].id;
        if (d.tags[t.dataset.tok] === tag) delete d.tags[t.dataset.tok]; else d.tags[t.dataset.tok] = tag;
        changed();
        rerenderBody();
        var again = container.querySelector('[data-tok="' + t.dataset.tok + '"]');
        if (again) again.focus();
        return;
      }
      if (t.hasAttribute('data-draw')) {
        d.cards = cfg.decks.map(function (deck) { return Math.floor(Math.random() * deck.items.length); });
        changed(); rerenderBody();
        return;
      }
      if (t.dataset.reroll != null) {
        d.cards = d.cards || cfg.decks.map(function () { return null; });
        var deck = cfg.decks[+t.dataset.reroll];
        var prev = d.cards[+t.dataset.reroll];
        var n;
        do { n = Math.floor(Math.random() * deck.items.length); } while (deck.items.length > 1 && n === prev);
        d.cards[+t.dataset.reroll] = n;
        changed(); rerenderBody();
        return;
      }
    }

    function toggleFocus() {
      var box = container.querySelector('[data-ex]');
      var on = !box.classList.contains('is-focused');
      box.classList.toggle('is-focused', on);
      document.body.classList.toggle('focus-mode', on);
      var btn = container.querySelector('[data-focus]');
      btn.setAttribute('aria-label', SM.t(on ? 'ex.focusOff' : 'ex.focus'));
      if (on) {
        var main = container.querySelector('[data-main]') || container.querySelector('textarea');
        if (main) main.focus();
      }
    }

    function onKey(e) {
      if (e.key === 'Escape' && container.querySelector('[data-ex].is-focused')) toggleFocus();
    }

    render();
    container.addEventListener('input', onInput);
    container.addEventListener('click', onClick);
    ['select', 'keyup', 'mouseup', 'touchend'].forEach(function (evt) { container.addEventListener(evt, onSelect); });
    document.addEventListener('keydown', onKey);

    return {
      draft: draft,
      text: function () { return collectText(ex, draft); },
      feedback: showFeedback,
      destroy: function () {
        clearInterval(timer.id);
        document.removeEventListener('keydown', onKey);
        document.body.classList.remove('focus-mode');
      }
    };
  }

  SM.exercise = {
    mount: mount,
    normalize: normalize,
    collectText: collectText,
    detectLang: detectLang,
    hasMain: hasMain
  };
})();
