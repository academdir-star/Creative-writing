/* Route: base — Основа / Foundations. Reference lessons: follow this format and quality bar. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'base-1',
      route: 'base',
      n: 1,
      minutes: 7,
      skills: ['ideas', 'voice'],
      genres: ['free', 'story', 'statement'],
      title: { ru: `Пиши, не останавливаясь`, en: `Write without stopping` },
      learn: {
        ru: `Начинать писать без разгона и находить в быстром черновике живую фразу, с которой стоит работать дальше.`,
        en: `Start writing without a warm-up, and find the one live phrase in a fast draft that is worth working on.`
      },
      hook: {
        ru: `Чистый лист пугает не потому, что тебе нечего сказать. Просто внутренний редактор включается раньше, чем мысль успевает появиться. Сегодня мы выключим его на пять минут — и у тебя будет текст, которого минуту назад не существовало.`,
        en: `A blank page is scary not because you have nothing to say, but because your inner editor switches on before the thought has a chance to arrive. Today we switch it off for five minutes — and you will have a piece of writing that did not exist a minute ago.`
      },
      technique: {
        name: { ru: `Фрирайтинг с лупой`, en: `Freewriting with a magnifying glass` },
        text: {
          ru: `Пиши пять минут, не останавливаясь и ничего не исправляя. Если мысль кончилась, пиши «не знаю, что писать», пока не придёт следующая. Ошибки, повторы и глупости разрешены.

Потом бери «лупу»: перечитай и найди одну фразу, которая звучит живее остальных — конкретную, странную или честную. Фрирайт — не готовый текст, а руда. Из этой фразы и будем работать.`,
          en: `Write for five minutes without stopping and without correcting anything. If you run out of thoughts, write “I don’t know what to write” until the next one arrives. Mistakes, repetition and nonsense are allowed.

Then pick up the magnifying glass: reread and find one phrase that sounds more alive than the rest — specific, odd or honest. A freewrite is not a finished text; it is ore. That one phrase is what we will work with.`
        }
      },
      example: {
        before: {
          ru: `Не знаю, что писать. Утро было обычное, как всегда. Пришла в школу, было скучно. Не знаю. У соседа по парте опять шуршит пакет с семечками, он думает, что никто не слышит. Скучно, скучно. Хочу домой.`,
          en: `I don’t know what to write. The morning was normal, like always. Got to school, it was boring. Don’t know. The guy next to me is rustling a bag of sunflower seeds again, he thinks nobody can hear. Boring, boring. I want to go home.`
        },
        after: {
          ru: `У соседа по парте опять шуршит пакет с семечками. Он разворачивает его так медленно, будто обезвреживает бомбу, и замирает каждый раз, когда учительница оборачивается от доски.`,
          en: `The guy next to me is rustling a bag of sunflower seeds again. He opens it so slowly you’d think he was defusing a bomb, and he freezes every time the teacher turns away from the board.`
        },
        changes: [
          {
            ru: `Из всего фрирайта выбрана одна живая фраза — про пакет с семечками. «Обычное утро» и «скучно» — общие слова, их нельзя увидеть.`,
            en: `Out of the whole freewrite, one live phrase was chosen — the bag of seeds. “A normal morning” and “boring” are general words; you can’t see them.`
          },
          {
            ru: `Фразу развернули: добавили действие (разворачивает медленно) и сравнение, которое показывает напряжение, не называя его.`,
            en: `The phrase was expanded: an action (opens it slowly) and a comparison that shows the tension without naming it.`
          },
          {
            ru: `Скука класса никуда не делась, но теперь её передаёт деталь, а не оценка автора.`,
            en: `The boredom of the lesson is still there, but now a detail carries it instead of the writer’s verdict.`
          }
        ]
      },
      exercise: {
        type: 'free',
        prompt: {
          ru: `Поставь таймер на 5 минут и пиши без остановки. Начни с фразы «Прямо сейчас я слышу…». Не исправляй, не перечитывай и не думай, хорошо ли получается.`,
          en: `Set the timer for 5 minutes and write without stopping. Start with “Right now I can hear…”. Don’t correct, don’t reread, and don’t judge whether it’s any good.`
        },
        config: {
          minutes: 5,
          placeholder: { ru: `Прямо сейчас я слышу…`, en: `Right now I can hear…` },
          then: {
            ru: `Перечитай фрирайт и перенеси сюда одну самую живую фразу. Разверни её в 3–4 предложения: что именно происходит, как это выглядит или звучит?`,
            en: `Reread the freewrite and copy the single most alive phrase here. Expand it into 3–4 sentences: what exactly is happening, what does it look or sound like?`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Сделай три фрирайта по 3 минуты подряд. Каждый следующий начинай с фразы, которую ты отметил в предыдущем. Посмотри, куда тебя приведёт третий: часто именно там появляется настоящая тема.`,
          en: `Do three 3-minute freewrites in a row. Start each one with the phrase you picked from the previous one. Notice where the third one takes you — that is often where the real subject shows up.`
        }
      },
      hint: {
        ru: `Начни с того, что буквально вокруг: звук, свет, предмет на столе. «Прямо сейчас я слышу, как…» — и дальше что угодно. Застрял — пиши «я застрял, потому что…». Это тоже текст.`,
        en: `Start with what is literally around you: a sound, the light, an object on the desk. “Right now I can hear…” — and then anything. Stuck? Write “I’m stuck because…”. That counts as writing too.`
      },
      improve: {
        ru: `Возьми развёрнутую фразу и замени в ней одно общее слово («скучно», «красиво», «странно») действием или деталью, по которым читатель сам поймёт, что ты имел в виду.`,
        en: `Take your expanded phrase and replace one general word (“boring”, “beautiful”, “weird”) with an action or detail that lets the reader work out what you meant.`
      },
      selfCheck: [
        { ru: `Я писал все пять минут, не останавливаясь?`, en: `Did I keep writing for the full five minutes?` },
        { ru: `Я нашёл фразу, которую можно увидеть или услышать?`, en: `Did I find a phrase you can see or hear?` },
        { ru: `В развёрнутом фрагменте есть действие, а не только оценка?`, en: `Does the expanded passage contain an action, not just a judgement?` },
        { ru: `Я не выбросил «глупые» куски раньше времени?`, en: `Did I avoid throwing away the “silly” bits too early?` }
      ],
      discuss: {
        ru: `Что мешает писать быстрее: страх ошибки, страх, что прочитают, или страх, что выйдет скучно? У всех ли в группе это одно и то же?`,
        en: `What slows you down more: fear of mistakes, fear of being read, or fear of being boring? Is it the same for everyone in the group?`
      },
      reflect: {
        ru: `Какая фраза удивила тебя самого? Как ты думаешь, откуда она взялась?`,
        en: `Which phrase surprised you? Where do you think it came from?`
      },
      transfer: {
        ru: `Фрирайт — стартер для любого жанра. Для рассказа он даёт материал, для конкурсного эссе — неожиданный угол, для personal statement — воспоминания, до которых не доберёшься, если сразу писать «правильно». Разница в следующем шаге: в эссе живую фразу проверяют на правдивость и связь с вопросом.`,
        en: `A freewrite gets any genre started. For a story it gives you material, for a competition essay an unexpected angle, for a personal statement memories you won’t reach if you try to write “properly” from the start. The difference is the next step: in an essay, the live phrase is checked for truth and relevance to the question.`
      },
      teacher: {
        note: {
          ru: `Фрирайт снимает страх чистого листа: текст появляется в первые минуты урока. Не просите показывать фрирайт целиком — он черновой и может быть личным. Делятся только выбранной фразой и только по желанию.`,
          en: `Freewriting removes blank-page fear: text appears in the first minutes of the lesson. Don’t ask students to show the whole freewrite — it is raw and may be personal. They share only the chosen phrase, and only if they want to.`
        },
        source: ['hse-spb', 'ou-know', 'original']
      }
    },

    {
      id: 'base-2',
      route: 'base',
      n: 2,
      minutes: 8,
      skills: ['observation', 'words'],
      genres: ['description', 'story', 'reportage', 'statement'],
      title: { ru: `Смотри, а потом пиши`, en: `Look first, then write` },
      learn: {
        ru: `Заменять общее прилагательное-ярлык конкретной деталью, которую читатель может увидеть, услышать или потрогать.`,
        en: `Replace a general label adjective with a specific detail the reader can see, hear or touch.`
      },
      hook: {
        ru: `«Красивый закат», «уютная комната», «страшный человек». Эти слова ничего не показывают: читатель подставляет свою картинку, а твоя пропадает. Точная деталь работает наоборот — переносит читателя туда, где был ты.`,
        en: `“A beautiful sunset”, “a cosy room”, “a scary man”. These words show nothing: the reader plugs in their own picture and yours disappears. A precise detail does the opposite — it takes the reader to where you were.`
      },
      technique: {
        name: { ru: `Деталь вместо ярлыка`, en: `Detail instead of a label` },
        text: {
          ru: `Прилагательное-ярлык сообщает вывод: «уютная», «грустный», «старый». Деталь даёт улики, из которых читатель делает вывод сам.

Спроси себя: *почему* я решил, что комната уютная? Ответ и есть деталь: плед с катышками, лампа с жёлтым абажуром, кот на батарее. Одна точная деталь сильнее трёх общих. Выбирай ту, что есть только здесь, а не в любой комнате мира.`,
          en: `A label adjective hands over a conclusion: “cosy”, “sad”, “old”. A detail hands over evidence, and the reader draws the conclusion.

Ask yourself: *why* did I decide the room was cosy? The answer is your detail: a bobbly blanket, a lamp with a yellow shade, a cat asleep on the radiator. One precise detail beats three general ones. Pick the one that exists only here, not in every room in the world.`
        }
      },
      example: {
        before: {
          ru: `Мы зашли в старый подъезд. Там было грязно и неуютно, пахло чем-то неприятным. Лифт тоже был очень старый.`,
          en: `We went into an old building. It was dirty and unwelcoming, and it smelled bad. The lift was very old too.`
        },
        after: {
          ru: `В подъезде пахло кошками и чьей-то жареной рыбой. На почтовых ящиках кто-то нацарапал «Аня + ?», и за двадцать лет вопросительный знак так никто и не заменил именем. Лифт закрывался вручную — тяжёлой дверью с круглым окошком.`,
          en: `The stairwell smelled of cats and someone’s fried fish. On the mailboxes someone had scratched ANYA + ?, and in twenty years nobody had replaced the question mark with a name. The lift had a manual door — heavy, with a small round window.`
        },
        changes: [
          {
            ru: `Ярлыки «старый», «грязно», «неуютно», «неприятный» заменены уликами: запах, надпись, дверь лифта.`,
            en: `The labels “old”, “dirty”, “unwelcoming” and “bad” are replaced by evidence: a smell, an inscription, the lift door.`
          },
          {
            ru: `Надпись на ящиках добавляет историю — время и человека, которого мы не видим.`,
            en: `The scratched mailbox adds a story: time passing, and a person we never see.`
          },
          {
            ru: `Выводов в тексте нет: читатель сам понимает, что дом старый и немного печальный.`,
            en: `The text draws no conclusions; the reader works out that the building is old and a little sad.`
          }
        ]
      },
      exercise: {
        type: 'list',
        prompt: {
          ru: `Оглянись вокруг или вспомни место, где ты был сегодня. Запиши пять деталей, которые есть только здесь.`,
          en: `Look around you, or think of a place you were in today. Write down five details that exist only there.`
        },
        config: {
          count: 5,
          labels: [
            { ru: `Что я вижу`, en: `What I see` },
            { ru: `Что я слышу`, en: `What I hear` },
            { ru: `Чем пахнет`, en: `What it smells like` },
            { ru: `Что можно потрогать`, en: `What I could touch` },
            { ru: `Что здесь не на своём месте`, en: `What is out of place here` }
          ],
          then: {
            ru: `Напиши 3–5 предложений об этом месте без единого ярлыка (красивый, уютный, старый, скучный, странный). Пусть детали говорят сами.`,
            en: `Write 3–5 sentences about this place without a single label (beautiful, cosy, old, boring, weird). Let the details do the talking.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Опиши человека, которого ты сегодня видел (в транспорте, в очереди, во дворе), тремя деталями — так, чтобы читатель догадался о его настроении и занятии, хотя ты их не назовёшь.`,
          en: `Describe someone you saw today (on the bus, in a queue, in the courtyard) through three details, so the reader can guess their mood and what they do, even though you never say it.`
        },
        config: {
          rules: [
            { kind: 'ban-emotions' },
            { kind: 'ban-words', words: {
              ru: ['красивый', 'красивая', 'уставший', 'усталый', 'грустный', 'весёлый', 'добрый', 'злой', 'странный', 'обычный'],
              en: ['beautiful', 'tired', 'sad', 'happy', 'kind', 'angry', 'weird', 'normal', 'nice']
            } },
            { kind: 'max-words', n: 120 }
          ]
        }
      },
      hint: {
        ru: `Начни с пункта «не на своём месте»: что здесь выглядит случайным, сломанным, забытым? Такие детали почти всегда самые живые.`,
        en: `Start with “out of place”: what here looks accidental, broken or forgotten? Those details are almost always the most alive.`
      },
      improve: {
        ru: `Найди в своём тексте одно оставшееся общее слово и спроси его «почему?». Замени слово ответом.`,
        en: `Find one general word still left in your text and ask it “why?”. Replace the word with the answer.`
      },
      selfCheck: [
        { ru: `В тексте нет ярлыков, которые делают вывод за читателя?`, en: `Are there no labels that draw the conclusion for the reader?` },
        { ru: `Хотя бы одна деталь — не зрительная (звук, запах, текстура)?`, en: `Is at least one detail not visual (sound, smell, texture)?` },
        { ru: `Есть деталь, которой нет в любом другом таком месте?`, en: `Is there a detail that wouldn’t appear in any other place like this?` },
        { ru: `Читатель сможет сам почувствовать настроение места?`, en: `Can the reader sense the mood of the place on their own?` }
      ],
      discuss: {
        ru: `Какая деталь из текстов группы запомнилась тебе сильнее всего? Почему именно она?`,
        en: `Which detail from the group’s writing stuck with you most? Why that one?`
      },
      reflect: {
        ru: `Что ты заметил сегодня в знакомом месте, чего раньше не замечал?`,
        en: `What did you notice today in a familiar place that you had never noticed before?`
      },
      transfer: {
        ru: `Точная деталь работает везде. В рассказе она строит мир, в репортаже доказывает, что автор был на месте, в personal statement показывает характер: «я люблю порядок» слабее, чем «я подписываю провода от зарядок малярным скотчем». Разница одна: в эссе и репортаже деталь должна быть правдой.`,
        en: `Precise detail works everywhere. In a story it builds the world; in reportage it proves the writer was there; in a personal statement it shows character: “I like order” is weaker than “I label my charger cables with masking tape”. The one difference: in essays and reportage the detail must be true.`
      },
      teacher: {
        note: {
          ru: `В классе удобно, когда все описывают одно и то же помещение, а потом сравнивают, кто что заметил. Цель не в том, чтобы навсегда запретить прилагательные, а в том, чтобы ученик выбирал их сознательно.`,
          en: `In class it works well when everyone describes the same room and then compares what each person noticed. The aim is not to ban adjectives for ever, but to make students choose them deliberately.`
        },
        source: ['ou-fiction', 'hse-spb', 'original']
      }
    },

    {
      id: 'base-3',
      route: 'base',
      n: 3,
      minutes: 9,
      skills: ['editing', 'voice'],
      genres: ['story', 'contest', 'statement', 'free'],
      title: { ru: `Второй заход`, en: `The second pass` },
      learn: {
        ru: `Переписывать фрагмент разными способами и осознанно выбирать вариант, который лучше подходит для задачи.`,
        en: `Rewrite a passage in several different ways and deliberately choose the version that best fits the task.`
      },
      hook: {
        ru: `Писатели почти никогда не пишут хорошо с первого раза. Они пишут, а потом переписывают — иногда десятки раз. Хорошая новость: переписывать легче, чем писать. Материал уже есть, осталось им распорядиться.`,
        en: `Writers almost never get it right the first time. They write, then rewrite — sometimes dozens of times. The good news: rewriting is easier than writing. The material is already there; you just have to decide what to do with it.`
      },
      technique: {
        name: { ru: `Три версии одной фразы`, en: `Three versions of one sentence` },
        text: {
          ru: `Возьми одно предложение и перепиши его трижды, каждый раз меняя что-то одно:

- **сократи** — убери всё, без чего смысл не пострадает;
- **уточни** — замени общее слово конкретным;
- **переставь** — начни с самого важного или неожиданного.

Не решай заранее, какая версия лучше. Сначала сделай все три, потом выбери. Иногда побеждает смесь.`,
          en: `Take one sentence and rewrite it three times, changing one thing each time:

- **cut** — remove everything the meaning can survive without;
- **sharpen** — replace a general word with a specific one;
- **reorder** — start with the most important or surprising part.

Don’t decide in advance which is best. Do all three first, then choose. Sometimes a mix wins.`
        }
      },
      example: {
        before: {
          ru: `В тот день я очень сильно волновалась перед выступлением, потому что это было моё первое выступление на сцене перед большим количеством людей.`,
          en: `That day I was really very nervous before the performance, because it was my first performance on a stage in front of a large number of people.`
        },
        after: {
          ru: `**Сократить:** Я впервые выходила на сцену и волновалась.

**Уточнить:** За кулисами я в третий раз перечитывала первую строчку, хотя знала её наизусть.

**Переставить:** Триста человек в зале — а я ни разу не выходила на сцену.`,
          en: `**Cut:** It was my first time on stage, and I was nervous.

**Sharpen:** Backstage I read my first line for the third time, though I knew it by heart.

**Reorder:** Three hundred people out there — and I had never been on a stage.`
        },
        changes: [
          {
            ru: `Сокращение убрало повтор «выступление» и усилители «очень сильно», которые ничего не усиливают.`,
            en: `Cutting removed the repeated “performance” and the intensifiers “really very”, which intensify nothing.`
          },
          {
            ru: `Уточнение заменило слово «волновалась» действием, по которому волнение видно.`,
            en: `Sharpening replaced the word “nervous” with an action that makes the nerves visible.`
          },
          {
            ru: `Перестановка вынесла в начало самое сильное — цифру и контраст.`,
            en: `Reordering put the strongest part first: the number and the contrast.`
          }
        ]
      },
      exercise: {
        type: 'columns',
        prompt: {
          ru: `Возьми предложение из своего фрирайта или то, что ниже. Перепиши его тремя способами — в каждой колонке своим.`,
          en: `Take a sentence from your freewrite, or the one below. Rewrite it three ways, one per column.`
        },
        config: {
          shared: {
            ru: `Когда мы переехали в новую квартиру, мне было очень грустно, потому что я скучала по старому двору и друзьям, с которыми всё время гуляла.`,
            en: `When we moved to the new flat I was really sad, because I missed the old courtyard and the friends I used to hang out with all the time.`
          },
          columns: [
            { label: { ru: `Сократи`, en: `Cut` } },
            { label: { ru: `Уточни`, en: `Sharpen` } },
            { label: { ru: `Переставь`, en: `Reorder` } }
          ],
          then: {
            ru: `Какая версия лучше подошла бы для рассказа, а какая — для эссе? Напиши финальную версию: можно смешать приёмы.`,
            en: `Which version would suit a story, and which an essay? Write your final version — mixing the moves is allowed.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Возьми абзац (5–7 предложений) из любого своего текста и сделай два прохода: сначала сократи его на треть, затем замени три общих слова деталями. Сохрани версию после каждого прохода и сравни их в истории версий.`,
          en: `Take a paragraph (5–7 sentences) from any of your texts and make two passes: first cut it by a third, then replace three general words with details. Save a version after each pass and compare them in the version history.`
        }
      },
      hint: {
        ru: `Начни с колонки «Сократи»: вычеркни «очень», «просто», «как бы», «в тот момент», «потому что». Посмотри, что осталось, — часто это уже лучше.`,
        en: `Start with “Cut”: strike out “really”, “just”, “kind of”, “at that moment”, “because”. Look at what’s left — it’s often better already.`
      },
      improve: {
        ru: `Прочитай все три версии вслух. Отметь ту, которую хочется дочитать, и одним предложением объясни почему.`,
        en: `Read all three versions aloud. Mark the one you want to keep reading and explain why in one sentence.`
      },
      selfCheck: [
        { ru: `Три версии отличаются по-настоящему, а не одним словом?`, en: `Are the three versions genuinely different, not just one word apart?` },
        { ru: `В сокращённой версии сохранился смысл?`, en: `Does the cut version keep the meaning?` },
        { ru: `В уточнённой версии появилось то, что можно увидеть?`, en: `Does the sharpened version contain something you can see?` },
        { ru: `Я выбрал финальную версию сознательно и могу объяснить выбор?`, en: `Did I choose the final version deliberately, and can I explain why?` }
      ],
      discuss: {
        ru: `Бывает ли, что первая версия лучше переписанной? Как понять, что пора остановиться?`,
        en: `Is the first version ever better than the rewrite? How do you know when to stop?`
      },
      reflect: {
        ru: `Какой из трёх способов дался легче всего, а какой труднее? Почему?`,
        en: `Which of the three moves came easiest, and which was hardest? Why?`
      },
      transfer: {
        ru: `Сократить, уточнить, переставить — три базовых хода любой редактуры, от рассказа до эссе на 650 слов. В конкурсах и заявках особенно важно сокращение: лимит слов жёсткий, а каждое слово должно работать.`,
        en: `Cut, sharpen, reorder: the three basic moves of any edit, from a story to a 650-word essay. In competitions and applications cutting matters most — the word limit is strict and every word has to earn its place.`
      },
      personalAlt: {
        ru: `Не хочешь брать фразу о себе — работай с предложенной: она не про тебя.`,
        en: `If you don’t want to use a sentence about yourself, work with the one provided — it isn’t about you.`
      },
      teacher: {
        note: {
          ru: `Урок знакомит с историей версий: покажите, что прежний вариант не пропадает, — это снимает страх «испортить». В группе удобно сравнивать версии одной и той же фразы у разных учеников: видно, что правильного ответа нет, есть решения под задачу.`,
          en: `This lesson introduces version history: show students that earlier drafts never disappear, which removes the fear of “ruining it”. In a group, compare different students’ versions of the same sentence: there is no single right answer, only choices that suit a task.`
        },
        source: ['original', 'owl-cw']
      }
    }
  ]);
})();
