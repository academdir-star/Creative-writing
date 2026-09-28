/* Settings: language, theme, name, data backup/restore/reset. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  SM.views.settings = function () {
    var st = SM.store.state;
    var drafts = Object.keys(st.drafts).length;
    var html = '<div class="page settings">' +
      SM.ui.pageHead({ kicker: SM.t('settings.kicker'), title: SM.t('settings.title') }) +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('settings.lang')) + '</h2>' +
      '<div class="segmented" role="group">' + ['ru', 'en'].map(function (l) {
        return '<label class="segmented__opt"><input type="radio" name="lang" value="' + l + '"' + (SM.lang() === l ? ' checked' : '') + '><span>' + (l === 'ru' ? 'Русский' : 'English') + '</span></label>';
      }).join('') + '</div><p class="muted">' + esc(SM.t('settings.langNote')) + '</p></section>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('settings.theme')) + '</h2>' +
      '<div class="segmented" role="group">' + ['auto', 'light', 'dark'].map(function (t) {
        return '<label class="segmented__opt"><input type="radio" name="theme" value="' + t + '"' + ((st.theme || 'auto') === t ? ' checked' : '') + '><span>' + esc(SM.t('settings.theme.' + t)) + '</span></label>';
      }).join('') + '</div></section>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('settings.name')) + '</h2>' +
      '<label class="field"><span class="field__hint">' + esc(SM.t('settings.nameHint')) + '</span><input class="input" data-name value="' + esc(st.profile.name || '') + '" autocomplete="off"></label></section>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('settings.data')) + '</h2>' +
      '<p>' + esc(SM.t('settings.dataText', { n: drafts })) + '</p>' +
      (SM.store.persistent() ? '' : '<p class="warning">' + esc(SM.t('storage.warning')) + '</p>') +
      '<div class="ex__row">' +
      '<button class="btn" type="button" data-export>' + icon('download') + esc(SM.t('settings.export')) + '</button>' +
      '<label class="btn btn--ghost filebtn">' + icon('upload') + esc(SM.t('settings.import')) + '<input type="file" accept="application/json,.json" data-import hidden></label>' +
      '<button class="btn btn--danger" type="button" data-reset>' + icon('trash') + esc(SM.t('settings.reset')) + '</button>' +
      '</div></section>' +
      '<section class="card"><h2 class="section__title">' + esc(SM.t('settings.about')) + '</h2><div class="prose">' + U.md(SM.t('settings.aboutText')) + '</div>' +
      '<p><a class="textlink" href="#/teacher">' + esc(SM.t('nav.teacher')) + '</a> · <a class="textlink" href="landing/index.html">' + esc(SM.t('settings.landing')) + '</a></p></section>' +
      '</div>';
    return {
      title: SM.t('settings.title'),
      html: html,
      mount: function (root) {
        root.addEventListener('change', function (e) {
          var el = e.target;
          if (el.name === 'lang') { SM.setLang(el.value); SM.app.rerender(); }
          if (el.name === 'theme') { st.theme = el.value; SM.store.save(true); SM.app.applyTheme(); }
          if (el.hasAttribute('data-import')) {
            var file = el.files[0];
            if (!file) return;
            var reader = new FileReader();
            reader.onload = function () {
              try {
                SM.store.importJson(reader.result);
                SM.ui.toast(SM.t('settings.imported'));
                SM.app.rerender();
              } catch (err) {
                SM.ui.toast(SM.t('settings.importError'), { kind: 'error' });
              }
            };
            reader.readAsText(file);
          }
        });
        root.querySelector('[data-name]').addEventListener('input', function (e) {
          st.profile.name = e.target.value.trim().slice(0, 40);
          SM.store.save();
        });
        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          if (b.hasAttribute('data-export')) U.download('skill-matrix-writing-' + U.dayKey() + '.json', SM.store.exportJson(), 'application/json');
          if (b.hasAttribute('data-reset')) {
            SM.ui.confirm(SM.t('settings.resetConfirm'), SM.t('settings.reset'), function () {
              SM.store.reset();
              SM.ui.toast(SM.t('settings.resetDone'));
              SM.app.go('#/');
            }, true);
          }
        });
      }
    };
  };
})();
