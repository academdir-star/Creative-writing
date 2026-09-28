/* Teacher section: principles, how to run a class, feedback protocol, safety, sources. */
(function () {
  'use strict';

  function c(ru, en) { return { ru: ru, en: en }; }

  SM.setTeacher({
    principles: [
      { title: c(`Сначала текст, потом теория`, `Writing first, theory second`),
        text: c(`Каждый урок начинается с зацепки и почти сразу переходит к письму. Объяснение приёма — не длиннее 120 слов. Если ученик не написал ни строчки за первые 5 минут, урок идёт не так.`,
          `Every lesson opens with a hook and moves almost straight to writing. The technique is explained in 120 words or fewer. If a student hasn’t written a line in the first five minutes, the lesson is off track.`) },
      { title: c(`Один урок — один приём`, `One lesson, one technique`),
        text: c(`Приём назван, показан на коротком примере «до/после» и сразу опробован. Не добавляйте второй приём в тот же урок — его можно дать как «более сложный вариант».`,
          `The technique is named, shown in a short before/after example and tried at once. Don’t add a second technique to the same lesson — offer it as the harder variant instead.`) },
      { title: c(`Наблюдение раньше слов`, `Observation before vocabulary`),
        text: c(`Точная деталь рождается из внимания. Многие задания начинаются с «посмотри, послушай, вспомни конкретный момент». Словарь растёт, когда ученику есть что назвать.`,
          `Precise detail grows out of attention. Many tasks begin with “look, listen, recall one specific moment”. Vocabulary grows when a student has something to name.`) },
      { title: c(`Черновик — материал, а не приговор`, `A draft is material, not a verdict`),
        text: c(`Переписывание встроено в каждый урок: шаг «Улучши» и история версий. Прежняя версия никогда не пропадает — это снимает страх «испортить».`,
          `Rewriting is built into every lesson through the “Improve” step and version history. Earlier versions never disappear, which removes the fear of “ruining it”.`) },
      { title: c(`Читать как писатель`, `Read like a writer`),
        text: c(`Короткие разборы: точное слово, ритм, деталь, точка зрения, эффект. Затем — попробовать приём на своём материале. Мы перенимаем приёмы, а не чужой голос целиком.`,
          `Short close readings: the precise word, rhythm, detail, point of view, effect. Then try the technique on your own material. We borrow techniques, not someone else’s whole voice.`) },
      { title: c(`Стилистических формул нет`, `There are no style formulas`),
        text: c(`У каждого приёма в лаборатории есть «когда помогает», «когда мешает» и неудачная попытка. Решение зависит от задачи текста.`,
          `Every technique in the lab has “when it helps”, “when it hurts” and a failed attempt. The right choice depends on what the text is for.`) },
      { title: c(`Договор о правде зависит от жанра`, `The truth contract depends on the genre`),
        text: c(`В рассказе можно передвигать мебель; в документальном тексте можно только включить свет. Personal statement и scholarship essay: выбирать, сжимать и осмыслять реальное — да; придумывать события, роли, награды и чувства — нет.`,
          `In fiction you may move the furniture; in nonfiction you may only switch on the lights. In a personal statement or scholarship essay, selecting, compressing and interpreting real events is fine; inventing events, roles, awards or feelings is not.`) },
      { title: c(`Личное — по желанию`, `Personal writing is optional`),
        text: c(`У каждого задания о семье или переживаниях есть альтернатива без личного. Не просите показывать черновики целиком и не настаивайте на «глубоких» темах.`,
          `Every task about family or feelings has a non-personal alternative. Don’t ask for whole drafts to be shown, and don’t push for “deep” topics.`) },
      { title: c(`Обратная связь: одна сила, один шаг`, `Feedback: one strength, one step`),
        text: c(`Отметить одно конкретное удачное решение со ссылкой на текст, предложить один следующий шаг, дать переписать фрагмент. Никогда не оценивать ценность опыта: «неинтересно» и «банально» — запрещённые слова.`,
          `Name one specific thing that works, quoting the text; suggest one next step; let the student rewrite a fragment. Never judge the worth of someone’s experience: “boring” and “unoriginal” are banned words.`) },
      { title: c(`Удовольствие — цель, а не бонус`, `Enjoyment is the goal, not a bonus`),
        text: c(`Конкурсы и поступление — один из маршрутов, а не смысл курса. Абсурд, юмор, фантастика и игра со словом тренируют те же навыки, что и эссе.`,
          `Competitions and admissions are one route, not the point of the course. Absurdism, humour, science fiction and word play train the same skills as essays do.`) },
      { title: c(`Навыки переходят между жанрами`, `Skills transfer between genres`),
        text: c(`Деталь, сцена, ритм и точное слово работают везде. Меняются договор о правде и то, насколько явно нужно объяснять смысл. Карта жанров показывает это наглядно.`,
          `Detail, scene, rhythm and precise words work everywhere. What changes is the truth contract and how explicitly meaning needs to be spelled out. The genre map shows this at a glance.`) }
    ],

    howTo: c(
      `**Занятие на 45 минут**

- **5 минут — «5 минут сегодня».** Все пишут одно задание дня, без обсуждения.
- **10 минут — урок.** Зацепка и приём вслух, пример «до/после» разбираем вместе.
- **15 минут — упражнение.** Ученики пишут в редакторе. Подсказка «не знаю, с чего начать» — для тех, кто застрял; «более сложный вариант» — для тех, кто закончил раньше.
- **10 минут — отзыв.** Пары или малые группы по протоколу ниже; затем шаг «Улучши».
- **5 минут — рефлексия.** Самопроверка и вопрос для обсуждения.

**Самостоятельная работа.** Ученик проходит урок сам (5–10 минут), а на занятие приносит одну фразу из коллекции и один вопрос. Вызов недели — общий для группы.

**Маршруты.** Все начинают с «Основы» (3 урока). Дальше каждый выбирает маршрут; переключаться можно в любой момент, прогресс сохраняется по урокам.`,
      `**A 45-minute class**

- **5 minutes — “5 minutes today”.** Everyone writes the daily prompt; no discussion.
- **10 minutes — the lesson.** Read the hook and the technique aloud; unpick the before/after example together.
- **15 minutes — the exercise.** Students write in the editor. The “don’t know where to start” hint is for anyone stuck; the harder variant is for anyone who finishes early.
- **10 minutes — response.** Pairs or small groups using the protocol below, then the “Improve” step.
- **5 minutes — reflection.** Self-check and the discussion question.

**Independent work.** A student does a lesson alone (5–10 minutes) and brings one phrase from their collection and one question to class. The weekly challenge is shared by the whole group.

**Routes.** Everyone starts with Foundations (3 lessons). After that, each student picks a route; they can switch at any time, and progress is kept lesson by lesson.`
    ),

    feedback: c(
      `**Протокол отзыва в группе** (по мотивам Critical Response Process Лиз Лерман; безопасен для 13–15 лет):

1. **Что сработало.** Слушатели называют конкретное место, которое запомнилось, — с цитатой.
2. **Вопрос автора.** Автор сам спрашивает, что ему важно узнать.
3. **Нейтральные вопросы.** «Почему здесь…?», «Что было до…?» — без скрытой оценки.
4. **Мнение — только с разрешения автора.** «Хочешь услышать, что бы я поменял?»

**Правила:** говорим о тексте, а не о человеке; не оцениваем опыт; личные тексты читаем только добровольно; «модель Айовы» (автор молча слушает обсуждение) — только для старших и только для художественных текстов.

**Письменный отзыв преподавателя:** одна сила (с цитатой) → один вопрос → один следующий шаг → предложение переписать конкретный фрагмент. В приложении есть форма взаимного отзыва на странице черновика: «что сработало / где я запутался / вопрос автору».

**Про автоматический анализ.** Он видит только поверхность текста: слова-чувства, прилагательные-ярлыки, клише, повторы, длину предложений. Он не понимает смысл, иронию и художественный замысел, и для русского (без морфологии) ошибается чаще, чем для английского. Используйте его как зеркало, а не как оценку.`,
      `**Group response protocol** (after Liz Lerman’s Critical Response Process; safe for 13–15-year-olds):

1. **What worked.** Listeners name a specific moment that stayed with them — quoting it.
2. **The writer’s question.** The writer asks what they most want to know.
3. **Neutral questions.** “Why here…?”, “What happened before…?” — no hidden verdicts.
4. **Opinions only with permission.** “Do you want to hear what I’d change?”

**Rules:** talk about the text, not the person; never judge the experience; personal pieces are read aloud only voluntarily; the “Iowa model” (the writer listens silently) is for older students and fiction only.

**A teacher’s written response:** one strength (quoted) → one question → one next step → an invitation to rewrite a specific fragment. The draft page in the app has a peer-response form: “what worked / where I got lost / a question for the writer”.

**About the automatic analysis.** It only sees the surface: feeling words, label adjectives, clichés, repetition, sentence length. It doesn’t understand meaning, irony or artistic intent, and it is less accurate for Russian (no morphology) than for English. Use it as a mirror, not a grade.`
    ),

    safety: c(
      `**Ученики — несовершеннолетние.** Поэтому:

- все тексты по умолчанию приватны и хранятся только в браузере ученика; публичных профилей и ленты нет;
- показать работу можно только добровольно — через экспорт текста преподавателю;
- публикация работ на сайте курса — только с согласия ученика и родителей, без фамилий и фотографий;
- обмен комментариями между учениками — только в классе или в модерируемом пространстве школы;
- не просите описывать травматичный опыт и не оценивайте, «достаточно ли драматична» история;
- если текст ученика вызывает тревогу за его безопасность, действуйте по процедуре защиты детей вашей школы, а не комментарием к тексту.

**Данные.** Приложение не отправляет тексты на сервер. Ученик может скачать резервную копию (JSON) и перенести её на другое устройство.`,
      `**Students are minors.** Therefore:

- all writing is private by default and stored only in the student’s browser; there are no public profiles or feeds;
- sharing work is always voluntary — by exporting the text to a teacher;
- publishing work on the course website requires the consent of the student and their parents, with no surnames or photos;
- students comment on each other’s work only in class or in the school’s moderated space;
- don’t ask for traumatic experiences, and never judge whether a story is “dramatic enough”;
- if a student’s writing raises concern for their safety, follow your school’s safeguarding procedure rather than responding in a comment on the text.

**Data.** The app doesn’t send writing to a server. Students can download a backup (JSON) and move it to another device.`
    ),

    dependencies: [
      { feature: c(`Черновики, версии, портфолио, прогресс`, `Drafts, versions, portfolio, progress`),
        now: c(`Браузер (localStorage) + экспорт/импорт файла`, `The browser (localStorage) + file export/import`),
        needs: c(`Аккаунты и серверное хранилище, чтобы работать с разных устройств`, `Accounts and server storage for use across devices`) },
      { feature: c(`Обратная связь по тексту`, `Feedback on writing`),
        now: c(`Локальный анализ поверхности текста: честно ограничен, по-разному точен для RU и EN`, `Local surface analysis: honestly limited, with different accuracy for RU and EN`),
        needs: c(`AI-сервис с педагогическими правилами и выборочной проверкой преподавателем`, `An AI service with teaching rules and spot checks by a teacher`) },
      { feature: c(`Помощник в мастерской эссе`, `Helper in the essay workshop`),
        now: c(`Банк вопросов по этапам + вопросы по сигналам текста + меню редакторских решений`, `A question bank per stage + questions triggered by the text + a menu of editorial moves`),
        needs: c(`AI-сервис с ограничениями из docs/assistant-guardrails.md`, `An AI service limited by docs/assistant-guardrails.md`) },
      { feature: c(`Галерея работ и комментарии`, `Gallery and comments`),
        now: c(`Добровольный экспорт текста преподавателю; взаимный отзыв на одном устройстве`, `Voluntary export to a teacher; peer response on one device`),
        needs: c(`Сервер с модерацией, согласием родителей, без публичных профилей`, `A server with moderation, parental consent and no public profiles`) }
    ],

    sources: [
      { id: 'hse-spb', title: 'Открытые лекции и мастер-классы по creative writing (анонсы)', author: 'Б. Судаков, Н. Фрейман, НИУ ВШЭ — Санкт-Петербург', year: '',
        licence: c(`материалы заказчика; использованы темы и идеи, тексты не копировались`, `client-supplied; topics and ideas used, no text copied`),
        used: c(`Темы мастерских (свадьба, побег, родственник, милый персонаж, абсурд, слипстрим, sci-fi, лицо, эмпатия, усталость, юмор, музыкальные приёмы), репортажный стиль, аналитическое чтение, быстрый старт, словарь за 2–3 месяца.`,
          `Workshop themes (wedding, escape, relatives, cute characters, absurdism, slipstream, SF, faces, empathy, fatigue, humour, music-inspired techniques), reportage style, analytical reading, fast starts, vocabulary in 2–3 months.`) },
      { id: 'sawyer', title: 'College Essay Essentials: A Step-by-Step Guide to Writing a Successful College Admissions Essay', author: 'Ethan Sawyer', year: '2016',
        licence: c(`книга; использованы идеи упражнений`, `book; exercise ideas used`),
        used: c(`Упражнения на ценности, чувства и потребности, «предметы-сущности»; повествовательная и мозаичная структуры; тест «ну и что?».`,
          `Values, feelings-and-needs and essence-object exercises; narrative and montage structures; the “so what?” test.`) },
      { id: 'scholarship30', title: 'How to Write a Winning Scholarship Essay', author: 'Gen & Kelly Tanabe', year: '',
        licence: c(`книга; использованы принципы`, `book; principles used`),
        used: c(`Ответ на конкретный вопрос стипендии, мотивация без шаблонов.`, `Answering the specific scholarship question; motivation without templates.`) },
      { id: 'writeyourwayin', title: 'Write Your Way In: Crafting an Unforgettable College Admissions Essay', author: 'Rachel Toor', year: '2017',
        licence: c(`книга; использованы принципы`, `book; principles used`),
        used: c(`Голос и конкретика в эссе на поступление.`, `Voice and specificity in admissions essays.`) },
      { id: 'etw', title: 'Essays That Worked (ch. 18–21)', author: 'Fair Opportunity Project', year: '2018',
        licence: c(`материалы заказчика; эссе не копировались, описаны только приёмы`, `client-supplied; essays not copied, only techniques described`),
        used: c(`Рамочное повествование, предмет в начале и в конце, рефрен, «сильная сцена — лишняя мораль»; совет писать первые черновики до чтения образцов.`,
          `Frame narratives, an object at the start and end, refrains, “strong scene, unnecessary moral”; the advice to draft before reading examples.`) },
      { id: 'essaypro-leap', title: 'A Leap of Faith: The Split-Second Decision That Changed My Life (sample)', author: 'EssayPro', year: '',
        licence: c(`материалы заказчика; только как антипример, текст не копировался`, `client-supplied; anti-example only, text not copied`),
        used: c(`Модель слабого эссе: общая истина в начале, клише, решение так и не названо, мораль в конце. На сайте — собственные слабые тексты с теми же проблемами.`,
          `Model of a weak essay: a universal truth up front, clichés, the decision never named, a moral at the end. The site uses its own weak texts with the same problems.`) },
      { id: 'essaypro-identity', title: 'My Identity (sample)', author: 'EssayPro', year: '',
        licence: c(`материалы заказчика; только как антипример`, `client-supplied; anti-example only`),
        used: c(`Перечень черт характера без сцен и выборов — антипример для урока «Характер через выборы».`, `A list of traits with no scenes or choices — the anti-example for “Character through choices”.`) },
      { id: 'values', title: 'Values List & Values Worksheet', author: 'startwithvalues.com', year: '',
        licence: c(`материалы заказчика; список ценностей переписан своими словами`, `client-supplied; the values list was rewritten in our own words`),
        used: c(`Механика: выбрать до 3 ценностей в каждой группе, топ-5, «проявляю ли я это?», спросить близкого человека. Дополнено поиском доказательств-моментов для эссе.`,
          `Mechanics: up to 3 values per group, a top 5, “do I actually show this?”, ask someone you trust. Extended with finding evidence moments for essays.`) },
      { id: 'swot', title: '23 Best Personal SWOT Analysis Examples for Students', author: 'Chris Drew, PhD (helpfulprofessor.com)', year: '2022',
        licence: c(`материалы заказчика; использована механика`, `client-supplied; mechanics used`),
        used: c(`SWOT, привязанный к цели, — для эссе на стипендию и целей по письму.`, `A goal-anchored SWOT for scholarship essays and writing goals.`) },
      { id: '826-wyw', title: 'Write Your Way Curriculum, Grades 9–12', author: '826 Digital', year: '', url: 'https://826digital.com/resources/write-your-way-curriculum-grades-9-12/',
        licence: c(`© 826 National; только как источник идей. Сайт был недоступен из среды разработки — сведения по поисковым выдержкам, требуют проверки`, `© 826 National; inspiration only. The site was unreachable from the build environment — details come from search summaries and need checking`),
        used: c(`Письмо, чтобы размышлять, общаться, создавать и влиять; редактура как отдельный навык.`, `Writing to reflect, communicate, create and influence; revision as a skill in its own right.`) },
      { id: 'ou-fiction', title: 'Start Writing Fiction', author: 'The Open University / OpenLearn', year: '', url: 'https://www.open.edu/openlearn/history-the-arts/creative-writing/start-writing-fiction/content-section-0',
        licence: c(`по данным поиска CC BY-NC-SA 4.0; тексты не заимствовались, только механики. Проверить перед коммерческим использованием`, `reported as CC BY-NC-SA 4.0; no text borrowed, only mechanics. Check before commercial use`),
        used: c(`Персонаж и место действия из наблюдения; источники персонажей.`, `Character and setting from observation; where characters come from.`) },
      { id: 'ou-know', title: 'Writing What You Know', author: 'The Open University / OpenLearn', year: '', url: 'https://www.open.edu/openlearn/history-the-arts/creative-writing/writing-what-you-know/content-section-0',
        licence: c(`по данным поиска CC BY-NC-SA 4.0; только механики`, `reported as CC BY-NC-SA 4.0; mechanics only`),
        used: c(`Личные наблюдения и воспоминания как материал; все органы чувств; память и порядок повествования.`, `Personal observation and memory as material; all the senses; memory and narrative order.`) },
      { id: 'owl-cw', title: 'Creative Writing: assignments and workshop formats', author: 'Purdue OWL', year: '', url: 'https://owl.purdue.edu/owl/',
        licence: c(`все права защищены; только как источник идей`, `all rights reserved; inspiration only`),
        used: c(`Низкие ставки «экспериментов»; конкретное вместо абстрактного; форматы обсуждения в группе.`, `Low-stakes “writing experiments”; concrete over abstract; workshop discussion formats.`) },
      { id: 'owl-cnf', title: 'Creative Nonfiction', author: 'Purdue OWL', year: '', url: 'https://owl.purdue.edu/owl/subject_specific_writing/creative_writing/writers/creative-nonfiction-basics/index.html',
        licence: c(`все права защищены; только как источник идей`, `all rights reserved; inspiration only`),
        used: c(`Граница между художественным приёмом и правдой о себе: ремесло определяет «как», а не «что».`, `The line between craft and truth about yourself: craft decides “how”, never “what”.`) },
      { id: 'wx', title: 'Writing Excuses (podcast)', author: 'B. Sanderson, M. R. Kowal, D. Wells, H. Tahir et al.', year: '', url: 'https://writingexcuses.com',
        licence: c(`лицензия не найдена; только формат «послушал — сразу написал»`, `no licence found; only the “listen, then write” format`),
        used: c(`Короткие ремесленные разговоры с заданием в конце; подтекст; ротация заданий.`, `Short craft talks ending in a prompt; subtext; prompt rotation.`) },
      { id: 'yw', title: 'Writing Resources', author: 'Young Writers (UK)', year: '', url: 'https://www.youngwriters.co.uk/writing-tips.php',
        licence: c(`© Young Writers; только как источник идей`, `© Young Writers; inspiration only`),
        used: c(`Мини-формы (мини-сага), анкета персонажа, конкурсы для 11–18 лет.`, `Mini forms (the mini saga), character questionnaires, competitions for ages 11–18.`) },
      { id: 'narrative-plan', title: 'Planning a narrative essay (handout)', author: 'Skill Matrix archive', year: '',
        licence: c(`внутренний материал`, `internal handout`), used: c(`Планирование нарративного эссе.`, `Planning a narrative essay.`) },
      { id: 'active-vocab', title: 'Active vocabulary (handout)', author: 'Skill Matrix archive', year: '',
        licence: c(`внутренний материал`, `internal handout`), used: c(`Активный и пассивный словарь.`, `Active and passive vocabulary.`) },
      { id: 'original', title: 'Собственная разработка курса / Original course design', author: 'Skill Matrix', year: '2026',
        licence: c(`оригинальные материалы`, `original material`), used: c(`Упражнения и примеры, созданные для этого курса.`, `Exercises and examples written for this course.`) }
    ],

    adultNote: c(
      `В списках к мастер-классам ВШЭ есть книги для взрослых (Баллард «Крах», Анджела Картер, Анна Каван, Оливия Лэнг «Крудо», Филип Рот, Мариана Энрикес, Мураками, «Сезон отравленных плодов»). Мы не рекомендуем их ученикам 13–18 лет; если нужен пример приёма, выбирайте короткий подходящий фрагмент сами.`,
      `The HSE masterclass lists include adult books (Ballard’s “Crash”, Angela Carter, Anna Kavan, Olivia Laing’s “Crudo”, Philip Roth, Mariana Enriquez, Murakami, “Season of Poisoned Fruit”). We don’t recommend them to 13–18-year-olds; if you need an example of a technique, choose a short suitable passage yourself.`
    )
  });
})();
