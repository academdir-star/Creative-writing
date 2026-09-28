/* Routes, skills and genres. Lesson ids listed here must exist in content/lessons-*.js */
(function () {
  'use strict';

  SM.setSkills([
    { id: 'ideas', title: { ru: 'Идеи', en: 'Ideas' }, about: { ru: 'Находить материал и не бояться чистого листа', en: 'Finding material and getting past the blank page' } },
    { id: 'observation', title: { ru: 'Наблюдение и деталь', en: 'Observation and detail' }, about: { ru: 'Замечать и передавать конкретное', en: 'Noticing and conveying the specific' } },
    { id: 'words', title: { ru: 'Точное слово', en: 'Precise words' }, about: { ru: 'Выбирать слово по смыслу, оттенку и регистру', en: 'Choosing words by meaning, shade and register' } },
    { id: 'rhythm', title: { ru: 'Ритм и звук', en: 'Rhythm and sound' }, about: { ru: 'Управлять длиной фразы, паузой, темпом', en: 'Controlling sentence length, pause and pace' } },
    { id: 'voice', title: { ru: 'Голос и тон', en: 'Voice and tone' }, about: { ru: 'Звучать по-своему и менять интонацию под задачу', en: 'Sounding like yourself and shifting tone to fit the task' } },
    { id: 'scene', title: { ru: 'Сцена и диалог', en: 'Scene and dialogue' }, about: { ru: 'Показывать событие здесь и сейчас', en: 'Showing an event here and now' } },
    { id: 'character', title: { ru: 'Персонаж', en: 'Character' }, about: { ru: 'Раскрывать человека через поступки, речь и детали', en: 'Revealing a person through actions, speech and details' } },
    { id: 'structure', title: { ru: 'Композиция', en: 'Structure' }, about: { ru: 'Строить начало, поворот, финал, порядок частей', en: 'Building openings, turns, endings and order' } },
    { id: 'facts', title: { ru: 'Факты и наблюдение', en: 'Facts and reporting' }, about: { ru: 'Работать с реальностью, источниками и проверкой', en: 'Working with reality, sources and fact-checking' } },
    { id: 'argument', title: { ru: 'Позиция и аргумент', en: 'Position and argument' }, about: { ru: 'Формулировать мысль и доказывать её', en: 'Stating a claim and supporting it' } },
    { id: 'reflection', title: { ru: 'Рефлексия', en: 'Reflection' }, about: { ru: 'Переходить от события к смыслу', en: 'Moving from event to meaning' } },
    { id: 'editing', title: { ru: 'Редактура', en: 'Editing' }, about: { ru: 'Сокращать, переставлять, уточнять', en: 'Cutting, reordering, sharpening' } }
  ]);

  var genres = [
    { id: 'story', title: { ru: 'Рассказ', en: 'Short story' }, truth: 'fiction' },
    { id: 'scene', title: { ru: 'Сцена', en: 'Scene' }, truth: 'fiction' },
    { id: 'description', title: { ru: 'Описание', en: 'Description' }, truth: 'either' },
    { id: 'reportage', title: { ru: 'Репортаж', en: 'Reportage' }, truth: 'facts' },
    { id: 'review', title: { ru: 'Рецензия', en: 'Review' }, truth: 'facts' },
    { id: 'contest', title: { ru: 'Конкурсное эссе', en: 'Competition essay' }, truth: 'facts' },
    { id: 'scholarship', title: { ru: 'Scholarship essay', en: 'Scholarship essay' }, truth: 'self' },
    { id: 'statement', title: { ru: 'Personal statement', en: 'Personal statement' }, truth: 'self' },
    { id: 'free', title: { ru: 'Эксперимент', en: 'Experiment' }, truth: 'fiction' },
    { id: 'media', title: { ru: 'Медиатекст', en: 'Media text' }, truth: 'facts' }
  ];

  var aspects = [
    { id: 'detail', title: { ru: 'Точная деталь', en: 'Precise detail' } },
    { id: 'scene', title: { ru: 'Сцена', en: 'Scene' } },
    { id: 'voice', title: { ru: 'Голос', en: 'Voice' } },
    { id: 'structure', title: { ru: 'Структура', en: 'Structure' } },
    { id: 'truth', title: { ru: 'Правда и вымысел', en: 'Truth and invention' } },
    { id: 'reflection', title: { ru: 'Рефлексия', en: 'Reflection' } },
    { id: 'limit', title: { ru: 'Лимит слов', en: 'Word limit' } }
  ];

  function c(ru, en) { return { ru: ru, en: en }; }

  var map = {
    aspects: aspects,
    columns: ['story', 'description', 'reportage', 'review', 'contest', 'scholarship', 'statement'],
    cells: {
      detail: {
        story: c('создаёт мир и доверие читателя', 'builds the world and the reader’s trust'),
        description: c('главный инструмент', 'the main tool'),
        reportage: c('доказывает «я там был»', 'proves “I was there”'),
        review: c('подтверждает оценку', 'backs up a judgement'),
        contest: c('делает аргумент живым', 'makes an argument feel real'),
        scholarship: c('показывает реальную ситуацию', 'shows the real situation'),
        statement: c('раскрывает характер', 'reveals character')
      },
      scene: {
        story: c('основа', 'the foundation'),
        description: c('часто без действия', 'often without action'),
        reportage: c('эффект присутствия', 'a sense of presence'),
        review: c('редко и коротко', 'rare and brief'),
        contest: c('как пример или вход в тему', 'as an example or a way in'),
        scholarship: c('один конкретный эпизод', 'one specific episode'),
        statement: c('1–2 ключевых момента', '1–2 key moments')
      },
      voice: {
        story: c('любой, даже чужой', 'any, even someone else’s'),
        description: c('авторский', 'the author’s'),
        reportage: c('сдержанный, наблюдающий', 'restrained, observing'),
        review: c('авторский, с позицией', 'the author’s, with a stance'),
        contest: c('авторский, ясный', 'the author’s, clear'),
        scholarship: c('свой, без пафоса', 'your own, without grandness'),
        statement: c('свой, узнаваемый', 'your own, recognisable')
      },
      structure: {
        story: c('свободная', 'free'),
        description: c('от общего к частному или наоборот', 'general to specific, or the reverse'),
        reportage: c('сцена → контекст → смысл', 'scene → context → meaning'),
        review: c('тезис → доводы → вывод', 'claim → reasons → verdict'),
        contest: c('под критерии задания', 'shaped by the brief’s criteria'),
        scholarship: c('вопрос → ответ → мотивация', 'question → answer → motivation'),
        statement: c('повествование или мозаика', 'narrative or montage')
      },
      truth: {
        story: c('можно выдумывать', 'invention welcome'),
        description: c('можно выдумывать', 'invention allowed'),
        reportage: c('только факты, с проверкой', 'facts only, checked'),
        review: c('факты о произведении + мнение', 'facts about the work + opinion'),
        contest: c('факты + собственная позиция', 'facts + your own position'),
        scholarship: c('только правда о себе', 'only the truth about yourself'),
        statement: c('только правда о себе', 'only the truth about yourself')
      },
      reflection: {
        story: c('через действие героя', 'through the character’s actions'),
        description: c('не обязательна', 'optional'),
        reportage: c('минимальная', 'minimal'),
        review: c('обязательна: почему так', 'required: why it works or not'),
        contest: c('обязательна', 'required'),
        scholarship: c('обязательна: зачем тебе это', 'required: why this matters to you'),
        statement: c('обязательна: как ты изменился', 'required: how you changed')
      },
      limit: {
        story: c('мягкий', 'flexible'),
        description: c('мягкий', 'flexible'),
        reportage: c('редакционный', 'set by the editor'),
        review: c('редакционный', 'set by the editor'),
        contest: c('жёсткий', 'strict'),
        scholarship: c('жёсткий', 'strict'),
        statement: c('жёсткий, часто до 650 слов', 'strict, often up to 650 words')
      }
    },
    notes: [
      c('Переносится почти всё, что связано с вниманием: деталь, сцена, точное слово, ритм. Различается договор с читателем о правде и то, насколько явно нужно объяснять смысл.',
        'Almost everything to do with attention transfers: detail, scene, precise words, rhythm. What differs is the contract with the reader about truth, and how explicitly you need to spell out meaning.'),
      c('Рассказ разрешает выдумку. В репортаже, рецензии и эссе факты должны выдерживать проверку. В personal statement и scholarship essay можно выбирать, сжимать и осмыслять реальные события, но нельзя придумывать события, роли, награды или чувства.',
        'A story allows invention. In reportage, reviews and essays, facts must survive checking. In a personal statement or scholarship essay you may select, compress and interpret real events, but you may not invent events, roles, awards or feelings.')
    ]
  };

  SM.setGenres(genres, map);

  SM.setRoutes([
    {
      id: 'base',
      color: 'ink',
      title: { ru: 'Основа', en: 'Foundations' },
      tagline: { ru: 'Первые двадцать минут: писать сразу, смотреть внимательно, переписывать без страха.', en: 'The first twenty minutes: write straight away, look closely, rewrite without fear.' },
      forWhom: { ru: 'Всем, кто начинает. Три урока, после которых любой маршрут пойдёт легче.', en: 'Everyone starting out. Three lessons that make every other route easier.' },
      outcome: { ru: 'Привычка начинать без разгона, первая точная деталь и первый опыт переписывания.', en: 'The habit of starting without a warm-up, your first precise detail and your first real rewrite.' },
      lessons: ['base-1', 'base-2', 'base-3']
    },
    {
      id: 'free',
      color: 'butter',
      title: { ru: 'Пишу свободно', en: 'Writing freely' },
      tagline: { ru: 'Снять страх чистого листа, находить идеи, писать быстро и получать удовольствие от эксперимента.', en: 'Get past the blank page, find ideas, write fast and enjoy experimenting.' },
      forWhom: { ru: 'Тем, кто зависает перед пустой страницей, и тем, кто хочет просто поиграть со словами.', en: 'For anyone who freezes at an empty page, and anyone who just wants to play with words.' },
      outcome: { ru: 'Тетрадь из 20+ быстрых стартов и одна миниатюра до 300 слов, переписанная дважды.', en: 'A notebook of 20+ quick starts and one short piece (up to 300 words), rewritten twice.' },
      lessons: ['free-1', 'free-2', 'free-3', 'free-4']
    },
    {
      id: 'style',
      color: 'sky',
      title: { ru: 'Язык и стиль', en: 'Language and style' },
      tagline: { ru: 'Точное слово, сильный глагол, ритм фразы, голос и тон.', en: 'The precise word, the strong verb, sentence rhythm, voice and tone.' },
      forWhom: { ru: 'Тем, кто хочет писать точнее и живее и слышать, как звучит собственный текст.', en: 'For anyone who wants to write more precisely and vividly, and hear how their own writing sounds.' },
      outcome: { ru: 'Пять пар «до/после» и страница текста с управляемым ритмом и тоном.', en: 'Five before/after pairs and a page of writing with deliberate rhythm and tone.' },
      lessons: ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6']
    },
    {
      id: 'story',
      color: 'coral',
      title: { ru: 'Истории и персонажи', en: 'Stories and characters' },
      tagline: { ru: 'Сцена, диалог, конфликт, поворот, композиция и финал.', en: 'Scene, dialogue, conflict, turn, structure and ending.' },
      forWhom: { ru: 'Тем, кто любит придумывать и хочет доводить истории до конца.', en: 'For anyone who loves making things up and wants to finish their stories.' },
      outcome: { ru: 'Законченный рассказ на 800–1500 слов в двух редакциях.', en: 'A finished short story of 800–1500 words in two drafts.' },
      lessons: ['story-1', 'story-2', 'story-3', 'story-4', 'story-5']
    },
    {
      id: 'real',
      color: 'sage',
      title: { ru: 'Письмо о реальном мире', en: 'Writing about the real world' },
      tagline: { ru: 'Наблюдение, репортаж, рецензия, аргумент и работа с фактами.', en: 'Observation, reportage, reviews, argument and working with facts.' },
      forWhom: { ru: 'Тем, кому интересны люди, события, город, медиа и спор о фактах.', en: 'For anyone curious about people, events, the city, media and arguments about facts.' },
      outcome: { ru: 'Репортаж на 500–700 слов о реальном месте или событии и аргументированная рецензия.', en: 'A 500–700-word piece of reportage about a real place or event, plus a well-argued review.' },
      lessons: ['real-1', 'real-2', 'real-3', 'real-4', 'real-5']
    },
    {
      id: 'contest',
      color: 'lilac',
      title: { ru: 'Конкурсы эссе', en: 'Essay competitions' },
      tagline: { ru: 'Разбор задания и критериев, позиция, оригинальная идея, структура и редактура под лимит.', en: 'Decoding the brief and criteria, taking a position, finding an original angle, structure and editing to the limit.' },
      forWhom: { ru: 'Тем, кто готовится к конкурсу эссе и хочет понимать, чего от текста ждут.', en: 'For anyone preparing for an essay competition who wants to understand what the judges expect.' },
      outcome: { ru: 'Конкурсное эссе под реальное задание, в пределах лимита, с журналом правок.', en: 'A competition essay that answers a real brief, within the word limit, with a revision log.' },
      lessons: ['contest-1', 'contest-2', 'contest-3', 'contest-4']
    },
    {
      id: 'admit',
      color: 'peach',
      title: { ru: 'Поступление и стипендии', en: 'Admissions and scholarships' },
      tagline: { ru: 'Подлинный опыт, ценности, рефлексия, мотивация и вклад — без выдумок и перечня наград.', en: 'Real experience, values, reflection, motivation and contribution — no inventions, no list of awards.' },
      forWhom: { ru: 'Старшеклассникам, которые пишут personal statement или эссе на стипендию.', en: 'For older students writing a personal statement or a scholarship essay.' },
      outcome: { ru: 'Черновики personal statement и scholarship essay под конкретный вопрос, с проверкой фактов.', en: 'Drafts of a personal statement and a scholarship essay for a specific question, fact-checked.' },
      lessons: ['admit-1', 'admit-2', 'admit-3', 'admit-4', 'admit-5']
    }
  ]);
})();
