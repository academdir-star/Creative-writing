/* Route: admit — Поступление и стипендии / Admissions and scholarships. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'admit-1',
      route: 'admit',
      n: 1,
      minutes: 10,
      skills: ['reflection', 'structure'],
      genres: ['statement', 'scholarship', 'contest'],
      title: { ru: `Из события к смыслу`, en: `From event to meaning` },
      learn: {
        ru: `Проводить событие через четыре шага — что было, что я сделал, что понял, как изменился — и проверять вывод вопросом «ну и что?».`,
        en: `Take an event through four steps — what happened, what I did, what I understood, how I changed — and test the conclusion with “so what?”.`
      },
      hook: {
        ru: `Приёмная комиссия читает не историю твоей жизни, а то, как ты о ней думаешь. Одно и то же событие — проигранный матч, переезд, сломанный велосипед — может дать и пустое эссе, и сильное. Разница не в событии, а в том, что ты из него вынес и можешь ли это показать.`,
        en: `An admissions reader isn’t reading the story of your life but how you think about it. The same event — a lost match, a house move, a broken bike — can produce an empty essay or a strong one. The difference isn’t the event; it’s what you took from it and whether you can show it.`
      },
      technique: {
        name: { ru: `Четыре шага и «ну и что?»`, en: `Four steps and “so what?”` },
        text: {
          ru: `Раздели историю на четыре части:

- **Что произошло** — только факты: где, когда, кто, что.
- **Что я сделал** — поступки, а не намерения.
- **Что я понял** — мысль, которой раньше у тебя не было.
- **Как я изменился** — доказательство: что ты теперь делаешь иначе.

Потом задай своему выводу вопрос «ну и что?». «Я понял, что важна командная работа» — ну и что? Так мог бы написать кто угодно. Спрашивай дальше, пока вывод не станет твоим. Осторожно с финалом «Этот опыт научил меня, что…»: часто он подменяет мысль моралью.`,
          en: `Split the story into four parts:

- **What happened** — facts only: where, when, who, what.
- **What I did** — actions, not intentions.
- **What I understood** — a thought you didn’t have before.
- **How I changed** — the evidence: what you do differently now.

Then ask your conclusion “so what?”. “I learned that teamwork matters” — so what? Anyone could write that. Keep asking until the conclusion belongs to you. Beware of endings like “This experience taught me that…”: they often swap a thought for a moral.`
        }
      },
      example: {
        before: {
          ru: `Прошлым летом я помогал вожатым в детском лагере. Это был очень ценный опыт. Я узнал много нового о детях и о себе. Этот опыт научил меня ответственности и терпению. Я понял, что работать с людьми непросто, но интересно.`,
          en: `Last summer I helped out as an assistant at a children’s camp. It was a very valuable experience. I learned a lot about children and about myself. This experience taught me responsibility and patience. I realised that working with people is hard but interesting.`
        },
        after: {
          ru: `В июле мне доверили девять семилеток на тихий час. В первый же день Тимур залез на подоконник и отказался ложиться. Я не стал спорить: сел рядом с книгой и начал читать вслух — всем. Через двадцать минут Тимур лёг, чтобы лучше слышать.

Я думал, ответственность — это следить за правилами. Оказалось, иногда это найти, чем правило заменить. Теперь, когда младший брат упирается, я сначала ищу свой подоконник.`,
          en: `In July I was put in charge of nine seven-year-olds during quiet hour. On the very first day Timur climbed onto the windowsill and refused to lie down. I didn’t argue: I sat beside him with a book and started reading aloud — to everyone. Twenty minutes later Timur lay down so he could hear better.

I used to think responsibility meant enforcing rules. It turns out it sometimes means finding something to replace a rule with. Now, when my little brother digs his heels in, I look for my windowsill first.`
        },
        changes: [
          {
            ru: `«Ценный опыт» и «много нового» заменены одним эпизодом: время, имя, действие.`,
            en: `“A valuable experience” and “learned a lot” are replaced by one episode: a time, a name, an action.`
          },
          {
            ru: `«Научил ответственности» стало мыслью, за которой можно проследить: как автор понимал ответственность раньше и как теперь.`,
            en: `“Taught me responsibility” becomes a thought you can follow: how the writer understood responsibility before, and how now.`
          },
          {
            ru: `Изменение доказано поступком в настоящем, а не объявлено.`,
            en: `The change is proved by what the writer does now, rather than announced.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Выбери одно событие — оно может быть совсем небольшим — и проведи его через четыре шага. В каждом поле пиши коротко и конкретно.`,
          en: `Choose one event — it can be quite a small one — and take it through the four steps. Keep each field short and specific.`
        },
        config: {
          fields: [
            {
              id: 'happened',
              label: { ru: `Что произошло (только факты)`, en: `What happened (facts only)` },
              hint: { ru: `Где, когда, кто был рядом, что случилось. Без оценок: не «ужасный день», а «в 8 утра отменили рейс».`, en: `Where, when, who was there, what happened. No verdicts: not “a terrible day” but “at 8 a.m. the flight was cancelled”.` },
              rows: 3
            },
            {
              id: 'did',
              label: { ru: `Что я сделал`, en: `What I did` },
              hint: { ru: `Глаголы действия: позвонил, остался, отказался, переделал. Не «я старался», а что именно ты делал.`, en: `Action verbs: rang, stayed, refused, redid. Not “I tried hard” — what exactly did you do?` },
              rows: 3
            },
            {
              id: 'understood',
              label: { ru: `Что я понял`, en: `What I understood` },
              hint: { ru: `Мысль, которой у тебя не было до этого. Задай ей «ну и что?» хотя бы дважды.`, en: `A thought you didn’t have before. Ask it “so what?” at least twice.` }
            },
            {
              id: 'changed',
              label: { ru: `Как я изменился: доказательство`, en: `How I changed: the evidence` },
              hint: { ru: `Что ты теперь делаешь иначе? Один конкретный поступок после этого события.`, en: `What do you do differently now? One specific action since the event.` }
            }
          ],
          then: {
            ru: `Собери из полей текст на 150–200 слов. Факты можно выбирать и сжимать, но не придумывать. Не заканчивай фразой «Этот опыт научил меня…» — закончи поступком или деталью из поля «Как я изменился».`,
            en: `Turn the fields into a text of 150–200 words. You may select and compress facts, but not invent them. Don’t end with “This experience taught me…” — end with an action or detail from the “How I changed” field.`
          }
        }
      },
      harder: {
        type: 'list',
        prompt: {
          ru: `Лестница «ну и что?»: запиши свой вывод и задай ему этот вопрос три раза подряд. Каждый ответ — на ступеньку глубже предыдущего.`,
          en: `The “so what?” ladder: write down your conclusion and ask it that question three times in a row. Each answer goes one step deeper than the last.`
        },
        config: {
          count: 4,
          labels: [
            { ru: `Мой вывод`, en: `My conclusion` },
            { ru: `Ну и что? (1)`, en: `So what? (1)` },
            { ru: `Ну и что? (2)`, en: `So what? (2)` },
            { ru: `Ну и что? (3)`, en: `So what? (3)` }
          ],
          then: {
            ru: `Какая ступенька самая честная и больше всего похожа на тебя? Перепиши финал своего текста, опираясь на неё.`,
            en: `Which step is the most honest and the most like you? Rewrite the ending of your text from that step.`
          }
        }
      },
      hint: {
        ru: `Начни с поля «Что я сделал»: вспомни один глагол — что ты сделал руками или сказал вслух. Событие вокруг него вспомнится само. Если ничего не приходит, начни с «В тот день я впервые…».`,
        en: `Start with the “What I did” field: think of one verb — something you did with your hands or said out loud. The event around it will come back on its own. If nothing comes, start with “That day, for the first time, I…”.`
      },
      improve: {
        ru: `Найди в своём тексте фразу с «я понял», «я осознал» или «этот опыт научил меня». Задай ей «ну и что?» и замени ответом — или поступком, который эту мысль доказывает.`,
        en: `Find a sentence in your text with “I realised”, “I understood” or “this experience taught me”. Ask it “so what?” and replace it with the answer — or with an action that proves the thought.`
      },
      selfCheck: [
        { ru: `В поле «Что произошло» только факты, без оценок?`, en: `Does the “What happened” field contain only facts, no verdicts?` },
        { ru: `В тексте есть хотя бы один поступок, а не только мысли?`, en: `Is there at least one action in the text, not just thoughts?` },
        { ru: `Мой вывод прошёл вопрос «ну и что?» — его не мог бы написать кто угодно?`, en: `Has my conclusion survived “so what?” — could not just anyone have written it?` },
        { ru: `Изменение показано через то, что я делаю теперь?`, en: `Is the change shown through what I do now?` },
        { ru: `Всё, что я написал, — правда?`, en: `Is everything I wrote true?` }
      ],
      discuss: {
        ru: `Почему сломанный велосипед иногда даёт более сильное эссе, чем победа на олимпиаде?`,
        en: `Why can a broken bike sometimes make a stronger essay than winning an olympiad?`
      },
      reflect: {
        ru: `Какой вывод ты написал сначала, а какой — после вопроса «ну и что?»? Какой из них больше похож на тебя?`,
        en: `Which conclusion did you write first, and which after asking “so what?”? Which one sounds more like you?`
      },
      transfer: {
        ru: `Шаги «событие → действие → смысл» — скелет рефлексии в любом жанре. В рассказе смысл не объясняют: его показывает поступок героя. В репортаже рефлексии почти нет. В конкурсном эссе и personal statement она обязательна, но работает, только если опирается на конкретное событие.`,
        en: `The steps “event → action → meaning” are the skeleton of reflection in any genre. In a story the meaning isn’t explained: the character’s actions show it. Reportage has almost no reflection. In a competition essay or personal statement it’s essential — but it only works when it rests on a specific event.`
      },
      personalAlt: {
        ru: `Если не хочешь писать о личном, возьми небольшое событие без семьи и переживаний: как ты учился новому навыку (узлы, код, пирог), как чинил сломанную вещь, неудачная попытка на кружке или тренировке. Маленькие события работают не хуже больших.`,
        en: `If you’d rather not write about anything personal, take a small event with no family or feelings in it: learning a new skill (knots, code, a pie), fixing something that broke, a failed attempt at a club or training session. Small events work just as well as big ones.`
      },
      teacher: {
        note: {
          ru: `Ученики часто думают, что для personal statement нужна драма. Разубедите их: сильные эссе часто вырастают из маленьких событий. Не просите рассказывать о травме и не называйте её «лучшей темой». Если ученик сам выбрал тяжёлую тему, текст читаете только вы и только с его согласия. «Ну и что?» задавайте мягко: это вопрос к мысли, а не к ценности опыта. Пример из Essays That Worked, где сильная сцена заканчивается списком уроков, хорошо подходит для обсуждения: доверяй сцене.`,
          en: `Students often think a personal statement needs drama. Talk them out of it: strong essays often grow from small events. Don’t ask for stories of trauma and don’t call trauma “the best topic”. If a student chooses a hard subject themselves, only you read it, and only with their consent. Ask “so what?” gently: it questions the thought, not the worth of the experience. The Essays That Worked sample in which a vivid scene ends in a list of lessons makes a good discussion point: trust the scene.`
        },
        source: ['sawyer', 'etw', 'owl-cnf', 'original']
      }
    },

    {
      id: 'admit-2',
      route: 'admit',
      n: 2,
      minutes: 10,
      skills: ['reflection', 'ideas'],
      genres: ['statement', 'scholarship'],
      title: { ru: `Ценности: что для тебя правда важно`, en: `Values: what actually matters to you` },
      learn: {
        ru: `Выбирать свои ценности и находить для каждой конкретный момент-доказательство, из которого может вырасти эссе.`,
        en: `Choose your values and find a concrete moment of evidence for each — the kind of moment an essay can grow from.`
      },
      hook: {
        ru: `«Для меня важны честность, семья и саморазвитие» — так могут написать тысячи людей, и все будут правы. Ценность становится твоей, когда за ней стоит момент: когда ты поступил по ней — или не поступил и до сих пор это помнишь.`,
        en: `“Honesty, family and self-improvement matter to me” — thousands of people could write that, and they’d all be telling the truth. A value becomes yours when there’s a moment behind it: a time you acted on it, or didn’t, and still remember.`
      },
      technique: {
        name: { ru: `Ценность плюс улика`, en: `A value plus evidence` },
        text: {
          ru: `Выбери три ценности — те, что про тебя, а не «правильные»:

- **Принадлежность:** дружба, семья, доверие, забота, традиции.
- **Рост:** любопытство, мастерство, смелость, независимость, упорство.
- **Влияние:** справедливость, помощь, честность, ответственность, инициатива.
- **Смысл:** творчество, красота, свобода, юмор, спокойствие.

Для каждой спроси: «Когда я поступил по ней, хотя это было неудобно?» Нужен один момент: где, когда, что ты сделал. Не нашёлся — это тоже ответ: может, ценность «правильная», но не твоя. Или вспомни момент, когда ты по ней *не* поступил: такие истории бывают самыми честными.`,
          en: `Choose three values — ones that are really you, not the ones that sound right:

- **Belonging:** friendship, family, trust, care, tradition.
- **Growth:** curiosity, mastery, courage, independence, persistence.
- **Impact:** fairness, helping others, honesty, responsibility, initiative.
- **Meaning:** creativity, beauty, freedom, humour, calm.

For each, ask: “When did I act on this even though it was inconvenient?” You need one moment: where, when, what you did. Can’t find one? That’s an answer too — maybe the value sounds right but isn’t yours. Or recall a time you *didn’t* act on it: those stories are often the most honest.`
        }
      },
      example: {
        before: {
          ru: `Моя главная ценность — ответственность. Я всегда ответственно отношусь ко всему: к учёбе, к друзьям и к своим обязанностям. Ответственность помогает мне добиваться целей.`,
          en: `My main value is responsibility. I am always responsible about everything: my studies, my friends and my duties. Responsibility helps me achieve my goals.`
        },
        after: {
          ru: `В восьмом классе учительница биологии спросила, кто покормит рыб в кабинете «на недельку». Никто не поднял руку, и я подняла. Прошло два года. Я знаю, что сом Фёдор не ест корм, пока тот плавает на поверхности, и что перед каникулами надо договориться с охранником о ключе. Никто этого не проверяет. Рыбы просто живы.`,
          en: `In Year 9 the biology teacher asked who would feed the classroom fish “just for a week”. Nobody put a hand up, so I did. That was two years ago. I know that Fyodor the catfish won’t eat his food while it’s floating, and that before the holidays you have to sort out the key with the caretaker. Nobody checks. The fish are simply alive.`
        },
        changes: [
          {
            ru: `Утверждение «я всегда ответственна» заменено одним долгим обязательством, которое можно проверить.`,
            en: `The claim “I am always responsible” is replaced by one long commitment that could be checked.`
          },
          {
            ru: `Деталь про сома, который не ест плавающий корм, показывает, что автор делала это по-настоящему и долго.`,
            en: `The detail about the catfish who won’t eat floating food shows the writer really did this, and for a long time.`
          },
          {
            ru: `Слово «ответственность» ни разу не прозвучало — ценность видна по поступкам.`,
            en: `The word “responsibility” never appears — the value is visible in the actions.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Выбери три ценности из списка в приёме (или назови свои) и для каждой найди момент-доказательство: когда ты поступил по ней — или не поступил.`,
          en: `Choose three values from the list in the technique (or name your own) and find a moment of evidence for each: a time you acted on it — or didn’t.`
        },
        config: {
          fields: [
            {
              id: 'value1',
              label: { ru: `Ценность 1`, en: `Value 1` },
              hint: { ru: `Одно слово из списка или своё.`, en: `One word from the list, or your own.` },
              rows: 1
            },
            {
              id: 'moment1',
              label: { ru: `Момент для ценности 1`, en: `A moment for value 1` },
              hint: { ru: `Где, когда, что ты сделал. Можно момент, когда ты по ней не поступил.`, en: `Where, when, what you did. It can be a time you didn’t act on it.` },
              rows: 3
            },
            {
              id: 'value2',
              label: { ru: `Ценность 2`, en: `Value 2` },
              rows: 1
            },
            {
              id: 'moment2',
              label: { ru: `Момент для ценности 2`, en: `A moment for value 2` },
              hint: { ru: `Лучше из другой части жизни, чем первый: учёба, дом, хобби, улица.`, en: `Ideally from a different part of life than the first: school, home, a hobby, out and about.` },
              rows: 3
            },
            {
              id: 'value3',
              label: { ru: `Ценность 3`, en: `Value 3` },
              rows: 1
            },
            {
              id: 'moment3',
              label: { ru: `Момент для ценности 3`, en: `A moment for value 3` },
              hint: { ru: `Маленький момент подходит: очередь, общий чат, последняя минута перед звонком.`, en: `A small moment will do: a queue, a group chat, the last minute before the bell.` },
              rows: 3
            }
          ],
          then: {
            ru: `Какой из трёх моментов мог бы стать эссе? Выбери один и объясни в 3–4 предложениях: что в нём происходит, какая ценность видна без называния и что о тебе из него узнает читатель, чего нет в списке твоих наград.`,
            en: `Which of the three moments could carry an essay? Pick one and explain in 3–4 sentences: what happens in it, which value shows without being named, and what a reader would learn about you from it that isn’t in your list of achievements.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Покажи свои три ценности человеку, которому доверяешь (другу, родственнику, тренеру), — без моментов. Спроси: «Похоже на меня? Что бы ты добавил?» Запиши ответ и свою реакцию: что совпало, что удивило, с чем ты не согласен и почему. Если чужой взгляд напомнил тебе новый момент, запиши и его.`,
          en: `Show your three values to someone you trust (a friend, a relative, a coach) — without the moments. Ask: “Does this sound like me? What would you add?” Write down their answer and your reaction: what matched, what surprised you, what you disagree with and why. If their view reminded you of a new moment, note that down too.`
        }
      },
      hint: {
        ru: `Не начинай с ценности — начни с поступка. На что ты тратил время на прошлой неделе без чьей-то просьбы? Какая ценность за этим стоит? Или закончи фразу «Меня злит, когда…»: злость часто указывает на ценность.`,
        en: `Don’t start with the value — start with an action. What did you spend time on last week without anyone asking you to? Which value is behind it? Or finish the sentence “It annoys me when…”: irritation often points to a value.`
      },
      improve: {
        ru: `Перечитай три момента. Там, где ценность названа больше одного раза, вычеркни лишнее и оставь поступок. Если момент можно пересказать без места и времени — добавь их.`,
        en: `Reread your three moments. Wherever the value is named more than once, cut the extra mentions and keep the action. If a moment could be retold without a place and time, add them.`
      },
      selfCheck: [
        { ru: `Я выбрал ценности, которые правда про меня, а не «правильные»?`, en: `Did I choose values that are really me, not the ones that sound right?` },
        { ru: `Для каждой ценности есть конкретный момент с местом и временем?`, en: `Does each value have a specific moment with a place and a time?` },
        { ru: `Хотя бы один момент — не про награду или успех?`, en: `Is at least one moment not about an award or success?` },
        { ru: `В выбранном для эссе моменте ценность видна без её названия?`, en: `In the moment I chose for an essay, can you see the value without it being named?` }
      ],
      discuss: {
        ru: `Может ли момент, когда ты не поступил по своей ценности, сказать о тебе больше, чем момент, когда поступил? Почему?`,
        en: `Can a moment when you didn’t act on a value say more about you than a moment when you did? Why?`
      },
      reflect: {
        ru: `Какую ценность ты вычеркнул последней? Почему было трудно?`,
        en: `Which value was the last one you crossed out? Why was it hard?`
      },
      transfer: {
        ru: `Ценности нужны не только в эссе о себе. У героя рассказа тоже есть ценности, и конфликт часто возникает, когда две из них сталкиваются. В scholarship essay ценность связывает твою историю с тем, что поддерживает фонд. Разница: герою ценности можно придумать, себе — нет.`,
        en: `Values aren’t only for essays about yourself. A character in a story has values too, and conflict often starts when two of them collide. In a scholarship essay a value links your story to what the funder supports. The difference: you can invent a character’s values, but not your own.`
      },
      personalAlt: {
        ru: `Если не хочешь писать о семье и близких, ищи моменты в учёбе, хобби, кружке, на тренировке или в городе: как ты поступил в общем чате, в очереди, в командном проекте. Можно выбрать ценности и примеры, связанные с делом, а не с людьми.`,
        en: `If you’d rather not write about family or people close to you, look for moments at school, in a hobby, a club, at training or around town: what you did in a group chat, a queue, a team project. You can choose values and examples to do with work rather than people.`
      },
      teacher: {
        note: {
          ru: `Урок построен по мотивам Values List (startwithvalues.com) и упражнения на ценности из книги Э. Сойера: сначала выбор, потом поиск доказательств. Не оценивайте ценности учеников как «лучше» или «хуже» и не ждите, что они будут звучать «подходяще для комиссии». Шаг «спроси человека, которому доверяешь» — добровольный: у кого-то нет такого собеседника, и это нормально; его можно заменить перечитыванием списка через три дня.`,
          en: `The lesson draws on the Values List (startwithvalues.com) and the values exercise in E. Sawyer’s book: choose first, then look for evidence. Don’t rank students’ values as better or worse, and don’t expect them to sound “right for admissions”. The “ask someone you trust” step is optional: some students have no one to ask, and that’s fine — rereading the list three days later is a good substitute.`
        },
        source: ['values', 'sawyer', 'original']
      }
    },

    {
      id: 'admit-3',
      route: 'admit',
      n: 3,
      minutes: 10,
      skills: ['reflection', 'words'],
      genres: ['statement', 'scholarship'],
      title: { ru: `Чувства и потребности`, en: `Feelings and needs` },
      learn: {
        ru: `Называть чувства точно и находить за ними потребности, чтобы трудный момент показал, что для тебя важно.`,
        en: `Name feelings precisely and find the needs underneath them, so a difficult moment shows what matters to you.`
      },
      hook: {
        ru: `«Мне было грустно» — это не ложь, но и не информация. Грустно — это растерянно? обидно? одиноко? стыдно? За каждым точным чувством стоит потребность: в уважении, в безопасности, в том, чтобы тебя услышали. А то, что ты сделал с этой потребностью, и есть характер.`,
        en: `“I felt sad” isn’t a lie, but it isn’t information either. Sad as in lost? Hurt? Lonely? Ashamed? Behind every precise feeling there’s a need: for respect, for safety, to be heard. And what you did about that need is your character.`
      },
      technique: {
        name: { ru: `Чувство → потребность → поступок`, en: `Feeling → need → action` },
        text: {
          ru: `Возьми момент, когда тебе было непросто. Он может быть маленьким.

- **Чувства.** Назови хотя бы три — точнее, чем «плохо» или «грустно»: растерянность, досада, неловкость, облегчение, ревность, опустошение.
- **Потребности.** Спроси про каждое чувство: чего мне не хватало? Безопасности, уважения, самостоятельности, принадлежности, ясности, справедливости, отдыха?
- **Поступок.** Что ты сделал, чтобы это получить — или чтобы без этого обойтись?
- **Смысл.** Что эта связка говорит о том, что для тебя важно?

В эссе чувства не обязательно называть прямо. Этот список — черновая работа, чтобы ты сам понял, о чём твоя история.`,
          en: `Take a moment when things were hard. It can be a small one.

- **Feelings.** Name at least three, more precisely than “bad” or “sad”: bewildered, frustrated, awkward, relieved, jealous, drained.
- **Needs.** Ask of each feeling: what was I missing? Safety, respect, independence, belonging, clarity, fairness, rest?
- **Action.** What did you do to get it — or to manage without it?
- **Meaning.** What does this chain say about what matters to you?

In the essay itself you don’t have to name the feelings. This list is groundwork, so that you understand what your story is about.`
        }
      },
      example: {
        before: {
          ru: `Когда меня не взяли в основной состав, мне было очень грустно и обидно. Но я не сдался и продолжил тренироваться, потому что я упорный человек.`,
          en: `When I didn’t make the first team, I felt very sad and upset. But I didn’t give up and kept training, because I am a persistent person.`
        },
        after: {
          ru: `Состав вывесили на двери спортзала. Своей фамилии я не нашёл и зачем-то прочитал список ещё раз, медленно. Было не столько обидно, сколько неловко: я уже сказал брату, что меня возьмут. Мне нужно было не место в команде, а понять, чего мне не хватает. В тот же вечер я написал тренеру и спросил — не почему, а что именно подтянуть.`,
          en: `The team list went up on the sports hall door. My name wasn’t on it, and for some reason I read the list again, slowly. It stung less than it embarrassed me: I’d already told my brother I’d get in. What I needed wasn’t a place on the team but to understand what I was missing. That evening I messaged the coach and asked — not why, but what exactly I should work on.`
        },
        changes: [
          {
            ru: `«Грустно и обидно» уточнено до «неловко» — и сразу понятна причина: он уже пообещал брату.`,
            en: `“Sad and upset” is narrowed down to embarrassment — and the reason is clear at once: he’d already told his brother.`
          },
          {
            ru: `Названа потребность — понять, чего не хватает, — и она объясняет поступок.`,
            en: `The need is named — to understand what was missing — and it explains the action.`
          },
          {
            ru: `Вместо «я упорный» — действие: письмо тренеру с конкретным вопросом. Упорство видно без ярлыка.`,
            en: `Instead of “I am persistent” there’s an action: a message to the coach with a specific question. The persistence shows without a label.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Разбери один непростой момент по цепочке «чувства → потребности → поступок». Момент может быть маленьким — выбирать самое тяжёлое не нужно.`,
          en: `Work through one difficult moment using the chain “feelings → needs → action”. The moment can be small — there’s no need to pick the hardest thing.`
        },
        config: {
          fields: [
            {
              id: 'moment',
              label: { ru: `Момент`, en: `The moment` },
              hint: { ru: `Коротко: где, когда, что произошло. Маленький момент подходит: не тот ответ у доски, сломанный наушник, отменённая поездка.`, en: `Briefly: where, when, what happened. A small moment works: a wrong answer at the board, a broken earphone, a cancelled trip.` },
              rows: 3
            },
            {
              id: 'feelings',
              label: { ru: `Чувства (минимум три, точные)`, en: `Feelings (at least three, precise ones)` },
              hint: { ru: `Вместо «грустно» — растерянно, досадно, пусто, неловко, стыдно, одиноко; вместо «хорошо» — облегчение, гордость, азарт, спокойствие.`, en: `Instead of “sad”: lost, frustrated, empty, awkward, ashamed, lonely. Instead of “good”: relieved, proud, fired up, at ease.` }
            },
            {
              id: 'needs',
              label: { ru: `Потребности под ними`, en: `The needs underneath` },
              hint: { ru: `Для каждого чувства: чего не хватало или что оказалось под угрозой? Безопасность, уважение, самостоятельность, принадлежность, ясность, справедливость, отдых, признание.`, en: `For each feeling: what was missing or under threat? Safety, respect, independence, belonging, clarity, fairness, rest, recognition.` }
            },
            {
              id: 'action',
              label: { ru: `Что я сделал`, en: `What I did` },
              hint: { ru: `Конкретный поступок — даже если это «промолчал» или «ушёл раньше». Честно, без украшений.`, en: `A specific action — even if it was “said nothing” or “left early”. Honestly, without dressing it up.` }
            },
            {
              id: 'meaning',
              label: { ru: `Что это говорит о том, что для меня важно`, en: `What this says about what matters to me` },
              hint: { ru: `Начни с «Оказывается, мне важно…» и закончи своими словами.`, en: `Start with “It turns out that what matters to me is…” and finish in your own words.` }
            }
          ],
          then: {
            ru: `Напиши 5–7 предложений об этом моменте так, чтобы чувства были видны по поступкам и деталям. Прямо назови не больше одного.`,
            en: `Write 5–7 sentences about this moment so that the feelings show through actions and details. Name no more than one of them directly.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Перепиши свой момент (80–150 слов) так, чтобы ни одно чувство не было названо: пусть их покажут поступки, детали и реплики. Потребность можно назвать один раз — в последнем предложении.`,
          en: `Rewrite your moment (80–150 words) so that no feeling is named: let actions, details and speech show them. You may name the need once — in the last sentence.`
        },
        config: {
          rules: [
            { kind: 'ban-emotions' },
            { kind: 'min-words', n: 80 },
            { kind: 'max-words', n: 150 }
          ]
        }
      },
      hint: {
        ru: `Выбери не самый тяжёлый момент, а самый недавний: сегодня или на этой неделе. Сначала запиши поступок — что ты сделал, — а потом спроси себя: что я чувствовал за секунду до этого?`,
        en: `Don’t pick the hardest moment — pick the most recent: today or this week. Write down the action first — what you did — and then ask yourself: what was I feeling a second before that?`
      },
      improve: {
        ru: `Найди в тексте одно общее слово-чувство («грустно», «плохо», «классно»). Замени его точным словом из поля «Чувства» — или действием, по которому чувство видно.`,
        en: `Find one general feeling-word in your text (“sad”, “bad”, “great”). Replace it with a precise word from your “Feelings” field — or with an action that shows the feeling.`
      },
      selfCheck: [
        { ru: `Я назвал хотя бы три чувства точнее, чем «грустно» или «хорошо»?`, en: `Did I name at least three feelings more precisely than “sad” or “good”?` },
        { ru: `Для каждого чувства я нашёл потребность?`, en: `Did I find a need for each feeling?` },
        { ru: `Поступок описан честно, без украшений?`, en: `Is the action described honestly, without dressing it up?` },
        { ru: `Мой вывод о том, что мне важно, опирается на этот момент?`, en: `Does my conclusion about what matters to me rest on this moment?` }
      ],
      discuss: {
        ru: `Почему в эссе о себе иногда сильнее момент, где ты поступил не лучшим образом? Где граница между честностью и лишней откровенностью?`,
        en: `Why is a moment where you didn’t behave at your best sometimes stronger in an essay about yourself? Where is the line between honesty and oversharing?`
      },
      reflect: {
        ru: `Какое чувство было труднее всего назвать? Какое слово ты для него нашёл?`,
        en: `Which feeling was hardest to name? What word did you find for it?`
      },
      transfer: {
        ru: `Связка «чувство → потребность → поступок» — двигатель персонажа в рассказе: герой хочет, боится и действует. В эссе о себе та же связка превращает «мне было грустно» в характер. Разница: в рассказе чувства можно придумать, в personal statement — только честно назвать свои.`,
        en: `The chain “feeling → need → action” drives a character in a story: they want, they fear, they act. In an essay about yourself the same chain turns “I felt sad” into character. The difference: in a story you can invent the feelings; in a personal statement you can only name your own, honestly.`
      },
      personalAlt: {
        ru: `Если не хочешь разбирать собственные чувства, проделай всё то же для вымышленного героя — или для документально известного эпизода из жизни публичного человека (спортсмена, учёного, музыканта), опираясь на его интервью или биографию, а не на догадки.`,
        en: `If you’d rather not examine your own feelings, do the same for an invented character — or for a documented episode in the life of a public figure (an athlete, a scientist, a musician), working from their interviews or biography rather than guesswork.`
      },
      teacher: {
        note: {
          ru: `Урок по мотивам упражнения Feelings and Needs из книги Э. Сойера. Заранее скажите: момент может быть совсем маленьким, травматичный опыт выбирать не нужно. Не просите зачитывать поля вслух — это черновая работа для самого ученика; делятся только готовым текстом и только по желанию. Если в тексте появилось что-то, что говорит о риске для безопасности ученика, действуйте по правилам школы о защите детей, а не как редактор.`,
          en: `The lesson is based on the Feelings and Needs exercise in E. Sawyer’s book. Say at the start that the moment can be very small and there’s no need to choose a traumatic experience. Don’t ask students to read their fields aloud — this is groundwork for the student alone; they share only a finished text, and only if they want to. If anything in a text suggests the student may be at risk, follow your school’s safeguarding procedures rather than responding as an editor.`
        },
        source: ['sawyer', 'original']
      }
    },

    {
      id: 'admit-4',
      route: 'admit',
      n: 4,
      minutes: 10,
      skills: ['character', 'reflection'],
      genres: ['statement', 'scholarship'],
      title: { ru: `Характер через выборы, а не награды`, en: `Character through choices, not awards` },
      learn: {
        ru: `Превращать перечень достижений и качеств в сцену одного выбора, по которой читатель сам поймёт, какой ты.`,
        en: `Turn a list of achievements and qualities into a scene of one choice, from which the reader works out who you are.`
      },
      hook: {
        ru: `Список наград уже есть в твоей анкете — эссе не должно его повторять. «Трудолюбивый, открытый, стрессоустойчивый» может написать о себе любой, и проверить это невозможно. А выбор — что ты сделал, когда было два пути, — читатель видит и запоминает.`,
        en: `Your list of awards is already in your application — the essay doesn’t need to repeat it. Anyone can call themselves “hard-working, open-minded and resilient”, and nobody can check it. But a choice — what you did when there were two ways to go — the reader can see and remember.`
      },
      technique: {
        name: { ru: `Одна развилка вместо списка`, en: `One fork instead of a list` },
        text: {
          ru: `Возьми любое достижение или качество из списка и спроси: где здесь был выбор? Не момент награды, а момент, когда можно было поступить иначе:

- остаться после тренировки или уйти;
- взять тему попроще или ту, которая пугает;
- промолчать на собрании или сказать неудобное.

Покажи этот выбор как сцену: место, время, что лежало на весах, что ты сделал. Качество не называй — пусть его назовёт читатель. Награду можно упомянуть одной фразой, если она нужна для контекста. Главным в тексте будет выбор, а не приз.`,
          en: `Take any achievement or quality from the list and ask: where was the choice? Not the moment of the award, but a moment when you could have done otherwise:

- stay after training or go home;
- take the easier topic or the one that scares you;
- keep quiet at the meeting or say the awkward thing.

Show that choice as a scene: the place, the time, what was at stake, what you did. Don’t name the quality — let the reader name it. You can mention the award in one sentence if it’s needed for context. The choice is the centre of the text, not the prize.`
        }
      },
      example: {
        before: {
          ru: `Я очень трудолюбивый и целеустремлённый человек. Я занимаюсь шахматами с семи лет и неоднократно становился призёром городских турниров.`,
          en: `I am a very hard-working and determined person. I have played chess since the age of seven and have been placed in city tournaments many times.`
        },
        after: {
          ru: `На девятом ходу я узнал позицию: ровно эту ошибку мы разбирали с тренером неделю назад — и я всё равно её сделал. Можно было сдаться и успеть на день рождения друга. Я просидел над доской ещё сорок минут, свёл партию вничью и опоздал на торт. Дома я записал ошибку в тетрадь. В этой тетради их сто двенадцать.`,
          en: `On move nine I recognised the position: my coach and I had gone over exactly this mistake a week earlier — and I’d made it anyway. I could have resigned and got to my friend’s birthday on time. I sat at the board for another forty minutes, scraped a draw and missed the cake. At home I wrote the mistake in my notebook. There are a hundred and twelve in there.`
        },
        changes: [
          {
            ru: `«Трудолюбивый и целеустремлённый» не названы — их видно по выбору: сорок минут над трудной позицией вместо праздника.`,
            en: `“Hard-working and determined” are never said — they show in the choice: forty minutes over a difficult position instead of a party.`
          },
          {
            ru: `Список призовых мест заменён одной партией, которую даже не выиграли. Ничья говорит о характере больше, чем кубок.`,
            en: `The list of placings is replaced by one game that wasn’t even won. A draw says more about character than a trophy.`
          },
          {
            ru: `Тетрадь со ста двенадцатью ошибками — проверяемая деталь, за которой видны годы работы.`,
            en: `A notebook of a hundred and twelve mistakes is a checkable detail with years of work behind it.`
          }
        ]
      },
      exercise: {
        type: 'rewrite',
        prompt: {
          ru: `Перед тобой абзац-резюме. Выбери из него одно достижение и перепиши абзац в сцену одного выбора — минуты, когда можно было поступить иначе. Качества не называй. Это чужая вымышленная история, поэтому детали можно придумать; в своём эссе — только то, что было.`,
          en: `Here is a CV-style paragraph. Pick one achievement from it and rewrite the paragraph as a scene of one choice — a minute when things could have gone another way. Don’t name any qualities. This is an invented person, so you may make up details; in your own essay, only what really happened.`
        },
        config: {
          source: {
            ru: `Меня зовут Алина, и я ответственный, трудолюбивый и открытый человек. Я президент школьного совета, капитан команды по баскетболу и победитель областной олимпиады по химии. Кроме того, я занимаюсь волонтёрством и изучаю два иностранных языка. Я умею находить общий язык с людьми, никогда не сдаюсь и всегда довожу начатое до конца. Учителя говорят, что я прирождённый лидер. Все эти качества помогут мне успешно учиться в университете и внести вклад в жизнь студенческого сообщества.`,
            en: `My name is Alina, and I am a responsible, hard-working and open-minded person. I am president of the student council, captain of the basketball team and winner of the regional chemistry olympiad. I also volunteer and study two foreign languages. I get on well with people, I never give up and I always finish what I start. My teachers say I am a natural leader. All these qualities will help me succeed at university and contribute to student life.`
          },
          placeholder: {
            ru: `Было без двадцати десять, и…`,
            en: `It was twenty to ten, and…`
          }
        }
      },
      harder: {
        type: 'fields',
        prompt: {
          ru: `Мозаика из трёх маленьких выборов, которые связывает один предмет-суть — вещь, которая многое о тебе говорит (старый калькулятор, ключ от спортзала, тетрадь с рецептами). Предмет появляется в каждом эпизоде.`,
          en: `A montage of three small choices linked by one essence object — a thing that says a lot about you (an old calculator, the key to the sports hall, a notebook of recipes). The object appears in every episode.`
        },
        config: {
          fields: [
            {
              id: 'object',
              label: { ru: `Предмет-суть`, en: `Essence object` },
              hint: { ru: `Вещь, которая у тебя на самом деле есть. Почему именно она говорит о тебе?`, en: `Something you actually own. Why does it, in particular, say something about you?` }
            },
            {
              id: 'choice1',
              label: { ru: `Выбор 1`, en: `Choice 1` },
              hint: { ru: `Когда, где, что было на весах, что ты выбрал и где в этот момент был предмет.`, en: `When, where, what was at stake, what you chose, and where the object was at that moment.` },
              rows: 3
            },
            {
              id: 'choice2',
              label: { ru: `Выбор 2`, en: `Choice 2` },
              hint: { ru: `Другой момент, другое время — тот же предмет.`, en: `A different moment, a different time — the same object.` },
              rows: 3
            },
            {
              id: 'choice3',
              label: { ru: `Выбор 3`, en: `Choice 3` },
              hint: { ru: `Третий момент. Можно самый недавний.`, en: `A third moment. It can be the most recent one.` },
              rows: 3
            }
          ],
          then: {
            ru: `Собери мозаику: три коротких эпизода по 3–5 предложений, предмет — нить между ними. Закончи ещё одним появлением предмета, а не выводом.`,
            en: `Assemble the montage: three short episodes of 3–5 sentences, with the object as the thread between them. End with one more appearance of the object, not a conclusion.`
          }
        }
      },
      hint: {
        ru: `Выбери достижение, за которым легче всего представить будничную минуту: не финал олимпиады, а вечер перед ним. Начни с «Было без двадцати десять, и…».`,
        en: `Pick the achievement behind which it’s easiest to picture an ordinary minute: not the olympiad final, but the evening before. Start with “It was twenty to ten, and…”.`
      },
      improve: {
        ru: `Перечитай сцену и найди место, где ты всё-таки назвал качество («я не сдалась», «я проявила лидерство»). Удали его и проверь: понятно ли без него? Если нет — добавь деталь поступка.`,
        en: `Reread your scene and find where you named a quality after all (“I didn’t give up”, “I showed leadership”). Delete it and check: is it still clear? If not, add a detail of the action.`
      },
      selfCheck: [
        { ru: `В сцене есть момент, когда можно было поступить иначе?`, en: `Is there a moment in the scene when things could have gone another way?` },
        { ru: `Ни одно качество не названо прямо?`, en: `Is no quality named directly?` },
        { ru: `Награда или должность упомянуты не больше одного раза?`, en: `Is the award or role mentioned no more than once?` },
        { ru: `Читатель сможет сам назвать качество героя?`, en: `Could the reader name the quality themselves?` }
      ],
      discuss: {
        ru: `Если у ученика нет наград, может ли его эссе быть сильным? А если наград много — почему они не делают эссе сильнее?`,
        en: `If a student has no awards, can their essay still be strong? And if they have lots, why don’t the awards make the essay stronger?`
      },
      reflect: {
        ru: `Какой твой выбор, о котором почти никто не знает, можно было бы показать как сцену?`,
        en: `Which choice of yours, one almost nobody knows about, could you show as a scene?`
      },
      transfer: {
        ru: `Характер через выбор — главный закон персонажа в рассказе: героя определяют решения, а не описание. В personal statement это работает так же, с одним условием: выбор должен быть настоящим. В scholarship essay достижения иногда нужно назвать прямо — но и там одна сцена выбора объясняет их лучше списка.`,
        en: `Character through choice is the first law of fiction: a character is defined by decisions, not description. It works the same way in a personal statement, with one condition: the choice must be real. In a scholarship essay you sometimes have to name achievements directly — but even there one scene of a choice explains them better than a list.`
      },
      personalAlt: {
        ru: `Для мозаики можно взять вымышленного героя и придумать ему предмет и три выбора. Если пишешь о себе, бери маленькие выборы из учёбы или хобби: какую задачу решать первой, чинить ли старую вещь или купить новую.`,
        en: `For the montage you can use an invented character and give them an object and three choices. If you’re writing about yourself, use small choices from school or a hobby: which problem to tackle first, whether to mend an old thing or buy a new one.`
      },
      teacher: {
        note: {
          ru: `Абзац-резюме — оригинальный антипример по мотивам слабого образца EssayPro «My Identity» (перечень качеств без сцен). Для упражнения ученики могут придумывать детали за «Алину» — это вымышленный персонаж; подчеркните, что в собственном эссе придумывать нельзя. Предмет-суть — по мотивам упражнения Essence Objects Э. Сойера и эссе из Essays That Worked, где странная вещь открывает и закрывает текст. Учеников без наград и должностей особенно важно поддержать: маленькие выборы — полноценный материал.`,
          en: `The CV paragraph is an original anti-example modelled on the weak EssayPro sample “My Identity” (a list of qualities with no scenes). For the exercise students may invent details for “Alina” — she’s fictional; stress that in their own essays nothing may be invented. The essence object comes from E. Sawyer’s Essence Objects exercise and from the Essays That Worked piece in which an odd object opens and closes the essay. Students with no awards or titles especially need to hear that small choices are real material.`
        },
        source: ['essaypro-identity', 'sawyer', 'etw', 'original']
      }
    },

    {
      id: 'admit-5',
      route: 'admit',
      n: 5,
      minutes: 10,
      skills: ['argument', 'reflection'],
      genres: ['scholarship'],
      title: { ru: `Отвечай на вопрос стипендии`, en: `Answer the scholarship question` },
      learn: {
        ru: `Отвечать на конкретный вопрос фонда через одну цель и один пример из жизни, без шаблонных фраз.`,
        en: `Answer a funder’s actual question through one goal and one example from your life, without template phrases.`
      },
      hook: {
        ru: `Эссе на стипендию — не «расскажи о себе», а ответ на вопрос людей, которые решают, кого поддержать. Они читают десятки текстов о «страсти к знаниям» и желании «изменить мир». Запоминается тот, кто ответил конкретно: какая цель, что уже сделано, что изменит поддержка.`,
        en: `A scholarship essay isn’t “tell us about yourself” — it’s an answer to the question of the people deciding whom to support. They read dozens of texts about a “passion for learning” and wanting to “make a difference”. What stays with them is a specific answer: what the goal is, what’s already been done, what the support would change.`
      },
      technique: {
        name: { ru: `Вопрос — цель — пример — вклад`, en: `Question — goal — example — contribution` },
        text: {
          ru: `Прежде чем писать, ответь себе на пять вопросов:

- Что **точно** спрашивает фонд? Перепиши вопрос своими словами.
- Что он хочет поддержать? Посмотри на название, миссию, кому помогали раньше.
- Какая у тебя **конкретная цель**? Не «развиваться», а «разобраться, почему…».
- Какой **один пример** из жизни показывает, что цель настоящая? Что ты уже сделал?
- Что изменит поддержка — для тебя и для других?

И отдельно — стоп-список фраз, которых в тексте не будет: «страсть к…», «изменить мир», «с детства мечтал», «внести вклад в развитие общества». Их пишут все, поэтому они ничего не говорят о тебе.`,
          en: `Before you write, answer five questions for yourself:

- What **exactly** is the funder asking? Rewrite the question in your own words.
- What do they want to support? Look at the name, the mission, who they’ve helped before.
- What is your **specific goal**? Not “to grow” but “to work out why…”.
- What **one example** from your life shows the goal is real? What have you already done?
- What would the support change — for you and for others?

And separately, a stop-list of phrases that won’t appear: “passion for…”, “make a difference”, “ever since I was little”, “contribute to society”. Everyone writes them, so they say nothing about you.`
        }
      },
      example: {
        before: {
          ru: `Я подаю заявку на эту стипендию, потому что у меня есть страсть к науке и я хочу изменить мир к лучшему. С детства я мечтаю стать учёным и внести вклад в развитие общества.`,
          en: `I am applying for this scholarship because I have a passion for science and I want to make the world a better place. Ever since I was little I have dreamed of becoming a scientist and contributing to society.`
        },
        after: {
          ru: `Прошлой весной у нас во дворе засох третий карагач за два года. Я отнёс в школьную лабораторию пробы почвы из-под него и из соседнего сквера: в пробе из двора соли оказалось заметно больше — видимо, от зимней посыпки дорог. Я хочу учиться на почвоведа, чтобы понимать, как спасать такие дворы. Стипендия оплатит летнюю программу по анализу почв, и я смогу повторить замеры по всему микрорайону.`,
          en: `Last spring the third elm in two years died in our courtyard. I took soil samples from under it and from the square next door to the school lab: the courtyard sample had noticeably more salt — probably from gritting the roads in winter. I want to study soil science so I can understand how to save courtyards like ours. The scholarship would pay for a summer course in soil analysis, and I could repeat the tests across the whole neighbourhood.`
        },
        changes: [
          {
            ru: `«Страсть к науке» заменена конкретным вопросом, которым автор уже занимается.`,
            en: `“A passion for science” becomes a specific question the writer is already working on.`
          },
          {
            ru: `Пример доказывает, что цель настоящая: пробы взяты задолго до всякой стипендии.`,
            en: `The example proves the goal is real: the samples were taken long before any scholarship.`
          },
          {
            ru: `Понятно, на что пойдёт поддержка и что изменится — для автора и для района.`,
            en: `It’s clear what the support would pay for and what would change — for the writer and for the neighbourhood.`
          },
          {
            ru: `Больше соли — проверяемый факт, а «видимо, от посыпки» честно подано как догадка.`,
            en: `More salt is a checkable fact, while “probably from gritting” is honestly flagged as a guess.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Разбери учебный вопрос стипендии по полям, а потом напиши черновик ответа:

> «Фонд поддерживает школьников и студентов, которые хотят применять знания там, где живут. Какую задачу своего города, района или школы ты хочешь решать — и что ты уже для этого сделал? Как стипендия поможет тебе продвинуться? До 500 слов».`,
          en: `Break down this practice scholarship question field by field, then draft an answer:

> “The Foundation supports students who want to use what they learn where they live. What problem in your town, neighbourhood or school do you want to work on — and what have you already done about it? How would this scholarship help you take the next step? Maximum 500 words.”`
        },
        config: {
          fields: [
            {
              id: 'question',
              label: { ru: `Вопрос фонда — своими словами`, en: `The funder’s question, in your own words` },
              hint: { ru: `Сколько в нём частей? Здесь три: задача, что уже сделано, как поможет стипендия. Ответ должен закрыть каждую.`, en: `How many parts does it have? Here there are three: the problem, what you’ve done, how the scholarship helps. Your answer must cover each one.` }
            },
            {
              id: 'funder',
              label: { ru: `Что хочет поддержать фонд`, en: `What the funder wants to support` },
              hint: { ru: `Кого и зачем? Подсказка — в первом предложении. В настоящей заявке посмотри миссию фонда и кому он помогал раньше.`, en: `Whom, and why? The clue is in the first sentence. For a real application, look at the funder’s mission and who they’ve supported before.` }
            },
            {
              id: 'goal',
              label: { ru: `Моя конкретная цель`, en: `My specific goal` },
              hint: { ru: `Одно предложение, которое не мог бы написать никто другой: не «помогать людям», а «сделать…», «разобраться, почему…», «научиться…».`, en: `One sentence nobody else could write: not “to help people” but “to build…”, “to find out why…”, “to learn how to…”.` }
            },
            {
              id: 'example',
              label: { ru: `Один пример из моей жизни`, en: `One example from my life` },
              hint: { ru: `Что ты уже сделал для этой цели — даже немного? Где, когда, с каким результатом. Только правда: не преувеличивай свою роль и цифры.`, en: `What have you already done towards this goal — even a little? Where, when, with what result. Only the truth: don’t inflate your role or the numbers.` },
              rows: 3
            },
            {
              id: 'contribution',
              label: { ru: `Что я сделаю с поддержкой`, en: `What I’ll do with the support` },
              hint: { ru: `Конкретно: курс, оборудование, время, поездка — и что изменится для тебя и для других.`, en: `Specifically: a course, equipment, time, travel — and what will change for you and for others.` }
            },
            {
              id: 'banned',
              label: { ru: `Фразы, которых у меня не будет`, en: `Phrases I will NOT use` },
              hint: { ru: `Минимум пять: «страсть к…», «изменить мир», «внести вклад», «с детства мечтал», «я всегда был…» — и добавь свои.`, en: `At least five: “passion for…”, “make a difference”, “give back”, “ever since I was little”, “I have always been…” — and add your own.` }
            }
          ],
          then: {
            ru: `Напиши черновик ответа примерно на 200 слов. Проверь: каждая часть вопроса получила ответ, пример — правда, ни одной фразы из твоего стоп-списка.`,
            en: `Write a draft answer of about 200 words. Check: every part of the question has an answer, the example is true, and not one phrase from your stop-list appears.`
          }
        }
      },
      harder: {
        type: 'columns',
        prompt: {
          ru: `Сделай личный SWOT-анализ под свою цель из основного задания. В каждой колонке 2–3 пункта, и у каждого — доказательство: факт, случай, цифра. Не «я умный», а «три месяца веду таблицу замеров».`,
          en: `Do a personal SWOT analysis for the goal from the main task. Put 2–3 points in each column, each with evidence: a fact, an incident, a number. Not “I’m clever” but “I’ve kept a spreadsheet of measurements for three months”.`
        },
        config: {
          columns: [
            { label: { ru: `Сильные стороны (во мне)`, en: `Strengths (in me)` }, placeholder: { ru: `Что я уже умею или имею → доказательство`, en: `What I can already do or have → evidence` } },
            { label: { ru: `Слабые стороны (во мне)`, en: `Weaknesses (in me)` }, placeholder: { ru: `Чего мне пока не хватает → откуда я это знаю`, en: `What I still lack → how I know` } },
            { label: { ru: `Возможности (вокруг)`, en: `Opportunities (around me)` }, placeholder: { ru: `Люди, программы, места, которые могут помочь`, en: `People, programmes, places that could help` } },
            { label: { ru: `Угрозы (вокруг)`, en: `Threats (around me)` }, placeholder: { ru: `Внешние препятствия: время, деньги, расстояние, конкуренция`, en: `External obstacles: time, money, distance, competition` } }
          ],
          then: {
            ru: `Какой пункт из слабых сторон или угроз можно честно упомянуть в эссе — вместе с тем, что ты с ним уже делаешь? Напиши об этом 2–3 предложения. Упоминать трудности не обязательно: решай сам, чем готов делиться.`,
            en: `Which weakness or threat could you honestly mention in the essay — together with what you’re already doing about it? Write 2–3 sentences. You don’t have to mention difficulties at all: you decide what you’re willing to share.`
          }
        }
      },
      hint: {
        ru: `Начни с поля «Один пример»: вспомни, что ты уже делал по своему интересу без чьей-либо просьбы — прочитал, починил, посчитал, организовал. Цель часто видна из такого поступка лучше, чем из мечты.`,
        en: `Start with the “One example” field: recall something you’ve already done for your interest without anyone asking — read, fixed, counted, organised. A goal often shows more clearly in an action like that than in a dream.`
      },
      improve: {
        ru: `Перечитай черновик и подчеркни каждое предложение, которое мог бы написать любой другой кандидат. Замени одно из них фактом о себе: что, где, когда, сколько.`,
        en: `Reread your draft and underline every sentence any other applicant could have written. Replace one of them with a fact about you: what, where, when, how many.`
      },
      selfCheck: [
        { ru: `Я ответил на каждую часть вопроса фонда?`, en: `Did I answer every part of the funder’s question?` },
        { ru: `Моя цель конкретна — её нельзя вставить в чужое эссе?`, en: `Is my goal specific — could it not be pasted into someone else’s essay?` },
        { ru: `Пример из жизни — правда, роль и цифры не преувеличены?`, en: `Is my example true, with no inflated role or numbers?` },
        { ru: `Понятно, что изменит именно эта поддержка?`, en: `Is it clear what this particular support would change?` },
        { ru: `В тексте нет ни одной фразы из моего стоп-списка?`, en: `Is there not a single phrase from my stop-list in the text?` }
      ],
      discuss: {
        ru: `Честно ли писать в эссе на стипендию о трудностях? Где граница между честностью и давлением на жалость?`,
        en: `Is it fair to write about hardships in a scholarship essay? Where is the line between honesty and playing for sympathy?`
      },
      reflect: {
        ru: `Что ты узнал о своей цели, пока искал для неё пример?`,
        en: `What did you learn about your goal while looking for an example of it?`
      },
      transfer: {
        ru: `Scholarship essay ближе к конкурсному эссе, чем к personal statement: есть вопрос, критерии и лимит. От personal statement берётся главное — правда о себе и одна живая сцена. От аргумента — ясная структура: вопрос → ответ → доказательство → что дальше.`,
        en: `A scholarship essay is closer to a competition essay than to a personal statement: there’s a question, criteria and a limit. From the personal statement it takes the essentials — the truth about yourself and one vivid scene. From argument it takes a clear structure: question → answer → evidence → what next.`
      },
      personalAlt: {
        ru: `Если не хочешь писать о своём районе или семье, возьми цель, связанную с учёбой или навыком: курс программирования, языковая программа, проект в кружке. Пример можно взять из учёбы, а не из личной жизни.`,
        en: `If you’d rather not write about your neighbourhood or family, choose a goal tied to study or a skill: a coding course, a language programme, a club project. Your example can come from school rather than your personal life.`
      },
      teacher: {
        note: {
          ru: `Вопрос фонда — учебный. Для настоящей заявки ученик сверяется с официальными условиями: лимит, формат, срок, кто может участвовать. Помогите не преувеличивать роли и цифры — это самая частая «невинная» неправда. Не обещайте результат: хорошее эссе — ясный и честный ответ, но решение фонд принимает по своим критериям. SWOT адаптирован по материалу C. Drew под цель эссе; слабые стороны и угрозы ученик показывает вам, только если сам захочет.`,
          en: `The funder’s question is a practice one. For a real application the student checks the official terms: limit, format, deadline, eligibility. Help students avoid inflating roles and numbers — the most common “innocent” untruth. Don’t promise outcomes: a good essay is a clear, honest answer, but the funder decides by its own criteria. The SWOT is adapted from C. Drew’s material to fit an essay goal; students share their weaknesses and threats with you only if they choose to.`
        },
        source: ['scholarship30', 'swot', 'sawyer', 'original']
      }
    }
  ]);
})();
