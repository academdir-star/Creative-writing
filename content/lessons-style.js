/* Route: style — Язык и стиль / Language and style. Six lessons: verbs, clichés, rhythm, adjectives, feeling, voice. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'style-1',
      route: 'style',
      n: 1,
      minutes: 8,
      skills: ['words'],
      genres: ['description', 'story', 'scene', 'reportage'],
      title: { ru: `Десять точных глаголов`, en: `Ten precise verbs` },
      learn: {
        ru: `Заменять расплывчатый глагол точным, который сразу показывает, кто действует, как и в каком состоянии.`,
        en: `Replace a vague verb with a precise one that shows at once who is acting, how, and in what state.`
      },
      hook: {
        ru: `Опоздавший «вошёл в класс». А как именно? Ввалился, просочился, влетел, вплыл? Каждый из этих глаголов — маленький портрет: по нему видно, спешит ли человек, боится ли учителя или ему всё равно. Глагол — самое быстрое слово в предложении. Сегодня заставим его работать.`,
        en: `The latecomer “came into the classroom”. But how? Barged in, slipped in, drifted in, burst in? Each of those verbs is a tiny portrait: it tells you whether the person is in a hurry, scared of the teacher, or couldn’t care less. The verb is the fastest word in a sentence. Today we put it to work.`
      },
      technique: {
        name: { ru: `Глагол-портрет`, en: `The verb as a portrait` },
        text: {
          ru: `Общие глаголы — идти, делать, быть, стать — сообщают только факт: что-то произошло. Точный глагол сообщает ещё и *как*: скорость, вес, настроение, характер. «Она пошла к двери» — факт. «Она прошмыгнула к двери» — уже человек, который не хочет, чтобы его заметили.

Представь действие как кадр из фильма и спроси: чем оно отличается от сотни таких же? Ответ часто помещается в один глагол — и заодно съедает наречия: «быстро и тихо пошла» превращается в «проскользнула».

Точный — не значит редкий. Иногда «шла» — лучшее слово: когда походка обычная, а смотреть читатель должен на другое.`,
          en: `General verbs — go, do, be, get — only report that something happened. A precise verb also reports *how*: speed, weight, mood, character. “She went to the door” is a fact. “She sidled towards the door” is a person who doesn’t want to be noticed.

Picture the action as a shot in a film and ask: what makes it different from a hundred others? The answer often fits into one verb — and it swallows adverbs on the way: “walked quickly and quietly” becomes “slipped”.

Precise doesn’t mean rare. Sometimes “walked” is exactly right: when the walk is ordinary and the reader should be looking at something else.`
        }
      },
      example: {
        before: {
          ru: `Дамир опоздал на физику. Он вошёл в класс, пошёл к своей парте и сел. Потом достал тетрадь и стал быстро что-то писать, как будто был здесь с самого начала урока.`,
          en: `Damir was late for physics. He came into the classroom, went to his desk and sat down. Then he got out his exercise book and started writing quickly, as if he had been there since the start of the lesson.`
        },
        after: {
          ru: `Дамир опоздал на физику. Он просочился в дверь боком, на цыпочках прокрался мимо доски, опустился на стул и выудил из рюкзака тетрадь. Через секунду он уже строчил в ней так, будто сидел здесь с самого звонка.`,
          en: `Damir was late for physics. He slid round the door sideways, tiptoed past the whiteboard, eased himself onto his chair and fished his exercise book out of his rucksack. A second later he was scribbling away as if he’d been there since the bell.`
        },
        changes: [
          {
            ru: `Пять общих глаголов (вошёл, пошёл, сел, достал, стал писать) заменены точными. Каждый добавляет сведения: Дамир двигается тихо и очень не хочет, чтобы его заметили.`,
            en: `Five general verbs (came, went, sat, got out, started writing) have become precise ones. Each adds information: Damir moves quietly and badly wants not to be noticed.`
          },
          {
            ru: `Наречие «быстро» исчезло: оно уже внутри глагола «строчил». Слов почти столько же, а сказано больше.`,
            en: `The adverb “quickly” has gone: it now lives inside “scribbling”. Roughly the same number of words, but more is said.`
          },
          {
            ru: `Фразы «он не хотел, чтобы его заметили» в тексте нет — это видно по глаголам. Замени их на «ввалился, протопал, плюхнулся, шлёпнул тетрадь на парту» — и получится совсем другой Дамир.`,
            en: `The text never says “he didn’t want to be noticed” — the verbs show it. Swap them for “barged in, stomped, flopped down, slapped his book on the desk” and you get a completely different Damir.`
          }
        ]
      },
      exercise: {
        type: 'list',
        prompt: {
          ru: `Десять человек опоздали на один и тот же урок. Как каждый из них входит в класс? Запиши десять разных глаголов и рядом — пару слов о том, кто это. Без почти-повторов: «вбежал» и «влетел» слишком близки.`,
          en: `Ten people are late for the same lesson. How does each of them come into the room? Write ten different verbs, each with a few words about who this is. No near-repeats: “ran in” and “rushed in” are too close.`
        },
        config: {
          count: 10,
          placeholder: { ru: `глагол — кто это`, en: `verb — who this is` },
          then: {
            ru: `Выбери четыре глагола из списка и напиши абзац: за один урок в класс по очереди входят четыре опоздавших, а учитель реагирует на каждого. Проверь: можно ли различить этих людей, даже если убрать имена?`,
            en: `Pick four verbs from your list and write a paragraph: during one lesson, four latecomers arrive one after another, and the teacher reacts to each. Check: could you tell these people apart even without their names?`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Опиши людное место — Зелёный базар в субботу, станцию метро в восемь утра, столовую на большой перемене — примерно в 120 словах. Самые общие глаголы запрещены: идти, делать, быть, стать. Пусть место двигается.`,
          en: `Describe a busy place — a market on a Saturday, a metro station at eight in the morning, the canteen at lunch break — in about 120 words. The vaguest verbs are banned: go, walk, do, get, make, and was/were. Make the place move.`
        },
        config: {
          rules: [
            { kind: 'ban-words', words: {
              ru: ['идти', 'иду', 'идёт', 'идут', 'шёл', 'шла', 'шло', 'шли', 'пошёл', 'пошла', 'пошли', 'делать', 'делает', 'делают', 'делал', 'делала', 'делали', 'сделал', 'сделала', 'сделали', 'был', 'была', 'было', 'были', 'стал', 'стала', 'стало', 'стали'],
              en: ['go', 'goes', 'going', 'gone', 'went', 'walk', 'walks', 'walked', 'walking', 'do', 'does', 'did', 'done', 'was', 'were', 'get', 'gets', 'got', 'getting', 'make', 'makes', 'made', 'making']
            } },
            { kind: 'min-words', n: 100 },
            { kind: 'max-words', n: 140 }
          ]
        }
      },
      hint: {
        ru: `Начни с самого медленного опоздавшего — того, кто никуда не спешит. Как он двигается: вплывает, шаркает, тащится? Потом прыгни к противоположному полюсу — к тому, кто влетает. Застрял — представь конкретных людей: новенький, староста, тот, кто опаздывает третий раз за неделю.`,
        en: `Start with the slowest latecomer — the one in no hurry at all. How do they move: drift, shuffle, trudge? Then jump to the opposite end — the one who bursts in. Stuck? Picture real people: the new kid, the class rep, the one who’s late for the third time this week.`
      },
      improve: {
        ru: `Найди в абзаце глагол с наречием рядом (быстро, медленно, тихо, громко). Замени пару «глагол + наречие» одним точным глаголом. Потом проверь, не стал ли он слишком вычурным для этого текста.`,
        en: `Find a verb in your paragraph with an adverb beside it (quickly, slowly, quietly, loudly). Replace the verb-plus-adverb pair with one precise verb. Then check it hasn’t become too showy for this text.`
      },
      selfCheck: [
        { ru: `Все десять глаголов различаются по смыслу, а не повторяют друг друга?`, en: `Do all ten verbs differ in meaning, rather than being synonyms for the same thing?` },
        { ru: `По каждому глаголу можно догадаться о характере или состоянии человека?`, en: `Does each verb hint at the person’s character or state?` },
        { ru: `В абзаце меньше наречий, чем было бы с общими глаголами?`, en: `Does the paragraph have fewer adverbs than it would with general verbs?` },
        { ru: `Я не заменял простые слова редкими только ради редкости?`, en: `Did I avoid swapping in rare words just because they’re rare?` }
      ],
      discuss: {
        ru: `Бывает ли, что простой глагол («сказал», «пошёл») лучше яркого? Найдите пример в книге, которую вы читаете сейчас.`,
        en: `Is a plain verb (“said”, “went”) ever better than a vivid one? Find an example in a book you’re reading now.`
      },
      reflect: {
        ru: `Какой глагол из твоего списка ты раньше ни разу не использовал в своих текстах? Где ещё он может пригодиться?`,
        en: `Which verb on your list have you never used in your own writing before? Where else could it come in handy?`
      },
      transfer: {
        ru: `Точный глагол работает в любом жанре: в рассказе он даёт характер, в репортаже заставляет двигаться толпу, в эссе спасает от «я делал» и «я был». В официальном тексте осторожнее: разговорное «притащился» может сбить тон. Сохрани лучшую пару «до/после» из этого урока — первую из пяти для итога маршрута.`,
        en: `Precise verbs work in every genre: in a story they give character, in reportage they make a crowd move, in an essay they rescue you from “I did” and “I was”. In formal writing, take care: a very casual verb (“slouched in”) can knock the tone off. Save your best before/after pair from this lesson — the first of five for the route’s final collection.`
      },
      teacher: {
        note: {
          ru: `Список удобно собрать всей группой на доске: станет видно, какие глаголы лежат на поверхности (их называют все), а какие найдены вниманием. Следите, чтобы урок не превратился в охоту за редкими словами из словаря синонимов: хороший глагол точный и узнаваемый, а не экзотичный. Сильным ученикам предложите заменить четыре глагола в абзаце так, чтобы те же люди стали другими. Проверка запрещённых слов в усложнении смотрит на конкретные формы и может пропустить редкую — это не страшно.`,
          en: `It works well to build the list as a group on the board: you’ll see which verbs lie on the surface (everyone suggests them) and which were found by paying attention. Make sure the lesson doesn’t turn into a hunt for rare words from a thesaurus: a good verb is precise and recognisable, not exotic. Stronger students can swap the four verbs in their paragraph so the same people become someone else. The banned-word check in the harder task looks for specific forms and may miss a rare one — that’s fine.`
        },
        source: ['ou-fiction', 'hse-spb', 'original']
      }
    },

    {
      id: 'style-2',
      route: 'style',
      n: 2,
      minutes: 8,
      skills: ['words', 'observation'],
      genres: ['description', 'story', 'contest', 'statement'],
      title: { ru: `Перепиши клише через наблюдаемую деталь`, en: `Rewrite the cliché through observation` },
      learn: {
        ru: `Замечать клише в тексте и заменять его деталью, которую в этой ситуации можно было бы увидеть, услышать или сделать.`,
        en: `Spot a cliché in a piece of writing and replace it with a detail that could really be seen, heard or done in that situation.`
      },
      hook: {
        ru: `«Сердце выпрыгивало из груди». Когда-то это было смелое сравнение, а теперь читатель проскакивает его, не замечая. Клише — не ошибка, а чужие слова, которые пришли быстрее твоих. Сегодня ты научишься их ловить и менять на то, что видел сам.`,
        en: `“My heart was pounding out of my chest.” Once that was a bold image; now readers skim straight past it. A cliché isn’t a mistake — it’s someone else’s words arriving faster than your own. Today you’ll learn to catch them and swap them for what you actually saw.`
      },
      technique: {
        name: { ru: `Вопрос «а это можно снять?»`, en: `The “could you film it?” test` },
        text: {
          ru: `Клише сообщает, что чувство было сильным, но не показывает, каким. Чтобы его заменить, спроси: что в этот момент можно было бы снять на телефон или записать на диктофон?

«Ноги стали ватными» → она дважды промахнулась мимо ступеньки автобуса. «Мурашки по коже» → он натянул рукава до самых пальцев, хотя в зале было жарко. Замена работает, когда *принадлежит этой сцене*: ступенька автобуса — это один конкретный вечер, а не любой.

Не каждое устойчивое выражение нужно выкорчёвывать. В речи персонажа клише может точно его характеризовать: он так говорит. Меняй те, что стоят на месте твоего собственного взгляда.`,
          en: `A cliché tells you a feeling was strong, not what it was like. To replace one, ask: what could you have filmed on your phone, or recorded, at that moment?

“My legs turned to jelly” → she missed the step onto the bus twice. “A shiver ran down my spine” → he pulled his sleeves over his fingers, though the hall was hot. A replacement works when it *belongs to this scene*: that bus step is one particular evening, not any evening.

Not every stock phrase has to go. In a character’s speech, a cliché can be exact characterisation — it’s how they talk. Replace the ones standing in for your own way of seeing.`
        }
      },
      example: {
        before: {
          ru: `Учительница начала раздавать контрольные. Секунды тянулись как часы. Сердце ушло в пятки. Я перевернула листок, увидела оценку и не поверила своим глазам.`,
          en: `The teacher started handing back the tests. Every second felt like an hour. My heart was in my mouth. I turned the paper over, saw my mark and couldn’t believe my eyes.`
        },
        after: {
          ru: `Учительница раздавала контрольные с первой парты, и я считала, сколько осталось до моей: четыре, три, две. Ручку я, оказывается, успела разобрать — пружинка лежала на тетради. Листок лёг текстом вниз. Я перевернула его, увидела в углу красную цифру и перечитала её, будто цифру можно прочитать неправильно.`,
          en: `The teacher handed the tests back from the front row, and I counted the desks left before mine: four, three, two. At some point I’d taken my pen apart — the spring was lying on my notebook. The paper landed face down. I turned it over, saw the red number in the corner and read it again, as if a number could be misread.`
        },
        changes: [
          {
            ru: `«Секунды тянулись как часы» стало счётом парт: время замедлилось, потому что героиня его отмеряет.`,
            en: `“Every second felt like an hour” became counting desks: time slows down because she is measuring it.`
          },
          {
            ru: `«Сердце ушло в пятки» стало разобранной ручкой. Руки волновались сами, без спроса, — а пружинка на тетради бывает только в этом классе и в этот день.`,
            en: `“My heart was in my mouth” became the dismantled pen. Her hands were nervous on their own — and a spring on a notebook belongs to this classroom on this day.`
          },
          {
            ru: `«Не поверила своим глазам» стало странным, но узнаваемым действием: перечитать цифру. Оценку мы так и не узнали — и не нужно, реакция говорит больше.`,
            en: `“Couldn’t believe my eyes” became an odd but recognisable action: rereading a number. We never learn the mark — and don’t need to; the reaction says more.`
          }
        ]
      },
      exercise: {
        type: 'list',
        prompt: {
          ru: `Перед тобой пять клише. Для каждого придумай конкретную ситуацию — кто, где, когда — и замени клише тем, что в ней можно увидеть, услышать или сделать. Одно-два предложения на пункт.`,
          en: `Here are five clichés. For each, invent a specific situation — who, where, when — and replace the cliché with something you could see, hear or do there. One or two sentences each.`
        },
        config: {
          count: 5,
          labels: [
            { ru: `Сердце выпрыгивало из груди`, en: `My heart was pounding out of my chest` },
            { ru: `Гробовая тишина`, en: `Dead silence` },
            { ru: `Время остановилось`, en: `Time stood still` },
            { ru: `Слёзы текли ручьём`, en: `Tears streaming down her face` },
            { ru: `Похожи как две капли воды`, en: `Like two peas in a pod` }
          ],
          placeholder: { ru: `Кто, где — и что там можно заметить?`, en: `Who, where — and what could you notice there?` },
          then: {
            ru: `Выбери самую удачную замену и построй вокруг неё короткую сцену, 4–6 предложений. Проверь, чтобы в сцене не осталось ни одного из пяти клише — и не появилось новых.`,
            en: `Pick your strongest replacement and build a short scene around it, 4–6 sentences. Check that none of the five clichés is left in it — and that no new ones have crept in.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Возьми абзац из любого своего текста — из этого курса или из школьного сочинения. Отметь все готовые выражения, которые ты уже где-то слышал. Два самых заметных перепиши через наблюдаемую деталь, а одно, если оно работает, оставь сознательно и объясни почему.`,
          en: `Take a paragraph from any of your own texts — from this course or a school essay. Mark every ready-made phrase you’ve heard somewhere before. Rewrite the two most obvious ones through an observed detail, and keep one on purpose if it works — then explain why.`
        }
      },
      hint: {
        ru: `Начни со «слёз ручьём» и задай вопросы: кто плачет, где, что у него в руках? Например: остановка, девочка лет десяти, мороженое, про которое она забыла. Что происходит с мороженым? С этого и начни.`,
        en: `Start with “tears streaming down her face” and ask: who is crying, where, what are they holding? Say: a bus stop, a girl of about ten, an ice cream she’s forgotten about. What is the ice cream doing? Start there.`
      },
      improve: {
        ru: `Проверь свои замены: не получилось ли новое клише — «ком в горле» вместо «слёз ручьём»? Если да, спустись на уровень ниже: что конкретно делают руки, глаза, предметы вокруг?`,
        en: `Check your replacements: has one turned into a new cliché — “a lump in her throat” instead of “tears streaming”? If so, go one level lower: what exactly are the hands, the eyes, the objects nearby doing?`
      },
      selfCheck: [
        { ru: `Ни одна замена не оказалась другим клише?`, en: `Has none of my replacements turned out to be another cliché?` },
        { ru: `Каждую замену можно снять на видео или записать на диктофон?`, en: `Could every replacement be filmed or recorded?` },
        { ru: `Детали принадлежат конкретной ситуации, а не любой?`, en: `Do the details belong to one specific situation rather than any situation?` },
        { ru: `Замены не длиннее, чем нужно, — без трёх сравнений подряд?`, en: `Are the replacements no longer than they need to be — no three similes in a row?` }
      ],
      discuss: {
        ru: `Почему клише появляются даже у опытных авторов? Бывают ли ситуации, где готовое выражение — лучший выбор?`,
        en: `Why do clichés turn up even in experienced writers’ work? Are there situations where a stock phrase is the best choice?`
      },
      reflect: {
        ru: `Какое клише ты чаще всего ловишь у себя? Что оно обычно прикрывает — чувство, место, время?`,
        en: `Which cliché do you catch yourself using most? What does it usually cover up — a feeling, a place, a moment in time?`
      },
      transfer: {
        ru: `В рассказе и описании клише стирает картинку, а в конкурсном эссе и personal statement — доверие: жюри читает сотни «сердец, выпрыгивающих из груди». В эссе замена должна быть правдой — деталью, которая действительно была. Лучшая пара «клише → деталь» — вторая из пяти для итога маршрута.`,
        en: `In a story or description, a cliché wipes out the picture; in a competition essay or personal statement it wipes out trust — judges read hundreds of pounding hearts. In an essay the replacement must be true: a detail that really happened. Your best cliché-to-detail pair is the second of five for the route’s final collection.`
      },
      personalAlt: {
        ru: `Не обязательно брать свои переживания: для каждого клише придумай героя или возьми незнакомца, которого мог видеть в городе, — пассажира в метро, продавца на рынке, болельщика на трибуне.`,
        en: `You don’t have to use your own experiences: for each cliché, invent a character or borrow a stranger you might have seen around town — a passenger on the metro, a stallholder at the market, a fan in the stands.`
      },
      teacher: {
        note: {
          ru: `Начните с двухминутного «словаря клише» на доске: ученики знают их больше, чем кажется, и охотно над ними смеются — это снимает стыд за собственные. Хороший материал для разговора — слабые образцы эссе, где чувства переданы только готовыми формулами: напишите свой антипример с такими же ошибками, чужой текст не копируйте. Клише в черновике — нормальный этап, а не повод снижать оценку.`,
          en: `Start with a two-minute “cliché dictionary” on the board: students know more of them than you’d think and enjoy laughing at them, which takes the shame out of finding their own. Weak sample essays in which feelings come only as stock phrases make good discussion material: write your own anti-example with the same faults rather than copying someone else’s text. Clichés in a draft are a normal stage, not a reason to lower a mark.`
        },
        source: ['owl-cw', 'essaypro-leap', 'original']
      }
    },

    {
      id: 'style-3',
      route: 'style',
      n: 3,
      minutes: 8,
      skills: ['rhythm'],
      genres: ['scene', 'story', 'reportage', 'review'],
      title: { ru: `Ритм: короткое, длинное, пауза`, en: `Rhythm: short, long, pause` },
      learn: {
        ru: `Управлять темпом абзаца через длину предложений: разгонять длинной фразой и останавливать короткой.`,
        en: `Control the pace of a paragraph through sentence length: build speed with a long sentence and stop dead with a short one.`
      },
      hook: {
        ru: `Прочитай вслух абзац из учебника, а потом из триллера — разницу слышно раньше, чем вникнешь в слова. У текста, как у музыки, есть темп, нарастание и паузы. Ими можно управлять, и для этого не нужна музыкальная школа.`,
        en: `Read a paragraph from a textbook aloud, then one from a thriller — you can hear the difference before you even follow the words. Like music, writing has tempo, build-up and rests. You can control them, and you don’t need music lessons to do it.`
      },
      technique: {
        name: { ru: `Темп, крещендо, пауза`, en: `Tempo, crescendo, rest` },
        text: {
          ru: `Этот приём пришёл из музыки. Длинное предложение с перечислениями и запятыми — разгон, крещендо: читателю некогда вдохнуть. Короткое — удар или пауза. Очень короткое после длинного звучит как тишина после барабанной дроби.

Как собрать абзац, который разгоняется и останавливается:
- начни со средних фраз — обычный темп;
- дальше одно длинное предложение, где действия идут через запятую или «и… и… и…»;
- потом два-три слова. Точка.

Проверяй только вслух: глаза ритма не слышат. И не превращай приём в закон — абзац из одних коротких фраз утомляет так же, как из одних длинных.`,
          en: `This one comes from music. A long sentence full of commas and lists is a crescendo: the reader has no time to breathe. A short one is a beat, or a rest. A very short sentence after a long one sounds like silence after a drum roll.

To build a paragraph that speeds up and stops:
- start with medium sentences — normal tempo;
- then one long sentence where actions pile up with commas or “and… and… and…”;
- then two or three words. Full stop.

Check it aloud only: eyes can’t hear rhythm. And don’t make it a law — a paragraph of nothing but short sentences is as tiring as one of nothing but long ones.`
        }
      },
      example: {
        before: {
          ru: `Мы с Мишей поехали с горки на ледянке. Сначала мы ехали медленно. Потом скорость стала очень большой. Нас трясло на кочках, и мы кричали. Внизу был большой сугроб. Мы в него врезались и остановились.`,
          en: `Misha and I went down the hill on a plastic sledge. At first we went slowly. Then we went very fast. We bounced over the bumps and we were shouting. There was a big snowdrift at the bottom. We crashed into it and stopped.`
        },
        after: {
          ru: `Мы с Мишей уселись на одну ледянку. Сначала она еле ползла, и мы отталкивались варежками. А потом склон ушёл вниз, и ледянка понеслась, подпрыгивая на кочках, и снег летел в лицо, и Миша орал мне в ухо про тормоза, которых у ледянки никогда не было, и сугроб внизу рос, рос, рос —

Бух.

Тихо. Снег за шиворотом.`,
          en: `Misha and I squeezed onto one plastic sledge. At first it barely moved, and we shoved ourselves along with our mittens. Then the slope dropped away and the sledge took off, bouncing over the bumps, and snow flew into our faces, and Misha was yelling in my ear about the brakes the sledge had never had, and the drift at the bottom grew, and grew, and grew —

Thump.

Quiet. Snow down my collar.`
        },
        changes: [
          {
            ru: `Шесть одинаковых по длине предложений стали тремя темпами: спокойное начало, одно длинное предложение-разгон, короткие фразы в конце.`,
            en: `Six sentences of the same length have become three tempos: a calm start, one long accelerating sentence, short phrases at the end.`
          },
          {
            ru: `Скорость сделана синтаксисом: «и… и… и…», повтор «рос, рос, рос» и тире вместо точки — читателю негде остановиться.`,
            en: `The speed comes from syntax: “and… and… and…”, the repeated “grew, and grew” and a dash instead of a full stop — the reader has nowhere to stop.`
          },
          {
            ru: `«Бух.» на отдельной строке — удар, «Тихо.» — пауза после кульминации. Слово «остановились» больше не нужно: остановку слышно.`,
            en: `“Thump.” on its own line is the beat; “Quiet.” is the rest after the climax. The word “stopped” is no longer needed: you can hear the stop.`
          }
        ]
      },
      exercise: {
        type: 'constraint',
        prompt: {
          ru: `Напиши абзац о том, что разгоняется, а потом резко останавливается: бег за последним автобусом, пенальти, последние секунды контрольной. Начни спокойно, дай одно длинное предложение-разгон (от 20 слов), а закончи коротким — до четырёх слов.`,
          en: `Write a paragraph about something that speeds up and then stops dead: running for the last bus, a penalty kick, the final seconds of an exam. Start calmly, give one long accelerating sentence (20+ words), and finish with a short one — four words or fewer.`
        },
        config: {
          rules: [
            { kind: 'sentence-lengths' },
            { kind: 'max-words', n: 160 }
          ],
          then: {
            ru: `Прочитай абзац вслух и отметь, где сбилось дыхание. Перепиши его так, чтобы дыхание сбивалось именно там, где нужно тебе, — прямо перед самым важным моментом.`,
            en: `Read the paragraph aloud and mark where you ran out of breath. Rewrite it so that you run out of breath exactly where you want — just before the most important moment.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Перепиши тот же эпизод с обратным эффектом — спокойно и медленно, будто вспоминаешь его через много лет. Реши сам, что даёт покой: плавные длинные фразы без рывков — или короткие, но с воздухом между ними? Сравни версии: какой из них веришь больше?`,
          en: `Rewrite the same episode for the opposite effect — calm and slow, as if you were remembering it years later. Decide for yourself what creates calm: long, smooth sentences with no jolts — or short ones with space around them? Compare the versions: which do you believe more?`
        }
      },
      hint: {
        ru: `Начни с конца: придумай последнюю фразу из одного-двух слов — «Мимо.», «Уехал.», «Звонок.». Теперь напиши всё, что к ней ведёт, одним длинным предложением через «и».`,
        en: `Start at the end: think of a final phrase of one or two words — “Missed.”, “Gone.”, “The bell.” Now write everything leading up to it as one long sentence strung together with “and”.`
      },
      improve: {
        ru: `Найди два соседних предложения одинаковой длины и сделай одно из них вдвое длиннее или вдвое короче. Прочитай вслух до и после.`,
        en: `Find two neighbouring sentences of the same length and make one of them twice as long or half as long. Read it aloud before and after.`
      },
      selfCheck: [
        { ru: `В абзаце есть предложение от 20 слов и хотя бы одно не длиннее четырёх?`, en: `Does the paragraph have one sentence of 20+ words and at least one of four words or fewer?` },
        { ru: `Длинное предложение стоит там, где действие ускоряется?`, en: `Is the long sentence where the action speeds up?` },
        { ru: `Короткая фраза стоит там, где всё останавливается?`, en: `Is the short phrase where everything stops?` },
        { ru: `Я читал текст вслух, а не только глазами?`, en: `Did I read it aloud, not just with my eyes?` }
      ],
      discuss: {
        ru: `Вспомните песню с паузой перед припевом. Как такая пауза выглядит в тексте — точка, отдельная строка, тире, пустая строка между абзацами?`,
        en: `Think of a song with a pause before the chorus. What does a pause like that look like in writing — a full stop, a line on its own, a dash, a blank line between paragraphs?`
      },
      reflect: {
        ru: `Какой темп привычен для твоих текстов — быстрый, медленный, ровный? Хочешь ли ты его менять, или это часть твоего голоса?`,
        en: `What tempo is natural in your writing — fast, slow, even? Do you want to change it, or is it part of your voice?`
      },
      transfer: {
        ru: `Ритм работает везде, где текст читают подряд. В репортаже короткая фраза выделяет главный факт, в рецензии — вердикт, в эссе — поворот мысли. Но в эссе и заявках «рваный» ритм рискован: там ценят ясность, и три фразы по два слова подряд выглядят как поза. Быстрая и спокойная версии абзаца — третья пара «до/после» и заготовка для итоговой страницы маршрута.`,
        en: `Rhythm matters wherever a text is read straight through: in reportage a short sentence highlights the key fact, in a review the verdict, in an essay a turn in the argument. In essays and applications, though, choppy rhythm is risky: three two-word sentences in a row can look like posing. Your fast and calm versions are the third before/after pair and a first draft of the route’s final page.`
      },
      teacher: {
        note: {
          ru: `Приёмы, пришедшие из музыки (темп, повтор, рефрен, крещендо, пауза), — одна из тем мастер-классов Б. Судакова и Н. Фрейман (ВШЭ СПб); музыкальная подготовка не нужна. Обязательно читайте вслух — можно в парах: один читает, другой отстукивает по парте каждую точку, и монотонность становится слышна. Для группы: включите минуту инструментальной музыки с явным нарастанием и паузой и попросите написать абзац в её темпе. Автоматическая проверка считает длину предложений по знакам препинания и может ошибиться на диалогах и многоточиях.`,
          en: `Techniques borrowed from music (tempo, repetition, refrain, crescendo, rest) are one of the topics of B. Sudakov and N. Freiman’s masterclasses at HSE St Petersburg; no musical training is needed. Always read aloud — pairs work well: one reads, the other taps the desk at every full stop, and monotony becomes audible. For a group: play a minute of instrumental music with a clear build-up and pause, and ask for a paragraph at its tempo. The automatic check measures sentences by punctuation and can misjudge dialogue and ellipses.`
        },
        source: ['hse-spb', 'ou-fiction', 'original']
      }
    },

    {
      id: 'style-4',
      route: 'style',
      n: 4,
      minutes: 10,
      skills: ['words', 'scene'],
      genres: ['scene', 'story', 'description', 'reportage'],
      title: { ru: `Сцена без прилагательных — и три обратно`, en: `No adjectives — then bring three back` },
      learn: {
        ru: `Строить сцену на существительных и глаголах, а прилагательные возвращать поштучно — только туда, где без них ломается смысл.`,
        en: `Build a scene on nouns and verbs, and bring adjectives back one at a time — only where the meaning breaks without them.`
      },
      hook: {
        ru: `Прилагательные — самые удобные слова: их можно приставить к чему угодно, и кажется, что текст стал ярче. Часто выходит наоборот: пять прилагательных в предложении звучат как опись имущества. Проверим на практике — напишем сцену совсем без них, а потом вернём ровно три.`,
        en: `Adjectives are the handiest words there are: you can stick one on anything, and the writing seems brighter. Often it works the other way: five adjectives in a sentence read like an inventory. Let’s test it — write a scene with none at all, then bring back exactly three.`
      },
      technique: {
        name: { ru: `Запрет и возвращение`, en: `Ban, then bring back` },
        text: {
          ru: `Запрет — не правило хорошего стиля, а тренажёр. Без прилагательных приходится искать точные существительные («шлёпанцы» вместо «летней обуви») и глаголы («дверь скрипнула» вместо «скрипучая дверь»). Текст становится плотнее.

Потом ты возвращаешь три прилагательных и проверяешь каждое вопросом: *что пропадёт, если его убрать?* Если ничего — оно лишнее. Хорошее прилагательное сообщает то, чего нет в самом слове: «мокрые кеды» говорят о погоде и о том, где человек был, «хорошие кеды» — ни о чём.

Иногда без прилагательного смысл ломается: красный и зелёный свет — это разные сцены.`,
          en: `The ban isn’t a rule of good style; it’s a training device. Without adjectives you have to find precise nouns (“flip-flops” rather than “summer shoes”) and verbs (“the door creaked” rather than “the creaky door”). The writing tightens.

Then you bring back three adjectives and test each one: *what disappears if I cut it?* If nothing, it goes. A good adjective adds what the noun can’t: “wet trainers” tell you about the weather and where someone has been; “nice trainers” tell you nothing.

Sometimes an adjective carries the meaning: a red light and a green light are different scenes.`
        }
      },
      example: {
        before: {
          ru: `Маленькая тёмная прихожая была заставлена разной старой обувью. На узкой деревянной полке стояла большая красная ваза с красивыми сухими цветами. Из дальней комнаты доносился громкий весёлый смех, и пахло чем-то вкусным и сладким.`,
          en: `The small, dark hallway was crammed with various old shoes. On a narrow wooden shelf stood a big red vase of pretty dried flowers. Loud, cheerful laughter came from a distant room, and there was a delicious sweet smell.`
        },
        after: {
          ru: `Пола в прихожей не было видно: кроссовки, шлёпанцы, чьи-то сапоги в разводах соли. На полке ваза, из неё торчат **сухие** ромашки. В комнате хохотали так, что в серванте дребезжали рюмки, а с кухни тянуло карамелью — кто-то опять забыл сковородку на огне.`,
          en: `You couldn’t see the hallway floor: trainers, flip-flops, someone’s boots with tidemarks of road salt. On the shelf, a vase with **dried** daisies sticking out. In the next room people were laughing so hard the glasses rattled in the cabinet, and from the kitchen came the smell of caramel — someone had left a pan on the hob again.`
        },
        changes: [
          {
            ru: `Ярлыки «маленькая», «тёмная», «старой», «красивыми», «вкусным» заменены предметами и действиями: тесноту видно по обуви, веселье слышно по дребезжащим рюмкам.`,
            en: `The labels “small”, “dark”, “old”, “pretty” and “delicious” have become objects and actions: you see the crush in the shoes and hear the fun in the rattling glasses.`
          },
          {
            ru: `Вместо «разной обуви» — три точных названия. Сапоги с солью заодно сообщают время года.`,
            en: `Instead of “various shoes”, three precise names. The salt-stained boots tell you the season as well.`
          },
          {
            ru: `Вернулось одно прилагательное — «сухие». Без него ромашки были бы свежими, и это был бы другой дом. Заменить его нечем, поэтому оно работает.`,
            en: `One adjective came back: “dried”. Without it the daisies would be fresh, and this would be a different home. Nothing else can do its job, so it stays.`
          }
        ]
      },
      exercise: {
        type: 'constraint',
        prompt: {
          ru: `Напиши сцену на 100–150 слов без единого прилагательного. Место выбери сам: раздевалка перед матчем, очередь в поликлинике, кухня в пять утра, двор после дождя. Ищи точные существительные и глаголы.`,
          en: `Write a 100–150-word scene without a single adjective. Choose the place: a changing room before a match, a queue at the doctor’s, a kitchen at five in the morning, a courtyard after rain. Look for precise nouns and verbs.`
        },
        config: {
          rules: [
            { kind: 'ban-adjectives' },
            { kind: 'min-words', n: 100 },
            { kind: 'max-words', n: 150 }
          ],
          then: {
            ru: `Верни в сцену ровно три прилагательных — только те, без которых она не выживет. Перепиши сцену с ними, а под текстом для каждого одной фразой ответь: что пропадёт, если его убрать?`,
            en: `Bring exactly three adjectives back into the scene — only the ones it can’t survive without. Rewrite the scene with them, and underneath answer in one line for each: what would disappear if you cut it?`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Новая сцена на 150–200 слов, где на весь текст не больше трёх прилагательных. Усложнение: в сцене двое, и читатель должен понять, кому из них хочется уйти, хотя об этом никто не говорит.`,
          en: `A new 150–200-word scene with no more than three adjectives in the whole text. The twist: there are two people, and the reader must work out which of them wants to leave, although nobody says so.`
        },
        config: {
          rules: [
            { kind: 'max-adjectives', n: 3 },
            { kind: 'min-words', n: 150 },
            { kind: 'max-words', n: 200 }
          ]
        }
      },
      hint: {
        ru: `Начни с глагола: что в этом месте происходит прямо сейчас? Кто-то роняет, ищет, открывает, ждёт. Потом назови предметы вокруг точными словами: не «сумка», а «пакет из аптеки», не «еда», а «манты в контейнере».`,
        en: `Start with a verb: what is happening in this place right now? Someone drops, searches, opens, waits. Then name the objects around them precisely: not “a bag” but “a carrier bag from the chemist’s”, not “food” but “a tub of manty”.`
      },
      improve: {
        ru: `Найди в сцене самое общее существительное — «вещи», «еда», «люди». Замени его точным: не «люди», а «две медсестры и мальчик с гипсом на руке».`,
        en: `Find the most general noun in your scene — “things”, “food”, “people”. Replace it with a precise one: not “people” but “two nurses and a boy with his arm in plaster”.`
      },
      selfCheck: [
        { ru: `В первой версии нет прилагательных — или я могу объяснить, где счётчик ошибся?`, en: `Does the first version have no adjectives — or can I explain where the counter got it wrong?` },
        { ru: `Вместо прилагательных появились точные существительные и глаголы?`, en: `Have precise nouns and verbs taken the adjectives’ place?` },
        { ru: `Я вернул ровно три прилагательных и для каждого знаю, что пропадёт без него?`, en: `Did I bring back exactly three adjectives, and do I know what each one would take with it if cut?` },
        { ru: `Сцена стала плотнее, а не просто беднее?`, en: `Is the scene tighter, not just barer?` }
      ],
      discuss: {
        ru: `В каких текстах много прилагательных — это хорошо? Например, меню, объявление о продаже, сказка. Почему там это работает?`,
        en: `In which kinds of text are lots of adjectives a good thing? A menu, a “for sale” ad, a fairy tale? Why do they work there?`
      },
      reflect: {
        ru: `Какое прилагательное ты вернул первым? Трудно ли было остановиться на трёх?`,
        en: `Which adjective did you bring back first? Was it hard to stop at three?`
      },
      transfer: {
        ru: `В репортаже прилагательные-оценки («ужасный», «прекрасный») часто подменяют факты — лучше показать то, на чём держится оценка. В рецензии прилагательное нужно, но за ним должен стоять пример. В personal statement «ответственный» и «целеустремлённый» почти всегда слабее одного поступка. Эта пара «до/после» — четвёртая для итога маршрута.`,
        en: `In reportage, judging adjectives (“awful”, “wonderful”) often stand in for facts — show what the judgement rests on instead. In a review you need adjectives, but each one needs an example behind it. In a personal statement, “responsible” and “driven” are almost always weaker than one action. This before/after pair is the fourth for the route’s final collection.`
      },
      teacher: {
        note: {
          ru: `Проверка прилагательных — эвристика: она может принять за прилагательное причастие, порядковое числительное или краткую форму и пропустить редкое слово. Это повод поговорить о частях речи, а не спорить с программой. Главная часть урока — объяснение трёх вернувшихся слов: попросите зачитать только их, это быстро и хорошо показывает, кто выбирал сознательно. Напомните, что запрет — тренировка: в следующих текстах прилагательные снова разрешены.`,
          en: `The adjective check is a heuristic: it may mistake a participle, an ordinal number or a short-form adjective for an adjective, and miss an unusual word. That’s a chance to talk about parts of speech, not to argue with the software. The core of the lesson is the explanation of the three returning words: ask students to read out only those — it’s quick and shows clearly who chose deliberately. Remind them the ban is a drill: adjectives are allowed again in later texts.`
        },
        source: ['ou-fiction', 'owl-cw', 'original']
      }
    },

    {
      id: 'style-5',
      route: 'style',
      n: 5,
      minutes: 9,
      skills: ['words', 'character'],
      genres: ['story', 'scene', 'statement', 'contest'],
      title: { ru: `Покажи чувство, не называя его`, en: `Show the feeling without naming it` },
      learn: {
        ru: `Передавать чувство через действие, тело, предмет и реплику — и понимать, когда всё-таки сильнее назвать его прямо.`,
        en: `Convey a feeling through action, body, object and speech — and recognise when naming it outright is the stronger choice.`
      },
      hook: {
        ru: `«Мне было очень обидно». Читатель верит тебе на слово — но сам ничего не чувствует. А если человек в третий раз проверяет, не пришло ли сообщение, и переворачивает телефон экраном вниз, читатель понимает всё сам. И чувствует вместе с ним.`,
        en: `“I felt really hurt.” The reader takes your word for it — and feels nothing. But if someone checks for a message for the third time and then turns their phone face down, the reader works it out alone. And feels it with them.`
      },
      technique: {
        name: { ru: `Четыре канала чувства`, en: `Four channels for a feeling` },
        text: {
          ru: `Чувство почти всегда просачивается наружу. Ищи его в четырёх местах:
- **действие** — что человек делает или вдруг перестаёт делать;
- **тело** — руки, дыхание, голос, но без готовых формул вроде «ком в горле»;
- **предмет** — во что вцепляются взгляд или пальцы;
- **реплика** — что человек говорит, особенно если говорит не о том.

Все четыре сразу не нужны: часто хватает одного точного.

Нюанс: иногда назвать чувство прямо — самое сильное решение. Короткое «Мне было страшно» после длинной сдержанной сцены звучит как признание. Запрет в этом уроке — упражнение, а не закон.`,
          en: `A feeling almost always leaks out. Look for it in four places:
- **action** — what the person does, or suddenly stops doing;
- **body** — hands, breath, voice, but without stock phrases like “a lump in my throat”;
- **object** — what their eyes or fingers fasten on;
- **speech** — what they say, especially if they talk about something else.

You don’t need all four: one precise channel is often enough.

The nuance: sometimes naming the feeling plainly is the strongest move. A short “I was scared” after a long, restrained scene sounds like a confession. The ban in this lesson is an exercise, not a law.`
        }
      },
      example: {
        before: {
          ru: `Результаты олимпиады должны были выложить в шесть. Я очень волновалась и не могла ни на чём сосредоточиться. Когда я увидела, что меня нет в списке, мне стало грустно и обидно.`,
          en: `The olympiad results were supposed to go up at six. I was really nervous and couldn’t concentrate on anything. When I saw I wasn’t on the list, I felt sad and hurt.`
        },
        after: {
          ru: `Результаты олимпиады обещали выложить в шесть. В 17:52 я уже обновляла страницу. В 18:05 читала список в третий раз — медленно, ведя пальцем по экрану, будто свою фамилию можно пропустить. Мама крикнула из кухни, что плов готов. «Я потом», — ответила я и пошла чистить зубы, хотя не было и семи.`,
          en: `The olympiad results were due at six. At 17:52 I was already refreshing the page. At 18:05 I was reading the list for the third time — slowly, running my finger down the screen, as if I could have missed my own name. Mum called from the kitchen that the plov was ready. “I’ll have it later,” I said, and went to brush my teeth, though it wasn’t even seven.`
        },
        changes: [
          {
            ru: `Слова «волновалась», «грустно», «обидно» исчезли. Волнение показывают часы: 17:52 — за восемь минут до срока.`,
            en: `The words “nervous”, “sad” and “hurt” have gone. The clock shows the nerves: 17:52 is eight minutes early.`
          },
          {
            ru: `Разочарование видно по телу и действию: палец по экрану, третье перечитывание, зубы в семь вечера. Такие странные поступки люди правда совершают — поэтому им веришь.`,
            en: `The disappointment is in the body and the actions: a finger down the screen, a third reading, teeth-brushing before seven. People really do odd things like that — which is why you believe it.`
          },
          {
            ru: `Реплика «Я потом» говорит о чувстве, не называя его: героиня отказывается и от плова, и от разговора.`,
            en: `“I’ll have it later” speaks for the feeling without naming it: she is turning down both the plov and the conversation.`
          }
        ]
      },
      exercise: {
        type: 'constraint',
        prompt: {
          ru: `Выбери ситуацию: ждёшь результатов, неожиданно встречаешь человека, которого не хотел видеть, узнаёшь, что тебя не добавили в общий чат. Напиши 100–150 слов и не называй чувство. Используй хотя бы два канала из четырёх: действие, тело, предмет, реплика.`,
          en: `Choose a situation: waiting for results, bumping into someone you didn’t want to see, finding out you’ve been left out of a group chat. Write 100–150 words without naming the feeling. Use at least two of the four channels: action, body, object, speech.`
        },
        config: {
          rules: [
            { kind: 'ban-emotions' },
            { kind: 'min-words', n: 100 },
            { kind: 'max-words', n: 150 }
          ],
          then: {
            ru: `Допиши в конце одно предложение, где чувство названо прямо, и перечитай обе версии. Текст стал сильнее или слабее? Оставь ту, которую выбрал сам, и объясни выбор одной фразой.`,
            en: `Add one sentence at the end that names the feeling outright, then reread both versions. Is the text stronger or weaker? Keep the one you choose, and explain the choice in one line.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Покажи в одном персонаже два противоречивых чувства сразу. Например, он рад за друга, которого взяли в команду, куда не взяли его самого. Или она скучает по старому городу — и счастлива, что уехала. Чувства не называй: пусть действие говорит одно, а реплика другое.`,
          en: `Show two conflicting feelings in one character at the same time. For instance, he’s pleased for a friend who got into the team he didn’t. Or she misses her old town — and is glad she left. Don’t name either feeling: let the action say one thing and the speech another.`
        },
        config: {
          rules: [
            { kind: 'ban-emotions' },
            { kind: 'max-words', n: 200 }
          ]
        }
      },
      hint: {
        ru: `Начни с предмета в руках героя. Что он держит, пока ждёт или слушает: телефон, ключи, стаканчик чая? Напиши, что он с этим предметом делает, — первое предложение готово.`,
        en: `Start with the object in the character’s hands. What are they holding while they wait or listen: a phone, keys, a paper cup of tea? Write what they are doing with it — and your first sentence is done.`
      },
      improve: {
        ru: `Найди место, где читатель может не понять, что чувствует герой, и добавь одну деталь тела или одну реплику — но не объяснение. Если деталей, наоборот, слишком много, оставь самую точную.`,
        en: `Find a spot where the reader might not grasp what the character feels, and add one bodily detail or one line of speech — not an explanation. If there are too many details instead, keep the sharpest one.`
      },
      selfCheck: [
        { ru: `В тексте нет прямых названий чувств — или одно, оставленное сознательно?`, en: `Are there no named feelings in the text — or just one, kept on purpose?` },
        { ru: `Я использовал хотя бы два канала: действие, тело, предмет, реплику?`, en: `Did I use at least two channels: action, body, object, speech?` },
        { ru: `Читатель, не зная задания, угадает чувство?`, en: `Would a reader who doesn’t know the task guess the feeling?` },
        { ru: `В описании тела нет готовых формул вроде «ком в горле» или «сердце сжалось»?`, en: `Is the body free of stock phrases like “a lump in my throat” or “my heart sank”?` }
      ],
      discuss: {
        ru: `Когда прямое «мне было страшно» сильнее любой детали? Найдите пример в книге, фильме или песне.`,
        en: `When is a plain “I was scared” stronger than any detail? Find an example in a book, a film or a song.`
      },
      reflect: {
        ru: `Какой из четырёх каналов тебе ближе? Что это говорит о том, как ты сам замечаешь чувства других людей?`,
        en: `Which of the four channels comes most naturally to you? What does that say about how you notice other people’s feelings?`
      },
      transfer: {
        ru: `В рассказе чувство через действие — основной инструмент. В репортаже о чужих чувствах пишут только через наблюдаемое: ты не знаешь, что человеку было тяжело, ты видел, что он делал. В personal statement деталь должна быть правдой, а смысл иногда стоит назвать прямо. Эта пара «до/после» — пятая для итога маршрута.`,
        en: `In a story, feeling-through-action is the main tool. In reportage you can write about other people’s feelings only through what you observed: you don’t know someone was struggling, you saw what they did. In a personal statement the detail must be true, and sometimes the meaning is worth saying outright. This before/after pair is the fifth for the route’s final collection.`
      },
      personalAlt: {
        ru: `Не хочешь писать о себе — возьми выдуманного героя или человека, которого видел со стороны: парень на остановке пропускает уже третий автобус, девушка в кафе всё время смотрит на дверь.`,
        en: `If you’d rather not write about yourself, use an invented character or someone you’ve watched from a distance: a boy at a bus stop letting a third bus go by, a girl in a café who keeps looking at the door.`
      },
      teacher: {
        note: {
          ru: `Тема может задеть личное: разрешите выдуманного героя с самого начала и не просите читать вслух тексты о себе. Автоматическая проверка ищет слова из словаря чувств: она не поймает «сердце сжалось» и может пропустить редкую форму. Обсудите, почему готовая формула тела — та же табличка с названием чувства. Шаг «допиши прямое название» важен: он показывает, что приём — выбор, а не запрет. Урок перекликается с темой эмпатии в мастер-классах ВШЭ: прямая речь, деталь, контраст.`,
          en: `The topic can get personal: allow an invented character from the start, and don’t ask students to read aloud texts about themselves. The automatic check looks for words from a list of feelings: it won’t catch “my heart sank” and may miss an unusual form. Discuss why a stock bodily phrase is just the feeling’s name in disguise. The “add a sentence that names it” step matters: it shows the technique is a choice, not a ban. The lesson echoes the HSE masterclass on empathy: direct speech, detail, contrast.`
        },
        source: ['ou-fiction', 'ou-know', 'hse-spb', 'original']
      }
    },

    {
      id: 'style-6',
      route: 'style',
      n: 6,
      minutes: 10,
      skills: ['voice'],
      genres: ['story', 'scene', 'free', 'statement'],
      title: { ru: `Голос и тон: кто говорит?`, en: `Voice and tone: who is speaking?` },
      learn: {
        ru: `Строить голос рассказчика из словаря, синтаксиса и того, что он замечает, — и удерживать его до конца текста.`,
        en: `Build a narrator’s voice out of vocabulary, syntax and what they notice — and keep it steady to the end.`
      },
      hook: {
        ru: `В школе отключили свет. Старшеклассники расскажут об этом как о празднике, директор — как о катастрофе, а повариха в столовой — как о трагедии двухсот сорока котлет. Событие одно, текстов три. Голос — это не «как красиво написать», а кто смотрит и какими словами думает.`,
        en: `The power goes off at school. The older students will tell it as a holiday, the head as a disaster, and the canteen cook as the tragedy of two hundred and forty meatballs. One event, three texts. Voice isn’t about “writing nicely”; it’s about who is looking, and what words they think in.`
      },
      technique: {
        name: { ru: `Словарь, синтаксис, фокус`, en: `Vocabulary, syntax, focus` },
        text: {
          ru: `Голос рассказчика складывается из трёх вещей:
- **словарь** — какие слова человек знает и любит («между прочим», «типа», «надлежащим образом»);
- **синтаксис** — длинные рассуждения или обрывки, вопросы, восклицания;
- **фокус** — что он замечает первым, а что пропускает.

Тон — отношение к событию: ворчание, восторг, ирония, тревога. Один и тот же снег можно описать в любом тоне.

Чтобы голос зазвучал, хватит двух-трёх примет, повторённых последовательно. Карикатура начинается, когда примета одна и её слишком много: бабушка, которая в каждой фразе говорит «ох, молодёжь», — уже не человек, а маска.`,
          en: `A narrator’s voice is made of three things:
- **vocabulary** — the words this person knows and likes (“if you please”, “literally”, “in an orderly fashion”);
- **syntax** — long musings or fragments, questions, exclamations;
- **focus** — what they notice first, and what they miss.

Tone is their attitude to the event: grumbling, delight, irony, worry. The same snowfall can be told in any tone.

Two or three markers, used consistently, are enough for a voice to come through. Caricature starts when there’s one marker and too much of it: a grandmother who says “young people these days” in every line is a mask, not a person.`
        }
      },
      example: {
        before: {
          ru: `В среду в школе отключили электричество. Уроки отменили, и учеников отпустили домой раньше. В столовой остались невостребованные обеды.`,
          en: `On Wednesday the school lost power. Lessons were cancelled and the students were sent home early. The canteen was left with uneaten lunches.`
        },
        after: {
          ru: `Свет вырубили в 11:40. А у меня двести сорок котлет в духовке, между прочим. Директор бегает, завуч бегает, дети орут «ура» — им-то что. А котлеты кто спасать будет? Я их на газу, по одной сковородке, три часа. Отпустили всех в двенадцать. Ни один не зашёл поесть. Ни один. Ничего. Завтра на обед — котлеты.`,
          en: `Power went at 11:40. And me with two hundred and forty meatballs in the oven, if you please. The head’s running about, the deputy’s running about, the kids are shouting “yes!” — what do they care. And who’s going to save the meatballs? Me, on the gas, one pan at a time, three hours. They sent everyone home at twelve. Not one of them came in to eat. Not one. Never mind. Tomorrow’s lunch: meatballs.`
        },
        changes: [
          {
            ru: `Словарь: «вырубили», «между прочим», «им-то что» — разговорная речь человека, который привык командовать на кухне, а не писать отчёты.`,
            en: `Vocabulary: “power went”, “if you please”, “what do they care” — the speech of someone used to running a kitchen, not writing reports.`
          },
          {
            ru: `Фокус: из всей истории с отключением она видит только котлеты. То, что человек замечает, делает голос узнаваемым быстрее любых слов.`,
            en: `Focus: out of the whole power cut, she sees only the meatballs. What a person notices makes a voice recognisable faster than any vocabulary.`
          },
          {
            ru: `Синтаксис и тон: короткие фразы, повтор «Ни один. Ни один.», ворчание — и финальная реплика, которая показывает характер лучше любого описания.`,
            en: `Syntax and tone: short phrases, the repeated “Not one… Not one.”, the grumbling — and a last line that shows character better than any description.`
          }
        ]
      },
      exercise: {
        type: 'columns',
        prompt: {
          ru: `Выбери одно маленькое событие и расскажи о нём тремя голосами, по 60–100 слов на каждый. Любого рассказчика можно заменить своим — главное, чтобы все трое были очень разными.`,
          en: `Choose one small event and tell it in three voices, 60–100 words each. You can swap any narrator for one of your own — as long as all three are very different.`
        },
        config: {
          shared: {
            ru: `Событие: в городе выпал первый снег — или отменили последний урок. Выбери одно и держись его во всех трёх колонках.`,
            en: `The event: the first snow has fallen in the city — or the last lesson of the day has been cancelled. Pick one and stick to it in all three columns.`
          },
          columns: [
            { label: { ru: `Ворчливая бабушка`, en: `A grumbling grandmother` }, placeholder: { ru: `Что она замечает первым? С чем сравнивает?`, en: `What does she notice first? What does she compare it with?` } },
            { label: { ru: `Семилетний ребёнок`, en: `A seven-year-old` }, placeholder: { ru: `Какие слова он знает, а каких ещё нет?`, en: `Which words do they know, and which not yet?` } },
            { label: { ru: `Охранник торгового центра`, en: `A shopping-centre security guard` }, placeholder: { ru: `Как это выглядит с его поста?`, en: `How does it look from where he’s posted?` } }
          ],
          then: {
            ru: `Выбери голос, который получился живее всех, и выпиши слова, которые его создают. Потом допиши этим голосом ещё 3–4 предложения так, чтобы он не сбился.`,
            en: `Pick the voice that came out most alive and list the words that create it. Then add 3–4 more sentences in that voice without letting it slip.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Напиши 150 слов голосом, совсем не похожим на твой: другой возраст, профессия, эпоха — или вообще не человек (школьный звонок, лифт, кот). Удержи голос до конца.`,
          en: `Write 150 words in a voice nothing like your own: a different age, job or era — or not a person at all (the school bell, a lift, a cat). Keep the voice steady to the end.`
        },
        config: {
          rules: [
            { kind: 'min-words', n: 130 },
            { kind: 'max-words', n: 170 }
          ],
          then: {
            ru: `Перечисли слова и обороты, которые создают этот голос. Какой из них самый точный, а какой ближе всего к карикатуре?`,
            en: `List the words and phrases that create this voice. Which is the most precise, and which comes closest to caricature?`
          }
        }
      },
      hint: {
        ru: `Начни не с события, а с первой реплики рассказчика, будто он говорит вслух: «Ну вот, опять…», «А я первый увидел!», «Смена началась в семь ноль-ноль». Одна фраза задаёт словарь и тон — дальше держись их.`,
        en: `Don’t start with the event; start with the narrator’s first line, as if spoken aloud: “Here we go again…”, “I saw it first!”, “Shift started at oh-seven-hundred.” One line sets the vocabulary and tone — then stick to them.`
      },
      improve: {
        ru: `Найди в одном из текстов фразу, где голос сбился — прозвучал ты сам, а не рассказчик. Перепиши её его словами.`,
        en: `In one of your texts, find the sentence where the voice slipped — where you came through instead of the narrator. Rewrite it in their words.`
      },
      selfCheck: [
        { ru: `Если закрыть подписи колонок, можно угадать, кто говорит?`, en: `If you covered the column labels, could someone guess who is speaking?` },
        { ru: `У каждого рассказчика свой фокус — он замечает своё?`, en: `Does each narrator have their own focus — do they notice different things?` },
        { ru: `Голос держится до конца и не сбивается на мой собственный?`, en: `Does the voice hold to the end without sliding back into my own?` },
        { ru: `Рассказчики — живые люди, а не карикатуры с одной повторяющейся приметой?`, en: `Are the narrators real people rather than caricatures built on one repeated tic?` }
      ],
      discuss: {
        ru: `Можно ли писать голосом человека другого возраста или происхождения и не насмехаться над ним? Где граница между голосом и карикатурой?`,
        en: `Can you write in the voice of someone of a different age or background without mocking them? Where is the line between a voice and a caricature?`
      },
      reflect: {
        ru: `Какой голос дался тебе легче всего? Чем он похож на твой собственный?`,
        en: `Which voice came most easily to you? How is it like your own?`
      },
      transfer: {
        ru: `В рассказе можно взять любой голос, даже совсем чужой. В репортаже голос автора сдержанный, зато герои звучат в прямой речи — точно, без искажений. В эссе и personal statement нужен твой собственный голос, и этот урок помогает расслышать его от противного. Итог маршрута — страница с управляемым ритмом и тоном: выбери для неё голос сознательно.`,
        en: `In a story you can borrow any voice, however far from yours. In reportage the writer’s voice stays restrained, while the people in it speak in direct quotes — accurately, undistorted. An essay or personal statement needs your own voice, and this lesson helps you hear it by contrast. The route ends with a page of deliberate rhythm and tone: choose its voice on purpose.`
      },
      teacher: {
        note: {
          ru: `Хорошо работает игра: ученик читает одну колонку, группа угадывает рассказчика. Заранее обсудите разницу между голосом и насмешкой: бабушка может ворчать, но не должна становиться анекдотом, а акцент или возраст — поводом для шутки. Сильным ученикам предложите рассказчика, который чего-то не понимает (как дети у Ричмал Кромптон): читатель видит больше, чем он сам, — отсюда ирония. Для итоговой страницы маршрута попросите соединить голос из этого урока с ритмом из урока 3.`,
          en: `A guessing game works well: a student reads one column and the group guesses the narrator. Discuss the difference between voice and mockery beforehand: a grandmother can grumble, but she shouldn’t become a joke, and an accent or age shouldn’t be the punchline. Offer stronger students a narrator who doesn’t quite understand what’s going on (like Richmal Crompton’s children): the reader sees more than the narrator does, and that’s where the irony comes from. For the route’s final page, ask students to combine the voice from this lesson with the rhythm from lesson 3.`
        },
        source: ['hse-spb', 'ou-fiction', 'original']
      }
    }
  ]);
})();
