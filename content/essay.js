/* Essay Workshop — Мастерская эссе / Essay Workshop.
   Data for the step-by-step workshop: essay types, sample prompts, 8 stages,
   a weak essay to diagnose, values, feelings and needs, the helper's question bank,
   editorial moves, a truth check and the helper's rules. */
(function () {
  'use strict';

  SM.setEssay({
    types: {
      contest: {
        title: { ru: `Конкурсное эссе`, en: `Competition essay` },
        about: {
          ru: `Отвечает на тему и вопрос жюри. Нужны своя позиция, доказательства и ясная мысль; личный опыт — один из видов доказательства, а не обязательная исповедь. Лимит жёсткий, критерии обычно опубликованы в положении конкурса — прочитай их до того, как начнёшь писать. Факты должны выдерживать проверку.`,
          en: `Answers the judges’ theme and question. It needs a position of your own, evidence and a clear line of thought; personal experience is one kind of evidence, not a required confession. The limit is strict, and the criteria are usually published in the competition rules — read them before you start. Facts must stand up to checking.`
        }
      },
      statement: {
        title: { ru: `Personal statement`, en: `Personal statement` },
        about: {
          ru: `Показывает комиссии, какой ты человек и как думаешь, — через один-два реальных момента, а не список достижений (он и так есть в анкете). Всё должно быть правдой: события можно выбирать, сжимать и осмыслять, но нельзя придумывать события, роли, награды или чувства. Лимит часто около 650 слов — проверь требования конкретного вуза.`,
          en: `Shows the admissions reader who you are and how you think — through one or two real moments rather than a list of achievements (that’s already in the application). Everything must be true: you may select, compress and interpret events, but never invent events, roles, awards or feelings. The limit is often around 650 words — check each university’s requirements.`
        }
      },
      scholarship: {
        title: { ru: `Эссе на стипендию`, en: `Scholarship essay` },
        about: {
          ru: `Отвечает на конкретный вопрос фонда: какая у тебя цель, что ты уже сделал, что изменит поддержка — для тебя и для других. Ближе к аргументу, чем personal statement, но держится на правде о себе и одном конкретном примере. Решение фонд принимает по своим критериям; задача эссе — ясный и честный ответ.`,
          en: `Answers the funder’s specific question: what your goal is, what you’ve already done, and what the support would change — for you and for others. It’s closer to an argument than a personal statement, but it rests on the truth about yourself and one concrete example. The funder decides by its own criteria; the essay’s job is a clear, honest answer.`
        }
      }
    },

    prompts: [
      {
        id: 'contest-rules',
        type: 'contest',
        text: {
          ru: `Правила существуют, чтобы их соблюдать — или нет? Порассуждай, опираясь на собственный опыт или наблюдения.`,
          en: `Rules are there to be followed — or are they? Discuss, drawing on your own experience or observation.`
        },
        limit: 800,
        note: {
          ru: `«Порассуждай» значит взвесить обе стороны и прийти к своему выводу. Скрытый вопрос — видишь ли ты, когда нарушение правила становится ответственностью, а когда — удобной отговоркой. Нужен твой случай или наблюдение, а не история законов.`,
          en: `“Discuss” means weighing both sides and reaching your own conclusion. The hidden question is whether you can tell when breaking a rule becomes responsible and when it’s just a convenient excuse. You need your own case or observation, not a history of law.`
        }
      },
      {
        id: 'contest-answers',
        type: 'contest',
        text: {
          ru: `Что мы теряем, когда любой ответ можно найти за десять секунд?`,
          en: `What do we lose when any answer can be found in ten seconds?`
        },
        limit: 700,
        note: {
          ru: `Первые три ответа — память, внимание, живое общение — напишут почти все. Вопрос проверяет, найдёшь ли ты свой угол и подкрепишь ли его наблюдениями. Можно спорить с самой постановкой вопроса, если делать это аргументированно.`,
          en: `The first three answers — memory, attention, face-to-face conversation — will appear in almost every entry. The question tests whether you can find your own angle and back it with observation. You may challenge the premise itself, as long as you argue the case.`
        }
      },
      {
        id: 'contest-city',
        type: 'contest',
        text: {
          ru: `Что в твоём городе стоит сохранить для тех, кто будет жить в нём через пятьдесят лет?`,
          en: `What in your town or city is worth preserving for the people who will live there fifty years from now?`
        },
        limit: 600,
        note: {
          ru: `Спрашивают не «что красивого в городе», а что ценно и почему это может исчезнуть. Нужен один конкретный объект — место, звук, ремесло, привычка — и аргумент, зачем его сохранять. Факты о нём должны быть проверяемы.`,
          en: `It isn’t asking “what’s pretty in your city” but what is valuable and why it might disappear. You need one specific thing — a place, a sound, a craft, a habit — and an argument for keeping it. Facts about it must be checkable.`
        }
      },
      {
        id: 'statement-setback',
        type: 'statement',
        text: {
          ru: `Расскажи о трудности или неудаче, с которой ты столкнулся. Что ты сделал и что понял благодаря этому?`,
          en: `Tell us about a difficulty or setback you have faced. What did you do, and what did you come to understand because of it?`
        },
        limit: 650,
        note: {
          ru: `Главное — не размер трудности, а твои действия и то, как ты думаешь о ней теперь. Небольшая неудача вполне подходит. Раскрывать то, чем ты не готов делиться, не нужно.`,
          en: `What matters isn’t the size of the difficulty but what you did and how you think about it now. A small setback works perfectly well. You don’t need to reveal anything you’re not ready to share.`
        }
      },
      {
        id: 'statement-belief',
        type: 'statement',
        text: {
          ru: `Вспомни случай, когда ты усомнился в собственном убеждении или в том, что «все так думают». Что заставило тебя передумать — или укрепиться в своём мнении?`,
          en: `Think of a time you questioned one of your own beliefs, or something “everybody knows”. What made you change your mind — or hold your ground?`
        },
        limit: 650,
        note: {
          ru: `Проверяет, умеешь ли ты менять мнение из-за доводов, а не из-за давления. Важен ход мысли: что ты думал до, что увидел или услышал, что думаешь теперь.`,
          en: `It tests whether you change your mind because of reasons rather than pressure. What counts is the line of thought: what you thought before, what you saw or heard, what you think now.`
        }
      },
      {
        id: 'statement-gratitude',
        type: 'statement',
        text: {
          ru: `Расскажи о чьём-то поступке, за который ты благодарен, — большом или совсем незаметном. Как он повлиял на тебя?`,
          en: `Tell us about something someone did that you are grateful for — large or barely noticeable. How did it affect you?`
        },
        limit: 650,
        note: {
          ru: `Эссе всё равно о тебе: что ты заметил, что сделал после и что изменилось. Другой человек — повод, а не главный герой. Подумай, согласился бы он, чтобы о нём так написали.`,
          en: `The essay is still about you: what you noticed, what you did afterwards, what changed. The other person is the occasion, not the main character. Consider whether they would be happy to be written about this way.`
        }
      },
      {
        id: 'statement-absorbed',
        type: 'statement',
        text: {
          ru: `Какая тема, вопрос или занятие захватывает тебя так, что ты забываешь о времени? Почему именно оно?`,
          en: `What topic, question or activity absorbs you so completely that you lose track of time? Why that one?`
        },
        limit: 650,
        note: {
          ru: `Это не просьба перечислить хобби. Покажи, как ты думаешь, когда тебе по-настоящему интересно: один конкретный вечер за этим занятием сильнее списка достижений в нём.`,
          en: `This isn’t a request to list your hobbies. Show how you think when you’re truly interested: one specific evening spent on it is stronger than a list of achievements in it.`
        }
      },
      {
        id: 'scholarship-community',
        type: 'scholarship',
        text: {
          ru: `Фонд поддерживает школьников и студентов, которые хотят применять знания там, где живут. Какую задачу своего города, района или школы ты хочешь решать — и что ты уже для этого сделал? Как стипендия поможет тебе продвинуться?`,
          en: `The Foundation supports students who want to use what they learn where they live. What problem in your town, neighbourhood or school do you want to work on — and what have you already done about it? How would this scholarship help you take the next step?`
        },
        limit: 500,
        note: {
          ru: `Три части: задача, уже сделанное, роль поддержки. Фонд хочет видеть, что цель настоящая и что деньги что-то изменят. Один конкретный пример сильнее списка всех мероприятий, в которых ты участвовал.`,
          en: `Three parts: the problem, what you’ve done, the role of the support. The funder wants to see that the goal is real and that the money would change something. One concrete example beats a list of every event you’ve taken part in.`
        }
      },
      {
        id: 'scholarship-obstacle',
        type: 'scholarship',
        text: {
          ru: `Опиши свою образовательную цель на ближайшие пять лет и одно препятствие на пути к ней. Как ты с ним справляешься?`,
          en: `Describe your educational goal for the next five years and one obstacle in the way. How are you dealing with it?`
        },
        limit: 400,
        note: {
          ru: `Не жалоба и не хвастовство, а план. Препятствие называй честно и ровно настолько, насколько готов, — важнее то, что ты с ним делаешь.`,
          en: `Not a complaint and not a boast — a plan. Name the obstacle honestly and only as far as you’re comfortable; what you’re doing about it matters more.`
        }
      },
      {
        id: 'scholarship-teach',
        type: 'scholarship',
        text: {
          ru: `Расскажи о случае, когда ты научил чему-то другого человека. Чему при этом научился ты сам?`,
          en: `Tell us about a time you taught someone else something. What did you learn yourself in the process?`
        },
        limit: 300,
        note: {
          ru: `Короткий лимит: одна сцена и одна мысль. Вопрос проверяет, умеешь ли ты делиться знанием и замечать, как учится другой человек.`,
          en: `A short limit: one scene and one thought. The question tests whether you can share what you know and notice how someone else learns.`
        }
      }
    ],

    stages: [
      {
        id: 'decode',
        title: { ru: `Разбери вопрос`, en: `Decode the question` },
        why: {
          ru: `Самые частые провалы — не в стиле, а в ответе не на тот вопрос. Пятнадцать минут над заданием экономят вечер над черновиком.`,
          en: `The most common failures aren’t about style but about answering the wrong question. Fifteen minutes on the brief saves an evening on the draft.`
        },
        steps: [
          { ru: `Выпиши ключевые глаголы и указания: «опиши», «порассуждай», «опираясь на свой опыт», «объясни, почему».`, en: `List the key verbs and instructions: “describe”, “discuss”, “drawing on your experience”, “explain why”.` },
          { ru: `Перепиши вопрос одной строкой своими словами. Посчитай, из скольких он частей: ответ нужен на каждую.`, en: `Rewrite the question in one line in your own words. Count its parts: each one needs an answer.` },
          { ru: `Сформулируй скрытый вопрос: что читатель хочет понять о тебе или о твоём мышлении? Отметь, на чём основана догадка.`, en: `State the hidden question: what does the reader want to understand about you or how you think? Note what that guess is based on.` },
          { ru: `Выпиши условия (лимит, формат, срок) и то, чего здесь не просят.`, en: `Note the conditions (limit, format, deadline) and what isn’t being asked.` }
        ],
        fields: [
          { id: 'question', label: { ru: `Вопрос своими словами`, en: `The question in my words` }, hint: { ru: `«Меня спрашивают, …» — и сколько в вопросе частей.`, en: `“I’m being asked…” — and how many parts the question has.` } },
          { id: 'hidden', label: { ru: `Скрытый вопрос`, en: `The hidden question` }, hint: { ru: `Что читатель на самом деле хочет понять? Это гипотеза — сверь её с условиями.`, en: `What does the reader really want to understand? It’s a hypothesis — check it against the conditions.` } },
          { id: 'conditions', label: { ru: `Условия и критерии`, en: `Conditions and criteria` }, hint: { ru: `Лимит слов, формат, срок, опубликованные критерии оценки.`, en: `Word limit, format, deadline, any published judging criteria.` } },
          { id: 'notAsked', label: { ru: `Чего не просят`, en: `What isn’t being asked` }, hint: { ru: `Например: биография с рождения, список наград, общий обзор темы.`, en: `For example: your life story from birth, a list of awards, a general survey of the topic.` } }
        ]
      },
      {
        id: 'material',
        title: { ru: `Собери материал`, en: `Gather material` },
        why: {
          ru: `Эссе о себе нельзя придумать — его можно только найти. Чем больше сырого материала, тем легче выбрать то, что правда твоё. Маленькие воспоминания здесь так же ценны, как большие.`,
          en: `An essay about yourself can’t be invented — only found. The more raw material you have, the easier it is to choose what’s truly yours. Small memories are as valuable here as big ones.`
        },
        steps: [
          { ru: `Составь список «Что я хочу, чтобы обо мне знали» — 10 пунктов, без редактуры. К каждому спроси: откуда это видно?`, en: `Make a list, “Everything I want them to know about me” — 10 points, no editing. For each, ask: where does this show?` },
          { ru: `Выбери три ценности и для каждой вспомни момент, когда ты по ней поступил — или не поступил.`, en: `Choose three values and, for each, recall a moment when you acted on it — or didn’t.` },
          { ru: `Возьми один непростой момент: назови три точных чувства и потребности под ними. Момент может быть маленьким.`, en: `Take one difficult moment: name three precise feelings and the needs beneath them. The moment can be small.` },
          { ru: `Перечисли пять предметов-сутей — вещей, которые у тебя есть и что-то о тебе говорят, — и что именно каждый рассказывает.`, en: `List five essence objects — things you own that say something about you — and what exactly each one tells.` },
          { ru: `Запиши воспоминания, которые приходят сами, по строчке. «Несерьёзные» тоже.`, en: `Jot down memories that come on their own, one line each. The “trivial” ones too.` }
        ],
        fields: [
          { id: 'knowList', label: { ru: `Что я хочу, чтобы обо мне знали`, en: `Everything I want them to know about me` }, hint: { ru: `10 пунктов: интересы, привычки, убеждения, факты. Потом к каждому — «откуда это видно?».`, en: `10 points: interests, habits, beliefs, facts. Then for each — “where does this show?”.` } },
          { id: 'values', label: { ru: `Ценности и моменты`, en: `Values and moments` }, hint: { ru: `Ценность → конкретный момент: где, когда, что я сделал.`, en: `Value → a specific moment: where, when, what I did.` } },
          { id: 'feelings', label: { ru: `Чувства и потребности`, en: `Feelings and needs` }, hint: { ru: `Момент → три точных чувства → потребности → что я сделал.`, en: `Moment → three precise feelings → needs → what I did.` } },
          { id: 'objects', label: { ru: `Предметы-сути`, en: `Essence objects` }, hint: { ru: `Вещь, которая у меня действительно есть → что она обо мне говорит.`, en: `Something I really own → what it says about me.` } },
          { id: 'memories', label: { ru: `Воспоминания-кандидаты`, en: `Candidate memories` }, hint: { ru: `Коротко, по строчке. Маленькие события подходят.`, en: `Short, one line each. Small events count.` } }
        ]
      },
      {
        id: 'idea',
        title: { ru: `Выбери идею`, en: `Choose the idea` },
        why: {
          ru: `Из одного материала можно сделать много эссе. Лучшее — не самое драматичное, а то, где твоя мысль и твой поступок видны яснее всего и которое отвечает на вопрос.`,
          en: `The same material can make many essays. The best one isn’t the most dramatic, but the one where your thinking and your actions show most clearly — and that answers the question.`
        },
        steps: [
          { ru: `Выбери 2–3 кандидата из материала и сформулируй каждого одной фразой: «Эссе о том, как я… и что это говорит о…».`, en: `Pick 2–3 candidates from your material and sum up each in one sentence: “An essay about how I… and what that says about…”.` },
          { ru: `Проверь каждого: отвечает на вопрос? Есть конкретный момент? Есть мысль, до которой я дошёл сам? Готов ли я этим делиться?`, en: `Test each one: does it answer the question? Is there a specific moment? Is there a thought I reached myself? Am I willing to share it?` },
          { ru: `Задай каждому «ну и что?». Кандидат, у которого есть честный ответ, — сильнее.`, en: `Ask each one “so what?”. The candidate with an honest answer is the stronger one.` },
          { ru: `Выбери одного. Остальных не выбрасывай: они пригодятся для других эссе.`, en: `Choose one. Don’t throw the others away: they’ll be useful for other essays.` }
        ],
        fields: [
          { id: 'candA', label: { ru: `Кандидат А`, en: `Candidate A` }, hint: { ru: `Одна фраза: о чём эссе и что оно говорит обо мне.`, en: `One sentence: what the essay is about and what it says about me.` } },
          { id: 'candB', label: { ru: `Кандидат Б`, en: `Candidate B` }, hint: { ru: `Лучше из другой части жизни, чем кандидат А.`, en: `Ideally from a different part of life than candidate A.` } },
          { id: 'candC', label: { ru: `Кандидат В (по желанию)`, en: `Candidate C (optional)` }, hint: { ru: `Можно самый маленький и неожиданный.`, en: `It can be the smallest, least expected one.` } },
          { id: 'choice', label: { ru: `Мой выбор и почему`, en: `My choice, and why` }, hint: { ru: `Какой кандидат лучше отвечает на вопрос и где больше моей собственной мысли?`, en: `Which candidate answers the question best, and which has more of my own thinking?` } }
        ]
      },
      {
        id: 'structure',
        title: { ru: `Построй структуру`, en: `Build the structure` },
        why: {
          ru: `Структура решает, что читатель увидит первым и с чем уйдёт. Два надёжных варианта: повествование — одна история с изменением, и мозаика — несколько моментов, связанных общей нитью.`,
          en: `Structure decides what the reader sees first and what they leave with. Two reliable options: narrative — one story with a change — and montage — several moments linked by a common thread.`
        },
        steps: [
          { ru: `Реши: повествование или мозаика? Есть одна история с трудностью и изменением — повествование. Несколько разных моментов объединены ценностью, предметом или вопросом — мозаика.`, en: `Decide: narrative or montage? One story with a difficulty and a change — narrative. Several different moments united by a value, an object or a question — montage.` },
          { ru: `Для повествования: трудность → что я сделал → что понял и как изменился.`, en: `For narrative: the difficulty → what I did → what I understood and how I changed.` },
          { ru: `Для мозаики: назови нить (ценность, предмет, вопрос) и 3–5 моментов, которые на неё нанизаны. Нить должна появляться в каждом.`, en: `For montage: name the thread (a value, an object, a question) and the 3–5 moments strung on it. The thread should appear in each one.` },
          { ru: `Выбери первую сцену — момент, где уже что-то происходит, — и финальный образ.`, en: `Choose the opening scene — a moment where something is already happening — and the final image.` }
        ],
        fields: [
          { id: 'form', label: { ru: `Повествование или мозаика — и почему`, en: `Narrative or montage — and why` }, hint: { ru: `Одна история с изменением или несколько моментов с общей нитью?`, en: `One story with a change, or several moments with a common thread?` } },
          { id: 'opening', label: { ru: `Первая сцена`, en: `Opening scene` }, hint: { ru: `Где, когда, что происходит в первой фразе.`, en: `Where, when, what’s happening in the first sentence.` } },
          { id: 'middle', label: { ru: `Основные части по порядку`, en: `Main parts in order` }, hint: { ru: `Повествование: трудность → действия → понимание. Мозаика: нить и 3–5 моментов.`, en: `Narrative: difficulty → actions → understanding. Montage: the thread and 3–5 moments.` } },
          { id: 'ending', label: { ru: `Финал`, en: `Ending` }, hint: { ru: `Образ, поступок или мысль, которые могли появиться только из этой истории, — не общая мораль.`, en: `An image, action or thought that could only come from this story — not a general moral.` } }
        ]
      },
      {
        id: 'draft',
        title: { ru: `Напиши черновик`, en: `Write the first draft` },
        why: {
          ru: `Первый черновик нужен, чтобы появился материал для правки, а не чтобы быть хорошим. Пиши быстро, внутренний редактор подождёт.`,
          en: `A first draft exists to give you something to revise, not to be good. Write fast — your inner editor can wait.`
        },
        steps: [
          { ru: `Поставь таймер на 25–30 минут и пиши по плану, не останавливаясь и не исправляя.`, en: `Set a timer for 25–30 minutes and write to your plan without stopping or correcting.` },
          { ru: `Не считай слова: превысить лимит в черновике нормально, сократишь потом.`, en: `Don’t count words: going over the limit in a draft is normal — you’ll cut later.` },
          { ru: `Застрял на переходе — напиши [ТУТ ПЕРЕХОД] и иди дальше.`, en: `Stuck on a transition? Write [TRANSITION HERE] and keep going.` },
          { ru: `Сохрани версию. Если есть время, не перечитывай до завтра.`, en: `Save a version. If you have time, don’t reread it until tomorrow.` }
        ],
        fields: []
      },
      {
        id: 'feedback',
        title: { ru: `Получи отзыв`, en: `Get feedback` },
        why: {
          ru: `Автор не может прочитать свой текст глазами незнакомца. Нужен читатель, который скажет, где было интересно и где он потерялся, — а не просто «нормально» или «исправь запятые».`,
          en: `A writer can’t read their own text through a stranger’s eyes. You need a reader who’ll tell you where they were gripped and where they got lost — not just “it’s fine” or “fix the commas”.`
        },
        steps: [
          { ru: `Выбери одного-двух читателей, которым доверяешь. Эссе о себе показывай только тем, кому готов.`, en: `Choose one or two readers you trust. Show an essay about yourself only to people you’re comfortable with.` },
          { ru: `Попроси ответить на три вопроса: что сработало (конкретная фраза), где ты потерялся или заскучал, какой один вопрос у тебя остался ко мне?`, en: `Ask them three questions: what worked (a specific line), where did you get lost or bored, and what one question do you still have for me?` },
          { ru: `Преподавателю напиши, какой отзыв тебе нужен сейчас: «про структуру», «понятен ли финал» — а не «проверьте всё».`, en: `Tell your teacher what kind of feedback you need right now — “on structure”, “is the ending clear?” — rather than “check everything”.` },
          { ru: `Не спорь и не объясняй — записывай. Что менять, решишь сам.`, en: `Don’t argue or explain — just take notes. You’ll decide what to change.` },
          { ru: `Отзыв о тексте — не отзыв о твоей жизни. Если кто-то оценивает твой опыт, а не текст, это можно не принимать.`, en: `Feedback on the text isn’t feedback on your life. If someone judges your experience rather than your writing, you can set that aside.` }
        ],
        fields: [
          { id: 'worked', label: { ru: `Что сработало`, en: `What worked` }, hint: { ru: `Запиши, какую фразу или момент отметил читатель.`, en: `Note which line or moment the reader picked out.` } },
          { id: 'lost', label: { ru: `Где читатель потерялся`, en: `Where the reader got lost` }, hint: { ru: `Место в тексте и что было непонятно.`, en: `The place in the text and what was unclear.` } },
          { id: 'readerQuestion', label: { ru: `Вопрос читателя`, en: `The reader’s question` }, hint: { ru: `Один вопрос, который у него остался. Часто ответ на него — то, чего эссе не хватает.`, en: `The one question they still have. Its answer is often what the essay is missing.` } }
        ]
      },
      {
        id: 'revise',
        title: { ru: `Перепиши в несколько проходов`, en: `Revise in several passes` },
        why: {
          ru: `Всё сразу исправить нельзя. Каждый проход решает одну задачу — от крупного к мелкому, чтобы не полировать то, что потом придётся вырезать.`,
          en: `You can’t fix everything at once. Each pass does one job, from large to small, so you don’t polish something you’ll later cut.`
        },
        steps: [
          { ru: `Проход 1 — смысл: эссе отвечает на вопрос? Можно пересказать его мысль одной фразой?`, en: `Pass 1 — meaning: does the essay answer the question? Can you sum up its idea in one sentence?` },
          { ru: `Проход 2 — структура: нужен ли каждый абзац? Не начать ли позже? Не переставить ли части?`, en: `Pass 2 — structure: is every paragraph needed? Should it start later? Should parts swap places?` },
          { ru: `Проход 3 — абзацы: в каждом есть конкретный момент или факт, а не только утверждения?`, en: `Pass 3 — paragraphs: does each one hold a specific moment or fact, not just claims?` },
          { ru: `Проход 4 — предложения: клише, повторы, общие слова, чувства, названные вместо показанных.`, en: `Pass 4 — sentences: clichés, repetition, vague words, feelings named instead of shown.` },
          { ru: `Проход 5 — до лимита: разгон, усилители, повторы, двойные объяснения.`, en: `Pass 5 — to the limit: throat-clearing, intensifiers, repetition, double explanations.` }
        ],
        fields: [
          { id: 'log', label: { ru: `Журнал правок`, en: `Revision log` }, hint: { ru: `Проход → что изменил → почему. Эти записи покажут, как вырос текст.`, en: `Pass → what I changed → why. These notes show how the text grew.` } },
          { id: 'hardest', label: { ru: `Самое трудное решение`, en: `The hardest decision` }, hint: { ru: `Что было жалко вырезать или менять — и почему ты решился?`, en: `What did you hate to cut or change — and why did you go ahead?` } }
        ]
      },
      {
        id: 'check',
        title: { ru: `Проверь факты и лимит`, en: `Check facts and the limit` },
        why: {
          ru: `Эссе о себе — это обещание, что всё было на самом деле. Одна придуманная деталь может подорвать доверие ко всему тексту. А лимит слов обычно не обсуждается.`,
          en: `An essay about yourself is a promise that it all really happened. One invented detail can undermine trust in the whole text. And the word limit is usually non-negotiable.`
        },
        steps: [
          { ru: `Пройди чек-лист правдивости: каждое событие, роль, число и цитату.`, en: `Go through the truth checklist: every event, role, number and quotation.` },
          { ru: `Проверь имена, даты и названия — по документам, сообщениям, фото или у участников.`, en: `Check names, dates and titles — against documents, messages, photos or the people involved.` },
          { ru: `Убедись, что другие люди в эссе не узнают о себе того, чем не хотели бы делиться.`, en: `Make sure other people in the essay won’t find things about themselves they wouldn’t want shared.` },
          { ru: `Сверь объём с лимитом и прочитай эссе вслух целиком.`, en: `Check the length against the limit and read the whole essay aloud.` },
          { ru: `Ещё раз перечитай вопрос задания: эссе отвечает именно на него?`, en: `Reread the question one last time: does the essay answer exactly that?` }
        ],
        fields: [
          { id: 'facts', label: { ru: `Что я проверил и как`, en: `What I checked and how` }, hint: { ru: `Факт → как проверил: «сорок минут — по времени в шахматном приложении».`, en: `Fact → how I checked it: “forty minutes — from the time in the chess app”.` } },
          { id: 'people', label: { ru: `Люди в тексте`, en: `People in the text` }, hint: { ru: `Кто упомянут? Согласился бы он, чтобы о нём так писали, — или можно обойтись без имени?`, en: `Who is mentioned? Would they be happy to be written about like this — or could you leave the name out?` } },
          { id: 'words', label: { ru: `Итоговый объём`, en: `Final length` }, hint: { ru: `Сколько слов и какой лимит.`, en: `How many words, and what the limit is.` } }
        ]
      }
    ],

    weakEssay: {
      title: { ru: `Слабое эссе на стипендию`, en: `A weak scholarship essay` },
      text: {
        ru: `*Вопрос фонда: «Какую задачу своего города, района или школы ты хочешь решать — и что ты уже для этого сделал? Как стипендия поможет тебе продвинуться?» До 300 слов.*

С самого детства я мечтала изменить мир к лучшему. Я всегда была целеустремлённым, ответственным и трудолюбивым человеком, и эти качества помогают мне во всём.

Я отличница, участница множества олимпиад и конкурсов, член школьного совета и волонтёр. Я занимаюсь танцами, изучаю английский и немецкий, а также люблю читать. Учителя всегда отмечают моё стремление к знаниям и лидерские качества.

В нашем городе много проблем: экология, пробки, нехватка мест для молодёжи. Все эти проблемы очень важны, и их нужно решать. Я считаю, что каждый человек должен внести свой вклад в развитие общества.

Я уверена, что эта стипендия поможет мне реализовать свой потенциал и стать успешным человеком. У меня есть страсть к знаниям, и я никогда не сдаюсь. Получив эту стипендию, я смогу сделать ещё больше для людей.

В заключение хочу сказать, что я действительно заслуживаю эту стипендию, потому что много работаю и верю в свою мечту. Ведь если очень захотеть, можно добиться всего.`,
        en: `*The funder’s question: “What problem in your town, neighbourhood or school do you want to work on — and what have you already done about it? How would this scholarship help you take the next step?” Maximum 300 words.*

Ever since I was a child, I have dreamed of making the world a better place. I have always been a determined, responsible and hard-working person, and these qualities help me in everything I do.

I am a top student, a participant in many olympiads and competitions, a member of the student council and a volunteer. I dance, I study French and German, and I love reading. My teachers always praise my thirst for knowledge and my leadership skills.

Our city has many problems: the environment, traffic, a lack of places for young people. All these problems are very important and need to be solved. I believe everyone should contribute to the development of society.

I am sure this scholarship will help me reach my full potential and become a successful person. I have a passion for learning and I never give up. With this scholarship, I will be able to do even more for people.

In conclusion, I truly deserve this scholarship because I work hard and believe in my dream. After all, if you want something badly enough, you can achieve anything.`
      },
      questions: [
        {
          q: { ru: `На какую часть вопроса фонда эссе действительно отвечает?`, en: `Which part of the funder’s question does the essay actually answer?` },
          options: [
            { ru: `Какую задачу хочет решать автор`, en: `Which problem the writer wants to work on` },
            { ru: `Что автор уже для этого сделал`, en: `What the writer has already done about it` },
            { ru: `Как поможет стипендия`, en: `How the scholarship would help` },
            { ru: `Ни на одну — конкретного ответа нет нигде`, en: `None of them — there’s no specific answer anywhere` }
          ],
          correct: [3],
          explain: {
            ru: `Задачи перечислены списком («экология, пробки…»), но ни одна не выбрана. Что сделано — неизвестно: названы занятия, не связанные с задачей. Как поможет стипендия — «реализовать потенциал», то есть непонятно. Первая правка — выбрать одну задачу и ответить про неё на все три части.`,
            en: `Problems are listed (“the environment, traffic…”) but none is chosen. What’s been done is unknown: the activities named have nothing to do with a problem. How the scholarship helps — “reach my full potential” — tells us nothing. The first edit: pick one problem and answer all three parts about it.`
          }
        },
        {
          q: { ru: `Какие фразы — шаблоны, которые ничего не говорят об авторе? Выбери все.`, en: `Which phrases are templates that say nothing about the writer? Choose all that apply.` },
          options: [
            { ru: `«С самого детства я мечтала изменить мир к лучшему»`, en: `“Ever since I was a child, I have dreamed of making the world a better place”` },
            { ru: `«внести свой вклад в развитие общества»`, en: `“contribute to the development of society”` },
            { ru: `«У меня есть страсть к знаниям»`, en: `“I have a passion for learning”` },
            { ru: `«изучаю английский и немецкий»`, en: `“I study French and German”` },
            { ru: `«если очень захотеть, можно добиться всего»`, en: `“if you want something badly enough, you can achieve anything”` }
          ],
          correct: [0, 1, 2, 4],
          explain: {
            ru: `Четыре фразы подошли бы к эссе любого кандидата. «Изучаю английский и немецкий» — не шаблон, а факт, его можно проверить. Но к вопросу он не относится: его место в анкете, а не в этом эссе.`,
            en: `Four of these would fit any applicant’s essay. “I study French and German” isn’t a template but a checkable fact. It just doesn’t answer the question: it belongs in the application form, not in this essay.`
          }
        },
        {
          q: { ru: `Что делать со вторым абзацем — перечнем достижений?`, en: `What should happen to the second paragraph — the list of achievements?` },
          options: [
            { ru: `Оставить: это доказательства`, en: `Keep it: it’s evidence` },
            { ru: `Дополнить датами и местами`, en: `Add dates and places` },
            { ru: `Убрать почти всё, оставить одно занятие, связанное с выбранной задачей, и развернуть его в сцену`, en: `Cut almost all of it, keep one activity linked to the chosen problem and turn it into a scene` },
            { ru: `Перенести в конец эссе`, en: `Move it to the end` }
          ],
          correct: [2],
          explain: {
            ru: `Перечень повторяет анкету и не отвечает на вопрос. Если одно из занятий связано с задачей — например, волонтёрство на уборке берега реки, — оно становится примером: что именно автор делал, когда, что увидел. Остальное — в анкету.`,
            en: `The list repeats the application form and doesn’t answer the question. If one activity is linked to the problem — say, volunteering at a riverbank clean-up — it becomes the example: what exactly the writer did, when, what she noticed. The rest goes in the form.`
          }
        },
        {
          q: { ru: `Какие вопросы помогут автору найти настоящий материал? Выбери все.`, en: `Which questions would help the writer find real material? Choose all that apply.` },
          options: [
            { ru: `«Какую из этих проблем ты видишь сама каждый день — где и когда?»`, en: `“Which of these problems do you see yourself every day — where and when?”` },
            { ru: `«Что ты уже сделала по этой проблеме, хотя бы немного?»`, en: `“What have you already done about it, even something small?”` },
            { ru: `«Какие ещё награды можно добавить?»`, en: `“What other awards could you add?”` },
            { ru: `«Что конкретно ты сделаешь, если получишь поддержку?»`, en: `“What exactly would you do if you got the support?”` },
            { ru: `«Как сделать текст торжественнее?»`, en: `“How could you make it sound grander?”` }
          ],
          correct: [0, 1, 3],
          explain: {
            ru: `Хорошие вопросы ведут к фактам из жизни автора: место, поступок, план. Новые награды и торжественность только удлинят список и добавят пафоса.`,
            en: `Good questions lead to facts from the writer’s life: a place, an action, a plan. More awards and grander language would only lengthen the list and add pomp.`
          }
        },
        {
          q: { ru: `Автору кажется, что без «сильных» фактов эссе выглядит скромно. Что из этого допустимо?`, en: `The writer feels the essay looks modest without “impressive” facts. Which of these is acceptable?` },
          options: [
            { ru: `Написать, что она организовала субботник, хотя на самом деле в нём участвовала`, en: `Say she organised the clean-up, when in fact she took part in it` },
            { ru: `Округлить «собрали 12 мешков» до «собрали сотни мешков»`, en: `Round “we collected 12 bags” up to “we collected hundreds of bags”` },
            { ru: `Честно написать о небольшом участии, о том, что она заметила, и о том, что хочет сделать дальше`, en: `Write honestly about her small part, what she noticed and what she wants to do next` },
            { ru: `Придумать разговор с экологом, которого не было`, en: `Invent a conversation with an ecologist that never happened` }
          ],
          correct: [2],
          explain: {
            ru: `Эссе на стипендию держится на правде о себе. Преувеличить роль, «округлить» число для красоты или придумать разговор — это неправда, даже если кажется мелочью. Небольшое, но настоящее участие и ясный план убеждают сильнее раздутых фактов — и их не страшно проверять.`,
            en: `A scholarship essay rests on the truth about yourself. Inflating your role, “rounding up” a number to look better or inventing a conversation is untrue, even if it seems minor. A small but real contribution plus a clear plan is more convincing than inflated facts — and there’s nothing to fear if someone checks.`
          }
        },
        {
          q: { ru: `Какой финал сильнее подошёл бы после правки?`, en: `Which ending would work best after revision?` },
          options: [
            { ru: `«В заключение хочу сказать, что я действительно заслуживаю эту стипендию»`, en: `“In conclusion, I truly deserve this scholarship”` },
            { ru: `«Ведь если очень захотеть, можно добиться всего»`, en: `“After all, if you want something badly enough, you can achieve anything”` },
            { ru: `Конкретный следующий шаг: что автор сделает за год с поддержкой и как поймёт, что получилось`, en: `A specific next step: what the writer will do in the next year with the support, and how she’ll know it worked` },
            { ru: `Цитата великого человека о мечте`, en: `A great person’s quotation about dreams` }
          ],
          correct: [2],
          explain: {
            ru: `«Я заслуживаю» — оценка, которую делает фонд, а не автор. Пословица и цитата — чужие слова. Конкретный план с понятным результатом отвечает на третью часть вопроса и оставляет у читателя картинку будущего.`,
            en: `“I deserve it” is the funder’s judgement to make, not the writer’s. A proverb and a quotation are other people’s words. A concrete plan with a visible result answers the third part of the question and leaves the reader with a picture of what comes next.`
          }
        }
      ]
    },

    values: {
      groups: [
        {
          id: 'belonging',
          title: { ru: `Принадлежность`, en: `Belonging` },
          items: [
            { ru: `дружба`, en: `friendship` },
            { ru: `семья`, en: `family` },
            { ru: `доверие`, en: `trust` },
            { ru: `забота`, en: `care` },
            { ru: `верность`, en: `loyalty` },
            { ru: `традиции`, en: `tradition` },
            { ru: `общность`, en: `community` },
            { ru: `принятие`, en: `acceptance` },
            { ru: `благодарность`, en: `gratitude` },
            { ru: `щедрость`, en: `generosity` },
            { ru: `уважение`, en: `respect` },
            { ru: `гостеприимство`, en: `hospitality` }
          ]
        },
        {
          id: 'growth',
          title: { ru: `Рост`, en: `Growth` },
          items: [
            { ru: `любопытство`, en: `curiosity` },
            { ru: `мастерство`, en: `mastery` },
            { ru: `смелость`, en: `courage` },
            { ru: `независимость`, en: `independence` },
            { ru: `упорство`, en: `persistence` },
            { ru: `учёба`, en: `learning` },
            { ru: `открытость новому`, en: `openness to new things` },
            { ru: `дисциплина`, en: `discipline` },
            { ru: `самопознание`, en: `self-knowledge` },
            { ru: `готовность рисковать`, en: `willingness to take risks` },
            { ru: `гибкость`, en: `adaptability` },
            { ru: `терпение`, en: `patience` }
          ]
        },
        {
          id: 'impact',
          title: { ru: `Влияние`, en: `Impact` },
          items: [
            { ru: `справедливость`, en: `fairness` },
            { ru: `помощь другим`, en: `helping others` },
            { ru: `лидерство`, en: `leadership` },
            { ru: `честность`, en: `honesty` },
            { ru: `ответственность`, en: `responsibility` },
            { ru: `равенство`, en: `equality` },
            { ru: `защита слабых`, en: `standing up for others` },
            { ru: `забота о природе`, en: `care for nature` },
            { ru: `инициатива`, en: `initiative` },
            { ru: `право голоса`, en: `having a say` },
            { ru: `наставничество`, en: `mentoring` },
            { ru: `порядочность`, en: `integrity` }
          ]
        },
        {
          id: 'meaning',
          title: { ru: `Смысл`, en: `Meaning` },
          items: [
            { ru: `творчество`, en: `creativity` },
            { ru: `красота`, en: `beauty` },
            { ru: `свобода`, en: `freedom` },
            { ru: `юмор`, en: `humour` },
            { ru: `спокойствие`, en: `calm` },
            { ru: `вера или духовность`, en: `faith or spirituality` },
            { ru: `игра`, en: `play` },
            { ru: `равновесие`, en: `balance` },
            { ru: `приключения`, en: `adventure` },
            { ru: `простота`, en: `simplicity` },
            { ru: `знание`, en: `knowledge` },
            { ru: `память о прошлом`, en: `remembrance` }
          ]
        }
      ]
    },

    feelings: {
      ru: [
        'растерянность', 'досада', 'неловкость', 'облегчение', 'стыд', 'вина', 'зависть', 'ревность',
        'тревога', 'опустошение', 'раздражение', 'обида', 'разочарование', 'одиночество', 'беспомощность',
        'нетерпение', 'смущение', 'настороженность', 'горечь', 'тоска', 'злость', 'негодование',
        'благодарность', 'гордость', 'азарт', 'воодушевление', 'умиротворение', 'нежность', 'восхищение',
        'удивление', 'любопытство', 'уверенность', 'надежда', 'беспокойство', 'уязвимость', 'растроганность',
        'ностальгия', 'ошеломлённость'
      ],
      en: [
        'bewildered', 'frustrated', 'awkward', 'relieved', 'ashamed', 'guilty', 'envious', 'jealous',
        'anxious', 'drained', 'irritated', 'hurt', 'disappointed', 'lonely', 'helpless',
        'impatient', 'embarrassed', 'wary', 'bitter', 'homesick', 'angry', 'indignant',
        'grateful', 'proud', 'exhilarated', 'inspired', 'at peace', 'tender', 'admiring',
        'surprised', 'curious', 'confident', 'hopeful', 'restless', 'vulnerable', 'moved',
        'nostalgic', 'overwhelmed', 'resentful'
      ]
    },

    needs: {
      ru: [
        'безопасность', 'уважение', 'самостоятельность', 'принадлежность', 'ясность', 'справедливость',
        'отдых', 'признание', 'поддержка', 'доверие', 'понимание', 'свобода выбора', 'смысл', 'честность',
        'близость', 'предсказуемость', 'игра', 'творчество', 'ощущение, что у меня получается',
        'возможность быть полезным', 'личное пространство', 'равенство', 'забота', 'движение', 'красота', 'рост'
      ],
      en: [
        'safety', 'respect', 'autonomy', 'belonging', 'clarity', 'fairness',
        'rest', 'recognition', 'support', 'trust', 'understanding', 'choice', 'meaning', 'honesty',
        'closeness', 'predictability', 'play', 'creativity', 'competence',
        'being useful', 'privacy', 'equality', 'care', 'movement', 'beauty', 'growth'
      ]
    },

    questionBank: {
      decode: [
        { ru: `Какой глагол в задании главный? Что он требует от тебя сделать?`, en: `Which verb in the brief is the main one? What does it ask you to do?` },
        { ru: `Если бы ты пересказал этот вопрос другу в чате, как бы ты его сформулировал?`, en: `If you passed this question on to a friend in a chat, how would you phrase it?` },
        { ru: `Из скольких частей состоит вопрос? На какую из них тебе труднее всего ответить?`, en: `How many parts does the question have? Which is hardest for you to answer?` },
        { ru: `Кто будет читать это эссе? Что он, скорее всего, уже прочитал сегодня?`, en: `Who will read this essay? What have they probably already read today?` },
        { ru: `Какой ответ подошёл бы к соседнему вопросу, но не к этому?`, en: `What answer would fit a neighbouring question, but not this one?` },
        { ru: `Какое условие задания легче всего нарушить случайно?`, en: `Which condition of the brief would be easiest to break by accident?` },
        { ru: `Что, по-твоему, читатель хочет понять о тебе после этого текста? На чём основана эта догадка?`, en: `What do you think the reader wants to understand about you after this text? What is that guess based on?` }
      ],
      material: [
        { ru: `Что ты делаешь, когда никто не просит и не проверяет?`, en: `What do you do when nobody asks you to and nobody checks?` },
        { ru: `О чём ты можешь говорить дольше, чем готовы слушать другие?`, en: `What could you talk about for longer than other people want to listen?` },
        { ru: `Какой предмет в твоей комнате больше всего расскажет о тебе незнакомому человеку? Почему именно он?`, en: `Which object in your room would tell a stranger the most about you? Why that one?` },
        { ru: `Когда ты в последний раз передумал? Что стало причиной?`, en: `When did you last change your mind? What caused it?` },
        { ru: `Какой маленький момент этого месяца ты до сих пор вспоминаешь? Как думаешь, почему?`, en: `Which small moment from this month do you still think about? Why do you think that is?` },
        { ru: `Что из списка «хочу, чтобы обо мне знали» уже есть в анкете? А что можно узнать только из эссе?`, en: `Which items on your “I want them to know” list are already in the application? Which can only come across in the essay?` },
        { ru: `Какие две твои ценности чаще всего спорят друг с другом?`, en: `Which two of your values most often pull against each other?` },
        { ru: `Что тебя злит или возмущает? Какая потребность может за этим стоять?`, en: `What annoys or outrages you? What need might be behind that?` }
      ],
      idea: [
        { ru: `Какого кандидата ты сможешь рассказать с конкретными деталями — местом, временем, словами?`, en: `Which candidate could you tell with specific details — a place, a time, actual words?` },
        { ru: `В каком из них ты что-то делаешь, а не только наблюдаешь?`, en: `In which one are you doing something, not just watching?` },
        { ru: `Про какую идею ты можешь ответить на «ну и что?» — и что это за ответ?`, en: `For which idea can you answer “so what?” — and what is the answer?` },
        { ru: `Какую идею мог бы написать почти любой твой одноклассник? А какую — только ты?`, en: `Which idea could almost any of your classmates write? And which only you?` },
        { ru: `Какой кандидат лучше отвечает именно на этот вопрос, а не на соседний?`, en: `Which candidate answers this exact question best, rather than a neighbouring one?` },
        { ru: `Готов ли ты, чтобы этот текст читали незнакомые люди? Если нет — это вполне веская причина выбрать другой.`, en: `Are you comfortable with strangers reading this? If not, that’s a perfectly good reason to choose another.` },
        { ru: `Какую идею тебе интереснее всего писать прямо сейчас?`, en: `Which idea are you most interested in writing right now?` }
      ],
      structure: [
        { ru: `У тебя одна история, которая меняется, или несколько моментов, которые что-то объединяет?`, en: `Do you have one story that changes, or several moments that something connects?` },
        { ru: `Если это мозаика — что за нить: ценность, предмет, вопрос? Появляется ли она в каждом моменте?`, en: `If it’s a montage, what is the thread — a value, an object, a question? Does it appear in every moment?` },
        { ru: `Какой момент самый напряжённый? Что, если начать с него?`, en: `Which moment is the most tense? What if you started there?` },
        { ru: `Что читатель должен знать, чтобы понять первую сцену? Можно ли сказать это позже?`, en: `What does the reader need to know to follow the first scene? Could that wait until later?` },
        { ru: `Какой образ ты хочешь оставить у читателя в конце?`, en: `What image do you want the reader to leave with?` },
        { ru: `Какую часть можно убрать так, что никто не заметит?`, en: `Which part could you remove without anyone noticing?` },
        { ru: `Где в твоём плане ты что-то понимаешь? Не спряталось ли это понимание в последнюю фразу?`, en: `Where in your plan do you come to understand something? Has that understanding been squeezed into the last sentence?` }
      ],
      draft: [
        { ru: `Что ты хочешь сказать в этом абзаце — одной фразой?`, en: `What do you want to say in this paragraph — in one sentence?` },
        { ru: `Что было дальше — буквально, минута за минутой?`, en: `What happened next — literally, minute by minute?` },
        { ru: `Что ты видел, слышал, держал в руках в этот момент?`, en: `What did you see, hear or hold in your hands at that moment?` },
        { ru: `Что ты сказал вслух — и что подумал, но не сказал?`, en: `What did you say out loud — and what did you think but not say?` },
        { ru: `Где ты застрял? Можно ли пропустить это место и вернуться к нему позже?`, en: `Where are you stuck? Could you skip that bit and come back to it?` },
        { ru: `Какую часть плана тебе не хочется писать? Почему?`, en: `Which part of the plan are you reluctant to write? Why?` }
      ],
      feedback: [
        { ru: `Какой отзыв тебе нужен сейчас: про смысл, структуру или язык?`, en: `What kind of feedback do you need right now: on meaning, structure or language?` },
        { ru: `Кому ты готов показать этот текст? Почему именно ему?`, en: `Who are you willing to show this text to? Why them?` },
        { ru: `Какой вопрос задать читателю, чтобы он не ответил просто «нормально»?`, en: `What question could you ask a reader so they don’t just say “it’s fine”?` },
        { ru: `Где, по-твоему, читатель мог потеряться? Совпадает ли это с тем, что он сказал?`, en: `Where do you think the reader might have got lost? Does that match what they said?` },
        { ru: `С каким замечанием тебе хочется спорить? Что в нём может быть верным?`, en: `Which comment do you want to argue with? What might be right about it?` },
        { ru: `Какое замечание касается текста, а какое — твоего опыта? Со вторым соглашаться не обязательно.`, en: `Which comment is about the text, and which about your experience? You don’t have to accept the second kind.` },
        { ru: `Какой вопрос читателя показал, чего в эссе не хватает?`, en: `Which of the reader’s questions showed you what the essay is missing?` }
      ],
      revise: [
        { ru: `Если пересказать эссе одной фразой — это ответ на вопрос задания?`, en: `If you sum up the essay in one sentence, is that an answer to the question?` },
        { ru: `Какой абзац можно убрать без потери смысла? А какой точно нельзя?`, en: `Which paragraph could go without losing meaning? Which definitely can’t?` },
        { ru: `Где ты называешь качество или чувство вместо того, чтобы показать поступок?`, en: `Where do you name a quality or feeling instead of showing an action?` },
        { ru: `Есть ли фраза, которую мог бы написать любой другой кандидат?`, en: `Is there a sentence any other applicant could have written?` },
        { ru: `Что будет, если начать со второго абзаца?`, en: `What happens if you start with the second paragraph?` },
        { ru: `Добавляет ли финал мысль — или повторяет то, что уже понятно?`, en: `Does the ending add a thought, or repeat what’s already clear?` },
        { ru: `Какие слова можно убрать ради лимита, не трогая детали?`, en: `Which words could go for the sake of the limit without touching the details?` },
        { ru: `Какую одну правку ты сделал бы, если бы у тебя было всего пять минут?`, en: `If you had only five minutes, which one edit would you make?` }
      ],
      check: [
        { ru: `Может ли кто-то из участников событий сказать: «Было не так»?`, en: `Could anyone who was there say, “That’s not how it happened”?` },
        { ru: `Откуда ты знаешь это число или дату? Как их можно проверить?`, en: `How do you know this number or date? How could it be checked?` },
        { ru: `Твоя роль описана ровно такой, какой она была?`, en: `Is your role described exactly as it was?` },
        { ru: `Реплики в кавычках — дословные? Если нет, как это показать читателю?`, en: `Are the words in quotation marks exact? If not, how can you signal that?` },
        { ru: `Не узнает ли кто-то из упомянутых людей о себе то, чем не хотел бы делиться?`, en: `Might anyone mentioned find something about themselves they wouldn’t want shared?` },
        { ru: `Ты отвечаешь на вопрос задания — или на вопрос, который тебе больше нравится?`, en: `Are you answering the question set — or one you like better?` },
        { ru: `Сколько слов в тексте и какой лимит?`, en: `How many words are there, and what’s the limit?` },
        { ru: `Чувства, которые ты описал, — твои тогдашние, а не те, которые «правильно» было бы испытывать?`, en: `Are the feelings you describe the ones you actually had then, not the ones it would be “right” to have?` }
      ]
    },

    moves: [
      {
        id: 'cut',
        title: { ru: `Сократи`, en: `Cut` },
        how: { ru: `Убери разгон, усилители, повторы и двойные объяснения. Если смысл не пострадал — слово было лишним.`, en: `Remove throat-clearing, intensifiers, repetition and double explanations. If the meaning survives, the word wasn’t needed.` }
      },
      {
        id: 'move-up',
        title: { ru: `Подними наверх`, en: `Move it up` },
        how: { ru: `Найди самое живое предложение — часто оно во втором абзаце — и начни с него. Контекст можно дать следом.`, en: `Find the liveliest sentence — often it’s in the second paragraph — and start with it. Context can follow.` }
      },
      {
        id: 'moment',
        title: { ru: `Абстракцию — в момент`, en: `Swap an abstraction for a moment` },
        how: { ru: `Замени «я понял ценность труда» минутой, в которой это понимание случилось: где, когда, что ты делал.`, en: `Replace “I learned the value of hard work” with the minute when that understanding happened: where, when, what you were doing.` }
      },
      {
        id: 'split',
        title: { ru: `Раздели абзац`, en: `Split a paragraph` },
        how: { ru: `Если в абзаце две мысли или два момента, разведи их. Короткий отдельный абзац подчёркивает важное.`, en: `If a paragraph holds two ideas or two moments, separate them. A short paragraph of its own gives weight to what matters.` }
      },
      {
        id: 'choice',
        title: { ru: `Покажи выбор`, en: `Show the choice` },
        how: { ru: `Найди место, где можно было поступить иначе, и назови оба варианта. Читатель поймёт характер по тому, что ты выбрал.`, en: `Find the point where you could have acted differently and name both options. The reader will understand your character from what you chose.` }
      },
      {
        id: 'image-ending',
        title: { ru: `Финал-образ вместо морали`, en: `End on an image, not a moral` },
        how: { ru: `Замени последнюю фразу-урок деталью или поступком из самой истории, которые несут ту же мысль.`, en: `Replace a final lesson-sentence with a detail or action from the story itself that carries the same idea.` }
      },
      {
        id: 'fact',
        title: { ru: `Добавь проверяемый факт`, en: `Add one checkable fact` },
        how: { ru: `Одно имя, место, число или название делают текст конкретным. Только правда — то, что можно подтвердить.`, en: `One name, place, number or title makes a text specific. Only the truth — something that can be confirmed.` }
      },
      {
        id: 'resume',
        title: { ru: `Убери строку из резюме`, en: `Remove a résumé item` },
        how: { ru: `Награды и должности уже есть в анкете. Оставь в эссе только то, что работает на историю, и упомяни это один раз.`, en: `Awards and titles are already in the application. Keep in the essay only what serves the story, and mention it once.` }
      },
      {
        id: 'feeling',
        title: { ru: `Уточни чувство`, en: `Sharpen a feeling` },
        how: { ru: `Замени «грустно» или «хорошо» точным словом — или поступком, по которому чувство видно.`, en: `Replace “sad” or “good” with a precise word — or with an action that shows the feeling.` }
      },
      {
        id: 'question',
        title: { ru: `Верни вопрос`, en: `Bring back the question` },
        how: { ru: `Перечитай задание и найди в тексте место, где ты на него отвечаешь. Такого места нет — допиши его или переставь части.`, en: `Reread the brief and find the place in your text where you answer it. If there isn’t one, write it or rearrange the parts.` }
      }
    ],

    truthCheck: [
      { ru: `Каждое событие в эссе действительно произошло.`, en: `Every event in the essay really happened.` },
      { ru: `Имена, даты, числа и названия проверены — по документам, сообщениям, фото или у участников.`, en: `Names, dates, numbers and titles are checked — against documents, messages, photos or the people involved.` },
      { ru: `Моя роль описана такой, какой была: я не называю себя организатором, если был участником.`, en: `My role is described as it was: I don’t call myself the organiser if I was a participant.` },
      { ru: `Награды, должности и результаты — настоящие и названы точно, без «округления».`, en: `Awards, titles and results are real and stated precisely, without “rounding up”.` },
      { ru: `Чувства — мои тогдашние, а не те, которые «правильно» было бы испытывать.`, en: `The feelings are the ones I actually had, not the ones it would be “right” to have.` },
      { ru: `Реплики в кавычках — дословные или помечены как пересказ («он сказал что-то вроде…»).`, en: `Words in quotation marks are exact, or marked as paraphrase (“he said something like…”).` },
      { ru: `Если я сжал или переставил события, это не меняет того, что произошло на самом деле.`, en: `If I compressed or reordered events, that doesn’t change what actually happened.` },
      { ru: `Люди в тексте не узнают о себе того, чем не хотели бы делиться; где нужно, я убрал имя или спросил разрешения.`, en: `People in the text won’t find things about themselves they wouldn’t want shared; where needed, I removed a name or asked permission.` },
      { ru: `Эссе отвечает на вопрос задания, а не на соседний.`, en: `The essay answers the question set, not a neighbouring one.` },
      { ru: `Объём — в пределах лимита, формат соответствует условиям.`, en: `The length is within the limit, and the format meets the requirements.` }
    ],

    rules: {
      ru: `**Что делает помощник.** Задаёт вопросы, которые помогают тебе вспомнить, выбрать и додумать. Предлагает варианты редакторских решений — сократить, переставить, заменить абстракцию моментом — и показывает места в *твоём* тексте, к которым они относятся. Напоминает о вопросе задания, лимите и договоре о правде.

**Чего помощник не делает никогда.** Не придумывает события, роли, награды или чувства из твоей жизни. Не пишет эссе и абзацы за тебя. Не решает, «достаточно ли интересен» твой опыт: маленькие моменты работают. Не обещает поступление, победу или стипендию. Не просит рассказывать то, чем ты не хочешь делиться.

Все решения о тексте принимаешь ты.`,
      en: `**What the helper does.** It asks questions that help you remember, choose and think things through. It offers editorial options — cut, reorder, swap an abstraction for a moment — and points to the places in *your* text they apply to. It reminds you of the question, the limit and the truth contract.

**What the helper never does.** It never invents events, roles, awards or feelings from your life. It never writes the essay, or any paragraph of it, for you. It never decides whether your experience is “interesting enough”: small moments work. It never promises admission, a prize or a scholarship. It never asks you to share what you don’t want to share.

Every decision about the text is yours.`
    }
  });
})();
