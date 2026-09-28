(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* Current year in the footer
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* Header: shadow on scroll + mobile menu
     ------------------------------------------------------------------------ */
  var header = document.querySelector('[data-header]');
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navToggleLabel = document.querySelector('[data-nav-toggle-label]');
  var nav = document.getElementById('site-nav');
  var desktopNav = window.matchMedia('(min-width: 1080px)');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setNavOpen(open) {
    header.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggleLabel.textContent = open ? 'Close menu' : 'Open menu';
  }

  navToggle.addEventListener('click', function () {
    setNavOpen(!header.classList.contains('is-open'));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setNavOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && header.classList.contains('is-open')) {
      setNavOpen(false);
      navToggle.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (header.classList.contains('is-open') && !header.contains(event.target)) setNavOpen(false);
  });

  desktopNav.addEventListener('change', function (event) {
    if (event.matches) setNavOpen(false);
  });

  /* Highlight the nav link for the section in view
     ------------------------------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav__list a[href^="#"]'));

  if (hasIO && navLinks.length) {
    var linkById = {};
    navLinks.forEach(function (link) { linkById[link.getAttribute('href').slice(1)] = link; });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkById[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        } else if (link.getAttribute('aria-current')) {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(linkById).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }

  /* Reveal blocks as they scroll into view
     ------------------------------------------------------------------------ */
  var revealItems = document.querySelectorAll('[data-reveal]');

  if (!hasIO || reduceMotion) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    // Stagger siblings in the same grid so cards don't all appear at once
    revealItems.forEach(function (el) {
      var siblings = Array.prototype.filter.call(el.parentElement.children, function (child) {
        return child.hasAttribute('data-reveal');
      });
      var index = siblings.indexOf(el);
      if (index > 0) el.style.setProperty('--reveal-delay', Math.min(index, 6) * 70 + 'ms');
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }

  /* Sticky "Book a trial class" bar on phones:
     shown after the hero, hidden while the form or footer is on screen
     ------------------------------------------------------------------------ */
  var mobileCta = document.querySelector('[data-mobile-cta]');
  var hero = document.getElementById('top');
  var applySection = document.getElementById('apply');
  var footer = document.querySelector('.site-footer');

  if (mobileCta && hasIO) {
    var ctaLink = mobileCta.querySelector('a');
    var state = { hero: true, apply: false, footer: false };

    var updateCta = function () {
      var visible = !state.hero && !state.apply && !state.footer;
      mobileCta.classList.toggle('is-visible', visible);
      mobileCta.setAttribute('aria-hidden', String(!visible));
      ctaLink.tabIndex = visible ? 0 : -1;
    };

    var ctaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.target === hero) state.hero = entry.isIntersecting;
        if (entry.target === applySection) state.apply = entry.isIntersecting;
        if (entry.target === footer) state.footer = entry.isIntersecting;
      });
      updateCta();
    });

    [hero, applySection, footer].forEach(function (el) { if (el) ctaObserver.observe(el); });
    updateCta();
  }

  /* Request form
     ------------------------------------------------------------------------ */
  var form = document.querySelector('[data-form]');
  if (!form) return;

  var successBox = document.querySelector('[data-form-success]');
  var successTitle = successBox.querySelector('[data-success-title]');
  var successText = successBox.querySelector('[data-success-text]');
  var successDemo = successBox.querySelector('[data-success-demo]');
  var statusEl = form.querySelector('[data-form-status]');
  var submitBtn = form.querySelector('[data-submit]');
  var submitLabel = form.querySelector('[data-submit-label]');
  var defaultSubmitLabel = submitLabel.textContent;
  var ageInput = form.elements.student_age;
  var minAge = Number(ageInput.min) || 1;
  var maxAge = Number(ageInput.max) || 99;
  var triedToSubmit = false;

  // Buttons like "Book a trial class" preselect the matching option in the form
  document.querySelectorAll('[data-interest]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var option = form.querySelector('[data-interest-value="' + trigger.getAttribute('data-interest') + '"]');
      if (option) option.checked = true;
    });
  });

  var validators = {
    parent_name: function () {
      return form.elements.parent_name.value.trim().length >= 2 ? '' : 'Please enter your name.';
    },
    student_age: function () {
      var raw = ageInput.value.trim();
      var age = Number(raw);
      return raw !== '' && Number.isInteger(age) && age >= minAge && age <= maxAge
        ? ''
        : 'Please enter the student’s age as a number from ' + minAge + ' to ' + maxAge + '.';
    },
    phone: function () {
      var digits = form.elements.phone.value.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 15 ? '' : 'Please enter a phone number, e.g. +7 7XX XXX XX XX.';
    },
    contact_method: function () {
      return form.querySelector('input[name="contact_method"]:checked') ? '' : 'Please choose how we should contact you.';
    }
  };

  function setFieldError(name, message) {
    var errorEl = form.querySelector('[data-error-for="' + name + '"]');
    var field = errorEl.closest('.field');
    field.classList.toggle('is-invalid', Boolean(message));
    errorEl.textContent = message;
    field.querySelectorAll('input').forEach(function (input) {
      if (message) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    });
  }

  function validate(name) {
    var message = validators[name]();
    setFieldError(name, message);
    return !message;
  }

  function validateAll() {
    var firstInvalid = null;
    Object.keys(validators).forEach(function (name) {
      if (!validate(name) && !firstInvalid) firstInvalid = name;
    });
    return firstInvalid;
  }

  // After the first submit attempt, re-check fields as the user fixes them
  form.addEventListener('input', function (event) {
    if (triedToSubmit && validators[event.target.name]) validate(event.target.name);
  });

  function setLoading(loading) {
    submitBtn.disabled = loading;
    submitLabel.textContent = loading ? 'Sending…' : defaultSubmitLabel;
  }

  function showSuccess(data, demo) {
    var name = (data.get('parent_name') || '').trim();
    var channels = { 'WhatsApp': 'on WhatsApp', 'Phone call': 'by phone', 'Telegram': 'on Telegram' };
    var channel = channels[data.get('contact_method')] || '';
    var goal = data.get('interest') === 'Trial class' ? 'a trial class' : 'a consultation';

    successTitle.textContent = name ? 'Thank you, ' + name + '!' : 'Thank you!';
    successText.textContent = 'We’ve received your request. We’ll contact you ' +
      (channel ? channel + ' ' : '') + 'to answer your questions and arrange ' + goal + '.';
    successDemo.hidden = !demo;

    form.hidden = true;
    successBox.hidden = false;
    successBox.focus();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    triedToSubmit = true;
    statusEl.textContent = '';

    var firstInvalid = validateAll();
    if (firstInvalid) {
      var target = form.querySelector('[name="' + firstInvalid + '"]');
      if (target) target.focus();
      return;
    }

    var data = new FormData(form);

    // Bots tend to fill every field; quietly pretend everything went fine
    if (data.get('website')) {
      showSuccess(data, false);
      return;
    }
    data.delete('website');

    var endpoint = (form.getAttribute('action') || '').trim();

    if (!endpoint) {
      // Demo mode: no form handler configured yet (see README.md)
      if (window.console) console.info('[Creative Writing] Form handler not configured. Request data:', Object.fromEntries(data));
      setLoading(true);
      window.setTimeout(function () {
        setLoading(false);
        showSuccess(data, true);
      }, 500);
      return;
    }

    setLoading(true);
    fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        showSuccess(data, false);
      })
      .catch(function () {
        statusEl.textContent = 'Something went wrong and your request wasn’t sent. Please try again in a moment.';
      })
      .then(function () {
        setLoading(false);
      });
  });

  successBox.querySelector('[data-form-reset]').addEventListener('click', function () {
    form.reset();
    triedToSubmit = false;
    Object.keys(validators).forEach(function (name) { setFieldError(name, ''); });
    successBox.hidden = true;
    form.hidden = false;
    form.elements.parent_name.focus();
  });
})();
