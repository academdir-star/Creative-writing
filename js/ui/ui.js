/* Shared UI pieces: icons, toasts, modal, cards, progress helpers. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  SM.views = SM.views || {};

  var ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    pen: '<path d="M15.5 4.5l4 4L9 19H5v-4z"/><path d="M13 7l4 4"/>',
    nib: '<path d="M7 3h10l-1 7-4 11-4-11z"/><path d="M12 12v9"/><circle cx="12" cy="10" r="1.4"/>',
    compass: '<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    essay: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',
    home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    bulb: '<path d="M9 18h6M10 21h4M8 14.5A6 6 0 1 1 16 14.5c-.8.7-1 1.6-1 2.5H9c0-.9-.2-1.8-1-2.5z"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4M12 7v5l3 2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    upload: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    chat: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
    quote: '<path d="M7 7h4v4H8c0 2 1 3 3 3v3c-3 0-5-2-5-6V7zM14 7h4v4h-3c0 2 1 3 3 3v3c-3 0-5-2-5-6V7z"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    words: '<path d="M4 6h16M4 12h10M4 18h13"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    tag: '<path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1.5 1.5 0 0 1 0 2.1l-6.2 6.2a1.5 1.5 0 0 1-2.1 0z"/><circle cx="8" cy="8" r="1.5"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="15" r="1.2"/><circle cx="15" cy="9" r="1.2"/><circle cx="9" cy="15" r="1.2"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    printer: '<path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    heart: '<path d="M12 20s-7.5-4.5-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.5 12 20 12 20z"/>'
  };

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }

  // ---- Toasts ---------------------------------------------------------------

  function toast(message, opts) {
    var box = document.querySelector('[data-toasts]');
    if (!box) return;
    var el = document.createElement('div');
    el.className = 'toast' + (opts && opts.kind ? ' toast--' + opts.kind : '');
    el.textContent = message;
    box.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('is-in'); });
    setTimeout(function () {
      el.classList.remove('is-in');
      setTimeout(function () { el.remove(); }, 300);
    }, (opts && opts.ms) || 2600);
  }

  // ---- Modal -----------------------------------------------------------------

  var lastFocus = null;

  function openModal(html, onMount) {
    var modal = document.querySelector('[data-modal]');
    var box = modal.querySelector('[data-modal-box]');
    lastFocus = document.activeElement;
    box.innerHTML = html;
    modal.hidden = false;
    document.body.classList.add('has-modal');
    var focusable = box.querySelector('input, textarea, button, [href]');
    if (focusable) focusable.focus();
    if (onMount) onMount(box, closeModal);
    return box;
  }

  function closeModal() {
    var modal = document.querySelector('[data-modal]');
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modal.querySelector('[data-modal-box]').innerHTML = '';
    document.body.classList.remove('has-modal');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function confirmDialog(message, okLabel, onOk, danger) {
    openModal(
      '<p class="modal__text">' + esc(message) + '</p>' +
      '<div class="modal__actions">' +
      '<button class="btn btn--ghost" type="button" data-cancel>' + esc(SM.t('common.cancel')) + '</button>' +
      '<button class="btn ' + (danger ? 'btn--danger' : 'btn--primary') + '" type="button" data-ok>' + esc(okLabel) + '</button>' +
      '</div>',
      function (box, close) {
        box.querySelector('[data-cancel]').addEventListener('click', close);
        box.querySelector('[data-ok]').addEventListener('click', function () { close(); onOk(); });
      }
    );
  }

  function promptDialog(label, value, okLabel, onOk) {
    openModal(
      '<label class="field"><span class="field__label">' + esc(label) + '</span>' +
      '<input class="input" type="text" value="' + esc(value || '') + '" data-input></label>' +
      '<div class="modal__actions">' +
      '<button class="btn btn--ghost" type="button" data-cancel>' + esc(SM.t('common.cancel')) + '</button>' +
      '<button class="btn btn--primary" type="button" data-ok>' + esc(okLabel) + '</button>' +
      '</div>',
      function (box, close) {
        var input = box.querySelector('[data-input]');
        input.select();
        function ok() { var v = input.value; close(); onOk(v); }
        box.querySelector('[data-cancel]').addEventListener('click', close);
        box.querySelector('[data-ok]').addEventListener('click', ok);
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') ok(); });
      }
    );
  }

  // ---- Progress helpers -------------------------------------------------------

  function routeById(id) {
    return SM.content.routes.filter(function (r) { return r.id === id; })[0] || null;
  }

  function lessonById(id) { return SM.content.lessons[id] || null; }

  function lessonStatus(id) {
    var l = SM.store.state.lessons[id];
    return l ? l.status : 'new';
  }

  function routeProgress(route) {
    var available = route.lessons.filter(function (id) { return lessonById(id); });
    var done = available.filter(function (id) { return lessonStatus(id) === 'done'; }).length;
    return { done: done, total: available.length, planned: route.lessons.length };
  }

  function nextLesson(route) {
    var ids = route.lessons.filter(function (id) { return lessonById(id); });
    for (var i = 0; i < ids.length; i++) {
      if (lessonStatus(ids[i]) !== 'done') return ids[i];
    }
    return null;
  }

  // Skill practice counts: finished lessons + finished drafts tagged with skills
  function skillCounts() {
    var counts = {};
    SM.content.skills.forEach(function (s) { counts[s.id] = { n: 0, last: 0 }; });
    var seen = {};
    SM.store.listDrafts().forEach(function (d) {
      var skills = d.skills || [];
      if (!skills.length && d.kind === 'lesson' && lessonById(d.ref)) skills = lessonById(d.ref).skills;
      var worked = (SM.text.wordCount(d.text) + Object.keys(d.data || {}).length) > 0;
      if (!worked) return;
      skills.forEach(function (s) {
        if (!counts[s]) return;
        var key = s + ':' + d.id;
        if (seen[key]) return;
        seen[key] = true;
        counts[s].n += d.status === 'done' ? 2 : 1;
        counts[s].last = Math.max(counts[s].last, d.updated);
      });
    });
    return counts;
  }

  // ---- Small renderers ---------------------------------------------------------

  function pageHead(opts) {
    return '<header class="pagehead' + (opts.cls ? ' ' + opts.cls : '') + '">' +
      (opts.back ? '<a class="backlink" href="' + esc(opts.back.href) + '">' + icon('back') + esc(opts.back.label) + '</a>' : '') +
      (opts.kicker ? '<p class="kicker">' + esc(opts.kicker) + '</p>' : '') +
      '<h1 class="pagehead__title" tabindex="-1">' + esc(opts.title) + '</h1>' +
      (opts.lead ? '<div class="pagehead__lead">' + SM.util.md(opts.lead) + '</div>' : '') +
      '</header>';
  }

  function chip(text, cls) {
    return '<span class="chip' + (cls ? ' ' + cls : '') + '">' + esc(text) + '</span>';
  }

  function skillName(id) {
    var s = SM.content.skills.filter(function (x) { return x.id === id; })[0];
    return s ? SM.L(s.title) : id;
  }

  function genreName(id) {
    var g = SM.content.genres.filter(function (x) { return x.id === id; })[0];
    return g ? SM.L(g.title) : id;
  }

  function statusChip(status) {
    if (status === 'done') return chip(SM.t('status.done'), 'chip--done');
    if (status === 'started') return chip(SM.t('status.started'), 'chip--started');
    return '';
  }

  function lessonCard(id, opts) {
    var l = lessonById(id);
    var route = routeById(l ? l.route : null);
    if (!l) {
      return '<li class="lessoncard lessoncard--soon"><span class="lessoncard__n">' + esc((opts && opts.n) || '') + '</span>' +
        '<div><p class="lessoncard__title">' + esc(SM.t('lesson.soon')) + '</p></div></li>';
    }
    var status = lessonStatus(id);
    return '<li class="lessoncard lessoncard--' + status + '" data-color="' + esc(route ? route.color : 'ink') + '">' +
      '<a class="lessoncard__link" href="#/lesson/' + esc(id) + '">' +
      '<span class="lessoncard__n">' + (status === 'done' ? icon('check') : esc(l.n)) + '</span>' +
      '<span class="lessoncard__body">' +
      '<span class="lessoncard__title">' + esc(SM.L(l.title)) + '</span>' +
      '<span class="lessoncard__learn">' + esc(SM.L(l.learn)) + '</span>' +
      '<span class="lessoncard__meta">' + icon('clock') + esc(SM.t('common.minutes', { n: l.minutes })) +
      (opts && opts.showRoute && route ? ' · ' + esc(SM.L(route.title)) : '') + ' ' + statusChip(status) + '</span>' +
      '</span>' + icon('arrow', 'lessoncard__arrow') + '</a></li>';
  }

  function emptyState(title, text, action) {
    return '<div class="empty"><p class="empty__title">' + esc(title) + '</p>' +
      (text ? '<p class="empty__text">' + esc(text) + '</p>' : '') +
      (action ? '<a class="btn btn--primary" href="' + esc(action.href) + '">' + esc(action.label) + '</a>' : '') + '</div>';
  }

  function autosize(ta) {
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.max(ta.scrollHeight + 2, 0) + 'px';
  }

  function dateLabel(ts) {
    var d = new Date(ts);
    try {
      return d.toLocaleDateString(SM.lang() === 'en' ? 'en-GB' : 'ru-RU', { day: 'numeric', month: 'short' }) +
        ', ' + d.toLocaleTimeString(SM.lang() === 'en' ? 'en-GB' : 'ru-RU', { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return d.toISOString().slice(0, 16).replace('T', ' ');
    }
  }

  function draftTitle(d) {
    if (d.title) return d.title;
    if (d.kind === 'lesson' || d.kind === 'harder') {
      var l = lessonById(d.ref);
      if (l) return SM.L(l.title) + (d.kind === 'harder' ? ' · ' + SM.t('lesson.harderShort') : '');
    }
    if (d.kind === 'workshop') {
      var w = SM.content.workshops.filter(function (x) { return x.id === d.ref; })[0];
      if (w) return SM.L(w.title) + (d.part ? ' · ' + SM.t('workshop.' + d.part) : '');
    }
    if (d.kind === 'lab') {
      var t = SM.content.lab.filter(function (x) { return x.id === d.ref; })[0];
      if (t) return SM.t('nav.lab') + ': ' + SM.L(t.title);
    }
    if (d.kind === 'daily') return SM.t('daily.title') + ' · ' + (d.ref || '');
    if (d.kind === 'weekly') return SM.t('weekly.title');
    if (d.kind === 'vocab') return SM.t('nav.vocab');
    if (d.kind === 'essay') {
      var p = SM.store.state.essays[d.ref];
      if (p) return p.title || SM.t('essay.untitled');
    }
    if (d.kind === 'reading') return SM.t('library.tryDraft');
    var first = String(d.text || '').trim().split('\n')[0];
    return first ? first.slice(0, 60) : SM.t('draft.untitled');
  }

  function draftExcerpt(d) {
    var text = String(d.text || '').trim();
    if (!text && d.data) {
      var parts = [];
      ['items', 'cols', 'own'].forEach(function (k) { if (Array.isArray(d.data[k])) parts = parts.concat(d.data[k]); });
      if (d.data.fields) Object.keys(d.data.fields).forEach(function (k) { parts.push(d.data.fields[k]); });
      text = parts.filter(Boolean).join(' · ');
    }
    return text.length > 180 ? text.slice(0, 178) + '…' : text;
  }

  SM.ui = {
    icon: icon,
    toast: toast,
    openModal: openModal,
    closeModal: closeModal,
    confirm: confirmDialog,
    prompt: promptDialog,
    routeById: routeById,
    lessonById: lessonById,
    lessonStatus: lessonStatus,
    routeProgress: routeProgress,
    nextLesson: nextLesson,
    skillCounts: skillCounts,
    pageHead: pageHead,
    chip: chip,
    skillName: skillName,
    genreName: genreName,
    statusChip: statusChip,
    lessonCard: lessonCard,
    emptyState: emptyState,
    autosize: autosize,
    dateLabel: dateLabel,
    draftTitle: draftTitle,
    draftExcerpt: draftExcerpt
  };
})();
