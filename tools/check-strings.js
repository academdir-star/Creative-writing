#!/usr/bin/env node
/* Checks that every interface string used in js/ exists in both RU and EN. */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const sandbox = { window: {}, navigator: { language: 'ru' }, document: { documentElement: {} }, console };
vm.createContext(sandbox);
vm.runInContext('var window = this.window; window.SM = {}; var SM = window.SM; SM.strings = { ru: {}, en: {} };', sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'js/core/strings.js'), 'utf8'), sandbox);
const S = sandbox.window.SM.strings;

function walk(dir) {
  return fs.readdirSync(dir).flatMap(f => {
    const p = path.join(dir, f);
    return fs.statSync(p).isDirectory() ? walk(p) : (p.endsWith('.js') ? [p] : []);
  });
}

const used = new Set();
walk(path.join(root, 'js')).forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  for (const m of code.matchAll(/SM\.t\('([a-zA-Z0-9_.-]+)'\s*[,)]/g)) used.add(m[1]);
  for (const m of code.matchAll(/SM\.strings\.(?:ru|en)\['([a-zA-Z0-9_.-]+)'\]/g)) used.add(m[1]);
});
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const m of html.matchAll(/data-i18n="([a-z0-9_.-]+)"/g)) used.add(m[1]);

// Keys built at runtime from a prefix + a known set of suffixes
const dynamic = {
  'lesson.step.': ['hook', 'technique', 'example', 'exercise', 'improve', 'reflect'],
  'fb.limits.': ['ru', 'en'],
  'sense.': ['sight', 'sound', 'smell', 'touch', 'taste'],
  'meter.pov.': ['first', 'second', 'third'],
  'kind.': ['lesson', 'harder', 'daily', 'weekly', 'workshop', 'lab', 'vocab', 'essay', 'reading', 'free', 'essay-weak'],
  'status.': ['done', 'started'],
  'essay.typeName.': ['contest', 'statement', 'scholarship'],
  'vocab.reg.': ['neutral', 'formal', 'casual', 'bookish', 'special'],
  'vocab.state.': ['new', 'tried', 'active'],
  'settings.theme.': ['auto', 'light', 'dark'],
  'portfolio.tab.': ['drafts', 'portfolio', 'phrases', 'progress'],
  'read.tag.': ['word', 'detail', 'rhythm', 'pov', 'effect'],
  'home.tile.': ['lab', 'workshops', 'library', 'essay', 'vocab', 'genres'],
  'nav.': ['home', 'routes', 'learn', 'lab', 'library', 'essay', 'portfolio', 'daily', 'write', 'workshops', 'vocab', 'genres', 'teacher', 'settings', 'menu'],
  'workshop.': ['warmup', 'main'],
  'extype.': ['free', 'list', 'rewrite', 'constraint', 'columns', 'fields', 'choose', 'reorder', 'annotate', 'compare', 'generator'],
  'fb.strength.': ['sense.sight', 'sense.sound', 'sense.smell', 'sense.touch', 'sense.taste', 'specific', 'rhythm', 'dialogue', 'shown', 'clean', 'started'],
  'fb.next.': ['more', 'awards', 'lesson', 'cliche', 'emotion', 'label', 'filler', 'explain', 'iStart', 'rhythm', 'repeat', 'verbs', 'senses', 'limit', 'readAloud'],
  'fb.sig.': ['emotions', 'labels', 'cliches', 'fillers', 'repeats', 'sensory'],
  'compare.': ['q1', 'q2', 'q3', 'reveal', 'hide'],
  'read.': ['showNotes', 'hideNotes'],
  'ex.': ['check', 'showComment', 'draw', 'drawAgain', 'timerDoneShort', 'timerResume', 'focusOff', 'found', 'missing'],
  'lesson.': ['inPortfolio', 'toPortfolio'],
  'portfolio.': ['added', 'removed'],
  'essay.': ['overLimit', 'inLimit'],
  'home.': ['kicker', 'kickerNew', 'lead', 'leadNew', 'title', 'titleNew'],
  'home.how.': ['write.title', 'write.text', 'observe.title', 'observe.text', 'rewrite.title', 'rewrite.text', 'truth.title', 'truth.text']
};
Object.keys(dynamic).forEach(prefix => dynamic[prefix].forEach(s => used.add(prefix + s)));

const missing = { ru: [], en: [] };
[...used].sort().forEach(k => {
  if (k.endsWith('.')) return;
  ['ru', 'en'].forEach(lang => { if (S[lang][k] == null) missing[lang].push(k); });
});
const unusedEn = Object.keys(S.en).filter(k => S.ru[k] == null);
const unusedRu = Object.keys(S.ru).filter(k => S.en[k] == null);

console.log(`Keys used: ${used.size}. RU: ${Object.keys(S.ru).length}, EN: ${Object.keys(S.en).length}`);
if (unusedEn.length) console.log('Only in EN:', unusedEn.join(', '));
if (unusedRu.length) console.log('Only in RU:', unusedRu.join(', '));
if (missing.ru.length || missing.en.length) {
  if (missing.ru.length) console.log('Missing RU:', missing.ru.join(', '));
  if (missing.en.length) console.log('Missing EN:', missing.en.join(', '));
  process.exit(1);
}
console.log('✓ All strings present in both languages');
