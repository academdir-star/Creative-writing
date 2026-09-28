/* Version history panel: list, compare with current, restore. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;

  function textOf(v) {
    var parts = [];
    var d = v.data || {};
    ['items', 'cols', 'own'].forEach(function (k) { if (Array.isArray(d[k])) parts = parts.concat(d[k]); });
    ['fields', 'qa'].forEach(function (k) { if (d[k]) Object.keys(d[k]).forEach(function (f) { parts.push(d[k][f]); }); });
    parts.push(v.text);
    if (d.after) parts.push(d.after);
    return parts.filter(function (p) { return p && String(p).trim(); }).join('\n\n');
  }

  function render(draft) {
    var list = (draft.versions || []).map(function (v, i) { return { v: v, i: i }; }).reverse();
    if (!list.length) return '<p class="muted">' + esc(SM.t('versions.none')) + '</p>';
    return '<ol class="versions">' + list.map(function (item) {
      var words = SM.text.wordCount(textOf(item.v));
      return '<li class="versions__item"><div class="versions__meta"><span class="versions__date">' + esc(SM.ui.dateLabel(item.v.t)) + '</span>' +
        (item.v.note ? ' · <span class="versions__note">' + esc(item.v.note) + '</span>' : '') +
        ' · <span class="muted">' + esc(SM.t('common.words', { n: words })) + '</span></div>' +
        '<div class="versions__btns"><button class="btn btn--small btn--ghost" type="button" data-v-compare="' + item.i + '">' + esc(SM.t('versions.compare')) + '</button>' +
        '<button class="btn btn--small btn--ghost" type="button" data-v-restore="' + item.i + '">' + esc(SM.t('versions.restore')) + '</button></div></li>';
    }).join('') + '</ol>';
  }

  function mount(container, draft, onRestore) {
    function draw() {
      var fresh = SM.store.getDraft(draft.id) || draft;
      container.innerHTML = '<details class="panel versions-panel"' + (container.dataset.open ? ' open' : '') + '><summary>' + SM.ui.icon('history') +
        esc(SM.t('versions.title', { n: (fresh.versions || []).length })) + '</summary>' +
        '<p class="panel__hint">' + esc(SM.t('versions.hint')) + '</p>' + render(fresh) + '</details>';
    }
    draw();
    container.addEventListener('toggle', function (e) {
      if (e.target.matches('details')) container.dataset.open = e.target.open ? '1' : '';
    }, true);
    container.addEventListener('click', function (e) {
      var fresh = SM.store.getDraft(draft.id);
      var btn = e.target.closest('button');
      if (!btn || !fresh) return;
      if (btn.dataset.vCompare != null) {
        var v = fresh.versions[+btn.dataset.vCompare];
        SM.ui.openModal(
          '<h2 class="modal__title">' + esc(SM.t('versions.diffTitle')) + '</h2>' +
          '<p class="muted">' + esc(SM.ui.dateLabel(v.t)) + ' → ' + esc(SM.t('versions.current')) + '</p>' +
          '<div class="diff diff--big">' + U.diffHtml(textOf(v), textOf(fresh)) + '</div>' +
          '<p class="fb__legend"><del>' + esc(SM.t('versions.removed')) + '</del> <ins>' + esc(SM.t('versions.added')) + '</ins></p>' +
          '<div class="modal__actions"><button class="btn btn--primary" type="button" data-close>' + esc(SM.t('common.close')) + '</button></div>',
          function (box, close) { box.querySelector('[data-close]').addEventListener('click', close); }
        );
      }
      if (btn.dataset.vRestore != null) {
        SM.ui.confirm(SM.t('versions.restoreConfirm'), SM.t('versions.restore'), function () {
          SM.store.restoreVersion(draft.id, +btn.dataset.vRestore);
          SM.ui.toast(SM.t('versions.restored'));
          if (onRestore) onRestore();
          draw();
        });
      }
    });
    return { refresh: draw };
  }

  SM.versions = { mount: mount, textOf: textOf };
})();
