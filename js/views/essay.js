/* Essay workshop: projects that move from the prompt to a finished, fact-checked essay.
   The helper asks questions and offers editorial options; it never writes for the student. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  var STAGES = ['decode', 'material', 'idea', 'structure', 'draft', 'feedback', 'revise', 'check'];
  var DEFAULT_LIMIT = { contest: 800, statement: 650, scholarship: 500 };

  function E() { return SM.content.essay || { stages: [], prompts: [], types: {}, questionBank: {}, moves: [], truthCheck: [] }; }

  function stageData(id) {
    return E().stages.filter(function (s) { return s.id === id; })[0] || { id: id, title: { ru: id, en: id }, why: { ru: '', en: '' }, steps: [], fields: [] };
  }

  // ---- Projects list ---------------------------------------------------------

  function newProjectModal(preset) {
    var e = E();
    var type = (preset && preset.type) || 'contest';
    SM.ui.openModal(
      '<h2 class="modal__title">' + esc(SM.t('essay.new')) + '</h2>' +
      '<form class="stack" data-new-form>' +
      '<fieldset class="field"><legend class="field__label">' + esc(SM.t('essay.type')) + '</legend><div class="segmented">' +
      ['contest', 'statement', 'scholarship'].map(function (t) {
        var title = e.types[t] ? L(e.types[t].title) : SM.t('essay.typeName.' + t);
        return '<label class="segmented__opt"><input type="radio" name="type" value="' + t + '"' + (t === type ? ' checked' : '') + '><span>' + esc(title) + '</span></label>';
      }).join('') + '</div></fieldset>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('essay.projectTitle')) + '</span><input class="input" name="title" value="' + esc((preset && preset.title) || '') + '"></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('essay.prompt')) + '</span><span class="field__hint">' + esc(SM.t('essay.promptHint')) + '</span>' +
      '<textarea class="input input--area" name="prompt" rows="4">' + esc((preset && preset.prompt) || '') + '</textarea></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('essay.limit')) + '</span><input class="input input--short" name="limit" type="number" min="50" max="5000" value="' + esc((preset && preset.limit) || DEFAULT_LIMIT[type]) + '"></label>' +
      '<div class="modal__actions"><button class="btn btn--ghost" type="button" data-cancel>' + esc(SM.t('common.cancel')) + '</button>' +
      '<button class="btn btn--primary" type="submit">' + esc(SM.t('essay.create')) + '</button></div></form>',
      function (box, close) {
        var form = box.querySelector('[data-new-form]');
        box.querySelector('[data-cancel]').addEventListener('click', close);
        form.addEventListener('change', function (ev) {
          if (ev.target.name === 'type' && !(preset && preset.limit)) form.limit.value = DEFAULT_LIMIT[ev.target.value];
        });
        form.addEventListener('submit', function (ev) {
          ev.preventDefault();
          var p = SM.store.createEssay({
            type: form.type.value,
            title: form.title.value.trim() || SM.t('essay.typeName.' + form.type.value),
            prompt: form.prompt.value.trim(),
            promptId: preset && preset.id,
            limit: parseInt(form.limit.value, 10) || DEFAULT_LIMIT[form.type.value]
          });
          close();
          SM.app.go('#/essay/' + p.id + '/decode');
        });
      }
    );
  }

  SM.views.essays = function () {
    var e = E();
    var projects = Object.keys(SM.store.state.essays).map(function (k) { return SM.store.state.essays[k]; })
      .sort(function (a, b) { return b.updated - a.updated; });

    var html = '<div class="page essays">' +
      SM.ui.pageHead({ kicker: SM.t('essay.kicker'), title: SM.t('essay.title'), lead: SM.t('essay.lead') }) +
      '<div class="route__actions"><button class="btn btn--primary" type="button" data-new>' + icon('plus') + esc(SM.t('essay.new')) + '</button>' +
      '<a class="btn btn--ghost" href="#/essay/weak">' + icon('target') + esc(SM.t('essay.weakLink')) + '</a></div>' +
      '<aside class="note note--rules">' + icon('lock') + '<div><p class="note__title">' + esc(SM.t('essay.helperRules')) + '</p>' +
      (e.rules ? md(L(e.rules)) : '<p>' + esc(SM.t('essay.helperRulesDefault')) + '</p>') + '</div></aside>' +
      (projects.length ? '<h2 class="section__title">' + esc(SM.t('essay.projects')) + '</h2><ul class="draftlist">' + projects.map(function (p) {
        var d = SM.store.getDraft(p.draftId);
        var words = d ? SM.text.wordCount(d.text) : 0;
        var stageIx = STAGES.indexOf(p.stage) + 1;
        return '<li class="draftitem"><a href="#/essay/' + esc(p.id) + '"><span class="draftitem__title">' + esc(p.title || SM.t('essay.untitled')) + '</span>' +
          '<span class="draftitem__excerpt">' + esc(String(p.prompt || '').slice(0, 160)) + '</span>' +
          '<span class="draftitem__meta">' + SM.ui.chip(SM.t('essay.typeName.' + p.type)) +
          '<span class="muted">' + esc(SM.t('essay.stageOf', { n: stageIx, total: STAGES.length })) + ' · ' + esc(SM.t('common.words', { n: words })) + ' / ' + p.limit + '</span></span></a></li>';
      }).join('') + '</ul>' : '') +
      '<h2 class="section__title">' + esc(SM.t('essay.types')) + '</h2><div class="cards cards--3">' +
      ['contest', 'statement', 'scholarship'].map(function (t) {
        var info = e.types[t];
        return '<div class="typecard"><h3>' + esc(info ? L(info.title) : SM.t('essay.typeName.' + t)) + '</h3>' + (info ? md(L(info.about)) : '') + '</div>';
      }).join('') + '</div>' +
      (e.prompts.length ? '<h2 class="section__title">' + esc(SM.t('essay.samplePrompts')) + '</h2><ul class="promptlist">' + e.prompts.map(function (p) {
        return '<li class="promptitem"><div>' + SM.ui.chip(SM.t('essay.typeName.' + p.type)) + SM.ui.chip(SM.t('common.words', { n: p.limit }), 'chip--time') +
          '<div class="promptitem__text">' + md(L(p.text)) + '</div>' + (p.note ? '<p class="muted small">' + esc(U.plain(L(p.note))) + '</p>' : '') + '</div>' +
          '<button class="btn btn--small" type="button" data-use-prompt="' + esc(p.id) + '">' + esc(SM.t('essay.usePrompt')) + '</button></li>';
      }).join('') + '</ul>' : '') +
      '<aside class="note">' + icon('target') + '<div><p>' + esc(SM.t('essay.noPromises')) + '</p></div></aside>' +
      '</div>';

    return {
      title: SM.t('essay.title'),
      html: html,
      mount: function (root) {
        root.addEventListener('click', function (ev) {
          var b = ev.target.closest('button');
          if (!b) return;
          if (b.hasAttribute('data-new')) newProjectModal();
          if (b.dataset.usePrompt) {
            var p = E().prompts.filter(function (x) { return x.id === b.dataset.usePrompt; })[0];
            newProjectModal({ id: p.id, type: p.type, prompt: U.plain(L(p.text)), limit: p.limit, title: '' });
          }
        });
      }
    };
  };

  // ---- Helper (assistant) -------------------------------------------------------

  function contextualQuestions(project) {
    var d = SM.store.getDraft(project.draftId);
    var text = d ? d.text : '';
    if (!SM.text.wordCount(text)) return [];
    var lang = SM.exercise.detectLang(text, project.lang);
    var a = SM.text.analyze(text, lang);
    var qs = [];
    var awardRe = lang === 'en'
      ? /\b(president|captain|leader|award|won|winner|medal|first place|champion|olympiad|certificate)\b/gi
      : /(президент|капитан|лидер|наград|победил|победитель|медал|первое место|призёр|призер|чемпион|олимпиад|грамот)/gi;
    if ((text.match(awardRe) || []).length >= 3) qs.push(SM.t('helper.q.awards'));
    if (a.cliches.length) qs.push(SM.t('helper.q.cliche', { word: a.cliches[0].text }));
    if (a.emotions.length) qs.push(SM.t('helper.q.emotion', { word: a.emotions[0].w }));
    if (/(i learned that|i realized that|i realised that|я понял[а]?,? что|я осознал[а]?,? что)/i.test(text)) qs.push(SM.t('helper.q.lesson'));
    if (a.words > project.limit) qs.push(SM.t('helper.q.limit', { n: a.words - project.limit }));
    if (a.labels.length) qs.push(SM.t('helper.q.label', { word: a.labels[0].w }));
    if (a.sentences.length && a.pov.first > 0 && a.iStarts / a.sentences.length > 0.5) qs.push(SM.t('helper.q.iStarts'));
    return qs;
  }

  function helperHtml(project, stage) {
    var bank = (E().questionBank && E().questionBank[stage]) || [];
    var ctxQ = (stage === 'draft' || stage === 'feedback' || stage === 'revise' || stage === 'check') ? contextualQuestions(project) : [];
    var all = ctxQ.concat(bank.map(L));
    var ix = (project.helperIx && project.helperIx[stage]) || 0;
    var q = all.length ? all[ix % all.length] : SM.t('helper.noQuestions');
    var history = (project.assistant || []).filter(function (x) { return x.stage === stage; });
    return '<aside class="helper" data-helper><p class="helper__title">' + icon('chat') + esc(SM.t('helper.title')) + '</p>' +
      '<p class="helper__rules">' + esc(SM.t('helper.short')) + '</p>' +
      '<p class="helper__q" data-helper-q>' + esc(U.plain(q)) + '</p>' +
      (ctxQ.length && ix % all.length < ctxQ.length ? '<p class="helper__why">' + esc(SM.t('helper.fromText')) + '</p>' : '') +
      '<textarea class="input input--area" rows="3" data-helper-answer placeholder="' + esc(SM.t('helper.answer')) + '"></textarea>' +
      '<div class="ex__row"><button class="btn btn--small" type="button" data-helper-save>' + esc(SM.t('helper.save')) + '</button>' +
      '<button class="btn btn--small btn--ghost" type="button" data-helper-next>' + icon('refresh') + esc(SM.t('helper.next')) + '</button></div>' +
      (history.length ? '<details class="panel"><summary>' + esc(SM.t('helper.history', { n: history.length })) + '</summary><ul class="qa">' +
        history.map(function (h) { return '<li><p class="qa__q">' + esc(h.q) + '</p><p>' + esc(h.a) + '</p></li>'; }).join('') + '</ul></details>' : '') +
      '<p class="helper__server muted small">' + esc(SM.t('helper.server')) + '</p></aside>';
  }

  // ---- Stage widgets -------------------------------------------------------------

  function fieldsHtml(project, sd) {
    var vals = (project.fields && project.fields[sd.id]) || {};
    if (!sd.fields || !sd.fields.length) return '';
    return '<div class="ex__fields">' + sd.fields.map(function (f) {
      return '<label class="field"><span class="field__label">' + esc(L(f.label)) + '</span>' +
        (f.hint ? '<span class="field__hint">' + esc(U.plain(L(f.hint))) + '</span>' : '') +
        '<textarea class="input input--area" rows="3" data-sfield="' + esc(f.id) + '">' + esc(vals[f.id] || '') + '</textarea></label>';
    }).join('') + '</div>';
  }

  function valuesHtml(project) {
    var e = E();
    if (!e.values || !e.values.groups) return '';
    var v = project.values || { picked: [], top: [], evidence: {} };
    function label(id) {
      var parts = id.split(':');
      var g = e.values.groups.filter(function (x) { return x.id === parts[0]; })[0];
      return g && g.items[+parts[1]] ? L(g.items[+parts[1]]) : id;
    }
    return '<section class="widget"><h3 class="step__sub">' + icon('heart') + esc(SM.t('values.title')) + '</h3>' +
      '<p class="muted">' + esc(SM.t('values.how')) + '</p>' +
      '<div class="valuegroups">' + e.values.groups.map(function (g) {
        var inGroup = v.picked.filter(function (id) { return id.split(':')[0] === g.id; }).length;
        return '<div class="valuegroup"><p class="valuegroup__title">' + esc(L(g.title)) + ' <span class="muted">' + inGroup + '/3</span></p><div class="chips">' +
          g.items.map(function (it, i) {
            var id = g.id + ':' + i;
            var on = v.picked.indexOf(id) !== -1;
            return '<button type="button" class="chipbtn' + (on ? ' is-on' : '') + '" data-value="' + esc(id) + '" aria-pressed="' + on + '">' + esc(L(it)) + '</button>';
          }).join('') + '</div></div>';
      }).join('') + '</div>' +
      (v.picked.length ? '<h4 class="step__sub">' + esc(SM.t('values.top')) + '</h4><p class="muted">' + esc(SM.t('values.topHow')) + '</p>' +
        '<div class="chips">' + v.picked.filter(function (id) { return v.top.indexOf(id) === -1; }).map(function (id) {
          return '<button type="button" class="chipbtn" data-top-add="' + esc(id) + '">+ ' + esc(label(id)) + '</button>';
        }).join('') + '</div>' +
        (v.top.length ? '<ol class="topvalues">' + v.top.map(function (id, i) {
          return '<li><div class="topvalues__head"><strong>' + esc(label(id)) + '</strong>' +
            '<button class="iconbtn iconbtn--small" type="button" data-top-up="' + i + '"' + (i === 0 ? ' disabled' : '') + ' aria-label="' + esc(SM.t('ex.up')) + '">' + icon('up') + '</button>' +
            '<button class="iconbtn iconbtn--small" type="button" data-top-del="' + esc(id) + '" aria-label="' + esc(SM.t('common.delete')) + '">' + icon('x') + '</button></div>' +
            '<label class="field"><span class="field__hint">' + esc(SM.t('values.evidence', { value: label(id) })) + '</span>' +
            '<textarea class="input input--area" rows="2" data-evidence="' + esc(id) + '">' + esc(v.evidence[id] || '') + '</textarea></label></li>';
        }).join('') + '</ol>' : '') : '') +
      '</section>';
  }

  function feelingsHtml(project) {
    var e = E();
    var f = project.feelings || { moment: '', feelings: [], needs: [] };
    var lang = SM.lang();
    var fl = (e.feelings && e.feelings[lang]) || [];
    var nl = (e.needs && e.needs[lang]) || [];
    if (!fl.length) return '';
    return '<section class="widget"><h3 class="step__sub">' + icon('spark') + esc(SM.t('feelings.title')) + '</h3>' +
      '<p class="muted">' + esc(SM.t('feelings.how')) + '</p>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('feelings.moment')) + '</span>' +
      '<textarea class="input input--area" rows="2" data-moment>' + esc(f.moment || '') + '</textarea></label>' +
      '<p class="field__label">' + esc(SM.t('feelings.feelings')) + '</p><div class="chips">' + fl.map(function (w) {
        var on = f.feelings.indexOf(w) !== -1;
        return '<button type="button" class="chipbtn' + (on ? ' is-on' : '') + '" data-feeling="' + esc(w) + '" aria-pressed="' + on + '">' + esc(w) + '</button>';
      }).join('') + '</div>' +
      '<p class="field__label">' + esc(SM.t('feelings.needs')) + '</p><div class="chips">' + nl.map(function (w) {
        var on = f.needs.indexOf(w) !== -1;
        return '<button type="button" class="chipbtn chipbtn--need' + (on ? ' is-on' : '') + '" data-need="' + esc(w) + '" aria-pressed="' + on + '">' + esc(w) + '</button>';
      }).join('') + '</div>' +
      '<p class="muted small">' + esc(SM.t('feelings.alt')) + '</p></section>';
  }

  function checklistHtml(items, state, attr) {
    return '<ul class="checklist">' + items.map(function (it, i) {
      return '<li><label class="check"><input type="checkbox" ' + attr + '="' + i + '"' + (state && state[i] ? ' checked' : '') + '><span>' + md(L(it)).replace(/^<p>|<\/p>$/g, '') + '</span></label></li>';
    }).join('') + '</ul>';
  }

  function claimsHtml(project) {
    var claims = project.claims || [];
    return '<section class="widget"><h3 class="step__sub">' + icon('target') + esc(SM.t('claims.title')) + '</h3><p class="muted">' + esc(SM.t('claims.how')) + '</p>' +
      (claims.length ? '<ul class="claims">' + claims.map(function (c, i) {
        return '<li class="claim' + (c.ok ? ' is-ok' : '') + '"><label class="check"><input type="checkbox" data-claim-ok="' + i + '"' + (c.ok ? ' checked' : '') + '><span><strong>' + esc(c.text) + '</strong>' +
          (c.how ? '<br><span class="muted small">' + esc(SM.t('claims.howChecked')) + ': ' + esc(c.how) + '</span>' : '') + '</span></label>' +
          '<button class="iconbtn iconbtn--small" type="button" data-claim-del="' + i + '" aria-label="' + esc(SM.t('common.delete')) + '">' + icon('x') + '</button></li>';
      }).join('') + '</ul>' : '') +
      '<form class="claimform" data-claim-form><input class="input" name="text" placeholder="' + esc(SM.t('claims.fact')) + '" autocomplete="off">' +
      '<input class="input" name="how" placeholder="' + esc(SM.t('claims.source')) + '" autocomplete="off">' +
      '<button class="btn btn--small" type="submit">' + icon('plus') + esc(SM.t('claims.add')) + '</button></form></section>';
  }

  function limitStatus(project) {
    var d = SM.store.getDraft(project.draftId);
    var n = d ? SM.text.wordCount(d.text) : 0;
    var over = n > project.limit;
    return '<p class="limitstatus ' + (over ? 'is-over' : (n ? 'is-ok' : '')) + '">' + esc(SM.t(over ? 'essay.overLimit' : 'essay.inLimit', { n: n, limit: project.limit, diff: n - project.limit })) + '</p>';
  }

  // ---- Project page -------------------------------------------------------------------

  SM.views.essay = function (params) {
    if (params.id === 'weak') return weakView();
    var project = SM.store.state.essays[params.id];
    if (!project) return SM.views.notFound();
    var stage = STAGES.indexOf(params.stage) !== -1 ? params.stage : project.stage || 'decode';
    if (project.stage !== stage) SM.store.updateEssay(project.id, { stage: stage });
    var sd = stageData(stage);
    var sIx = STAGES.indexOf(stage);
    var draft = SM.store.getDraft(project.draftId);
    if (!draft) {
      draft = SM.store.createDraft({ kind: 'essay', ref: project.id, title: project.title, lang: project.lang });
      SM.store.updateEssay(project.id, { draftId: draft.id });
    }
    var controllers = [];
    var editorStages = ['draft', 'revise'];

    var body = '';
    if (stage === 'decode') {
      body += '<label class="field"><span class="field__label">' + esc(SM.t('essay.prompt')) + '</span>' +
        '<textarea class="input input--area input--prompt" rows="4" data-prompt>' + esc(project.prompt || '') + '</textarea></label>';
    } else if (project.prompt && editorStages.indexOf(stage) === -1) {
      body += '<details class="panel promptbox"><summary>' + icon('essay') + esc(SM.t('essay.prompt')) + '</summary><p>' + esc(project.prompt) + '</p></details>';
    }
    body += fieldsHtml(project, sd);
    if (stage === 'material') body += valuesHtml(project) + feelingsHtml(project);
    if (editorStages.indexOf(stage) !== -1) {
      body += '<div data-editor></div>' + limitStatus(project);
      if (E().moves && E().moves.length) {
        body += '<details class="panel"><summary>' + icon('pen') + esc(SM.t('essay.moves')) + '</summary><p class="muted">' + esc(SM.t('essay.movesHow')) + '</p><ul class="moves">' +
          E().moves.map(function (m) { return '<li><strong>' + esc(L(m.title)) + '.</strong> ' + md(L(m.how)).replace(/^<p>|<\/p>$/g, '') + '</li>'; }).join('') + '</ul></details>';
      }
    }
    if (stage === 'revise') {
      body += '<h3 class="step__sub">' + esc(SM.t('essay.passes')) + '</h3>' + checklistHtml(sd.steps, (project.passes || {}).revise, 'data-pass');
      body += '<div data-versions></div>';
    }
    if (stage === 'feedback') {
      body += '<div class="draftpreview">' + (draft.text ? md(draft.text) : '<p class="muted">' + esc(SM.t('essay.noDraftYet')) + '</p>') + '</div>' +
        limitStatus(project) +
        '<div class="ex__row"><button class="btn btn--primary" type="button" data-auto-fb>' + icon('spark') + esc(SM.t('essay.autoFeedback')) + '</button>' +
        '<a class="btn btn--ghost" href="#/draft/' + esc(draft.id) + '">' + icon('chat') + esc(SM.t('essay.peer')) + '</a></div>' +
        '<div data-auto-fb-box></div>';
    }
    if (stage === 'check') {
      body += limitStatus(project) +
        '<h3 class="step__sub">' + esc(SM.t('essay.truthCheck')) + '</h3>' + checklistHtml(E().truthCheck || [], project.truth, 'data-truth') +
        claimsHtml(project) +
        '<div class="finish"><label class="toggle"><input type="checkbox" data-final' + (draft.status === 'done' ? ' checked' : '') + '><span>' + esc(SM.t('essay.final')) + '</span></label>' +
        '<p class="muted small">' + esc(SM.t('essay.finalNote')) + '</p></div>';
    }

    var html = '<div class="page essay" data-stage="' + esc(stage) + '">' +
      '<a class="backlink" href="#/essay">' + icon('back') + esc(SM.t('essay.title')) + '</a>' +
      '<label class="titlefield"><span class="visually-hidden">' + esc(SM.t('essay.projectTitle')) + '</span><input class="titlefield__input" data-ptitle value="' + esc(project.title || '') + '" placeholder="' + esc(SM.t('essay.untitled')) + '"></label>' +
      '<p class="muted">' + esc(SM.t('essay.typeName.' + project.type)) + ' · ' + esc(SM.t('essay.limitShort', { n: project.limit })) + '</p>' +
      '<nav class="stages" aria-label="' + esc(SM.t('essay.stages')) + '">' + STAGES.map(function (s, i) {
        var t = stageData(s);
        return '<a class="stages__item' + (s === stage ? ' is-active' : '') + (i < sIx ? ' is-past' : '') + '" href="#/essay/' + esc(project.id) + '/' + s + '"' + (s === stage ? ' aria-current="step"' : '') + '>' +
          '<span class="stages__n">' + (i + 1) + '</span><span class="stages__t">' + esc(L(t.title)) + '</span></a>';
      }).join('') + '</nav>' +
      '<div class="essay__layout"><div class="essay__main">' +
      '<h1 class="essay__stage" tabindex="-1">' + esc(L(sd.title)) + '</h1>' +
      '<div class="prose">' + md(L(sd.why)) + '</div>' +
      (sd.steps && sd.steps.length && stage !== 'revise' ? '<ol class="changes">' + sd.steps.map(function (s) { return '<li>' + md(L(s)).replace(/^<p>|<\/p>$/g, '') + '</li>'; }).join('') + '</ol>' : '') +
      body +
      '<nav class="pager">' +
      (sIx > 0 ? '<a class="btn btn--ghost" href="#/essay/' + esc(project.id) + '/' + STAGES[sIx - 1] + '">' + icon('back') + esc(L(stageData(STAGES[sIx - 1]).title)) + '</a>' : '<span></span>') +
      (sIx < STAGES.length - 1 ? '<a class="btn btn--primary" href="#/essay/' + esc(project.id) + '/' + STAGES[sIx + 1] + '">' + esc(L(stageData(STAGES[sIx + 1]).title)) + icon('arrow') + '</a>' : '') +
      '</nav>' +
      '<div class="essay__danger"><button class="btn btn--small btn--danger" type="button" data-del-project>' + icon('trash') + esc(SM.t('essay.delete')) + '</button></div>' +
      '</div>' +
      '<div class="essay__side" data-side>' + helperHtml(project, stage) + '</div></div>' +
      '</div>';

    return {
      title: L(sd.title) + ' · ' + (project.title || SM.t('essay.untitled')),
      html: html,
      mount: function (root) {
        root.querySelectorAll('textarea').forEach(SM.ui.autosize);
        var side = root.querySelector('[data-side]');
        var refreshHelper = U.debounce(function () {
          var ans = side.querySelector('[data-helper-answer]');
          if (ans && (ans.value.trim() || document.activeElement === ans)) return;
          side.innerHTML = helperHtml(SM.store.state.essays[project.id], stage);
        }, 1200);

        if (editorStages.indexOf(stage) !== -1) {
          var versions = null;
          if (stage === 'revise') versions = SM.versions.mount(root.querySelector('[data-versions]'), draft, function () { SM.app.rerender(); });
          controllers.push(SM.exercise.mount(root.querySelector('[data-editor]'), {
            exercise: { type: 'free', prompt: { ru: project.prompt || SM.strings.ru['essay.writeHere'], en: project.prompt || SM.strings.en['essay.writeHere'] } },
            draft: draft,
            ctx: { kind: 'essay', skills: ['reflection', 'structure'], limit: project.limit, minWords: 60 },
            onUpdate: function () {
              var ls = root.querySelector('.limitstatus');
              if (ls) ls.outerHTML = limitStatus(project);
              if (versions) versions.refresh();
              refreshHelper();
            }
          }));
        }

        // Update state on every keystroke (the store debounces the actual write)
        root.addEventListener('input', function (e) {
          var el = e.target;
          var p = SM.store.state.essays[project.id];
          if (el.hasAttribute('data-prompt')) SM.store.updateEssay(p.id, { prompt: el.value });
          if (el.hasAttribute('data-ptitle')) { SM.store.updateEssay(p.id, { title: el.value.trim() }); SM.store.updateDraft(p.draftId, { title: el.value.trim() }); }
          if (el.dataset.sfield) {
            p.fields[stage] = p.fields[stage] || {};
            p.fields[stage][el.dataset.sfield] = el.value;
            SM.store.updateEssay(p.id, { fields: p.fields });
          }
          if (el.dataset.evidence) { p.values.evidence[el.dataset.evidence] = el.value; SM.store.updateEssay(p.id, { values: p.values }); }
          if (el.hasAttribute('data-moment')) { p.feelings.moment = el.value; SM.store.updateEssay(p.id, { feelings: p.feelings }); }
        });
        root.addEventListener('input', function (e) { if (e.target.tagName === 'TEXTAREA') SM.ui.autosize(e.target); });

        root.addEventListener('change', function (e) {
          var el = e.target;
          var p = SM.store.state.essays[project.id];
          if (el.dataset.pass != null) { p.passes.revise = p.passes.revise || {}; p.passes.revise[el.dataset.pass] = el.checked; SM.store.updateEssay(p.id, { passes: p.passes }); }
          if (el.dataset.truth != null) { p.truth[el.dataset.truth] = el.checked; SM.store.updateEssay(p.id, { truth: p.truth }); }
          if (el.dataset.claimOk != null) { p.claims[+el.dataset.claimOk].ok = el.checked; SM.store.updateEssay(p.id, { claims: p.claims }); el.closest('.claim').classList.toggle('is-ok', el.checked); }
          if (el.hasAttribute('data-final')) {
            SM.store.updateDraft(p.draftId, { status: el.checked ? 'done' : 'draft', portfolio: el.checked ? true : SM.store.getDraft(p.draftId).portfolio });
            if (el.checked) { SM.store.addVersion(p.draftId, SM.t('versions.done')); SM.ui.toast(SM.t('essay.finalToast')); }
          }
        });

        root.addEventListener('submit', function (e) {
          if (!e.target.matches('[data-claim-form]')) return;
          e.preventDefault();
          var f = e.target;
          var p = SM.store.state.essays[project.id];
          if (!f.text.value.trim()) return;
          p.claims.push({ text: f.text.value.trim(), how: f.how.value.trim(), ok: false });
          SM.store.updateEssay(p.id, { claims: p.claims });
          SM.app.rerender();
        });

        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          var p = SM.store.state.essays[project.id];
          if (b.dataset.value) {
            var picked = p.values.picked;
            var id = b.dataset.value;
            var group = id.split(':')[0];
            if (picked.indexOf(id) !== -1) {
              p.values.picked = picked.filter(function (x) { return x !== id; });
              p.values.top = p.values.top.filter(function (x) { return x !== id; });
            } else {
              if (picked.filter(function (x) { return x.split(':')[0] === group; }).length >= 3) { SM.ui.toast(SM.t('values.max3')); return; }
              picked.push(id);
            }
            SM.store.updateEssay(p.id, { values: p.values });
            SM.app.rerender();
            return;
          }
          if (b.dataset.topAdd) {
            if (p.values.top.length >= 5) { SM.ui.toast(SM.t('values.max5')); return; }
            p.values.top.push(b.dataset.topAdd); SM.store.updateEssay(p.id, { values: p.values }); SM.app.rerender(); return;
          }
          if (b.dataset.topDel) { p.values.top = p.values.top.filter(function (x) { return x !== b.dataset.topDel; }); SM.store.updateEssay(p.id, { values: p.values }); SM.app.rerender(); return; }
          if (b.dataset.topUp != null) {
            var i = +b.dataset.topUp; var t = p.values.top;
            var tmp = t[i - 1]; t[i - 1] = t[i]; t[i] = tmp;
            SM.store.updateEssay(p.id, { values: p.values }); SM.app.rerender(); return;
          }
          if (b.dataset.feeling || b.dataset.need) {
            var key = b.dataset.feeling ? 'feelings' : 'needs';
            var w = b.dataset.feeling || b.dataset.need;
            var list = p.feelings[key];
            p.feelings[key] = list.indexOf(w) === -1 ? list.concat([w]) : list.filter(function (x) { return x !== w; });
            SM.store.updateEssay(p.id, { feelings: p.feelings });
            b.classList.toggle('is-on');
            b.setAttribute('aria-pressed', String(p.feelings[key].indexOf(w) !== -1));
            return;
          }
          if (b.dataset.claimDel != null) { p.claims.splice(+b.dataset.claimDel, 1); SM.store.updateEssay(p.id, { claims: p.claims }); SM.app.rerender(); return; }
          if (b.hasAttribute('data-helper-next')) {
            p.helperIx = p.helperIx || {};
            p.helperIx[stage] = (p.helperIx[stage] || 0) + 1;
            SM.store.updateEssay(p.id, { helperIx: p.helperIx });
            side.innerHTML = helperHtml(p, stage);
            return;
          }
          if (b.hasAttribute('data-helper-save')) {
            var ans = side.querySelector('[data-helper-answer]').value.trim();
            if (!ans) return;
            p.assistant = (p.assistant || []).concat([{ stage: stage, q: side.querySelector('[data-helper-q]').textContent, a: ans, t: Date.now() }]);
            SM.store.updateEssay(p.id, { assistant: p.assistant });
            side.innerHTML = helperHtml(p, stage);
            SM.ui.toast(SM.t('helper.saved'));
            return;
          }
          if (b.hasAttribute('data-auto-fb')) {
            var boxEl = root.querySelector('[data-auto-fb-box]');
            var tmpHost = document.createElement('div');
            boxEl.innerHTML = '';
            boxEl.appendChild(tmpHost);
            var c = SM.exercise.mount(tmpHost, {
              exercise: { type: 'free', prompt: { ru: SM.strings.ru['essay.fbPrompt'], en: SM.strings.en['essay.fbPrompt'] } },
              draft: SM.store.getDraft(p.draftId),
              ctx: { kind: 'essay', skills: ['reflection', 'structure'], limit: p.limit, minWords: 60 }
            });
            controllers.push(c);
            c.feedback();
            return;
          }
          if (b.hasAttribute('data-del-project')) {
            SM.ui.confirm(SM.t('essay.deleteConfirm'), SM.t('common.delete'), function () {
              SM.store.deleteEssay(p.id);
              SM.app.go('#/essay');
            }, true);
          }
        });
      },
      destroy: function () { controllers.forEach(function (c) { c.destroy(); }); }
    };
  };

  function weakView() {
    var w = E().weakEssay;
    if (!w) return SM.views.notFound();
    var controller = null;
    var html = '<div class="page">' +
      SM.ui.pageHead({ back: { href: '#/essay', label: SM.t('essay.title') }, kicker: SM.t('essay.weakKicker'), title: L(w.title), lead: SM.t('essay.weakLead') }) +
      '<div data-ex></div></div>';
    return {
      title: L(w.title),
      html: html,
      mount: function (root) {
        var d = SM.store.ensureDraft({ kind: 'essay-weak', ref: 'weak', skills: ['editing', 'argument'] });
        controller = SM.exercise.mount(root.querySelector('[data-ex]'), {
          exercise: { type: 'choose', prompt: { ru: SM.strings.ru['essay.weakPrompt'], en: SM.strings.en['essay.weakPrompt'] }, config: { text: w.text, questions: w.questions, then: { ru: SM.strings.ru['essay.weakThen'], en: SM.strings.en['essay.weakThen'] } } },
          draft: d,
          ctx: { kind: 'essay', skills: ['editing'] }
        });
      },
      destroy: function () { if (controller) controller.destroy(); }
    };
  }
})();
