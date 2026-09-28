/* Feedback built from local analysis: one concrete strength (quoted from the text),
   one next step, one fragment to rewrite. Never judges the value of the writer's experience. */
(function () {
  'use strict';

  var SM = window.SM;

  function clip(s, n) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    return s.length > n ? s.slice(0, n - 1).trim() + '…' : s;
  }

  function sentenceWith(a, tok) {
    return tok ? SM.text.sentenceAt(a, tok.start) : null;
  }

  function hasFocus(ctx, skill) {
    return ctx && ctx.skills && ctx.skills.indexOf(skill) !== -1;
  }

  // ---- Strengths -----------------------------------------------------------

  function findStrength(a, ctx) {
    var sents = a.sentences;
    if (!sents.length) return null;

    // 1. A sentence with a sensory detail or a specific (number, proper name) and no label words
    var best = null, bestScore = 0;
    sents.forEach(function (s) {
      var score = 0;
      a.sensory.forEach(function (t) { if (t.start >= s.start && t.end <= s.end) score += 2; });
      a.specifics.forEach(function (t) { if (t.start >= s.start && t.end <= s.end) score += 1; });
      a.labels.forEach(function (t) { if (t.start >= s.start && t.end <= s.end) score -= 2; });
      a.emotions.forEach(function (t) { if (t.start >= s.start && t.end <= s.end) score -= 1; });
      a.cliches.forEach(function (t) { if (t.start >= s.start && t.end <= s.end) score -= 3; });
      if (s.words > 30) score -= 1;
      if (score > bestScore) { bestScore = score; best = s; }
    });
    if (best && bestScore >= 2) {
      var sense = null;
      a.sensory.some(function (t) { if (t.start >= best.start && t.end <= best.end) { sense = t.sense; return true; } return false; });
      return { key: sense ? 'fb.strength.sense.' + sense : 'fb.strength.specific', quote: clip(best.text, 180) };
    }

    // 2. Rhythm: a very short sentence right after a long one
    for (var i = 1; i < sents.length; i++) {
      if (sents[i].words <= 4 && sents[i - 1].words >= 14) {
        return { key: 'fb.strength.rhythm', quote: clip(sents[i - 1].text, 120) + ' ' + sents[i].text };
      }
    }

    // 3. Dialogue carried by the lines themselves
    if (a.dialogue.length >= 3 && a.said.length === 0) {
      return { key: 'fb.strength.dialogue', quote: clip(a.dialogue[0].replace(/^[—–-]\s*/, ''), 120) };
    }

    // 4. Feeling shown without naming it (when that was the task)
    if (ctx && ctx.rules && ctx.rules.some(function (r) { return r.kind === 'ban-emotions'; }) && a.emotions.length === 0 && a.words > 30) {
      return { key: 'fb.strength.shown', quote: clip(sents[0].text, 160) };
    }

    // 5. A sentence with no weak verbs, no labels, no fillers — clean and active
    var clean = sents.filter(function (s) {
      if (s.words < 6 || s.words > 25) return false;
      var bad = a.weakVerbs.concat(a.labels, a.fillers, a.emotions).some(function (t) { return t.start >= s.start && t.end <= s.end; });
      return !bad;
    });
    if (clean.length) return { key: 'fb.strength.clean', quote: clip(clean[0].text, 160) };

    return { key: 'fb.strength.started', quote: '' };
  }

  // ---- Next step -----------------------------------------------------------

  function nextStep(a, ctx) {
    var kind = ctx && ctx.kind;
    var lang = a.lang;
    var candidates = [];

    function add(priority, key, tok, vars) {
      var s = tok && tok.start != null ? SM.text.sentenceAt(a, tok.start) : tok;
      candidates.push({ p: priority, key: key, sentence: s, vars: vars || {} });
    }

    var minWords = (ctx && ctx.minWords) || 25;
    var total = (ctx && ctx.totalWords) || a.words;
    if (total < minWords) {
      add(100, 'fb.next.more', a.sentences[a.sentences.length - 1], { n: minWords - total });
    }

    // Personal statement: list of achievements instead of a moment
    if (kind === 'essay' || hasFocus(ctx, 'reflection')) {
      var awardRe = lang === 'en'
        ? /\b(president|captain|leader|award|awarded|won|winner|medal|first place|champion|olympiad|certificate)\b/gi
        : /(президент|капитан|лидер|наград|победил|победила|победитель|медал|первое место|призёр|призер|чемпион|олимпиад|грамот|сертификат)/gi;
      var awards = (a.text.match(awardRe) || []).length;
      if (awards >= 3) add(90, 'fb.next.awards', a.sentences[0]);
      var lessonRe = lang === 'en' ? /\b(i learned that|i learnt that|i realized that|i realised that|taught me that)\b/i : /(я понял[а]?,? что|я осознал[а]?,? что|научил[аои]? меня тому|я узнал[а]?,? что)/i;
      var lm = a.text.match(lessonRe);
      if (lm) {
        var ix = a.text.search(lessonRe);
        add(70, 'fb.next.lesson', SM.text.sentenceAt(a, ix));
      }
    }

    if (a.cliches.length) add(85, 'fb.next.cliche', a.cliches[0], { word: a.cliches[0].text });
    if (a.emotions.length && (hasFocus(ctx, 'words') || hasFocus(ctx, 'character') || hasFocus(ctx, 'scene') || hasFocus(ctx, 'observation'))) {
      add(80, 'fb.next.emotion', a.emotions[0], { word: a.emotions[0].w });
    }
    if (a.labels.length) add(75, 'fb.next.label', a.labels[0], { word: a.labels[0].w });
    if (a.emotions.length) add(60, 'fb.next.emotion', a.emotions[0], { word: a.emotions[0].w });
    if (a.fillers.length) add(55, 'fb.next.filler', a.fillers[0], { word: a.fillers[0].w });
    if (a.explain.length && hasFocus(ctx, 'scene')) add(65, 'fb.next.explain', a.explain[0], { word: a.explain[0].text });
    if (a.maxIRun >= 3) {
      var iSent = null;
      a.sentences.some(function (s) { var fw = SM.text.lower((s.text.match(/[\p{L}]+/u) || [''])[0]); if (fw === 'я' || fw === 'i') { iSent = s; return true; } return false; });
      add(58, 'fb.next.iStart', iSent, { n: a.maxIRun });
    }
    if (a.sentences.length >= 5 && a.spread < 3.2) {
      var longest = a.sentences.slice().sort(function (x, y) { return y.words - x.words; })[0];
      add(hasFocus(ctx, 'rhythm') ? 88 : 52, 'fb.next.rhythm', longest);
    }
    if (a.repeats.length && a.repeats[0].n >= 4) add(50, 'fb.next.repeat', a.repeats[0].tokens[1], { word: a.repeats[0].word, n: a.repeats[0].n });
    if (a.weakVerbs.length >= Math.max(4, a.words / 18) && hasFocus(ctx, 'words')) add(57, 'fb.next.verbs', a.weakVerbs[0], { word: a.weakVerbs[0].w });
    if (a.sensory.length === 0 && a.words > 50 && (hasFocus(ctx, 'observation') || hasFocus(ctx, 'scene'))) {
      add(56, 'fb.next.senses', a.sentences[Math.floor(a.sentences.length / 2)]);
    }
    if (ctx && ctx.limit && a.words > ctx.limit) add(95, 'fb.next.limit', a.sentences.slice().sort(function (x, y) { return y.words - x.words; })[0], { n: a.words - ctx.limit });

    candidates.sort(function (x, y) { return y.p - x.p; });
    if (candidates.length) return candidates[0];
    var fallback = a.sentences.slice().sort(function (x, y) { return y.words - x.words; })[0];
    return { key: 'fb.next.readAloud', sentence: fallback, vars: {} };
  }

  function build(text, ctx) {
    var a = SM.text.analyze(text, (ctx && ctx.lang) || SM.lang());
    if (!a.words) return { empty: true, analysis: a };
    var strength = findStrength(a, ctx || {});
    var next = nextStep(a, ctx || {});
    var signals = [];
    if (a.emotions.length) signals.push({ key: 'fb.sig.emotions', n: a.emotions.length, list: a.emotions.slice(0, 5).map(function (t) { return t.w; }) });
    if (a.labels.length) signals.push({ key: 'fb.sig.labels', n: a.labels.length, list: a.labels.slice(0, 5).map(function (t) { return t.w; }) });
    if (a.cliches.length) signals.push({ key: 'fb.sig.cliches', n: a.cliches.length, list: a.cliches.slice(0, 3).map(function (t) { return t.text; }) });
    if (a.fillers.length) signals.push({ key: 'fb.sig.fillers', n: a.fillers.length, list: a.fillers.slice(0, 5).map(function (t) { return t.w; }) });
    if (a.repeats.length) signals.push({ key: 'fb.sig.repeats', n: a.repeats.length, list: a.repeats.slice(0, 3).map(function (r) { return r.word + ' ×' + r.n; }) });
    if (a.sensory.length) signals.push({ key: 'fb.sig.sensory', n: a.sensory.length, list: a.sensory.slice(0, 5).map(function (t) { return t.w; }), good: true });
    return {
      analysis: a,
      strength: strength,
      next: next,
      rewrite: next.sentence ? next.sentence.text : '',
      signals: signals
    };
  }

  SM.feedback = { build: build };
})();
