/* Style Lab — Лаборатория стиля. Twelve techniques; each is a choice with costs, not a formula. */
(function () {
  'use strict';

  SM.addLab([
    {
      id: 'detail',
      title: { ru: `Точная деталь вместо общего прилагательного`, en: `A precise detail, not a general adjective` },
      short: {
        ru: `Вместо вывода («уютный», «грязный») — улика, по которой читатель сделает вывод сам.`,
        en: `Instead of a verdict (“cosy”, “dirty”), give the evidence and let the reader reach the verdict.`
      },
      example: {
        ru: `В кафе на углу меню писали мелом на доске, и половину блюд уже стёрли рукавом. Сахар стоял в стакане с ложкой, салфетки кто-то разрезал пополам. На подоконнике спал кот, и официантка обходила его с подносом, не глядя.`,
        en: `At the café on the corner the menu was chalked on a board, and half the dishes had been rubbed off by someone’s sleeve. The sugar sat in a glass with a spoon in it; someone had cut the napkins in half. A cat slept on the windowsill, and the waitress stepped round it with her tray without looking.`
      },
      flat: {
        ru: `Школьная столовая была шумной и тесной. Еда была невкусной, столы — грязными, а очередь — длинной и медленной. Атмосфера была хаотичной и неприятной.`,
        en: `The school canteen was noisy and cramped. The food was bland, the tables were dirty, and the queue was long and slow. The atmosphere was chaotic and unpleasant.`
      },
      task: {
        ru: `Замени каждое прилагательное-оценку уликой: что ты увидел, услышал или унюхал, из-за чего решил, что здесь «шумно» или «грязно»? Оставь не больше двух прилагательных.`,
        en: `Replace every judging adjective with evidence: what did you see, hear or smell that made you decide it was “noisy” or “dirty”? Keep two adjectives at most.`
      },
      helps: {
        ru: `Когда читатель должен поверить и увидеть место сам: в описании, рассказе, репортаже, эссе о реальном опыте. Одна деталь, которая есть только здесь, сильнее пяти ярлыков.`,
        en: `When the reader needs to believe in a place and see it for themselves: in description, fiction, reportage, an essay about real experience. One detail that exists only here beats five labels.`
      },
      hurts: {
        ru: `Когда деталей слишком много и ни одна не выбрана — читатель тонет в описи. И когда нужна скорость: в погоне или в коротком ответе анкеты честнее написать «было тесно» и двигаться дальше.`,
        en: `When there are too many details and none has been chosen — the reader drowns in an inventory. And when you need speed: in a chase, or a short answer on a form, it’s more honest to write “it was cramped” and move on.`
      },
      fail: {
        text: {
          ru: `В столовой было двенадцать столов с клеёнкой в синюю клетку, сорок три стула, три окна с жалюзи (одно сломано), раздача длиной метра четыре, два котла, поднос с хлебом, плакат про витамины и запах гречки, капусты, компота и хлорки.`,
          en: `The canteen had twelve tables with blue-checked oilcloth, forty-three chairs, three windows with blinds (one broken), a serving counter about four metres long, two vats, a tray of bread, a poster about vitamins and a smell of buckwheat, cabbage, stewed fruit and bleach.`
        },
        why: {
          ru: `Это опись, а не деталь: всё записано, ничего не выбрано. Читатель не понимает, куда смотреть и что думать о месте. Из всего списка хватило бы сломанной жалюзи и запаха хлорки рядом с компотом.`,
          en: `This is an inventory, not a detail: everything is recorded, nothing is chosen. The reader can’t tell where to look or what to make of the place. The broken blind and the smell of bleach next to the stewed fruit would have been enough.`
        }
      },
      meter: 'adjectives',
      tryPrompt: {
        ru: `Найди в своём тексте три прилагательных-оценки. Каждому задай вопрос «почему я так решил?» и замени хотя бы одно ответом.`,
        en: `Find three judging adjectives in your own text. Ask each one “why did I decide that?” and replace at least one with the answer.`
      },
      source: ['ou-fiction', 'owl-cw', 'original']
    },

    {
      id: 'action',
      title: { ru: `Действие вместо объяснения чувства`, en: `An action instead of explaining the feeling` },
      short: {
        ru: `Не «она разозлилась», а то, что она сделала: чувство видно, а не объявлено.`,
        en: `Not “she was furious” but what she did: the feeling is visible, not announced.`
      },
      example: {
        ru: `Кирилл дочитал сообщение и положил телефон на стол. Потом аккуратно, двумя пальцами, перевернул его экраном вниз. Открыл тетрадь по алгебре и минут пять выводил на полях одну и ту же букву «К» — каждый раз жирнее.`,
        en: `Kirill finished reading the message and put his phone on the desk. Then, carefully, with two fingers, he turned it face down. He opened his maths book and spent about five minutes drawing the same letter K in the margin, darker each time.`
      },
      flat: {
        ru: `Когда Айгерим узнала, что её не взяли в сборную, она очень расстроилась. Ей было обидно и грустно, и она злилась на тренера. Она не хотела ни с кем разговаривать.`,
        en: `When Aigerim found out she hadn’t made the team, she was really upset. She felt hurt and sad, and she was angry with the coach. She didn’t want to talk to anyone.`
      },
      task: {
        ru: `Убери все названия чувств. Покажи то же самое двумя-тремя действиями: что Айгерим делает со своей формой, с телефоном, с дверью, с людьми вокруг?`,
        en: `Remove every named feeling. Show the same thing through two or three actions: what does Aigerim do with her kit, her phone, the door, the people around her?`
      },
      helps: {
        ru: `Когда читатель должен пережить момент вместе с героем, а не прочитать о нём справку. Особенно в сценах, где главное не говорится вслух.`,
        en: `When the reader should live through the moment with the character rather than read a report on it. Especially in scenes where the important thing goes unsaid.`
      },
      hurts: {
        ru: `Когда действие превращается в ребус и читатель не понимает, что происходит. И когда нужна ясность: в эссе иногда важнее прямо сказать, что ты чувствовал, а действие это лишь подтвердит.`,
        en: `When the action becomes a riddle and the reader can’t tell what’s going on. And when clarity matters most: in an essay it is sometimes better to say plainly what you felt and let an action back it up.`
      },
      fail: {
        text: {
          ru: `Айгерим сжала кулаки так, что побелели костяшки. Глаза её метали молнии, губы задрожали, к горлу подкатил ком, а сердце бешено заколотилось. Она стиснула зубы и глубоко вздохнула.`,
          en: `Aigerim clenched her fists until her knuckles went white. Her eyes flashed with fury, her lips trembled, a lump rose in her throat and her heart hammered wildly. She gritted her teeth and took a deep breath.`
        },
        why: {
          ru: `Чувство формально не названо, но все жесты — готовые формулы, и их шесть подряд. Это та же табличка «я злюсь», только длиннее. Одно своё, неожиданное действие сильнее.`,
          en: `Technically the feeling isn’t named, but every gesture is a stock phrase, and there are six in a row. It’s the same “I am angry” sign, just longer. One unexpected action of her own would be stronger.`
        }
      },
      meter: 'emotions',
      tryPrompt: {
        ru: `Найди в своём тексте одно названное чувство. Замени его действием, которое мог совершить только этот человек в этот момент.`,
        en: `Find one named feeling in your own text. Replace it with an action only this person could take at this moment.`
      },
      source: ['ou-fiction', 'ou-know', 'original']
    },

    {
      id: 'pov',
      title: { ru: `Точка зрения и дистанция рассказчика`, en: `Point of view and narrative distance` },
      short: {
        ru: `Кто смотрит и насколько близко: «я» внутри события, «он» за плечом героя или камера под потолком.`,
        en: `Who is looking, and from how close: “I” inside the event, “she” over the character’s shoulder, or a camera on the ceiling.`
      },
      example: {
        ru: `**Издалека:** В 7:40 на остановке у метро «Алатау» ждали человек двадцать. Автобус подошёл полный и уехал, никого не взяв.

**Вплотную:** Двери открылись прямо перед Жанной — и закрылись. Она успела разглядеть чей-то рюкзак, прижатый к стеклу, и наклейку с котом на нём.`,
        en: `**From a distance:** At 7:40 about twenty people were waiting at the stop by Alatau metro station. The bus arrived full and pulled away without taking anyone.

**Close up:** The doors opened right in front of Zhanna — and closed again. She had time to see someone’s rucksack pressed against the glass, with a cat sticker on it.`
      },
      flat: {
        ru: `На школьном концерте выступали разные классы. Один мальчик из седьмого класса должен был играть на домбре, но у него порвалась струна. Все это заметили. Он всё равно доиграл до конца, и ему хлопали.`,
        en: `At the school concert, different classes performed. A Year 8 boy was supposed to play the dombra, but a string broke. Everyone noticed. He played to the end anyway, and people clapped.`
      },
      task: {
        ru: `Перепиши сцену дважды: от первого лица мальчика в секунду, когда рвётся струна, и глазами кого-то из зала — например, его младшей сестры. Что каждый рассказчик может знать, а чего не может?`,
        en: `Rewrite the scene twice: in the boy’s first person at the second the string snaps, and through the eyes of someone in the audience — his little sister, say. What can each narrator know, and what can’t they?`
      },
      helps: {
        ru: `Когда нужно решить, что читатель знает и чувствует. Близкая дистанция даёт напряжение и сочувствие, далёкая — масштаб, иронию, спокойствие. Смена дистанции внутри текста работает как монтаж в кино.`,
        en: `When you need to decide what the reader knows and feels. Close distance brings tension and sympathy; far distance brings scale, irony, calm. Shifting distance within a text works like editing in film.`
      },
      hurts: {
        ru: `Когда дистанция прыгает без причины и непонятно, чьими глазами смотреть. И когда близкое «я» вдруг знает то, чего знать не может: мысли соседей, будущее, что происходило за дверью.`,
        en: `When the distance jumps around for no reason and it’s unclear whose eyes we’re using. And when a close “I” suddenly knows what it can’t: the neighbours’ thoughts, the future, what happened behind a closed door.`
      },
      fail: {
        text: {
          ru: `Азат дёрнул струну и понял, что она сейчас лопнет. Учительница в третьем ряду подумала, что зря разрешила ему выступать. Сестра решила, что он всё равно молодец. А директор вспомнил, что не выключил чайник.`,
          en: `Azat plucked the string and knew it was about to snap. The teacher in the third row thought she shouldn’t have let him perform. His sister decided he was brilliant anyway. And the head remembered he’d left the kettle on.`
        },
        why: {
          ru: `Точка зрения скачет по головам: за четыре предложения мы побывали в четырёх и ни в одной не задержались. Всеведущий рассказчик так может — но тогда это должно звучать как решение, а не как случайность.`,
          en: `The point of view hops from head to head: four sentences, four minds, and we stay in none of them. An all-knowing narrator is allowed to do this — but then it has to sound like a decision, not an accident.`
        }
      },
      meter: 'pov',
      tryPrompt: {
        ru: `Возьми сцену из своего текста и определи, чьими глазами она увидена. Перепиши один абзац с другой дистанции и реши, какая нужна этой сцене.`,
        en: `Take a scene from your own text and work out whose eyes it is seen through. Rewrite one paragraph from a different distance and decide which one this scene needs.`
      },
      source: ['ou-fiction', 'original']
    },

    {
      id: 'rhythm',
      title: { ru: `Длина предложения и ритм`, en: `Sentence length and rhythm` },
      short: {
        ru: `Длинная фраза разгоняет, короткая останавливает. Чередование делает текст слышимым.`,
        en: `A long sentence builds speed; a short one stops it. Alternating them makes writing audible.`
      },
      example: {
        ru: `Вечером на Арбате играл уличный скрипач. Люди проходили мимо, замедлялись, доставали телефоны, снимали, убирали телефоны и шли дальше, и только старик с авоськой простоял всю мелодию, не шевелясь, будто ждал именно её. Потом он ушёл. Скрипач проводил его взглядом.`,
        en: `In the evening a street violinist was playing on the Arbat. People passed, slowed down, took out their phones, filmed, put their phones away and moved on, and only an old man with a string bag stood through the whole tune without moving, as if he’d been waiting for that one. Then he left. The violinist watched him go.`
      },
      flat: {
        ru: `Я проснулся поздно. Я быстро оделся. Я выбежал из дома. Автобус уже уезжал. Я побежал за ним. Водитель меня увидел. Он остановился. Я успел.`,
        en: `I woke up late. I got dressed quickly. I ran out of the house. The bus was already leaving. I ran after it. The driver saw me. He stopped. I made it.`
      },
      task: {
        ru: `Сохрани события, но измени ритм: собери погоню в одно длинное предложение, а в конце оставь одну короткую фразу. Прочитай вслух до и после.`,
        en: `Keep the events but change the rhythm: gather the chase into one long sentence and leave a single short phrase at the end. Read it aloud before and after.`
      },
      helps: {
        ru: `Когда в тексте есть движение: погоня, ожидание, кульминация, поворот мысли в эссе. Короткая фраза после длинной выделяет главное лучше жирного шрифта.`,
        en: `When the text has movement: a chase, a wait, a climax, a turn in an essay’s argument. A short sentence after a long one highlights the key point better than bold type.`
      },
      hurts: {
        ru: `Когда ритм становится трюком: три однословных предложения в каждом абзаце звучат как трейлер боевика. В спокойном объясняющем тексте ровный темп часто уместнее.`,
        en: `When rhythm turns into a trick: three one-word sentences in every paragraph sound like an action-film trailer. In calm, explanatory writing an even pace is often the better fit.`
      },
      fail: {
        text: {
          ru: `Утро. Будильник. Поздно. Бег. Автобус. Уезжает. Сердце. Ноги. Водитель. Тормоз. Успел. Жизнь.`,
          en: `Morning. Alarm. Late. Run. Bus. Leaving. Heart. Legs. Driver. Brakes. Made it. Life.`
        },
        why: {
          ru: `Одни короткие фразы — не ритм, а азбука Морзе. Пауза работает, только если до неё был разгон, а здесь нечему останавливаться. «Жизнь.» в конце обещает смысл, которого в тексте нет.`,
          en: `Nothing but short phrases isn’t rhythm; it’s Morse code. A pause works only after a build-up, and here there’s nothing to stop. “Life.” at the end promises a meaning the text never delivers.`
        }
      },
      meter: 'rhythm',
      tryPrompt: {
        ru: `Найди в своём тексте самый важный момент. Сделай предложение перед ним длинным, а сам момент — коротким.`,
        en: `Find the most important moment in your own text. Make the sentence before it long, and the moment itself short.`
      },
      source: ['hse-spb', 'ou-fiction', 'original']
    },

    {
      id: 'subtext',
      title: { ru: `Диалог с подтекстом`, en: `Dialogue with subtext` },
      short: {
        ru: `Люди редко говорят о главном прямо. Пусть реплики говорят об одном, а читатель слышит другое.`,
        en: `People rarely say the important thing directly. Let the lines say one thing while the reader hears another.`
      },
      example: {
        ru: `— Куртку взял? — спросила мама.
— Взял.
— В горах вечером холодно.
— Мам, я же сказал.
— Я просто говорю. — Она поправила ему капюшон, который и так лежал ровно. — Позвонишь, как доедете?`,
        en: `“Got your jacket?” Mum asked.
“Yes.”
“It gets cold in the mountains at night.”
“Mum, I said.”
“I’m just saying.” She straightened his hood, which was already straight. “Ring me when you get there?”`
      },
      flat: {
        ru: `— Я очень волнуюсь, что ты уезжаешь в лагерь на две недели, — сказала мама.
— Я знаю, что ты волнуешься, но я уже взрослый и хочу быть самостоятельным, — ответил Даниял.
— Понимаю, но мне грустно, что ты так быстро вырос.
— Мне тоже немного грустно, но я рад, что еду.`,
        en: `“I’m very worried about you going to camp for two weeks,” said Mum.
“I know you’re worried, but I’m grown up now and I want to be independent,” said Daniyal.
“I understand, but it makes me sad that you’ve grown up so fast.”
“I’m a bit sad too, but I’m glad I’m going.”`
      },
      task: {
        ru: `Перепиши диалог так, чтобы никто не говорил о чувствах прямо. Пусть мама и Даниял спорят о мелочи — носках, зарядке, времени отъезда, — а волнение читается между строк.`,
        en: `Rewrite the dialogue so that nobody talks about feelings directly. Let Mum and Daniyal argue about something small — socks, a charger, what time to leave — while the worry shows between the lines.`
      },
      helps: {
        ru: `Когда отношения важнее информации: ссора, прощание, неловкость, первая встреча. Читатель, который догадался сам, запоминает сцену сильнее.`,
        en: `When the relationship matters more than the information: a row, a goodbye, an awkward moment, a first meeting. A reader who works it out alone remembers the scene better.`
      },
      hurts: {
        ru: `Когда подтекст спрятан так глубоко, что его не найти: читатель видит просто разговор о носках. Нужна хотя бы одна подсказка — жест, пауза, странный ответ. В инструкции или объяснении подтекст мешает: там нужна ясность.`,
        en: `When the subtext is buried so deep nobody can find it: the reader sees a conversation about socks and nothing else. You need at least one clue — a gesture, a pause, an odd reply. In instructions or explanations subtext gets in the way: clarity comes first there.`
      },
      fail: {
        text: {
          ru: `— Куртку взял? — спросила мама, и в её голосе звучала вся тревога матери, отпускающей сына в большой мир.
— Взял, — ответил он, давая понять, что давно вырос и больше не нуждается в опеке.`,
          en: `“Got your jacket?” Mum asked, her voice carrying all the anxiety of a mother letting her son go out into the wide world.
“Yes,” he replied, making it clear that he had grown up and no longer needed looking after.`
        },
        why: {
          ru: `Подтекст тут же объяснён в ремарках. Автор не доверяет читателю и переводит каждую реплику на язык чувств. Убери объяснения — и диалог заработает.`,
          en: `The subtext is explained straight away in the tags. The writer doesn’t trust the reader and translates every line into feelings. Cut the explanations and the dialogue starts working.`
        }
      },
      meter: 'dialogue',
      tryPrompt: {
        ru: `Найди в своём тексте реплику, где герой прямо говорит о чувстве. Замени её фразой о бытовом, а чувство перенеси в жест или паузу.`,
        en: `Find a line in your own text where a character states a feeling directly. Replace it with something everyday, and move the feeling into a gesture or a pause.`
      },
      source: ['wx', 'owl-cw', 'original']
    },

    {
      id: 'image',
      title: { ru: `Образ и сравнение без клише`, en: `Imagery and similes without clichés` },
      short: {
        ru: `Сравнение показывает то, чего без него не видно, и приходит из мира этого текста или этого рассказчика.`,
        en: `A simile shows what you couldn’t see without it, and comes from the world of this text or this narrator.`
      },
      example: {
        ru: `После дождя горы проступили так резко, будто кто-то наконец выкрутил графику на максимум.

Папа паркуется так, словно сдаёт экзамен комиссии из трёх человек: медленно, поворачивая голову к каждому зеркалу.`,
        en: `After the rain the mountains came into focus so sharply, it was as if someone had finally switched the graphics to ultra.

Dad parks as if he’s being examined by a panel of three: slowly, turning his head to every mirror.`
      },
      flat: {
        ru: `Горы были величественными, как древние великаны. Небо было голубым, как море. Облака плыли, как белые корабли, а солнце светило, как огромный золотой шар. Время остановилось.`,
        en: `The mountains were majestic, like ancient giants. The sky was as blue as the sea. Clouds sailed by like white ships, and the sun shone like a huge golden ball. Time stood still.`
      },
      task: {
        ru: `Оставь один образ из пяти — или ни одного. Если оставляешь, переделай его так, чтобы он пришёл из жизни конкретного рассказчика: школьника, таксиста, повара, бабушки.`,
        en: `Keep one image out of the five — or none. If you keep one, rework it so that it comes from a particular narrator’s life: a student, a taxi driver, a cook, a grandmother.`
      },
      helps: {
        ru: `Когда нужно показать то, для чего нет прямого слова: оттенок, движение, звук, характер. Сравнение из мира героя заодно показывает, кто смотрит.`,
        en: `When you need to show something there’s no direct word for: a shade, a movement, a sound, a character. A simile from the character’s world also shows who is looking.`
      },
      hurts: {
        ru: `Когда сравнений больше, чем нужно, и они тянут в разные стороны. И когда образ красивее предмета: читатель любуется автором, а сцену не видит.`,
        en: `When there are more similes than the text needs and they pull in different directions. And when the image is prettier than the thing itself: the reader admires the writer and stops seeing the scene.`
      },
      fail: {
        text: {
          ru: `Её смех рассыпался, как хрустальные бусы по мраморному полу вечности, а глаза сияли, как два изумрудных озера, в которых отражалась бесконечная симфония звёзд.`,
          en: `Her laughter scattered like crystal beads across the marble floor of eternity, and her eyes shone like two emerald lakes reflecting an endless symphony of stars.`
        },
        why: {
          ru: `Сравнения не проясняют, а украшают: как звучат «бусы по полу вечности»? Образы красивы сами по себе и не связаны ни с героиней, ни со сценой. Одно точное сравнение сильнее такой гирлянды.`,
          en: `The similes decorate instead of clarifying: what do “beads on the floor of eternity” sound like? The images are pretty in themselves and connected to neither the girl nor the scene. One exact simile beats a garland like this.`
        }
      },
      meter: 'cliches',
      tryPrompt: {
        ru: `Найди в своём тексте сравнение и проверь: можно ли его увидеть или услышать? Из чьего оно мира? Если ответ «ничей» — замени.`,
        en: `Find a simile in your own text and test it: can you see or hear it? Whose world does it come from? If the answer is “nobody’s”, replace it.`
      },
      source: ['owl-cw', 'essaypro-leap', 'original']
    },

    {
      id: 'reportage',
      title: { ru: `Репортажное наблюдение и эффект присутствия`, en: `Reportage: observation and a sense of presence` },
      short: {
        ru: `Пиши, как будто ведёшь прямую трансляцию: здесь, сейчас, через ощущения и проверяемые факты.`,
        en: `Write as if you were broadcasting live: here, now, through the senses and facts that can be checked.`
      },
      example: {
        ru: `Зелёный базар, суббота, 9:15. Под крышей мясного павильона гудят вентиляторы. Продавщица курта пересыпает белые шарики в пакет и одновременно спорит по телефону о чьей-то свадьбе. Мальчик лет шести пробует изюм из каждой горки по очереди; никто его не останавливает. Пахнет укропом, мокрым бетоном и дынями.`,
        en: `Green Bazaar, Saturday, 9:15. Fans hum under the roof of the meat hall. A woman selling kurt, little white balls of dried cheese, tips them into a bag while arguing on the phone about someone’s wedding. A boy of about six tries a raisin from every pile in turn; nobody stops him. It smells of dill, wet concrete and melons.`
      },
      flat: {
        ru: `Я была на рынке. Там было много людей и много разных продуктов. Было шумно и интересно. Продавцы что-то предлагали, покупатели выбирали. Мне понравилась атмосфера.`,
        en: `I went to the market. There were lots of people and lots of different food. It was noisy and interesting. The sellers were offering things and the shoppers were choosing. I liked the atmosphere.`
      },
      task: {
        ru: `Перепиши заметку как репортаж: добавь время и место, настоящее время глаголов, два звука, один запах и одного человека, который что-то делает. Убери «мне понравилась атмосфера».`,
        en: `Rewrite the note as reportage: add a time and place, switch to the present tense, and include two sounds, one smell and one person doing something. Cut “I liked the atmosphere”.`
      },
      helps: {
        ru: `В репортаже и документальной прозе — и в рассказе или эссе, когда читатель должен оказаться на месте. Эффект присутствия создают факты и ощущения, а не восклицательные знаки.`,
        en: `In reportage and nonfiction — and in a story or essay whenever the reader needs to be there. Presence comes from facts and sensations, not exclamation marks.`
      },
      hurts: {
        ru: `Когда наблюдения не выбраны и текст превращается в запись камеры наблюдения. И когда сцена заслоняет смысл: в эссе после неё всё равно нужен ответ на вопрос «и что?».`,
        en: `When the observations aren’t selected and the text turns into CCTV footage. And when the scene crowds out the point: in an essay you still need to answer “so what?” afterwards.`
      },
      fail: {
        text: {
          ru: `Рынок кипел жизнью! Тысячи людей спешили за покупками, каждый продавец был по-своему уникален, а ароматы специй уносили в сказку Востока. Это было незабываемое погружение в самое сердце города!`,
          en: `The market was bursting with life! Thousands of people hurried to shop, every trader was unique in their own way, and the aroma of spices carried you off into an Oriental fairy tale. It was an unforgettable dive into the very heart of the city!`
        },
        why: {
          ru: `Вместо наблюдений — восклицания и штампы путеводителя. «Тысячи людей» никто не считал, «сказка Востока» — взгляд туриста, а не факт. Репортёр показывает, что видел, и не решает за читателя, что это «незабываемо».`,
          en: `Instead of observations: exclamations and guidebook clichés. Nobody counted the “thousands”, and an “Oriental fairy tale” is a tourist’s gaze, not a fact. A reporter shows what they saw and doesn’t tell the reader it was “unforgettable”.`
        }
      },
      meter: 'sensory',
      tryPrompt: {
        ru: `Проведи десять минут в людном месте (или вспомни последнее такое). Запиши время, три звука, один запах и одно действие незнакомца — и собери из этого первый абзац.`,
        en: `Spend ten minutes somewhere busy (or recall the last time you did). Note the time, three sounds, one smell and one thing a stranger did — then build your first paragraph from them.`
      },
      source: ['hse-spb', 'owl-cnf', 'wx', 'original']
    },

    {
      id: 'humor',
      title: { ru: `Юмор, неожиданное сопоставление, абсурд`, en: `Humour, unexpected pairings, the absurd` },
      short: {
        ru: `Смешно, когда серьёзный тон встречает мелочь или логика честно доводится до абсурда.`,
        en: `Comedy happens when a serious tone meets something trivial, or when logic is followed faithfully into the absurd.`
      },
      example: {
        ru: `Наш кот ненавидит пылесос с тех пор, как тот появился в доме в 2019 году. За всё это время он не простил ему ничего. Когда пылесос выезжает из кладовки, кот удаляется под диван, как посол, отозванный из страны в знак протеста.`,
        en: `Our cat has hated the hoover since it joined the household in 2019. In all that time he has forgiven it nothing. When the hoover comes out of the cupboard, the cat withdraws under the sofa like an ambassador recalled in protest.`
      },
      flat: {
        ru: `У нас есть кот, и он очень смешно боится пылесоса. Это правда очень смешно, все всегда смеются. Он убегает под диван и сидит там. Ха-ха.`,
        en: `We’ve got a cat and he’s really funny about the hoover. It’s honestly so funny, everyone always laughs. He runs under the sofa and sits there. Ha ha.`
      },
      task: {
        ru: `Сделай текст смешным, не говоря, что он смешной. Попробуй один ход: серьёзный тон к мелочи (как новость или протокол), неожиданное сравнение или логику, доведённую до конца.`,
        en: `Make the text funny without saying it’s funny. Try one move: a solemn tone for something trivial (like a news report or official minutes), an unexpected comparison, or logic followed all the way.`
      },
      helps: {
        ru: `Когда нужно снять пафос, показать характер или сделать трудную тему выносимой. Английская традиция — преуменьшение, невозмутимый тон, спуск от высокого к бытовому — работает и в рассказе, и в эссе.`,
        en: `When you need to puncture pomposity, reveal character or make a hard subject bearable. The English tradition — understatement, deadpan, the drop from the lofty to the everyday — works in stories and essays alike.`
      },
      hurts: {
        ru: `Когда шутка важнее сцены или смеются над тем, кто не может ответить. В серьёзном эссе одна шутка может помочь, а пять подряд выглядят как попытка уйти от вопроса.`,
        en: `When the joke matters more than the scene, or the laugh is at the expense of someone who can’t answer back. In a serious essay one joke can help; five in a row look like dodging the question.`
      },
      fail: {
        text: {
          ru: `Новенький пришёл в огромных очках, и мы сразу поняли: это ходячий телескоп. А когда он заговорил с акцентом, стало ясно, что общаться с ним придётся через переводчик. Весь класс лежал.`,
          en: `The new boy turned up in huge glasses, and we knew straight away he was a walking telescope. When he spoke with an accent, it was obvious we’d need an interpreter. The whole class was in stitches.`
        },
        why: {
          ru: `Юмор бьёт вниз — по человеку, который и так уязвим, и строится на его внешности и акценте. Такая шутка показывает только автора. Смешнее и честнее смеяться над ситуацией или над собой.`,
          en: `This humour punches down — at someone already vulnerable, and it’s built on his looks and accent. A joke like that reveals only the writer. Laughing at the situation, or at yourself, is funnier and fairer.`
        }
      },
      meter: 'none',
      tryPrompt: {
        ru: `Найди в своём тексте бытовой момент и опиши его с невозмутимой серьёзностью — как новость, протокол или прогноз погоды.`,
        en: `Find an everyday moment in your own text and describe it with a completely straight face — as a news item, official minutes or a weather forecast.`
      },
      source: ['hse-spb', 'original']
    },

    {
      id: 'tension',
      title: { ru: `Напряжение, пауза, клиффхэнгер`, en: `Tension, pause, cliffhanger` },
      short: {
        ru: `Задай читателю вопрос и не спеши с ответом: пусть ему захочется узнать, что дальше.`,
        en: `Give the reader a question and don’t hurry the answer: make them need to know what happens next.`
      },
      example: {
        ru: `В 23:40 Дина услышала, как в замке поворачивается ключ. Родители были в Шымкенте до воскресенья. Брат — в общежитии в Астане. Ключ повернулся ещё раз. Дверь приоткрылась на длину цепочки — и замерла.`,
        en: `At 23:40 Dina heard a key turning in the lock. Her parents were in Shymkent until Sunday. Her brother was in halls in Astana. The key turned again. The door opened as far as the chain — and stopped.`
      },
      flat: {
        ru: `Ночью Дина была дома одна. Кто-то начал открывать дверь, и она испугалась. Оказалось, что это соседка, которая перепутала этаж. Дина успокоилась и легла спать.`,
        en: `Dina was home alone one night. Someone started opening the door and she got scared. It turned out to be a neighbour who had come to the wrong floor. Dina calmed down and went to bed.`
      },
      task: {
        ru: `Перепиши так, чтобы ответ пришёл как можно позже — или не пришёл совсем. Убери «испугалась», растяни ожидание короткими фразами и закончи на вопросе, а не на ответе.`,
        en: `Rewrite it so the answer comes as late as possible — or not at all. Cut “got scared”, stretch the wait with short sentences, and end on a question, not an answer.`
      },
      helps: {
        ru: `Когда читатель должен перевернуть страницу: конец главы, поворот в рассказе, начало конкурсного эссе. Напряжение держится на вопросе, ответ на который задержан.`,
        en: `When the reader has to turn the page: the end of a chapter, a twist in a story, the opening of a competition essay. Tension rests on a question whose answer is held back.`
      },
      hurts: {
        ru: `Когда напряжение нагнетают ради ничего. И когда оно спорит со смыслом: драматичное начало personal statement, не связанное с главной мыслью, выглядит как приманка.`,
        en: `When tension is built up over nothing. And when it fights the point: a dramatic opening to a personal statement that has nothing to do with its main idea looks like bait.`
      },
      fail: {
        text: {
          ru: `Дверь медленно открылась. На пороге стоял тот, кого Дина боялась больше всего на свете. Она закричала — и проснулась. Всё это был сон.`,
          en: `The door slowly opened. In the doorway stood the person Dina feared most in the world. She screamed — and woke up. It had all been a dream.`
        },
        why: {
          ru: `Клиффхэнгер обманул: читатель переживал, а автор отменил событие. «Это был сон» нарушает договор с читателем. Развязка может удивить, но должна быть честной — подсказки к ней уже есть в тексте.`,
          en: `The cliffhanger cheats: the reader cared, and the writer cancelled the event. “It was all a dream” breaks the deal with the reader. An ending can surprise, but it must play fair — the clues should already be in the text.`
        }
      },
      meter: 'rhythm',
      tryPrompt: {
        ru: `Найди в своём тексте место, где ты сразу объясняешь, что произошло. Перенеси объяснение на абзац позже — или замени его вопросом.`,
        en: `Find a place in your own text where you explain straight away what happened. Move the explanation a paragraph later — or replace it with a question.`
      },
      source: ['hse-spb', 'yw', 'original']
    },

    {
      id: 'person',
      title: { ru: `Человек через поступки, речь и детали`, en: `A person through actions, speech and details` },
      short: {
        ru: `Вместо списка черт характера — поступок, реплика и вещь, которые могли быть только у этого человека.`,
        en: `Instead of a list of character traits: an action, a line of speech and an object that could only belong to this person.`
      },
      example: {
        ru: `Тётя Сауле не выбрасывает пакеты: она складывает их треугольником и хранит в пакете с пакетами. Любой звонок она начинает с вопроса «Ты поел?» — и не слушает ответ. На прошлой неделе она два часа ехала на автобусах через весь город, чтобы вернуть кофту за 900 тенге. «Это принцип».`,
        en: `Aunt Saule never throws away a plastic bag: she folds each one into a triangle and keeps it in the bag of bags. She opens every phone call with “Have you eaten?” and doesn’t listen to the answer. Last week she spent two hours on buses across the city to return a 900-tenge cardigan. “It’s the principle.”`
      },
      flat: {
        ru: `Наш тренер по волейболу — строгий, но справедливый человек. Он очень требовательный, трудолюбивый и честный. Он всегда поддерживает команду и никогда не сдаётся. Все его уважают.`,
        en: `Our volleyball coach is strict but fair. He is very demanding, hard-working and honest. He always supports the team and never gives up. Everyone respects him.`
      },
      task: {
        ru: `Удали все слова о характере. Вместо них покажи тренера одним поступком, одной репликой и одной вещью — что у него в руках, в сумке, на запястье.`,
        en: `Delete every character word. Instead, show the coach through one action, one line of speech and one object — something in his hands, his bag, on his wrist.`
      },
      helps: {
        ru: `В рассказе, в репортаже о человеке, в эссе о том, кто для тебя важен, и в personal statement — когда читатель должен поверить в характер, а не принять его на веру. Один поступок заменяет абзац определений.`,
        en: `In a story, a profile, an essay about someone who matters to you, a personal statement — whenever the reader should believe in a character rather than take it on trust. One action replaces a paragraph of descriptions.`
      },
      hurts: {
        ru: `Когда деталей так много, что человек превращается в коллекцию причуд. И когда герой реальный: в эссе и репортаже нельзя приписать человеку поступки, которых не было, даже если они «подходят к характеру».`,
        en: `When there are so many details that the person becomes a collection of quirks. And when the person is real: in an essay or reportage you can’t credit someone with things they never did, however well they “fit the character”.`
      },
      fail: {
        text: {
          ru: `У тренера были седые усы, шрам над бровью, золотой зуб, татуировка с якорем, свисток на красном шнурке, кроссовки сорок шестого размера, электронные часы и привычка хрустеть пальцами.`,
          en: `The coach had a grey moustache, a scar over one eyebrow, a gold tooth, an anchor tattoo, a whistle on a red cord, size-twelve trainers, a digital watch and a habit of cracking his knuckles.`
        },
        why: {
          ru: `Это фоторобот, а не человек: внешность перечислена, но ни одна деталь не связана с поступком или характером. Оставь одну вещь и покажи, что он с ней делает.`,
          en: `This is a police e-fit, not a person: the looks are listed, but no detail connects to an action or to character. Keep one object and show what he does with it.`
        }
      },
      meter: 'adjectives',
      tryPrompt: {
        ru: `Выбери человека из своего текста. Найди, где ты называешь его черту, и замени название поступком, который её доказывает.`,
        en: `Choose a person in your own text. Find where you name one of their traits, and replace the name with an action that proves it.`
      },
      source: ['ou-fiction', 'essaypro-identity', 'hse-spb', 'original']
    },

    {
      id: 'restraint',
      title: { ru: `Сдержанный рассказ: эмпатия, усталость, страх, радость`, en: `Restraint: empathy, exhaustion, fear, joy` },
      short: {
        ru: `Чем сильнее чувство, тем тише можно о нём говорить: вес несут факт и деталь, а не восклицательные знаки.`,
        en: `The stronger the feeling, the more quietly you can write it: facts and details carry the weight, not exclamation marks.`
      },
      example: {
        ru: `Мадина вернулась со смены в девятом часу. Разулась, не расстёгивая, наступив на задник. Поставила чайник, села на табуретку прямо в куртке и так и сидела, пока чайник не щёлкнул. Потом ещё немного.`,
        en: `Madina got home from her shift after eight. She took her shoes off without undoing them, treading on the heels. She put the kettle on, sat down on the stool with her coat still on, and stayed there until the kettle clicked off. Then a little longer.`
      },
      flat: {
        ru: `Я ужасно, невыносимо устал после этой недели! У меня совсем не было сил, я был выжат как лимон и просто умирал от усталости. Это была самая тяжёлая неделя в моей жизни!!!`,
        en: `I was absolutely, unbearably exhausted after that week! I had no energy left at all, I was completely drained and literally dying of tiredness. It was the hardest week of my life!!!`
      },
      task: {
        ru: `Перепиши без восклицательных знаков, усилителей и слов «устал», «сил», «тяжёлая». Покажи усталость двумя-тремя обычными действиями, сделанными чуть не так, как всегда.`,
        en: `Rewrite it with no exclamation marks, no intensifiers and no “exhausted”, “energy” or “hardest”. Show the tiredness through two or three ordinary actions done slightly differently from usual.`
      },
      helps: {
        ru: `Когда тема сильная сама по себе: болезнь, потеря, выгорание, страх, огромная радость. Сдержанность оставляет читателю место почувствовать самому, а эмпатия видна во внимании к мелочам чужой жизни, а не в восклицаниях.`,
        en: `When the subject is powerful in itself: illness, loss, burnout, fear, huge joy. Restraint leaves the reader room to feel for themselves, and empathy shows in attention to the small things in someone’s life, not in exclamations.`
      },
      hurts: {
        ru: `Когда сдержанность превращается в холодность и непонятно, важно ли это автору. Радость иногда хочется выплеснуть открыто — и это тоже выбор. В эссе одно честное прямое предложение о чувстве бывает сильнее любой детали.`,
        en: `When restraint turns cold and it’s unclear whether the writer cares. Sometimes joy wants to spill out openly — and that’s a valid choice too. In an essay, one honest, direct sentence about a feeling can be stronger than any detail.`
      },
      fail: {
        text: {
          ru: `Мадина пришла домой. Сняла обувь. Поставила чайник. Посмотрела в окно. Было темно. Она легла спать.`,
          en: `Madina came home. She took off her shoes. She put the kettle on. She looked out of the window. It was dark. She went to bed.`
        },
        why: {
          ru: `Восклицаний нет — но и усталости нет. Обычные действия сделаны обычно, и читать нечего. Сдержанность работает, когда в действиях есть сбой: человек сидит в куртке и не замечает, что чайник уже щёлкнул.`,
          en: `No exclamations — but no tiredness either. Ordinary actions done in the ordinary way leave nothing to read. Restraint works when something in the actions is slightly off: sitting in your coat, not noticing the kettle has clicked off.`
        }
      },
      meter: 'emotions',
      tryPrompt: {
        ru: `Найди в своём тексте восклицательный знак или «очень», «ужасно», «безумно» рядом с чувством. Убери их, а вес перенеси на одну деталь.`,
        en: `Find an exclamation mark or a “really”, “terribly”, “insanely” next to a feeling in your own text. Remove it, and move the weight onto one detail.`
      },
      source: ['hse-spb', 'ou-know', 'original']
    },

    {
      id: 'edit',
      title: { ru: `Редактура: убрать, переставить, уточнить`, en: `Editing: cut, reorder, sharpen` },
      short: {
        ru: `Второй проход: убрать лишнее, поставить важное туда, где его заметят, заменить общее конкретным.`,
        en: `The second pass: cut what isn’t needed, put the important part where it will be noticed, swap the general for the specific.`
      },
      example: {
        ru: `**Было:** В тот день, который я, наверное, никогда не забуду, я впервые в жизни поднялась пешком к Большому Алматинскому озеру, и это было очень трудно.

**Стало:** К Большому Алматинскому озеру я впервые поднялась пешком. Последний километр я считала шаги — до ста и заново.`,
        en: `**Before:** On that day, which I will probably never forget, I walked up to Big Almaty Lake for the first time in my life, and it was very hard.

**After:** The first time I walked up to Big Almaty Lake, I counted my steps for the last kilometre — up to a hundred, then start again.`
      },
      flat: {
        ru: `Я хотел бы рассказать о том, что, как мне кажется, стало очень важным моментом в моей жизни. Это было летом, когда мне было четырнадцать лет. Мы с друзьями решили, что будем снимать фильм. В итоге мы действительно сняли короткий фильм про зомби у нас во дворе, и в процессе я понял, что мне очень нравится монтировать.`,
        en: `I would like to tell you about what I think became a very important moment in my life. It was in the summer when I was fourteen years old. My friends and I decided that we were going to make a film. In the end we really did make a short zombie film in our courtyard, and in the process I realised that I really like editing.`
      },
      task: {
        ru: `Сократи текст минимум на треть. Убери вступление «хотел бы рассказать», переставь самое интересное в начало и замени одно общее слово деталью.`,
        en: `Cut the text by at least a third. Remove the “I would like to tell you” opening, move the most interesting part to the start, and replace one general word with a detail.`
      },
      helps: {
        ru: `Всегда, когда черновик уже есть, — особенно под жёсткий лимит слов в конкурсе или заявке. Часто лучшее начало текста спрятано во втором или третьем предложении.`,
        en: `Whenever a draft already exists — especially under a strict word limit for a competition or application. The best opening is often hiding in the second or third sentence.`
      },
      hurts: {
        ru: `Когда редактура начинается слишком рано и мешает дописать черновик. И когда режут всё подряд: исчезают голос, воздух, смешные мелочи. Не каждое «лишнее» слово лишнее — иногда оно держит ритм.`,
        en: `When editing starts too early and stops you finishing the draft. And when everything gets cut: the voice, the breathing space, the funny little details disappear. Not every “extra” word is extra — sometimes it holds the rhythm.`
      },
      fail: {
        text: {
          ru: `Лето, 14 лет, с друзьями сняли фильм про зомби во дворе. Вывод: нравится монтировать.`,
          en: `Summer, age 14: shot a zombie film in the courtyard with friends. Conclusion: I like editing.`
        },
        why: {
          ru: `Сокращено вдвое с лишним — и вместе с лишним ушли человек и голос. Получилась телеграмма. Цель редактуры не минимум слов, а чтобы каждое слово работало: деталь со съёмок стоит своих слов.`,
          en: `More than half has gone — and the person and the voice went with the padding. It reads like a telegram. The aim of editing isn’t the fewest words but words that all do a job: one detail from the shoot is worth its space.`
        }
      },
      meter: 'cut',
      tryPrompt: {
        ru: `Возьми абзац своего текста и сократи его на четверть. Потом верни одно слово или деталь, которых стало жалко, и объясни себе, зачем они нужны.`,
        en: `Take a paragraph of your own and cut it by a quarter. Then restore one word or detail you miss, and explain to yourself why it’s needed.`
      },
      source: ['826-wyw', 'owl-cw', 'original']
    }
  ]);
})();
