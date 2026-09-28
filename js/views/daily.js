/* Daily 5-minute prompt and the weekly challenge. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  SM.views.daily = function () {
    var today = SM.daily.today();
    var week = SM.weekly.current();
    var controllers = [];
    var st = SM.store.state;

    var past = Object.keys(st.daily).filter(function (k) { return k !== U.dayKey() && st.daily[k].draftId && SM.store.getDraft(st.daily[k].draftId); })
      .sort().reverse().slice(0, 14);

    var html = '<div class="page daily">' +
      SM.ui.pageHead({ kicker: SM.t('daily.kicker'), title: SM.t('daily.pageTitle'), lead: SM.t('daily.lead') }) +
      (today ? '<section class="card card--today"><div class="today__head"><p class="card__kicker">' + icon('pen') + esc(SM.t('home.today')) + ' · ' +
        esc(SM.ui.skillName(today.prompt.skill)) + '</p>' +
        '<button class="btn btn--small btn--ghost" type="button" data-shuffle>' + icon('refresh') + esc(SM.t('daily.another')) + '</button></div>' +
        '<div data-today></div>' +
        (today.prompt.twist ? '<details class="hint"><summary>' + icon('target') + esc(SM.t('daily.twist')) + '</summary>' + md(L(today.prompt.twist)) + '</details>' : '') +
        '</section>' : SM.ui.emptyState(SM.t('daily.empty'))) +

      (week ? '<section class="card card--weekly" id="weekly"><p class="card__kicker">' + icon('calendar') + esc(SM.t('home.weekly')) + '</p>' +
        '<h2 class="card__title">' + esc(L(week.challenge.title)) + '</h2>' +
        '<div class="prose">' + md(L(week.challenge.brief)) + '</div>' +
        '<ul class="checklist" data-week-steps>' + week.challenge.steps.map(function (s, i) {
          return '<li><label class="check"><input type="checkbox" data-step="' + i + '"' + (week.entry.steps[i] ? ' checked' : '') + '><span>' + md(L(s)).replace(/^<p>|<\/p>$/g, '') + '</span></label></li>';
        }).join('') + '</ul>' +
        (week.challenge.share ? '<p class="muted">' + icon('chat') + esc(L(week.challenge.share)) + '</p>' : '') +
        '<details class="panel" data-week-panel' + (week.entry.draftId ? ' open' : '') + '><summary>' + icon('pen') + esc(SM.t('weekly.draft')) + '</summary><div data-week-editor></div></details>' +
        '</section>' : '') +

      '<section><h2 class="section__title">' + esc(SM.t('daily.history')) + '</h2>' +
      (past.length ? '<ul class="draftlist">' + past.map(function (k) {
        var d = SM.store.getDraft(st.daily[k].draftId);
        var p = SM.content.daily.filter(function (x) { return x.id === st.daily[k].promptId; })[0];
        return '<li class="draftitem"><a href="#/draft/' + esc(d.id) + '"><span class="draftitem__title">' + esc(k) + (p ? ' · ' + esc(U.plain(L(p.prompt)).slice(0, 70)) + '…' : '') + '</span>' +
          '<span class="draftitem__excerpt">' + esc(SM.ui.draftExcerpt(d)) + '</span></a></li>';
      }).join('') + '</ul>' : '<p class="muted">' + esc(SM.t('daily.noHistory')) + '</p>') +
      '</section>' +
      '<p class="note">' + icon('heart') + '<span>' + esc(SM.t('daily.noStreaks')) + '</span></p>' +
      '</div>';

    return {
      title: SM.t('daily.pageTitle'),
      html: html,
      mount: function (root) {
        if (today) {
          var d = SM.daily.draft(today);
          controllers.push(SM.exercise.mount(root.querySelector('[data-today]'), {
            exercise: SM.daily.exercise(today.prompt),
            draft: d,
            ctx: { skills: [today.prompt.skill], kind: 'daily' }
          }));
        }
        var weekMounted = false;
        function mountWeek() {
          if (weekMounted || !week) return;
          weekMounted = true;
          var wd = week.entry.draftId ? SM.store.getDraft(week.entry.draftId) : null;
          if (!wd) {
            wd = SM.store.createDraft({ kind: 'weekly', ref: week.key, title: L(week.challenge.title), data: { prompt: week.challenge.brief } });
            week.entry.draftId = wd.id;
            SM.store.save(true);
          }
          controllers.push(SM.exercise.mount(root.querySelector('[data-week-editor]'), {
            exercise: { type: 'free', prompt: week.challenge.brief },
            draft: wd,
            ctx: { kind: 'weekly' }
          }));
        }
        var panel = root.querySelector('[data-week-panel]');
        if (panel) {
          if (panel.open) mountWeek();
          panel.addEventListener('toggle', function () { if (panel.open) mountWeek(); });
        }
        root.addEventListener('change', function (e) {
          var cb = e.target.closest('[data-step]');
          if (!cb || !week) return;
          week.entry.steps[cb.dataset.step] = cb.checked;
          SM.store.save(true);
        });
        root.addEventListener('click', function (e) {
          var b = e.target.closest('[data-shuffle]');
          if (b) { SM.daily.shuffle(); SM.app.rerender(); }
        });
      },
      destroy: function () { controllers.forEach(function (c) { c.destroy(); }); }
    };
  };
})();
