/* Thematic workshops, set B: humour, absurd, science fiction, empathy, fatigue, music. */
(function () {
  'use strict';

  SM.addWorkshops([
    {
      id: 'humor',
      title: { ru: `Юмор по-английски`, en: `Humour, the English way` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `Английский юмор часто держится на том, чего автор *не* делает: не повышает голос, не объясняет шутку, не смеётся сам. Дом полон дыма, а рассказчик сообщает, что чайник так и не вскипел. Этому можно научиться: у эффекта есть механика.`,
        en: `English humour often depends on what the writer *doesn’t* do: raise their voice, explain the joke, laugh at it. The house is full of smoke, and the narrator mentions that the kettle never did boil. It can be learned: the effect has mechanics.`
      },
      angle: {
        ru: `Юмор тренирует точность: смешно становится, когда слово стоит ровно на своём месте, а пауза длится ровно столько, сколько нужно. Фокус мастерской — сдержанность: преуменьшение и невозмутимый тон вместо громких шуток. Эти приёмы пригодятся и в рассказе, и в рецензии, и в эссе, которому нужна лёгкость.`,
        en: `Humour trains precision: things get funny when a word sits exactly where it should and a pause lasts exactly as long as it needs to. This workshop is about restraint — understatement and a straight face instead of loud jokes. The same moves work in a story, a review, or an essay that needs a lighter touch.`
      },
      techniques: [
        {
          ru: `**Преуменьшение.** Говори о большом как о мелочи: «Поездка удалась не во всём» — о поездке, в которой сломались машина, палатка и одна давняя дружба.`,
          en: `**Understatement.** Treat something huge as a trifle: “The trip was not an unqualified success” — about a trip that broke the car, the tent and a long friendship.`
        },
        {
          ru: `**Невозмутимый тон.** Рассказчик сообщает о нелепом ровным голосом, как прогноз погоды, и никак его не комментирует.`,
          en: `**Deadpan.** The narrator reports something ridiculous in a level voice, like the shipping forecast, and never comments on it.`
        },
        {
          ru: `**Снижение.** Фраза набирает высоту — и в конце падает в быт: «Он сражался за правду, справедливость и последний кусок пирога».`,
          en: `**Bathos.** A sentence climbs high and then drops into the everyday: “He fought for truth, justice and the last biscuit.”`
        },
        {
          ru: `**Комический список.** Два обычных пункта задают ритм, третий его ломает. Работает, только если третий пункт точный, а не просто случайный.`,
          en: `**The comic list.** Two ordinary items set a rhythm; the third breaks it. It only works if the third item is precise, not just random.`
        },
        {
          ru: `**Взгляд ребёнка.** Как в рассказах Ричмал Кромптон об Уильяме: юный герой совершенно серьёзно излагает свою логику, а читатель видит больше, чем он.`,
          en: `**The child’s-eye view.** As in Richmal Crompton’s William stories: a young hero sets out his reasoning in total earnest, and the reader sees more than he does.`
        }
      ],
      warmup: {
        type: 'list',
        prompt: {
          ru: `Комический список. Составь перечень из трёх пунктов о чём-то обычном: что ты взял в поход, что лежит на дне рюкзака, что спасли, когда затопило кухню. Первые два пункта — обычные, третий — неожиданный, но точный.`,
          en: `A comic list. Make a list of three things about something ordinary: what you packed for a hike, what lives at the bottom of your school bag, what was rescued when the kitchen flooded. The first two items are ordinary; the third is unexpected but precise.`
        },
        config: {
          count: 3,
          labels: [
            { ru: `Обычный пункт`, en: `An ordinary item` },
            { ru: `Ещё один обычный`, en: `Another ordinary one` },
            { ru: `Тот, что ломает ритм`, en: `The one that breaks the rhythm` }
          ],
          then: {
            ru: `Собери список в одно предложение и прочитай вслух. Где должна быть пауза перед третьим пунктом — запятая, тире, «и»?`,
            en: `Put the list into one sentence and read it aloud. Where does the pause before the third item go — a comma, a dash, an “and”?`
          }
        }
      },
      main: {
        type: 'rewrite',
        prompt: {
          ru: `Перепиши этот слишком громкий абзац в английской манере: преуменьши катастрофу, убери восклицательные знаки, дай рассказчику невозмутимый голос. Добавь одно снижение.`,
          en: `Rewrite this far-too-loud paragraph the English way: shrink the disaster, remove the exclamation marks, give the narrator a perfectly level voice. Add one moment of bathos.`
        },
        config: {
          source: {
            ru: `Это был САМЫЙ УЖАСНЫЙ день в моей жизни!!! Мы с братом решили испечь маме торт на день рождения, и всё пошло не так! Мука была везде, абсолютно везде! Духовка задымилась, сработала пожарная сигнализация, прибежали соседи! Я думал, что умру от стыда! А торт получился ужасный, просто кошмар! И тут пришла мама и увидела весь этот ужас!`,
            en: `It was the WORST day of my ENTIRE life!!! My brother and I decided to bake Mum a birthday cake and EVERYTHING went wrong! There was flour everywhere, absolutely everywhere! The oven started smoking, the smoke alarm went off, the neighbours came running! I thought I would die of embarrassment! And the cake was awful, a total disaster! Then Mum walked in and saw the whole horrible mess!`
          },
          then: {
            ru: `Допиши одну-две реплики младшего брата, который совершенно серьёзно объясняет, почему всё прошло строго по плану.`,
            en: `Add a line or two from the younger brother, explaining in complete earnest why everything went exactly to plan.`
          }
        }
      },
      alt: {
        ru: `Текст для переписывания — не о тебе, так что рассказывать о своей семье не нужно. Хочешь свой материал — возьми школьное событие (линейку, поход, генеральную репетицию) или выдуманного героя с его безупречным планом, который провалился.`,
        en: `The text you’re rewriting isn’t about you, so there’s no need to bring in your own family. If you want your own material, take a school event (an assembly, a hike, a dress rehearsal) or an invented hero with a flawless plan that fell apart.`
      },
      avoid: {
        ru: `Юмор, который бьёт по уязвимым — по внешности, акценту, бедности, болезни, — не остроумие, а травля. Смеяться лучше над ситуацией, над собой или над теми, у кого власть. Другие ловушки: объяснять шутку, ставить три восклицательных знака, смеяться громче читателя, пересказывать мемы, которые через месяц устареют.`,
        en: `Humour that hits the vulnerable — looks, accents, poverty, illness — isn’t wit, it’s bullying. Laugh at situations, at yourself, or at whoever holds the power. Other traps: explaining the joke, three exclamation marks, laughing louder than the reader, recycling memes that will be stale in a month.`
      },
      reading: [
        { title: 'Just William', author: 'Richmal Crompton', age: '13+' },
        { title: 'Трое в лодке, не считая собаки / Three Men in a Boat', author: 'Джером К. Джером / Jerome K. Jerome', age: '13+' },
        { title: 'Моя семья и другие звери / My Family and Other Animals', author: 'Джеральд Даррелл / Gerald Durrell', age: '13+' },
        { title: 'Right Ho, Jeeves', author: 'P. G. Wodehouse', age: '13+' }
      ],
      teacher: {
        note: {
          ru: `Начните с чтения вслух: английский юмор слышен в интонации. После разминки попросите прочитать только третьи пункты списков — сразу видно, какие неожиданности точные, а какие просто случайные. Если шутка бьёт по внешности, происхождению или беде реального человека, обсудите это как вопрос ремесла: кто здесь мишень и почему это не работает. Мастер-класс ВШЭ опирался в том числе на сценаристов британских ситкомов; подросткам проще начинать с прозы из списка чтения.`,
          en: `Start by reading aloud: English humour lives in intonation. After the warm-up, ask students to read out only the third items of their lists — you’ll hear at once which surprises are precise and which are merely random. If a joke targets someone’s looks, background or misfortune, treat it as a question of craft: who is the target here, and why doesn’t it work? The HSE masterclass also drew on British sitcom writers; for teenagers it’s easier to start with the prose on the reading list.`
        },
        source: ['hse-spb', 'original']
      }
    },

    {
      id: 'absurd',
      title: { ru: `Повседневный абсурд`, en: `Everyday absurdity` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `В понедельник утром в холодильнике идёт снег. Папа записывает это в тетрадь с показаниями счётчиков и просит всех плотнее закрывать дверцу, чтобы не выстудить квартиру. Так устроен абсурд в бельгийской традиции: невозможное случается в самом обычном месте, а люди встречают его с канцелярским спокойствием.`,
        en: `On Monday morning it is snowing inside the fridge. Dad notes it down in the meter-readings book and asks everyone to shut the door properly so the flat doesn’t get cold. That’s how absurdity works in the Belgian tradition: the impossible happens somewhere utterly ordinary, and people meet it with the calm of a clerk.`
      },
      angle: {
        ru: `Бельгийский абсурдизм близок к сюрреализму и фантастике, но живёт в быту: на кухне, в поездке, в очереди, на сцене стендапа. Писателю он даёт тренировку тона: чем серьёзнее и точнее ты описываешь невозможное, тем убедительнее и смешнее выходит.`,
        en: `Belgian absurdism is a close relative of surrealism and science fiction, but it lives in everyday life: the kitchen, a journey, a queue, a stand-up stage. For a writer it’s practice in tone: the more seriously and precisely you describe the impossible, the more convincing — and the funnier — it becomes.`
      },
      techniques: [
        {
          ru: `**Одно невозможное — остальное правда.** Меняй в мире только одну вещь. Всё вокруг — цены, погода, номер автобуса — остаётся точным и знакомым.`,
          en: `**One impossible thing, everything else true.** Change just one thing about the world. Everything around it — prices, weather, the bus number — stays accurate and familiar.`
        },
        {
          ru: `**Канцелярское спокойствие.** Никто не удивляется. Герои заполняют бланк, составляют график дежурств, вешают объявление.`,
          en: `**Bureaucratic calm.** Nobody is surprised. The characters fill in a form, draw up a rota, put up a notice.`
        },
        {
          ru: `**Логика до конца.** Прими абсурдное правило и выведи из него все бытовые последствия: кто платит, где хранить, что сказать гостям.`,
          en: `**Follow the logic all the way.** Accept the absurd rule and work out every practical consequence: who pays, where it’s kept, what to tell the guests.`
        },
        {
          ru: `**Скучный жанр.** Абсурд удобно подавать в форме, где всё обычно скучно: рецепт, памятка туристу, расписание, протокол собрания.`,
          en: `**A dull genre.** Absurdity is easiest to serve in a form that is usually dull: a recipe, a leaflet for tourists, a timetable, the minutes of a meeting.`
        }
      ],
      warmup: {
        type: 'choose',
        prompt: {
          ru: `В школьной столовой суп начинает отвечать на вопросы. Выбери варианты, которые сильнее всего работают на абсурдный эффект, и прочитай разбор.`,
          en: `In the school canteen, the soup starts answering questions. Choose the options that do most for the absurd effect, then read the explanation.`
        },
        config: {
          questions: [
            {
              q: { ru: `Как реагируют люди?`, en: `How do people react?` },
              options: [
                { ru: `Все кричат и выбегают из столовой.`, en: `Everyone screams and runs out of the canteen.` },
                { ru: `Завуч просит суп говорить потише во время уроков и вносит его в график дежурств.`, en: `The deputy head asks the soup to keep its voice down during lessons and puts it on the duty rota.` },
                { ru: `Герой долго размышляет, не сошёл ли он с ума.`, en: `The hero spends a long time wondering whether he’s lost his mind.` }
              ],
              correct: [1],
              explain: {
                ru: `Крик и сомнения — нормальная реакция, и поэтому абсурд сразу исчезает: мир признаёт, что случилось невозможное. График дежурств делает говорящий суп частью порядка — и именно это одновременно смешно и тревожно.`,
                en: `Screaming and self-doubt are normal reactions, so the absurdity evaporates: the world admits something impossible has happened. The duty rota makes the talking soup part of the system — which is funny and unsettling at once.`
              }
            },
            {
              q: { ru: `Какие детали лучше поддержат этот мир?`, en: `Which details best support this world?` },
              options: [
                { ru: `Суп отвечает только на вопросы по географии, и то неуверенно.`, en: `The soup only answers geography questions, and not very confidently.` },
                { ru: `Суп светится всеми цветами радуги и поёт.`, en: `The soup glows every colour of the rainbow and sings.` },
                { ru: `Порция с ответами стоит на 150 тенге дороже.`, en: `A bowl with answers costs 150 tenge extra.` }
              ],
              correct: [0, 2],
              explain: {
                ru: `Работают первая и третья: они маленькие, точные и бытовые, у чуда появляются правила и цена. Радуга и пение — чудо «вообще»: когда чудес слишком много, мир теряет правила, и абсурд превращается в неразбериху.`,
                en: `The first and third work: they’re small, precise and mundane, and they give the wonder rules and a price. Rainbows and singing are generic magic: pile on the wonders and the world loses its rules, so the absurd turns into a muddle.`
              }
            }
          ]
        }
      },
      main: {
        type: 'constraint',
        prompt: {
          ru: `Напиши сцену на 150–300 слов: в обычном месте (кухня, поезд Алматы — Астана, прачечная, очередь в поликлинике) случается одно невозможное событие. Никто не удивляется. Герои решают практические вопросы.`,
          en: `Write a 150–300-word scene: something impossible happens in an ordinary place (a kitchen, the Almaty–Astana sleeper train, a launderette, the queue at the doctor’s). Nobody is surprised. The characters deal with the practicalities.`
        },
        config: {
          rules: [
            { kind: 'ban-emotions' },
            { kind: 'min-words', n: 150 },
            { kind: 'max-words', n: 300 },
            { kind: 'ban-words', words: {
              ru: ['вдруг', 'внезапно', 'невероятно', 'удивительно', 'странно', 'странный', 'странная', 'странное'],
              en: ['suddenly', 'unbelievable', 'incredible', 'amazing', 'strange', 'weird']
            } }
          ],
          then: {
            ru: `Найди место, где герой почти удивился. Замени его бытовым действием: записать, измерить, уточнить цену, позвонить в справочную.`,
            en: `Find the moment where a character almost shows surprise. Replace it with a practical action: note it down, measure it, ask the price, ring the helpline.`
          }
        }
      },
      alt: {
        ru: `Ничего личного здесь не нужно. Если сцена не идёт, напиши абсурдный документ: «Правила пользования лифтом, который иногда приезжает во вчера» или рецепт супа, который варят только против часовой стрелки и только по средам.`,
        en: `Nothing personal is needed here. If the scene won’t come, write an absurd document instead: “Rules for using the lift that sometimes arrives in yesterday”, or a recipe for soup that must be stirred anticlockwise, and only on Wednesdays.`
      },
      avoid: {
        ru: `Абсурд — не «что угодно». Когда странного слишком много, читателю не за что держаться, и становится скучно. Не объясняй чудо и не заканчивай фразой «это был сон». Не путай абсурд со случайностью: у невозможного события есть свои правила, и герои их соблюдают.`,
        en: `Absurdity isn’t “anything goes”. When there’s too much strangeness, the reader has nothing to hold on to and gets bored. Don’t explain the wonder, and don’t end with “it was all a dream”. Don’t confuse the absurd with the random: the impossible event has its own rules, and the characters keep to them.`
      },
      reading: [
        { title: 'Gaston Lagaffe', author: 'André Franquin', age: '13+' },
        { title: 'Le Chat', author: 'Philippe Geluck', age: '13+' },
        { title: 'Случаи / Incidences', author: 'Даниил Хармс / Daniil Kharms', age: '15+' },
        { title: 'Страх и трепет / Fear and Trembling', author: 'Амели Нотомб / Amélie Nothomb', age: '16+' }
      ],
      teacher: {
        note: {
          ru: `Абсурд легко скатывается в «рандом», и помогает одно правило: невозможное — одно, всё остальное знакомо и проверяемо. Хороший групповой формат — «абсурдная канцелярия»: каждый пишет объявление, бланк или протокол про одно и то же невозможное событие, потом тексты вывешивают рядом. Анонс мастер-класса ВШЭ связывает бельгийский абсурдизм с сюрреализмом, фантастикой, кино, путешествиями, стендапом и кулинарией — любая из этих бытовых рамок подойдёт. Взрослые книги этой традиции подходят подросткам не все: проверяйте перед рекомендацией.`,
          en: `Absurdity easily slides into randomness, and one rule helps: one impossible thing, everything else familiar and checkable. A good group format is the “absurd office”: everyone writes a notice, a form or the minutes of a meeting about the same impossible event, and the texts go up side by side. The HSE masterclass announcement links Belgian absurdism with surrealism, science fiction, cinema, travel, stand-up and cooking — any of these everyday frames will work. Not every adult book in this tradition suits teenagers: check before recommending.`
        },
        source: ['hse-spb', 'original']
      }
    },

    {
      id: 'scifi',
      title: { ru: `Фантастика из привычного предмета`, en: `Science fiction from an everyday object` },
      age: '13+',
      minutes: 25,
      hook: {
        ru: `Чтобы придумать фантастический мир, звездолёты не нужны. Хватит проездной карты, которая запоминает не поездки, а разговоры в автобусе. Или лифта, который возит только тех, кто сегодня кому-то помог. Одно изменение в знакомой вещи — и мир начинает перестраиваться.`,
        en: `You don’t need starships to build a science-fiction world. A bus pass that records conversations rather than journeys will do. Or a lift that only carries people who have helped someone today. Change one familiar thing, and the world starts rearranging itself.`
      },
      angle: {
        ru: `Фантастика — лаборатория последствий: «что, если…», доведённое до конца. Японская фантастика часто вырастает не из космоса, а из повседневности: из магазина у дома, электрички, школьного коридора. Фокус мастерской — генерация сюжета: из одного правила вывести героя, конфликт и цену.`,
        en: `Science fiction is a laboratory of consequences: “what if…” followed all the way through. Japanese SF often grows not from outer space but from daily life — the corner shop, the commuter train, the school corridor. The workshop focuses on generating a plot: getting a hero, a conflict and a price out of a single rule.`
      },
      techniques: [
        {
          ru: `**Один сдвиг.** Меняй одно свойство знакомого предмета или одно правило мира. Всё остальное оставь как есть — так читатель поверит.`,
          en: `**One shift.** Change one property of a familiar object, or one rule of the world. Leave everything else as it is, and the reader will believe you.`
        },
        {
          ru: `**Цепочка последствий.** Спроси «и что тогда?» три раза подряд: что изменится дома, в городе, в законах. Сюжет часто прячется в третьем ответе.`,
          en: `**A chain of consequences.** Ask “and then what?” three times in a row: what changes at home, in the city, in the law. The plot often hides in the third answer.`
        },
        {
          ru: `**Кто заметит первым.** Герой — не изобретатель, а тот, кого изменение задело раньше других: кондуктор, мастер в будке по ремонту обуви, курьер на самокате.`,
          en: `**Who notices first.** The hero isn’t the inventor but whoever the change hits first: a bus conductor, the man in the shoe-repair kiosk, a delivery rider on a scooter.`
        },
        {
          ru: `**Цена.** Любое удобство чего-то стоит. Конфликт появляется, когда видно, кто за него платит.`,
          en: `**The price.** Every convenience costs something. Conflict appears the moment you can see who’s paying.`
        },
        {
          ru: `**Быт вместо лекции.** Не объясняй устройство мира абзацем. Покажи, как им пользуются: чек, объявление в подъезде, ссора в очереди.`,
          en: `**Daily life, not a lecture.** Don’t explain how the world works in a paragraph. Show it in use: a receipt, a notice in the stairwell, a row in a queue.`
        }
      ],
      warmup: {
        type: 'columns',
        prompt: {
          ru: `Возьми предмет, который сейчас рядом с тобой, и придумай три «что, если». В каждой колонке — одно изменение и одно его последствие.`,
          en: `Take an object that’s near you right now and come up with three “what ifs”. In each column: one change and one of its consequences.`
        },
        config: {
          columns: [
            { label: { ru: `Что, если он помнит…`, en: `What if it remembers…` } },
            { label: { ru: `Что, если он отказывается…`, en: `What if it refuses…` } },
            { label: { ru: `Что, если он есть не у всех…`, en: `What if not everyone has one…` } }
          ],
          then: {
            ru: `Какое «что, если» тянет за собой больше всего вопросов? Отметь его — с ним можно идти в основное задание вместо одной из карточек.`,
            en: `Which “what if” drags the most questions behind it? Mark it — you can take it into the main task in place of one of the cards.`
          }
        }
      },
      main: {
        type: 'generator',
        prompt: {
          ru: `Вытяни по карточке из каждой колоды (одну можно заменить идеей из разминки). Напиши начало рассказа на 250–400 слов: покажи мир через быт и доведи историю до момента, когда герой впервые видит цену.`,
          en: `Draw a card from each deck (you may swap one for your idea from the warm-up). Write the opening of a story, 250–400 words: show the world through daily life, and take it up to the moment the hero first sees the price.`
        },
        config: {
          decks: [
            {
              label: { ru: `Привычный предмет`, en: `Everyday object` },
              items: [
                { ru: `проездная карта`, en: `a bus pass` },
                { ru: `школьный звонок`, en: `the school bell` },
                { ru: `зарядка для телефона`, en: `a phone charger` },
                { ru: `весы на базаре`, en: `the scales at the market` },
                { ru: `термос`, en: `a flask` },
                { ru: `домофон`, en: `the entryphone` },
                { ru: `зеркало в лифте`, en: `the mirror in the lift` },
                { ru: `электронный дневник`, en: `the school gradebook app` },
                { ru: `пакет с пакетами`, en: `the bag full of plastic bags` },
                { ru: `кнопка на светофоре`, en: `the button at a pedestrian crossing` }
              ]
            },
            {
              label: { ru: `Новое правило мира`, en: `A new rule of the world` },
              items: [
                { ru: `работает, только если сказать правду`, en: `it only works if you tell the truth` },
                { ru: `запоминает всё, что при нём сказали`, en: `it remembers everything said near it` },
                { ru: `его можно передать только незнакомцу`, en: `it can only be passed on to a stranger` },
                { ru: `с понедельника выдаётся по талонам`, en: `from Monday it’s rationed` },
                { ru: `раз в день исполняет самое частое желание района`, en: `once a day it grants the neighbourhood’s most common wish` },
                { ru: `рядом с ним время идёт вдвое медленнее`, en: `time runs at half speed around it` },
                { ru: `перестаёт работать, если пользоваться им в одиночку`, en: `it stops working if you use it alone` },
                { ru: `получил право голоса на выборах`, en: `it has been given the vote` }
              ]
            },
            {
              label: { ru: `Кто замечает первым`, en: `Who notices first` },
              items: [
                { ru: `кондуктор последнего рейса`, en: `the conductor on the last bus of the night` },
                { ru: `девятиклассница, которая всегда опаздывает`, en: `a Year 10 student who is always late` },
                { ru: `продавщица из магазина у дома`, en: `the woman at the corner-shop till` },
                { ru: `мастер в будке по ремонту обуви`, en: `the man in the shoe-repair kiosk` },
                { ru: `курьер на самокате`, en: `a delivery rider on a scooter` },
                { ru: `первоклассник в первую неделю школы`, en: `a six-year-old in their first week at school` },
                { ru: `дворник, который выходит в шесть утра`, en: `the caretaker who starts at six in the morning` },
                { ru: `самый младший сотрудник министерства`, en: `the most junior clerk at the ministry` }
              ]
            },
            {
              label: { ru: `Цена`, en: `The price` },
              items: [
                { ru: `кто-то теряет работу`, en: `someone loses their job` },
                { ru: `из языка исчезает одно слово`, en: `one word disappears from the language` },
                { ru: `люди перестают звонить бабушкам`, en: `people stop ringing their grandparents` },
                { ru: `город становится тише — слишком тихим`, en: `the city gets quieter — too quiet` },
                { ru: `платят те, у кого его нет`, en: `the people who don’t have one are the ones who pay` },
                { ru: `каждое использование стоит одного воспоминания`, en: `each use costs one memory` },
                { ru: `исчезают очереди — а с ними разговоры в очередях`, en: `queues vanish — and so do the conversations in them` },
                { ru: `секреты становятся невозможны`, en: `secrets become impossible` }
              ]
            }
          ],
          then: {
            ru: `Допиши один абзац: что герой делает, когда понимает цену? Не решай за него окончательно — оставь ему выбор.`,
            en: `Add one paragraph: what does the hero do once they understand the price? Don’t settle it for good — leave them a choice.`
          }
        }
      },
      alt: {
        ru: `Ничего личного здесь не требуется. Если рассказ не идёт, напиши документ из этого мира: инструкцию к предмету, объявление в подъезде, жалобу в службу поддержки или короткую новостную заметку. Сюжет проступит между строк.`,
        en: `Nothing personal is required. If the story won’t come, write a document from this world instead: the object’s instruction leaflet, a notice in the stairwell, a complaint to customer support or a short news item. The plot will show between the lines.`
      },
      avoid: {
        ru: `Не начинай с лекции об устройстве мира и с «В 2150 году…». Не делай героя гением, который всё объясняет. Не заканчивай сном или взрывом, который всё отменяет. И не набирай чудес: одно правило, доведённое до конца, интереснее десяти придуманных технологий.`,
        en: `Don’t open with a lecture on how the world works, or with “In the year 2150…”. Don’t make the hero a genius who explains everything. Don’t end with a dream or an explosion that cancels it all. And don’t stack up wonders: one rule followed to its end is more interesting than ten invented gadgets.`
      },
      reading: [
        { title: 'The Girl Who Leapt Through Time', author: 'Yasutaka Tsutsui', age: '13+' },
        { title: 'Понедельник начинается в субботу / Monday Begins on Saturday', author: 'Аркадий и Борис Стругацкие / Arkady and Boris Strugatsky', age: '13+' },
        { title: 'Марсианские хроники / The Martian Chronicles', author: 'Рэй Брэдбери / Ray Bradbury', age: '13+' },
        { title: 'Before the Coffee Gets Cold', author: 'Toshikazu Kawaguchi', age: '15+' }
      ],
      teacher: {
        note: {
          ru: `Генератор даёт случайные сочетания, и некоторые не складываются — это нормально: разрешите заменить одну карточку. Полезно дать группе один и тот же предмет и разные правила: видно, как одно изменение рождает разные сюжеты. В анонсе ВШЭ упоминаются методы генерации сюжетов, которые используют в университетах Киото, Сеула и Лунда, но сами упражнения там не описаны; колоды и цепочка «и что тогда?» — наша разработка в том же духе. Альтернатива — «документ изнутри мира» — распространённый приём писательских мастерских (его, например, предлагает подкаст Writing Excuses). Рекомендуя фантастику, проверяйте возраст: многие известные авторы жанра пишут для взрослых.`,
          en: `The generator produces random combinations and some won’t gel — that’s fine: let students swap one card. It helps to give the group the same object with different rules, so they see how one change produces different plots. The HSE announcement mentions plot-generation methods used at universities in Kyoto, Seoul and Lund, but doesn’t describe the exercises; the decks and the “and then what?” chain are our own design in that spirit. The alternative — a document from inside the world — is a common writing-workshop prompt (the Writing Excuses podcast uses it, for example). When recommending SF, check the age level: many well-known writers in the genre write for adults.`
        },
        source: ['hse-spb', 'wx', 'original']
      }
    },

    {
      id: 'empathy',
      title: { ru: `Сдержанный рассказ об эмпатии`, en: `Empathy, told with restraint` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `Фраза «мне стало её очень жалко» почти никогда не трогает читателя. Трогает другое: как человек держит пакет, что отвечает на «всё нормально?», какая мелочь не вписывается в картину. Эмпатия в тексте — не заявление о чувствах, а внимание к другому.`,
        en: `“I felt really sorry for her” almost never moves a reader. What does: how someone holds a carrier bag, what they say when asked “You all right?”, the small thing that doesn’t fit the picture. On the page, empathy isn’t a statement of feeling; it’s attention paid to someone else.`
      },
      angle: {
        ru: `Эмпатия — рабочий навык и писателя, и журналиста: увидеть ситуацию изнутри другого человека, не присваивая его историю и не выжимая из читателя слёзы. Фокус — сдержанность: прямая речь, деталь, короткая документальная вставка, контраст и один тихий троп вместо десятка громких.`,
        en: `Empathy is a working skill for writers and journalists alike: seeing a situation from inside someone else’s life without taking over their story or wringing tears from the reader. The focus is restraint: direct speech, a detail, a short documentary insert, a contrast, and one quiet figure of speech instead of a dozen loud ones.`
      },
      techniques: [
        {
          ru: `**Прямая речь.** Дай человеку сказать своими словами — коротко, без твоего пересказа. Часто сильнее всего то, чего он *не* говорит.`,
          en: `**Direct speech.** Let the person speak in their own words — briefly, without your paraphrase. Often the strongest thing is what they *don’t* say.`
        },
        {
          ru: `**Деталь вместо оценки.** Не «ей было тяжело», а сумка, которую она перекладывает из руки в руку на каждой ступеньке.`,
          en: `**Detail instead of verdict.** Not “it was hard for her” but the bag she shifts from hand to hand on every step.`
        },
        {
          ru: `**Документальная вставка.** Одна проверенная строка контекста — расписание, правило, цифра с источником — показывает реальность за частной историей.`,
          en: `**A documentary insert.** One checked line of context — a timetable, a rule, a figure with a source — shows the reality behind a private story.`
        },
        {
          ru: `**Контраст.** Поставь рядом то, что не совпадает: «Хорошего дня!» на табло и очередь, которая стоит с шести утра.`,
          en: `**Contrast.** Put side by side things that don’t match: “Have a nice day!” on the display board and a queue that has been standing there since six.`
        },
        {
          ru: `**Сдержанный троп.** Одно сравнение — тихое, из мира самого героя, а не из учебника. Хочется написать «сердце разрывалось» — остановись.`,
          en: `**A restrained figure of speech.** One comparison — quiet, taken from the person’s own world, not from a textbook. If you feel the urge to write “my heart broke”, stop.`
        }
      ],
      warmup: {
        type: 'compare',
        prompt: {
          ru: `Сравни две версии одного момента. Какая заставляет сочувствовать — и за счёт чего?`,
          en: `Compare two versions of the same moment. Which one makes you feel for the man — and how?`
        },
        config: {
          a: {
            ru: `В автобусе стоял пожилой мужчина с тяжёлой сумкой. Мне стало его ужасно жалко, у меня прямо сердце сжалось. Никто не уступил ему место, все были такими равнодушными! Я подумала, как же тяжело живётся пожилым людям.`,
            en: `There was an elderly man standing on the bus with a heavy bag. I felt terribly sorry for him — my heart actually ached. Nobody gave up their seat; everyone was so indifferent! It made me think how hard life is for old people.`
          },
          b: {
            ru: `На повороте у Сайрана мужчина в выглаженном пиджаке перехватил сумку другой рукой и упёрся коленом в сиденье. Парень у окна вынул один наушник. «Сиди, сиди, — сказал мужчина. — Мне через две остановки». Он простоял ещё пять.`,
            en: `On the bend by Sairan, a man in a carefully ironed jacket shifted his bag to the other hand and braced his knee against a seat. The boy by the window took out one earbud. “Stay put, stay put,” the man said. “I’m off in two stops.” He stood for five more.`
          },
          questions: [
            { ru: `В какой версии больше сказано о чувствах автора, а в какой — о самом человеке?`, en: `Which version tells you more about the writer’s feelings, and which about the man himself?` },
            { ru: `Что делает последняя фраза версии Б? Почему в ней нет оценки?`, en: `What does the last sentence of version B do? Why is there no verdict in it?` },
            { ru: `Кого осуждает версия А — и справедливо ли это, если сравнить с версией Б?`, en: `Who does version A condemn — and is that fair, compared with version B?` }
          ]
        }
      },
      main: {
        type: 'fields',
        prompt: {
          ru: `Выбери человека в ситуации, которую ты действительно видел со стороны (очередь, остановка, двор, соревнование), или придумай героя. Собери материал по полям.`,
          en: `Choose a person in a situation you actually watched from the outside (a queue, a bus stop, a courtyard, a competition), or invent one. Gather your material field by field.`
        },
        config: {
          fields: [
            { id: 'who', label: { ru: `Кто и где`, en: `Who and where` }, hint: { ru: `Без имени и примет, по которым человека можно узнать.`, en: `No name and no features that would identify them.` } },
            { id: 'speech', label: { ru: `Одна реплика`, en: `One line of speech` }, hint: { ru: `Дословно, если слышал сам. Реальному человеку чужих слов не приписывай: сочинять реплики можно только выдуманному герою.`, en: `Word for word, if you heard it yourself. Never put words in a real person’s mouth — invented lines belong to invented characters only.` } },
            { id: 'detail', label: { ru: `Деталь, в которой видно положение человека`, en: `A detail that shows the person’s situation` }, hint: { ru: `Что он делает руками, что держит, что поправляет.`, en: `What their hands are doing, what they hold, what they keep adjusting.` } },
            { id: 'insert', label: { ru: `Документальная вставка`, en: `Documentary insert` }, hint: { ru: `Один проверяемый факт контекста и где ты его нашёл. Нет проверенного факта — оставь поле пустым.`, en: `One checkable fact of context, and where you found it. No checked fact? Leave the field empty.` } },
            { id: 'contrast', label: { ru: `Контраст`, en: `Contrast` }, hint: { ru: `Что рядом не совпадает с положением человека?`, en: `What nearby doesn’t match the person’s situation?` } },
            { id: 'trope', label: { ru: `Один тихий троп`, en: `One quiet figure of speech` }, hint: { ru: `Сравнение из мира этого человека, а не из учебника.`, en: `A comparison from this person’s world, not from a textbook.` } }
          ],
          then: {
            ru: `Собери текст на 150–250 слов. Не называй своих чувств и не делай вывода за читателя: пусть последней будет реплика или действие.`,
            en: `Put together a 150–250-word piece. Don’t name your own feelings or draw the conclusion for the reader: end on a line of speech or an action.`
          }
        }
      },
      alt: {
        ru: `Если не хочется писать о реальных людях, придумай героя и ситуацию целиком — или напиши о животном, о доме, который сносят, о городе. Приёмы работают так же. О собственной боли писать не обязательно: эмпатия — это взгляд на другого.`,
        en: `If you’d rather not write about real people, invent the character and the situation from scratch — or write about an animal, a building due for demolition, a city. The techniques work the same way. You don’t have to write about your own pain: empathy is about looking at someone else.`
      },
      avoid: {
        ru: `Главные ловушки: называть чувства («сердце сжалось»), выжимать слёзы (дождь, одинокая слеза, брошенный щенок), делать человека жертвой без характера и превращать чужую беду в рассказ о своей доброте. Не пиши о реальном человеке так, чтобы его можно было узнать, и не приписывай ему слов, которых он не говорил.`,
        en: `The main traps: naming feelings (“my heart ached”), squeezing out tears (rain, a single tear, an abandoned puppy), turning someone into a victim with no character, and making someone else’s trouble into a story about your own kindness. Don’t write about a real person in a way that identifies them, and never put words in their mouth.`
      },
      reading: [
        { title: 'Тоска / Misery', author: 'Антон Чехов / Anton Chekhov', age: '13+' },
        { title: 'Чудо / Wonder', author: 'Р. Дж. Паласио / R. J. Palacio', age: '13+' },
        { title: 'Загадочное ночное убийство собаки / The Curious Incident of the Dog in the Night-Time', author: 'Марк Хэддон / Mark Haddon', age: '15+' },
        { title: 'У войны не женское лицо / The Unwomanly Face of War', author: 'Светлана Алексиевич / Svetlana Alexievich', age: '16+' }
      ],
      teacher: {
        note: {
          ru: `Разминку удобно разбирать вслух: пусть группа найдёт, где в версии Б «спрятано» сочувствие и почему парень у окна не злодей. Следите за этикой наблюдения: реальный человек не должен быть узнаваем, реплики — только услышанные. Если ученик пишет о собственной тяжёлой ситуации, не разбирайте текст публично без его согласия. В анонсе мастер-класса ВШЭ эмпатия показывается через прямую речь, детальное описание, репортажные вставки, контрасты и тропы — здесь эти пять приёмов разведены по полям. Книга Алексиевич — тяжёлое чтение; предлагайте её старшим и выборочно.`,
          en: `The warm-up works well discussed aloud: let the group find where sympathy is “hidden” in version B, and why the boy by the window isn’t a villain. Watch the ethics of observation: a real person must not be identifiable, and only lines actually heard may be quoted. If a student writes about their own difficult situation, don’t discuss the text publicly without their consent. The HSE masterclass announcement names direct speech, detailed description, reportage inserts, contrast and tropes as ways to show empathy — here those five are laid out as fields. Alexievich is heavy reading; offer it to older students and in extracts.`
        },
        source: ['hse-spb', '826-wyw', 'original']
      }
    },

    {
      id: 'fatigue',
      title: { ru: `Усталость и выгорание без клише`, en: `Exhaustion and burnout, without clichés` },
      age: '15+',
      minutes: 20,
      hook: {
        ru: `«Я очень устал» — и читатель соглашается, но ничего не чувствует. На странице усталость видна иначе: во фразе, которая никак не может закончиться, в чае, остывшем нетронутым, в третьем будильнике, в ошибке, которую человек в обычный день не сделал бы.`,
        en: `“I was so tired” — the reader nods and feels nothing. On the page, exhaustion shows up differently: in a sentence that can’t find its way to a full stop, a cup of tea gone cold untouched, a third alarm, a slip the person would never make on an ordinary day.`
      },
      angle: {
        ru: `Усталость и выгорание — частые темы современной прозы и журналистики, и о них особенно легко писать штампами. Фокус мастерской — показать состояние через ритм, предметы, время и мелкие сбои. И не романтизировать: изнеможение — не признак таланта и не повод для гордости.`,
        en: `Fatigue and burnout turn up often in contemporary fiction and journalism, and they’re especially easy to write in clichés. This workshop shows the state through rhythm, objects, time and small failures — without glamorising it: exhaustion is neither a sign of talent nor something to be proud of.`
      },
      techniques: [
        {
          ru: `**Ритм.** Длинные фразы, которые цепляются друг за друга через «и», или обрывки без глаголов. Ритм устаёт вместе с героем.`,
          en: `**Rhythm.** Long sentences strung together with “and”, or fragments with no verbs. The rhythm tires along with the character.`
        },
        {
          ru: `**Предметы.** Вещи копят улики: немытая кружка, вкладка с домашним заданием, открытая с понедельника, зарядка, которую больше не вынимают из сумки.`,
          en: `**Objects.** Things collect evidence: the unwashed mug, the homework tab open since Monday, the charger that no longer leaves the bag.`
        },
        {
          ru: `**Время.** Покажи, как оно ломается: часы то бегут, то стоят; «через минуту» оказывается сорока минутами.`,
          en: `**Time.** Show it breaking down: the clock races, then stalls; “in a minute” turns out to be forty.`
        },
        {
          ru: `**Мелкие сбои.** Человек трижды перечитывает сообщение и отвечает на него только в голове; пишет «ок» вместо трёх абзацев, которые собирался. Один точный сбой убедительнее пяти.`,
          en: `**Small failures.** Someone reads a message three times and answers it only in their head; types “ok” instead of the three paragraphs they meant to write. One precise slip is more convincing than five.`
        }
      ],
      warmup: {
        type: 'annotate',
        prompt: {
          ru: `Разметь короткий текст: где усталость названа или пересказана штампом, а где она показана так, что её видно?`,
          en: `Mark up this short text: where is exhaustion named or wrapped in a cliché, and where is it actually shown?`
        },
        config: {
          text: {
            ru: `Я была выжата как лимон. Уже третью неделю я жила на автопилоте. Утром налила в кружку кипяток и забыла положить пакетик — выпила горячую воду и заметила это только в автобусе. На уроках у меня не было сил ни на что. Сообщение от Мадины висело непрочитанным с воскресенья: я видела его каждый раз, когда брала телефон, и каждый раз клала телефон экраном вниз. Мир стал серым и пустым. Вечером я открыла учебник на той же странице, что и вчера, и поняла это только по загнутому уголку.`,
            en: `I was completely drained. For three weeks I’d been running on autopilot. In the morning I poured boiling water into a mug and forgot the teabag — drank the hot water and only noticed on the bus. In lessons I had no energy for anything. Madina’s message had sat unread since Sunday: I saw it every time I picked up my phone, and every time I put the phone face down. The world had turned grey and empty. That evening I opened my textbook at the same page as the day before, and only realised because of the folded corner.`
          },
          tags: [
            { id: 'cliche', label: { ru: `Штамп или просто названо`, en: `Cliché, or simply named` } },
            { id: 'detail', label: { ru: `Показано предметом или сбоем`, en: `Shown through an object or a slip` } },
            { id: 'time', label: { ru: `Сломанное время`, en: `Time out of joint` } }
          ],
          questions: [
            { ru: `Что останется, если убрать все штампы? Хватит ли этого, чтобы понять состояние героини?`, en: `What’s left if you delete every cliché? Is it enough to understand the state she’s in?` },
            { ru: `Какая деталь показывает, что дни слились в один?`, en: `Which detail shows that the days have blurred into one?` }
          ]
        }
      },
      main: {
        type: 'constraint',
        prompt: {
          ru: `Напиши 150–250 слов об одном вечере человека, который очень устал. Герой может быть выдуманным. Не называй состояние: пусть работают ритм, предметы, время и один сбой. В финале — ни спасения, ни катастрофы: просто следующее действие.`,
          en: `Write 150–250 words about one evening in the life of someone who is worn out. They can be invented. Don’t name the state: let rhythm, objects, time and a single slip do the work. No rescue and no disaster at the end — just the next action.`
        },
        config: {
          rules: [
            { kind: 'ban-words', words: {
              ru: ['устал', 'устала', 'устали', 'усталый', 'усталая', 'усталость', 'усталости', 'выгорание', 'выгорел', 'выгорела', 'автопилот', 'автопилоте', 'выжат', 'выжата'],
              en: ['tired', 'tiredness', 'exhausted', 'exhaustion', 'burnout', 'burnt', 'burned', 'drained', 'autopilot']
            } },
            { kind: 'sentence-lengths' },
            { kind: 'min-words', n: 150 },
            { kind: 'max-words', n: 250 }
          ]
        }
      },
      alt: {
        ru: `Писать о себе не нужно. Возьми выдуманного героя любого возраста: водителя ночного автобуса, студентку в сессию, повара в последний час смены. Если тема сейчас для тебя слишком близкая и тяжёлая, выбери другую мастерскую — и поговори с человеком, которому доверяешь: со взрослым из семьи, учителем, школьным психологом.`,
        en: `You don’t need to write about yourself. Take an invented character of any age: a night-bus driver, a student in exam season, a cook in the last hour of a shift. If the subject feels too close and heavy right now, pick a different workshop — and talk to someone you trust: an adult at home, a teacher, the school counsellor.`
      },
      avoid: {
        ru: `Штампы: «выжат как лимон», «на автопилоте», «батарейка на нуле», «мир стал серым». Романтизация: усталость как доказательство, что ты стараешься больше других, бессонница как признак таланта. Мелодрама: обморок в финале или внезапное прозрение. Текст об усталости — не медицинская карта: здесь наблюдают, а не ставят диагнозы.`,
        en: `Clichés: “completely drained”, “running on autopilot”, “battery at zero”, “the world turned grey”. Glamorising: exhaustion as proof you try harder than everyone else, sleeplessness as a sign of talent. Melodrama: fainting at the end, or a sudden revelation. A piece about exhaustion isn’t a medical record: it observes rather than diagnoses.`
      },
      reading: [
        { title: 'Превращение / The Metamorphosis', author: 'Франц Кафка / Franz Kafka', age: '15+' },
        { title: 'Писец Бартлби / Bartleby, the Scrivener', author: 'Герман Мелвилл / Herman Melville', age: '15+' }
      ],
      teacher: {
        note: {
          ru: `Тема может оказаться близкой: не просите читать тексты вслух и обсуждайте только текст, а не состояние автора. Если в работе звучат признаки серьёзного неблагополучия (бессонница неделями, ощущение, что «всё бессмысленно»), поговорите с учеником лично и действуйте по школьному порядку помощи. Мастерская рассчитана скорее на 15+. Вдохновлено анонсом мастер-класса ВШЭ об усталости и выгорании: подходы, стилистические приёмы, ловушки и клише. В «Превращении» стоит обратить внимание на первые страницы: Грегор думает о работе и поезде раньше, чем о собственном теле.`,
          en: `The subject may hit close to home: don’t ask for texts to be read aloud, and discuss the writing, not the writer’s state. If a piece shows signs of serious distress (weeks of sleeplessness, a sense that “nothing matters”), talk to the student privately and follow your school’s support procedure. The workshop is better suited to 15+. Inspired by the HSE masterclass announcement on fatigue and burnout: approaches, stylistic techniques, traps and clichés. In The Metamorphosis, point students to the opening pages: Gregor worries about his job and his train before his own body.`
        },
        source: ['hse-spb', 'original']
      }
    },

    {
      id: 'music',
      title: { ru: `Музыкальные приёмы в тексте`, en: `Musical techniques in writing` },
      age: '13+',
      minutes: 20,
      hook: {
        ru: `Текст звучит, даже когда его читают про себя. Повтор возвращается, как припев; короткие фразы ускоряют темп; пауза перед главным словом работает, как тишина перед последним аккордом. Музыкальное образование не нужно — достаточно слуха, которым ты уже пользуешься, когда напеваешь любимую песню.`,
        en: `A text has a sound even when it’s read silently. A repeated line comes back like a chorus; short sentences pick up the tempo; a pause before the key word works like the silence before the final chord. No musical training needed — just the ear you already use when you hum a favourite song.`
      },
      angle: {
        ru: `Музыкальные приёмы работают в прозе, в рецензии и в журналистике: они управляют вниманием читателя, не добавляя ни одного факта. Фокус — на пяти приёмах, которые можно услышать, если прочитать текст вслух.`,
        en: `Musical techniques work in fiction, reviews and journalism: they steer the reader’s attention without adding a single fact. The focus is on five techniques you can hear when you read a text aloud.`
      },
      techniques: [
        {
          ru: `**Рефрен.** Фраза, которая возвращается и каждый раз значит чуть больше. Трёх раз обычно достаточно.`,
          en: `**Refrain.** A phrase that comes back and means a little more each time. Three times is usually plenty.`
        },
        {
          ru: `**Темп.** Короткие фразы ускоряют, длинные, с перечислениями, замедляют. Меняй темп там, где меняется событие.`,
          en: `**Tempo.** Short sentences speed things up; long ones full of lists slow them down. Change the tempo where the event changes.`
        },
        {
          ru: `**Крещендо.** Нарастание: каждое следующее предложение чуть громче, крупнее или ближе предыдущего — до пика.`,
          en: `**Crescendo.** A build: each sentence a little louder, bigger or closer than the one before — up to the peak.`
        },
        {
          ru: `**Пауза.** Абзац из одной строки, тире, точка там, где фраза должна была продолжиться. Тишина перед важным делает его слышнее.`,
          en: `**Pause.** A one-line paragraph, a dash, a full stop where the sentence was expected to carry on. Silence before something important makes it louder.`
        },
        {
          ru: `**Контрапункт.** Две линии звучат одновременно: разговор и то, что происходит за окном; бодрый голос и медленные движения.`,
          en: `**Counterpoint.** Two lines running at once: a conversation and what’s happening outside the window; a cheerful voice and slow movements.`
        }
      ],
      warmup: {
        type: 'reorder',
        prompt: {
          ru: `Перед тобой фразы одного фрагмента. Расставь их так, чтобы звук и напряжение нарастали, а перед развязкой была пауза.`,
          en: `Here are the sentences of one passage. Arrange them so the sound and tension build, with a pause just before the release.`
        },
        config: {
          blocks: [
            { ru: `В 13:28 в классе слышно только, как ручка царапает бумагу.`, en: `At 1.28 the only sound in the classroom is a pen scratching paper.` },
            { ru: `Кто-то застёгивает пенал — осторожно, по одному зубчику.`, en: `Someone is zipping up a pencil case — carefully, one tooth at a time.` },
            { ru: `Потом щёлкает второй пенал, третий, скрипит стул, в коридоре уже топочет чужой класс.`, en: `Then a second pencil case clicks shut, and a third; a chair creaks; out in the corridor another class is already stampeding.` },
            { ru: `Учительница диктует домашнее задание всё громче, но гул, смех и грохот стульев за стеной всё равно громче неё.`, en: `The teacher reads out the homework louder and louder, but the hum, the laughter and the scrape of chairs through the wall are louder still.` },
            { ru: `На секунду все замолкают и смотрят на часы.`, en: `For one second everyone goes quiet and looks at the clock.` },
            { ru: `Звонок.`, en: `The bell.` }
          ],
          then: {
            ru: `Где в твоём порядке пауза? Переставь её на одну фразу раньше и прочитай вслух: что изменилось?`,
            en: `Where is the pause in your order? Move it one sentence earlier and read it aloud: what changes?`
          }
        }
      },
      main: {
        type: 'columns',
        prompt: {
          ru: `Возьми один короткий момент — свой или предложенный — и запиши его в трёх музыкальных режимах.`,
          en: `Take one brief moment — your own or the one below — and write it in three musical modes.`
        },
        config: {
          shared: {
            ru: `Последние десять секунд перед тем, как на табло появится твой результат: соревнование, олимпиада, экзамен.`,
            en: `The last ten seconds before your result appears on the board — a competition, an olympiad, an exam.`
          },
          columns: [
            { label: { ru: `Темп: только короткие фразы`, en: `Tempo: short sentences only` } },
            { label: { ru: `Крещендо и пауза`, en: `Crescendo and pause` } },
            { label: { ru: `Контрапункт: две линии сразу`, en: `Counterpoint: two lines at once` } }
          ],
          then: {
            ru: `Собери финальную версию на 120–200 слов и добавь рефрен: одну фразу, которая прозвучит трижды и в последний раз будет значить другое. Прочитай вслух.`,
            en: `Put together a final version of 120–200 words and add a refrain: one phrase heard three times that means something different the last time. Read it aloud.`
          }
        }
      },
      alt: {
        ru: `Момент не обязан быть твоим: возьми сцену из фильма, матч, который ты смотрел, или выдуманного героя. Приёмы одинаково работают в рассказе, в репортаже с концерта и в рецензии на альбом.`,
        en: `The moment doesn’t have to be yours: take a scene from a film, a match you watched, or an invented character. The techniques work just as well in a story, a concert report or an album review.`
      },
      avoid: {
        ru: `Не повторяй слова только ради звука: рефрен, который ничего не меняет, раздражает. Не превращай прозу в стихи с рифмами. Не пиши весь текст рублеными фразами — темп заметен только на фоне другого темпа. И не вставляй музыкальные термины в сам текст: читатель должен услышать приём, а не прочитать его название.`,
        en: `Don’t repeat words just for the sound: a refrain that changes nothing grates. Don’t turn prose into rhyming verse. Don’t write the whole thing in clipped sentences — a tempo only registers against a different tempo. And keep musical terms out of the text itself: the reader should hear the technique, not read its name.`
      },
      reading: [
        { title: 'Корзина с еловыми шишками / The Basket of Fir Cones', author: 'Константин Паустовский / Konstantin Paustovsky', age: '13+' },
        { title: 'Вино из одуванчиков / Dandelion Wine', author: 'Рэй Брэдбери / Ray Bradbury', age: '13+' },
        { title: 'Ноктюрны / Nocturnes', author: 'Кадзуо Исигуро / Kazuo Ishiguro', age: '16+' }
      ],
      teacher: {
        note: {
          ru: `Всё в этой мастерской проверяется вслух: пусть ученики читают колонки в парах, а слушатели отмечают, где меняется темп. Разминку можно сделать без экрана — раздать фразы на полосках бумаги. Хорошее продолжение — рецензия на песню или альбом, где ритм фраз повторяет ритм музыки, или репортаж с концерта с рефреном. Анонс мастер-класса ВШЭ подчёркивает, что музыкальные приёмы работают в прозе, рецензиях и журналистике и не требуют музыкального образования.`,
          en: `Everything in this workshop is tested aloud: have students read their columns in pairs while listeners mark where the tempo shifts. The warm-up works without screens too — hand out the sentences on paper strips. A good follow-up is a review of a song or album whose sentence rhythm echoes the music, or a concert report built around a refrain. The HSE masterclass announcement stresses that musical techniques work in fiction, reviews and journalism and need no musical training.`
        },
        source: ['hse-spb', 'original']
      }
    }
  ]);
})();
