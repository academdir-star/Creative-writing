/* «5 минут сегодня» и «Вызов недели» / “5 minutes today” and “Challenge of the week”. */
(function () {
  'use strict';

  SM.addDaily([
    {
      id: 'd01',
      skill: 'ideas',
      prompt: {
        ru: `Запиши десять вопросов о том, что видишь каждый день, но никогда не спрашивал «почему?». Например: почему голуби кивают на ходу? Пока не гугли — сегодня вопросы важнее ответов.`,
        en: `Write down ten questions about things you see every day but have never asked “why?” about. For example: why do pigeons nod when they walk? Don’t google anything yet — today the questions matter more than the answers.`
      },
      twist: {
        ru: `Выбери один вопрос и напиши на него неправильный, но очень убедительный ответ — тоном энциклопедии.`,
        en: `Pick one question and write a wrong but utterly convincing answer, in the tone of a reference book.`
      }
    },
    {
      id: 'd02',
      skill: 'observation',
      prompt: {
        ru: `Подойди к окну — или вспомни последнее окно, у которого стоял. Запиши пять вещей, которые двигаются, и одну, которая стоит неподвижно, хотя должна бы двигаться.`,
        en: `Go to a window — or think of the last window you stood at. Write down five things that are moving and one that is perfectly still, though you’d expect it to move.`
      },
      twist: {
        ru: `Опиши этот вид одним предложением так, будто ты прилетел с другой планеты и не знаешь, как что называется.`,
        en: `Describe the view in one sentence as if you’d just arrived from another planet and didn’t know what anything was called.`
      }
    },
    {
      id: 'd03',
      skill: 'words',
      prompt: {
        ru: `Напиши пять предложений о том, как разные люди едят, идут, говорят, смотрят и сидят, — не используя эти пять глаголов. Ищи глагол, который сразу показывает, *как*: не «идёт», а «шаркает».`,
        en: `Write five sentences about how different people eat, walk, speak, look and sit — without using those five verbs. Look for a verb that shows *how* straight away: not “walks” but “shuffles”.`
      },
      twist: {
        ru: `Пусть все пять глаголов описывают одного человека — и по ним будет понятно, какой у него сегодня день.`,
        en: `Make all five verbs belong to one person, so that together they tell us what kind of day they’re having.`
      }
    },
    {
      id: 'd04',
      skill: 'scene',
      prompt: {
        ru: `Диалог в шесть реплик: покупатель пришёл в магазин вернуть что-то странное. Только реплики — без «сказал» и пояснений. Пусть по словам будет понятно, кто из двоих упрямее.`,
        en: `A six-line dialogue: a customer has come back to a shop to return something odd. Lines only — no “he said” and no explanations. Let the words alone show which of the two is more stubborn.`
      },
      twist: {
        ru: `Пусть ни один из них ни разу не назовёт то, что возвращают, — но читатель всё равно догадается.`,
        en: `Neither of them may name the thing being returned — but the reader should still work it out.`
      }
    },
    {
      id: 'd05',
      skill: 'rhythm',
      prompt: {
        ru: `Напиши одно предложение не короче сорока слов о чём-то стремительном: погоне, падении, последней минуте перед звонком. Не ставь точку, пока не кончится действие. Потом добавь предложение из трёх слов.`,
        en: `Write one sentence of at least forty words about something fast: a chase, a fall, the last minute before the bell. No full stop until the action is over. Then add a sentence of three words.`
      },
      twist: {
        ru: `Перепиши тот же момент семью короткими предложениями. Какая версия кажется быстрее — и почему?`,
        en: `Rewrite the same moment as seven short sentences. Which version feels faster — and why?`
      }
    },
    {
      id: 'd06',
      skill: 'character',
      prompt: {
        ru: `Опиши человека по его обуви — того, кого видел сегодня, или выдуманного. Три предложения, и читатель должен догадаться, куда этот человек спешит.`,
        en: `Describe someone by their shoes — a person you saw today, or an invented one. Three sentences, and the reader should be able to guess where they’re rushing off to.`
      },
      twist: {
        ru: `Добавь одну деталь, которая противоречит остальным. Не объясняй её.`,
        en: `Add one detail that contradicts the rest. Don’t explain it.`
      }
    },
    {
      id: 'd07',
      skill: 'facts',
      prompt: {
        ru: `Проверь один факт, в который ты верил «просто так»: сколько живут голуби, откуда название твоей улицы, видна ли с Луны Великая Китайская стена. Запиши: что думал, что нашёл и где нашёл.`,
        en: `Check one fact you’ve always believed without checking: how long pigeons live, where your street’s name comes from, whether the Great Wall of China is visible from the Moon. Write down what you thought, what you found and where you found it.`
      },
      twist: {
        ru: `Найди второй, независимый источник. Они совпали? Если нет — кому ты веришь больше и почему?`,
        en: `Find a second, independent source. Do they agree? If not, which do you trust more, and why?`
      }
    },
    {
      id: 'd08',
      skill: 'voice',
      prompt: {
        ru: `Опиши сегодняшнюю погоду тремя голосами: уставшего экскурсовода, пятилетнего ребёнка и диктора вечерних новостей. По одному-два предложения на каждого.`,
        en: `Describe today’s weather in three voices: a weary tour guide, a five-year-old and a newsreader on the evening bulletin. One or two sentences each.`
      },
      twist: {
        ru: `Добавь четвёртый голос — свой. Что в нём есть такого, чего нет у трёх других?`,
        en: `Add a fourth voice — your own. What does it have that the other three don’t?`
      }
    },
    {
      id: 'd09',
      skill: 'editing',
      prompt: {
        ru: `Возьми абзац длиннее пяти предложений — из своего старого текста, учебника или новостей. Сократи его вдвое так, чтобы смысл остался. Считай слова.`,
        en: `Take a paragraph of more than five sentences — from something you’ve written, a textbook or a news article. Cut it in half without losing the meaning. Count the words.`
      },
      twist: {
        ru: `А теперь сократи ещё вдвое. Что пришлось выбросить — и было ли оно по-настоящему нужно?`,
        en: `Now halve it again. What did you have to throw out — and did it really matter?`
      }
    },
    {
      id: 'd10',
      skill: 'structure',
      prompt: {
        ru: `Напиши историю ровно в пятьдесят слов — не сорок девять и не пятьдесят одно. В ней должны быть начало, поворот и конец. Название в счёт не входит.`,
        en: `Write a story of exactly fifty words — not forty-nine, not fifty-one. It needs a beginning, a turn and an ending. The title doesn’t count.`
      },
      twist: {
        ru: `Сделай последнее слово самым важным: если его убрать, история должна потерять смысл.`,
        en: `Make the last word the most important one: take it away and the story should stop making sense.`
      }
    },
    {
      id: 'd11',
      skill: 'argument',
      prompt: {
        ru: `Защити в трёх предложениях то, что все обычно ругают: понедельник, пробки, дождь в выходной, очередь в поликлинике. Одно утверждение, один довод, один конкретный пример.`,
        en: `In three sentences, defend something everybody complains about: Mondays, traffic jams, rain at the weekend, the queue at the doctor’s. One claim, one reason, one concrete example.`
      },
      twist: {
        ru: `Найди самый сильный довод против своей позиции и ответь на него — тоже одним предложением.`,
        en: `Find the strongest argument against your position and answer it — in one sentence too.`
      }
    },
    {
      id: 'd12',
      skill: 'reflection',
      prompt: {
        ru: `Вспомни момент, когда ты изменил мнение — о фильме, еде, правиле, игре. Что именно тебя переубедило? Опиши эту деталь, а не вывод «я понял, что…». Не хочешь о себе — придумай героя, который передумал.`,
        en: `Think of a moment when you changed your mind — about a film, a food, a rule, a game. What exactly did it? Describe that detail, not the conclusion “I realised that…”. Rather not write about yourself? Invent a character who changed their mind.`
      },
      twist: {
        ru: `Напиши два предложения — как думал до и как думаешь после — так, чтобы читатель поверил в оба мнения.`,
        en: `Write two sentences — what you thought before and what you think now — so that a reader could believe both.`
      }
    },
    {
      id: 'd13',
      skill: 'observation',
      prompt: {
        ru: `Закрой глаза на минуту и прислушайся. Выбери один звук и опиши его в трёх предложениях, не называя источник. Читатель должен догадаться сам.`,
        en: `Close your eyes for a minute and listen. Pick one sound and describe it in three sentences without naming what makes it. The reader has to guess.`
      },
      twist: {
        ru: `Опиши этот же звук дважды: так, чтобы он казался тревожным, и так, чтобы он казался уютным.`,
        en: `Describe the same sound twice: once so it seems menacing, once so it seems cosy.`
      }
    },
    {
      id: 'd14',
      skill: 'words',
      prompt: {
        ru: `Возьми штамп — «белый как мел», «как снег на голову» или «сердце ушло в пятки» — и придумай пять свежих замен, которых ты нигде не встречал.`,
        en: `Take a cliché — “as white as a sheet”, “out of the blue” or “my heart was in my mouth” — and come up with five fresh replacements you’ve never seen anywhere.`
      },
      twist: {
        ru: `Вставь лучшую замену в предложение о конкретном человеке в конкретном месте. Она там работает?`,
        en: `Put the best replacement into a sentence about a specific person in a specific place. Does it still work there?`
      }
    },
    {
      id: 'd15',
      skill: 'ideas',
      prompt: {
        ru: `Придумай пять названий рассказов, которых ещё никто не написал. Например: «Бюро находок для потерянных звуков» или «Почему замолчал третий подъезд». Не решай, о чём они, — только названия.`,
        en: `Invent five titles for stories nobody has written yet. For example: “The Lost Property Office for Missing Sounds” or “Why Stairwell Three Went Quiet”. Don’t decide what they’re about — just the titles.`
      },
      twist: {
        ru: `Выбери одно название и напиши первое предложение этого рассказа. Запиши его в тетрадь стартов.`,
        en: `Pick one title and write the story’s first sentence. Add it to your notebook of quick starts.`
      }
    },
    {
      id: 'd16',
      skill: 'scene',
      prompt: {
        ru: `Сцена без слов: двое незнакомцев делят один зонт на остановке. Ни одной реплики — только движения, взгляды и расстояние между ними. 5–7 предложений.`,
        en: `A scene without words: two strangers share one umbrella at a bus stop. Not a single line of dialogue — only movements, glances and the distance between them. 5–7 sentences.`
      },
      twist: {
        ru: `Перепиши сцену так, чтобы к концу стало понятно: они не незнакомцы и когда-то поссорились.`,
        en: `Rewrite it so that by the end we realise they aren’t strangers at all — they once fell out.`
      }
    },
    {
      id: 'd17',
      skill: 'voice',
      prompt: {
        ru: `Расскажи о школьной перемене от лица того, кто всё видит, но ничего не может сказать: часов в коридоре, швабры в углу, пенала, забытого на подоконнике.`,
        en: `Tell the story of a school break from the point of view of something that sees everything but can’t say a word: the clock in the corridor, the mop in the corner, a pencil case left on the windowsill.`
      },
      twist: {
        ru: `Пусть у этого рассказчика будет мнение о людях — и одна тайна, которую знает только он.`,
        en: `Give this narrator opinions about people — and one secret only it knows.`
      }
    },
    {
      id: 'd18',
      skill: 'facts',
      prompt: {
        ru: `Возьми любую вещь со стола и выясни о ней два проверяемых факта: где сделана, из чего, сколько весит. Напиши три предложения: факт, откуда ты это знаешь, что тебя удивило.`,
        en: `Pick up anything on your desk and find out two checkable facts about it: where it was made, what it’s made of, how much it weighs. Write three sentences: the fact, how you know, what surprised you.`
      },
      twist: {
        ru: `Перепиши это как короткую новость для городского сайта: только факты, ни одной оценки.`,
        en: `Rewrite it as a short news item for a local website: facts only, not a single opinion.`
      }
    },
    {
      id: 'd19',
      skill: 'rhythm',
      prompt: {
        ru: `Опиши дождь, снег или ветер пятью предложениями, которые становятся всё короче: в первом около пятнадцати слов, в последнем — одно.`,
        en: `Describe rain, snow or wind in five sentences that keep getting shorter: the first about fifteen words long, the last just one.`
      },
      twist: {
        ru: `Теперь наоборот: от одного слова до пятнадцати. Как изменилось настроение?`,
        en: `Now reverse it: from one word up to fifteen. How has the mood changed?`
      }
    },
    {
      id: 'd20',
      skill: 'argument',
      prompt: {
        ru: `Напиши рецензию в пять предложений на что-то обычное: школьный звонок, лифт в твоём доме, скамейку во дворе, автобусный маршрут. Дай оценку и два довода с конкретными фактами.`,
        en: `Write a five-sentence review of something ordinary: the school bell, the lift in your building, a bench in the courtyard, a bus route. Give a verdict and two reasons backed by concrete facts.`
      },
      twist: {
        ru: `Напиши вторую рецензию с противоположной оценкой — на тех же фактах. Что изменилось, кроме вывода?`,
        en: `Write a second review with the opposite verdict, using the same facts. What changed besides the conclusion?`
      }
    },
    {
      id: 'd21',
      skill: 'editing',
      prompt: {
        ru: `Вот предложение: «Высокий, мрачный, старый дом стоял на тёмной, пустой улице». Оставь не больше одного прилагательного, а остальное передай глаголом или деталью.`,
        en: `Here’s a sentence: “The tall, gloomy, old house stood on the dark, empty street.” Keep one adjective at most, and let a verb or a detail do the rest.`
      },
      twist: {
        ru: `Сделай то же с предложением из своего текста — а потом попробуй совсем без прилагательных.`,
        en: `Do the same with a sentence from your own writing — then try it with no adjectives at all.`
      }
    },
    {
      id: 'd22',
      skill: 'reflection',
      prompt: {
        ru: `Запиши три вещи, которые ты сегодня сделал впервые или не так, как обычно, — даже мелочи: другая дорога, новое слово, другой стул в классе. Изменила ли какая-нибудь из них что-то ещё?`,
        en: `Write down three things you did today for the first time, or differently from usual — even tiny ones: a different route, a new word, another chair in class. Did any of them change anything else?`
      },
      twist: {
        ru: `Завтра нарочно измени одну привычку и запиши, что ты из-за этого заметил.`,
        en: `Tomorrow, change one habit on purpose and note what you noticed because of it.`
      }
    },
    {
      id: 'd23',
      skill: 'observation',
      prompt: {
        ru: `Запиши фразу, которую сегодня случайно услышал — в автобусе, в очереди, в коридоре. Без имён и деталей, по которым можно узнать человека. Придумай, что было сказано до неё и что после.`,
        en: `Write down a phrase you overheard today — on the bus, in a queue, in a corridor. No names, nothing that could identify the speaker. Invent what was said just before it and just after.`
      },
      twist: {
        ru: `Напиши сцену, в которой эта фраза звучит последней и переворачивает весь разговор.`,
        en: `Write a scene in which this phrase comes last and turns the whole conversation upside down.`
      }
    },
    {
      id: 'd24',
      skill: 'structure',
      prompt: {
        ru: `Перескажи известную сказку — «Золушку», «Колобка», историю про Алдара-Косе — в пяти предложениях, начиная с конца. Пусть читателю всё равно будет интересно, как до этого дошло.`,
        en: `Retell a well-known tale — Cinderella, the Gingerbread Man, a story about Aldar Kose — in five sentences, starting from the end. Make the reader still want to know how it got there.`
      },
      twist: {
        ru: `Теперь начни с середины — с момента, когда всё уже пошло не так.`,
        en: `Now start in the middle — at the moment when everything has already gone wrong.`
      }
    },
    {
      id: 'd25',
      skill: 'voice',
      prompt: {
        ru: `Напиши короткое письмо вещи, которая тебя подвела: зарядке, зонту, шнурку, будильнику. Обращайся к ней серьёзно и вежливо, как к коллеге.`,
        en: `Write a short letter to an object that let you down: a charger, an umbrella, a shoelace, an alarm clock. Address it seriously and politely, as you would a colleague.`
      },
      twist: {
        ru: `Напиши ответ от лица вещи. У неё, скорее всего, своя версия событий.`,
        en: `Write its reply. It probably has its own version of events.`
      }
    },
    {
      id: 'd26',
      skill: 'words',
      prompt: {
        ru: `Расставь по силе: «недоволен, раздражён, зол, в ярости, взбешён». Для каждого слова придумай ситуацию, в которой подходит только оно.`,
        en: `Rank these by strength: “annoyed, irritated, cross, furious, livid”. For each word, invent a situation where only that word will do.`
      },
      twist: {
        ru: `Найди слово — русское, казахское, английское или из любого языка, который ты знаешь, — которое трудно перевести. Объясни его в трёх предложениях через пример.`,
        en: `Find a word — in English, Russian, Kazakh or any language you know — that is hard to translate. Explain it in three sentences through an example.`
      }
    },
    {
      id: 'd27',
      skill: 'character',
      prompt: {
        ru: `Придумай персонажа по содержимому его карманов или рюкзака: пять предметов, ни одного объяснения. Кто он? Запиши догадку одним предложением.`,
        en: `Invent a character through what’s in their pockets or rucksack: five objects, no explanations. Who are they? Write your guess in one sentence.`
      },
      twist: {
        ru: `Добавь шестой предмет, который совсем не вяжется с остальными, — и придумай, как он туда попал.`,
        en: `Add a sixth object that doesn’t fit at all — and work out how it got there.`
      }
    },
    {
      id: 'd28',
      skill: 'facts',
      prompt: {
        ru: `Найди на упаковке, в рекламе или на вывеске громкое утверждение: «лучший в городе», «100% натуральный», «рекомендуют врачи». Напиши, что нужно проверить, чтобы узнать, правда ли это.`,
        en: `Find a bold claim on packaging, an advert or a shop sign: “the best in town”, “100% natural”, “recommended by doctors”. Write down what you would need to check to find out whether it’s true.`
      },
      twist: {
        ru: `Перепиши утверждение так, чтобы оно стало честным и проверяемым. Оно стало скучнее?`,
        en: `Rewrite the claim so it’s honest and checkable. Is it more boring now?`
      }
    },
    {
      id: 'd29',
      skill: 'scene',
      prompt: {
        ru: `Шесть реплик: один человек хочет уйти, другой — чтобы он остался. Ни один не говорит об этом прямо. Между репликами можно добавить по одному действию.`,
        en: `Six lines of dialogue: one person wants to leave, the other wants them to stay. Neither says so directly. You may add one action between lines.`
      },
      twist: {
        ru: `Пусть весь разговор идёт о чём-то постороннем — о погоде, рецепте или номере автобуса.`,
        en: `Make the whole conversation about something else entirely — the weather, a recipe, a bus number.`
      }
    },
    {
      id: 'd30',
      skill: 'ideas',
      prompt: {
        ru: `Составь список из семи «Что если…» про свой город. Что если метро ходило бы только ночью? Что если тополя получили право голоса? Чем абсурднее, тем лучше.`,
        en: `Make a list of seven “What if…” questions about your town or city. What if the metro only ran at night? What if the poplars got the vote? The more absurd, the better.`
      },
      twist: {
        ru: `Выбери один пункт и в пяти предложениях напиши, как об этом узнал первый человек в городе.`,
        en: `Choose one and write, in five sentences, how the first person in the city found out.`
      }
    },
    {
      id: 'd31',
      skill: 'rhythm',
      prompt: {
        ru: `Напиши объявление для подъезда — о пропавшей кошке, о собрании жильцов, о тишине после десяти, — в котором одна фраза возвращается три раза, как припев.`,
        en: `Write a notice for the stairwell — about a missing cat, a residents’ meeting, quiet after ten — in which one phrase comes back three times, like a chorus.`
      },
      twist: {
        ru: `Сделай так, чтобы с каждым повтором припев значил немного другое.`,
        en: `Make the chorus mean something slightly different each time it returns.`
      }
    },
    {
      id: 'd32',
      skill: 'argument',
      prompt: {
        ru: `Сформулируй одно спорное утверждение — о школе, книгах, городе или играх — и напиши один довод «за» и один «против». Без «все знают» и «очевидно».`,
        en: `State one debatable claim — about school, books, the city or games — and write one argument for it and one against. No “everyone knows” and no “obviously”.`
      },
      twist: {
        ru: `Реши, какой довод сильнее, и объясни почему — одним предложением. Передумать можно.`,
        en: `Decide which argument is stronger and explain why in one sentence. Changing your mind is allowed.`
      }
    },
    {
      id: 'd33',
      skill: 'reflection',
      prompt: {
        ru: `Вспомни навык, которому ты научился не на уроке: заваривать чай, чинить велосипед, играть в тогыз кумалак, собирать кубик Рубика. Как ты понял, что уже умеешь? Опиши этот момент.`,
        en: `Think of a skill you learned outside lessons: making tea properly, fixing a bike, playing togyz kumalak, solving a Rubik’s cube. How did you know you’d got it? Describe that moment.`
      },
      twist: {
        ru: `Напиши инструкцию для новичка в пяти шагах — с одной ошибкой, которую ты сам делал вначале.`,
        en: `Write a five-step guide for a beginner — including one mistake you made yourself at the start.`
      }
    },
    {
      id: 'd34',
      skill: 'editing',
      prompt: {
        ru: `Найди в любом своём тексте слова-паразиты: «очень», «просто», «реально», «как бы», «вообще». Вычеркни все и перечитай. Где стало лучше, а где что-то потерялось?`,
        en: `Find the filler words in any of your texts: “very”, “just”, “really”, “kind of”, “actually”. Cross them all out and reread. Where is it better — and where did something get lost?`
      },
      twist: {
        ru: `Там, где «очень» было нужно, замени его одним точным словом: не «очень большой», а…`,
        en: `Where “very” was doing real work, swap it for one precise word: not “very big” but…`
      }
    },
    {
      id: 'd35',
      skill: 'voice',
      prompt: {
        ru: `Опиши улицу глазами того, кто видит её впервые: туриста из далёкой страны, кота, который первый раз вышел из подъезда, курьера в первый рабочий день.`,
        en: `Describe a street through the eyes of someone seeing it for the first time: a tourist from far away, a cat stepping out of the building for the first time, a courier on their first day.`
      },
      twist: {
        ru: `Пусть этот наблюдатель в чём-то одном ошибается — и именно поэтому кажется живым.`,
        en: `Let this observer get one thing wrong — which is exactly what makes them feel real.`
      }
    },
    {
      id: 'd36',
      skill: 'structure',
      prompt: {
        ru: `Напиши первые предложения трёх разных историй. Каждое должно заставить читателя задать вопрос. Никаких будильников и «это был обычный день».`,
        en: `Write the first sentences of three different stories. Each should make the reader ask a question. No alarm clocks and no “it was an ordinary day”.`
      },
      twist: {
        ru: `Для одной из историй напиши последнее предложение, а середину пропусти. Сохрани всё в тетрадь стартов.`,
        en: `For one of them, write the last sentence and skip the middle. Save everything in your notebook of quick starts.`
      }
    },
    {
      id: 'd37',
      skill: 'observation',
      prompt: {
        ru: `Выбери один цвет и найди вокруг семь его оттенков. Называй каждый не прилагательным, а тем, где ты его увидел: «зелёный, как крышка от термоса».`,
        en: `Choose one colour and find seven shades of it around you. Name each one not with an adjective but by where you saw it: “the green of a thermos lid”.`
      },
      twist: {
        ru: `Опиши одно место, используя как детали только эти семь оттенков.`,
        en: `Describe one place using only those seven shades as your details.`
      }
    },
    {
      id: 'd38',
      skill: 'character',
      prompt: {
        ru: `Выдуманный человек ждёт важного звонка. Опиши это ожидание только через то, что он делает руками. Шесть предложений, ни одного названного чувства.`,
        en: `An invented character is waiting for an important phone call. Describe the wait only through what they do with their hands. Six sentences, not a single named emotion.`
      },
      twist: {
        ru: `Звонок наконец раздаётся. Напиши ещё одно предложение — тоже без чувств, но так, чтобы стало понятно, какие новости.`,
        en: `The phone finally rings. Write one more sentence — still no named feelings — that tells us what kind of news it is.`
      }
    },
    {
      id: 'd39',
      skill: 'words',
      prompt: {
        ru: `Опиши вкус чего-то совсем обычного — хлеба, воды из-под крана, зелёного яблока — так, чтобы читатель его почувствовал. Без слов «вкусный» и «невкусный».`,
        en: `Describe the taste of something completely ordinary — bread, tap water, a green apple — so the reader can taste it. No “tasty”, “delicious” or “disgusting”.`
      },
      twist: {
        ru: `Опиши этот вкус человеку, который никогда его не пробовал, — через то, что он наверняка знает.`,
        en: `Describe the taste to someone who has never tried it, using things they are sure to know.`
      }
    },
    {
      id: 'd40',
      skill: 'scene',
      prompt: {
        ru: `Сцена в очереди — на кассе, к банкомату, за шаурмой. За 6–8 предложений что-то должно измениться: кто-то влез без очереди, закончился товар, погас свет.`,
        en: `A scene in a queue — at a till, a cash machine, a kebab stand. In 6–8 sentences something must change: someone pushes in, something sells out, the lights go off.`
      },
      twist: {
        ru: `Расскажи эту сцену от лица того, кто стоит последним и видит всех только со спины.`,
        en: `Tell it from the point of view of the person at the very back, who sees everyone only from behind.`
      }
    },
    {
      id: 'd41',
      skill: 'ideas',
      prompt: {
        ru: `Одно предложение, в котором есть время года, запах и секрет. Не больше тридцати слов. Попробуй три варианта и оставь лучший.`,
        en: `One sentence that contains a season, a smell and a secret. No more than thirty words. Try three versions and keep the best.`
      },
      twist: {
        ru: `Добавь в предложение имя и число — и не дай ему стать длиннее.`,
        en: `Add a name and a number to the sentence — without making it any longer.`
      }
    },
    {
      id: 'd42',
      skill: 'character',
      prompt: {
        ru: `Придумай человека с одной странной, но безобидной привычкой: он здоровается с лифтом, считает ступеньки, носит в кармане каштан. Опиши привычку — и единственный день, когда он её нарушил.`,
        en: `Invent a person with one odd but harmless habit: they say hello to the lift, count the stairs, carry a conker in their pocket. Describe the habit — and the one day they broke it.`
      },
      twist: {
        ru: `Не объясняй, почему он её нарушил. Пусть причину выдаст одна деталь.`,
        en: `Don’t explain why they broke it. Let one detail give the reason away.`
      }
    }
  ]);

  SM.addWeekly([
    {
      id: 'w01',
      title: { ru: `Одно место каждый день`, en: `One place, every day` },
      brief: {
        ru: `Выбери место, где бываешь каждый день: остановку, школьное крыльцо, вид из окна, угол двора. Неделю наблюдай за ним по пять минут — и увидишь, что «одно и то же» каждый день разное.`,
        en: `Choose a place you pass through every day: a bus stop, the school steps, the view from a window, a corner of the courtyard. Watch it for five minutes a day for a week, and you’ll find that “the same old place” is different every day.`
      },
      steps: [
        { ru: `Дни 1–2: записывай по десять деталей — списком, без предложений. Хотя бы одна должна быть звуком или запахом.`, en: `Days 1–2: note down ten details a day — as a list, no sentences. At least one should be a sound or a smell.` },
        { ru: `Дни 3–4: отмечай только то, что изменилось со вчера: люди, свет, погода, мусор, объявления.`, en: `Days 3–4: note only what has changed since yesterday: people, light, weather, litter, notices.` },
        { ru: `День 5: найди человека, животное или предмет, который бывает здесь каждый день, и опиши его тремя предложениями.`, en: `Day 5: find a person, animal or object that is there every day, and describe it in three sentences.` },
        { ru: `Дни 6–7: собери из заметок текст на 200–300 слов «Одно место, семь дней». Начни с самой неожиданной детали.`, en: `Days 6–7: turn your notes into a 200–300-word piece, “One place, seven days”. Open with the most unexpected detail.` }
      ],
      share: {
        ru: `По желанию: покажи преподавателю итоговый текст — или только список деталей, если не хочешь раскрывать, где именно бываешь. Людей описывай так, чтобы их нельзя было узнать.`,
        en: `Optional: show your teacher the final piece — or just the list of details, if you’d rather not reveal where you go. Describe people so they can’t be identified.`
      }
    },
    {
      id: 'w02',
      title: { ru: `Коллекция голосов`, en: `A collection of voices` },
      brief: {
        ru: `Неделю собирай фразы, услышанные вокруг: в транспорте, на базаре, в очереди, на переменах. Живая речь учит писать диалог лучше любого учебника: в ней есть обрывы, повторы и неожиданные слова.`,
        en: `For a week, collect phrases you hear around you: on public transport, at the market, in queues, between lessons. Real speech teaches dialogue better than any textbook: it’s full of broken-off sentences, repetitions and unexpected words.`
      },
      steps: [
        { ru: `Каждый день записывай хотя бы две фразы — дословно, но без имён и деталей, по которым можно узнать человека.`, en: `Every day, write down at least two phrases — word for word, but with no names or details that could identify anyone.` },
        { ru: `Рядом с каждой пометь свою догадку: кто мог это сказать, где и в каком настроении.`, en: `Next to each one, note your guess: who might have said it, where, and in what mood.` },
        { ru: `К концу недели выбери три фразы от совсем разных людей.`, en: `By the end of the week, choose three phrases from completely different people.` },
        { ru: `Напиши сцену до 250 слов, в которой все три фразы звучат в одном разговоре и не выглядят чужими.`, en: `Write a scene of up to 250 words in which all three phrases turn up in one conversation and don’t sound borrowed.` }
      ],
      share: {
        ru: `По желанию: покажи только итоговую сцену. Сам список фраз оставь себе — это чужие слова, и публиковать их не нужно.`,
        en: `Optional: show only the finished scene. Keep the list of phrases to yourself — they are other people’s words and don’t need publishing.`
      }
    },
    {
      id: 'w03',
      title: { ru: `История по предложению в день`, en: `A story, one sentence a day` },
      brief: {
        ru: `Одна история, семь дней, одно предложение в день. Возвращаться и исправлять вчерашнее нельзя — только двигаться дальше, как в сериале, который пишется на ходу.`,
        en: `One story, seven days, one sentence a day. No going back to fix yesterday’s sentence — only forward, like a series being written as it airs.`
      },
      steps: [
        { ru: `День 1: первое предложение — действие, которое уже идёт. В нём есть герой и место.`, en: `Day 1: the first sentence is an action already under way. It has a character and a place.` },
        { ru: `Дни 2–5: по одному предложению. Хотя бы одно из них должно всё усложнить.`, en: `Days 2–5: one sentence each. At least one of them must make things more complicated.` },
        { ru: `День 6: поворот — то, чего не ожидал ни герой, ни ты сам.`, en: `Day 6: the turn — something neither the character nor you saw coming.` },
        { ru: `День 7: последнее предложение. Перечитай историю целиком и дай ей название.`, en: `Day 7: the last sentence. Read the whole story through and give it a title.` }
      ],
      share: {
        ru: `По желанию: покажи все семь предложений подряд и напиши, какое из них далось труднее всего.`,
        en: `Optional: show all seven sentences together and say which one was hardest to write.`
      }
    },
    {
      id: 'w04',
      title: { ru: `Рецензия на то, что никто не рецензирует`, en: `A review of something nobody reviews` },
      brief: {
        ru: `Рецензии пишут на фильмы и рестораны. А кто оценит школьный звонок, городскую скамейку, приложение с расписанием автобусов или новый вкус чипсов? Ты — честно и с фактами.`,
        en: `People review films and restaurants. But who reviews the school bell, a park bench, the bus timetable app or a new crisp flavour? You do — honestly, and with facts.`
      },
      steps: [
        { ru: `Выбери объект — вещь, место или сервис, который знают многие. Запиши, почему именно его.`, en: `Choose your subject — a thing, place or service lots of people know. Note why you picked it.` },
        { ru: `Три дня собирай факты: как он устроен, сколько стоит, кто им пользуется. Спроси мнение двух-трёх человек.`, en: `Spend three days gathering facts: how it works, what it costs, who uses it. Ask two or three people what they think.` },
        { ru: `Сформулируй оценку одной фразой и подбери три довода — каждый с конкретным фактом или деталью.`, en: `Put your verdict in one sentence and find three reasons, each backed by a concrete fact or detail.` },
        { ru: `Напиши рецензию на 250–350 слов. Юмор можно, выдумки нельзя: всё должно проверяться.`, en: `Write a 250–350-word review. Humour is welcome, invention isn’t: everything must be checkable.` },
        { ru: `Перечитай и отметь, где ты сообщаешь факт, а где оцениваешь. Не перепутал ли одно с другим?`, en: `Reread it and mark where you state a fact and where you give an opinion. Have you mixed them up anywhere?` }
      ],
      share: {
        ru: `По желанию: покажи рецензию вместе со списком фактов, на которые она опирается.`,
        en: `Optional: show the review together with the list of facts it rests on.`
      }
    },
    {
      id: 'w05',
      title: { ru: `Сказка как репортаж`, en: `A fairy tale as reportage` },
      brief: {
        ru: `Что если бы о Золушке, трёх поросятах или Репке написал журналист, оказавшийся на месте событий? Неделя, чтобы перенести сказку в жанр репортажа — с очевидцами, деталями и сдержанным тоном.`,
        en: `What if a journalist had been on the scene for Cinderella, the Three Little Pigs or the Giant Turnip? A week to move a fairy tale into reportage — with witnesses, details and a restrained tone.`
      },
      steps: [
        { ru: `Выбери сказку и выпиши её «факты»: кто, где, когда, что случилось, чем кончилось.`, en: `Choose a tale and list its “facts”: who, where, when, what happened, how it ended.` },
        { ru: `Придумай двух-трёх очевидцев — соседа, торговку, стражника — и их короткие реплики для цитат.`, en: `Invent two or three witnesses — a neighbour, a market trader, a guard — and a short quote from each.` },
        { ru: `Напиши первый абзац-сцену: репортёр на месте, одна точная деталь, никаких «жили-были».`, en: `Write an opening scene paragraph: the reporter on the spot, one precise detail, no “once upon a time”.` },
        { ru: `Допиши репортаж на 300–400 слов по схеме «сцена → контекст → что это значит для жителей».`, en: `Finish a 300–400-word report following “scene → context → what it means for local people”.` },
        { ru: `Проверь тон: нет ли слов «волшебный», «прекрасный», «ужасный»? Репортёр показывает, а не восхищается.`, en: `Check the tone: any “magical”, “beautiful”, “terrible”? A reporter shows; they don’t gush.` }
      ],
      share: {
        ru: `По желанию: покажи репортаж и назови деталь, которая делает его похожим на настоящую новость.`,
        en: `Optional: show your report and point out the detail that makes it sound like real news.`
      }
    },
    {
      id: 'w06',
      title: { ru: `Сцена без единого слова`, en: `A scene with no words spoken` },
      brief: {
        ru: `Неделя тренировки молчания: сцена, в которой люди понимают друг друга (или не понимают), не произнося ни слова. Всё держится на жестах, предметах, паузах и расстоянии.`,
        en: `A week of practising silence: a scene where people understand each other (or don’t) without saying a word. Everything rests on gestures, objects, pauses and distance.`
      },
      steps: [
        { ru: `Понаблюдай, как люди общаются без слов: жесты в очереди, взгляды в транспорте, знаки через окно. Запиши пять наблюдений без узнаваемых деталей.`, en: `Watch how people communicate without words: gestures in a queue, glances on the bus, signals through a window. Note five observations, with nothing that identifies anyone.` },
        { ru: `Придумай ситуацию для двух персонажей, которым есть что сказать, но они молчат: соседи по парте после ссоры, двое у сломанного автомата, продавец и покупатель без общего языка.`, en: `Invent a situation for two characters who have plenty to say but stay silent: deskmates after a row, two people at a broken vending machine, a seller and a buyer with no language in common.` },
        { ru: `Напиши сцену на 200–300 слов без единой реплики.`, en: `Write a 200–300-word scene without a single line of dialogue.` },
        { ru: `Дай прочитать кому-нибудь или перечитай через день: понятно ли, что между ними произошло?`, en: `Let someone read it, or reread it a day later: is it clear what happened between them?` }
      ],
      share: {
        ru: `По желанию: покажи сцену и одно наблюдение из первого шага, которое помогло её написать.`,
        en: `Optional: show the scene and one observation from the first step that helped you write it.`
      }
    },
    {
      id: 'w07',
      title: { ru: `Большой вопрос в 150 словах`, en: `A big question in 150 words` },
      brief: {
        ru: `На большие вопросы обычно отвечают длинно и расплывчато. Попробуй наоборот: ответить на один большой вопрос ровно в 150 слов — с позицией, примером и без общих фраз.`,
        en: `Big questions usually get long, vague answers. Try the opposite: answer one big question in exactly 150 words — with a position, an example and no empty phrases.`
      },
      steps: [
        { ru: `Выбери вопрос: «Можно ли дружить с тем, кто думает иначе?», «Нужны ли оценки?», «Что делает город своим?», «Когда правило стоит нарушить?» — или свой.`, en: `Choose a question: “Can you be friends with someone who thinks differently?”, “Do we need marks?”, “What makes a city feel like yours?”, “When is a rule worth breaking?” — or your own.` },
        { ru: `Два дня записывай всё, что думаешь, без ограничений. Найди одну мысль, с которой можно поспорить.`, en: `For two days, write down everything you think, without limits. Find one idea someone could argue with.` },
        { ru: `Подбери конкретный пример — из жизни, книги, истории или новостей — и проверь факты.`, en: `Find a concrete example — from life, a book, history or the news — and check the facts.` },
        { ru: `Напиши эссе, а потом сократи или дорасти его ровно до 150 слов. Никаких «с древних времён люди…».`, en: `Write the essay, then cut or grow it to exactly 150 words. No “since the dawn of time…”.` }
      ],
      share: {
        ru: `По желанию: покажи эссе вместе с первым длинным черновиком — чтобы было видно, что ты выбросил и почему.`,
        en: `Optional: show the essay alongside your first long draft, so it’s clear what you cut and why.`
      }
    },
    {
      id: 'w08',
      title: { ru: `Карта района в деталях`, en: `A map of the neighbourhood in details` },
      brief: {
        ru: `Обычно карту рисуют улицами. Ты нарисуешь её деталями: трещина на ступеньке, запах пекарни, дерево, которое всегда зацветает первым. Можно выбрать не свой район, а тот, где учишься или часто бываешь.`,
        en: `Maps are usually drawn in streets. You’ll draw yours in details: a crack in a step, the smell from a bakery, the tree that always blossoms first. It needn’t be where you live — it can be where you study or often go.`
      },
      steps: [
        { ru: `Выбери маршрут минут на десять пешком. Каждый день проходи его и записывай три детали, которых раньше не замечал.`, en: `Pick a route that takes about ten minutes on foot. Walk it every day and note three details you’d never noticed before.` },
        { ru: `Хотя бы раз пройди маршрут в обратную сторону или по другой стороне улицы — что изменилось?`, en: `At least once, walk it the other way round or on the other side of the street — what changed?` },
        { ru: `Нарисуй от руки простую схему и отметь на ней детали номерами — без адресов.`, en: `Sketch a simple map by hand and mark the details on it with numbers — no addresses.` },
        { ru: `Напиши к карте легенду: 7–10 подписей по одному-два предложения. Одна подпись может оказаться целой историей.`, en: `Write a key for the map: 7–10 captions of one or two sentences each. One caption may turn out to be a whole story.` }
      ],
      share: {
        ru: `По желанию: покажи карту и легенду. Не указывай точный адрес и не отмечай свой дом — деталей достаточно.`,
        en: `Optional: show the map and its key. Leave out exact addresses and don’t mark your home — the details are enough.`
      }
    },
    {
      id: 'w09',
      title: { ru: `Портрет чужого ремесла`, en: `Portrait of someone’s trade` },
      brief: {
        ru: `У взрослых вокруг тебя есть работа, о которой ты почти ничего не знаешь. Неделя, чтобы расспросить одного человека о его деле и написать короткий портрет — с фактами, сценой и одной точной цитатой.`,
        en: `The adults around you do jobs you know almost nothing about. A week to ask one person about their work and write a short portrait — with facts, a scene and one precise quote.`
      },
      steps: [
        { ru: `Выбери человека — продавца, водителя, библиотекаря, швею, тренера — и спроси разрешения. Скажи, что пишешь учебный текст и покажешь его.`, en: `Choose someone — a shopkeeper, a driver, a librarian, a tailor, a coach — and ask their permission. Explain that it’s for a course and you’ll show them the text.` },
        { ru: `Подготовь семь открытых вопросов, на которые нельзя ответить «да» или «нет». Например: «Что в вашей работе видно только изнутри?»`, en: `Prepare seven open questions that can’t be answered with “yes” or “no”. For example: “What about your job can only be seen from the inside?”` },
        { ru: `Поговори 15–20 минут. Запиши дословно хотя бы две фразы и одну деталь обстановки.`, en: `Talk for 15–20 minutes. Write down at least two phrases word for word and one detail of the surroundings.` },
        { ru: `Напиши портрет на 250–350 слов: начни со сцены, потом факты, в конце — цитата, которая могла прозвучать только от этого человека.`, en: `Write a 250–350-word portrait: open with a scene, then the facts, and end with a quote only this person could have said.` },
        { ru: `Покажи текст герою, сверь факты и цитаты и убери всё, что он попросит убрать.`, en: `Show the text to your interviewee, check the facts and quotes, and remove anything they ask you to.` }
      ],
      share: {
        ru: `По желанию и только с согласия героя: покажи портрет преподавателю. Имя можно изменить.`,
        en: `Optional, and only with your interviewee’s consent: show the portrait to your teacher. You can change the name.`
      }
    },
    {
      id: 'w10',
      title: { ru: `Одна миниатюра — три редакции`, en: `One short piece, three drafts` },
      brief: {
        ru: `Возьми один старт из своей тетради, доведи его до миниатюры и перепиши дважды. Цель недели — не идеальный текст, а видимая разница между версиями.`,
        en: `Take one quick start from your notebook, grow it into a short piece and rewrite it twice. The aim this week isn’t a perfect text; it’s a visible difference between the versions.`
      },
      steps: [
        { ru: `Перечитай тетрадь стартов и выбери тот, к которому хочется вернуться. Не самый «правильный», а самый живой.`, en: `Reread your notebook of quick starts and pick the one you want to go back to. Not the most “correct” — the most alive.` },
        { ru: `Напиши черновик на 200–300 слов за один присест, ничего не исправляя.`, en: `Write a 200–300-word draft in one sitting, without correcting anything.` },
        { ru: `Первая редакция — радар на штампы и начало: замени готовые выражения тем, что было на самом деле, и проверь, начинается ли текст на ходу.`, en: `First rewrite — clichés and the opening: replace ready-made phrases with what actually happened, and check that the piece starts while things are already moving.` },
        { ru: `Вторая редакция — тон: реши, каким должен быть текст (смешным, тревожным, нежным или другим), и перестрой под него детали, слова и ритм.`, en: `Second rewrite — tone: decide how the piece should feel (funny, anxious, tender or something else) and rework the details, words and rhythm to match.` },
        { ru: `Сохрани все три версии и напиши три-четыре предложения: что изменилось и какая версия тебе ближе.`, en: `Keep all three versions and write three or four sentences: what changed, and which version feels most like yours.` }
      ],
      share: {
        ru: `По желанию: покажи все три версии и короткую заметку о правках — путь от черновика к тексту здесь интереснее результата.`,
        en: `Optional: show all three versions with a short note on your changes — here the journey from draft to text matters more than the result.`
      }
    }
  ]);
})();
