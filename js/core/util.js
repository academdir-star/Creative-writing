/* Small shared helpers. */
(function () {
  'use strict';

  var SM = window.SM = window.SM || {};

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Inline markup: **bold**, *italic*, ~~strike~~ (input must already be escaped)
  function inline(s) {
    return s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>');
  }

  // Tiny markup renderer used for all content strings. Escapes HTML first.
  function md(text) {
    if (!text) return '';
    var blocks = String(text).replace(/\r/g, '').split(/\n{2,}/);
    return blocks.map(function (block) {
      var lines = block.split('\n');
      if (lines.every(function (l) { return /^\s*-\s+/.test(l); })) {
        return '<ul>' + lines.map(function (l) {
          return '<li>' + inline(esc(l.replace(/^\s*-\s+/, ''))) + '</li>';
        }).join('') + '</ul>';
      }
      if (lines.every(function (l) { return /^\s*\d+[.)]\s+/.test(l); })) {
        return '<ol>' + lines.map(function (l) {
          return '<li>' + inline(esc(l.replace(/^\s*\d+[.)]\s+/, ''))) + '</li>';
        }).join('') + '</ol>';
      }
      if (lines.every(function (l) { return /^\s*>\s?/.test(l); })) {
        return '<blockquote>' + lines.map(function (l) {
          return inline(esc(l.replace(/^\s*>\s?/, '')));
        }).join('<br>') + '</blockquote>';
      }
      return '<p>' + lines.map(function (l) { return inline(esc(l)); }).join('<br>') + '</p>';
    }).join('');
  }

  // Plain text version of markup (for textareas, exports)
  function plain(text) {
    return String(text || '')
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/~~(.+?)~~/g, '$1')
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1$2')
      .replace(/^\s*>\s?/gm, '');
  }

  function uid(prefix) {
    return (prefix || 'id') + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function dayKey(date) {
    var d = date || new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  // ISO week key, e.g. 2026-W40
  function weekKey(date) {
    var d = new Date(Date.UTC((date || new Date()).getFullYear(), (date || new Date()).getMonth(), (date || new Date()).getDate()));
    var day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return d.getUTCFullYear() + '-W' + pad(week);
  }

  function daysSince(ts) {
    return Math.floor((Date.now() - ts) / 86400000);
  }

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, ms);
    };
  }

  function shuffle(list, seed) {
    var arr = list.slice();
    var s = seed == null ? Math.random() * 1e9 : seed;
    for (var i = arr.length - 1; i > 0; i--) {
      s = (s * 9301 + 49297) % 233280;
      var j = Math.floor((s / 233280) * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  // Word-level diff (LCS), returns [{type: 'same'|'add'|'del', text}]
  function diffWords(a, b) {
    var x = String(a || '').split(/(\s+)/).filter(Boolean);
    var y = String(b || '').split(/(\s+)/).filter(Boolean);
    if (x.length * y.length > 400000) {
      return [{ type: 'del', text: a }, { type: 'add', text: b }];
    }
    var m = x.length, n = y.length;
    var dp = [];
    for (var i = 0; i <= m; i++) { dp.push(new Uint16Array(n + 1)); }
    for (i = m - 1; i >= 0; i--) {
      for (var j = n - 1; j >= 0; j--) {
        dp[i][j] = x[i] === y[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    var out = [];
    function push(type, text) {
      var last = out[out.length - 1];
      if (last && last.type === type) last.text += text; else out.push({ type: type, text: text });
    }
    i = 0; j = 0;
    while (i < m && j < n) {
      if (x[i] === y[j]) { push('same', x[i]); i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) { push('del', x[i]); i++; }
      else { push('add', y[j]); j++; }
    }
    while (i < m) push('del', x[i++]);
    while (j < n) push('add', y[j++]);
    return out;
  }

  function diffHtml(a, b) {
    return diffWords(a, b).map(function (part) {
      var t = esc(part.text).replace(/\n/g, '<br>');
      if (part.type === 'add') return '<ins>' + t + '</ins>';
      if (part.type === 'del') return '<del>' + t + '</del>';
      return t;
    }).join('');
  }

  function download(filename, content, type) {
    var blob = new Blob([content], { type: type || 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 100);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    ta.remove();
    return Promise.resolve();
  }

  function slugify(s) {
    return String(s || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 40) || 'text';
  }

  SM.util = {
    esc: esc,
    md: md,
    plain: plain,
    uid: uid,
    dayKey: dayKey,
    weekKey: weekKey,
    daysSince: daysSince,
    hash: hash,
    debounce: debounce,
    shuffle: shuffle,
    diffWords: diffWords,
    diffHtml: diffHtml,
    download: download,
    copyText: copyText,
    slugify: slugify
  };
})();
