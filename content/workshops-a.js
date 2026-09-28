/* Thematic workshops (set A): wedding, escape, relative, cute, face, slipstream.
   Inspired by the HSE St Petersburg masterclass topics (hse-spb); all texts are original. */
(function () {
  'use strict';

  SM.addWorkshops([
    {
      id: 'wedding',
      title: { ru: `Свадьба: сцена отношений`, en: `The wedding: a scene of relationships` },
      age: '13+',
      minutes: 25,
      hook: {
        ru: `На свадьбе в одном зале оказываются люди, которые в обычной жизни не сели бы за один стол: бывшие, соперники, дальние родственники, ведущий и официант, у которого сегодня день рождения. Писатели двести лет пользуются этим: свадьба за один вечер показывает людей, их отношения и целое общество.`,
        en: `A wedding puts people in one room who would never normally share a table: exes, rivals, distant relatives, the host and a waiter whose birthday it happens to be. Writers have used this for two hundred years: in a single evening, a wedding shows people, their relationships and a whole society.`
      },
      angle: {
        ru: `Свадьба — готовая сцена: у неё есть место действия, расписание, кульминация (клятвы, главный тост, первый танец) и множество точек, где всё может пойти не так. Поэтому она подходит любому жанру — от комедии и мелодрамы до детектива и хоррора. Фокус мастерской: много людей в одной сцене, у каждого свой интерес, и финал, который обрывается на самом интересном.`,
        en: `A wedding is a ready-made scene: it has a setting, a timetable, a climax (the vows, the big toast, the first dance) and plenty of points where everything can go wrong. That’s why it suits any genre, from comedy and romance to detective fiction and horror. The focus here: many people in one scene, each with their own agenda, and an ending that breaks off at the most interesting moment.`
      },
      techniques: [
        {
          ru: `**Расписание как скелет.** У свадьбы есть порядок: регистрация, фотосессия, тосты, торт, танцы. Сцена сильнее, когда что-то ломает этот порядок — или когда он идёт идеально, а напряжение растёт под столом.`,
          en: `**The timetable as a skeleton.** A wedding runs in order: the ceremony, the photos, the toasts, the cake, the dancing. The scene gets stronger when something breaks that order — or when it runs perfectly while tension builds under the table.`
        },
        {
          ru: `**Каждый гость чего-то хочет.** Не «гости радовались», а: тётя хочет пересесть подальше от бывшего мужа, фотограф — успеть снять кадр до заката, двоюродный брат — чтобы никто не узнал, что он потерял кольца.`,
          en: `**Every guest wants something.** Not “the guests were happy”, but: the aunt wants to move away from her ex-husband, the photographer wants the shot before sunset, the cousin wants nobody to find out he has lost the rings.`
        },
        {
          ru: `**Толпа через одного.** Зал на двести человек не описать. Выбери одного наблюдателя — ребёнка под столом, официанта, опоздавшего гостя — и покажи праздник его глазами.`,
          en: `**The crowd through one person.** You can’t describe a hall of two hundred. Pick one observer — a child under a table, a waiter, a latecomer — and show the celebration through their eyes.`
        },
        {
          ru: `**Комедия из серьёзности.** Смешно, когда люди изо всех сил стараются, чтобы всё было торжественно. Не смейся над героями свысока — дай им всерьёз спасать падающий торт.`,
          en: `**Comedy out of seriousness.** It’s funny when people try desperately hard to keep things dignified. Don’t sneer at the characters; let them rescue the collapsing cake in deadly earnest.`
        },
        {
          ru: `**Естественный клиффхэнгер.** Свадьба — очевидная точка обрыва: кто-то встаёт, кто-то не пришёл, у кого-то звонит телефон во время клятв. Главное — чтобы вопрос был настоящим, а не ложной тревогой.`,
          en: `**A natural cliffhanger.** A wedding is an obvious place to break off: someone stands up, someone hasn’t come, a phone rings during the vows. Just make sure the question is real, not a false alarm.`
        }
      ],
      warmup: {
        type: 'list',
        prompt: {
          ru: `Придумай пятерых гостей свадьбы — не жениха и невесту, а тех, кто вокруг. Для каждого: одна деталь и одно желание на этот вечер.`,
          en: `Invent five people at a wedding — not the couple, but the people around them. For each: one detail and one thing they want tonight.`
        },
        config: {
          count: 5,
          labels: [
            { ru: `Кто-то из родни`, en: `Someone from the family` },
            { ru: `Тот, кто здесь работает`, en: `Someone working here` },
            { ru: `Ребёнок`, en: `A child` },
            { ru: `Гость, которого не ждали`, en: `A guest nobody expected` },
            { ru: `Тот, кто скажет главный тост`, en: `Whoever gives the big toast` }
          ],
          placeholder: {
            ru: `Тётя Жанна в шляпе с вуалью: хочет сидеть подальше от бывшего мужа`,
            en: `Aunt Zhanna in a hat with a veil: wants to sit as far as possible from her ex-husband`
          }
        }
      },
      main: {
        type: 'generator',
        prompt: {
          ru: `Вытяни по карточке из каждой колоды и напиши сцену свадьбы на 200–350 слов. Возьми гостей из разминки. Закончи в момент, когда главный вопрос ещё открыт.`,
          en: `Draw a card from each deck and write a wedding scene of 200–350 words. Use the guests from the warm-up. End at the moment when the big question is still open.`
        },
        config: {
          decks: [
            {
              label: { ru: `Жанр`, en: `Genre` },
              items: [
                { ru: `комедия`, en: `comedy` },
                { ru: `детектив`, en: `detective story` },
                { ru: `семейная драма`, en: `family drama` },
                { ru: `хоррор без крови`, en: `horror without blood` },
                { ru: `история любви — но не жениха и невесты`, en: `a love story — but not the couple’s` },
                { ru: `фантастика`, en: `science fiction` },
                { ru: `вымышленный репортаж с места событий`, en: `an invented live report from the scene` },
                { ru: `притча`, en: `a fable` }
              ]
            },
            {
              label: { ru: `Что идёт не так`, en: `What goes wrong` },
              items: [
                { ru: `торт привезли с чужими именами`, en: `the cake arrives with the wrong names on it` },
                { ru: `ведущий путает имена молодых`, en: `the host keeps getting the couple’s names wrong` },
                { ru: `пропали кольца`, en: `the rings have gone missing` },
                { ru: `во время первого танца гаснет свет`, en: `the lights go out during the first dance` },
                { ru: `пришёл гость, которого никто не приглашал`, en: `a guest nobody invited turns up` },
                { ru: `ливень, а столы стоят во дворе`, en: `a downpour, and the tables are outside` },
                { ru: `во время клятв у жениха вибрирует телефон`, en: `the groom’s phone buzzes during the vows` },
                { ru: `всё идёт идеально — и это подозрительно`, en: `everything goes perfectly, which is suspicious` }
              ]
            },
            {
              label: { ru: `Чьими глазами`, en: `Through whose eyes` },
              items: [
                { ru: `ребёнок под столом`, en: `a child under a table` },
                { ru: `официант на последней смене`, en: `a waiter on his last shift` },
                { ru: `фотограф`, en: `the photographer` },
                { ru: `бабушка невесты`, en: `the bride’s grandmother` },
                { ru: `опоздавший гость`, en: `a late guest` },
                { ru: `собака жениха`, en: `the groom’s dog` },
                { ru: `кондитер, который пёк торт`, en: `the baker who made the cake` },
                { ru: `самый дальний родственник`, en: `the most distant relative in the room` }
              ]
            }
          ],
          then: {
            ru: `Перечитай сцену: чего хочет каждый, кто в ней говорит? Если у кого-то желания нет — дай ему одно, хотя бы маленькое.`,
            en: `Reread the scene: what does each speaking character want? If someone wants nothing, give them something, even something small.`
          }
        }
      },
      alt: {
        ru: `Не хочешь писать о свадьбе в своей семье — и не надо: придумай свадьбу целиком или возьми свадьбу из фильма, книги, сериала и перепиши её глазами второстепенного персонажа. Можно заменить свадьбу любым большим праздником: юбилей, выпускной, открытие кафе.`,
        en: `If you’d rather not write about a wedding in your own family, don’t: invent one from scratch, or take a wedding from a film, book or series and retell it through a minor character. You can also swap the wedding for any big celebration: a jubilee, a graduation, the opening of a café.`
      },
      avoid: {
        ru: `Сплошной перечень: «все танцевали, ели и веселились». «Самый счастливый день в её жизни». Невеста как картинка без характера. Шутки над гостями свысока. Ведущий-клоун как единственный источник юмора. Драка в финале, которая ничего не решает. Свадьба, которую в последнюю секунду «спасает» чудо, никак не подготовленное раньше.`,
        en: `A wall of summary: “everyone danced, ate and had fun”. “The happiest day of her life.” A bride who is a picture with no personality. Jokes that look down on the guests. A clownish host as the only source of humour. A fight at the end that settles nothing. A wedding “saved” at the last second by a miracle nothing has prepared us for.`
      },
      reading: [
        { title: 'Свадьба / The Wedding', author: 'Антон Чехов / Anton Chekhov', age: '13+' },
        { title: 'Анна Каренина (свадьба Левина и Кити) / Anna Karenina (Levin and Kitty’s wedding)', author: 'Лев Толстой / Leo Tolstoy', age: '15+' },
        { title: 'Far from the Madding Crowd', author: 'Thomas Hardy', age: '15+' },
        { title: 'Our Mutual Friend', author: 'Charles Dickens', age: '15+' },
        { title: 'The Age of Innocence', author: 'Edith Wharton', age: '15+' },
        { title: 'Atonement', author: 'Ian McEwan', age: '16+' }
      ],
      teacher: {
        note: {
          ru: `Тема из анонсов мастер-классов ВШЭ: двести лет свадьба служит писателям местом действия, кульминацией и клиффхэнгером, и в ней бездна комедии. Разрешите перетянуть одну карточку, но не больше: неудобное сочетание (хоррор и торт с чужими именами) часто даёт текст интереснее привычного. Большой той на сотни гостей — знакомая многим сцена, но реальные семейные истории не требуйте. В исходном списке есть и взрослые романы о свадьбах (например, триллер «The Guest List» Люси Фоли) — ученикам их не рекомендуем, в список вошли только подходящие по возрасту.`,
          en: `The topic comes from the HSE masterclass announcements: for two hundred years, weddings have given writers a setting, a climax and a cliffhanger, plus endless comedy. Allow one redraw per student, no more: an awkward combination (horror plus a cake with the wrong names) often produces more interesting writing than a comfortable one. A big toi with hundreds of guests is a scene many students know, but never require real family stories. The source list also includes adult novels about weddings (for example Lucy Foley’s thriller The Guest List); we don’t recommend them to students — only age-appropriate titles are listed here.`
        },
        source: ['hse-spb', 'original']
      }
    },

    {
      id: 'escape',
      title: { ru: `Побег: снаружи и внутри`, en: `Escape: outside and inside` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `Можно сбежать через окно, на последнем автобусе, из дома, из города. А можно — не вставая со стула: перестать отвечать на сообщения, надеть наушники без музыки, решить, что с понедельника всё будет иначе. Оба побега можно написать так, что читатель поверит.`,
        en: `You can escape through a window, on the last bus, from home, from a city. Or you can escape without leaving your chair: stop answering messages, put on headphones with no music playing, decide that from Monday everything will be different. Both kinds of escape can be written so the reader believes them.`
      },
      angle: {
        ru: `Побег — это желание, препятствие и поступок в чистом виде. Физический и психологический побег пишутся одними и теми же приёмами: подготовка, точка невозврата, тело, взгляд назад, цена. Мы учимся делать побег убедительным — чтобы читатель поверил и в маршрут, и в решение.`,
        en: `An escape is want, obstacle and action in their purest form. Physical and psychological escapes are written with the same techniques: preparation, the point of no return, the body, the look back, the cost. We practise making an escape convincing, so the reader believes both the route and the decision.`
      },
      techniques: [
        {
          ru: `**Подготовка в деталях.** Что герой берёт с собой, а что оставляет? Одна вещь в рюкзаке скажет о нём больше, чем монолог о причинах.`,
          en: `**Preparation in detail.** What does the character take, and what do they leave behind? One item in a backpack says more than a speech about their reasons.`
        },
        {
          ru: `**Точка невозврата.** Момент, после которого вернуться уже нельзя или стыдно: дверь захлопнулась, автобус тронулся, сообщение отправлено. Замедли его.`,
          en: `**The point of no return.** The moment after which going back is impossible, or humiliating: the door clicks shut, the bus pulls away, the message is sent. Slow it down.`
        },
        {
          ru: `**Тело знает раньше головы.** И в побеге снаружи, и в побеге внутри покажи тело: руки уже застёгивают куртку, пока герой «ещё думает».`,
          en: `**The body knows first.** In both outer and inner escapes, show the body: hands already zipping up a jacket while the character is “still thinking”.`
        },
        {
          ru: `**Взгляд назад.** Самая сильная деталь часто — то, что герой видит, обернувшись: свет в окне, чужая кружка на столе, собственный пустой стул.`,
          en: `**The look back.** The strongest detail is often what the character sees when they turn round: a light in a window, someone’s mug on the table, their own empty chair.`
        },
        {
          ru: `**Побег — не победа.** Убедительный побег чего-то стоит. Герой может сбежать и не почувствовать свободы — это тоже честный финал.`,
          en: `**Escape isn’t victory.** A convincing escape costs something. A character can get away and still not feel free — that is an honest ending too.`
        }
      ],
      warmup: {
        type: 'free',
        prompt: {
          ru: `Три минуты без остановки. Начни с фразы «Она поняла, что уходит, когда…» — и пиши, не решая заранее, куда и от чего.`,
          en: `Three minutes without stopping. Start with “She knew she was leaving when…” and keep going without deciding in advance where she’s going, or what from.`
        },
        config: {
          minutes: 3,
          placeholder: { ru: `Она поняла, что уходит, когда…`, en: `She knew she was leaving when…` }
        }
      },
      main: {
        type: 'columns',
        prompt: {
          ru: `Один и тот же герой сбегает дважды. В первой колонке — побег снаружи: маршрут, препятствия, вещи. Во второй — побег внутри: решение, которого никто не видит. По 5–8 предложений. Используй в обеих колонках одни и те же приёмы.`,
          en: `The same character escapes twice. In the first column, the outer escape: the route, the obstacles, the things they take. In the second, the inner one: a decision nobody else can see. 5–8 sentences each. Use the same techniques in both columns.`
        },
        config: {
          shared: {
            ru: `Если своей идеи нет: мальчик сбегает с дачи на первой электричке — и тот же мальчик за ужином перестаёт спорить и мысленно уже не здесь. Или: робот-уборщик выезжает из торгового центра на улицу — и тот же робот однажды перестаёт выполнять одну команду.`,
            en: `If you need an idea: a boy runs away from the family dacha on the first morning train — and the same boy, at dinner, stops arguing and is already somewhere else in his head. Or: a cleaning robot rolls out of a shopping centre into the street — and the same robot one day stops obeying one particular command.`
          },
          columns: [
            {
              label: { ru: `Снаружи: побег телом`, en: `Outside: escaping with the body` },
              placeholder: { ru: `Откуда и куда? Через что? Что он берёт с собой?`, en: `From where to where? Through what? What do they take?` }
            },
            {
              label: { ru: `Внутри: побег решением`, en: `Inside: escaping by decision` },
              placeholder: { ru: `Где он сейчас? Что решает? По какому движению это видно?`, en: `Where are they right now? What do they decide? What movement gives it away?` }
            }
          ],
          then: {
            ru: `Собери сцену, где оба побега идут одновременно: тело ещё на месте, а решение уже принято — или наоборот. 150–250 слов, закончи точкой невозврата.`,
            en: `Write a scene where both escapes happen at once: the body is still there but the decision has been made — or the other way round. 150–250 words, ending on the point of no return.`
          }
        }
      },
      alt: {
        ru: `Если тема побега слишком близка, пиши о персонаже, который на тебя не похож: о старике, животном, машине, герое сказки. Можно описать побег из скучной очереди, с затянувшегося праздника или из надоевшей игры — не обязательно из жизни.`,
        en: `If escape feels too close to home, write about a character who is nothing like you: an old man, an animal, a machine, a fairy-tale hero. It can be an escape from a dull queue, a party that has gone on too long or a game you’re sick of — it doesn’t have to be an escape from life.`
      },
      avoid: {
        ru: `Побег без причины и без цены. Герой, который как в кино легко перелезает через забор и ничего не чувствует. Длинные объяснения «почему я больше не мог». Штампы вроде «ветер свободы в лицо» и «впервые я вдохнул полной грудью». Финал «и тут я проснулся».`,
        en: `An escape with no reason and no cost. A character who vaults a fence like in a film and feels nothing. Long explanations of “why I couldn’t take it any more”. Stock phrases like “the wind of freedom in my face” and “for the first time I could really breathe”. The “and then I woke up” ending.`
      },
      reading: [
        { title: 'Кондуит и Швамбрания / The Land of Shvambrania', author: 'Лев Кассиль / Lev Kassil', age: '13+' },
        { title: 'Matilda', author: 'Roald Dahl', age: '13+' },
        { title: 'Piranesi', author: 'Susanna Clarke', age: '15+' }
      ],
      teacher: {
        note: {
          ru: `В анонсе ВШЭ физический и психологический побег описаны как совместимые, иногда одинаковые по приёмам, — две колонки показывают это наглядно. Тема может отозваться у подростков лично: не просите писать от первого лица о реальных планах, предлагайте вымышленного героя. Если текст ученика вызывает тревогу за его безопасность, действуйте по правилам школы и не обсуждайте это в группе.`,
          en: `The HSE announcement describes physical and psychological escape as compatible, sometimes identical, in technique — the two columns make that visible. The topic may feel personal to teenagers: don’t ask for first-person writing about real plans; offer an invented character. If a student’s text makes you worried for their safety, follow your school’s safeguarding procedure and don’t discuss it in the group.`
        },
        source: ['hse-spb', 'ou-fiction', 'original']
      }
    },

    {
      id: 'relative',
      title: { ru: `Запоминающийся родственник`, en: `A memorable relative` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `В каждой семье есть свой человек-легенда: дядя, который чинит всё изолентой, или бабушка, которая помнит дни рождения всех соседей, но путает имена внуков. О таком человеке трудно писать: хочется то ли прославить его, то ли посмеяться. Сегодня ищем третий путь — точный и уважительный.`,
        en: `Every family has its legend: the uncle who fixes everything with electrical tape, or the grandmother who remembers every neighbour’s birthday but mixes up her grandchildren’s names. People like that are hard to write about: you want either to praise them or to laugh at them. Today we look for a third way — precise and respectful.`
      },
      angle: {
        ru: `Родственника мы видим слишком близко и слишком часто, и он превращается в набор качеств: «добрая», «строгий». Писателю нужно заново увидеть знакомого человека — через привычку, фразу, вещь и один конкретный момент. Уважение здесь — это точность, а не комплименты.`,
        en: `We see our relatives too closely and too often, so they turn into a list of qualities: “kind”, “strict”. A writer has to see a familiar person afresh — through a habit, a phrase, an object and one specific moment. Here, respect means precision, not compliments.`
      },
      techniques: [
        {
          ru: `**Привычка вместо качества.** Не «бережливая», а «разглаживает каждый пакет и складывает его в пакет с пакетами».`,
          en: `**A habit instead of a quality.** Not “thrifty”, but “smooths out every plastic bag and files it in the bag of bags”.`
        },
        {
          ru: `**Коронная фраза.** Одна реплика, которую человек повторяет всегда, — и один случай, когда он сказал что-то совсем другое.`,
          en: `**The catchphrase.** One line the person always says — and one time they said something completely different.`
        },
        {
          ru: `**Вещь-свидетель.** Предмет, который принадлежит только ему: очки на шнурке, помятый термос, старая «Нива». Вещь помнит больше, чем кажется.`,
          en: `**The witness object.** Something that belongs only to them: glasses on a cord, a dented flask, an ancient car. Objects remember more than you’d think.`
        },
        {
          ru: `**Один момент, а не биография.** Не вся жизнь с рождения, а один вечер, одна поездка, один разговор — в нём видно всё главное.`,
          en: `**One moment, not a biography.** Not a whole life from birth, but one evening, one trip, one conversation — everything important shows up in it.`
        },
        {
          ru: `**Смеяться вместе, а не над.** Юмор уважителен, когда мы смеёмся так, как смеялся бы сам этот человек.`,
          en: `**Laugh with, not at.** Humour is respectful when we laugh the way the person themselves would laugh.`
        }
      ],
      warmup: {
        type: 'list',
        prompt: {
          ru: `Выбери родственника — настоящего или выдуманного. Быстро, по строке на пункт.`,
          en: `Pick a relative — real or invented. Quickly, one line for each.`
        },
        config: {
          count: 5,
          labels: [
            { ru: `Привычка, которую знают все`, en: `A habit everyone knows` },
            { ru: `Фраза, которую он повторяет`, en: `A phrase they keep repeating` },
            { ru: `Вещь, которая есть только у него`, en: `An object only they have` },
            { ru: `Что он делает не так, как все`, en: `Something they do differently from everyone else` },
            { ru: `Один случай, когда он всех удивил`, en: `One time they surprised everybody` }
          ]
        }
      },
      main: {
        type: 'constraint',
        prompt: {
          ru: `Напиши портрет родственника через одну сцену, 150–250 слов. Ни одного слова-ярлыка о характере: пусть говорят привычки, вещи и хотя бы одна его реплика.`,
          en: `Write a portrait of the relative through a single scene, 150–250 words. No labels for their character at all: let habits, objects and at least one line of their speech do the work.`
        },
        config: {
          rules: [
            { kind: 'ban-words', words: {
              ru: ['добрый', 'добрая', 'строгий', 'строгая', 'заботливый', 'заботливая', 'весёлый', 'весёлая', 'мудрый', 'мудрая', 'лучший', 'лучшая', 'любимый', 'любимая'],
              en: ['kind', 'strict', 'caring', 'cheerful', 'wise', 'lovely', 'sweet', 'best', 'loving']
            } },
            { kind: 'must-dialogue' },
            { kind: 'min-words', n: 150 },
            { kind: 'max-words', n: 250 }
          ],
          then: {
            ru: `Перечитай так, будто ты — этот человек. Узнал бы он себя и не обиделся бы? Если в какой-то строке уважение потерялось — перепиши её.`,
            en: `Reread it as if you were this person. Would they recognise themselves without feeling hurt? If respect slips anywhere, rewrite that line.`
          }
        }
      },
      alt: {
        ru: `Не хочешь писать о своей семье — придумай родственника целиком или возьми семью из книги, фильма, сериала и опиши одного её члена через ту же сцену. Выдуманный родственник — полноценный вариант, а не запасной.`,
        en: `If you’d rather not write about your own family, invent a relative from scratch, or take a family from a book, film or series and portray one of its members through the same kind of scene. An invented relative is a full option, not a fallback.`
      },
      avoid: {
        ru: `Список качеств и биография с рождения. «Самая лучшая бабушка на свете», «золотые руки», «всегда поможет советом». Слащавость — и насмешка сверху. Чужие тайны: болезни, ссоры, деньги — то, чем человек не хотел бы делиться. «У него было тяжёлое детство» вместо одной детали, которая это показывает.`,
        en: `A list of qualities and a biography from birth. “The best grandma in the world”, “good with his hands”, “always there with advice”. Sugary sweetness — and mockery from above. Other people’s secrets: illness, quarrels, money — things the person wouldn’t want shared. “He had a hard childhood” instead of one detail that shows it.`
      },
      reading: [
        { title: 'My Family and Other Animals', author: 'Gerald Durrell', age: '13+' },
        { title: 'My Grandmother Asked Me to Tell You She’s Sorry', author: 'Fredrik Backman', age: '15+' },
        { title: 'Sommarboken / The Summer Book', author: 'Tove Jansson', age: '13+' }
      ],
      teacher: {
        note: {
          ru: `Тема — из мастер-классов ВШЭ «Родственники в тексте»: как описать близких ярко, интересно и убедительно. Заранее скажите, что текст не обязательно показывать и что выдуманный родственник — полноценный вариант. Подскажите приём собирательного образа: писатели часто соединяют черты нескольких людей в одного персонажа. Обсуждайте только текст, а не реальную семью ученика.`,
          en: `The topic comes from the HSE masterclass on relatives in fiction: how to portray family members vividly, interestingly and convincingly. Say up front that nobody has to share their text and that an invented relative is a full option. Suggest the composite technique: writers often combine traits from several people into one character. Discuss only the writing, never the student’s real family.`
        },
        source: ['hse-spb', 'ou-fiction', 'ou-know', 'original']
      }
    },

    {
      id: 'cute',
      title: { ru: `Милый персонаж без сюсюканья`, en: `Cute without the cooing` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `Слово «милый» почти всегда портит текст: «милый малыш с пухлыми щёчками», «милый котик». Читатель морщится. Но трогательные персонажи есть в самых серьёзных книгах — и там они работают, потому что автор не умиляется, а внимательно смотрит.`,
        en: `The word “cute” nearly always spoils a sentence: “a cute little baby with chubby cheeks”, “a cute kitty”. Readers wince. Yet endearing characters turn up in the most serious books, and they work there because the writer isn’t cooing — they are paying close attention.`
      },
      angle: {
        ru: `Милота — не внешность, а поведение: серьёзность в мелочах, своя логика, упорство, неуклюжая забота о других. Одни и те же приёмы работают для ребёнка, взрослого и животного. Это ещё и упражнение на эмоциональный интеллект: чтобы персонаж трогал, нужно понять, как он думает.`,
        en: `Cuteness isn’t looks; it’s behaviour: seriousness about small things, a logic of one’s own, stubbornness, clumsy care for others. The same techniques work for a child, an adult and an animal. It’s also an exercise in emotional intelligence: to make a character touching, you have to understand how they think.`
      },
      techniques: [
        {
          ru: `**Серьёзность в мелочах.** Смешно и трогательно, когда персонаж относится к мелкому делу как к важной миссии: шестилетка «дежурит» у двери, пёс охраняет один конкретный носок.`,
          en: `**Seriousness about small things.** It’s funny and touching when a character treats a tiny task as a vital mission: a six-year-old “on duty” by the door, a dog guarding one particular sock.`
        },
        {
          ru: `**Своя логика.** Покажи, как персонаж объясняет мир — неправильно, но последовательно: «Лифт устаёт, поэтому на пятый этаж я хожу пешком».`,
          en: `**A logic of their own.** Show how the character explains the world — wrongly, but consistently: “The lift gets tired, so I walk up to the fifth floor.”`
        },
        {
          ru: `**Действие, а не внешность.** Никаких «пухлых щёчек» и «глазок-бусинок». Что персонаж *делает*? Как старается — и что у него не выходит?`,
          en: `**Action, not appearance.** No “chubby cheeks” or “button eyes”. What does the character *do*? How do they try — and what don’t they manage?`
        },
        {
          ru: `**Забота не по размеру.** Трогает, когда маленький заботится о большом: кот приносит заболевшему хозяину свой лучший трофей, ребёнок укрывает уснувшую бабушку своей курткой.`,
          en: `**Care out of proportion.** It’s moving when the small look after the big: a cat brings its sick owner its finest trophy, a child covers a sleeping grandmother with their own jacket.`
        },
        {
          ru: `**Взгляд без умиления.** Рассказчик может даже раздражаться на персонажа — тогда милота пробивается сама, вопреки ему.`,
          en: `**A narrator who doesn’t gush.** The narrator can even be irritated by the character — then the cuteness breaks through on its own, in spite of them.`
        }
      ],
      warmup: {
        type: 'rewrite',
        prompt: {
          ru: `Перепиши этот абзац без сюсюканья: убери уменьшительные слова и умиление, дай котёнку действие и его собственную логику. 3–5 предложений.`,
          en: `Rewrite this paragraph without the cooing: cut the baby words and the gushing, and give the kitten an action and a logic of its own. 3–5 sentences.`
        },
        config: {
          source: {
            ru: `Маленький пушистенький котёночек Барсик был такой милый-премилый! Он так смешно шевелил своими крошечными ушками и смотрел на всех огромными глазками-бусинками. Когда он видел свою мамочку, он радостно бежал к ней на маленьких лапках. Ну просто прелесть! Все вокруг умилялись и не могли на него налюбоваться.`,
            en: `Biscuit was the fluffiest, teeny-tiniest, cutest little kitten ever! He wiggled his itty-bitty ears so sweetly and gazed at everyone with his big button eyes. Whenever he saw his mummy he scampered over to her on his little paws. Just adorable! Everyone around him melted and couldn’t stop gazing at him.`
          }
        }
      },
      main: {
        type: 'fields',
        prompt: {
          ru: `Придумай трогательного персонажа — ребёнка, взрослого или животного. Заполни поля, а потом напиши сцену. Слово «милый» использовать нельзя.`,
          en: `Invent an endearing character — a child, an adult or an animal. Fill in the fields, then write a scene. The word “cute” is off limits.`
        },
        config: {
          fields: [
            {
              id: 'who',
              label: { ru: `Кто это — одной строкой, без внешности`, en: `Who is it — one line, no appearance` },
              hint: { ru: `Возраст или вид и одно занятие: «семилетний Санжар, который учит сестру шахматам, хотя сам знает только, как ходит конь».`, en: `Age or species and one pursuit: “seven-year-old Sanzhar, who is teaching his sister chess though he only knows how the knight moves”.` }
            },
            {
              id: 'mission',
              label: { ru: `Какое маленькое дело для него сейчас важнее всего?`, en: `What small task matters most to them right now?` },
              hint: { ru: `Спасти улитку с тротуара, донести суп соседке, не пропустить вечерний самолёт над домом.`, en: `Rescuing a snail from the pavement, carrying soup to a neighbour, not missing the evening plane over the house.` }
            },
            {
              id: 'logic',
              label: { ru: `Как он объясняет себе мир?`, en: `How do they explain the world to themselves?` },
              hint: { ru: `Одна неправильная, но последовательная мысль.`, en: `One idea that is wrong but consistent.` }
            },
            {
              id: 'effort',
              label: { ru: `Как он старается — и что не получается?`, en: `How do they try — and what goes wrong?` }
            },
            {
              id: 'care',
              label: { ru: `О ком он заботится — неуклюже, не по размеру?`, en: `Who do they look after — clumsily, out of proportion?` }
            },
            {
              id: 'witness',
              label: { ru: `Кто на него смотрит и как реагирует — без умиления?`, en: `Who is watching, and how do they react — without gushing?` },
              hint: { ru: `Взрослый, который спешит; старший брат, которому неловко; продавец, которому некогда.`, en: `An adult in a hurry; an older brother who is embarrassed; a shopkeeper with no time to spare.` }
            }
          ],
          then: {
            ru: `Напиши сцену на 150–250 слов. Ни одного уменьшительного слова ради умиления и ни одного «милый», «прелесть», «очаровательный».`,
            en: `Write a scene of 150–250 words. No baby words for effect, and no “cute”, “adorable” or “precious”.`
          }
        }
      },
      alt: {
        ru: `Если не хочешь писать о младших братьях, сёстрах или своём питомце — придумай персонажа целиком. Можно взять и неживое: старый робот-пылесос, который упрямо объезжает одну и ту же ножку стула.`,
        en: `If you’d rather not write about your younger siblings or your own pet, invent a character from scratch. It can even be a machine: an old robot vacuum that stubbornly circles the same chair leg.`
      },
      avoid: {
        ru: `Уменьшительные суффиксы ради умиления: «лапки», «глазки», «носик». «Пухлые щёчки», «глазки-бусинки», «комочек счастья». Персонаж, который только выглядит, но ничего не делает. Ребёнок, который говорит как мудрый взрослый. Животное, которое думает как человек, без своей звериной логики. Рассказчик, который сам всё время повторяет, как это трогательно.`,
        en: `Diminutives for effect: “little paws”, “teeny nose”. “Chubby cheeks”, “button eyes”, “a bundle of joy”. A character who only looks sweet and never does anything. A child who talks like a wise old adult. An animal that thinks like a person, with no animal logic of its own. A narrator who keeps telling us how touching it all is.`
      },
      reading: [
        { title: 'Sommarboken / The Summer Book', author: 'Tove Jansson', age: '13+' },
        { title: 'Бежин луг / Bezhin Meadow', author: 'Иван Тургенев / Ivan Turgenev', age: '13+' },
        { title: 'A Zoo in My Luggage', author: 'Gerald Durrell', age: '13+' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', age: '15+' },
        { title: 'Extremely Loud & Incredibly Close', author: 'Jonathan Safran Foer', age: '16+' }
      ],
      teacher: {
        note: {
          ru: `Анонс ВШЭ называет «милого» персонажа трудной задачей: легко скатиться в пошлые клише и сюсюканье, а сама милота выполняет в текстах множество функций и связана с эмоциональным интеллектом. Хорошо работает контраст: прочитайте вслух абзац разминки, а сразу за ним — лучшие переписанные версии. Если ученик пишет о младшем брате или питомце, это его выбор; реальных историй не требуйте. Предложите хотя бы одному ученику взрослого персонажа — приёмы те же.`,
          en: `The HSE announcement calls the cute character a hard task: it’s easy to slide into vulgar clichés and baby talk, while cuteness itself does many jobs in fiction and reflects emotional intelligence. Contrast works well: read the warm-up paragraph aloud, then the best rewrites straight after it. If a student writes about a younger sibling or a pet, that’s their choice; never require real stories. Suggest an adult character to at least one student — the techniques are the same.`
        },
        source: ['hse-spb', 'original']
      }
    },

    {
      id: 'face',
      title: { ru: `Лицо без списка черт`, en: `A face, not a list of features` },
      age: '13+',
      minutes: 15,
      hook: {
        ru: `«У неё были голубые глаза, прямой нос и тонкие губы». Попробуй увидеть это лицо. Не выходит: это строчка из анкеты, а не человек. Лица, которые мы помним, всегда в движении — они меняются, когда человек слушает, врёт или ждёт.`,
        en: `“She had blue eyes, a straight nose and thin lips.” Try to see that face. You can’t — it’s a line from a form, not a person. The faces we remember are always moving: they change when someone listens, lies or waits.`
      },
      angle: {
        ru: `Лицо — самое трудное в описании человека: слов для черт мало, и все они затёрты. Поэтому пишут не черты, а движение, перемену и одну выдающую деталь. И сравнивают лицо не с озёрами и фарфором, а с чем-то живым и подвижным.`,
        en: `A face is the hardest part of a person to describe: there are few words for features, and all of them are worn out. So writers describe not features but movement, change and one telling detail. And they compare a face not to lakes or porcelain but to something alive and moving.`
      },
      techniques: [
        {
          ru: `**Движение вместо формы.** Не «густые брови», а «брови, которые поднимаются раньше, чем он успевает удивиться».`,
          en: `**Movement instead of shape.** Not “thick eyebrows” but “eyebrows that go up before he has had time to be surprised”.`
        },
        {
          ru: `**Перемена.** Покажи лицо до и после: что изменилось, когда человек услышал новость, увидел знакомого, соврал?`,
          en: `**Change.** Show the face before and after: what shifted when the person heard the news, saw someone they knew, told a lie?`
        },
        {
          ru: `**Одна выдающая черта.** Деталь, которая есть только у этого лица и что-то говорит о человеке: шрам на подбородке после велосипеда, веснушки только на одной щеке, привычка прикусывать щёку изнутри.`,
          en: `**One telling feature.** A detail only this face has, and that says something about the person: a scar on the chin from a bike, freckles on one cheek only, a habit of biting the inside of a cheek.`
        },
        {
          ru: `**Сравнение с живым.** Не «глаза как озёра», а то, что само движется и дышит: «лицо собралось, как кошка перед прыжком».`,
          en: `**A comparison with something alive.** Not “eyes like lakes”, but something that moves and breathes: “his face gathered itself like a cat about to jump”.`
        },
        {
          ru: `**Меньше — лучше.** Две точные детали сильнее десяти. Остальное читатель дорисует сам.`,
          en: `**Less is more.** Two precise details beat ten. The reader will fill in the rest.`
        }
      ],
      warmup: {
        type: 'constraint',
        prompt: {
          ru: `Опиши знакомое лицо — настоящее или выдуманное — в 2–3 предложениях, не называя ни одной его части. Только то, что лицо делает.`,
          en: `Describe a face you know — real or invented — in 2–3 sentences without naming a single part of it. Only what the face does.`
        },
        config: {
          rules: [
            { kind: 'ban-words', words: {
              ru: ['глаза', 'глаз', 'глазами', 'нос', 'носом', 'губы', 'губами', 'рот', 'ртом', 'брови', 'бровями', 'лоб', 'щёки', 'щеки', 'волосы'],
              en: ['eyes', 'eye', 'nose', 'lips', 'mouth', 'eyebrows', 'brows', 'forehead', 'cheeks', 'hair']
            } },
            { kind: 'max-words', n: 50 }
          ]
        }
      },
      main: {
        type: 'columns',
        prompt: {
          ru: `Выбери одно лицо: человек из автобуса, портрет в музее, кадр из фильма на паузе или выдуманный герой. Покажи его в трёх моментах — по 2–4 предложения в колонке.`,
          en: `Choose one face: someone on a bus, a portrait in a museum, a paused film frame or an invented character. Show it at three moments, 2–4 sentences per column.`
        },
        config: {
          shared: {
            ru: `Подойдёт любая ситуация, где лицо меняется: вратарь перед пенальти, во время удара и после; продавщица на Зелёном базаре, когда торгуется, уступает и пересчитывает деньги.`,
            en: `Any situation where a face changes will do: a goalkeeper before a penalty, during the kick and after; a stallholder at the Green Bazaar haggling, giving in, then counting the money.`
          },
          columns: [
            { label: { ru: `До: лицо в покое`, en: `Before: the face at rest` } },
            { label: { ru: `Момент перемены`, en: `The moment it changes` } },
            { label: { ru: `После`, en: `After` } }
          ],
          then: {
            ru: `Собери портрет на 80–150 слов: одна выдающая черта, одно движение, одна перемена и одно сравнение с чем-то живым. Всё остальное вычеркни.`,
            en: `Put together a portrait of 80–150 words: one telling feature, one movement, one change and one comparison with something alive. Cut everything else.`
          }
        }
      },
      alt: {
        ru: `Не хочешь описывать знакомых — возьми лицо с картины, из фотографии в новостях, из фильма или придумай его. Можно описать и морду собаки: приёмы те же.`,
        en: `If you’d rather not describe people you know, take a face from a painting, a news photo or a film, or invent one. A dog’s face works too: the techniques are the same.`
      },
      avoid: {
        ru: `Список из анкеты: цвет глаз, форма носа, губы. «Глаза как озёра», «губы как лепестки», «кожа как фарфор», «глаза-омуты». Описание сверху вниз, от волос до подбородка. Лицо, которое ни разу не двигается. Оценки вместо деталей: «красивое», «приятное», «обычное». И лица одноклассников — без их согласия.`,
        en: `A list from a form: eye colour, nose shape, lips. “Eyes like lakes”, “lips like petals”, “porcelain skin”, “bottomless eyes”. A top-to-bottom scan from hairline to chin. A face that never moves. Judgements instead of details: “pretty”, “pleasant”, “ordinary”. And classmates’ faces — without their consent.`
      },
      reading: [
        { title: 'Бежин луг / Bezhin Meadow', author: 'Иван Тургенев / Ivan Turgenev', age: '13+' },
        { title: 'The Bafut Beagles', author: 'Gerald Durrell', age: '13+' }
      ],
      teacher: {
        note: {
          ru: `Тема — из мастер-классов ВШЭ о приёмах описания человеческого лица. Принесите репродукции портретов или кадры из фильмов на паузе: описывать лица одноклассников не стоит, это легко становится неприятным. Если ученики застревают, дайте приём «выпиши двадцать деталей — оставь две». Лучший тест результата: прочитайте портрет вслух и спросите группу, что это за человек, а не как он выглядит.`,
          en: `The topic comes from the HSE masterclass on techniques for describing a human face. Bring in reproductions of portraits or paused film frames: describing classmates’ faces is best avoided, as it can quickly turn unkind. If students get stuck, try “list twenty details, keep two”. The best test: read a portrait aloud and ask the group what kind of person this is, not what they look like.`
        },
        source: ['hse-spb', 'owl-cw', 'original']
      }
    },

    {
      id: 'slipstream',
      title: { ru: `Слипстрим: странное внутри обычного`, en: `Slipstream: the strange inside the ordinary` },
      age: '15+',
      minutes: 25,
      hook: {
        ru: `Человек просыпается и обнаруживает, что превратился в насекомое, — а больше всего его беспокоит, что он опоздает на работу. Кафка не объясняет, как это случилось. В этом и сила: странному не нужно объяснение, если все вокруг ведут себя так, будто это просто жизнь.`,
        en: `A man wakes up to find he has turned into an insect — and what worries him most is being late for work. Kafka never explains how it happened. That’s the point: the strange needs no explanation when everyone around it behaves as if this is just life.`
      },
      angle: {
        ru: `Слипстрим — не фантастика с правилами и не сказка с волшебством. Это обычный мир, в котором одна вещь сдвинута, и никто не спешит это объяснить. Эффект — лёгкое головокружение: смешно, тревожно и узнаваемо одновременно. Жанр учит главному — доверять детали и не разжёвывать.`,
        en: `Slipstream isn’t science fiction with rules, or a fairy tale with magic. It’s the ordinary world with one thing shifted, and nobody rushing to explain it. The effect is a slight dizziness: funny, unsettling and familiar all at once. The genre teaches a core skill — trust the detail and don’t spell things out.`
      },
      techniques: [
        {
          ru: `**Один сдвиг.** Меняй в мире что-то одно, а всё остальное оставляй скучно-точным: расписание автобусов, цена хлеба, домашка по алгебре.`,
          en: `**One shift.** Change one thing about the world and keep everything else dully accurate: the bus timetable, the price of bread, the maths homework.`
        },
        {
          ru: `**Спокойная интонация.** Рассказчик говорит о странном тем же тоном, что и о погоде. Никаких «вдруг», «невероятно», «я не мог поверить».`,
          en: `**A calm tone.** The narrator talks about the strange thing in the same voice as the weather. No “suddenly”, no “incredibly”, no “I couldn’t believe it”.`
        },
        {
          ru: `**Бытовая реакция.** Люди реагируют на странное практично: жалуются в чат дома, фотографируют, пишут объявление, встают в очередь.`,
          en: `**An everyday reaction.** People respond to the strange practically: they complain in the building’s group chat, take photos, put up a notice, form a queue.`
        },
        {
          ru: `**Правила без причин.** У странного могут быть правила — «по четвергам лестница на одну ступеньку длиннее», — но не объяснения.`,
          en: `**Rules without reasons.** The strange can have rules — “on Thursdays the staircase has one extra step” — but no explanations.`
        },
        {
          ru: `**Открытый финал.** Не разгадывай тайну. Финал может изменить героя, но не объяснить мир.`,
          en: `**An open ending.** Don’t solve the mystery. The ending can change the character, but it doesn’t explain the world.`
        }
      ],
      warmup: {
        type: 'generator',
        prompt: {
          ru: `Вытяни карточку из каждой колоды и напиши 3–4 спокойных предложения: обычное место, в котором что-то сдвинулось, и первая реакция людей.`,
          en: `Draw a card from each deck and write 3–4 calm sentences: an ordinary place where something has shifted, and how people first react.`
        },
        config: {
          decks: [
            {
              label: { ru: `Обычное место`, en: `An ordinary place` },
              items: [
                { ru: `школьная столовая`, en: `the school canteen` },
                { ru: `лифт в девятиэтажке`, en: `the lift in a nine-storey block` },
                { ru: `вагон метро`, en: `a metro carriage` },
                { ru: `очередь в поликлинике`, en: `the queue at the health centre` },
                { ru: `прачечная`, en: `a launderette` },
                { ru: `остановка у Зелёного базара`, en: `the bus stop by the Green Bazaar` },
                { ru: `чат класса`, en: `the class group chat` },
                { ru: `дача в октябре`, en: `a dacha in October` }
              ]
            },
            {
              label: { ru: `Сдвиг`, en: `The shift` },
              items: [
                { ru: `один этаж исчез, но кнопка с его номером осталась`, en: `one floor has vanished, but its button is still there` },
                { ru: `по вторникам все говорят на полтона тише, и никто не помнит, с каких пор`, en: `on Tuesdays everyone speaks a little more quietly, and nobody remembers since when` },
                { ru: `из крана течёт тёплое молоко`, en: `warm milk comes out of the tap` },
                { ru: `в расписании появился урок, который никто не ведёт`, en: `a lesson has appeared in the timetable that nobody teaches` },
                { ru: `тени опаздывают на пару секунд`, en: `shadows lag a couple of seconds behind` },
                { ru: `на каждой скамейке лежит одна и та же книга`, en: `the same book is lying on every bench` },
                { ru: `снег идёт только над одной улицей`, en: `it is snowing over one street only` },
                { ru: `все часы в доме показывают разное время, и все правы`, en: `every clock in the building shows a different time, and they are all right` }
              ]
            },
            {
              label: { ru: `Реакция`, en: `The reaction` },
              items: [
                { ru: `пишут жалобу в управляющую компанию`, en: `people complain to the management company` },
                { ru: `делают вид, что так было всегда`, en: `everyone acts as if it has always been like this` },
                { ru: `кто-то начинает продавать билеты`, en: `someone starts selling tickets` },
                { ru: `спорят только о мелочах`, en: `people argue only about the details` },
                { ru: `один человек ведёт тетрадь наблюдений`, en: `one person keeps a notebook of observations` },
                { ru: `бабушки у подъезда давно знали`, en: `the grandmothers on the bench outside knew all along` },
                { ru: `никто не замечает, кроме героя`, en: `nobody notices except the main character` },
                { ru: `учительница требует, чтобы это не мешало уроку`, en: `the teacher insists it mustn’t disrupt the lesson` }
              ]
            }
          ]
        }
      },
      main: {
        type: 'constraint',
        prompt: {
          ru: `Напиши миниатюру в жанре слипстрим, 200–350 слов. Обычный мир, один сдвиг, спокойный тон, никаких объяснений. Можно взять сдвиг из разминки.`,
          en: `Write a short slipstream piece of 200–350 words. The ordinary world, one shift, a calm tone, no explanations. You can use the shift from the warm-up.`
        },
        config: {
          rules: [
            { kind: 'ban-words', words: {
              ru: ['вдруг', 'внезапно', 'почему-то', 'странно', 'странный', 'странная', 'невероятно', 'магия', 'волшебство', 'сон', 'приснилось'],
              en: ['suddenly', 'somehow', 'strange', 'strangely', 'weird', 'unbelievable', 'magic', 'dream', 'dreamt']
            } },
            { kind: 'min-words', n: 200 },
            { kind: 'max-words', n: 350 }
          ],
          then: {
            ru: `Найди место, где рассказчик начинает объяснять, откуда взялось странное, и вычеркни его. Стало тревожнее или просто непонятно? Если непонятно — добавь не объяснение, а ещё одну бытовую деталь.`,
            en: `Find the place where the narrator starts explaining where the strangeness came from, and cut it. Is it more unsettling now, or just confusing? If it’s confusing, add not an explanation but one more everyday detail.`
          }
        }
      },
      alt: {
        ru: `Тема не личная, но если сдвиг в твоём тексте касается семьи или дома и тебе не хочется это трогать — перенеси действие в чужое место: офис, аэропорт, чужой подъезд, выдуманный город.`,
        en: `The topic isn’t personal, but if the shift in your story touches on family or home and you’d rather not go there, move it somewhere else: an office, an airport, a stranger’s stairwell, an invented town.`
      },
      avoid: {
        ru: `Объяснение в конце: «оказалось, это был сон», «это был эксперимент учёных», «виноват волшебник». Слишком много сдвигов — мир превращается в сказку, и странность пропадает. Громкая интонация: «Это было невероятно!». Хоррор ради хоррора: слипстрим тревожит, а не пугает. Странность, которая ничего не меняет в герое.`,
        en: `An explanation at the end: “it turned out to be a dream”, “it was a scientific experiment”, “a wizard did it”. Too many shifts — the world becomes a fairy tale and the strangeness disappears. A loud tone: “It was unbelievable!” Horror for its own sake: slipstream unsettles rather than frightens. A strangeness that changes nothing in the character.`
      },
      reading: [
        { title: 'El libro de los seres imaginarios / The Book of Imaginary Beings', author: 'Jorge Luis Borges', age: '13+' },
        { title: 'Die Verwandlung / The Metamorphosis', author: 'Franz Kafka', age: '15+' },
        { title: 'Piranesi', author: 'Susanna Clarke', age: '15+' },
        { title: 'El Aleph / The Aleph', author: 'Jorge Luis Borges', age: '16+' }
      ],
      teacher: {
        note: {
          ru: `Тема — из анонсов ВШЭ: слипстрим как текст, где странное живёт внутри обычного без объяснений, и стилистические подходы, которые «подталкивают» автора в этот жанр. В исходном списке много взрослой прозы (Баллард, Картер, Каван, Мураками, Энрикес) — ученикам её не рекомендуем, здесь только то, что подходит по возрасту. Хороший признак удачи при чтении вслух: группа одновременно смеётся и слегка тревожится.`,
          en: `The topic comes from the HSE announcements: slipstream as writing where the strange lives inside the ordinary without explanation, plus stylistic approaches that “push” a writer into the genre. The source list includes a lot of adult fiction (Ballard, Carter, Kavan, Murakami, Enriquez); we don’t recommend it to students — only age-appropriate titles are listed here. A good sign when reading aloud: the group laughs and feels slightly uneasy at the same time.`
        },
        source: ['hse-spb', 'original']
      }
    }
  ]);
})();
