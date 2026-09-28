#!/usr/bin/env node
/* Validates course content against docs/content-spec.md.
   Usage: node tools/validate-content.js [--stats] */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const contentDir = path.join(root, 'content');
const showStats = process.argv.includes('--stats');

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// ---- Load content into a sandbox ---------------------------------------
const sandbox = { window: {}, console };
sandbox.window.SM = undefined;
vm.createContext(sandbox);
vm.runInContext('var window = this.window;', sandbox);

function load(file) {
  const code = fs.readFileSync(file, 'utf8');
  if (/\$\{/.test(code)) warn(path.basename(file), 'contains "${" — template literals would interpolate it');
  try {
    vm.runInContext(code + '\n;var SM = window.SM;', sandbox, { filename: file });
  } catch (e) {
    err(path.basename(file), 'failed to load: ' + e.message);
  }
}

load(path.join(root, 'js', 'content-api.js'));
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.js')).sort();
// routes first so everything else can reference it
files.sort((a, b) => (a === 'routes.js' ? -1 : b === 'routes.js' ? 1 : a.localeCompare(b)));
files.forEach(f => load(path.join(contentDir, f)));

const C = sandbox.window.SM && sandbox.window.SM.content;
if (!C) {
  console.error('Content registry not found');
  process.exit(1);
}

// ---- Helpers ------------------------------------------------------------
const words = s => (s.match(/[\p{L}\p{N}’'-]+/gu) || []).length;
const stats = { ru: 0, en: 0 };

function isL(v) {
  return v && typeof v === 'object' && typeof v.ru === 'string' && typeof v.en === 'string';
}

function checkL(where, v, opts = {}) {
  if (!isL(v)) { err(where, 'expected {ru, en} strings'); return false; }
  ['ru', 'en'].forEach(lang => {
    const s = v[lang].trim();
    if (!s) err(where, `empty ${lang}`);
    stats[lang] += words(s);
    if (opts.max && words(s) > opts.max) warn(where, `${lang} has ${words(s)} words (recommended ≤ ${opts.max})`);
  });
  if (/[а-яё]/i.test(v.en) && !opts.allowCyrillicEn) warn(where, 'en contains Cyrillic');
  return true;
}

function checkLArr(where, arr, min, max, opts) {
  if (!Array.isArray(arr)) { err(where, 'expected array'); return; }
  if (min != null && arr.length < min) err(where, `expected at least ${min} items, got ${arr.length}`);
  if (max != null && arr.length > max) warn(where, `expected at most ${max} items, got ${arr.length}`);
  arr.forEach((v, i) => checkL(`${where}[${i}]`, v, opts));
}

const skillIds = new Set((C.skills || []).map(s => s.id));
const genreIds = new Set((C.genres || []).map(g => g.id));

const EX_TYPES = ['free', 'list', 'rewrite', 'constraint', 'columns', 'fields', 'choose', 'reorder', 'annotate', 'compare', 'generator'];
const RULES = ['ban-emotions', 'ban-adjectives', 'max-adjectives', 'max-words', 'min-words', 'cut', 'no-said', 'must-dialogue', 'sentence-lengths', 'ban-words', 'must-words', 'no-i-start'];
const METERS = ['adjectives', 'emotions', 'rhythm', 'verbs', 'cliches', 'dialogue', 'pov', 'cut', 'sensory', 'repeats', 'none'];

function checkExercise(where, ex) {
  if (!ex || typeof ex !== 'object') { err(where, 'missing exercise'); return; }
  if (!EX_TYPES.includes(ex.type)) { err(where, `unknown type "${ex.type}"`); return; }
  checkL(where + '.prompt', ex.prompt, { max: 90 });
  const c = ex.config || {};
  if (c.then) checkL(where + '.config.then', c.then);
  if (c.placeholder) checkL(where + '.config.placeholder', c.placeholder);
  switch (ex.type) {
    case 'free':
      if (c.minutes != null && typeof c.minutes !== 'number') err(where, 'config.minutes must be a number');
      break;
    case 'list':
      if (typeof c.count !== 'number' || c.count < 2 || c.count > 15) err(where, 'config.count must be 2–15');
      if (c.labels) checkLArr(where + '.config.labels', c.labels, c.count, c.count);
      break;
    case 'rewrite':
      checkL(where + '.config.source', c.source, { max: 160 });
      break;
    case 'constraint':
      if (!Array.isArray(c.rules) || !c.rules.length) { err(where, 'config.rules required'); break; }
      c.rules.forEach((r, i) => {
        const w = `${where}.config.rules[${i}]`;
        if (!RULES.includes(r.kind)) err(w, `unknown rule "${r.kind}"`);
        if (['max-words', 'min-words', 'max-adjectives'].includes(r.kind) && typeof r.n !== 'number') err(w, 'n required');
        if (r.kind === 'cut') { checkL(w + '.source', r.source); if (typeof r.percent !== 'number') err(w, 'percent required'); }
        if (['ban-words', 'must-words'].includes(r.kind)) {
          if (!r.words || !Array.isArray(r.words.ru) || !Array.isArray(r.words.en)) err(w, 'words {ru:[], en:[]} required');
        }
      });
      if (c.source) checkL(where + '.config.source', c.source);
      break;
    case 'columns':
      if (!Array.isArray(c.columns) || c.columns.length < 2 || c.columns.length > 4) { err(where, 'config.columns must have 2–4 items'); break; }
      c.columns.forEach((col, i) => checkL(`${where}.config.columns[${i}].label`, col.label));
      if (c.shared) checkL(where + '.config.shared', c.shared);
      break;
    case 'fields':
      if (!Array.isArray(c.fields) || c.fields.length < 2) { err(where, 'config.fields must have ≥ 2 items'); break; }
      c.fields.forEach((f, i) => {
        if (!f.id) err(`${where}.config.fields[${i}]`, 'id required');
        checkL(`${where}.config.fields[${i}].label`, f.label);
        if (f.hint) checkL(`${where}.config.fields[${i}].hint`, f.hint);
      });
      break;
    case 'choose':
      if (c.text) checkL(where + '.config.text', c.text);
      if (!Array.isArray(c.questions) || !c.questions.length) { err(where, 'config.questions required'); break; }
      c.questions.forEach((q, i) => {
        const w = `${where}.config.questions[${i}]`;
        checkL(w + '.q', q.q);
        checkLArr(w + '.options', q.options, 2, 6);
        if (q.correct !== null && !Array.isArray(q.correct)) err(w, 'correct must be an array of indices or null');
        if (Array.isArray(q.correct)) q.correct.forEach(ix => { if (!q.options || ix >= q.options.length) err(w, 'correct index out of range'); });
        checkL(w + '.explain', q.explain);
      });
      break;
    case 'reorder':
      if (c.blocks) checkLArr(where + '.config.blocks', c.blocks, 3, 10);
      else if (typeof c.own !== 'number') err(where, 'config.blocks or config.own required');
      break;
    case 'annotate':
      checkL(where + '.config.text', c.text, { max: 260 });
      if (!Array.isArray(c.tags) || c.tags.length < 2) err(where, 'config.tags must have ≥ 2 items');
      else c.tags.forEach((t, i) => { if (!t.id) err(`${where}.config.tags[${i}]`, 'id required'); checkL(`${where}.config.tags[${i}].label`, t.label); });
      if (c.questions) checkLArr(where + '.config.questions', c.questions, 1);
      break;
    case 'compare':
      checkL(where + '.config.a', c.a); checkL(where + '.config.b', c.b);
      checkLArr(where + '.config.questions', c.questions, 1);
      break;
    case 'generator':
      if (!Array.isArray(c.decks) || c.decks.length < 2) { err(where, 'config.decks must have ≥ 2 decks'); break; }
      c.decks.forEach((d, i) => { checkL(`${where}.config.decks[${i}].label`, d.label); checkLArr(`${where}.config.decks[${i}].items`, d.items, 4); });
      break;
  }
}

// ---- Routes & lessons ---------------------------------------------------
const lessonIds = Object.keys(C.lessons);
const referenced = new Set();
(C.routes || []).forEach(r => {
  r.lessons.forEach(id => {
    referenced.add(id);
    if (!C.lessons[id]) warn('routes.' + r.id, `lesson "${id}" not written yet`);
  });
});

lessonIds.forEach(id => {
  const l = C.lessons[id];
  const w = 'lesson ' + id;
  if (!referenced.has(id)) warn(w, 'not referenced by any route');
  if (!l.route) err(w, 'route required');
  if (typeof l.minutes !== 'number' || l.minutes < 3 || l.minutes > 15) err(w, 'minutes must be 3–15');
  if (!Array.isArray(l.skills) || !l.skills.length) err(w, 'skills required');
  else l.skills.forEach(s => { if (!skillIds.has(s)) err(w, `unknown skill "${s}"`); });
  if (!Array.isArray(l.genres) || !l.genres.length) err(w, 'genres required');
  else l.genres.forEach(g => { if (!genreIds.has(g)) err(w, `unknown genre "${g}"`); });
  checkL(w + '.title', l.title, { max: 8 });
  checkL(w + '.learn', l.learn, { max: 35 });
  checkL(w + '.hook', l.hook, { max: 70 });
  if (!l.technique) err(w, 'technique required');
  else { checkL(w + '.technique.name', l.technique.name, { max: 10 }); checkL(w + '.technique.text', l.technique.text, { max: 130 }); }
  if (!l.example) err(w, 'example required');
  else {
    checkL(w + '.example.before', l.example.before, { max: 110 });
    checkL(w + '.example.after', l.example.after, { max: 130 });
    checkLArr(w + '.example.changes', l.example.changes, 2, 5);
  }
  checkExercise(w + '.exercise', l.exercise);
  if (!l.harder) err(w, 'harder required');
  else if (l.harder.type) checkExercise(w + '.harder', l.harder);
  else checkL(w + '.harder.prompt', l.harder.prompt);
  checkL(w + '.hint', l.hint, { max: 70 });
  checkL(w + '.improve', l.improve, { max: 60 });
  checkLArr(w + '.selfCheck', l.selfCheck, 3, 5);
  checkL(w + '.discuss', l.discuss, { max: 40 });
  checkL(w + '.reflect', l.reflect, { max: 40 });
  if (l.transfer) checkL(w + '.transfer', l.transfer, { max: 70 });
  if (l.personalAlt) checkL(w + '.personalAlt', l.personalAlt);
  if (l.teacher) { checkL(w + '.teacher.note', l.teacher.note); }
});

// ---- Style lab ----------------------------------------------------------
const labIds = new Set();
(C.lab || []).forEach((t, i) => {
  const w = 'lab ' + (t.id || i);
  if (!t.id) err(w, 'id required');
  if (labIds.has(t.id)) err(w, 'duplicate id'); labIds.add(t.id);
  checkL(w + '.title', t.title, { max: 10 });
  checkL(w + '.short', t.short, { max: 25 });
  checkL(w + '.example', t.example, { max: 110 });
  checkL(w + '.flat', t.flat, { max: 110 });
  checkL(w + '.task', t.task, { max: 50 });
  checkL(w + '.helps', t.helps, { max: 60 });
  checkL(w + '.hurts', t.hurts, { max: 60 });
  if (!t.fail) err(w, 'fail required'); else { checkL(w + '.fail.text', t.fail.text, { max: 80 }); checkL(w + '.fail.why', t.fail.why, { max: 60 }); }
  if (!METERS.includes(t.meter)) err(w, `unknown meter "${t.meter}"`);
  checkL(w + '.tryPrompt', t.tryPrompt, { max: 50 });
});

// ---- Library ------------------------------------------------------------
(C.readings || []).forEach((r, i) => {
  const w = 'reading ' + (r.id || i);
  if (!r.id) err(w, 'id required');
  checkL(w + '.title', r.title);
  checkL(w + '.text', r.text, { max: 280 });
  if (!Array.isArray(r.notes) || r.notes.length < 3) err(w, 'at least 3 notes');
  else r.notes.forEach((n, j) => {
    checkL(`${w}.notes[${j}].quote`, n.quote);
    checkL(`${w}.notes[${j}].comment`, n.comment);
    ['ru', 'en'].forEach(lang => {
      if (isL(n.quote) && isL(r.text) && !r.text[lang].includes(n.quote[lang])) err(`${w}.notes[${j}]`, `${lang} quote not found verbatim in text`);
    });
  });
  checkLArr(w + '.questions', r.questions, 2, 6);
  checkL(w + '.tryIt', r.tryIt);
});

(C.comparisons || []).forEach((c, i) => {
  const w = 'comparison ' + (c.id || i);
  if (!c.id) err(w, 'id required');
  checkL(w + '.title', c.title); checkL(w + '.task', c.task);
  checkL(w + '.a', c.a, { max: 180 }); checkL(w + '.b', c.b, { max: 180 });
  checkL(w + '.changed', c.changed);
  if (c.better) checkL(w + '.better', c.better);
});

// ---- Workshops ----------------------------------------------------------
(C.workshops || []).forEach((ws, i) => {
  const w = 'workshop ' + (ws.id || i);
  if (!ws.id) err(w, 'id required');
  ['title', 'hook', 'angle', 'alt', 'avoid'].forEach(k => checkL(`${w}.${k}`, ws[k]));
  checkLArr(w + '.techniques', ws.techniques, 2, 6);
  checkExercise(w + '.warmup', ws.warmup);
  checkExercise(w + '.main', ws.main);
  if (typeof ws.minutes !== 'number') err(w, 'minutes required');
  if (ws.reading) ws.reading.forEach((b, j) => { if (!b.title || !b.author) err(`${w}.reading[${j}]`, 'title and author required'); });
});

// ---- Daily & weekly -----------------------------------------------------
(C.daily || []).forEach((d, i) => {
  const w = 'daily ' + (d.id || i);
  if (!d.id) err(w, 'id required');
  if (!skillIds.has(d.skill)) err(w, `unknown skill "${d.skill}"`);
  checkL(w + '.prompt', d.prompt, { max: 60 });
  if (d.twist) checkL(w + '.twist', d.twist);
});
(C.weekly || []).forEach((d, i) => {
  const w = 'weekly ' + (d.id || i);
  if (!d.id) err(w, 'id required');
  checkL(w + '.title', d.title); checkL(w + '.brief', d.brief);
  checkLArr(w + '.steps', d.steps, 2, 7);
});

// ---- Vocab, essay, teacher (shape checks) -------------------------------
if (C.vocab) {
  const v = C.vocab;
  checkL('vocab.intro', v.intro); checkL('vocab.method', v.method);
  if (!Array.isArray(v.drills) || v.drills.length < 5) err('vocab.drills', 'at least 5 drills');
  else v.drills.forEach((d, i) => { checkL(`vocab.drills[${i}].title`, d.title); checkL(`vocab.drills[${i}].how`, d.how); checkExercise(`vocab.drills[${i}].exercise`, d.exercise); });
}
if (C.essay) {
  const e = C.essay;
  if (!Array.isArray(e.stages) || e.stages.length < 6) err('essay.stages', 'at least 6 stages');
  else e.stages.forEach((s, i) => { if (!s.id) err(`essay.stages[${i}]`, 'id required'); checkL(`essay.stages[${i}].title`, s.title); checkL(`essay.stages[${i}].why`, s.why); checkLArr(`essay.stages[${i}].steps`, s.steps, 1); });
  if (!Array.isArray(e.prompts) || e.prompts.length < 3) err('essay.prompts', 'at least 3 sample prompts');
  if (!e.weakEssay) err('essay.weakEssay', 'required');
  if (!e.questionBank) err('essay.questionBank', 'required');
}
if (C.teacher) {
  const t = C.teacher;
  if (!Array.isArray(t.sources) || !t.sources.length) err('teacher.sources', 'required');
}

// ---- Report -------------------------------------------------------------
const exerciseCount = lessonIds.length * 2 + (C.workshops || []).length * 2 + (C.lab || []).length + ((C.vocab && C.vocab.drills) || []).length;
if (showStats || true) {
  console.log(`Lessons: ${lessonIds.length} | Lab: ${(C.lab || []).length} | Readings: ${(C.readings || []).length} | Comparisons: ${(C.comparisons || []).length} | Workshops: ${(C.workshops || []).length} | Daily: ${(C.daily || []).length} | Weekly: ${(C.weekly || []).length}`);
  console.log(`Exercises (lesson main+harder, workshop warmup+main, lab, vocab drills): ${exerciseCount}`);
  console.log(`Words — ru: ${stats.ru}, en: ${stats.en}`);
}
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach(w => console.log('  ⚠ ' + w));
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  errors.forEach(e => console.log('  ✖ ' + e));
  process.exit(1);
}
console.log('\n✓ Content is valid');
