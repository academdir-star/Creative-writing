/* Content registry. Content files in /content call these functions.
   Every user-facing string is a localized object: { ru: '...', en: '...' }. */
(function () {
  'use strict';

  var SM = window.SM = window.SM || {};

  SM.content = SM.content || {
    routes: [],
    skills: [],
    genres: [],
    genreMap: null,
    lessons: {},
    lab: [],
    readings: [],
    comparisons: [],
    workshops: [],
    daily: [],
    weekly: [],
    vocab: null,
    essay: null,
    teacher: null
  };

  function pushAll(target, list) {
    list.forEach(function (item) { target.push(item); });
  }

  SM.setRoutes = function (routes) { SM.content.routes = routes; };
  SM.setSkills = function (skills) { SM.content.skills = skills; };
  SM.setGenres = function (genres, map) { SM.content.genres = genres; SM.content.genreMap = map || null; };

  SM.addLessons = function (list) {
    list.forEach(function (lesson) { SM.content.lessons[lesson.id] = lesson; });
  };

  SM.addLab = function (list) { pushAll(SM.content.lab, list); };
  SM.addReadings = function (list) { pushAll(SM.content.readings, list); };
  SM.addComparisons = function (list) { pushAll(SM.content.comparisons, list); };
  SM.addWorkshops = function (list) { pushAll(SM.content.workshops, list); };
  SM.addDaily = function (list) { pushAll(SM.content.daily, list); };
  SM.addWeekly = function (list) { pushAll(SM.content.weekly, list); };

  SM.setVocab = function (vocab) { SM.content.vocab = vocab; };
  SM.setEssay = function (essay) { SM.content.essay = essay; };
  SM.setTeacher = function (teacher) { SM.content.teacher = teacher; };
})();
