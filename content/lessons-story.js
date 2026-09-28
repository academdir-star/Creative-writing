/* Route: story — Истории и персонажи / Stories and characters.
   Outcome: a finished 800–1500-word story in two drafts. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'story-1',
      route: 'story',
      n: 1,
      minutes: 10,
      skills: ['character', 'scene'],
      genres: ['story', 'scene', 'statement'],
      title: { ru: `Что герой хочет, чего боится и что делает?`, en: `What does the character want, fear and do?` },
      learn: {
        ru: `Строить сцену на желании, страхе и поступке персонажа, чтобы характер был виден через действие, а не через описание.`,
        en: `Build a scene on what a character wants, fears and does, so their personality shows through action rather than description.`
      },
      hook: {
        ru: `Можно написать целую страницу о том, что Дана упрямая и смелая, — и читатель не поверит. А можно показать, как она второй раз за вечер звонит в дверь соседа, который час назад на неё накричал. Во второй версии о характере нет ни слова. И всё понятно.`,
        en: `You could write a whole page about how stubborn and brave Dana is, and the reader still wouldn’t believe it. Or you could show her ringing the bell of a neighbour who shouted at her an hour ago — for the second time that evening. The second version says nothing about her character. And it tells you everything.`
      },
      technique: {
        name: { ru: `Хочет — боится — делает`, en: `Want, fear, act` },
        text: {
          ru: `Персонаж оживает, когда ему что-то нужно прямо сейчас — не «счастья вообще», а конкретное: успеть, забрать, услышать, скрыть. Второй двигатель — страх: чем грозит неудача? А может, и успех? Между желанием и страхом стоит препятствие.

Дальше главное: персонаж должен *сделать* что-то. Не подумать и не почувствовать, а совершить поступок, который можно увидеть. Поступок говорит о характере больше любого описания. Желание и страх можно вообще не называть — пусть их выдаст действие.`,
          en: `A character comes alive when they need something right now — not “happiness” in general, but something concrete: to get there in time, to take something back, to hear something, to hide something. The second engine is fear: what happens if they fail? Or if they succeed? Between the want and the fear stands an obstacle.

Then the key part: the character has to *do* something. Not think or feel, but act in a way the reader can see. An action says more about character than any description. You don’t even need to name the want or the fear; let the action give them away.`
        }
      },
      example: {
        before: {
          ru: `Арман был застенчивым мальчиком. Ему очень нравилась новая одноклассница Лейла, и он хотел с ней подружиться. Но он боялся, что друзья будут над ним смеяться. Он долго думал, что делать, и очень переживал. В итоге он решил, что поговорит с ней завтра.`,
          en: `Arman was a shy boy. He really liked Leila, the new girl in his class, and wanted to be friends with her. But he was afraid his friends would laugh at him. He thought for a long time about what to do and got very anxious. In the end he decided he would talk to her tomorrow.`
        },
        after: {
          ru: `На перемене Лейла уронила пенал, и карандаши раскатились под батарею. Арман увидел это с другого конца коридора и уже сделал шаг — но тут из-за угла вывалились Тимур с Бекой, громкие, как всегда. Арман присел, будто завязывает шнурок. Шнурок был завязан. Он развязал его и завязал снова, медленно, двойным узлом. Когда он поднял голову, Лейла доставала из-под батареи последний карандаш.`,
          en: `At break Leila dropped her pencil case, and the pencils rolled under the radiator. Arman saw it from the far end of the corridor and had already taken a step when Timur and Beka barrelled round the corner, loud as ever. Arman crouched as if to tie his shoelace. It was already tied. He untied it and tied it again, slowly, with a double knot. When he looked up, Leila was fishing the last pencil out from under the radiator.`
        },
        changes: [
          {
            ru: `«Застенчивый» и «очень хотел» заменены шагом навстречу Лейле. Желание видно, хотя его никто не назвал.`,
            en: `“Shy” and “really wanted” are replaced by a step towards Leila. The want is visible, though nobody names it.`
          },
          {
            ru: `Страх получил лица: друзья, которые вывалились из-за угла. Препятствие стало конкретным — его можно увидеть.`,
            en: `The fear now has faces: the friends barrelling round the corner. The obstacle is concrete — you can see it.`
          },
          {
            ru: `Главный поступок — фальшивый шнурок. Он смешной и грустный одновременно и говорит об Армане больше, чем слово «застенчивый».`,
            en: `The key action is the fake shoelace. It is funny and sad at once, and says more about Arman than the word “shy”.`
          },
          {
            ru: `Сцена заканчивается результатом: шанс упущен. «Поговорю завтра» — не финал сцены, а отсрочка.`,
            en: `The scene ends with an outcome: the chance is gone. “I’ll talk to her tomorrow” isn’t an ending; it’s a postponement.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Придумай персонажа — любого возраста, можно не человека. Заполни поля коротко, по строке. Это план сцены, а не сочинение.`,
          en: `Invent a character — any age, not necessarily human. Fill in the fields briefly, a line each. This is a plan for a scene, not an essay.`
        },
        config: {
          fields: [
            {
              id: 'who',
              label: { ru: `Кто это? Одна деталь, по которой его узнаешь`, en: `Who is it? One detail that marks them out` },
              hint: { ru: `Не весь портрет — одна деталь: пластырь на пальце, куртка на размер больше, привычка считать ступеньки.`, en: `Not a full portrait — one detail: a plaster on a finger, a jacket a size too big, a habit of counting stairs.` }
            },
            {
              id: 'want',
              label: { ru: `Чего он хочет прямо сейчас?`, en: `What do they want right now?` },
              hint: { ru: `Что-то конкретное и срочное: успеть на последний автобус, вернуть чужую книгу, чтобы никто не заметил порванный рукав.`, en: `Something concrete and urgent: to catch the last bus, to return a borrowed book, to stop anyone noticing a torn sleeve.` }
            },
            {
              id: 'fear',
              label: { ru: `Чего он боится?`, en: `What are they afraid of?` },
              hint: { ru: `Что будет, если не получится? А если получится — не станет ли хуже?`, en: `What happens if they fail? And if they succeed — could that be worse?` }
            },
            {
              id: 'obstacle',
              label: { ru: `Что мешает?`, en: `What is in the way?` },
              hint: { ru: `Человек, правило, время, погода или собственная привычка.`, en: `A person, a rule, time, the weather or one of their own habits.` }
            },
            {
              id: 'action',
              label: { ru: `Что он ДЕЛАЕТ?`, en: `What do they DO?` },
              hint: { ru: `Одно действие, которое можно увидеть. Не «решает» и не «думает», а берёт, прячет, звонит, врёт, уходит.`, en: `One action you could see. Not “decides” or “thinks”, but takes, hides, calls, lies, walks away.` }
            },
            {
              id: 'ending',
              label: { ru: `Чем заканчивается сцена?`, en: `How does the scene end?` },
              hint: { ru: `Получил, не получил или получил не то, что хотел.`, en: `They get it, they don’t, or they get something other than what they wanted.` }
            }
          ],
          then: {
            ru: `Теперь напиши сцену на 150–250 слов. Желание и страх можно не называть — пусть их покажет поступок. Закончи так, как решил в последнем поле.`,
            en: `Now write the scene in 150–250 words. You don’t have to name the want or the fear — let the action show them. End it the way you planned in the last field.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Пусть персонаж сделает что-то, что противоречит тому, чего он, по его словам, хочет. Говорит «мне всё равно, поеду я или нет» — и в третий раз проверяет, заряжен ли телефон с билетом. Напиши сцену так, чтобы противоречие было видно, но никто в тексте его не объяснял.`,
          en: `Make the character do something that contradicts what they say they want. They say “I don’t care whether I go or not” — and check for the third time that the phone with their ticket on it is charged. Write the scene so the contradiction is visible but nobody in the text explains it.`
        }
      },
      hint: {
        ru: `Начни с поля «Что он делает». Придумай странный, но понятный поступок — например, «переставляет чужой велосипед на полметра левее» — и спроси: зачем? Ответ и будет желанием, а то, что может помешать, — страхом.`,
        en: `Start with “What do they do?”. Invent an odd but understandable action — say, “moves a stranger’s bike half a metre to the left” — and ask: why? The answer is the want, and whatever might stop them is the fear.`
      },
      improve: {
        ru: `Найди в сцене предложение, где персонаж думает, переживает или решает. Замени его действием, по которому это видно: руки, предмет, шаг, короткая реплика.`,
        en: `Find a sentence where the character thinks, worries or decides. Replace it with an action that makes it visible: hands, an object, a step, a short line of speech.`
      },
      selfCheck: [
        { ru: `Персонаж хочет чего-то конкретного именно в этой сцене?`, en: `Does the character want something specific in this particular scene?` },
        { ru: `Есть препятствие, которое можно увидеть или назвать?`, en: `Is there an obstacle you can see or name?` },
        { ru: `В центре сцены — поступок, а не размышление?`, en: `Is there an action, not a reflection, at the centre of the scene?` },
        { ru: `Читатель поймёт желание героя, даже если оно не названо?`, en: `Will the reader grasp the want even if it is never named?` },
        { ru: `К концу сцены что-то изменилось: получил, не получил или получил не то?`, en: `Has something changed by the end: they got it, didn’t, or got the wrong thing?` }
      ],
      discuss: {
        ru: `Какой поступок в текстах группы сказал о персонаже больше всего? Можно ли было по нему угадать, чего герой боится?`,
        en: `Which action in the group’s writing told you most about a character? Could you guess from it what they were afraid of?`
      },
      reflect: {
        ru: `Твой персонаж поступил так, как ты планировал, или по ходу сцены он тебя удивил?`,
        en: `Did your character act the way you planned, or did they surprise you as you wrote?`
      },
      transfer: {
        ru: `Эта тройка — двигатель любого рассказа, в том числе итогового рассказа маршрута на 800–1500 слов: если сюжет буксует, спроси, чего герой хочет прямо сейчас. В personal statement правило то же — характер виден через выбор, — но поступок там должен быть твоим и настоящим.`,
        en: `This trio drives any story, including the 800–1500-word story at the end of this route: if the plot stalls, ask what the character wants right now. In a personal statement the rule is the same — character shows through choices — but the action has to be yours, and real.`
      },
      teacher: {
        note: {
          ru: `Если класс застревает на поле «Что делает», устройте быстрый мозговой штурм поступков без контекста («сворачивает чек в трубочку», «звонит и молчит») и дайте каждому выбрать чужой. Следите, чтобы желание было маленьким и срочным: «хочет быть счастливым» сцены не даёт. Попросите сохранить героя — из него может вырасти итоговый рассказ маршрута.`,
          en: `If the class gets stuck on “What do they do?”, run a quick brainstorm of actions with no context (“rolls a receipt into a tube”, “calls and says nothing”) and let everyone pick someone else’s. Make sure the want is small and urgent: “wants to be happy” gives you no scene. Ask students to keep this character — the route’s final story can grow from them.`
        },
        source: ['ou-fiction', 'wx', 'hse-spb', 'original']
      }
    },

    {
      id: 'story-2',
      route: 'story',
      n: 2,
      minutes: 10,
      skills: ['scene', 'character'],
      genres: ['story', 'scene', 'free'],
      title: { ru: `Конфликт через диалог, без объяснений`, en: `Conflict through dialogue, never explained` },
      learn: {
        ru: `Писать диалог, в котором люди спорят о мелочи, а читатель слышит настоящий конфликт между строк.`,
        en: `Write dialogue in which people argue about something small while the reader hears the real conflict between the lines.`
      },
      hook: {
        ru: `В жизни люди редко говорят прямо: «Мне обидно, что ты забыл про мой день рождения». Они спорят о том, кто оставил молоко на столе. Поэтому хороший диалог так интересно читать: мы подслушиваем и догадываемся сами.`,
        en: `In real life people rarely say it straight: “I’m hurt you forgot my birthday.” They argue about who left the milk out. That’s why good dialogue is so gripping to read: we eavesdrop and work it out for ourselves.`
      },
      technique: {
        name: { ru: `Спор о другом`, en: `Arguing about something else` },
        text: {
          ru: `Настоящий конфликт — большой и неудобный: ревность, обида, страх остаться одному. Герои о нём молчат. Вслух они спорят о мелочи: о зарядке, о дороге, о том, кто последним брал ножницы. Но каждая реплика заряжена настоящим.

Правила этой сцены:
- никто не объясняет, что чувствует и почему;
- вместо «сказал» — действие рядом с репликой: руки, взгляд, предмет;
- мелочь так и не решена или решена так, что стало хуже.

«Сказал» — не ошибка, в обычной прозе его почти не замечают. Здесь мы убираем его, чтобы потренировать действие.`,
          en: `The real conflict is big and awkward: jealousy, hurt, the fear of being left out. The characters keep quiet about it. Out loud they argue about something small: a charger, the route, who last had the scissors. But every line is charged with the real thing.

The rules for this scene:
- nobody explains what they feel or why;
- instead of “said”, put an action next to the line: hands, a look, an object;
- the small thing is never settled, or is settled in a way that makes things worse.

“Said” isn’t a mistake — in ordinary prose readers barely notice it. We drop it here to practise using action.`
        }
      },
      example: {
        before: {
          ru: `— Я злюсь на тебя, потому что ты теперь всё время с новыми друзьями, а про меня забыла, — сказала Мадина.

— Мне жаль, что ты так чувствуешь, но у меня тоже есть право на новых друзей, — ответила Соня.

— Я просто боюсь, что мы перестанем дружить, — призналась Мадина.`,
          en: `“I’m angry with you because you spend all your time with your new friends now and you’ve forgotten about me,” said Madina.

“I’m sorry you feel that way, but I’m allowed new friends too,” Sonya replied.

“I’m just scared we’ll stop being friends,” Madina admitted.`
        },
        after: {
          ru: `— Это мой наушник. — Мадина протянула ладонь.

— С чего ты взяла? — Соня даже не вынула его из уха.

— У моего сбоку царапина.

— У всех белых наушников царапина.

— Ты взяла его в воскресенье. Когда мы собирались на Кок-Тобе.

Соня положила наушник на парту между ними. Никто его не взял.

— Там всё равно был ветер.`,
          en: `“That’s my earbud.” Madina held out her hand.

“Says who?” Sonya didn’t even take it out of her ear.

“Mine’s got a scratch on the side.”

“Every white earbud has a scratch.”

“You borrowed it on Sunday. When we were meant to be going up Kok-Tobe.”

Sonya put the earbud on the desk between them. Neither of them picked it up.

“It was windy up there anyway.”`
        },
        changes: [
          {
            ru: `Чувства больше не названы — ни «злюсь», ни «боюсь». Вслух девочки спорят о наушнике.`,
            en: `The feelings are no longer named — no “angry”, no “scared”. Out loud, the girls are arguing about an earbud.`
          },
          {
            ru: `Настоящая обида прорывается одной деталью: «когда мы собирались на Кок-Тобе». Что случилось в воскресенье, читатель достраивает сам.`,
            en: `The real hurt breaks through in one detail: “when we were meant to be going up Kok-Tobe”. The reader works out what happened on Sunday.`
          },
          {
            ru: `Ни одного «сказала», «ответила», «призналась». Кто говорит, понятно по действиям: протянула ладонь, не вынула из уха, положила на парту.`,
            en: `Not a single “said”, “replied” or “admitted”. We know who is speaking from the actions: a hand held out, an earbud left in, an earbud put on the desk.`
          },
          {
            ru: `Последняя реплика Сони выдаёт больше, чем она хотела: она там была. Без Мадины.`,
            en: `Sonya’s last line gives away more than she meant it to: she did go. Without Madina.`
          }
        ]
      },
      exercise: {
        type: 'constraint',
        prompt: {
          ru: `Придумай двух людей, которые спорят о мелочи: чья очередь выносить мусор, какой дорогой идти, кто выбирает музыку в машине. Реши про себя, какой настоящий конфликт стоит за спором, — но не пиши о нём. Сцена-диалог на 10–20 реплик.`,
          en: `Invent two people arguing about something small: whose turn it is to take the rubbish out, which way to walk, who picks the music in the car. Decide privately what the real conflict behind it is — but don’t write about it. A dialogue scene of 10–20 lines.`
        },
        config: {
          rules: [
            { kind: 'must-dialogue' },
            { kind: 'no-said' },
            { kind: 'ban-words', words: {
              ru: ['потому', 'поэтому', 'чувствую', 'обидно', 'обиделся', 'обиделась'],
              en: ['because', 'feel', 'feels', 'felt', 'upset']
            } }
          ],
          placeholder: { ru: `— Это моя зарядка.`, en: `“That’s my charger.”` },
          then: {
            ru: `Под сценой одной строкой запиши для себя настоящий конфликт. Потом перечитай диалог: есть ли реплика, где он просвечивает? Если нет — добавь одну, как «Кок-Тобе» в примере.`,
            en: `Under the scene, write the real conflict in one line, just for yourself. Then reread the dialogue: is there a line where it shows through? If not, add one — like “Kok-Tobe” in the example.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Ровно 12 реплик — и настоящая тема ни разу не упомянута, даже близким словом. Например, брат и сестра упаковывают коробки и спорят, чья это кружка; слов «переезд», «уезжать», «скучать» в тексте нет. Прочитай сцену тому, кто не знает замысла: понял ли он, о чём на самом деле разговор?`,
          en: `Exactly 12 lines of dialogue — and the real subject is never mentioned, not even by a related word. Say a brother and sister are packing boxes and arguing over whose mug it is; the words “moving”, “leaving” and “miss” never appear. Read the scene to someone who doesn’t know your plan: can they tell what the conversation is really about?`
        }
      },
      hint: {
        ru: `Начни с предмета в руках у одного из героев: кружка, ключи, зарядка. Первая реплика — упрёк или требование: «Ты опять взял мои ключи?» Второй не соглашается. Пусть спорят, пока предмет не начнёт значить больше, чем он есть.`,
        en: `Start with an object in one character’s hands: a mug, keys, a charger. The first line is a complaint or a demand: “Have you taken my keys again?” The other disagrees. Let them argue until the object means more than it is.`
      },
      improve: {
        ru: `Найди реплику, где герой объясняет, что чувствует или почему так поступил. Вычеркни её и замени действием или ответом невпопад.`,
        en: `Find a line where a character explains what they feel or why they did something. Cut it, and put in an action or a reply that misses the point.`
      },
      selfCheck: [
        { ru: `Вслух герои спорят о мелочи, а не о главном?`, en: `Out loud, are the characters arguing about something small rather than the real issue?` },
        { ru: `Ни один герой не объясняет, что чувствует и почему?`, en: `Does nobody explain what they feel or why?` },
        { ru: `Понятно, кто говорит, без «сказал» и «ответила»?`, en: `Is it clear who is speaking without “said” or “replied”?` },
        { ru: `Есть хотя бы одна реплика, где настоящий конфликт просвечивает?`, en: `Is there at least one line where the real conflict shows through?` },
        { ru: `В конце мелочь не решена или решена так, что стало хуже?`, en: `At the end, is the small thing unresolved, or resolved in a way that makes things worse?` }
      ],
      discuss: {
        ru: `Бывает ли, что прямое «мне обидно» сильнее подтекста? Когда в рассказе стоит один раз сказать главное вслух?`,
        en: `Is a straight “that hurt me” ever stronger than subtext? When is it worth letting a character say the main thing out loud — once?`
      },
      reflect: {
        ru: `Что было труднее: придумать мелочь для спора или удержаться и не объяснить главное?`,
        en: `What was harder: finding the small thing to argue about, or holding back from explaining the real one?`
      },
      transfer: {
        ru: `В итоговом рассказе маршрута хотя бы одна ключевая сцена может держаться на таком диалоге. В репортаже иначе: реплики реальных людей нельзя придумывать и «улучшать», можно только выбирать и точно цитировать. А в эссе ясная прямая мысль обычно важнее подтекста.`,
        en: `In this route’s final story, at least one key scene can rest on dialogue like this. Reportage is different: you can’t invent or “improve” what real people said; you can only choose and quote accurately. And in an essay a clear, direct point usually matters more than subtext.`
      },
      personalAlt: {
        ru: `Не хочешь брать спор из своей жизни — возьми незнакомцев: двое соседей у сломанного лифта, продавец и покупатель на Зелёном базаре, два робота-доставщика у одной двери.`,
        en: `If you’d rather not use an argument from your own life, use strangers: two neighbours by a broken lift, a stallholder and a customer at the Green Bazaar, two delivery robots at the same door.`
      },
      teacher: {
        note: {
          ru: `Хорошо работает чтение по ролям: двое читают, группа угадывает настоящий конфликт. Угадали — сцена работает; не угадали — ищите одну реплику, которую можно заострить. Правило «без сказал» — тренировка, а не закон: в обычной прозе нейтральное «сказал» часто лучше вычурных «воскликнул» и «процедил». Автоматическая проверка правил приблизительна — обсуждайте текст, а не галочки.`,
          en: `Reading aloud in parts works well: two students read, the group guesses the real conflict. If they guess, the scene works; if not, look for one line to sharpen. The no-“said” rule is practice, not law: in ordinary prose a plain “said” is often better than showy tags like “exclaimed” or “hissed”. The automatic rule check is approximate — discuss the writing, not the ticks.`
        },
        source: ['owl-cw', 'wx', 'hse-spb', 'original']
      }
    },

    {
      id: 'story-3',
      route: 'story',
      n: 3,
      minutes: 9,
      skills: ['character', 'voice'],
      genres: ['story', 'description', 'scene'],
      title: { ru: `Один человек глазами двух наблюдателей`, en: `One person through two observers` },
      learn: {
        ru: `Показывать персонажа через взгляд другого человека и замечать, что описание говорит и о том, кто смотрит.`,
        en: `Show a character through someone else’s eyes, and notice how a description also reveals the person who is looking.`
      },
      hook: {
        ru: `Для курьера соседка из сорок седьмой квартиры — «та, что никогда не отвечает по домофону». Для её кота — существо, которое в семь утра открывает самый важный шкаф в мире. Это один и тот же человек. Кто из них прав?`,
        en: `To the courier, the woman in flat 47 is “the one who never answers the intercom”. To her cat, she is the being who opens the most important cupboard in the world at seven every morning. Same person. Which of them is right?`
      },
      technique: {
        name: { ru: `Двойная оптика`, en: `Two lenses` },
        text: {
          ru: `Любое описание человека — ещё и портрет того, кто смотрит. Наблюдатель замечает то, что важно *ему*: курьер — скорость и чаевые, ребёнок — рост и карманы, собака — запах и руки. Он называет вещи своими словами и делает свои выводы — иногда неверные.

Возьми одного персонажа и два очень разных взгляда. У каждого наблюдателя свой словарь, свои детали и своя ошибка. Читатель складывает две картинки и видит человека объёмнее, чем каждый из наблюдателей.`,
          en: `Every description of a person is also a portrait of whoever is looking. An observer notices what matters to *them*: a courier notices speed and tips, a child notices height and pockets, a dog notices smells and hands. Each puts things in their own words and draws their own conclusions — sometimes wrong ones.

Take one character and two very different ways of seeing them. Give each observer their own vocabulary, their own details and their own mistake. The reader puts the two pictures together and sees someone fuller than either observer can.`
        }
      },
      example: {
        before: {
          ru: `Охранник в нашей школе — пожилой мужчина, все зовут его Серик-ага. Он строгий, но добрый. Он всегда сидит у входа и проверяет пропуска. Малыши его немного боятся, хотя на самом деле он хороший человек.`,
          en: `The guard at our school is an older man everyone calls Uncle Serik. He is strict but kind. He always sits by the entrance and checks passes. The little ones are a bit scared of him, even though he’s actually a good person.`
        },
        after: {
          ru: `**Первоклассница:** У Серик-аги на столе есть кнопка, которая открывает весь мир. Он нажимает её, только если приложить карточку. Один раз я забыла карточку, а он всё равно нажал. Я никому не говорю.

**Взрослая дочь:** Отец тридцать лет ремонтировал лифты, а теперь сторожит турникет в школе. Говорит, что работа скучная. Но в ящике его стола — коробка с чужими варежками, и он помнит, какая чья.`,
          en: `**A six-year-old:** Uncle Serik has a button on his desk that opens the whole world. He only presses it if you touch your card on the thing. Once I forgot my card and he pressed it anyway. I haven’t told anyone.

**His grown-up daughter:** Dad repaired lifts for thirty years, and now he guards a turnstile at a school. He says the job is boring. But there’s a box of other people’s mittens in his desk drawer, and he remembers whose are whose.`
        },
        changes: [
          {
            ru: `Вместо общих «строгий, но добрый» — два взгляда со своими деталями: у ребёнка — волшебная кнопка, у дочери — прошлое отца и коробка с варежками.`,
            en: `Instead of the general “strict but kind”, there are two views, each with its own details: for the child, a magic button; for the daughter, her father’s past and a box of mittens.`
          },
          {
            ru: `Голоса разные: первоклассница говорит короткими фразами и хранит секрет, дочь — по-взрослому, с оттенком горечи («а теперь сторожит турникет»).`,
            en: `The voices differ: the child speaks in short sentences and keeps a secret; the daughter sounds grown-up, with a hint of bitterness (“and now he guards a turnstile”).`
          },
          {
            ru: `Каждый видит только часть. Ребёнок не знает про лифты, дочь не знает про забытую карточку. Целого человека собирает читатель.`,
            en: `Each sees only part of him. The child doesn’t know about the lifts; the daughter doesn’t know about the forgotten card. The reader puts the whole man together.`
          },
          {
            ru: `Слово «добрый» так и не прозвучало, но оба фрагмента — о доброте.`,
            en: `The word “kind” never appears, yet both passages are about kindness.`
          }
        ]
      },
      exercise: {
        type: 'columns',
        prompt: {
          ru: `Выбери одного человека — придуманного или увиденного со стороны. Опиши его глазами двух очень разных наблюдателей, по 4–6 предложений. Меняй не только детали, но и словарь, и длину фраз.`,
          en: `Choose one person — invented, or someone you’ve seen from a distance. Describe them through the eyes of two very different observers, 4–6 sentences each. Change not only the details but the vocabulary and the length of the sentences.`
        },
        config: {
          shared: {
            ru: `Если своей идеи нет: соседка глазами курьера, который привозит ей еду, и глазами её кота. Тренер по плаванию глазами новичка и глазами уборщицы бассейна. Продавщица семечек у метро глазами голубя и глазами её внука.`,
            en: `If you need an idea: a neighbour through the eyes of the courier who brings her food, and of her cat. A swimming coach through the eyes of a beginner, and of the woman who cleans the pool. A woman selling sunflower seeds by the metro, through the eyes of a pigeon, and of her grandson.`
          },
          columns: [
            {
              label: { ru: `Наблюдатель 1`, en: `Observer 1` },
              placeholder: { ru: `Кто смотрит? Что он замечает первым?`, en: `Who is looking? What do they notice first?` }
            },
            {
              label: { ru: `Наблюдатель 2`, en: `Observer 2` },
              placeholder: { ru: `Кто смотрит? Что видит он — и чего не видит первый?`, en: `Who is looking? What do they see that the first one misses?` }
            }
          ],
          then: {
            ru: `Какую правду о человеке не видит ни один из наблюдателей, но видит читатель, сложив две колонки? Запиши её одной фразой — для себя. Это ключ к персонажу, если он попадёт в твой рассказ.`,
            en: `What truth about this person does neither observer see, but the reader can, by putting the two columns together? Write it in one sentence, just for yourself. It’s the key to the character if they end up in your story.`
          }
        }
      },
      harder: {
        type: 'columns',
        prompt: {
          ru: `Добавь третий взгляд — человека на самого себя. Что он замечает в себе, чего не видят другие? В чём он ошибается насчёт себя?`,
          en: `Add a third view: the person as they see themselves. What do they notice about themselves that others miss? What are they wrong about?`
        },
        config: {
          columns: [
            { label: { ru: `Наблюдатель 1`, en: `Observer 1` } },
            { label: { ru: `Наблюдатель 2`, en: `Observer 2` } },
            { label: { ru: `Он сам`, en: `Themselves` } }
          ],
          then: {
            ru: `Чей взгляд ближе к правде? Может быть, ничей? Ответь двумя предложениями.`,
            en: `Whose view is closest to the truth? Could it be nobody’s? Answer in two sentences.`
          }
        }
      },
      hint: {
        ru: `Начни с того, что наблюдатель замечает первым. Курьер: «Дверь открывается на цепочку». Кот: «Она опять надела шуршащую куртку — значит, уходит». Первая же деталь задаёт голос, остальное пойдёт за ней.`,
        en: `Start with the first thing each observer notices. The courier: “The door opens on the chain.” The cat: “She’s put on the rustly jacket again, so she’s leaving.” That first detail sets the voice; the rest will follow.`
      },
      improve: {
        ru: `Найди в колонках слово, которое мог бы сказать любой наблюдатель («добрая», «странный», «обычный»). Замени его словом или деталью, которые выбрал бы только этот.`,
        en: `Find a word in your columns that any observer could have used (“kind”, “strange”, “ordinary”). Replace it with a word or detail only this observer would choose.`
      },
      selfCheck: [
        { ru: `Два наблюдателя по-настоящему разные — по возрасту, роли или даже виду?`, en: `Are the two observers genuinely different — in age, role or even species?` },
        { ru: `У каждого свой словарь и своя длина фраз?`, en: `Does each have their own vocabulary and sentence length?` },
        { ru: `Каждый замечает то, что важно именно ему?`, en: `Does each notice what matters to them in particular?` },
        { ru: `Хотя бы один из них в чём-то ошибается?`, en: `Is at least one of them wrong about something?` },
        { ru: `Вместе две колонки говорят о человеке больше, чем каждая по отдельности?`, en: `Do the two columns together say more about the person than either one alone?` }
      ],
      discuss: {
        ru: `Чей взгляд в работах группы открыл персонажа с самой неожиданной стороны? Почему именно он?`,
        en: `Whose point of view in the group’s writing showed a character from the most unexpected angle? Why that one?`
      },
      reflect: {
        ru: `За какого наблюдателя тебе было легче писать? Как думаешь, почему?`,
        en: `Which observer was easier to write? Why do you think that is?`
      },
      transfer: {
        ru: `В рассказе можно вести историю глазами двух героев по очереди — хороший ход для итогового рассказа маршрута, если героев двое. В репортаже приём честен, только если оба взгляда настоящие: два интервью о человеке, а не два придуманных голоса. В эссе чужой взгляд на тебя можно цитировать, но не сочинять.`,
        en: `In a story you can alternate between two characters’ points of view — a good move for this route’s final story if it has two main characters. In reportage the technique is honest only if both views are real: two interviews about a person, not two invented voices. In an essay you can quote someone’s view of you, but not make it up.`
      },
      personalAlt: {
        ru: `Если не хочешь писать о реальном человеке, придумай его целиком или возьми героя книги и опиши его глазами двух персонажей, которые в книге о нём почти не думают.`,
        en: `If you’d rather not write about a real person, invent one from scratch, or take a character from a book and describe them through two characters who barely think about them in the original.`
      },
      teacher: {
        note: {
          ru: `Упражнение хорошо идёт в парах: каждый пишет за одного наблюдателя, потом тексты складывают. Проследите, чтобы в персонаже нельзя было узнать одноклассника или учителя: герой собирательный или выдуманный. Нечеловеческие наблюдатели — кот, лифт, зонт — снимают напряжение и дают неожиданно точные детали.`,
          en: `This works well in pairs: each student writes one observer, then they put the texts together. Make sure nobody can recognise a classmate or teacher in the character: the person should be a composite or invented. Non-human observers — a cat, a lift, an umbrella — ease the tension and produce surprisingly precise details.`
        },
        source: ['ou-fiction', 'hse-spb', 'original']
      }
    },

    {
      id: 'story-4',
      route: 'story',
      n: 4,
      minutes: 10,
      skills: ['structure', 'scene'],
      genres: ['story', 'scene', 'free'],
      title: { ru: `Поворот и клиффхэнгер`, en: `The turn and the cliffhanger` },
      learn: {
        ru: `Вести сцену от обычного начала через трещину и поворот к последней строке, после которой хочется читать дальше, — и не обманывать читателя.`,
        en: `Take a scene from an ordinary start, through a crack and a turn, to a last line that makes the reader want more — without cheating them.`
      },
      hook: {
        ru: `Сериалы заставляют нажать «следующая серия» за пять секунд до титров. Приём старше телевидения: так обрывались выпуски романов, которые в XIX веке печатали частями в журналах. Но у клиффхэнгера есть обратная сторона: если читатель почувствует, что его обманули, он закроет книгу.`,
        en: `TV series make you hit “next episode” five seconds before the credits. The trick is older than television: nineteenth-century novels printed in instalments in magazines broke off the same way. But a cliffhanger has a downside: if readers feel cheated, they close the book.`
      },
      technique: {
        name: { ru: `Трещина — поворот — обрыв`, en: `Crack, turn, cut` },
        text: {
          ru: `Сцена в четыре шага:
- **обычное** — мир, где всё идёт как всегда;
- **трещина** — мелочь не на месте: лишний звук, чужая вещь, слишком вежливый ответ;
- **поворот** — событие, которое меняет ситуацию. Неожиданное, но задним числом логичное: улики были в трещине;
- **последняя строка** — обрыв на вопросе, который читатель задаёт сам.

Честный клиффхэнгер открывает новый вопрос. Нечестный прячет ответ, который герой уже знает, или пугает опасностью, которой нет. Читатель это чувствует и перестаёт доверять.`,
          en: `A scene in four steps:
- **the ordinary** — a world where things are going as usual;
- **the crack** — something small is off: an extra sound, a stranger’s belongings, an answer that is too polite;
- **the turn** — an event that changes the situation. Unexpected, but logical in hindsight: the clues were in the crack;
- **the last line** — a cut on a question the reader asks for themselves.

An honest cliffhanger opens a new question. A dishonest one hides an answer the character already knows, or threatens a danger that isn’t real. Readers feel this and stop trusting you.`
        }
      },
      example: {
        before: {
          ru: `Данияр пришёл покормить кота соседки. Всё было как обычно. Вдруг он услышал в комнате странный звук! Сердце бешено заколотилось. Кто там?! Он медленно открыл дверь… Это был просто кот, который уронил вазу. Данияр с облегчением выдохнул, насыпал корм и ушёл домой.`,
          en: `Daniyar went round to feed his neighbour’s cat. Everything was normal. Suddenly he heard a strange noise in the room! His heart was pounding like mad. Who was in there?! He slowly opened the door… It was just the cat, which had knocked over a vase. Daniyar breathed a sigh of relief, put out some food and went home.`
        },
        after: {
          ru: `Данияр открыл дверь ключом, который соседка оставила ему на неделю. Кот встретил его в прихожей с видом оскорблённого директора — как всегда. Но миска на кухне была полной, а корм ещё не успел подсохнуть. Рядом на столе стояла кружка. Данияр дотронулся до неё: тёплая.

Он написал соседке: «Вы уже вернулись?»

Ответ пришёл через секунду: «Нет, я в Астане. А что?»`,
          en: `Daniyar let himself in with the key his neighbour had left him for the week. The cat met him in the hall looking like an offended headmaster — as usual. But the bowl in the kitchen was full, and the food hadn’t even started to dry out. Next to it on the table stood a mug. Daniyar touched it: warm.

He texted his neighbour: “Are you back already?”

The reply came a second later: “No, I’m in Astana. Why?”`
        },
        changes: [
          {
            ru: `Вместо «всё было как обычно» обычное показано: ключ на неделю, кот с привычно обиженным видом.`,
            en: `Instead of “everything was normal”, the normal is shown: a key for the week, a cat with its usual offended look.`
          },
          {
            ru: `Трещина — полная миска со свежим кормом. Мелочь, которую легко пропустить, но именно она готовит поворот.`,
            en: `The crack is the full bowl of fresh food: easy to miss, but it is what sets up the turn.`
          },
          {
            ru: `Поворот — тёплая кружка и ответ соседки. Неожиданно, но логично: миска уже намекала, что здесь кто-то был.`,
            en: `The turn is the warm mug and the neighbour’s reply. Unexpected, but logical: the bowl already hinted that someone had been there.`
          },
          {
            ru: `Обрыв честный: герой знает не больше читателя. В версии «до» опасность была ненастоящей и отменилась через строчку — читатель чувствует себя обманутым.`,
            en: `The cut is honest: the character knows no more than the reader. In the “before” version the danger was fake and cancelled a line later, which leaves the reader feeling cheated.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Придумай сцену и заполни четыре шага — по одной-две строки. Начни с самого обычного, что можешь представить.`,
          en: `Invent a scene and fill in the four steps, a line or two each. Start with the most ordinary thing you can imagine.`
        },
        config: {
          fields: [
            {
              id: 'ordinary',
              label: { ru: `Обычное: кто, где и что делает, как всегда`, en: `The ordinary: who, where, doing what they always do` },
              hint: { ru: `Утро перед контрольной, очередь в столовой, дорога на метро до «Алатау», смена в кофейне.`, en: `The morning before a test, the lunch queue, the metro ride to Alatau, a shift in a coffee shop.` }
            },
            {
              id: 'crack',
              label: { ru: `Трещина: что-то не на месте`, en: `The crack: something is off` },
              hint: { ru: `Одна мелочь: лишний звук, чужая вещь, человек, который ведёт себя чуть иначе, чем обычно.`, en: `One small thing: an extra sound, someone else’s belongings, a person acting slightly out of character.` }
            },
            {
              id: 'turn',
              label: { ru: `Поворот: что меняет ситуацию`, en: `The turn: what changes the situation` },
              hint: { ru: `Проверь: можно ли объяснить поворот задним числом через трещину? Если нет — поменяй трещину, а не поворот.`, en: `Check: can the turn be explained in hindsight by the crack? If not, change the crack, not the turn.` }
            },
            {
              id: 'last',
              label: { ru: `Последняя строка — обрыв`, en: `The last line — the cut` },
              hint: { ru: `Реплика, сообщение, звук или действие. Вопрос, который она открывает, должен быть настоящим: герой тоже не знает ответа.`, en: `A line of speech, a message, a sound or an action. The question it opens must be real: the character doesn’t know the answer either.` }
            }
          ],
          then: {
            ru: `Теперь напиши сцену целиком — 150–300 слов — и закончи её этой последней строкой. Не объясняй, что было дальше.`,
            en: `Now write the whole scene — 150–300 words — and end it on that last line. Don’t explain what happened next.`
          }
        }
      },
      harder: {
        type: 'columns',
        prompt: {
          ru: `Напиши для своей сцены два финала: закрытый, где вопрос решён, пусть и неожиданно, и открытый, с обрывом. Если это конец рассказа, а не главы, читателю может быть нужен ответ. А может, и нет.`,
          en: `Write two endings for your scene: a closed one, where the question is answered (even surprisingly), and an open one, with a cliffhanger. If this is the end of a story rather than a chapter, the reader may need an answer. Or may not.`
        },
        config: {
          columns: [
            { label: { ru: `Закрытый финал`, en: `Closed ending` } },
            { label: { ru: `Открытый финал`, en: `Open ending` } }
          ],
          then: {
            ru: `Какой финал служит этой истории? Объясни выбор в двух предложениях.`,
            en: `Which ending serves this story? Explain your choice in two sentences.`
          }
        }
      },
      hint: {
        ru: `Начни с поворота и иди назад. Придумай странную находку — «в холодильнике чужой торт с моим именем» — и спроси: какая мелочь могла заранее на неё намекнуть? Это и будет трещина.`,
        en: `Start with the turn and work backwards. Invent a strange discovery — “a stranger’s cake in our fridge with my name on it” — and ask: what small thing could have hinted at it earlier? That’s your crack.`
      },
      improve: {
        ru: `Перечитай последнюю строку. Если вопрос, который она открывает, герой мог бы легко решить сам — позвонить, спросить, заглянуть, — обрыв нечестный. Перепиши строку так, чтобы ответа не знал и герой.`,
        en: `Reread your last line. If the character could easily settle the question themselves — make a call, ask, take a look — the cut is dishonest. Rewrite the line so that the character doesn’t know the answer either.`
      },
      selfCheck: [
        { ru: `Начало действительно обычное, без спецэффектов?`, en: `Is the opening genuinely ordinary, with no special effects?` },
        { ru: `Трещина — маленькая деталь, а не сразу катастрофа?`, en: `Is the crack a small detail rather than an instant disaster?` },
        { ru: `Поворот можно объяснить задним числом через трещину?`, en: `Can the turn be explained in hindsight by the crack?` },
        { ru: `Последняя строка открывает вопрос, ответа на который не знает и герой?`, en: `Does the last line open a question the character can’t answer either?` },
        { ru: `Загадка в финале настоящая и не отменится через строчку?`, en: `Is the mystery at the end real, rather than something cancelled a line later?` }
      ],
      discuss: {
        ru: `Вспомни книгу или сериал, где клиффхэнгер тебя разозлил. Чем он отличался от тех, после которых хотелось продолжать?`,
        en: `Think of a book or series where a cliffhanger annoyed you. How was it different from the ones that made you want to carry on?`
      },
      reflect: {
        ru: `Что ты придумал первым: начало, поворот или последнюю строку? Помог ли такой порядок?`,
        en: `What did you come up with first: the opening, the turn or the last line? Did that order help?`
      },
      transfer: {
        ru: `Поворот и последняя строка нужны итоговому рассказу маршрута: в двух редакциях проверь, где он сильнее — с открытым или закрытым финалом. В эссе обрыв обычно мешает: читатель ждёт ответа, а не загадки. Но «трещина» в первом абзаце работает и там: мелочь, из-за которой хочется читать дальше.`,
        en: `The turn and the last line matter for this route’s final story: across your two drafts, test whether it is stronger with an open or a closed ending. In an essay a cliffhanger usually gets in the way: readers expect an answer, not a mystery. But a “crack” in the first paragraph works there too — a small thing that keeps people reading.`
      },
      teacher: {
        note: {
          ru: `Прежде чем автор прочитает финал, попросите группу угадать поворот по трещине. Угадали все — трещина слишком громкая; никто не видит связи даже после финала — поворот нелогичен. Отдельно разберите нечестные обрывы: «это был сон», розыгрыш, ложная тревога. Клиффхэнгер — часть композиции, а не трюк в конце: он работает, только если сцена к нему подготовлена.`,
          en: `Before the author reads the ending, ask the group to guess the turn from the crack. If everyone guesses, the crack is too loud; if nobody sees the link even after the ending, the turn isn’t logical. Look separately at dishonest cuts: “it was all a dream”, a prank, a false alarm. A cliffhanger is part of the structure, not a trick tacked on at the end: it works only if the scene has prepared for it.`
        },
        source: ['hse-spb', 'yw', 'wx', 'original']
      }
    },

    {
      id: 'story-5',
      route: 'story',
      n: 5,
      minutes: 10,
      skills: ['structure'],
      genres: ['story', 'statement', 'free'],
      title: { ru: `Одна история — две структуры: хронологическая и мозаичная`, en: `One story, two structures: chronological and mosaic` },
      learn: {
        ru: `Выстраивать одни и те же эпизоды по времени и по образу — и выбирать порядок, который лучше служит истории.`,
        en: `Arrange the same moments by time and by image — and choose the order that serves the story best.`
      },
      hook: {
        ru: `Порядок частей — это тоже смысл. Пять моментов, выстроенных по часам, рассказывают, *что* случилось. Те же пять, собранные вокруг одного образа, рассказывают, *что это значило*. Писатель не обязан держаться первого порядка только потому, что так было в жизни.`,
        en: `The order of the parts is meaning too. Five moments lined up by the clock tell you *what* happened. The same five gathered around one image tell you *what it meant*. A writer doesn’t have to stick to the first order just because that’s how it happened.`
      },
      technique: {
        name: { ru: `Хронология и мозаика`, en: `Timeline and mosaic` },
        text: {
          ru: `**Хронологическая** структура идёт по времени: сначала, потом, в конце. Она ясная и надёжная, в ней легко следить за причинами и следствиями.

**Мозаичная** собирает фрагменты по другому принципу: вокруг предмета, образа, звука, повторяющейся фразы. Время прыгает, но читатель держится за общую нить. Мозаика хороша, когда важны не сами события, а связь между ними.

Ни одна не лучше. Но мозаике нужны связки — короткие строки или повторяющиеся детали, по которым читатель переходит от куска к куску. Без них это не мозаика, а беспорядок.`,
          en: `A **chronological** structure follows time: first, then, finally. It is clear and dependable, and cause and effect are easy to follow.

A **mosaic** groups fragments by something else: an object, an image, a sound, a repeated phrase. Time jumps about, but the reader holds on to a shared thread. A mosaic works when what matters is not the events themselves but the connection between them.

Neither is better. But a mosaic needs links — short lines or repeated details that carry the reader from piece to piece. Without them it isn’t a mosaic; it’s a mess.`
        }
      },
      example: {
        before: {
          ru: `Когда Алуа было восемь, ей подарили велосипед со сломанным звонком. В десять она научилась ездить без рук. В двенадцать велосипед украли у магазина, пока она покупала хлеб. Два года она ходила пешком. А в четырнадцать увидела свой велосипед на Барахолке: новый хозяин починил звонок.`,
          en: `When Alua was eight, she was given a bike with a broken bell. At ten she learned to ride no-hands. At twelve the bike was stolen outside a shop while she was buying bread. For two years she walked everywhere. Then at fourteen she spotted her bike at the Barakholka flea market: the new owner had fixed the bell.`
        },
        after: {
          ru: `Звонок на Барахолке работал. Продавец дзынькнул им дважды, и Алуа сразу узнала царапину на раме — ту, что осталась с тех пор, как она в десять лет училась ездить без рук.

Звонок не работал никогда. Она кричала «Посторонись!» сама, на весь двор, и это было лучше любого звонка.

Звонка не было слышно и в тот день у магазина: велосипед увели тихо, пока она выбирала хлеб.

Два года она слушала улицу пешком.

Теперь звонок работал, и это был чужой звук.`,
          en: `At the Barakholka the bell worked. The seller rang it twice, and Alua knew the scratch on the frame at once — the one from when she was ten and learning to ride no-hands.

The bell had never worked. She used to shout “Coming through!” herself, right across the courtyard, and that was better than any bell.

There was no bell to hear outside the shop either, the day the bike was quietly wheeled away while she chose a loaf.

For two years she listened to the street on foot.

Now the bell worked, and it was someone else’s sound.`
        },
        changes: [
          {
            ru: `Хронологическая версия ясная: понятно, что за чем. Но она сообщает события, а не их смысл.`,
            en: `The chronological version is clear: you know what happened when. But it reports events, not what they meant.`
          },
          {
            ru: `Мозаика начинается с конца — с Барахолки — и возвращается в прошлое. Нить — звонок: каждый фрагмент о нём, даже когда его не слышно.`,
            en: `The mosaic starts at the end — the Barakholka — and goes back into the past. The thread is the bell: every fragment is about it, even when it can’t be heard.`
          },
          {
            ru: `Связки — слово «звонок» в начале фрагментов и царапина, которая соединяет десять и четырнадцать лет.`,
            en: `The links are the word “bell” near the start of each fragment and the scratch that connects ten and fourteen.`
          },
          {
            ru: `Последняя строка появилась только в мозаике: «чужой звук» — смысл всей истории, и объяснять его не пришлось.`,
            en: `The last line only appeared in the mosaic: “someone else’s sound” is what the whole story means, and nobody had to explain it.`
          }
        ]
      },
      exercise: {
        type: 'reorder',
        prompt: {
          ru: `Придумай историю — можно выдуманную — и запиши пять её моментов, по 1–3 предложения. Сначала расставь их по времени. Потом пересобери как мозаику: вокруг одного предмета, звука или образа.`,
          en: `Come up with a story — invented is fine — and write down five moments from it, 1–3 sentences each. First put them in time order. Then rebuild them as a mosaic, around one object, sound or image.`
        },
        config: {
          own: 5,
          placeholder: { ru: `Один момент: где, кто, что происходит`, en: `One moment: where, who, what’s happening` },
          then: {
            ru: `Выбери порядок, который лучше служит истории, и собери текст целиком. Добавь связки: одну-две строки между фрагментами или деталь, которая повторяется и ведёт читателя от куска к куску.`,
            en: `Choose the order that serves the story best and put the whole text together. Add links: a line or two between fragments, or a repeated detail that carries the reader from piece to piece.`
          }
        }
      },
      harder: {
        prompt: {
          ru: `Построй мозаику вокруг одного предмета, который есть в каждом фрагменте: ключ, свитер, термос, телефон с трещиной. Пусть в каждом куске он значит немного другое — подарок, улика, помеха, память, — а в последнем значит то, чего не было ни в одном из предыдущих.`,
          en: `Build a mosaic around one object that appears in every fragment: a key, a jumper, a flask, a phone with a cracked screen. Let it mean something slightly different in each piece — a gift, a clue, a nuisance, a memory — and in the last one, something it has meant in none of the others.`
        }
      },
      hint: {
        ru: `Начни с предмета, а не с сюжета. Выбери вещь, у которой есть история: чужой свитер, ключ неизвестно от чего. Спроси: где она была в пять разных моментов жизни героя? Это и есть пять фрагментов.`,
        en: `Start with an object, not a plot. Pick a thing with a history: someone else’s jumper, a key nobody can match to a lock. Ask: where was it at five different moments in the character’s life? Those are your five fragments.`
      },
      improve: {
        ru: `Прочитай мозаику и найди место, где читатель может потеряться во времени. Добавь туда одну опору: возраст, время года или деталь, которая уже встречалась.`,
        en: `Read your mosaic and find the place where the reader could lose track of time. Add one handhold there: an age, a season, or a detail that has already appeared.`
      },
      selfCheck: [
        { ru: `Пять моментов — это конкретные сцены, а не пересказ?`, en: `Are the five moments specific scenes rather than summary?` },
        { ru: `В хронологической версии понятны причины и следствия?`, en: `In the chronological version, are cause and effect clear?` },
        { ru: `В мозаике есть общая нить: предмет, звук, образ или фраза?`, en: `Does the mosaic have a shared thread: an object, a sound, an image or a phrase?` },
        { ru: `Между фрагментами есть связки, и читатель не теряется во времени?`, en: `Are there links between the fragments, so the reader doesn’t lose track of time?` },
        { ru: `Я могу объяснить, какая структура лучше служит этой истории?`, en: `Can I explain which structure serves this story better?` }
      ],
      discuss: {
        ru: `Для какой истории мозаика была бы ошибкой? А хронология?`,
        en: `For what kind of story would a mosaic be a mistake? And a timeline?`
      },
      reflect: {
        ru: `Когда ты переставил фрагменты, смысл истории изменился? Что появилось, а что потерялось?`,
        en: `When you rearranged the fragments, did the meaning of the story change? What appeared, and what was lost?`
      },
      transfer: {
        ru: `Итоговый рассказ маршрута можно собрать любым способом — попробуй во второй редакции другую структуру и сравни. Мозаика часто встречается и в personal statement: эпизоды вокруг одной темы или предмета. Разница в правде: в эссе все фрагменты должны быть реальными, менять можно только порядок.`,
        en: `This route’s final story can be built either way — in your second draft, try the other structure and compare. Mosaics are common in personal statements too: episodes gathered around one theme or object. The difference is truth: in an essay every fragment has to be real; only the order is yours to change.`
      },
      personalAlt: {
        ru: `Если не хочешь брать свою историю, придумай героя или расскажи историю вещи: как одна куртка переходила от хозяина к хозяину.`,
        en: `If you’d rather not use your own story, invent a character, or tell the story of an object: how one jacket passed from owner to owner.`
      },
      teacher: {
        note: {
          ru: `Попросите сохранить хронологический порядок отдельной версией, прежде чем собирать мозаику, — так их легко сравнить. В классе удобно распечатать фрагменты на полосках и переставлять руками. Это последний урок маршрута: предложите собрать итоговый рассказ из героя первого урока, диалога второго и поворота четвёртого, а во второй редакции попробовать другую структуру.`,
          en: `Ask students to save the chronological order as a separate version before building the mosaic, so the two are easy to compare. In class it helps to print the fragments on strips of paper and move them around by hand. This is the last lesson of the route: suggest building the final story from the character in lesson one, the dialogue in lesson two and the turn in lesson four, and trying the other structure in the second draft.`
        },
        source: ['ou-know', 'etw', 'hse-spb', 'original']
      }
    }
  ]);
})();
