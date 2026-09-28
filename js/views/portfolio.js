/* Portfolio: drafts, finished pieces, phrase collection, progress. Everything stays private. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  var TABS = ['drafts', 'portfolio', 'phrases', 'progress'];
  var KINDS = ['lesson', 'harder', 'daily', 'weekly', 'workshop', 'lab', 'vocab', 'essay', 'reading', 'free'];

  function draftItem(d) {
    var words = SM.text.wordCount(SM.exercise.collectText({}, d));
    return '<li class="draftitem"><a href="#/draft/' + esc(d.id) + '">' +
      '<span class="draftitem__title">' + esc(SM.ui.draftTitle(d)) + '</span>' +
      '<span class="draftitem__excerpt">' + esc(SM.ui.draftExcerpt(d)) + '</span>' +
      '<span class="draftitem__meta">' + SM.ui.chip(SM.t('kind.' + d.kind)) +
      (d.status === 'done' ? SM.ui.chip(SM.t('status.done'), 'chip--done') : '') +
      (d.portfolio ? SM.ui.chip(SM.t('draft.inPortfolio'), 'chip--current') : '') +
      '<span class="muted">' + esc(SM.t('common.words', { n: words })) + ' · ' + esc(SM.ui.dateLabel(d.updated)) +
      ' · ' + esc(SM.t('versions.count', { n: (d.versions || []).length })) + '</span></span></a></li>';
  }

  function draftsTab(filter) {
    var drafts = SM.store.listDrafts(function (d) {
      if (filter && d.kind !== filter) return false;
      return SM.text.wordCount(SM.exercise.collectText({}, d)) > 0 || d.kind === 'free' || d.kind === 'essay';
    });
    var counts = {};
    SM.store.listDrafts().forEach(function (d) { counts[d.kind] = (counts[d.kind] || 0) + 1; });
    return '<div class="toolbar"><div class="filters" role="group" aria-label="' + esc(SM.t('portfolio.filter')) + '">' +
      '<button type="button" class="filter' + (!filter ? ' is-active' : '') + '" data-filter="">' + esc(SM.t('portfolio.all')) + '</button>' +
      KINDS.filter(function (k) { return counts[k]; }).map(function (k) {
        return '<button type="button" class="filter' + (filter === k ? ' is-active' : '') + '" data-filter="' + k + '">' + esc(SM.t('kind.' + k)) + ' <span>' + counts[k] + '</span></button>';
      }).join('') + '</div>' +
      '<a class="btn btn--primary btn--small" href="#/write">' + icon('plus') + esc(SM.t('portfolio.newText')) + '</a></div>' +
      (drafts.length ? '<ul class="draftlist">' + drafts.map(draftItem).join('') + '</ul>' :
        SM.ui.emptyState(SM.t('portfolio.emptyDrafts'), SM.t('portfolio.emptyDraftsText'), { href: '#/daily', label: SM.t('nav.write') }));
  }

  function portfolioTab() {
    var items = SM.store.listDrafts(function (d) { return d.portfolio; });
    return '<aside class="note">' + icon('lock') + '<div><p class="note__title">' + esc(SM.t('portfolio.privateTitle')) + '</p><p>' + esc(SM.t('portfolio.privateText')) + '</p></div></aside>' +
      (items.length ? '<div class="toolbar"><span class="muted">' + esc(SM.t('portfolio.count', { n: items.length })) + '</span>' +
        '<button class="btn btn--small btn--ghost" type="button" data-export-portfolio>' + icon('download') + esc(SM.t('portfolio.exportTxt')) + '</button></div>' +
        '<ul class="draftlist">' + items.map(draftItem).join('') + '</ul>' :
        SM.ui.emptyState(SM.t('portfolio.empty'), SM.t('portfolio.emptyText')));
  }

  function phrasesTab() {
    var list = SM.store.state.phrases;
    return '<p class="muted">' + esc(SM.t('portfolio.phrasesHow')) + '</p>' +
      (list.length ? '<ul class="phrases">' + list.map(function (p) {
        var d = p.draftId ? SM.store.getDraft(p.draftId) : null;
        return '<li class="phraseitem"><blockquote class="phrase">' + esc(p.text) + '</blockquote>' +
          '<p class="phraseitem__meta muted">' + esc(SM.ui.dateLabel(p.t)) +
          (d ? ' · <a href="#/draft/' + esc(d.id) + '">' + esc(SM.ui.draftTitle(d)) + '</a>' : '') +
          ' <button class="iconbtn iconbtn--small" type="button" data-phrase-copy="' + esc(p.id) + '" aria-label="' + esc(SM.t('draft.copy')) + '">' + icon('copy') + '</button>' +
          '<button class="iconbtn iconbtn--small" type="button" data-phrase-del="' + esc(p.id) + '" aria-label="' + esc(SM.t('common.delete')) + '">' + icon('trash') + '</button></p></li>';
      }).join('') + '</ul>' : SM.ui.emptyState(SM.t('portfolio.noPhrases'), SM.t('portfolio.noPhrasesText')));
  }

  function progressTab() {
    var counts = SM.ui.skillCounts();
    var max = Math.max.apply(null, SM.content.skills.map(function (s) { return counts[s.id].n; }).concat([1]));
    var drafts = SM.store.listDrafts();
    var totalWords = drafts.reduce(function (sum, d) { return sum + SM.text.wordCount(SM.exercise.collectText({}, d)); }, 0);
    var improvements = drafts.reduce(function (sum, d) { return sum + (d.improvements || []).length; }, 0);
    var versions = drafts.reduce(function (sum, d) { return sum + (d.versions || []).length; }, 0);
    var done = Object.keys(SM.store.state.lessons).filter(function (k) { return SM.store.state.lessons[k].status === 'done'; }).length;

    return '<div class="stats">' +
      stat(done, SM.t('progress.lessons')) + stat(totalWords, SM.t('progress.words')) +
      stat(improvements, SM.t('progress.improvements')) + stat(versions, SM.t('progress.versions')) +
      '</div>' +
      '<h2 class="section__title">' + esc(SM.t('progress.skills')) + '</h2>' +
      '<p class="muted">' + esc(SM.t('progress.skillsHow')) + '</p>' +
      '<ul class="skillbars skillbars--full">' + SM.content.skills.map(function (s) {
        var c = counts[s.id];
        return '<li><span class="skillbars__name">' + esc(L(s.title)) + '<span class="skillbars__about">' + esc(L(s.about)) + '</span></span>' +
          '<span class="skillbars__bar"><span style="width:' + (c.n ? Math.max(6, Math.round(c.n / max * 100)) : 0) + '%"></span></span>' +
          '<span class="skillbars__n">' + (c.n ? esc(SM.t('progress.times', { n: c.n })) + (c.last ? ' · ' + esc(SM.ui.dateLabel(c.last).split(',')[0]) : '') : '—') + '</span></li>';
      }).join('') + '</ul>' +
      '<h2 class="section__title">' + esc(SM.t('progress.routes')) + '</h2>' +
      '<ul class="routeprogress">' + SM.content.routes.map(function (r) {
        var p = SM.ui.routeProgress(r);
        return '<li data-color="' + esc(r.color) + '"><a href="#/route/' + esc(r.id) + '">' + esc(L(r.title)) + '</a>' +
          '<span class="progressline"><span style="width:' + (p.total ? Math.round(p.done / p.total * 100) : 0) + '%"></span></span>' +
          '<span class="muted">' + p.done + '/' + p.total + '</span></li>';
      }).join('') + '</ul>' +
      '<aside class="note">' + icon('target') + '<div><p>' + esc(SM.t('progress.note')) + '</p></div></aside>';
  }

  function stat(n, label) {
    return '<div class="stat"><span class="stat__n">' + esc(String(n)) + '</span><span class="stat__label">' + esc(label) + '</span></div>';
  }

  SM.views.portfolio = function (params) {
    var tab = TABS.indexOf(params.tab) !== -1 ? params.tab : 'drafts';
    var filter = '';

    function content() {
      if (tab === 'portfolio') return portfolioTab();
      if (tab === 'phrases') return phrasesTab();
      if (tab === 'progress') return progressTab();
      return draftsTab(filter);
    }

    var html = '<div class="page">' +
      SM.ui.pageHead({ kicker: SM.t('portfolio.kicker'), title: SM.t('portfolio.title'), lead: SM.t('portfolio.lead') }) +
      '<nav class="tabs" aria-label="' + esc(SM.t('portfolio.title')) + '">' + TABS.map(function (t) {
        return '<a class="tabs__tab' + (t === tab ? ' is-active' : '') + '" href="#/portfolio/' + t + '"' + (t === tab ? ' aria-current="page"' : '') + '>' + esc(SM.t('portfolio.tab.' + t)) + '</a>';
      }).join('') + '</nav>' +
      '<div data-tab>' + content() + '</div>' +
      '</div>';

    return {
      title: SM.t('portfolio.title'),
      html: html,
      mount: function (root) {
        var box = root.querySelector('[data-tab]');
        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          if (b.dataset.filter != null) { filter = b.dataset.filter; box.innerHTML = content(); return; }
          if (b.dataset.phraseDel) { SM.store.removePhrase(b.dataset.phraseDel); box.innerHTML = content(); return; }
          if (b.dataset.phraseCopy) {
            var p = SM.store.state.phrases.filter(function (x) { return x.id === b.dataset.phraseCopy; })[0];
            if (p) { U.copyText(p.text); SM.ui.toast(SM.t('common.copied')); }
            return;
          }
          if (b.hasAttribute('data-export-portfolio')) {
            var items = SM.store.listDrafts(function (d) { return d.portfolio; });
            var text = items.map(function (d) {
              return '=== ' + SM.ui.draftTitle(d) + ' ===\n\n' + SM.exercise.collectText({}, d);
            }).join('\n\n\n');
            U.download('portfolio-' + U.dayKey() + '.txt', text);
          }
        });
      }
    };
  };
})();
