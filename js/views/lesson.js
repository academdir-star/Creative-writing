/* Lesson page: hook → technique → example → exercise → improve → reflection. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  var STEPS = ['hook', 'technique', 'example', 'exercise', 'improve', 'reflect'];

  function stepHead(i, key) {
    return '<p class="step__n"><span>' + (i + 1) + '</span>' + esc(SM.t('lesson.step.' + key)) + '</p>';
  }

  function improvementsHtml(draft) {
    var list = (draft && draft.improvements) || [];
    if (!list.length) return '<p class="muted">' + esc(SM.t('lesson.noImprovements')) + '</p>';
    return '<ol class="improvements">' + list.slice().reverse().map(function (imp) {
      return '<li><div class="diff">' + U.diffHtml(imp.before, imp.after) + '</div><p class="muted">' + esc(SM.ui.dateLabel(imp.t)) + '</p></li>';
    }).join('') + '</ol>';
  }

  SM.views.lesson = function (params) {
    var lesson = SM.ui.lessonById(params.id);
    if (!lesson) return SM.views.notFound();
    var route = SM.ui.routeById(lesson.route);
    var routeLessons = route ? route.lessons.filter(function (id) { return SM.ui.lessonById(id); }) : [];
    var pos = routeLessons.indexOf(lesson.id);
    var nextId = pos >= 0 && pos < routeLessons.length - 1 ? routeLessons[pos + 1] : null;
    var st = SM.store.lesson(lesson.id);
    var existing = st.draftId ? SM.store.getDraft(st.draftId) : SM.store.findDraft('lesson', lesson.id);
    var controllers = [];

    var meta = '<div class="lesson__meta">' +
      SM.ui.chip(SM.t('common.minutes', { n: lesson.minutes }), 'chip--time') +
      lesson.skills.map(function (s) { return SM.ui.chip(SM.ui.skillName(s), 'chip--skill'); }).join('') +
      lesson.genres.map(function (g) { return SM.ui.chip(SM.ui.genreName(g), 'chip--genre'); }).join('') +
      SM.ui.statusChip(st.status) + '</div>';

    var ex = lesson.exercise;
    var example = lesson.example;

    var html =
      '<article class="page lesson" data-color="' + esc(route ? route.color : 'ink') + '">' +
      SM.ui.pageHead({
        back: { href: route ? '#/route/' + route.id : '#/routes', label: route ? L(route.title) : SM.t('nav.routes') },
        kicker: SM.t('lesson.kicker', { n: lesson.n, total: route ? route.lessons.length : '' }),
        title: L(lesson.title)
      }) +
      '<div class="lesson__learn"><p class="lesson__learnlabel">' + esc(SM.t('lesson.learn')) + '</p><p>' + esc(L(lesson.learn)) + '</p></div>' +
      meta +
      '<div class="lesson__jump"><a class="btn btn--primary" href="#ex" data-jump="exercise">' + icon('pen') + esc(SM.t('lesson.jump')) + '</a>' +
      '<span class="muted">' + esc(SM.t('lesson.jumpNote')) + '</span></div>' +

      '<nav class="stepnav" aria-label="' + esc(SM.t('lesson.steps')) + '">' + STEPS.map(function (s, i) {
        return '<a href="#step-' + s + '" data-jump="' + s + '"><span>' + (i + 1) + '</span>' + esc(SM.t('lesson.step.' + s)) + '</a>';
      }).join('') + '</nav>' +

      '<section class="step step--hook" id="step-hook">' + stepHead(0, 'hook') +
      '<div class="lesson__hook">' + md(L(lesson.hook)) + '</div></section>' +

      '<section class="step" id="step-technique">' + stepHead(1, 'technique') +
      '<h2 class="step__title">' + esc(L(lesson.technique.name)) + '</h2>' +
      '<div class="prose">' + md(L(lesson.technique.text)) + '</div></section>' +

      '<section class="step" id="step-example">' + stepHead(2, 'example') +
      '<div class="beforeafter">' +
      '<div class="beforeafter__col beforeafter__col--before"><p class="beforeafter__label">' + esc(SM.t('lesson.before')) + '</p>' + md(L(example.before)) + '</div>' +
      '<div class="beforeafter__col beforeafter__col--after"><p class="beforeafter__label">' + esc(SM.t('lesson.after')) + '</p>' + md(L(example.after)) + '</div>' +
      '</div>' +
      '<details class="panel"><summary>' + icon('eye') + esc(SM.t('lesson.showDiff')) + '</summary><div class="diff">' +
      U.diffHtml(U.plain(L(example.before)), U.plain(L(example.after))) + '</div></details>' +
      '<h3 class="step__sub">' + esc(SM.t('lesson.changes')) + '</h3>' +
      '<ul class="changes">' + example.changes.map(function (c) { return '<li>' + md(L(c)).replace(/^<p>|<\/p>$/g, '') + '</li>'; }).join('') + '</ul>' +
      '</section>' +

      '<section class="step step--exercise" id="step-exercise">' + stepHead(3, 'exercise') +
      '<div id="ex" data-exercise></div>' +
      (lesson.personalAlt ? '<aside class="note note--alt">' + icon('lock') + '<div><p class="note__title">' + esc(SM.t('lesson.personalAlt')) + '</p>' + md(L(lesson.personalAlt)) + '</div></aside>' : '') +
      '<details class="panel harder" data-harder-panel><summary>' + icon('target') + esc(SM.t('lesson.harder')) + '</summary>' +
      '<div data-harder></div></details>' +
      '</section>' +

      '<section class="step" id="step-improve">' + stepHead(4, 'improve') +
      '<div class="prose">' + md(L(lesson.improve)) + '</div>' +
      '<p class="muted">' + esc(SM.t('lesson.improveHow')) + '</p>' +
      '<button class="btn btn--primary" type="button" data-run-feedback>' + icon('spark') + esc(SM.t('lesson.improveButton')) + '</button>' +
      '<h3 class="step__sub">' + esc(SM.t('lesson.improvements')) + '</h3>' +
      '<div data-improvements>' + improvementsHtml(existing) + '</div>' +
      '<div data-versions></div>' +
      '</section>' +

      '<section class="step" id="step-reflect">' + stepHead(5, 'reflect') +
      '<h3 class="step__sub">' + esc(SM.t('lesson.selfCheck')) + '</h3>' +
      '<ul class="checklist" data-selfcheck>' + lesson.selfCheck.map(function (c, i) {
        var on = existing && existing.selfCheck && existing.selfCheck[i];
        return '<li><label class="check"><input type="checkbox" data-check-i="' + i + '"' + (on ? ' checked' : '') + '><span>' + esc(L(c)) + '</span></label></li>';
      }).join('') + '</ul>' +
      '<label class="field"><span class="field__label">' + esc(L(lesson.reflect)) + '</span>' +
      '<textarea class="input input--area" rows="3" data-reflection>' + esc((existing && existing.reflection) || '') + '</textarea></label>' +
      '<aside class="note note--discuss">' + icon('chat') + '<div><p class="note__title">' + esc(SM.t('lesson.discuss')) + '</p><p>' + esc(L(lesson.discuss)) + '</p></div></aside>' +
      (lesson.transfer ? '<aside class="note note--transfer">' + icon('map') + '<div><p class="note__title">' + esc(SM.t('lesson.transfer')) + '</p>' + md(L(lesson.transfer)) + '</div></aside>' : '') +
      '<div class="lesson__finish" data-finish></div>' +
      '</section>' +

      (lesson.teacher ? '<details class="panel panel--teacher"><summary>' + icon('cap') + esc(SM.t('lesson.teacherNote')) + '</summary>' +
        md(L(lesson.teacher.note)) +
        (lesson.teacher.source && lesson.teacher.source.length ? '<p class="muted">' + esc(SM.t('teacher.sourcesShort')) + ': ' + esc(lesson.teacher.source.map(SM.sourceName || function (s) { return s; }).join('; ')) + '</p>' : '') +
        '</details>' : '') +

      '<nav class="pager">' +
      (pos > 0 ? '<a class="btn btn--ghost" href="#/lesson/' + esc(routeLessons[pos - 1]) + '">' + icon('back') + esc(SM.t('lesson.prev')) + '</a>' : '<span></span>') +
      (nextId ? '<a class="btn btn--ghost" href="#/lesson/' + esc(nextId) + '">' + esc(SM.t('lesson.next')) + icon('arrow') + '</a>' : '') +
      '</nav>' +
      '</article>';

    function getDraft(create) {
      var d = st.draftId ? SM.store.getDraft(st.draftId) : SM.store.findDraft('lesson', lesson.id);
      if (!d && create) {
        d = SM.store.createDraft({ kind: 'lesson', ref: lesson.id, skills: lesson.skills, genres: lesson.genres });
      }
      if (d && st.draftId !== d.id) SM.store.setLesson(lesson.id, { draftId: d.id });
      return d;
    }

    function finishHtml() {
      var l = SM.store.lesson(lesson.id);
      var d = getDraft(false);
      var inPortfolio = d && d.portfolio;
      if (l.status === 'done') {
        return '<div class="finish finish--done"><p class="finish__title">' + icon('check') + esc(SM.t('lesson.doneTitle')) + '</p>' +
          '<p>' + esc(SM.t('lesson.doneText')) + '</p><div class="finish__actions">' +
          (nextId ? '<a class="btn btn--primary" href="#/lesson/' + esc(nextId) + '">' + esc(SM.t('lesson.next')) + icon('arrow') + '</a>' :
            '<a class="btn btn--primary" href="#/route/' + esc(route ? route.id : '') + '">' + esc(SM.t('lesson.routeDone')) + '</a>') +
          (d ? '<button class="btn btn--ghost" type="button" data-portfolio>' + icon('folder') + esc(SM.t(inPortfolio ? 'lesson.inPortfolio' : 'lesson.toPortfolio')) + '</button>' : '') +
          '<button class="btn btn--ghost" type="button" data-undone>' + esc(SM.t('lesson.markUndone')) + '</button>' +
          '</div></div>';
      }
      return '<div class="finish"><p>' + esc(SM.t('lesson.finishNote')) + '</p><div class="finish__actions">' +
        '<button class="btn btn--primary" type="button" data-done>' + icon('check') + esc(SM.t('lesson.markDone')) + '</button>' +
        (d ? '<button class="btn btn--ghost" type="button" data-portfolio>' + icon('folder') + esc(SM.t(inPortfolio ? 'lesson.inPortfolio' : 'lesson.toPortfolio')) + '</button>' : '') +
        '</div></div>';
    }

    return {
      title: L(lesson.title),
      html: html,
      mount: function (root) {
        var draft = getDraft(true);
        var versions = SM.versions.mount(root.querySelector('[data-versions]'), draft, function () { SM.app.rerender(); });

        function onUpdate(d) {
          var l = SM.store.lesson(lesson.id);
          if (l.status === 'new') SM.store.setLesson(lesson.id, { status: 'started', started: Date.now(), draftId: d.id });
          versions.refresh();
        }

        var main = SM.exercise.mount(root.querySelector('[data-exercise]'), {
          exercise: ex,
          draft: draft,
          hint: lesson.hint,
          improve: lesson.improve,
          ctx: { skills: lesson.skills, kind: 'lesson', minWords: ex.type === 'free' ? 40 : 25 },
          onUpdate: onUpdate,
          onImprove: function (d) {
            root.querySelector('[data-improvements]').innerHTML = improvementsHtml(SM.store.getDraft(d.id));
            versions.refresh();
          }
        });
        controllers.push(main);

        var harderMounted = false;
        root.querySelector('[data-harder-panel]').addEventListener('toggle', function (e) {
          if (!e.target.open || harderMounted) return;
          harderMounted = true;
          var hd = SM.store.ensureDraft({ kind: 'harder', ref: lesson.id, skills: lesson.skills, genres: lesson.genres });
          var hex = lesson.harder.type ? lesson.harder : { type: 'free', prompt: lesson.harder.prompt, config: lesson.harder.config || {} };
          controllers.push(SM.exercise.mount(root.querySelector('[data-harder]'), {
            exercise: hex, draft: hd, ctx: { skills: lesson.skills, kind: 'lesson' }, improve: lesson.improve
          }));
        });

        var finish = root.querySelector('[data-finish]');
        finish.innerHTML = finishHtml();

        root.addEventListener('click', function (e) {
          var jump = e.target.closest('[data-jump]');
          if (jump) {
            e.preventDefault();
            var target = root.querySelector('#step-' + jump.dataset.jump);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              if (jump.dataset.jump === 'exercise') {
                var ta = root.querySelector('[data-exercise] textarea');
                if (ta) setTimeout(function () { ta.focus({ preventScroll: true }); }, 350);
              }
            }
            return;
          }
          var btn = e.target.closest('button');
          if (!btn) return;
          if (btn.hasAttribute('data-run-feedback')) {
            main.feedback();
            return;
          }
          if (btn.hasAttribute('data-done')) {
            var d = getDraft(true);
            SM.store.setLesson(lesson.id, { status: 'done', done: Date.now(), draftId: d.id });
            SM.store.updateDraft(d.id, { status: 'done' });
            SM.store.addVersion(d.id, SM.t('versions.done'));
            finish.innerHTML = finishHtml();
            SM.ui.toast(SM.t('lesson.doneToast'));
            return;
          }
          if (btn.hasAttribute('data-undone')) {
            SM.store.setLesson(lesson.id, { status: 'started', done: null });
            finish.innerHTML = finishHtml();
            return;
          }
          if (btn.hasAttribute('data-portfolio')) {
            var dp = getDraft(true);
            SM.store.updateDraft(dp.id, { portfolio: !dp.portfolio });
            finish.innerHTML = finishHtml();
            SM.ui.toast(SM.t(dp.portfolio ? 'portfolio.added' : 'portfolio.removed'));
          }
        });

        root.querySelector('[data-selfcheck]').addEventListener('change', function (e) {
          var cb = e.target.closest('[data-check-i]');
          if (!cb) return;
          var d = getDraft(true);
          var sc = d.selfCheck || {};
          sc[cb.dataset.checkI] = cb.checked;
          SM.store.updateDraft(d.id, { selfCheck: sc });
        });

        var refl = root.querySelector('[data-reflection]');
        SM.ui.autosize(refl);
        refl.addEventListener('input', function () {
          var d = getDraft(true);
          SM.store.updateDraft(d.id, { reflection: refl.value });
        });
        refl.addEventListener('input', function () { SM.ui.autosize(refl); });
      },
      destroy: function () {
        controllers.forEach(function (c) { c.destroy(); });
      }
    };
  };
})();
