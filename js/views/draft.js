/* Draft page: the editor for any saved text, with versions, peer notes and export. */
(function () {
  'use strict';

  var SM = window.SM;
  var U = SM.util;
  var esc = U.esc;
  var md = U.md;
  var L = function (o) { return SM.L(o); };
  var icon = function (n, c) { return SM.ui.icon(n, c); };

  // Find the exercise a draft belongs to (so reopening a draft shows the same mechanic)
  function exerciseFor(d) {
    var l = SM.ui.lessonById(d.ref);
    if (d.kind === 'lesson' && l) return { ex: l.exercise, hint: l.hint, improve: l.improve, skills: l.skills };
    if (d.kind === 'harder' && l) return { ex: l.harder.type ? l.harder : { type: 'free', prompt: l.harder.prompt }, skills: l.skills, improve: l.improve };
    if (d.kind === 'workshop') {
      var w = SM.content.workshops.filter(function (x) { return x.id === d.ref; })[0];
      if (w) return { ex: d.part === 'warmup' ? w.warmup : w.main, skills: d.skills };
    }
    if (d.kind === 'vocab' && SM.content.vocab) {
      var drill = SM.content.vocab.drills.filter(function (x) { return x.id === d.ref; })[0];
      if (drill) return { ex: drill.exercise, skills: ['words'] };
    }
    if (d.kind === 'daily') {
      var entry = SM.store.state.daily[d.ref];
      var p = entry && SM.content.daily.filter(function (x) { return x.id === entry.promptId; })[0];
      if (p) return { ex: SM.daily.exercise(p), skills: [p.skill] };
    }
    if (d.kind === 'lab') {
      var t = SM.content.lab.filter(function (x) { return x.id === d.ref; })[0];
      if (t) return { ex: { type: 'free', prompt: t.tryPrompt }, skills: d.skills };
    }
    if (d.kind === 'reading') {
      var r = SM.content.readings.filter(function (x) { return x.id === d.ref; })[0];
      if (r) return { ex: { type: 'free', prompt: r.tryIt }, skills: ['observation'] };
    }
    if (d.data && d.data.prompt) return { ex: { type: 'free', prompt: d.data.prompt }, skills: d.skills };
    return { ex: { type: 'free', prompt: { ru: SM.strings.ru['draft.freePrompt'], en: SM.strings.en['draft.freePrompt'] } }, skills: d.skills };
  }

  function sourceLink(d) {
    if ((d.kind === 'lesson' || d.kind === 'harder') && SM.ui.lessonById(d.ref)) return { href: '#/lesson/' + d.ref, label: SM.t('draft.backLesson') };
    if (d.kind === 'workshop') return { href: '#/workshop/' + d.ref, label: SM.t('draft.backWorkshop') };
    if (d.kind === 'essay' && SM.store.state.essays[d.ref]) return { href: '#/essay/' + d.ref, label: SM.t('draft.backEssay') };
    if (d.kind === 'lab') return { href: '#/lab/' + d.ref, label: SM.t('nav.lab') };
    if (d.kind === 'vocab') return { href: '#/vocab/' + d.ref, label: SM.t('nav.vocab') };
    if (d.kind === 'reading') return { href: '#/reading/' + d.ref, label: SM.t('nav.library') };
    return { href: '#/portfolio', label: SM.t('nav.portfolio') };
  }

  function peerHtml(d) {
    var notes = d.peer || [];
    return (notes.length ? '<ul class="peernotes">' + notes.map(function (n, i) {
      return '<li class="peernote"><p class="peernote__meta">' + esc(n.who || SM.t('peer.anon')) + ' · ' + esc(SM.ui.dateLabel(n.t)) +
        ' <button class="iconbtn iconbtn--small" type="button" data-peer-del="' + i + '" aria-label="' + esc(SM.t('common.delete')) + '">' + icon('x') + '</button></p>' +
        (n.worked ? '<p><strong>' + esc(SM.t('peer.worked')) + '</strong> ' + esc(n.worked) + '</p>' : '') +
        (n.lost ? '<p><strong>' + esc(SM.t('peer.lost')) + '</strong> ' + esc(n.lost) + '</p>' : '') +
        (n.question ? '<p><strong>' + esc(SM.t('peer.question')) + '</strong> ' + esc(n.question) + '</p>' : '') + '</li>';
    }).join('') + '</ul>' : '<p class="muted">' + esc(SM.t('peer.none')) + '</p>');
  }

  function exportText(d) {
    return SM.ui.draftTitle(d) + '\n\n' + SM.exercise.collectText({}, d) + '\n';
  }

  SM.views.write = function () {
    var d = SM.store.createDraft({ kind: 'free' });
    return { redirect: '#/draft/' + d.id };
  };

  SM.views.draft = function (params) {
    var d = SM.store.getDraft(params.id);
    if (!d) return SM.views.notFound();
    var info = exerciseFor(d);
    var back = sourceLink(d);
    var controller = null;
    var words = SM.text.wordCount(SM.exercise.collectText({}, d));

    var html = '<div class="page draftpage">' +
      '<a class="backlink" href="' + esc(back.href) + '">' + icon('back') + esc(back.label) + '</a>' +
      '<label class="titlefield"><span class="visually-hidden">' + esc(SM.t('draft.title')) + '</span>' +
      '<input class="titlefield__input" type="text" data-title value="' + esc(d.title || '') + '" placeholder="' + esc(SM.ui.draftTitle(d)) + '"></label>' +
      '<p class="draftpage__meta muted">' + esc(SM.t('draft.meta', { created: SM.ui.dateLabel(d.created), updated: SM.ui.dateLabel(d.updated), n: words })) + '</p>' +
      '<div class="draftpage__flags">' +
      '<label class="toggle"><input type="checkbox" data-done' + (d.status === 'done' ? ' checked' : '') + '><span>' + esc(SM.t('draft.done')) + '</span></label>' +
      '<label class="toggle"><input type="checkbox" data-portfolio' + (d.portfolio ? ' checked' : '') + '><span>' + esc(SM.t('draft.inPortfolio')) + '</span></label>' +
      '<span class="chip chip--private">' + icon('lock') + esc(SM.t('draft.private')) + '</span>' +
      '</div>' +
      '<div data-editor></div>' +
      '<div data-versions></div>' +
      '<details class="panel"><summary>' + icon('chat') + esc(SM.t('peer.title', { n: (d.peer || []).length })) + '</summary>' +
      '<p class="panel__hint">' + esc(SM.t('peer.hint')) + '</p>' +
      '<div data-peer-list>' + peerHtml(d) + '</div>' +
      '<form class="peerform" data-peer-form>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('peer.who')) + '</span><input class="input" name="who" type="text" autocomplete="off"></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('peer.worked')) + '</span><textarea class="input input--area" name="worked" rows="2"></textarea></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('peer.lost')) + '</span><textarea class="input input--area" name="lost" rows="2"></textarea></label>' +
      '<label class="field"><span class="field__label">' + esc(SM.t('peer.question')) + '</span><textarea class="input input--area" name="question" rows="2"></textarea></label>' +
      '<p class="field__hint">' + esc(SM.t('peer.rules')) + '</p>' +
      '<button class="btn btn--small" type="submit">' + esc(SM.t('peer.add')) + '</button></form>' +
      '</details>' +
      '<div class="draftpage__export">' +
      '<button class="btn btn--small btn--ghost" type="button" data-copy>' + icon('copy') + esc(SM.t('draft.copy')) + '</button>' +
      '<button class="btn btn--small btn--ghost" type="button" data-download>' + icon('download') + esc(SM.t('draft.download')) + '</button>' +
      '<button class="btn btn--small btn--ghost" type="button" data-print>' + icon('printer') + esc(SM.t('draft.print')) + '</button>' +
      '<button class="btn btn--small btn--danger" type="button" data-delete>' + icon('trash') + esc(SM.t('common.delete')) + '</button>' +
      '</div>' +
      '<p class="muted small">' + esc(SM.t('draft.shareNote')) + '</p>' +
      '</div>';

    return {
      title: SM.ui.draftTitle(d),
      html: html,
      mount: function (root) {
        var versions = SM.versions.mount(root.querySelector('[data-versions]'), d, function () { SM.app.rerender(); });
        controller = SM.exercise.mount(root.querySelector('[data-editor]'), {
          exercise: info.ex,
          draft: d,
          hint: info.hint,
          improve: info.improve,
          ctx: { skills: info.skills || d.skills, kind: d.kind },
          onUpdate: function () { versions.refresh(); }
        });

        root.querySelector('[data-title]').addEventListener('input', function (e) {
          SM.store.updateDraft(d.id, { title: e.target.value.trim() });
        });

        root.querySelector('[data-done]').addEventListener('change', function (e) {
          SM.store.updateDraft(d.id, { status: e.target.checked ? 'done' : 'draft' });
          if (e.target.checked) SM.store.addVersion(d.id, SM.t('versions.done'));
        });
        root.querySelector('[data-portfolio]').addEventListener('change', function (e) {
          SM.store.updateDraft(d.id, { portfolio: e.target.checked });
          SM.ui.toast(SM.t(e.target.checked ? 'portfolio.added' : 'portfolio.removed'));
        });

        root.querySelector('[data-peer-form]').addEventListener('submit', function (e) {
          e.preventDefault();
          var f = e.target;
          var note = { who: f.who.value.trim(), worked: f.worked.value.trim(), lost: f.lost.value.trim(), question: f.question.value.trim(), t: Date.now() };
          if (!note.worked && !note.lost && !note.question) return;
          d.peer = (d.peer || []).concat([note]);
          SM.store.updateDraft(d.id, { peer: d.peer });
          f.reset();
          root.querySelector('[data-peer-list]').innerHTML = peerHtml(d);
          SM.ui.toast(SM.t('peer.added'));
        });

        root.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          if (b.dataset.peerDel != null) {
            d.peer.splice(+b.dataset.peerDel, 1);
            SM.store.updateDraft(d.id, { peer: d.peer });
            root.querySelector('[data-peer-list]').innerHTML = peerHtml(d);
          }
          if (b.hasAttribute('data-copy')) { U.copyText(exportText(d)); SM.ui.toast(SM.t('common.copied')); }
          if (b.hasAttribute('data-download')) U.download(U.slugify(SM.ui.draftTitle(d)) + '.txt', exportText(d));
          if (b.hasAttribute('data-print')) {
            var w = window.open('', '_blank');
            if (!w) { SM.ui.toast(SM.t('draft.popup')); return; }
            w.document.write('<!doctype html><meta charset="utf-8"><title>' + esc(SM.ui.draftTitle(d)) + '</title>' +
              '<body style="font:16px/1.7 Georgia,serif;max-width:40rem;margin:2rem auto;padding:0 1rem;color:#1D2436">' +
              '<h1 style="font-size:1.6rem">' + esc(SM.ui.draftTitle(d)) + '</h1>' + md(SM.exercise.collectText({}, d)) + '</body>');
            w.document.close();
            w.focus();
            w.print();
          }
          if (b.hasAttribute('data-delete')) {
            SM.ui.confirm(SM.t('draft.deleteConfirm'), SM.t('common.delete'), function () {
              SM.store.deleteDraft(d.id);
              SM.ui.toast(SM.t('draft.deleted'));
              SM.app.go('#/portfolio');
            }, true);
          }
        });
      },
      destroy: function () { if (controller) controller.destroy(); }
    };
  };
})();
