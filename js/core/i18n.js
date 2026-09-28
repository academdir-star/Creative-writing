/* Interface language. Dictionaries live in js/core/strings.js (loaded right after this file). */
(function () {
  'use strict';

  var SM = window.SM = window.SM || {};
  var current = 'ru';
  var missing = {};

  SM.strings = SM.strings || { ru: {}, en: {} };

  function detect() {
    try {
      var saved = JSON.parse(window.localStorage.getItem('sm-writing-studio-v1') || '{}').lang;
      if (saved === 'ru' || saved === 'en') return saved;
    } catch (e) { /* ignore */ }
    var nav = (navigator.language || 'ru').toLowerCase();
    return nav.indexOf('ru') === 0 || nav.indexOf('kk') === 0 ? 'ru' : 'en';
  }

  current = detect();

  SM.lang = function () { return current; };

  SM.setLang = function (lang) {
    if (lang !== 'ru' && lang !== 'en') return;
    current = lang;
    document.documentElement.lang = lang;
    if (SM.store) {
      SM.store.state.lang = lang;
      SM.store.save(true);
    }
  };

  // Pick the current language from a localized object {ru, en}
  SM.L = function (obj, lang) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    var l = lang || current;
    return obj[l] != null ? obj[l] : (obj.ru != null ? obj.ru : (obj.en || ''));
  };

  // UI string with {var} interpolation and simple plural forms: {n|книга|книги|книг}
  SM.t = function (key, vars) {
    var dict = SM.strings[current] || {};
    var s = dict[key];
    if (s == null) {
      s = (SM.strings.ru || {})[key];
      if (!missing[key]) { missing[key] = true; if (window.console) console.warn('i18n: missing key', key); }
      if (s == null) return key;
    }
    if (!vars) return s;
    return s.replace(/\{(\w+)\|([^}]*)\}/g, function (_, name, forms) {
      return plural(vars[name], forms.split('|'));
    }).replace(/\{(\w+)\}/g, function (_, name) {
      return vars[name] != null ? vars[name] : '';
    });
  };

  function plural(n, forms) {
    n = Math.abs(Number(n) || 0);
    if (current === 'en') return n === 1 ? forms[0] : (forms[1] || forms[0]);
    var n10 = n % 10, n100 = n % 100;
    if (n10 === 1 && n100 !== 11) return forms[0];
    if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return forms[1] || forms[0];
    return forms[2] || forms[1] || forms[0];
  }

  SM.plural = plural;
  document.documentElement.lang = current;
})();
