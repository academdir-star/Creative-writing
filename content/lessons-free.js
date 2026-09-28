/* Route: free — Пишу свободно / Writing freely. Four quick-start lessons that build a notebook of 20+ starts. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'free-1',
      route: 'free',
      n: 1,
      minutes: 8,
      skills: ['ideas'],
      genres: ['free', 'story'],
      title: { ru: `Один предмет — пять неожиданных применений`, en: `One object, five unexpected uses` },
      learn: {
        ru: `Находить идею для истории в обычном предмете: придумывать ему необычные применения и выбирать то, за которым прячется сюжет.`,
        en: `Find a story idea in an ordinary object by inventing unusual uses for it and picking the one that hides a plot.`
      },
      hook: {
        ru: `Прищепка. Проездной. Одна варежка без пары. Вещи, которые каждый день попадаются тебе под руку, умеют больше, чем кажется, — стоит только спросить, кому ещё и зачем они могут понадобиться. Первые два ответа будут очевидными. Интересное начинается с третьего.`,
        en: `A clothes peg. A bus pass. One mitten without its twin. The things that pass through your hands every day can do more than you think — you just have to ask who else might need them, and why. The first two answers will be obvious. The interesting ones start at number three.`
      },
      technique: {
        name: { ru: `Кому ещё это нужно?`, en: `Who else needs this?` },
        text: {
          ru: `Выбери обычный предмет и придумай ему пять применений — каждое для другого человека в другой ситуации. Не «зонт — от дождя», а «зонтом Тимур достаёт мяч из арыка».

Первые идеи почти всегда очевидные: так мозг расчищает место. Не вычёркивай их, иди дальше. Помогает смотреть не на назначение предмета, а на его свойства: зонт длинный, с острым концом, раскрывается с хлопком.

Хорошее применение вызывает вопрос. Кто этот человек? Почему у него под рукой нет ничего лучше? Где вопрос, там и история.`,
          en: `Pick an ordinary object and invent five uses for it — each for a different person in a different situation. Not “an umbrella keeps off the rain”, but “Timur uses an umbrella to hook the football out of the roadside ditch”.

The first ideas are almost always obvious: that’s your brain clearing space. Don’t cross them out; keep going. It helps to look at the object’s properties rather than its purpose: an umbrella is long, pointed, and opens with a snap.

A good use raises questions. Who is this person? Why haven’t they got anything better to hand? Where there’s a question, there’s a story.`
        }
      },
      example: {
        before: {
          ru: `Ключ:
- открыть дверь;
- закрыть дверь;
- открыть почтовый ящик;
- открыть шкафчик в спортзале;
- повесить на крючок в прихожей.`,
          en: `Key:
- open the front door;
- lock the front door;
- open the postbox;
- open my locker at the gym;
- hang it on the hook in the hall.`
        },
        after: {
          ru: `Ключ:
- дедушка Серик размешивает им сахар в термосе на рыбалке — ложку опять забыли дома;
- кондитер Жанна вдавливает бородку ключа в глазурь: узор, который никто не повторит;
- восьмиклассник носит на шнурке ключ от квартиры, в которой уже год никто не живёт;
- проводница ночного поезда открывает им окно, которое по инструкции не открывается;
- фокусник в парке достаёт его из-за уха у мальчика — и мальчик узнаёт свой ключ.`,
          en: `Key:
- Grandad Serik stirs sugar into his thermos with it when he goes fishing — someone forgot the spoon again;
- Zhanna, a pastry chef, presses its teeth into the icing: a pattern nobody else can copy;
- a Year 9 boy wears on a string the key to a flat where nobody has lived for a year;
- the attendant on the night train uses it to open a window that, according to the rules, doesn’t open;
- a magician in the park pulls it from behind a boy’s ear — and the boy recognises it as his own.`
        },
        changes: [
          {
            ru: `В первом списке у ключа один хозяин — «я» — и одна работа: открывать и закрывать. Во втором у каждого применения свой человек и своё место.`,
            en: `In the first list the key has one owner — me — and one job: opening and locking. In the second, every use has its own person and its own place.`
          },
          {
            ru: `Каждая строчка второго списка вызывает вопрос: чья это пустая квартира? Зачем ночью открывать окно? Где вопрос — там начало сюжета.`,
            en: `Every line of the second list raises a question: whose empty flat is it? Why open a window at night? Where there’s a question, a plot can start.`
          },
          {
            ru: `Лучшие применения опираются на свойства предмета, а не на его назначение: металл, зубчики, размер и то, что ключ всегда чей-то.`,
            en: `The best uses rely on the object’s properties rather than its purpose: the metal, the teeth, the size, and the fact that a key always belongs to someone.`
          }
        ]
      },
      exercise: {
        type: 'list',
        prompt: {
          ru: `Выбери предмет: зонт, ключ, варежка, чайная ложка, проездной — или любой, что лежит рядом. Придумай ему пять неожиданных применений, каждое для другого человека в другой ситуации.`,
          en: `Choose an object: an umbrella, a key, a mitten, a teaspoon, a bus pass — or anything within reach. Invent five unexpected uses for it, each for a different person in a different situation.`
        },
        config: {
          count: 5,
          labels: [
            { ru: `Для маленького ребёнка`, en: `For a small child` },
            { ru: `Для человека на работе`, en: `For someone at work` },
            { ru: `Для очень пожилого человека`, en: `For someone very old` },
            { ru: `Когда всё пошло не так`, en: `When everything has gone wrong` },
            { ru: `Для того, кто что-то скрывает`, en: `For someone who is hiding something` }
          ],
          placeholder: { ru: `Кто, где и зачем…`, en: `Who, where and why…` },
          then: {
            ru: `Выбери самое странное применение — то, после которого больше всего вопросов. Напиши первые пять предложений истории, в которой этот предмет по-настоящему важен.`,
            en: `Pick the strangest use — the one that raises the most questions. Write the first five sentences of a story in which this object really matters.`
          }
        }
      },
      harder: {
        type: 'generator',
        prompt: {
          ru: `Вытяни по карточке из каждой колоды и напиши 5–8 предложений, в которых предмет выручает героя — или подводит. Не нравится расклад — тяни заново, но не больше двух раз.`,
          en: `Draw one card from each deck and write 5–8 sentences in which the object saves the character — or lets them down. Don’t like your hand? Redraw, but no more than twice.`
        },
        config: {
          decks: [
            {
              label: { ru: `Предмет`, en: `Object` },
              items: [
                { ru: `прищепка`, en: `a clothes peg` },
                { ru: `проездной`, en: `a bus pass` },
                { ru: `одна варежка`, en: `a single mitten` },
                { ru: `чайная ложка`, en: `a teaspoon` },
                { ru: `зонт-трость`, en: `a long umbrella` },
                { ru: `связка чужих ключей`, en: `someone else’s bunch of keys` },
                { ru: `пустая банка из-под варенья`, en: `an empty jam jar` },
                { ru: `старый кнопочный телефон`, en: `an old push-button phone` },
                { ru: `рулетка`, en: `a tape measure` },
                { ru: `свисток`, en: `a whistle` }
              ]
            },
            {
              label: { ru: `Кому он нужен`, en: `Who needs it` },
              items: [
                { ru: `смотрительница музея`, en: `a museum attendant` },
                { ru: `курьер на самокате`, en: `a delivery rider on a scooter` },
                { ru: `новенький в классе`, en: `the new kid in class` },
                { ru: `таксист в ночную смену`, en: `a taxi driver on the night shift` },
                { ru: `девятилетняя шахматистка`, en: `a nine-year-old chess player` },
                { ru: `пчеловод`, en: `a beekeeper` },
                { ru: `продавщица с Зелёного базара`, en: `a stallholder at the Green Bazaar` },
                { ru: `астроном-любитель`, en: `an amateur astronomer` }
              ]
            },
            {
              label: { ru: `Где`, en: `Where` },
              items: [
                { ru: `в последнем поезде метро`, en: `on the last metro train of the night` },
                { ru: `в кабинке канатной дороги на Кок-Тобе`, en: `in a cable car on the way up Kok-Tobe` },
                { ru: `на даче во время апрельского снегопада`, en: `at the dacha during an April snowfall` },
                { ru: `в пустом школьном спортзале`, en: `in an empty school gym` },
                { ru: `на свадьбе, где никто никого не знает`, en: `at a wedding where nobody knows anybody` },
                { ru: `на ночном перроне`, en: `on a station platform at night` },
                { ru: `на крыше многоэтажки`, en: `on the roof of a tower block` },
                { ru: `в очереди в поликлинике`, en: `in the queue at the health centre` }
              ]
            },
            {
              label: { ru: `Что идёт не так`, en: `What goes wrong` },
              items: [
                { ru: `гаснет свет`, en: `the lights go out` },
                { ru: `предмет оказывается чужим`, en: `the object turns out to belong to someone else` },
                { ru: `кто-то всё видел`, en: `someone saw everything` },
                { ru: `остаётся пять минут`, en: `there are five minutes left` },
                { ru: `приходит сообщение с незнакомого номера`, en: `a message arrives from an unknown number` },
                { ru: `нельзя издать ни звука`, en: `nobody can make a sound` },
                { ru: `всё получилось — и это хуже всего`, en: `it works — and that’s the worst thing that could happen` },
                { ru: `появляется настоящий владелец`, en: `the real owner turns up` }
              ]
            }
          ]
        }
      },
      hint: {
        ru: `Начни не с человека, а со свойств предмета: какой он — тяжёлый, звонкий, острый, гибкий? У ложки есть отражение, звон и изгиб. Потом спроси, кому нужно именно это свойство. Начало фразы: «Ей нужна была не ложка, а что-нибудь…»`,
        en: `Start not with a person but with the object’s properties: is it heavy, noisy, sharp, bendy? A spoon has a reflection, a ring and a curve. Then ask who needs exactly that property. Sentence starter: “She didn’t need a spoon, she needed something that…”`
      },
      improve: {
        ru: `Вернись к пяти предложениям истории. Найди место, где предмет просто лежит, и дай ему действие: пусть он звякнет, сломается или окажется не в том кармане.`,
        en: `Go back to your five story sentences. Find the spot where the object simply sits there, and give it something to do: let it clink, snap, or turn up in the wrong pocket.`
      },
      selfCheck: [
        { ru: `У всех пяти применений разные люди и ситуации?`, en: `Do all five uses have different people and situations?` },
        { ru: `Хотя бы два применения удивили меня самого?`, en: `Did at least two of the uses surprise me?` },
        { ru: `В начале истории предмет действительно что-то меняет?`, en: `In my story opening, does the object actually change something?` },
        { ru: `После пяти предложений хочется узнать, что будет дальше?`, en: `After five sentences, would a reader want to know what happens next?` },
        { ru: `Я сохранил неиспользованные применения в тетрадь стартов?`, en: `Did I save the unused uses in my notebook of quick starts?` }
      ],
      discuss: {
        ru: `Чей предмет в группе оказался самым многоликим? Почему у одних вещей историй больше, чем у других?`,
        en: `Whose object turned out to have the most lives in the group? Why do some things carry more stories than others?`
      },
      reflect: {
        ru: `Какое по счёту применение оказалось лучшим — первое или последнее? Что это говорит о том, как у тебя появляются идеи?`,
        en: `Which number was your best use — the first or the last? What does that tell you about how your ideas arrive?`
      },
      transfer: {
        ru: `Предмет — короткий путь к истории в любом жанре. В рассказе он двигает сюжет, в рецензии даёт неожиданный угол, в эссе может стать рамкой, которая открывает и закрывает текст. Разница в правде: в эссе предмет и всё, что с ним связано, должны быть настоящими. Неиспользованные применения — первые пять стартов в твоей тетради.`,
        en: `An object is a short way into a story in any genre. In fiction it drives the plot; in a review it offers an unexpected angle; in an essay it can frame the piece, opening and closing it. The difference is truth: in an essay the object and everything around it must be real. Your unused uses are the first five entries in your notebook of quick starts.`
      },
      teacher: {
        note: {
          ru: `Упражнение хорошо идёт в парах: один называет предмет, другой — человека, потом меняются. Не торопите к «лучшей» идее: сначала количество, выбор потом. Если ученик застрял на очевидном, попросите назвать три свойства предмета, кроме назначения (вес, звук, форма). Генератор из усложнённого варианта удобен для всей группы: тяните карточки на доске, пишут все, потом сравнивают, как по-разному решили одну и ту же задачу.`,
          en: `This works well in pairs: one names the object, the other names a person, then they swap. Don’t rush students towards the “best” idea: quantity first, choosing later. If someone is stuck on the obvious, ask for three properties of the object other than its purpose (weight, sound, shape). The generator in the harder task suits the whole group: draw the cards on the board, everyone writes, then compare how differently people solved the same hand.`
        },
        source: ['wx', 'yw', 'ou-fiction', 'original']
      }
    },

    {
      id: 'free-2',
      route: 'free',
      n: 2,
      minutes: 8,
      skills: ['structure', 'scene'],
      genres: ['story', 'scene', 'statement'],
      title: { ru: `Начни с середины события`, en: `Start in the middle` },
      learn: {
        ru: `Начинать историю в момент, когда событие уже идёт, а предысторию добавлять по капле — там, где читатель начинает о ней спрашивать.`,
        en: `Open a story at a moment when something is already happening, and drip in the background only where the reader starts to wonder about it.`
      },
      hook: {
        ru: `Будильник, зубная щётка, завтрак, дорога в школу. Так начинаются тысячи историй — и к третьей фразе читатель уже зевает, хотя главное ещё впереди. Сюжет не обязан ждать, пока герой почистит зубы. Попробуем войти в историю, когда дверь уже хлопнула.`,
        en: `Alarm clock, toothbrush, breakfast, the walk to school. Thousands of stories begin this way — and by the third sentence the reader is yawning, though the main event hasn’t even started. The plot doesn’t have to wait while the hero brushes their teeth. Let’s walk into the story after the door has already slammed.`
      },
      technique: {
        name: { ru: `Вход на ходу`, en: `Getting on while it’s moving` },
        text: {
          ru: `Найди в своей истории момент, когда что-то уже пошло не так или вот-вот пойдёт, — и начни с него. Первая фраза показывает действие, которое уже идёт: кто-то бежит, спорит, прячет, роняет.

Всё, что было раньше, — кто герой, почему он здесь — не выкладывай сразу. Вставляй по одной детали там, где читатель начинает об этом спрашивать: в полфразы, между двумя действиями.

Это не закон: медленное начало тоже работает, если в нём уже есть напряжение. Но если первые три предложения можно вычеркнуть и ничего не потерять — вычёркивай.`,
          en: `Find the moment in your story when something has already gone wrong, or is about to, and start there. The first sentence shows an action already under way: someone is running, arguing, hiding something, dropping something.

Everything that came before — who the character is, why they’re here — don’t unload it all at once. Slip it in one detail at a time, at the point where the reader starts to wonder: half a sentence, between two actions.

This isn’t a law: a slow opening can work too, if it already holds tension. But if you can cross out your first three sentences and lose nothing, cross them out.`
        }
      },
      example: {
        before: {
          ru: `Утром Арман проснулся от будильника в семь часов. Он встал, умылся и пошёл на кухню, где мама приготовила ему яичницу. Потом он оделся и вышел из дома. На улице было холодно. Он шёл на остановку и думал о том, что сегодня контрольная по физике, к которой он совсем не готовился.`,
          en: `In the morning Arman woke up at seven when his alarm went off. He got up, washed his face and went to the kitchen, where his mum had made him fried eggs. Then he got dressed and left the flat. It was cold outside. He walked to the bus stop thinking about today’s physics test, which he hadn’t revised for at all.`
        },
        after: {
          ru: `Арман бежал за автобусом, не закрывая учебник физики. Водитель посмотрел в зеркало, вздохнул и всё-таки открыл дверь. До контрольной оставалось двадцать минут, а Арман дочитал только третий параграф из семи. Шапка, кажется, осталась на кухонном столе — рядом с остывшей яичницей.`,
          en: `Arman ran for the bus without closing his physics textbook. The driver glanced in the mirror, sighed, and opened the doors anyway. The test was in twenty minutes, and Arman had got through three sections out of seven. His hat, he suspected, was still on the kitchen table, next to the eggs going cold.`
        },
        changes: [
          {
            ru: `Будильник, умывание и дорога исчезли: в них ничего не происходит. Текст начинается с действия, которое уже идёт, — бега за автобусом.`,
            en: `The alarm, the washing and the walk are gone — nothing happens in them. The text opens on an action already under way: running for the bus.`
          },
          {
            ru: `Контрольная и то, что Арман не готов, не объявлены заранее, а видны: открытый учебник, «три параграфа из семи».`,
            en: `The test and Arman’s lack of revision aren’t announced in advance; we see them in the open textbook and “three sections out of seven”.`
          },
          {
            ru: `Утро не пропало: оно вернулось одной деталью в конце — забытая шапка и остывшая яичница. Предыстория пришла, когда читатель уже втянулся.`,
            en: `The morning hasn’t vanished: it comes back as one detail at the end — the forgotten hat and the cooling eggs. The backstory arrives once the reader is already hooked.`
          }
        ]
      },
      exercise: {
        type: 'rewrite',
        prompt: {
          ru: `Перепиши это начало так, чтобы первая фраза попала в самый разгар события. Всё нужное из первой половины — апрельский снег, день рождения, подарок — вставляй по ходу и коротко.`,
          en: `Rewrite this opening so that the first sentence lands right in the thick of things. Anything you need from the first half — the April snow, the birthday, the present — slip in along the way, briefly.`
        },
        config: {
          source: {
            ru: `В субботу Томирис проснулась поздно. Она долго лежала и смотрела в потолок, потом встала и пошла на кухню. Выпила чай с молоком и съела булочку. За окном шёл снег, хотя был уже апрель. Томирис оделась потеплее, взяла рюкзак и вышла из дома. Она доехала на метро до станции «Алатау», а потом пошла пешком к дому своей подруги Вики. У Вики был день рождения, и Томирис несла ей подарок — круглый аквариум с золотой рыбкой. Когда она подходила к подъезду, то поскользнулась на льду.`,
            en: `On Saturday Tomiris woke up late. She lay there for a long time looking at the ceiling, then got up and went to the kitchen. She had tea with milk and a bun. Outside it was snowing, even though it was already April. Tomiris put on something warm, picked up her rucksack and left the flat. She took the metro to Alatau station, then walked to her friend Vika’s building. It was Vika’s birthday, and Tomiris was carrying her present: a round glass bowl with a goldfish in it. Just as she reached the entrance, she slipped on the ice.`
          },
          placeholder: { ru: `Первая фраза — уже действие…`, en: `First sentence: already moving…` },
          then: {
            ru: `Для тетради стартов: напиши ещё две первые фразы для совсем других историй. Каждая начинается посреди действия.`,
            en: `For your notebook of quick starts: write two more first sentences for completely different stories. Each one starts in the middle of an action.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `Начни свою историю. Первое предложение — действие, которое уже идёт. Кто герой, где он и почему, выдавай по одной детали в следующих предложениях. Никаких пробуждений. До 150 слов.`,
          en: `Start a story of your own. The first sentence is an action already under way. Who, where and why come in one detail at a time in the sentences that follow. No waking up. Up to 150 words.`
        },
        config: {
          rules: [
            { kind: 'max-words', n: 150 },
            { kind: 'ban-words', words: {
              ru: ['проснулся', 'проснулась', 'проснулись', 'будильник', 'будильника'],
              en: ['woke', 'wakes', 'waking', 'alarm']
            } }
          ]
        }
      },
      hint: {
        ru: `Найди в исходнике место, где впервые что-то происходит, — это последняя строчка. Начни с неё или на секунду раньше. Можно так: «Томирис ещё не упала, но…»`,
        en: `Find the first moment in the source where something actually happens — it’s the last line. Start there, or a second before. You could try: “Tomiris hadn’t fallen yet, but…”`
      },
      improve: {
        ru: `Перечитай своё начало и найди предложение-объяснение, которое стоит слишком рано. Перенеси его ниже — туда, где читателю уже хочется это узнать, — или сократи до полфразы.`,
        en: `Reread your opening and find an explaining sentence that comes too early. Move it further down, to where the reader actually wants to know — or cut it to half a sentence.`
      },
      selfCheck: [
        { ru: `Первое предложение показывает действие, которое уже идёт?`, en: `Does the first sentence show an action already under way?` },
        { ru: `В первых трёх предложениях нет пробуждения, завтрака и дороги «просто так»?`, en: `Are the first three sentences free of waking up, breakfast and travel for its own sake?` },
        { ru: `Предыстория появляется по одной детали, а не одним куском?`, en: `Does the background arrive one detail at a time, not in a single block?` },
        { ru: `К концу первого абзаца читатель понимает, где мы и с кем?`, en: `By the end of the first paragraph, does the reader know where we are and who with?` }
      ],
      discuss: {
        ru: `Бывают ли истории, которым нужно медленное начало? Вспомни книгу или фильм, где оно сработало, и объясни почему.`,
        en: `Do some stories need a slow opening? Think of a book or film where one worked, and say why.`
      },
      reflect: {
        ru: `Что было труднее: выбросить первые предложения или решить, куда вставить предысторию?`,
        en: `What was harder: cutting the first sentences, or deciding where the background should go?`
      },
      transfer: {
        ru: `Вход на ходу работает не только в рассказе. Репортаж часто открывается сценой, а контекст идёт вторым абзацем. Конкурсное эссе или personal statement тоже можно начать с конкретного момента, но там сцена должна быть правдой и вести к мысли, а не просто цеплять. Лучшие первые фразы сохраняй в тетрадь стартов.`,
        en: `Getting on while it’s moving isn’t just for fiction. Reportage often opens on a scene and gives the context in the second paragraph. A competition essay or personal statement can also begin with a specific moment — but there the scene must be true and lead to an idea, not just grab attention. Keep your best first lines in your notebook of quick starts.`
      },
      teacher: {
        note: {
          ru: `Хорошо работает «вычёркивание вслух»: ученик читает своё начало, группа говорит, с какого предложения стало интересно, и всё до него вычёркивается. Предупредите о крайности: начало совсем без контекста путает читателя, поэтому последний пункт самопроверки важен. Со старшими покажите приём на эссе: в Essays That Worked есть текст, который открывается моментом, когда автор-судья принимает решение на поле, а смысл раскрывается дальше.`,
          en: `“Crossing out aloud” works well: a student reads their opening, the group says which sentence made it interesting, and everything before that is crossed out. Warn against the opposite extreme: an opening with no context at all confuses the reader, which is why the last self-check question matters. With older students, show the move in an essay: Essays That Worked includes one that opens with the writer, a referee, making a call, and unfolds its meaning later.`
        },
        source: ['yw', 'wx', 'etw', 'hse-spb', 'original']
      }
    },

    {
      id: 'free-3',
      route: 'free',
      n: 3,
      minutes: 10,
      skills: ['voice', 'words'],
      genres: ['free', 'story', 'scene'],
      title: { ru: `Одна ситуация: смешно, тревожно, нежно`, en: `One situation: funny, anxious, tender` },
      learn: {
        ru: `Менять тон текста, не меняя событий, — через выбор деталей, слов и длины фраз.`,
        en: `Change the tone of a piece without changing what happens, through your choice of details, words and sentence length.`
      },
      hook: {
        ru: `Лифт застрял между этажами. Это смешно? Страшно? Трогательно? Зависит не от лифта, а от того, какие слова ты выберешь. Одно и то же событие можно рассказать тремя способами — и читатель испытает три разных чувства.`,
        en: `The lift is stuck between floors. Is that funny? Frightening? Touching? It depends not on the lift but on the words you choose. The same event can be told three ways, and the reader will feel three different things.`
      },
      technique: {
        name: { ru: `Три рычага тона`, en: `Three levers of tone` },
        text: {
          ru: `Регистр — это тон, в котором ведётся рассказ. Он складывается не из слов «смешно» или «страшно», а из трёх рычагов:

- **детали** — что замечает рассказчик: крошку на чужом воротнике или мигающую лампу;
- **слова** — глаголы, сравнения, степень серьёзности: «автобус встал» или «автобус издал звук, которого автобусы не издают»;
- **ритм** — длинные спокойные фразы или короткие, рваные.

События не меняй — двигай только рычаги. Смешное часто держится на невозмутимом тоне и неожиданной точности, тревожное — на мелочах и паузах, нежное — на внимании к чужой хрупкости.`,
          en: `Register is the tone a story is told in. It isn’t made of the words “funny” or “scary”; it comes from three levers:

- **details** — what the narrator notices: a crumb on someone’s collar, or a flickering light;
- **words** — verbs, comparisons, how seriously things are taken: “the bus stopped” or “the bus made a noise buses aren’t supposed to make”;
- **rhythm** — long, calm sentences or short, broken ones.

Don’t change the events; move only the levers. Comedy often relies on a straight face and unexpected precision, anxiety on small things and pauses, tenderness on close attention to someone else’s fragility.`
        }
      },
      example: {
        before: {
          ru: `Автобус остановился между остановками. Водитель вышел и зашёл в магазин. Пассажиры ждали. Через пять минут он вернулся с пакетом, и автобус поехал дальше.`,
          en: `The bus stopped between stops. The driver got out and went into a shop. The passengers waited. Five minutes later he came back with a carrier bag, and the bus moved on.`
        },
        after: {
          ru: `**Смешно:** Водитель вышел из автобуса с достоинством человека, который идёт подписывать мирный договор. Пассажиры молча смотрели ему вслед. Он вернулся с одним лимоном.

**Тревожно:** Водитель вышел, не заглушив мотор. Двери остались открытыми. Прошло пять минут. Шесть. Мужчина у окна перестал делать вид, что читает.

**Нежно:** Водитель вернулся с пакетом мандаринов и, проходя мимо, молча положил один на рюкзак мальчика, уснувшего у двери.`,
          en: `**Funny:** The driver stepped off the bus with the dignity of a man on his way to sign a peace treaty. The passengers watched him go in silence. He came back with a single lemon.

**Anxious:** The driver got out and left the engine running. The doors stayed open. Five minutes passed. Six. The man by the window stopped pretending to read.

**Tender:** The driver came back with a bag of tangerines and, on his way past, quietly set one on the rucksack of a small boy asleep by the door.`
        },
        changes: [
          {
            ru: `Сюжет везде один: остановка, магазин, возвращение. Меняются только детали — лимон, работающий мотор, мандарин.`,
            en: `The plot is the same every time: the stop, the shop, the return. Only the details change: a lemon, an engine left running, a tangerine.`
          },
          {
            ru: `Смешное построено на невозмутимости и спаде: торжественный выход — и один лимон. Тревожное — на коротких фразах и счёте минут. Нежное — на маленьком жесте, которого никто не просил.`,
            en: `The funny version is built on a straight face and a drop: a ceremonial exit, then one lemon. The anxious one on short sentences and counted minutes. The tender one on a small gesture nobody asked for.`
          },
          {
            ru: `Ни в одной версии нет слов «смешно», «страшно» или «трогательно»: тон делают рычаги.`,
            en: `None of the versions contains the words “funny”, “scary” or “touching”: the levers do the work.`
          }
        ]
      },
      exercise: {
        type: 'columns',
        prompt: {
          ru: `Расскажи эту ситуацию трижды, по 4–6 предложений: смешно, тревожно, нежно. События не меняй — меняй детали, слова и ритм.`,
          en: `Tell this situation three times, in 4–6 sentences each: funny, anxious, tender. Don’t change the events — change the details, the words and the rhythm.`
        },
        config: {
          shared: {
            ru: `Лифт застревает между седьмым и восьмым этажами. Внутри двое: подросток и незнакомый человек с огромным тортом в коробке. Через двенадцать минут лифт снова едет.`,
            en: `The lift gets stuck between the seventh and eighth floors. Inside are two people: a teenager and a stranger holding an enormous cake in a box. Twelve minutes later the lift starts moving again.`
          },
          columns: [
            { label: { ru: `Смешно`, en: `Funny` }, placeholder: { ru: `Невозмутимо, с точными мелочами…`, en: `Straight-faced, with precise small things…` } },
            { label: { ru: `Тревожно`, en: `Anxious` }, placeholder: { ru: `Короткие фразы, звуки, паузы…`, en: `Short sentences, sounds, pauses…` } },
            { label: { ru: `Нежно`, en: `Tender` }, placeholder: { ru: `Что в этом человеке хрупкое?`, en: `What is fragile about this person?` } }
          ],
          then: {
            ru: `Найди в каждой версии два-три слова, которые сильнее всего держат тон. Выпиши их сюда и объясни, что делает каждое: это деталь, глагол или ритм?`,
            en: `In each version, find the two or three words that carry the tone most. Copy them here and say what each one does: is it a detail, a verb or the rhythm?`
          }
        }
      },
      harder: {
        type: 'free',
        prompt: {
          ru: `Расскажи ту же историю с лифтом в четвёртом регистре, которого не было: протокол МЧС, спортивный репортаж, отзыв на сайте, прогноз погоды, инструкция по эксплуатации. Держи регистр до конца.`,
          en: `Tell the same lift story in a fourth register: an official incident report, live sports commentary, an online review, a weather forecast, an instruction manual. Hold the register all the way to the end.`
        },
        config: {
          minutes: 6,
          placeholder: { ru: `В 17:42 лифт № 2 остановился…`, en: `At 17:42 lift no. 2 came to a halt…` },
          then: {
            ru: `Какие рычаги ты двигал в этом регистре? Назови один приём, которого не было в первых трёх версиях.`,
            en: `Which levers did you move for this register? Name one technique that wasn’t in your first three versions.`
          }
        }
      },
      hint: {
        ru: `Начни со смешной колонки и одной детали, которой нет в условии: что написано на коробке с тортом? Что нацарапано возле кнопки вызова? Одна деталь сразу задаёт тон. Можно начать так: «Торт был больше, чем…»`,
        en: `Start with the funny column and one detail that isn’t in the brief: what does it say on the cake box? What has someone scratched next to the alarm button? A single detail sets the tone straight away. You could start: “The cake was bigger than…”`
      },
      improve: {
        ru: `Возьми самую слабую из трёх колонок. Замени одно нейтральное слово словом её регистра и перестрой одно предложение по длине: разбей длинное или склей два коротких.`,
        en: `Take the weakest of your three columns. Swap one neutral word for a word in that column’s register, and change the length of one sentence: split a long one or join two short ones.`
      },
      selfCheck: [
        { ru: `События во всех трёх версиях одни и те же?`, en: `Are the events the same in all three versions?` },
        { ru: `Я ни разу не назвал тон прямо — «смешно», «страшно», «трогательно»?`, en: `Did I avoid naming the tone outright — “funny”, “scary”, “touching”?` },
        { ru: `Версии различаются деталями, а не только словами?`, en: `Do the versions differ in their details, not just their words?` },
        { ru: `Хотя бы в одной версии я менял длину фраз ради тона?`, en: `In at least one version, did I change sentence length for the sake of tone?` },
        { ru: `Я могу назвать слово, которое сильнее всего держит каждый тон?`, en: `Can I name the word that holds each tone most firmly?` }
      ],
      discuss: {
        ru: `Какой регистр дался группе труднее всего? Правда ли, что нежное без сюсюканья писать сложнее, чем смешное?`,
        en: `Which register was hardest for the group? Is it true that tenderness without gushing is harder to write than comedy?`
      },
      reflect: {
        ru: `Какой из трёх голосов больше всего похож на тебя? А какой хочется попробовать ещё раз?`,
        en: `Which of the three voices sounds most like you? Which one do you want to try again?`
      },
      transfer: {
        ru: `Тон нужен в любом жанре. В рассказе он задаёт настроение, в рецензии показывает отношение автора, в эссе помогает не сорваться в пафос. Различаются рамки: в конкурсном эссе и заявке юмор уместен, если он не насмешка и не уводит от вопроса. Лучшую из трёх версий перенеси в тетрадь стартов — её можно продолжить.`,
        en: `Every genre needs control of tone. In a story it sets the mood; in a review it shows the writer’s attitude; in an essay it keeps you from sliding into pomposity. The limits differ: in a competition or application essay, humour works if it isn’t mockery and doesn’t lead away from the question. Move the best of your three versions into your notebook of quick starts — it can be continued.`
      },
      teacher: {
        note: {
          ru: `Удобно дать всей группе одну ситуацию и читать версии подряд по регистрам: все слышат, как меняется текст при тех же событиях. Нежный регистр обычно самый трудный — подскажите искать не «милое», а внимательное: жест, заботу, неловкость. Для смешного пригодятся приёмы английского юмора из мастер-классов ВШЭ: невозмутимость, спад от высокого к бытовому, абсурдная логика.`,
          en: `Give the whole group the same situation and read the versions aloud register by register: everyone hears how the text changes while the events stay the same. The tender register is usually the hardest — suggest looking not for the “cute” but for the attentive: a gesture, care, awkwardness. For comedy, the English-humour techniques from the HSE masterclasses help: deadpan, bathos (a drop from grand to everyday), absurd logic.`
        },
        source: ['hse-spb', 'active-vocab', 'original']
      }
    },

    {
      id: 'free-4',
      route: 'free',
      n: 4,
      minutes: 9,
      skills: ['ideas', 'editing'],
      genres: ['free', 'story', 'contest'],
      title: { ru: `Нарочно плохо`, en: `Badly on purpose` },
      learn: {
        ru: `Узнавать штампы в тексте и заменять их действием или деталью — начав с того, что нарочно соберёшь их все в одном абзаце.`,
        en: `Spot clichés and replace them with an action or a detail — starting by deliberately cramming them all into one paragraph.`
      },
      hook: {
        ru: `Писать хорошо страшно: вдруг не получится. Писать плохо нарочно — весело и совершенно безопасно. Сегодня соревнование наоборот: кто напишет самый ужасный первый абзац? Как ни странно, это лучший способ научиться слышать штампы.`,
        en: `Trying to write well is scary: what if it doesn’t work? Writing badly on purpose is fun and completely safe. Today’s contest runs backwards: who can write the most dreadful opening paragraph? Oddly enough, it’s the best way to learn to hear clichés.`
      },
      technique: {
        name: { ru: `Собрать и обезвредить`, en: `Collect and defuse` },
        text: {
          ru: `Штамп — выражение, которое когда-то было свежим, а теперь приходит в голову само: «сердце бешено колотилось», «слёзы градом», «время остановилось». Это не ошибка, а готовая деталь с общего склада. Поэтому читатель проскакивает её, ничего не увидев.

Сначала собери штампы нарочно — так ты научишься узнавать их на слух. Потом обезвредь каждый вопросом: *а что было на самом деле?* Не «сердце колотилось», а «я трижды нажал не ту кнопку».

Иногда штамп уместен — в речи героя, в пародии, в шутке. Главное, чтобы это был твой выбор, а не автопилот.`,
          en: `A cliché is a phrase that was fresh once and now turns up on its own: “my heart was pounding”, “tears streamed down”, “time stood still”. It isn’t a mistake — it’s a ready-made part from a shared warehouse. That’s why readers skim straight past it without seeing anything.

First collect clichés on purpose: that’s how you learn to hear them. Then defuse each one with a question: *what actually happened?* Not “my heart was pounding” but “I pressed the wrong button three times”.

Sometimes a cliché belongs — in a character’s speech, in a parody, in a joke. What matters is that it’s your choice, not autopilot.`
        }
      },
      example: {
        before: {
          ru: `Было прекрасное летнее утро. Солнце ласково светило, птицы весело пели, а величественные горы гордо возвышались над городом. Айдана шла по тропинке, и её сердце было переполнено эмоциями. Наконец она увидела озеро — кристально чистое, как слеза. У неё перехватило дыхание. Время остановилось. Это был самый незабываемый момент в её жизни, который она запомнит навсегда.`,
          en: `It was a beautiful summer morning. The sun shone warmly, the birds sang merrily and the majestic mountains towered proudly over the city. Aidana walked along the path, her heart overflowing with emotion. At last she saw the lake, crystal clear like a tear. It took her breath away. Time stood still. It was the most unforgettable moment of her life, one she would remember for ever.`
        },
        after: {
          ru: `Последние двести метров до озера Айдана шла, глядя под ноги: камни были мокрыми после ночного дождя. Потом тропа кончилась, и она подняла голову. Вода была такой бирюзовой, будто в неё пролили гуашь. Айдана достала телефон, сфотографировала, посмотрела на экран — и убрала телефон обратно. На снимке было просто озеро.`,
          en: `For the last two hundred metres Aidana watched her feet: the stones were still wet from the night’s rain. Then the path ran out and she looked up. The water was so turquoise it looked as if someone had spilt paint in it. She took out her phone, took a picture, looked at the screen — and put the phone away. In the photo it was just a lake.`
        },
        changes: [
          {
            ru: `Штампы «ласково светило», «величественные горы», «кристально чистое», «перехватило дыхание» заменены тем, что Айдана делает и видит: мокрые камни, цвет воды, телефон.`,
            en: `The clichés “shone warmly”, “majestic mountains”, “crystal clear” and “took her breath away” are replaced by what Aidana does and sees: wet stones, the colour of the water, her phone.`
          },
          {
            ru: `Восторг не назван. Его показывает жест: она убирает телефон, потому что снимок проигрывает озеру.`,
            en: `Her amazement isn’t named. A gesture shows it: she puts the phone away because the photo can’t compete with the lake.`
          },
          {
            ru: `Исчезла концовка-мораль «запомнит навсегда» (заодно с тавтологией «незабываемый… запомнит»): читатель сам решит, насколько это важно.`,
            en: `The moral-style ending (“remember for ever”, which also repeats “unforgettable”) is gone: the reader decides how much it matters.`
          }
        ]
      },
      exercise: {
        type: 'constraint',
        prompt: {
          ru: `Напиши самый плохой первый абзац рассказа, какой только сможешь: собери в нём все штампы, которые знаешь. Событие возьми простое — первый снег, поездка на Иссык-Куль, новенький в классе, гол на последней минуте.`,
          en: `Write the worst opening paragraph you possibly can, packed with every cliché you know. Pick a simple event: the first snow, a trip to Lake Issyk-Kul, a new kid in class, a last-minute goal.`
        },
        config: {
          rules: [
            { kind: 'max-words', n: 80 }
          ],
          placeholder: { ru: `Это был самый обычный день, который изменил всё…`, en: `It was an ordinary day that changed everything…` },
          then: {
            ru: `А теперь то же событие — хорошо. Найди в своём ужасном абзаце каждый штамп и спроси: что было на самом деле? Напиши новую версию, где вместо штампов — действия и детали.`,
            en: `Now write the same event well. Find every cliché in your dreadful paragraph and ask: what actually happened? Write a new version where actions and details take the clichés’ place.`
          }
        }
      },
      harder: {
        type: 'constraint',
        prompt: {
          ru: `В этом отрывке что ни фраза, то штамп. Перепиши его: тот же матч, тот же гол, но без запрещённых слов. Что Эмиль на самом деле видит, слышит и делает в эти секунды?`,
          en: `Every line of this passage is a cliché. Rewrite it: same match, same goal, but none of the banned words. What does Emil actually see, hear and do in those seconds?`
        },
        config: {
          source: {
            ru: `Трибуны затаили дыхание. Счёт был равным, до финального свистка оставались считанные секунды. Сердце Эмиля бешено колотилось, на лбу выступил холодный пот. Он собрал волю в кулак и ударил — мяч, словно пуля, полетел в ворота. Секунды тянулись как вечность. Мгновение спустя трибуны взревели: гол! Слёзы счастья градом покатились по его щекам. В этот миг он понял, что мечты сбываются.`,
            en: `The crowd held its breath. The score was level, with only seconds left before the final whistle. Emil’s heart was pounding and a cold sweat broke out on his brow. Summoning every ounce of willpower, he struck the ball, and it flew like a bullet towards the goal. The seconds stretched into an eternity. A moment later the stands roared: goal! Tears of joy streamed down his cheeks. At that instant he realised that dreams really do come true.`
          },
          rules: [
            { kind: 'ban-words', words: {
              ru: ['затаили', 'бешено', 'колотилось', 'кулак', 'пуля', 'вечность', 'мгновение', 'взревели', 'градом', 'мечты'],
              en: ['breath', 'pounding', 'sweat', 'ounce', 'bullet', 'eternity', 'roared', 'streamed', 'dreams', 'realised']
            } },
            { kind: 'max-words', n: 100 }
          ]
        }
      },
      hint: {
        ru: `Начни с самого ужасного, что приходит в голову, и не останавливайся: «Это был обычный день, который…», «Солнце ласково…», «Сердце…». Застрял — вспомни фразы из рекламы, открыток и школьных сочинений. Чем больше узнаешь, тем лучше.`,
        en: `Start with the most dreadful thing that comes to mind and keep going: “It was an ordinary day that…”, “The sun smiled down…”, “My heart…”. Stuck? Think of phrases from adverts, greetings cards and school essays. The more you recognise, the better.`
      },
      improve: {
        ru: `Сравни два абзаца. Найди в хорошей версии место, куда штамп всё-таки пробрался обратно, — часто это концовка или описание чувства, — и замени его тем, что герой делает руками.`,
        en: `Compare the two paragraphs. Find the spot where a cliché crept back into the good version — often the ending or a description of a feeling — and replace it with something the character does with their hands.`
      },
      selfCheck: [
        { ru: `В плохом абзаце не меньше пяти штампов?`, en: `Does the bad paragraph contain at least five clichés?` },
        { ru: `Хорошая версия рассказывает о том же событии?`, en: `Does the good version tell the same event?` },
        { ru: `В хорошей версии не осталось ни одного штампа из плохой?`, en: `Is the good version free of every cliché from the bad one?` },
        { ru: `Чувства героя видны через действие, а не названы готовой фразой?`, en: `Are the character’s feelings shown through action rather than a ready-made phrase?` },
        { ru: `Я записал найденные штампы в свой список-радар?`, en: `Did I add the clichés I found to my cliché radar list?` }
      ],
      discuss: {
        ru: `Чей плохой абзац в группе получился самым великолепно ужасным? Какой штамп оказался самым живучим — и где мы встречаем его чаще всего?`,
        en: `Whose bad paragraph was the most gloriously awful? Which cliché proved hardest to kill — and where do we come across it most often?`
      },
      reflect: {
        ru: `Какой штамп ты заметил в своих обычных текстах — тех, что писал не нарочно?`,
        en: `Which cliché have you spotted in your own everyday writing — the kind you didn’t write on purpose?`
      },
      transfer: {
        ru: `Радар на штампы нужен везде, но особенно в эссе: «жизнь — череда выборов» и «я понял, что нельзя сдаваться» жюри видит сотни раз. В рассказе штамп можно отдать герою — пусть так говорит он, а не автор. Итог маршрута: возьми старт из тетради, дорасти до миниатюры в 300 слов и перепиши дважды — по радару и по тону.`,
        en: `Every genre needs a cliché radar, essays most of all: judges have read “life is a series of choices” hundreds of times. In a story you can hand a cliché to a character — let them say it, not the narrator. To finish the route, take a start from your notebook, grow it into a 300-word piece and rewrite it twice: once for clichés, once for tone.`
      },
      teacher: {
        note: {
          ru: `Устройте конкурс худших абзацев с чтением вслух: смех здесь — часть метода, он снимает страх ошибки. Старшим можно рассказать о настоящем конкурсе худших первых фраз — Bulwer-Lytton Fiction Contest. Правило: смеёмся над штампами, а не над автором. Список найденных штампов удобно вести всей группой весь курс. Для эссе-маршрутов пригодится слабый образец EssayPro «A Leap of Faith»: те же ошибки в «серьёзном» жанре.`,
          en: `Run a worst-paragraph contest with readings aloud: laughter is part of the method here, because it takes away the fear of mistakes. Older students may enjoy hearing about a real worst-opening-sentence contest, the Bulwer-Lytton Fiction Contest. The rule: we laugh at clichés, never at the writer. Keep a group list of clichés found and add to it throughout the course. For the essay routes, the weak EssayPro sample “A Leap of Faith” shows the same faults in a “serious” genre.`
        },
        source: ['essaypro-leap', 'owl-cw', 'hse-spb', 'original']
      }
    }
  ]);
})();
