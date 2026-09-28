/* Route: real — Письмо о реальном мире / Writing about the real world. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'real-1',
      route: 'real',
      n: 1,
      minutes: 9,
      skills: ['facts', 'scene', 'observation'],
      genres: ['reportage', 'scene', 'contest'],
      title: { ru: `От сухой заметки к сцене`, en: `From dry news item to scene` },
      learn: {
        ru: `Превращать сухую заметку в сцену с эффектом присутствия и отличать то, что можно увидеть самому, от того, что нужно узнать и проверить.`,
        en: `Turn a dry news item into a scene with a sense of presence, and tell what you can witness yourself from what you have to find out and check.`
      },
      hook: {
        ru: `«В субботу в школе прошла благотворительная ярмарка. Собрано 342 тысячи тенге». Всё правда — и ничего не видно. Репортаж отличается от заметки не длиной, а тем, где оказывается читатель: у стола с пирогами, рядом с банкой, в которую звенит мелочь. Но у сцены есть условие: детали нельзя придумать.`,
        en: `“On Saturday the school held a charity fair. 342,000 tenge was raised.” All true — and you can’t see a thing. Reportage differs from a news item not in length but in where it puts the reader: by the pie table, next to a jar filling up with coins. There is one condition, though: you can’t make the details up.`
      },
      technique: {
        name: { ru: `Одна минута крупным планом`, en: `One minute in close-up` },
        text: {
          ru: `Заметка отвечает на вопросы «что, где, когда, сколько». Сцена ставит читателя в одну конкретную минуту события.

- Выбери **один момент** и одного-двух людей в нём: что делают их руки, что они говорят, что слышно вокруг.
- Покажи его **в движении**, будто камера включилась посреди действия.
- Потом дай **контекст**: цифры из заметки больше не скучные — читатель уже знает, что за ними стоит.

Главное правило репортажа: сцену нельзя сочинить. Каждая деталь — то, что ты видел сам, узнал у участника или проверил по фото, видео, документу. Не знаешь — спроси, а не додумывай.`,
          en: `A news item answers what, where, when and how many. A scene drops the reader into one particular minute of the event.

- Pick **one moment** and one or two people in it: what their hands are doing, what they say, what you can hear around them.
- Show it **in motion**, as if the camera switched on mid-action.
- Then add **context**: the figures from the news item stop being dull, because the reader now knows what stands behind them.

The first rule of reportage: you can’t invent the scene. Every detail is something you saw, heard from someone who was there, or checked in a photo, video or document. If you don’t know, ask — don’t fill the gap.`
        }
      },
      example: {
        before: {
          ru: `В субботу, 14 октября, в нашей школе прошла благотворительная ярмарка. Ученики продавали выпечку, поделки и книги. Всего удалось собрать 342 тысячи тенге. Средства будут переданы приюту для животных. Организаторы благодарят всех участников и планируют сделать ярмарку ежегодной.`,
          en: `On Saturday 14 October our school held a charity fair. Students sold home baking, crafts and second-hand books. A total of 342,000 tenge was raised, which will go to an animal shelter. The organisers would like to thank everyone who took part and hope to make the fair an annual event.`
        },
        after: {
          ru: `В 11:40 у стола 9 «Б» кончились пирожки с картошкой, и девочка за столом начала резать последний пирог на всё более тонкие куски. Касса — трёхлитровая банка из-под огурцов — звенела так часто, что первоклассники подходили просто послушать. Мальчик в куртке на два размера больше долго выбирал между брелоком-котом и закладкой, потом высыпал на стол всю мелочь и спросил, на что хватит. Хватило на оба.

К вечеру в банке было 342 тысячи тенге. Их передадут приюту для животных.`,
          en: `At 11:40 the Year 10 table ran out of potato pasties, and the girl behind it started cutting the last pie into thinner and thinner slices. The cash box — a three-litre pickle jar — clinked so often that the little ones wandered over just to listen. A boy in a jacket two sizes too big spent ages choosing between a cat keyring and a bookmark, then tipped all his change onto the table and asked what it would buy. It bought both.

By evening the jar held 342,000 tenge. It will go to an animal shelter.`
        },
        changes: [
          {
            ru: `Вместо «ученики продавали выпечку» — одна минута и конкретные люди: что они делают руками и что говорят.`,
            en: `Instead of “students sold home baking”: one minute and particular people — what their hands do and what they say.`
          },
          {
            ru: `Цифра не исчезла, а переехала в конец. Теперь читатель знает, из какой мелочи она сложилась.`,
            en: `The figure hasn’t gone; it has moved to the end. Now the reader knows what kind of small change it was made of.`
          },
          {
            ru: `Благодарности и «планы сделать ярмарку ежегодной» убраны: это язык пресс-релиза, а не событие.`,
            en: `The thank-yous and the plan for an annual fair are gone: that is press-release language, not the event.`
          },
          {
            ru: `Все детали наблюдаемые — время, банка, мальчик с мелочью. Автор их видел, а не догадался о них.`,
            en: `Every detail is observable — the time, the jar, the boy with his change. The writer saw them rather than guessed them.`
          }
        ]
      },
      exercise: {
        type: 'rewrite',
        prompt: {
          ru: `Перепиши заметку как начало репортажа: одна минута у шлагбаума, один-два человека, звуки и движение. Ты там не был, поэтому всё, что придумываешь для тренировки, бери в квадратные скобки: [водитель в домашних тапочках?]. Скобки — это места, куда репортёру ещё нужно сходить или позвонить.`,
          en: `Rewrite the item as the opening of a piece of reportage: one minute at the barrier, one or two people, sounds and movement. You weren’t there, so anything you imagine for practice goes in square brackets: [driver in house slippers?]. The brackets are the places a reporter would still have to go to, or ring.`
        },
        config: {
          source: {
            ru: `В ночь на 3 ноября в горах выпал первый снег. Утром дорогу к горнолыжному курорту закрыли для легковых автомобилей до окончания расчистки. По данным дорожной службы, на отдельных участках толщина снежного покрова достигла 20 сантиметров. Движение планируется открыть во второй половине дня. Водителям рекомендуют не выезжать в горы без зимней резины. Автобусы ходят с задержками.`,
            en: `Overnight on 3 November the first snow of the season fell in the mountains. In the morning the road up to the ski resort was closed to cars until it could be cleared. According to the road maintenance service, snow reached a depth of 20 centimetres in places. The road is expected to reopen in the afternoon. Drivers are advised not to travel into the mountains without winter tyres. Buses are running with delays.`
          },
          placeholder: { ru: `У шлагбаума слышно…`, en: `At the barrier you can hear…` },
          then: {
            ru: `Составь список: какие факты из твоей сцены пришлось бы узнать или проверить до публикации — и у кого или где (дорожная служба, водитель автобуса, фото, прогноз погоды)?`,
            en: `Now make a list: which facts in your scene would you have to find out or check before publishing — and who or what would you check them with (the road service, a bus driver, photos, the weather forecast)?`
          }
        }
      },
      harder: {
        type: 'fields',
        prompt: {
          ru: `Спланируй репортаж о реальном событии, на которое ты действительно можешь прийти в ближайшие две недели: матч, открытие выставки, субботник, ярмарка, репетиция школьного спектакля.`,
          en: `Plan a piece of reportage about a real event you can actually get to in the next two weeks: a match, an exhibition opening, a clean-up day, a fair, a rehearsal of the school play.`
        },
        config: {
          fields: [
            { id: 'event', label: { ru: `Событие, место, дата`, en: `Event, place, date` }, hint: { ru: `Только то, куда ты точно попадёшь.`, en: `Only something you’re sure to get to.` } },
            { id: 'question', label: { ru: `Что я хочу понять`, en: `What I want to find out` }, hint: { ru: `Не «опишу ярмарку», а, например, «зачем сюда приходят те, кто ничего не покупает?»`, en: `Not “I’ll describe the fair” but, say, “why do people come who never buy anything?”` } },
            { id: 'moment', label: { ru: `Какой момент постараюсь увидеть`, en: `The moment I’ll try to catch` }, hint: { ru: `Начало, пик, закрытие — время, когда что-то меняется.`, en: `The start, the peak, packing up — a time when something changes.` } },
            { id: 'people', label: { ru: `С кем поговорю и как спрошу разрешения`, en: `Who I’ll talk to, and how I’ll ask permission` }, hint: { ru: `Представься, скажи, для чего текст, спроси, можно ли назвать имя и процитировать.`, en: `Introduce yourself, say what the piece is for, ask whether you may use their name and quote them.` }, rows: 2 },
            { id: 'facts', label: { ru: `Какие факты проверю и где`, en: `Which facts I’ll check, and where` }, hint: { ru: `Цифры, время, названия: у организатора, в объявлении, на сайте.`, en: `Figures, times, names: with the organiser, on the poster, on the website.` }, rows: 2 },
            { id: 'ethics', label: { ru: `Кого и что не буду показывать`, en: `Who and what I won’t show` }, hint: { ru: `Лица и имена случайных людей, детей без согласия родителей, чужие переписки.`, en: `Faces and names of passers-by, children without their parents’ consent, other people’s messages.` } }
          ],
          then: {
            ru: `После события сразу напиши первые 150 слов — по свежим заметкам, пока детали не стёрлись.`,
            en: `Straight after the event, write the first 150 words from your fresh notes, before the details fade.`
          }
        }
      },
      hint: {
        ru: `Начни со звука: «У шлагбаума слышно [мотор снегоуборщика?]…». Звук сразу ставит читателя на место и не требует громких слов. И привыкай к скобкам с первой фразы: ты там не был, так что каждый звук пока — вопрос, который репортёру предстоит проверить.`,
        en: `Start with a sound: “At the barrier you can hear [a snowplough engine?]…”. Sound puts the reader on the spot without any grand words. And get used to the brackets from the first line: you weren’t there, so every sound is still a question a reporter would have to check.`
      },
      improve: {
        ru: `Найди в сцене одно предложение-вывод («все были недовольны», «царила суматоха») и замени его действием одного человека, по которому этот вывод видно.`,
        en: `Find one sentence of conclusion in your scene (“everyone was annoyed”, “it was chaos”) and replace it with one person’s action that makes the conclusion visible.`
      },
      selfCheck: [
        { ru: `Сцена происходит в одну конкретную минуту, а не «вообще»?`, en: `Does the scene happen in one particular minute rather than “in general”?` },
        { ru: `В ней есть хотя бы один человек, который что-то делает?`, en: `Is there at least one person doing something?` },
        { ru: `Факты и цифры из заметки сохранились и стоят после сцены?`, en: `Have the facts and figures from the item survived, placed after the scene?` },
        { ru: `Всё додуманное помечено квадратными скобками?`, en: `Is everything I imagined marked with square brackets?` },
        { ru: `Я знаю, у кого или где проверить каждую скобку?`, en: `Do I know who or what to check each bracket with?` }
      ],
      discuss: {
        ru: `Где граница между «я представил, как это могло быть» и «я обманул читателя»? Можно ли в репортаже написать «наверное, он думал…»?`,
        en: `Where is the line between “I imagined how it might have been” and “I misled the reader”? Can reportage ever say “he was probably thinking…”?`
      },
      reflect: {
        ru: `Какую деталь из твоей сцены было бы труднее всего проверить? Как бы ты это сделал?`,
        en: `Which detail in your scene would be hardest to check? How would you go about it?`
      },
      transfer: {
        ru: `Сцена с эффектом присутствия нужна не только в репортаже: в конкурсном эссе она служит входом в тему, в personal statement — ключевым моментом. Правило одно: сцену из реальности нельзя дорисовать. В рассказе скобки не нужны — там выдумка разрешена. Твой план из сложного варианта может стать основой итогового репортажа маршрута.`,
        en: `A scene with presence isn’t only for reportage: in a competition essay it’s a way into the topic, in a personal statement a key moment. The rule is the same: a real scene can’t be touched up. In a story you don’t need brackets — invention is allowed there. Your plan from the harder task can become the basis of the route’s final piece of reportage.`
      },
      teacher: {
        note: {
          ru: `Главное в уроке — квадратные скобки: они показывают разницу между художественной и репортажной сценой. Попросите учеников обменяться текстами и найти непомеченные выдумки — это быстро учит договору с читателем. Мастерство отвечает за то, *как* рассказано, но не за то, *что* произошло. Хорошее продолжение — сходить на событие из сложного варианта. Мысль о том, что репортажный стиль даёт эффект присутствия в любом тексте, — из анонсов мастер-классов ВШЭ.`,
          en: `The key to this lesson is the square brackets: they show the difference between a fictional scene and a reported one. Ask students to swap texts and hunt for unmarked inventions — it teaches the contract with the reader fast. Craft governs *how* something is told, never *what* happened. A good follow-up is actually attending the event from the harder task. The idea that reportage style creates presence in any kind of writing comes from the HSE masterclass announcements.`
        },
        source: ['hse-spb', 'owl-cnf', '826-wyw', 'original']
      }
    },

    {
      id: 'real-2',
      route: 'real',
      n: 2,
      minutes: 10,
      skills: ['observation', 'facts'],
      genres: ['reportage', 'description', 'story'],
      title: { ru: `Наблюдатель в точке`, en: `The observer on the spot` },
      learn: {
        ru: `Собирать материал для репортажа в одной точке за десять минут и строить из него начало, в котором читатель видит место и понимает, о чём будет текст.`,
        en: `Gather material for reportage from one spot in ten minutes, and build an opening that lets the reader see the place and sense what the piece is about.`
      },
      hook: {
        ru: `Репортёр не всегда ждёт большого события. Иногда он садится на скамейку у входа в метро и десять минут просто смотрит. За это время что-то обязательно меняется: пройдёт волна людей, закроется киоск, кто-то кому-то позвонит. Задача — заметить, что именно.`,
        en: `A reporter doesn’t always wait for a big event. Sometimes they sit on a bench by a metro entrance and just watch for ten minutes. Something always changes in that time: a wave of people passes, a kiosk shuts, someone makes a phone call. The job is to notice exactly what.`
      },
      technique: {
        name: { ru: `Десять минут в одной точке`, en: `Ten minutes, one spot` },
        text: {
          ru: `Выбери место и не двигайся. Записывай не впечатления, а улики: звуки, действия людей, обрывки фраз. Раз в несколько минут отмечай время — так в заметках появится движение.

Потом найди **деталь, которая объясняет всё**: одну, в которой видна суть места. Лид — первый абзац репортажа — часто строится вокруг неё: деталь, затем фраза-другая контекста.

Этика: ты наблюдаешь, а не выслеживаешь. Не снимай лица без спроса, не записывай имена и приметы, по которым человека можно узнать. Подслушанную фразу приводи без имени, а слишком личное не записывай вовсе.`,
          en: `Choose a spot and stay put. Write down evidence, not impressions: sounds, what people do, scraps of speech. Every few minutes, note the time — that puts movement into your notes.

Then find **the detail that explains everything**: the one that holds the essence of the place. The lead — the first paragraph of the piece — is often built around it: the detail, then a sentence or two of context.

Ethics: you are observing, not tailing anyone. Don’t photograph faces without asking; don’t note names or features that would identify someone. Quote an overheard line without a name, and leave anything too private out altogether.`
        }
      },
      example: {
        before: {
          ru: `Я сидела на Зелёном базаре. Там было очень много людей, все куда-то спешили и что-то покупали. Было шумно и многолюдно. Продавцы предлагали свои товары. Пахло специями. Базар — это целый мир, где кипит жизнь.`,
          en: `I sat at the Green Bazaar. There were lots of people, all rushing about and buying things. It was noisy and crowded. Sellers were offering their goods. It smelled of spices. A bazaar is a whole world, bursting with life.`
        },
        after: {
          ru: `9:05. Продавщица кураги протирает тряпкой весы — сначала площадку, потом табло, — хотя на них ещё ничего не взвешивали. За соседним прилавком мужчина режет дыню тонкими лепестками и протягивает их на ноже всем подряд — пробовать. «Мне не на сейчас, мне на свадьбу в субботу», — объясняет кому-то женщина с блокнотом.

9:15. У весов очередь. Тряпка висит на гвозде.

Зелёный базар в будни начинается не с покупок, а с подготовки к ним.`,
          en: `9:05. The dried-apricot seller wipes her scales with a cloth — first the platform, then the display — though nothing has been weighed on them yet. At the next stall a man slices a melon into thin petals and holds them out on the knife to anyone passing — try it. “It’s not for now, it’s for a wedding on Saturday,” a woman with a notebook explains to someone.

9:15. There’s a queue at the scales. The cloth hangs on a nail.

On a weekday morning the Green Bazaar begins not with buying, but with getting ready to sell.`
        },
        changes: [
          {
            ru: `Общие слова («многолюдно», «кипит жизнь») заменены действиями конкретных людей.`,
            en: `General words (“crowded”, “bursting with life”) are replaced by what particular people do.`
          },
          {
            ru: `Отметки времени создают движение: за десять минут видно, как меняется место.`,
            en: `The timestamps create movement: in ten minutes you watch the place change.`
          },
          {
            ru: `Подслушанная фраза приведена без имени и примет — её нельзя связать с конкретной женщиной.`,
            en: `The overheard line comes with no name or description — it can’t be traced to a particular woman.`
          },
          {
            ru: `Тряпка на гвозде — деталь, которая объясняет всё: подготовка закончилась, день начался. Последняя фраза даёт смысл, но коротко.`,
            en: `The cloth on the nail is the detail that explains everything: getting ready is over, the day has begun. The last sentence gives the meaning, briefly.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Выбери общественное место, где можно спокойно посидеть десять минут: остановка, двор, фойе, кафе, парк, школьная столовая на перемене. Заполняй поля прямо на месте или сразу после, по свежей памяти.`,
          en: `Pick a public place where you can sit quietly for ten minutes: a bus stop, a courtyard, a foyer, a café, a park, the school canteen at break. Fill in the fields on the spot or straight afterwards, while it’s fresh.`
        },
        config: {
          fields: [
            { id: 'place', label: { ru: `Место и время`, en: `Place and time` }, hint: { ru: `Точно: «остановка у ЦУМа, вторник, 16:20», а не «на улице».`, en: `Precisely: “the bus stop by the old department store, Tuesday, 4.20 pm”, not “in the street”.` } },
            { id: 'sounds', label: { ru: `Три звука`, en: `Three sounds` }, hint: { ru: `Хотя бы один тихий — его легче всего пропустить.`, en: `At least one quiet one — they’re the easiest to miss.` }, rows: 3 },
            { id: 'actions', label: { ru: `Три вещи, которые делают люди`, en: `Three things people do` }, hint: { ru: `Действия, а не внешность: кто что держит, куда смотрит, как ждёт.`, en: `Actions, not looks: who is holding what, where they’re looking, how they wait.` }, rows: 3 },
            { id: 'phrase', label: { ru: `Одна подслушанная фраза`, en: `One overheard line` }, hint: { ru: `Дословно, без имени и примет говорящего. Если разговор личный — не записывай.`, en: `Word for word, with no name or description of the speaker. If the conversation is private, leave it.` } },
            { id: 'key', label: { ru: `Деталь, которая объясняет всё`, en: `The detail that explains everything` }, hint: { ru: `Если бы в тексте могла остаться только одна деталь — какая?`, en: `If only one detail could stay in the piece, which would it be?` } },
            { id: 'change', label: { ru: `Что изменилось за десять минут`, en: `What changed in ten minutes` }, hint: { ru: `Свет, поток людей, звук, очередь, погода.`, en: `The light, the flow of people, the sound, a queue, the weather.` } }
          ],
          then: {
            ru: `Напиши начало репортажа — 150–250 слов. Начни с детали или действия, а не с «Я пришёл в…». Всё — только из твоих наблюдений.`,
            en: `Write the opening of a piece of reportage, 150–250 words. Start with a detail or an action, not “I went to…”. Everything must come from what you actually observed.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Вернись в ту же точку в другое время: утром вместо вечера, в выходной вместо будней, в дождь. Снова заполни те же поля и напиши абзац о том, что изменилось. Иногда именно сравнение двух визитов становится настоящей темой репортажа.`,
          en: `Go back to the same spot at a different time: morning instead of evening, a weekend instead of a weekday, in the rain. Fill in the same fields again and write a paragraph on what changed. Sometimes the comparison between two visits turns out to be the real subject of the piece.`
        }
      },
      hint: {
        ru: `Начни с поля «Три звука» и закрой глаза на полминуты. Первый звук, который услышишь, запиши как есть: «шипит дверь автобуса», «кто-то стучит ложкой по стакану».`,
        en: `Start with “Three sounds” and close your eyes for thirty seconds. Write down the first sound exactly as it is: “a bus door hissing”, “someone tapping a spoon against a glass”.`
      },
      improve: {
        ru: `Найди в начале репортажа место, где ты пересказываешь свои впечатления или оценки. Замени его одним наблюдением из полей — лучше всего тем, что изменилось за десять минут.`,
        en: `Find the spot in your opening where you report your impressions or judgements. Replace it with one observation from your notes — ideally what changed in the ten minutes.`
      },
      selfCheck: [
        { ru: `В тексте есть точное место и время?`, en: `Does the text give a precise place and time?` },
        { ru: `Первое предложение — деталь или действие, а не «Я пришёл…»?`, en: `Is the first sentence a detail or an action rather than “I went…”?` },
        { ru: `Подслушанную фразу нельзя связать с конкретным человеком?`, en: `Is it impossible to trace the overheard line to a particular person?` },
        { ru: `Всё, что есть в тексте, я видел или слышал сам?`, en: `Did I see or hear for myself everything that’s in the text?` },
        { ru: `Читатель понимает, о чём будет репортаж дальше?`, en: `Can the reader tell where the piece is heading?` }
      ],
      discuss: {
        ru: `Где заканчивается наблюдение и начинается вторжение в чужую жизнь? Можно ли записать подслушанный разговор о чьей-то болезни?`,
        en: `Where does observing end and intruding begin? Would it be all right to write down an overheard conversation about someone’s illness?`
      },
      reflect: {
        ru: `Что ты заметил только на восьмой-девятой минуте? Почему не раньше?`,
        en: `What did you only notice in the eighth or ninth minute? Why not earlier?`
      },
      transfer: {
        ru: `Наблюдение из одной точки — фундамент итогового репортажа на 500–700 слов: сохрани эти поля, к ним добавятся разговоры с людьми и проверенные факты. В рассказе тот же приём создаёт место, которому веришь; в эссе даёт короткий вход в тему. Разница: в рассказе можно добавить звук, которого не было, в репортаже — нельзя.`,
        en: `Observing from one spot is the foundation of the route’s final 500–700-word piece of reportage: keep these notes — interviews and checked facts will be added to them. In a story the same technique builds a setting you believe in; in an essay it gives a short way into the topic. The difference: in a story you may add a sound that wasn’t there; in reportage you may not.`
      },
      teacher: {
        note: {
          ru: `Если выходить из здания нельзя, подойдут коридор, окно, столовая или библиотека. Обсудите этику заранее: не снимать лица, не записывать приметы, пропускать личные разговоры. Поля заполняются короткими пунктами, а не предложениями: сначала собрать, потом выбрать. Хорошо работает «слепое» чтение: группа угадывает место по началу текста без названия.`,
          en: `If students can’t leave the building, a corridor, a window, the canteen or the library will do. Discuss the ethics beforehand: no photos of faces, no identifying features, skip private conversations. The fields are filled with short bullet points, not sentences: collect first, select later. “Blind” reading works well: the group guesses the place from an opening with the name removed.`
        },
        source: ['hse-spb', 'ou-know', '826-wyw', 'original']
      }
    },

    {
      id: 'real-3',
      route: 'real',
      n: 3,
      minutes: 10,
      skills: ['scene', 'character', 'reflection'],
      genres: ['scene', 'statement', 'contest'],
      title: { ru: `Семейный эпизод с уважением к людям`, en: `A family episode, told with respect` },
      learn: {
        ru: `Превращать реальный семейный эпизод в сцену, где близкие люди видны сложными и живыми, — не выдавая их секретов и не смеясь над ними.`,
        en: `Turn a real family episode into a scene where the people close to you come across as complex and alive — without giving away their secrets or laughing at them.`
      },
      hook: {
        ru: `Самые живые истории часто случаются дома: спор о том, сколько моркови кладут в плов, поездка на дачу, дядя, который двадцать минут прощается в прихожей. Но у героев таких текстов есть особенность: они настоящие. Они могут это прочитать. Как написать честно — и потом спокойно смотреть им в глаза?`,
        en: `Some of the liveliest stories happen at home: an argument about how much carrot goes into plov, a drive out to the dacha, an uncle who takes twenty minutes to say goodbye in the hallway. But the characters in these stories have one thing in common: they’re real. They might read it. How do you write honestly and still look them in the eye afterwards?`
      },
      technique: {
        name: { ru: `Поступки, а не диагнозы`, en: `Actions, not diagnoses` },
        text: {
          ru: `Реальный человек в тексте — не персонаж, которого можно подогнать под сюжет. Несколько правил:

- **Показывай поступки и слова**, а не ставь диагнозы: не «папа вспыльчивый», а что именно он сделал.
- **Признай, чего не знаешь.** У другого человека своя версия. Фраза вроде «я до сих пор не знаю, почему она промолчала» делает текст честнее и глубже.
- **Не выдавай чужих тайн** и не смейся над слабостями. Смешным может быть момент, но не человек.
- Если текст прочитает кто-то ещё, **спроси разрешения** у тех, о ком пишешь, или измени имена и узнаваемые подробности.`,
          en: `A real person on the page is not a character you can bend to fit the plot. A few rules:

- **Show actions and words** instead of handing out diagnoses: not “Dad has a temper” but what exactly he did.
- **Admit what you don’t know.** The other person has their own version. A line like “I still don’t know why she said nothing” makes the piece more honest and deeper.
- **Don’t give away other people’s secrets** or mock their weaknesses. A moment can be funny; a person shouldn’t be the joke.
- If anyone else will read it, **ask permission** from the people you write about, or change names and recognisable details.`
        }
      },
      example: {
        before: {
          ru: `Мой дедушка очень упрямый и никогда не признаёт, что не прав. Однажды мы ехали на дачу, и он опять заблудился, но не хотел смотреть в навигатор. Все над ним смеялись. Он у нас вообще смешной, вечно всё путает.`,
          en: `My grandad is really stubborn and never admits he’s wrong. Once we were driving to the dacha and he got lost again, but he refused to look at the satnav. Everyone laughed at him. He’s a funny one, always getting things mixed up.`
        },
        after: {
          ru: `На развилке за Талгаром дедушка сбавил скорость и долго смотрел на две одинаковые дороги. Мама протянула ему телефон с картой. Он отодвинул её руку — не резко, двумя пальцами — и повернул направо. Через двадцать минут мы стояли у чужих ворот. Он вышел, постоял и сказал: «Раньше тут был тополь».

Я до сих пор не знаю, что он искал — дорогу или тот тополь.`,
          en: `At the fork past Talgar, Grandad slowed down and looked for a long time at two identical roads. Mum held out her phone with the map. He moved her hand aside — not sharply, with two fingers — and turned right. Twenty minutes later we were parked at somebody else’s gate. He got out, stood there a while and said, “There used to be a poplar here.”

I still don’t know what he was looking for — the road, or that poplar.`
        },
        changes: [
          {
            ru: `Ярлыки «упрямый», «смешной», «всё путает» заменены поступками: отодвинул руку, повернул, вышел, постоял.`,
            en: `The labels “stubborn”, “funny” and “mixed up” are replaced by actions: he moves her hand aside, turns, gets out, stands there.`
          },
          {
            ru: `Над дедушкой больше никто не смеётся. Смешное и грустное остались в самом моменте, а не в оценке автора.`,
            en: `Nobody laughs at Grandad any more. Whatever is funny or sad stays in the moment itself, not in the writer’s verdict.`
          },
          {
            ru: `Последняя фраза признаёт, что у дедушки своя версия, — и он становится сложнее, чем «упрямый».`,
            en: `The last line admits that Grandad has his own version of things — and he becomes more complex than “stubborn”.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Выбери небольшой семейный эпизод — не самый болезненный, а тот, о котором тебе интересно думать. Сначала разбери его по полям.`,
          en: `Choose a small family episode — not the most painful one, but one you find interesting to think about. First take it apart, field by field.`
        },
        config: {
          fields: [
            { id: 'episode', label: { ru: `Эпизод в одном предложении`, en: `The episode in one sentence` }, hint: { ru: `Где и когда: «ужин после маминой ночной смены», «очередь в ЦОН с бабушкой».`, en: `Where and when: “dinner after Mum’s night shift”, “queuing at the public services centre with Gran”.` } },
            { id: 'who', label: { ru: `Кто был рядом`, en: `Who was there` }, hint: { ru: `Можно без имён: «старший брат», «соседка».`, en: `No names needed: “my older brother”, “the neighbour”.` } },
            { id: 'did', label: { ru: `Что именно они делали и говорили`, en: `What exactly they did and said` }, hint: { ru: `Действия и реплики — насколько ты их помнишь. Не помнишь дословно — так и отметь.`, en: `Actions and lines, as far as you remember them. If you don’t remember the exact words, say so.` }, rows: 3 },
            { id: 'unknown', label: { ru: `Чего я не знаю об их стороне`, en: `What I don’t know about their side` }, hint: { ru: `Что они думали, почему так поступили, что было до и после.`, en: `What they were thinking, why they acted as they did, what came before and after.` }, rows: 2 },
            { id: 'leave', label: { ru: `Что оставлю за кадром из уважения`, en: `What I’ll leave out, out of respect` }, hint: { ru: `Чужие тайны, здоровье, деньги — всё, что человеку было бы неприятно увидеть написанным.`, en: `Other people’s secrets, health, money — anything the person wouldn’t want to see in writing.` } }
          ],
          then: {
            ru: `Напиши сцену на 150–250 слов. Покажи поступки и слова, а в конце — одну фразу о том, чего ты не знаешь или что понял только позже.`,
            en: `Write the scene in 150–250 words. Show actions and words, and end with one line about what you don’t know, or understood only later.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Напиши ту же сцену ещё раз — глазами другого участника. Держись того, что он действительно говорил и делал; всё, что додумываешь о его мыслях, начинай с «может быть» или «мне кажется». Если захочешь, спроси этого человека, как он помнит тот день, и сравни версии.`,
          en: `Write the same scene again from another person’s point of view. Stick to what they actually said and did; begin anything you guess about their thoughts with “maybe” or “I think”. If you like, ask that person how they remember the day, and compare the versions.`
        }
      },
      hint: {
        ru: `Начни с предмета, который был у кого-то в руках в тот момент: чашка, ключи, пульт, телефон. «Мама держала…» — и дальше что она с ним сделала.`,
        en: `Start with an object someone was holding at that moment: a cup, keys, the remote, a phone. “Mum was holding…” — then what she did with it.`
      },
      improve: {
        ru: `Найди в сцене одно слово-диагноз о человеке («упрямый», «вредная», «странный») и замени его поступком, после которого читатель сам решит, какой он.`,
        en: `Find one diagnosis word about a person in your scene (“stubborn”, “grumpy”, “weird”) and replace it with an action that lets the reader decide for themselves.`
      },
      selfCheck: [
        { ru: `Люди в сцене что-то делают и говорят, а не просто описаны?`, en: `Do the people in the scene act and speak, rather than just being described?` },
        { ru: `Есть хотя бы одна фраза о том, чего я не знаю об их стороне?`, en: `Is there at least one line about what I don’t know about their side?` },
        { ru: `В тексте нет чужих тайн, которые человек не хотел бы видеть написанными?`, en: `Is the text free of secrets the person wouldn’t want written down?` },
        { ru: `Герой сможет прочитать этот текст без обиды и стыда?`, en: `Could the person read this without feeling hurt or embarrassed?` },
        { ru: `Если текст увидят другие, я спросил разрешения или изменил имена?`, en: `If others will see it, have I asked permission or changed the names?` }
      ],
      discuss: {
        ru: `Может ли текст о близком человеке быть одновременно честным и бережным? Где для тебя граница между «это правда» и «это не моя история»?`,
        en: `Can a piece about someone close to you be honest and gentle at the same time? Where do you draw the line between “this is true” and “this isn’t my story to tell”?`
      },
      reflect: {
        ru: `Изменилось ли что-то в твоём взгляде на этого человека, пока ты заполнял поле «чего я не знаю»?`,
        en: `Did anything change in how you see this person while you were filling in “what I don’t know”?`
      },
      transfer: {
        ru: `Personal statement почти всегда населён реальными людьми: родителями, учителями, друзьями. Читатель замечает, как ты о них пишешь: сложный и уважительный взгляд на других говорит о зрелости больше, чем любые слова о себе. В репортаже правила те же, только строже: согласие героев и проверка фактов обязательны.`,
        en: `A personal statement is nearly always full of real people: parents, teachers, friends. Readers notice how you write about them: a complex, respectful view of others says more about your maturity than anything you say about yourself. In reportage the rules are the same, only stricter: consent and fact-checking are required.`
      },
      personalAlt: {
        ru: `Не хочешь писать о своей семье — это нормально. Возьми публичное событие, где были разные поколения (концерт, праздник во дворе), сцену, которую ты наблюдал в кафе (без имён и примет), или придумай семью целиком. Правила уважения работают и для выдуманных людей: их тоже можно показать сложными, а не смешными.`,
        en: `If you’d rather not write about your own family, that’s fine. Take a public event with several generations present (a concert, a celebration in the courtyard), a scene you watched in a café (no names or identifying details), or invent a family from scratch. The rules of respect work for invented people too: they can be complex rather than a joke.`
      },
      teacher: {
        note: {
          ru: `Не требуйте семейных текстов и не просите читать их вслух: делиться — только по желанию, а выбор альтернативы не нужно объяснять. Если в тексте появляется тревожное (насилие, угроза безопасности), действуйте по школьным правилам защиты детей, а не как редактор. Идея — из мастер-класса ВШЭ о том, как живо и убедительно описывать родственников; этика — из практики документальной прозы: реальных людей можно показывать, но нельзя присочинять. Сложный вариант можно превратить в короткое интервью с открытыми вопросами.`,
          en: `Don’t require family texts and don’t ask for them to be read aloud: sharing is voluntary, and nobody has to explain choosing the alternative. If something worrying appears (violence, a safety risk), follow your school’s safeguarding procedure rather than responding as an editor. The idea comes from the HSE masterclass on describing relatives vividly and convincingly; the ethics come from creative nonfiction practice: real people may be portrayed, but not embellished. The harder task can become a short interview built on open questions.`
        },
        source: ['hse-spb', 'owl-cnf', '826-wyw', 'original']
      }
    },

    {
      id: 'real-4',
      route: 'real',
      n: 4,
      minutes: 10,
      skills: ['argument', 'words'],
      genres: ['review', 'contest'],
      title: { ru: `Рецензия: от «понравилось» к аргументу`, en: `Reviews: beyond “I liked it”` },
      learn: {
        ru: `Превращать впечатление в оценку, которую можно доказать: вердикт, два довода с деталями из произведения и честный ответ, кому оно подойдёт.`,
        en: `Turn an impression into a judgement you can back up: a verdict, two reasons supported by details from the work, and an honest answer about who it’s for.`
      },
      hook: {
        ru: `«Мне понравилось» — это правда, но ещё не рецензия. Читателю мало знать, что тебе понравилось: ему нужно решить, тратить ли на это свой вечер. Рецензия — спор, в котором ты показываешь доказательства. Даже если речь о новом сериале или о шаурме у метро.`,
        en: `“I liked it” is true, but it isn’t a review yet. Readers don’t just want to know that you liked something; they have to decide whether to spend their evening on it. A review is an argument where you show your evidence — even if the subject is a new series or the shawarma stand by the metro.`
      },
      technique: {
        name: { ru: `Вердикт плюс улики`, en: `Verdict plus evidence` },
        text: {
          ru: `Рецензия держится на трёх опорах:

- **Вердикт** — одна фраза, с которой можно не согласиться. «Интересный фильм» — не вердикт. «Фильм о спорте, в котором лучшие сцены происходят в раздевалке» — вердикт.
- **Доводы с уликами.** Каждый довод опирается на конкретную деталь: сцену, реплику, кадр, вкус, кнопку в приложении. Деталь должна быть правдой: рецензент ничего не приписывает произведению.
- **Честная рамка:** кому это подойдёт, кому нет и чего не хватило.

Пересказ сюжета — не довод. Оставь на него одну-две фразы и не раскрывай финал.`,
          en: `A review stands on three supports:

- **A verdict** — one sentence someone could disagree with. “An interesting film” isn’t a verdict. “A sports film whose best scenes happen in the changing room” is.
- **Reasons with evidence.** Each reason rests on a specific detail: a scene, a line, a shot, a flavour, a button in an app. The detail must be true — a reviewer never credits a work with something that isn’t there.
- **A fair frame:** who it’s for, who it isn’t for, and what was missing.

Retelling the plot is not a reason. Give it a sentence or two at most, and don’t give away the ending.`
        }
      },
      example: {
        before: {
          ru: `Посмотрела фильм «Сорок минут до Медеу». Мне очень понравилось! Интересный сюжет, хорошие актёры, классная музыка. Там про девочку, которая едет на соревнования, и у неё не сразу всё получается. Советую всем, не пожалеете!`,
          en: `I watched Forty Minutes to Medeu. I really liked it! Interesting plot, good actors, great music. It’s about a girl going to a competition, and things don’t work out for her straight away. I recommend it to everyone, you won’t regret it!`
        },
        after: {
          ru: `«Сорок минут до Медеу» — фильм о конькобежке, в котором самое напряжённое — не забег, а дорога к нему.

Лёд режиссёр почти не показывает. Зато автобусу в гору отдано двадцать минут: героиня трижды перевязывает шнурки, тренер молча протягивает ей термос. В этих паузах больше тревоги, чем в финальном забеге, снятом по привычной схеме.

Тем, кто ждёт спортивной драмы с победной музыкой, будет скучно. Тем, кто помнит дорогу на экзамен, — нет.`,
          en: `Forty Minutes to Medeu is a film about a speed skater in which the tensest part is not the race but the journey to it.

The director barely shows the ice. Instead, twenty minutes go to the bus ride up the mountain: the heroine reties her laces three times; her coach hands her a flask without a word. There is more dread in those pauses than in the final race, which is filmed by the book.

Anyone expecting a sports drama with a triumphant soundtrack will be bored. Anyone who remembers the journey to an exam won’t.`
        },
        changes: [
          {
            ru: `«Понравилось» заменено вердиктом, с которым можно спорить: главное в фильме — дорога, а не забег.`,
            en: `“I liked it” has become a verdict you could argue with: the heart of the film is the journey, not the race.`
          },
          {
            ru: `«Интересный сюжет» доказан деталями: шнурки, термос, двадцать минут в автобусе.`,
            en: `“Interesting plot” is now proved by details: the laces, the flask, twenty minutes on the bus.`
          },
          {
            ru: `Появилась претензия — финал снят по схеме. Одно честное «но» делает похвалу убедительнее.`,
            en: `There’s a criticism too — the final race is filmed by the book. One honest “but” makes the praise more convincing.`
          },
          {
            ru: `«Советую всем» заменено точным адресом: кому понравится, а кому нет.`,
            en: `“I recommend it to everyone” has become a precise address: who will enjoy it and who won’t.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Выбери то, что ты недавно посмотрел, прочитал, послушал, попробовал или скачал, — и к чему можешь вернуться, чтобы проверить детали. Разбери своё мнение по полям.`,
          en: `Pick something you’ve recently watched, read, listened to, tasted or downloaded — something you can go back to and check. Break your opinion down, field by field.`
        },
        config: {
          fields: [
            { id: 'what', label: { ru: `Что это (только факты)`, en: `What it is (facts only)` }, hint: { ru: `Название, автор или создатель, жанр, год, где найти. Проверь написание имён.`, en: `Title, creator, genre, year, where to find it. Check how the names are spelled.` } },
            { id: 'verdict', label: { ru: `Вердикт в одной фразе`, en: `The verdict in one sentence` }, hint: { ru: `Такой, с которым кто-то может не согласиться.`, en: `One that someone could disagree with.` } },
            { id: 'reason1', label: { ru: `Довод 1 + деталь-доказательство`, en: `Reason 1 + a detail as evidence` }, hint: { ru: `Сцена, реплика, вкус, кнопка — то, что можно найти и проверить.`, en: `A scene, a line, a flavour, a button — something anyone could find and check.` }, rows: 2 },
            { id: 'reason2', label: { ru: `Довод 2 + деталь-доказательство`, en: `Reason 2 + a detail as evidence` }, hint: { ru: `Довод может быть и против: рецензия — не реклама.`, en: `A reason can go against it, too: a review isn’t an advert.` }, rows: 2 },
            { id: 'audience', label: { ru: `Кому подойдёт, а кому нет`, en: `Who it’s for, and who it isn’t for` }, hint: { ru: `Не «всем», а «тем, кто…».`, en: `Not “everyone” but “anyone who…”.` } },
            { id: 'missing', label: { ru: `Чего не хватило`, en: `What was missing` }, hint: { ru: `Одна честная претензия, даже если в целом понравилось.`, en: `One honest criticism, even if you liked it overall.` } }
          ],
          then: {
            ru: `Собери рецензию на 150 слов: вердикт в начале, два довода с деталями, в финале — кому это подойдёт. Пересказ — не больше двух фраз.`,
            en: `Put together a 150-word review: verdict first, two reasons with details, and end with who it’s for. No more than two sentences of plot.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Напиши честную и остроумную рецензию на то, что никто не рецензирует: автобусный маршрут, котлету в столовой, школьное приложение, лифт в твоём доме. Юмор — в точности деталей, а не в насмешке над людьми, которые там работают.`,
          en: `Write a fair, witty review of something nobody ever reviews: a bus route, the canteen’s meatballs, the school app, the lift in your building. The humour comes from precise details, not from sneering at the people who work there.`
        },
        config: {
          rules: [
            { kind: 'max-words', n: 120 },
            { kind: 'ban-words', words: {
              ru: ['понравилось', 'классный', 'классная', 'классное', 'интересный', 'интересная', 'интересное', 'советую'],
              en: ['liked', 'great', 'interesting', 'amazing', 'awesome', 'recommend']
            } }
          ]
        }
      },
      hint: {
        ru: `Начни вердикт словами «Это … , в котором…» и допиши, что в нём главное. Потом спроси себя: «Где именно я это увидел?» Ответ — твой первый довод.`,
        en: `Start your verdict with “It’s a … in which…” and finish it with what matters most. Then ask yourself: “Where exactly did I see that?” The answer is your first reason.`
      },
      improve: {
        ru: `Найди в рецензии одно оценочное слово без доказательства («затянуто», «смешно», «удобно») и поставь сразу после него деталь, которая его подтверждает.`,
        en: `Find one judgement word in your review that has no evidence (“slow”, “funny”, “easy to use”) and put the detail that proves it right after it.`
      },
      selfCheck: [
        { ru: `Вердикт — это позиция, с которой можно спорить?`, en: `Is the verdict a position someone could argue with?` },
        { ru: `У каждого довода есть деталь, которую можно проверить?`, en: `Does each reason have a detail that could be checked?` },
        { ru: `Пересказа не больше двух фраз, и финал не раскрыт?`, en: `Is the plot summary two sentences at most, with the ending kept secret?` },
        { ru: `Я написал, кому это подойдёт, а кому нет?`, en: `Have I said who it’s for and who it isn’t for?` },
        { ru: `Все факты — название, имена, детали — верны?`, en: `Are all the facts — title, names, details — correct?` }
      ],
      discuss: {
        ru: `Может ли рецензия на то, что тебе не понравилось, быть доброй? А восторженная рецензия — нечестной?`,
        en: `Can a review of something you disliked still be kind? Can a rave review be dishonest?`
      },
      reflect: {
        ru: `Изменилось ли твоё мнение, пока ты искал доказательства? В какую сторону?`,
        en: `Did your opinion shift while you were looking for evidence? Which way?`
      },
      transfer: {
        ru: `«Вердикт плюс улики» — скелет любого аргумента. В конкурсном эссе вердикт становится тезисом, а детали — примерами. В репортаже оценку обычно держат при себе, но детали отбирают так же тщательно. Итог маршрута — аргументированная рецензия: этот черновик можно развивать дальше.`,
        en: `Verdict plus evidence is the skeleton of any argument. In a competition essay the verdict becomes your thesis and the details your examples. In reportage you usually keep your judgement to yourself, but you choose details just as carefully. The route ends with a well-argued review — this draft can grow into it.`
      },
      teacher: {
        note: {
          ru: `Фильм в примере придуман для урока. Хорошо работает общий объект: вся группа рецензирует один короткий ролик или песню, потом сравнивает вердикты — видно, что одинаковых нет, а доказательства бывают сильнее и слабее. Полезная разминка: описать сцену по памяти, пересмотреть и сравнить — память часто «улучшает» детали, а рецензия должна опираться на то, что в произведении действительно есть. В рецензии на столовую критикуем блюдо и систему, а не поваров.`,
          en: `The film in the example was invented for the lesson. A shared object works well: the whole group reviews one short video or song and then compares verdicts — no two are the same, and some evidence is stronger than other evidence. A useful warm-up: describe a scene from memory, rewatch it, and compare — memory often “improves” details, and a review must rest on what is actually in the work. In a canteen review, criticise the dish and the system, not the cooks.`
        },
        source: ['owl-cw', 'original']
      }
    },

    {
      id: 'real-5',
      route: 'real',
      n: 5,
      minutes: 10,
      skills: ['facts', 'argument'],
      genres: ['review', 'contest', 'reportage'],
      title: { ru: `Факт, мнение, манипуляция`, en: `Fact, opinion, manipulation` },
      learn: {
        ru: `Отличать в тексте проверяемый факт от мнения и от приёма, который давит на читателя, — и переписывать такой текст честно.`,
        en: `Tell a checkable fact from an opinion and from a trick designed to push the reader — and rewrite that kind of text honestly.`
      },
      hook: {
        ru: `«Учёные доказали: 97% успешных людей встают до шести». Какие учёные? Кого считали успешным? Кто и как это проверял? Мотивационные посты, реклама и часть книг о саморазвитии звучат убедительно, потому что используют приёмы, а не доказательства. Кто знает эти приёмы, лучше от них защищён — и реже прибегает к ним сам.`,
        en: `“Scientists have proven that 97% of successful people get up before six.” Which scientists? Who counted as successful? Who checked, and how? Motivational posts, adverts and some self-help books sound convincing because they use tricks, not evidence. If you know the tricks, you’re better protected from them — and less likely to use them yourself.`
      },
      technique: {
        name: { ru: `Три вопроса к каждой фразе`, en: `Three questions for every sentence` },
        text: {
          ru: `Размечая текст, задавай каждой фразе три вопроса:

- **Можно ли это проверить** — и понятно ли, где? Тогда это утверждение о факте. Оно может оказаться ложным: для этого проверка и нужна.
- **Это чья-то оценка?** «Лучший», «важно», «скучно» — мнение. Мнение не враг, если подано как мнение и чем-то подкреплено.
- **Фраза давит, а не доказывает?** Спешка («последний шанс»), размытый авторитет («учёные доказали»), лесть («ты не такой, как все»), деление на «нас» и «их», обещание, которое нельзя опровергнуть, цифры без источника — это манипуляция.

Одна фраза бывает и мнением, и манипуляцией сразу.`,
          en: `As you mark up a text, ask every sentence three questions:

- **Could this be checked** — and is it clear where? Then it’s a factual claim. It may turn out to be false: that’s what checking is for.
- **Is it someone’s judgement?** “Best”, “important”, “boring” signal opinion. Opinion isn’t the enemy if it’s presented as opinion and backed by something.
- **Is the sentence pushing rather than proving?** Urgency (“last chance”), vague authority (“scientists have proven”), flattery (“you’re not like the rest”), us-versus-them, promises nobody could disprove, numbers with no source — that’s manipulation.

One sentence can be opinion and manipulation at once.`
        }
      },
      example: {
        before: {
          ru: `Учёные давно доказали: кто читает двадцать минут в день, становится успешнее остальных. Пока другие тратят время впустую, ты можешь изменить свою жизнь. Не откладывай — завтра будет поздно!`,
          en: `Scientists proved long ago that people who read for twenty minutes a day end up more successful than everyone else. While others waste their time, you can change your life. Don’t put it off — tomorrow will be too late!`
        },
        after: {
          ru: `Двадцать минут в день — это 140 минут, больше двух часов чтения в неделю. По-моему, это посильная привычка. Сделает ли она кого-то «успешнее», я не знаю: прежде чем писать об этом, я бы нашёл конкретное исследование — кто его проводил, когда и на ком.`,
          en: `Twenty minutes a day comes to 140 minutes — more than two hours of reading a week. In my view, that’s a manageable habit. Whether it makes anyone “more successful”, I don’t know: before claiming that, I’d find a specific study — who ran it, when, and with whom.`
        },
        changes: [
          {
            ru: `Размытый авторитет («учёные доказали») заменён честным «я не знаю» и планом проверки: кто, когда, на ком.`,
            en: `Vague authority (“scientists proved”) is replaced by an honest “I don’t know” and a plan for checking: who, when, with whom.`
          },
          {
            ru: `Спешка и противопоставление «ты и другие» убраны: читателя не пугают и не делят на своих и чужих.`,
            en: `The urgency and the “you versus the others” are gone: the reader is neither frightened nor sorted into winners and losers.`
          },
          {
            ru: `Мнение подано как мнение («по-моему») — это не слабость, а честность.`,
            en: `The opinion is presented as opinion (“in my view”) — that isn’t weakness, it’s honesty.`
          },
          {
            ru: `Появился факт, который проверит любой: 20 × 7 = 140.`,
            en: `There’s now a fact anyone can check: 20 × 7 = 140.`
          }
        ]
      },
      exercise: {
        type: 'annotate',
        prompt: {
          ru: `Это текст-тренажёр, написанный специально для урока: он собирает типичные приёмы мотивационных постов. Выбери тег и нажимай на слова, чтобы их пометить. У слова может быть только один тег: если фраза подходит под два, выбери главный, а сомнения запиши в ответах. Потом ответь на вопросы.`,
          en: `This is a practice text written specially for the lesson: it gathers the typical tricks of motivational posts. Choose a tag and click words to mark them. Each word takes only one tag: if a phrase fits two, pick the main one and note your doubts in the answers. Then answer the questions.`
        },
        config: {
          text: {
            ru: `**Почему 92% подростков никогда не добьются успеха**

Давай честно: большинство твоих сверстников проведут этот вечер в телефоне. Но ты не такой — раз ты читаешь это, ты уже среди немногих.

Учёные давно доказали, что успех на 80% зависит от утренних привычек. Все великие люди вставали в пять утра. Совпадение? Не думаю.

Школа не научит тебя главному. Учителя и родители хотят, чтобы ты был «как все», а система держит тебя в рамках. Те, кто это понял, уже зарабатывают, пока остальные сидят на уроках.

В сутках 24 часа — ровно столько же, сколько у любого миллионера. Вопрос только в том, как ты их используешь.

Мой марафон «Новый ты за 21 день» уже изменил тысячи жизней. Делай всё правильно — и результат гарантирован. А если результата нет, значит, ты просто недостаточно хотел.

Осталось всего 7 мест, завтра цена вырастет вдвое. Решай сейчас: ты с победителями или с теми, кто вечно ищет оправдания?`,
            en: `**Why 92% of teenagers will never make it**

Let’s be honest: most people your age will spend tonight on their phones. But you’re different — if you’re reading this, you’re already one of the few.

Scientists proved long ago that success is 80% down to your morning habits. All the great people in history got up at five. Coincidence? I don’t think so.

School won’t teach you what really matters. Teachers and parents want you to fit in, and the system keeps you in your box. The ones who’ve worked this out are already earning while everyone else sits in lessons.

There are 24 hours in a day — exactly as many as any millionaire has. The only question is how you use them.

My 21-Day New You challenge has already changed thousands of lives. Do it properly and results are guaranteed. And if they don’t come, you simply didn’t want it enough.

Only 7 places left, and tomorrow the price doubles. Decide now: are you with the winners, or with the ones who always have an excuse?`
          },
          tags: [
            { id: 'fact', label: { ru: `Проверяемый факт`, en: `Checkable fact` } },
            { id: 'opinion', label: { ru: `Мнение`, en: `Opinion` } },
            { id: 'manipulation', label: { ru: `Давление, манипуляция`, en: `Pressure, manipulation` } },
            { id: 'number', label: { ru: `Цифра без источника`, en: `Number with no source` } },
            { id: 'uncheckable', label: { ru: `Нельзя проверить`, en: `Can’t be checked` } }
          ],
          questions: [
            { ru: `Найди хотя бы один верный проверяемый факт. Зачем он здесь — объяснить или надавить?`, en: `Find at least one true, checkable fact. What is it doing here — explaining, or pushing?` },
            { ru: `Кого текст делает «врагами» читателя и зачем?`, en: `Who does the text cast as the reader’s enemies, and why?` },
            { ru: `Почему обещание «нет результата — значит, недостаточно хотел» невозможно опровергнуть?`, en: `Why is the promise “no results means you didn’t want it enough” impossible to disprove?` },
            { ru: `Есть ли в тексте хоть одна полезная мысль? Какая?`, en: `Is there a single useful idea in the text? Which one?` }
          ],
          then: {
            ru: `Выпиши приёмы давления, которые нашёл, и рядом с каждым — вопрос, который стоило бы задать автору: «Какие учёные? Где это исследование? Кто считал?»`,
            en: `List the pressure tricks you found and, next to each, the question you’d want to put to the author: “Which scientists? Where’s the study? Who did the counting?”`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Перепиши текст честно, в 100–150 словах. Сохрани одну полезную мысль (например, про утро или про время), убери давление, подай мнение как мнение и добавь один факт, который можно проверить, — с указанием, где именно ты бы его проверил. Не выдумывай цифр и исследований: если не знаешь — так и напиши.`,
          en: `Rewrite the text honestly in 100–150 words. Keep one useful idea (about mornings, say, or about time), drop the pressure, present opinion as opinion, and add one checkable fact — saying exactly where you would verify it. Don’t invent figures or studies: if you don’t know, say so.`
        }
      },
      hint: {
        ru: `Начни с цифр: выдели все числа в тексте и у каждого спроси «откуда?». Потом найди слова «ты», «они», «все», «остальные» — рядом с ними обычно и прячется давление.`,
        en: `Start with the numbers: highlight every figure in the text and ask each one “says who?”. Then look for “you”, “they”, “everyone” and “the rest” — pressure usually hides right next to them.`
      },
      improve: {
        ru: `Возьми одну фразу, которую ты пометил как манипуляцию, и перепиши её честно: оставь мысль, если она там есть, и убери то, что давит.`,
        en: `Take one sentence you tagged as manipulation and rewrite it honestly: keep the idea if there is one, and remove whatever is doing the pushing.`
      },
      selfCheck: [
        { ru: `Я нашёл верный факт, который используется для давления?`, en: `Did I find a true fact being used to apply pressure?` },
        { ru: `Я могу объяснить, чем «проверяемое» отличается от «правдивого»?`, en: `Can I explain the difference between “checkable” and “true”?` },
        { ru: `Каждой цифре я задал вопрос «откуда?»?`, en: `Did I ask every number “says who?”?` },
        { ru: `В моей честной версии нет ни одной выдуманной цифры или цитаты?`, en: `Is my honest version free of invented figures and quotes?` },
        { ru: `Я могу назвать, где проверил бы свой факт?`, en: `Can I say where I would check my fact?` }
      ],
      discuss: {
        ru: `Любая ли реклама — манипуляция? А речь тренера перед матчем? Где граница между «вдохновить» и «надавить»?`,
        en: `Is every advert manipulation? What about a coach’s team talk before a match? Where’s the line between inspiring someone and pushing them?`
      },
      reflect: {
        ru: `Какой приём из этого текста сработал бы на тебе лучше всего? Почему именно он?`,
        en: `Which trick in this text would work best on you? Why that one?`
      },
      transfer: {
        ru: `Разметка «факт — мнение — давление» пригодится везде, где ты пишешь о реальном мире. В рецензии она отделяет вердикт от сведений о произведении, в репортаже — слова героев от проверенных фактов, в конкурсном эссе защищает от громких, но пустых фраз. Перед тем как сдать итоговые репортаж и рецензию, прогони их через три вопроса.`,
        en: `Marking up fact, opinion and pressure is useful wherever you write about the real world. In a review it separates your verdict from information about the work; in reportage, what people say from what has been checked; in a competition essay it guards against loud but empty phrases. Before handing in your final reportage and review, run them through the three questions.`
      },
      teacher: {
        note: {
          ru: `Текст написан для урока и собирает приёмы, типичные для мотивационных постов и части литературы о саморазвитии. Реальные книги и блогеров в классе лучше не высмеивать: разбираем приёмы, а не авторов и не людей, которым такие тексты помогли. Идея — из мастер-класса ВШЭ по аналитическому чтению, где на примере популярных мотивационных авторов разбирают, как управляют вниманием читателя. Спорные случаи разметки — лучший материал для обсуждения: например, «24 часа в сутках» — верный факт, но работает как давление.`,
          en: `The text was written for the lesson and gathers tricks typical of motivational posts and some self-help writing. Avoid mocking real books or bloggers in class: we examine the tricks, not the authors, nor the people such texts have helped. The idea comes from the HSE analytical-reading masterclass, which looks at how popular motivational authors steer readers’ attention. Disputed tags make the best discussion material: “24 hours in a day”, for instance, is a true fact that works as pressure.`
        },
        source: ['hse-spb', 'original']
      }
    }
  ]);
})();
