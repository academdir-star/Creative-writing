/* Home: write now, continue, current route, weekly challenge, progress. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  // Today's daily prompt (deterministic by date, can be changed by the student)
  SM.daily = {
    today: function () {
      var key = U.dayKey();
      var entry = SM.store.state.daily[key];
      var list = SM.content.daily;
      if (!list.length) return null;
      if (!entry) {
        entry = { promptId: list[U.hash(key) % list.length].id, draftId: null };
        SM.store.state.daily[key] = entry;
        SM.store.save();
      }
      var prompt = list.filter(function (p) { return p.id === entry.promptId; })[0] || list[0];
      return { key: key, entry: entry, prompt: prompt };
    },
    shuffle: function () {
      var t = SM.daily.today();
      if (!t) return;
      var list = SM.content.daily;
      var ix = list.indexOf(t.prompt);
      var next = list[(ix + 1 + (U.hash(String(Date.now())) % (list.length - 1))) % list.length];
      t.entry.promptId = next.id;
      if (t.entry.draftId) {
        var d = SM.store.getDraft(t.entry.draftId);
        if (d && !String(d.text || '').trim()) SM.store.deleteDraft(d.id);
        t.entry.draftId = null;
      }
      SM.store.save(true);
    },
    draft: function (t) {
      var d = t.entry.draftId ? SM.store.getDraft(t.entry.draftId) : null;
      if (!d) {
        d = SM.store.createDraft({ kind: 'daily', ref: t.key, skills: [t.prompt.skill], title: SM.t('daily.title') + ' · ' + t.key });
        t.entry.draftId = d.id;
        SM.store.save(true);
      }
      return d;
    },
    exercise: function (prompt) {
      return { type: 'free', prompt: prompt.prompt, config: { minutes: 5 } };
    }
  };

  SM.weekly = {
    current: function () {
      var key = U.weekKey();
      var entry = SM.store.state.weekly[key];
      var list = SM.content.weekly;
      if (!list.length) return null;
      if (!entry) {
        entry = { id: list[U.hash(key) % list.length].id, steps: {}, draftId: null };
        SM.store.state.weekly[key] = entry;
        SM.store.save();
      }
      var ch = list.filter(function (w) { return w.id === entry.id; })[0] || list[0];
      return { key: key, entry: entry, challenge: ch };
    }
  };

  function continueCard() {
    var st = SM.store.state;
    var d = st.lastOpened ? SM.store.getDraft(st.lastOpened) : null;
    if (!d) {
      var list = SM.store.listDrafts(function (x) { return x.status !== 'done' && SM.text.wordCount(SM.exercise.collectText({}, x)) > 0; });
      d = list[0];
    }
    if (!d) return '';
    var href = '#/draft/' + d.id;
    if ((d.kind === 'lesson') && SM.ui.lessonById(d.ref)) href = '#/lesson/' + d.ref;
    if (d.kind === 'essay' && st.essays[d.ref]) href = '#/essay/' + d.ref;
    if (d.kind === 'daily') href = '#/daily';
    var excerpt = SM.ui.draftExcerpt(d);
    return '<section class="card card--continue"><p class="card__kicker">' + icon('history') + esc(SM.t('home.continue')) + '</p>' +
      '<h2 class="card__title">' + esc(SM.ui.draftTitle(d)) + '</h2>' +
      (excerpt ? '<p class="card__excerpt">' + esc(excerpt) + '</p>' : '') +
      '<p class="muted">' + esc(SM.t('home.lastEdit', { date: SM.ui.dateLabel(d.updated) })) + '</p>' +
      '<a class="btn btn--primary" href="' + esc(href) + '">' + esc(SM.t('home.continueBtn')) + icon('arrow') + '</a></section>';
  }

  function routeCard() {
    var st = SM.store.state;
    var route = SM.ui.routeById(st.profile.route) || SM.content.routes[0];
    if (!route) return '';
    var next = SM.ui.nextLesson(route);
    var prog = SM.ui.routeProgress(route);
    return '<section class="card card--route" data-color="' + esc(route.color) + '"><p class="card__kicker">' + icon('compass') + esc(SM.t('home.route')) + '</p>' +
      '<h2 class="card__title">' + esc(L(route.title)) + '</h2>' +
      '<div class="progressline"><span style="width:' + (prog.total ? Math.round(prog.done / prog.total * 100) : 0) + '%"></span></div>' +
      '<p class="muted">' + esc(SM.t('home.routeProgress', { done: prog.done, total: prog.total })) + '</p>' +
      (next ? '<ul class="lessonlist lessonlist--compact">' + SM.ui.lessonCard(next) + '</ul>' :
        '<p>' + esc(SM.t('home.routeFinished')) + '</p>') +
      '<a class="textlink" href="#/routes">' + esc(SM.t('home.changeRoute')) + '</a></section>';
  }

  function weeklyCard() {
    var w = SM.weekly.current();
    if (!w) return '';
    var total = w.challenge.steps.length;
    var done = Object.keys(w.entry.steps).filter(function (k) { return w.entry.steps[k]; }).length;
    return '<section class="card card--weekly"><p class="card__kicker">' + icon('calendar') + esc(SM.t('home.weekly')) + '</p>' +
      '<h2 class="card__title">' + esc(L(w.challenge.title)) + '</h2>' +
      '<div class="prose">' + md(L(w.challenge.brief)) + '</div>' +
      '<p class="muted">' + esc(SM.t('home.weeklySteps', { done: done, total: total })) + '</p>' +
      '<a class="btn btn--ghost" href="#/daily">' + esc(SM.t('home.weeklyOpen')) + icon('arrow') + '</a></section>';
  }

  function skillsCard() {
    var counts = SM.ui.skillCounts();
    var list = SM.content.skills.map(function (s) { return { s: s, c: counts[s.id] }; })
      .filter(function (x) { return x.c.n > 0; })
      .sort(function (a, b) { return b.c.n - a.c.n; });
    var max = list.length ? list[0].c.n : 1;
    return '<section class="card card--skills"><p class="card__kicker">' + icon('target') + esc(SM.t('home.skills')) + '</p>' +
      (list.length ? '<ul class="skillbars">' + list.slice(0, 6).map(function (x) {
        return '<li><span class="skillbars__name">' + esc(L(x.s.title)) + '</span><span class="skillbars__bar"><span style="width:' + Math.max(8, Math.round(x.c.n / max * 100)) + '%"></span></span></li>';
      }).join('') + '</ul>' : '<p class="muted">' + esc(SM.t('home.skillsEmpty')) + '</p>') +
      '<a class="textlink" href="#/portfolio/progress">' + esc(SM.t('home.skillsMore')) + '</a></section>';
  }

  function phraseCard() {
    var phrases = SM.store.state.phrases;
    if (!phrases.length) return '';
    var p = phrases[U.hash(U.dayKey()) % phrases.length];
    return '<section class="card card--phrase"><p class="card__kicker">' + icon('quote') + esc(SM.t('home.phrase')) + '</p>' +
      '<blockquote class="phrase">' + esc(p.text) + '</blockquote>' +
      '<a class="textlink" href="#/portfolio/phrases">' + esc(SM.t('home.phrases', { n: phrases.length })) + '</a></section>';
  }

  function explore() {
    var items = [
      { href: '#/lab', icon: 'flask', key: 'lab' },
      { href: '#/workshops', icon: 'spark', key: 'workshops' },
      { href: '#/library', icon: 'book', key: 'library' },
      { href: '#/essay', icon: 'essay', key: 'essay' },
      { href: '#/vocab', icon: 'words', key: 'vocab' },
      { href: '#/genres', icon: 'map', key: 'genres' }
    ];
    return '<section class="explore"><h2 class="section__title">' + esc(SM.t('home.explore')) + '</h2><div class="explore__grid">' +
      items.map(function (it) {
        return '<a class="tile" href="' + it.href + '">' + icon(it.icon, 'tile__icon') +
          '<span class="tile__title">' + esc(SM.t('nav.' + it.key)) + '</span>' +
          '<span class="tile__text">' + esc(SM.t('home.tile.' + it.key)) + '</span></a>';
      }).join('') + '</div></section>';
  }

  function chooser() {
    return '<section class="chooser"><h2 class="section__title">' + esc(SM.t('home.chooseTitle')) + '</h2>' +
      '<p class="muted">' + esc(SM.t('home.chooseText')) + '</p><div class="chooser__grid">' +
      SM.content.routes.map(function (r) {
        return '<button type="button" class="choice" data-color="' + esc(r.color) + '" data-pick-route="' + esc(r.id) + '">' +
          '<span class="choice__title">' + esc(L(r.title)) + '</span><span class="choice__text">' + esc(L(r.forWhom)) + '</span></button>';
      }).join('') + '</div></section>';
  }

  function principles() {
    var keys = ['write', 'observe', 'rewrite', 'truth'];
    return '<section class="principles"><h2 class="section__title">' + esc(SM.t('home.howTitle')) + '</h2><ol class="principles__list">' +
      keys.map(function (k) {
        return '<li><p class="principles__title">' + esc(SM.t('home.how.' + k + '.title')) + '</p><p>' + esc(SM.t('home.how.' + k + '.text')) + '</p></li>';
      }).join('') + '</ol></section>';
  }

  SM.views.home = function () {
    var st = SM.store.state;
    var fresh = !Object.keys(st.drafts).length;
    var today = SM.daily.today();
    var name = st.profile.name;
    var controller = null;

    var html = '<div class="page home">' +
      '<section class="hero">' +
      '<div class="hero__text">' +
      '<p class="kicker hand">' + esc(SM.t(fresh ? 'home.kickerNew' : 'home.kicker')) + '</p>' +
      '<h1 class="hero__title" tabindex="-1">' + (fresh ? SM.t('home.titleNew') : esc(name ? SM.t('home.titleName', { name: name }) : SM.t('home.title'))) + '</h1>' +
      '<p class="hero__lead">' + esc(SM.t(fresh ? 'home.leadNew' : 'home.lead')) + '</p>' +
      '</div>' +
      (today ? '<div class="today card card--today"><div class="today__head"><p class="card__kicker">' + icon('pen') + esc(SM.t('home.today')) + '</p>' +
        '<button class="btn btn--small btn--ghost" type="button" data-shuffle>' + icon('refresh') + esc(SM.t('daily.another')) + '</button></div>' +
        '<div data-today></div>' +
        (today.prompt.twist ? '<details class="hint"><summary>' + icon('target') + esc(SM.t('daily.twist')) + '</summary>' + md(L(today.prompt.twist)) + '</details>' : '') +
        '</div>' : '') +
      '</section>' +
      (fresh ? chooser() + principles() :
        '<div class="home__grid">' + continueCard() + routeCard() + weeklyCard() + skillsCard() + phraseCard() + '</div>') +
      explore() +
      '</div>';

    return {
      title: SM.t('nav.home'),
      html: html,
      mount: function (root) {
        if (today) {
          var box = root.querySelector('[data-today]');
          var draft = today.entry.draftId ? SM.store.getDraft(today.entry.draftId) : null;
          var tmp = draft || { id: 'tmp', text: '', data: {}, lang: SM.lang() };
          controller = SM.exercise.mount(box, {
            exercise: SM.daily.exercise(today.prompt),
            draft: tmp,
            ctx: { skills: [today.prompt.skill], kind: 'daily' },
            noFeedback: false
          });
          // Create the real draft only when the student starts typing
          if (!draft) {
            box.addEventListener('input', function once() {
              box.removeEventListener('input', once);
              var real = SM.daily.draft(today);
              real.text = tmp.text;
              real.data = tmp.data;
              SM.store.updateDraft(real.id, { text: tmp.text, data: tmp.data });
              var focused = document.activeElement;
              var pos = focused && focused.selectionStart;
              controller.destroy();
              controller = SM.exercise.mount(box, { exercise: SM.daily.exercise(today.prompt), draft: real, ctx: { skills: [today.prompt.skill], kind: 'daily' } });
              var ta = box.querySelector('[data-main]');
              if (ta) { ta.focus(); if (pos != null) ta.setSelectionRange(pos, pos); }
            });
          }
        }
        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          if (b.hasAttribute('data-shuffle')) { SM.daily.shuffle(); SM.app.rerender(); }
          if (b.dataset.pickRoute) {
            st.profile.route = b.dataset.pickRoute;
            st.profile.onboarded = true;
            SM.store.save(true);
            var r = SM.ui.routeById(b.dataset.pickRoute);
            var first = r && SM.ui.nextLesson(r);
            SM.app.go(first ? '#/lesson/' + first : '#/route/' + b.dataset.pickRoute);
          }
        });
      },
      destroy: function () { if (controller) controller.destroy(); }
    };
  };
})();
