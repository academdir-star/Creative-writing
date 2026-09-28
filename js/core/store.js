/* Persistent state in localStorage, with an in-memory fallback. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var KEY = 'sm-writing-studio-v1';
  var MAX_VERSIONS = 40;

  function blank() {
    return {
      v: 1,
      created: Date.now(),
      lang: null,
      theme: 'auto',
      profile: { name: '', route: 'base', onboarded: false },
      drafts: {},
      lessons: {},
      phrases: [],
      vocab: [],
      daily: {},
      weekly: {},
      essays: {},
      readings: {},
      lastOpened: null
    };
  }

  var state = blank();
  var persistent = true;
  var listeners = [];

  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) state = migrate(JSON.parse(raw));
    } catch (e) {
      persistent = false;
    }
    try {
      window.localStorage.setItem(KEY + '-probe', '1');
      window.localStorage.removeItem(KEY + '-probe');
    } catch (e) {
      persistent = false;
    }
  }

  function migrate(data) {
    var base = blank();
    Object.keys(base).forEach(function (k) {
      if (data[k] === undefined) data[k] = base[k];
    });
    return data;
  }

  function writeNow() {
    if (!persistent) return false;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      persistent = false;
      notify('storage-error');
      return false;
    }
  }

  var writeSoon = U.debounce(writeNow, 400);

  function save(immediate) {
    if (immediate) writeNow(); else writeSoon();
    notify('change');
  }

  function notify(type) {
    listeners.forEach(function (fn) { try { fn(type); } catch (e) { /* ignore */ } });
  }

  // ---- Drafts ------------------------------------------------------------

  function createDraft(opts) {
    var now = Date.now();
    var draft = {
      id: U.uid('d'),
      kind: opts.kind || 'free',          // lesson | harder | daily | weekly | workshop | lab | vocab | essay | free
      ref: opts.ref || null,              // lesson id, workshop id, etc.
      part: opts.part || null,            // e.g. 'warmup' | 'main' for workshops
      title: opts.title || '',
      lang: opts.lang || SM.lang(),
      text: opts.text || '',
      data: opts.data || {},              // structured exercise data
      skills: opts.skills || [],
      genres: opts.genres || [],
      created: now,
      updated: now,
      versions: [],
      status: 'draft',                    // draft | done
      portfolio: false,
      selfCheck: {},
      reflection: '',
      peer: [],
      improvements: []
    };
    state.drafts[draft.id] = draft;
    state.lastOpened = draft.id;
    save();
    return draft;
  }

  function getDraft(id) { return state.drafts[id] || null; }

  function findDraft(kind, ref, part) {
    var found = null;
    Object.keys(state.drafts).forEach(function (id) {
      var d = state.drafts[id];
      if (d.kind === kind && d.ref === ref && (part == null || d.part === part)) {
        if (!found || d.updated > found.updated) found = d;
      }
    });
    return found;
  }

  function ensureDraft(opts) {
    return findDraft(opts.kind, opts.ref, opts.part) || createDraft(opts);
  }

  function updateDraft(id, patch) {
    var d = state.drafts[id];
    if (!d) return null;
    Object.keys(patch).forEach(function (k) { d[k] = patch[k]; });
    d.updated = Date.now();
    state.lastOpened = id;
    save();
    return d;
  }

  function snapshot(d) {
    return { text: d.text, data: JSON.parse(JSON.stringify(d.data || {})) };
  }

  function addVersion(id, note) {
    var d = state.drafts[id];
    if (!d) return null;
    var snap = snapshot(d);
    var last = d.versions[d.versions.length - 1];
    if (last && last.text === snap.text && JSON.stringify(last.data) === JSON.stringify(snap.data)) {
      if (note) last.note = note;
      save(true);
      return last;
    }
    var version = { t: Date.now(), note: note || '', text: snap.text, data: snap.data };
    d.versions.push(version);
    if (d.versions.length > MAX_VERSIONS) {
      // keep the very first draft and the most recent ones
      d.versions.splice(1, d.versions.length - MAX_VERSIONS);
    }
    save(true);
    return version;
  }

  function restoreVersion(id, index) {
    var d = state.drafts[id];
    if (!d || !d.versions[index]) return null;
    addVersion(id, SM.t('versions.beforeRestore'));
    var v = d.versions[index];
    d.text = v.text;
    d.data = JSON.parse(JSON.stringify(v.data || {}));
    d.updated = Date.now();
    save(true);
    return d;
  }

  function deleteDraft(id) {
    delete state.drafts[id];
    Object.keys(state.lessons).forEach(function (lid) {
      if (state.lessons[lid].draftId === id) state.lessons[lid].draftId = null;
    });
    if (state.lastOpened === id) state.lastOpened = null;
    save(true);
  }

  function listDrafts(filter) {
    return Object.keys(state.drafts).map(function (k) { return state.drafts[k]; })
      .filter(function (d) { return !filter || filter(d); })
      .sort(function (a, b) { return b.updated - a.updated; });
  }

  // ---- Lessons -----------------------------------------------------------

  function lesson(id) {
    if (!state.lessons[id]) state.lessons[id] = { status: 'new', draftId: null, harderId: null, started: null, done: null };
    return state.lessons[id];
  }

  function setLesson(id, patch) {
    var l = lesson(id);
    Object.keys(patch).forEach(function (k) { l[k] = patch[k]; });
    save();
    return l;
  }

  // ---- Phrases -----------------------------------------------------------

  function addPhrase(text, draftId) {
    var clean = String(text || '').trim();
    if (!clean) return null;
    var exists = state.phrases.some(function (p) { return p.text === clean; });
    if (exists) return null;
    var phrase = { id: U.uid('p'), text: clean, draftId: draftId || null, t: Date.now(), note: '' };
    state.phrases.unshift(phrase);
    save(true);
    return phrase;
  }

  function removePhrase(id) {
    state.phrases = state.phrases.filter(function (p) { return p.id !== id; });
    save(true);
  }

  // ---- Vocabulary journal -------------------------------------------------

  function addWord(entry) {
    var word = {
      id: U.uid('w'),
      word: String(entry.word || '').trim(),
      lang: entry.lang || SM.lang(),
      meaning: entry.meaning || '',
      register: entry.register || 'neutral',
      source: entry.source || '',
      example: entry.example || '',
      added: Date.now()
    };
    if (!word.word) return null;
    state.vocab.unshift(word);
    save(true);
    return word;
  }

  function updateWord(id, patch) {
    var w = state.vocab.filter(function (x) { return x.id === id; })[0];
    if (!w) return null;
    Object.keys(patch).forEach(function (k) { w[k] = patch[k]; });
    save();
    return w;
  }

  function removeWord(id) {
    state.vocab = state.vocab.filter(function (w) { return w.id !== id; });
    save(true);
  }

  // ---- Essays -------------------------------------------------------------

  function createEssay(opts) {
    var project = {
      id: U.uid('e'),
      type: opts.type || 'contest',
      title: opts.title || '',
      prompt: opts.prompt || '',
      promptId: opts.promptId || null,
      limit: opts.limit || 650,
      lang: opts.lang || SM.lang(),
      stage: 'decode',
      fields: {},
      values: { picked: [], top: [], evidence: {} },
      feelings: { moment: '', feelings: [], needs: [] },
      claims: [],
      truth: {},
      passes: {},
      draftId: null,
      created: Date.now(),
      updated: Date.now()
    };
    var draft = createDraft({ kind: 'essay', ref: project.id, title: project.title, lang: project.lang, genres: [project.type === 'contest' ? 'contest' : project.type] });
    project.draftId = draft.id;
    state.essays[project.id] = project;
    save(true);
    return project;
  }

  function updateEssay(id, patch) {
    var p = state.essays[id];
    if (!p) return null;
    Object.keys(patch).forEach(function (k) { p[k] = patch[k]; });
    p.updated = Date.now();
    save();
    return p;
  }

  function deleteEssay(id) {
    var p = state.essays[id];
    if (!p) return;
    if (p.draftId) delete state.drafts[p.draftId];
    delete state.essays[id];
    save(true);
  }

  // ---- Import / export ----------------------------------------------------

  function exportJson() {
    return JSON.stringify({ app: 'skill-matrix-writing-studio', exported: new Date().toISOString(), state: state }, null, 2);
  }

  function importJson(text) {
    var parsed = JSON.parse(text);
    var data = parsed && parsed.state ? parsed.state : parsed;
    if (!data || typeof data !== 'object' || !data.drafts) throw new Error('bad-file');
    state = migrate(data);
    save(true);
    notify('import');
  }

  function reset() {
    var lang = state.lang;
    state = blank();
    state.lang = lang;
    save(true);
    notify('reset');
  }

  load();

  SM.store = {
    get state() { return state; },
    persistent: function () { return persistent; },
    save: save,
    on: function (fn) { listeners.push(fn); },
    createDraft: createDraft,
    getDraft: getDraft,
    findDraft: findDraft,
    ensureDraft: ensureDraft,
    updateDraft: updateDraft,
    addVersion: addVersion,
    restoreVersion: restoreVersion,
    deleteDraft: deleteDraft,
    listDrafts: listDrafts,
    lesson: lesson,
    setLesson: setLesson,
    addPhrase: addPhrase,
    removePhrase: removePhrase,
    addWord: addWord,
    updateWord: updateWord,
    removeWord: removeWord,
    createEssay: createEssay,
    updateEssay: updateEssay,
    deleteEssay: deleteEssay,
    exportJson: exportJson,
    importJson: importJson,
    reset: reset
  };
})();
