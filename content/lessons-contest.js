/* Route: contest — Конкурсы эссе / Essay competitions. */
(function () {
  'use strict';

  SM.addLessons([
    {
      id: 'contest-1',
      route: 'contest',
      n: 1,
      minutes: 9,
      skills: ['argument', 'structure'],
      genres: ['contest'],
      title: { ru: `Разбери задание и критерии`, en: `Decode the brief and criteria` },
      learn: {
        ru: `Разбирать конкурсное задание по словам и критериям, чтобы отвечать на заданный вопрос, а не писать на тему вообще.`,
        en: `Take a competition brief apart word by word and criterion by criterion, so you answer the question asked rather than write about the topic in general.`
      },
      hook: {
        ru: `Жюри читает десятки эссе на одну тему. Многие написаны неплохо — и всё равно отвечают не на тот вопрос: в задании «Что теряет район, когда закрываются маленькие магазины?», а в эссе — «Малый бизнес в современном мире». Пятнадцать минут над заданием экономят вечер над черновиком.`,
        en: `Judges read dozens of essays on the same theme. Plenty are decently written — and still answer the wrong question: the brief asks “What does a neighbourhood lose when its small shops close?” and the essay is about “Small business in the modern world”. Fifteen minutes on the brief saves an evening on the draft.`
      },
      technique: {
        name: { ru: `Шесть вопросов к заданию`, en: `Six questions for the brief` },
        text: {
          ru: `Прежде чем думать о теме, допроси задание:

- **Глаголы.** «Опиши», «порассуждай», «оцени», «опираясь на свой опыт» — это разные работы.
- **Вопрос.** Перепиши его одной строкой своими словами. Если на него нельзя ответить, это пока тема, а не вопрос.
- **Скрытый вопрос.** Что жюри хочет увидеть: например, умеешь ли ты думать сам, а не пересказывать чужие мнения.
- **Критерии.** Явные (лимит, формат, срок, критерии оценки) и подразумеваемые (своя позиция, конкретные примеры).
- **Чего не просят.** Историю вопроса, словарные определения, обзор всех мнений.
- **Читатель.** Взрослый, который сегодня уже прочитал двадцать эссе на ту же тему.`,
          en: `Before you think about the topic, interrogate the brief:

- **Verbs.** “Describe”, “discuss”, “evaluate” and “drawing on your experience” are different jobs.
- **The question.** Rewrite it in one line in your own words. If it can’t be answered, it’s still a topic, not a question.
- **The hidden question.** What do the judges want to see — for instance, whether you can think for yourself rather than repeat other people’s views?
- **Criteria.** Stated (limit, format, deadline, marking criteria) and implied (a position of your own, specific examples).
- **What isn’t asked.** The history of the issue, dictionary definitions, a survey of every opinion.
- **The reader.** An adult who has already read twenty essays on the same theme today.`
        }
      },
      example: {
        before: {
          ru: `Задание: «Правила существуют, чтобы их соблюдать — или нет?» Мой план: напишу, зачем обществу нужны правила, приведу примеры из истории — законы Хаммурапи, правила дорожного движения — и сделаю вывод, что без правил был бы хаос.`,
          en: `Brief: “Rules are there to be followed — or are they?” My plan: explain why society needs rules, give examples from history — Hammurabi’s code, the Highway Code — and conclude that without rules there would be chaos.`
        },
        after: {
          ru: `**Вопрос своими словами:** когда нарушить правило — правильно, а когда нет?
**Глаголы:** «порассуждай» — взвесить обе стороны и прийти к своему выводу; «опираясь на опыт» — нужен мой случай, а не Хаммурапи.
**Скрытый вопрос:** вижу ли я сложность, а не только «правила — это хорошо»?
**Не просят:** историю законов и определение слова «правило».
**Читатель:** уже двадцать раз прочитал про «хаос без правил».`,
          en: `**The question in my words:** when is breaking a rule the right thing to do, and when isn’t it?
**Verbs:** “discuss” — weigh both sides and reach my own conclusion; “drawing on your experience” — I need my own case, not Hammurabi.
**Hidden question:** can I see complexity, not just “rules are good”?
**Not asked:** the history of law, a definition of “rule”.
**Reader:** has already read about “chaos without rules” twenty times.`
        },
        changes: [
          {
            ru: `Тема «правила» превратилась в вопрос, на который можно ответить: «да, если…» или «нет, потому что…».`,
            en: `The topic “rules” became a question you can actually answer: “yes, if…” or “no, because…”.`
          },
          {
            ru: `Слова «опираясь на опыт» поменяли материал: вместо истории законов — собственный случай или наблюдение.`,
            en: `The words “drawing on your experience” changed the material: your own case or observation instead of the history of law.`
          },
          {
            ru: `Появился читатель — и стало видно, какой ответ он уже слышал много раз.`,
            en: `The reader appeared — and it became obvious which answer they have already heard many times.`
          }
        ]
      },
      exercise: {
        type: 'fields',
        prompt: {
          ru: `Разбери задание конкурса по полям:

> «Правила существуют, чтобы их соблюдать — или нет? Порассуждай, опираясь на собственный опыт или наблюдения. Объём — до 800 слов. Жюри оценивает самостоятельность мысли, убедительность примеров и ясность языка».`,
          en: `Decode this competition brief, field by field:

> “Rules are there to be followed — or are they? Discuss, drawing on your own experience or observation. Maximum 800 words. Entries are judged on independent thinking, persuasive examples and clarity of language.”`
        },
        config: {
          fields: [
            {
              id: 'verbs',
              label: { ru: `Ключевые глаголы и указания`, en: `Key verbs and instructions` },
              hint: { ru: `Выпиши каждый и рядом — что он требует сделать. «Порассуждай» — это…`, en: `List each one and note what it asks you to do. “Discuss” means…` }
            },
            {
              id: 'question',
              label: { ru: `Вопрос одной строкой — твоими словами`, en: `The question in one line, in your own words` },
              hint: { ru: `Начни с «Меня спрашивают, …». Проверь: на это можно ответить?`, en: `Start with “I’m being asked…”. Check: can this be answered?` }
            },
            {
              id: 'hidden',
              label: { ru: `Скрытый вопрос`, en: `The hidden question` },
              hint: { ru: `Что жюри хочет узнать о том, как ты думаешь? Это догадка — отметь, на чём она основана.`, en: `What do the judges want to find out about how you think? It’s a guess — note what it’s based on.` }
            },
            {
              id: 'criteria',
              label: { ru: `Критерии: явные и подразумеваемые`, en: `Criteria: stated and implied` },
              hint: { ru: `Явные — в тексте задания. Подразумеваемые — то, без чего эссе не сработает, хотя об этом не написано.`, en: `Stated ones are in the brief. Implied ones are what the essay can’t work without, even though nobody wrote them down.` },
              rows: 3
            },
            {
              id: 'notAsked',
              label: { ru: `Чего здесь НЕ просят`, en: `What is NOT being asked` },
              hint: { ru: `Минимум три пункта. Всё, что хочется добавить «для солидности», сверь с этим списком.`, en: `At least three things. Anything you want to add “to sound serious” — check it against this list.` }
            },
            {
              id: 'reader',
              label: { ru: `Кто читатель и что он уже читал`, en: `Who the reader is and what they’ve already read` },
              hint: { ru: `Какие три ответа он, скорее всего, увидит почти у всех?`, en: `Which three answers is this reader likely to see from almost everyone?` }
            }
          ],
          then: {
            ru: `Напиши план ответа в 2–3 предложениях: на какой вопрос ты отвечаешь, на каком материале (твой случай или наблюдение) и чего точно не будет в твоём эссе.`,
            en: `Write a 2–3 sentence plan: which question you are answering, what material you’ll use (your own case or observation), and what will definitely not be in your essay.`
          }
        }
      },
      harder: {
        type: 'columns',
        prompt: {
          ru: `Вот два задания на одну тему. Для каждого опиши, каким будет эссе: главный вопрос, материал, тон и что придётся выбросить.`,
          en: `Here are two briefs on the same theme. For each, describe what the essay would be like: the main question, the material, the tone, and what you’d have to drop.`
        },
        config: {
          shared: {
            ru: `**А.** «Правило, которое я бы изменил(а). Опиши его и предложи, чем его заменить. До 500 слов».

**Б.** «Может ли нарушение правила быть проявлением ответственности? Приведи примеры из жизни, истории или литературы. До 800 слов».`,
            en: `**A.** “A rule I would change. Describe it and propose what should replace it. Maximum 500 words.”

**B.** “Can breaking a rule be an act of responsibility? Use examples from life, history or literature. Maximum 800 words.”`
          },
          columns: [
            { label: { ru: `Эссе под задание А`, en: `An essay for brief A` }, placeholder: { ru: `Вопрос… Материал… Тон… Выброшу…`, en: `Question… Material… Tone… I’d drop…` } },
            { label: { ru: `Эссе под задание Б`, en: `An essay for brief B` }, placeholder: { ru: `Вопрос… Материал… Тон… Выброшу…`, en: `Question… Material… Tone… I’d drop…` } }
          ],
          then: {
            ru: `Что из твоего материала подойдёт к обоим заданиям? Что работает только для одного — и почему?`,
            en: `Which of your material would suit both briefs? What only works for one of them, and why?`
          }
        }
      },
      hint: {
        ru: `Начни с глаголов: найди в задании каждое слово, которое требует действия, и напиши рядом, что ты будешь делать. Потом перепиши вопрос, начав с «Меня спрашивают, …».`,
        en: `Start with the verbs: find every word in the brief that asks for an action and write next to it what you will actually do. Then rewrite the question, starting with “I’m being asked…”.`
      },
      improve: {
        ru: `Перечитай поле «Вопрос одной строкой». Если в нём нет «когда», «почему», «ли» или «что» — это тема, а не вопрос. Переформулируй так, чтобы на него можно было ответить «да, если…».`,
        en: `Reread your one-line question. If it has no “when”, “why”, “whether” or “what”, it’s a topic, not a question. Rephrase it so it could be answered with “yes, if…”.`
      },
      selfCheck: [
        { ru: `Мой вопрос одной строкой — это вопрос, на который можно ответить, а не тема?`, en: `Is my one-line question something that can be answered, not just a topic?` },
        { ru: `Я разделил критерии на явные и подразумеваемые?`, en: `Did I separate the stated criteria from the implied ones?` },
        { ru: `Я назвал хотя бы три вещи, которых в задании не просят?`, en: `Did I name at least three things the brief doesn’t ask for?` },
        { ru: `Я понимаю, какой материал нужен: мой опыт, наблюдение или источники?`, en: `Do I know what material is needed: my experience, observation or sources?` }
      ],
      discuss: {
        ru: `Может ли блестяще написанное эссе, которое не отвечает на вопрос, оказаться сильнее аккуратного ответа? Как, по-твоему, поступило бы жюри — и почему?`,
        en: `Could a brilliantly written essay that doesn’t answer the question beat a careful answer? What do you think the judges would do, and why?`
      },
      reflect: {
        ru: `Что в задании ты заметил только при втором прочтении?`,
        en: `What did you notice in the brief only on a second reading?`
      },
      transfer: {
        ru: `Разбор задания нужен везде, где у текста есть заказчик: в scholarship essay это вопрос фонда, в personal statement — вопрос университета, в журналистике — редакционное задание. В рассказе для себя задания нет, и это свобода. Но на литературном конкурсе даже рассказ пишут под тему и лимит.`,
        en: `Decoding the brief matters wherever a text has someone asking for it: the funder’s question in a scholarship essay, the university’s in a personal statement, the editor’s commission in journalism. A story written for yourself has no brief — that’s its freedom. But in a writing competition even a story is written to a theme and a limit.`
      },
      teacher: {
        note: {
          ru: `Разберите задание вслух всей группой до того, как кто-то начнёт писать: ученики обычно удивляются, сколько разных вопросов увидели в одной строке. Полезно принести настоящие положения конкурсов — заранее проверьте возраст и условия участия. Следите, чтобы разбор не превратился в «угадай, чего хочет жюри»: цель — понять вопрос, а не подстроиться под чужой вкус. Подразумеваемые критерии — гипотезы, их сверяют с положением конкурса.`,
          en: `Decode the brief aloud as a whole group before anyone starts writing: students are usually surprised by how many different questions they found in one line. Bring in real competition rules too — check age limits and eligibility first. Don’t let this turn into “guess what the judges want”: the aim is to understand the question, not to cater to someone’s taste. Implied criteria are hypotheses to be checked against the competition rules.`
        },
        source: ['original', 'scholarship30', 'yw']
      }
    },

    {
      id: 'contest-2',
      route: 'contest',
      n: 2,
      minutes: 9,
      skills: ['argument', 'ideas'],
      genres: ['contest', 'review'],
      title: { ru: `Позиция и неожиданный угол`, en: `A position and an unexpected angle` },
      learn: {
        ru: `Находить позицию, которую не повторят сорок других участников, и проверять её самым сильным возражением.`,
        en: `Find a position that forty other entrants won’t also take, and test it against the strongest objection.`
      },
      hook: {
        ru: `Первая мысль приходит в голову всем одновременно. На вопрос «Нужна ли школьная форма?» жюри получит сотню эссе про «дисциплину» и «самовыражение». Неожиданный угол не значит странный. Обычно он лежит в пятом–седьмом ответе — когда очевидные уже кончились.`,
        en: `The first idea arrives in everyone’s head at the same time. Ask “Should schools have uniforms?” and the judges get a hundred essays about “discipline” and “self-expression”. An unexpected angle doesn’t mean a weird one. It usually turns up around answer five or seven, once the obvious ones have run out.`
      },
      technique: {
        name: { ru: `Вычеркни первые три`, en: `Cross out the first three` },
        text: {
          ru: `Запиши десять возможных ответов на вопрос — быстро, не оценивая. Первые три почти наверняка очевидны: их напишут и другие. Вычеркни их.

Из оставшихся выбери ответ, который:

- ты можешь подкрепить своим примером или наблюдением;
- немного спорный — с ним можно не согласиться;
- всё ещё отвечает на вопрос задания.

Сформулируй тезис одной фразой, объясни «почему» и найди самое сильное возражение — то, которое сказал бы умный оппонент, а не соломенное чучело. Позиция, выдержавшая возражение, убеждает больше, чем позиция, которая его не заметила.`,
          en: `Write down ten possible answers to the question — fast, without judging. The first three are almost certainly obvious: other entrants will write them too. Cross them out.

From the rest, pick an answer that:

- you can back up with your own example or observation;
- is a little contestable — someone could disagree;
- still answers the question in the brief.

State the claim in one sentence, explain why, and find the strongest objection — the one a clever opponent would raise, not a straw man. A position that has survived an objection persuades more than one that never noticed it.`
        }
      },
      example: {
        before: {
          ru: `Тезис: школьная форма нужна, потому что она дисциплинирует и помогает сосредоточиться на учёбе. Без неё ученики будут соревноваться, у кого одежда дороже.`,
          en: `Claim: school uniform is necessary because it instils discipline and helps pupils concentrate on their studies. Without it, pupils would compete over whose clothes cost more.`
        },
        after: {
          ru: `**Тезис:** форма нужна не ради дисциплины, а ради утра: она снимает одно ежедневное решение, а их у подростка к восьми утра набирается больше, чем кажется.
**Почему:** неделю я засекал, сколько времени уходит на выбор одежды, — в среднем двенадцать минут, и каждый раз со спором.
**Возражение:** форма стирает индивидуальность.
**Ответ:** отчасти да — поэтому форма работает, только если остаётся свобода в деталях: обувь, значки, шарф.`,
          en: `**Claim:** uniform matters not for discipline but for mornings — it removes one daily decision, and by eight a.m. a teenager has made more of those than anyone thinks.
**Why:** for a week I timed how long it took me to choose clothes: twelve minutes on average, and an argument every time.
**Counter-argument:** uniform erases individuality.
**Reply:** partly true — which is why uniform only works if there’s freedom in the details: shoes, badges, a scarf.`
        },
        changes: [
          {
            ru: `Очевидный довод («дисциплина») заменён неожиданным — форма экономит утреннее решение, — но вопрос остался тем же.`,
            en: `The obvious reason (“discipline”) is replaced by an unexpected one — uniform saves a morning decision — yet it still answers the same question.`
          },
          {
            ru: `Довод подкреплён наблюдением, которое автор сделал сам, а не ссылкой на «все знают».`,
            en: `The reason is backed by something the writer observed themselves, not by “everyone knows”.`
          },
          {
            ru: `Возражение сильное и честное, а ответ частично с ним соглашается. Это звучит убедительнее, чем полный разгром оппонента.`,
            en: `The objection is strong and fair, and the reply partly concedes it. That sounds more convincing than demolishing the other side completely.`
          }
        ]
      },
      exercise: {
        type: 'list',
        prompt: {
          ru: `Вопрос конкурса: *«Что мы теряем, когда любой ответ можно найти за десять секунд?»* Запиши десять возможных ответов — быстро, по 20–30 секунд на каждый, не оценивая. Можно взять вместо этого задание из прошлого урока.`,
          en: `Competition question: *“What do we lose when any answer can be found in ten seconds?”* Write ten possible answers — fast, 20–30 seconds each, no judging. You can use the brief from the previous lesson instead.`
        },
        config: {
          count: 10,
          then: {
            ru: `Отложи первые три ответа — скорее всего, они очевидные. Выбери один из оставшихся и напиши: **тезис** (одна фраза, с которой можно спорить), **почему** (2–3 предложения с твоим примером или наблюдением) и **самое сильное возражение**.`,
            en: `Set aside your first three answers — they are probably the obvious ones. Choose one of the rest and write: the **claim** (one sentence someone could argue with), **why** (2–3 sentences with your own example or observation), and the **strongest counter-argument**.`
          }
        }
      },
      harder: {
        type: 'fields',
        prompt: {
          ru: `Построй полную аргументацию для выбранного угла. Два доказательства должны быть разной природы: одно ты видел сам, другое читатель может проверить.`,
          en: `Build a full argument for your chosen angle. Your two pieces of evidence should be of different kinds: one you witnessed yourself, one the reader can check.`
        },
        config: {
          fields: [
            {
              id: 'claim',
              label: { ru: `Тезис`, en: `Claim` },
              hint: { ru: `Одна фраза, с которой можно не согласиться.`, en: `One sentence someone could disagree with.` }
            },
            {
              id: 'observation',
              label: { ru: `Доказательство из наблюдения`, en: `Evidence from observation` },
              hint: { ru: `Что ты видел или сделал сам: где, когда, кто, что именно. Без «все знают».`, en: `What you saw or did yourself: where, when, who, what exactly. No “everybody knows”.` },
              rows: 3
            },
            {
              id: 'source',
              label: { ru: `Проверяемое доказательство`, en: `Checkable evidence` },
              hint: { ru: `Факт, цифра или исследование с источником, который читатель может найти. Не уверен — проверь или не используй.`, en: `A fact, figure or study with a source the reader can find. Not sure? Check it or leave it out.` },
              rows: 3
            },
            {
              id: 'counter',
              label: { ru: `Самое сильное возражение`, en: `The strongest counter-argument` },
              hint: { ru: `Сформулируй так, чтобы оппонент сказал: «Да, именно это я имею в виду».`, en: `Phrase it so your opponent would say: “Yes, that’s exactly my point.”` }
            },
            {
              id: 'reply',
              label: { ru: `Твой ответ`, en: `Your reply` },
              hint: { ru: `Можно частично согласиться: «Это верно, когда…, но…».`, en: `You can partly agree: “That’s true when…, but…”.` },
              rows: 3
            }
          ]
        }
      },
      hint: {
        ru: `Пиши на скорость. Застрял — начни следующий ответ с «А ещё мы теряем…», «Странно, но…» или «Об этом редко говорят, но…». Нелепые ответы тоже записывай: из них часто растёт неожиданный угол.`,
        en: `Go for speed. Stuck? Start the next answer with “We also lose…”, “Oddly enough…” or “Nobody talks about this, but…”. Write the silly answers down too: unexpected angles often grow out of them.`
      },
      improve: {
        ru: `Перечитай возражение. Если с ним легко спорить — оно слишком слабое. Усиль его: как сказал бы человек, который искренне с тобой не согласен? Потом проверь, выдерживает ли твой ответ.`,
        en: `Reread your counter-argument. If it’s easy to knock down, it’s too weak. Strengthen it: how would someone who sincerely disagrees put it? Then check whether your reply still holds.`
      },
      selfCheck: [
        { ru: `Мой тезис можно оспорить — он не очевиден для всех?`, en: `Can my claim be disputed — is it not obvious to everyone?` },
        { ru: `Выбранный угол всё ещё отвечает на вопрос задания?`, en: `Does my chosen angle still answer the question in the brief?` },
        { ru: `Возражение сильное, а не придуманное специально, чтобы его легко опровергнуть?`, en: `Is the counter-argument a strong one, not a weak one set up to be knocked down?` },
        { ru: `У меня есть хотя бы один пример, который я видел сам?`, en: `Do I have at least one example I witnessed myself?` }
      ],
      discuss: {
        ru: `Где граница между неожиданным углом и уходом от вопроса? Приведи пример ответа, который интересен, но уже не про задание.`,
        en: `Where is the line between an unexpected angle and dodging the question? Give an example of an answer that’s interesting but no longer about the brief.`
      },
      reflect: {
        ru: `На каком по счёту ответе стало интересно? Что помогло туда дойти?`,
        en: `At which answer did it start getting interesting? What helped you get there?`
      },
      transfer: {
        ru: `Неожиданный угол нужен не только на конкурсе. В рецензии это вопрос, который не задали другие критики; в personal statement — непривычный ракурс на обычный опыт: не «я люблю читать», а «я читаю инструкции к технике, которой у нас нет». Разница: в эссе о себе угол нельзя придумать — его можно только найти в том, что было.`,
        en: `An unexpected angle isn’t just for competitions. In a review it’s the question other critics didn’t ask; in a personal statement it’s an unusual view of ordinary experience — not “I love reading” but “I read the manuals for appliances we don’t own”. The difference: in an essay about yourself you can’t invent the angle, only find it in what really happened.`
      },
      teacher: {
        note: {
          ru: `Ученики часто боятся спорной позиции: кажется, что за несогласие «снизят». Объясните, что обычно оценивают аргументацию, а не совпадение мнений, — и сверьтесь с положением конкретного конкурса. В группе хорошо работает общий список «первых трёх»: видно, как сильно они совпадают у всех. Следите, чтобы неожиданный угол не превращался в эпатаж ради эпатажа и чтобы «проверяемое доказательство» действительно было проверено, а не взято по памяти.`,
          en: `Students are often afraid of a contestable position, assuming disagreement will cost them marks. Explain that argument is usually what’s judged, not agreement — and check the specific competition’s rules. In a group, pool everyone’s “first three”: it shows how much they overlap. Make sure an unexpected angle doesn’t turn into provocation for its own sake, and that the “checkable evidence” really has been checked rather than quoted from memory.`
        },
        source: ['original', 'owl-cw', 'yw']
      }
    },

    {
      id: 'contest-3',
      route: 'contest',
      n: 3,
      minutes: 10,
      skills: ['editing', 'argument'],
      genres: ['contest', 'statement'],
      title: { ru: `Разбор слабого конкурсного эссе`, en: `Diagnosing a weak competition essay` },
      learn: {
        ru: `Ставить диагноз слабому эссе и выбирать правки, которые изменят больше всего, а не только поправят слова.`,
        en: `Diagnose a weak essay and choose the edits that change the most, not the ones that only tidy up words.`
      },
      hook: {
        ru: `Слабое эссе редко бывает безграмотным. Чаще оно гладкое, правильное и пустое: дочитал — и через минуту не можешь пересказать, о чём оно. Чужие ошибки видны лучше собственных, поэтому начнём с чужого текста, а потом вернёмся к своему.`,
        en: `A weak essay is rarely badly spelt. More often it’s smooth, correct and empty: you finish it and a minute later you can’t say what it was about. Other people’s mistakes are easier to see than our own, so we’ll start with someone else’s text and then come back to yours.`
      },
      technique: {
        name: { ru: `Сначала смысл, потом слова`, en: `Meaning first, words later` },
        text: {
          ru: `Правки бывают разного веса. Замена слова меняет строчку, замена примера — всё эссе. Разбирая черновик, иди сверху вниз:

- **Вопрос.** Отвечает ли текст на задание? Можно ли пересказать его мысль одной фразой?
- **Событие.** Названо ли, что конкретно произошло? Если читатель не понял, о чём речь, стиль не спасёт.
- **Доказательства.** Есть ли хоть одна проверяемая деталь: имя, место, число?
- **Финал.** Добавляет ли он мысль — или повторяет мораль, которую знают все?

Только потом — клише и лишние слова. Отполированное пустое эссе остаётся пустым.`,
          en: `Edits come in different weights. Changing a word changes a line; changing an example changes the whole essay. When you diagnose a draft, work from the top down:

- **The question.** Does the text answer the brief? Can you sum up its idea in one sentence?
- **The event.** Does it say what actually happened? If the reader can’t tell, style won’t save it.
- **Evidence.** Is there a single checkable detail — a name, a place, a number?
- **The ending.** Does it add a thought, or repeat a moral everyone already knows?

Only then turn to clichés and extra words. A polished empty essay is still empty.`
        }
      },
      example: {
        before: {
          ru: `Каждый человек в жизни сталкивается с выбором. В тот день я стоял на распутье. Сомнения сковывали меня, но я нашёл в себе силы и сделал шаг. С тех пор я понял, что главное — верить в себя.`,
          en: `Everyone faces choices in life. That day I stood at a crossroads. Doubt held me back, but I found the strength to take the step. Since then I have understood that the main thing is to believe in yourself.`
        },
        after: {
          ru: `В марте тренер предложил мне место в школьной сборной по волейболу — если я уйду из театральной студии: тренировки совпадали с репетициями. Неделю я носил в рюкзаке заявление об уходе из студии и так его и не отдал. Тренеру я отказал на лестнице, быстро, пока не передумал.`,
          en: `In March the coach offered me a place on the school volleyball team — if I left the drama club, because training clashed with rehearsals. For a week I carried a letter resigning from the club in my rucksack, and never handed it in. I turned the coach down on the stairs, quickly, before I could change my mind.`
        },
        changes: [
          {
            ru: `Вместо «стоял на распутье» названо, между чем выбор: сборная или студия. Теперь читатель может сам взвесить варианты.`,
            en: `Instead of “stood at a crossroads”, the options are named: the team or the drama club. Now the reader can weigh them too.`
          },
          {
            ru: `Абстрактные «сомнения сковывали» заменены действием — неделя с заявлением в рюкзаке.`,
            en: `The abstract “doubt held me back” becomes an action: a week with a letter in the rucksack.`
          },
          {
            ru: `Мораль «главное — верить в себя» убрана. Вывод появится позже — и будет опираться на событие.`,
            en: `The moral “believe in yourself” is gone. A conclusion can come later, and it will rest on the event.`
          }
        ]
      },
      exercise: {
        type: 'choose',
        prompt: {
          ru: `Прочитай слабое конкурсное эссе и ответь на вопросы. Выбирай правки, которые изменят больше всего, а не самые заметные.`,
          en: `Read this weak competition essay and answer the questions. Choose the edits that would change the most, not the most obvious ones.`
        },
        config: {
          text: {
            ru: `*Конкурс эссе «Решение, которое меня изменило». До 600 слов.*

**Шаг в неизвестность**

Жизнь каждого человека состоит из выборов, и некоторые из них меняют всё. Ещё древние философы говорили, что человек — это его решения. Однажды и я оказался перед таким выбором.

Это был самый обычный осенний день. Небо было серым, дул холодный ветер, и на душе у меня было так же пасмурно. Я стоял на перепутье своей жизни. С одной стороны был привычный путь, с другой — неизвестность.

Сомнения парализовали меня. Мне было страшно, грустно и одиноко. Я думал о своём будущем, о своих мечтах и о том, что скажут люди. Казалось, вся вселенная ждёт моего ответа.

И тогда я почувствовал, как внутри меня загорается огонь. Я совершил прыжок веры и выбрал свой путь. Это было нелегко, но я ни о чём не жалею.

Этот опыт научил меня многому. Я понял, что нужно всегда верить в себя, не бояться перемен и идти к мечте, несмотря ни на что. Ведь дорогу осилит идущий.`,
            en: `*Essay competition: “A decision that changed me”. Maximum 600 words.*

**A Step into the Unknown**

Life is a journey made of choices, and some of them change everything. As the great philosophers taught us, we are defined by our decisions. One day, I too faced such a choice.

It was an ordinary autumn day. The sky was grey, a cold wind was blowing, and my mood was just as gloomy. I stood at a crossroads in my life. On one side lay the familiar path; on the other, the unknown.

Doubt paralysed me. I felt scared, sad and alone. I thought about my future, my dreams and what people would say. It seemed as if the whole universe was waiting for my answer.

Then I felt a fire ignite within me. I took a leap of faith and chose my own path. It was not easy, but I have no regrets.

This experience taught me a great deal. I learned that you must always believe in yourself, never fear change and follow your dreams no matter what. After all, every journey begins with a single step.`
          },
          questions: [
            {
              q: { ru: `Какая проблема главная — без её исправления остальные правки мало что дадут?`, en: `Which problem matters most — the one without which the other edits won’t help much?` },
              options: [
                { ru: `Слишком длинные предложения`, en: `The sentences are too long` },
                { ru: `Читатель так и не узнаёт, что именно выбрал автор`, en: `The reader never finds out what the writer actually chose` },
                { ru: `Мало прилагательных и сравнений`, en: `Not enough adjectives and comparisons` },
                { ru: `Нет цитаты известного философа`, en: `There’s no quotation from a famous philosopher` }
              ],
              correct: [1],
              explain: {
                ru: `Выбор — центр эссе, но он ни разу не назван: неизвестно, между чем и чем и чем рисковал автор. Можно убрать все клише, но если событие не названо, читателю не за что зацепиться. Это первая правка, всё остальное — после.`,
                en: `The choice is the centre of the essay, yet it’s never named: we don’t know between what and what, or what was at stake. You could remove every cliché, but if the event isn’t named the reader has nothing to hold on to. That’s edit number one; everything else comes after.`
              }
            },
            {
              q: { ru: `Что лучше всего заменит фразу «Мне было страшно, грустно и одиноко»?`, en: `What would best replace “I felt scared, sad and alone”?` },
              options: [
                { ru: `«Мне было очень-очень страшно»`, en: `“I felt really, really scared”` },
                { ru: `«Меня охватил ледяной ужас»`, en: `“An icy terror gripped me”` },
                { ru: `Поступок или деталь из того дня: что автор делал, сказал или так и не смог сказать`, en: `An action or detail from that day: what the writer did, said or couldn’t bring themselves to say` },
                { ru: `Список ещё из трёх чувств`, en: `A list of three more feelings` }
              ],
              correct: [2],
              explain: {
                ru: `«Очень-очень» усиливает ярлык, «ледяной ужас» меняет одно клише на другое, а новый список чувств остаётся списком. Чувство убеждает, когда его видно по поступку: «Я трижды набрал сообщение тренеру и трижды его стёр». Только такую деталь нельзя придумать — её нужно вспомнить.`,
                en: `“Really, really” just amplifies a label, “icy terror” swaps one cliché for another, and a new list of feelings is still a list. A feeling convinces when you can see it in an action: “I typed a message to my coach three times and deleted it three times.” But you can’t invent a detail like that — you have to remember it.`
              }
            },
            {
              q: { ru: `Какие предложения можно вычеркнуть, ничего не потеряв? Выбери все.`, en: `Which sentences could be cut with no loss? Choose all that apply.` },
              options: [
                { ru: `«Жизнь каждого человека состоит из выборов, и некоторые из них меняют всё».`, en: `“Life is a journey made of choices, and some of them change everything.”` },
                { ru: `«Ещё древние философы говорили, что человек — это его решения».`, en: `“As the great philosophers taught us, we are defined by our decisions.”` },
                { ru: `«Небо было серым, дул холодный ветер…»`, en: `“The sky was grey, a cold wind was blowing…”` },
                { ru: `«Я совершил прыжок веры и выбрал свой путь».`, en: `“I took a leap of faith and chose my own path.”` },
                { ru: `«Ведь дорогу осилит идущий».`, en: `“After all, every journey begins with a single step.”` }
              ],
              correct: [0, 1, 2, 4],
              explain: {
                ru: `Первое предложение подходит к любому эссе о выборе — значит, ничего не говорит об этом. «Древние философы» — ссылка без источника: кто, где? Погода нужна, только если она что-то меняет в событии. Пословица в конце повторяет мораль. А вот «прыжок веры» — единственное место, где что-то происходит: его надо не вычеркнуть, а переписать, назвав само решение.`,
                en: `The first sentence would fit any essay about a choice, so it says nothing about this one. “The great philosophers” is a reference with no source: who, where? Weather only earns its place if it changes something in the event. The proverb at the end repeats the moral. But the “leap of faith” is the only place where anything happens: it needs rewriting, not cutting — by naming the actual decision.`
              }
            },
            {
              q: { ru: `Какое первое предложение сильнее всего подошло бы этому эссе после правки?`, en: `Which first sentence would suit this essay best after revision?` },
              options: [
                { ru: `«С древнейших времён люди задумываются о выборе».`, en: `“Since ancient times, people have pondered the nature of choice.”` },
                { ru: `«Что такое выбор? Словарь определяет его как…»`, en: `“What is a choice? The dictionary defines it as…”` },
                { ru: `«В среду без десяти четыре мне нужно было либо постучать в кабинет тренера, либо пойти на репетицию, как будто ничего не случилось».`, en: `“At ten to four on Wednesday, I had to either knock on the coach’s door or go to rehearsal as if nothing had happened.”` },
                { ru: `«Этот день я не забуду никогда».`, en: `“I will never forget that day.”` }
              ],
              correct: [2],
              explain: {
                ru: `Третий вариант ставит читателя в конкретную минуту и сразу показывает, что на весах. «С древнейших времён» и словарное определение — широкий вход, с которого начинают очень многие работы. «Не забуду никогда» обещает важность, но не показывает её. Но помни: такое начало годится, только если всё в нём правда.`,
                en: `The third option drops the reader into a specific minute and shows at once what’s at stake. “Since ancient times” and a dictionary definition are wide-angle openings that a great many entries start with. “I will never forget” promises importance without showing it. Remember, though: an opening like the third one only works if every detail in it is true.`
              }
            },
            {
              q: { ru: `Каких доказательств не хватает, чтобы автору поверили? Выбери все.`, en: `What evidence is missing for the reader to believe the writer? Choose all that apply.` },
              options: [
                { ru: `Что было на кону: чем автор рисковал`, en: `What was at stake: what the writer risked` },
                { ru: `Кто ещё участвовал и что говорил`, en: `Who else was involved and what they said` },
                { ru: `Что автор теперь делает иначе`, en: `What the writer does differently now` },
                { ru: `Больше слов о чувствах`, en: `More words about feelings` },
                { ru: `Цитата известного человека о смелости`, en: `A famous person’s quotation about courage` }
              ],
              correct: [0, 1, 2],
              explain: {
                ru: `Эссе держится на утверждениях — «было нелегко», «ни о чём не жалею», — но их нечем подкрепить. Ставки, другие люди и видимое изменение — улики, по которым читатель сам делает вывод. Ещё одно слово-чувство или чужая цитата не заменят ни одной из них.`,
                en: `The essay rests on claims — “it was not easy”, “I have no regrets” — with nothing to support them. The stakes, other people and a visible change are clues the reader can use to reach a conclusion. Another feeling-word or a borrowed quotation can’t replace any of them.`
              }
            },
            {
              q: { ru: `Что сделать с финалом «Я понял, что нужно всегда верить в себя…»?`, en: `What should happen to the ending “I learned that you must always believe in yourself…”?` },
              options: [
                { ru: `Оставить: жюри нужен ясный вывод`, en: `Keep it: judges need a clear conclusion` },
                { ru: `Заменить более красивой моралью`, en: `Replace it with a more elegant moral` },
                { ru: `Заменить мыслью или поступком, которые могли появиться только из этой истории`, en: `Replace it with a thought or action that could only have come from this story` },
                { ru: `Добавить ещё два урока, чтобы было весомее`, en: `Add two more lessons to give it weight` }
              ],
              correct: [2],
              explain: {
                ru: `Рефлексия в конкурсном эссе нужна — но не общая мораль, а мысль, до которой автор дошёл именно здесь. «Верить в себя» подходит к любому тексту. Сравни: «Теперь, когда я не уверен, я даю себе сутки и записываю, от чего именно отказываюсь». Это и вывод, и доказательство, что опыт что-то изменил.`,
                en: `A competition essay does need reflection — but not a general moral; a thought the writer reached here, in this story. “Believe in yourself” fits any text. Compare: “Now, when I’m unsure, I give myself a day and write down exactly what I’d be giving up.” That’s a conclusion and evidence of change at the same time.`
              }
            }
          ]
        }
      },
      harder: {
        type: 'rewrite',
        prompt: {
          ru: `Перепиши начало эссе: убери широкий вход и погоду, начни с минуты, когда нужно выбирать, и назови, между чем и чем. Возьми свой настоящий выбор — даже маленький. Если это только тренировка, выбор можно придумать, но пометь: «вымысел». В настоящее конкурсное эссе вымысел не пойдёт.`,
          en: `Rewrite the opening: drop the wide-angle start and the weather, begin at the minute when the choice has to be made, and name the options. Use a real choice of your own — even a small one. If it’s only practice you may invent one, but label it “invented”: invention can’t go into a real competition essay.`
        },
        config: {
          source: {
            ru: `Жизнь каждого человека состоит из выборов, и некоторые из них меняют всё. Ещё древние философы говорили, что человек — это его решения. Однажды и я оказался перед таким выбором.

Это был самый обычный осенний день. Небо было серым, дул холодный ветер, и на душе у меня было так же пасмурно. Я стоял на перепутье своей жизни. С одной стороны был привычный путь, с другой — неизвестность.`,
            en: `Life is a journey made of choices, and some of them change everything. As the great philosophers taught us, we are defined by our decisions. One day, I too faced such a choice.

It was an ordinary autumn day. The sky was grey, a cold wind was blowing, and my mood was just as gloomy. I stood at a crossroads in my life. On one side lay the familiar path; on the other, the unknown.`
          }
        }
      },
      hint: {
        ru: `Начни с первого вопроса и спроси себя: могу ли я одной фразой сказать, что выбрал автор? Если нет — вот и главная проблема. Дальше иди сверху вниз: вопрос → событие → доказательства → финал.`,
        en: `Start with question one and ask yourself: can I say in one sentence what the writer chose? If not, that’s the main problem. Then work from the top down: question → event → evidence → ending.`
      },
      improve: {
        ru: `Открой любой свой черновик эссе и найди фразу, верную для любого человека («в жизни бывают испытания»). Замени её фразой, верной только для тебя.`,
        en: `Open any essay draft of your own and find a sentence that’s true of everyone (“life is full of challenges”). Replace it with one that’s true only of you.`
      },
      selfCheck: [
        { ru: `Я начал с правок смысла, а не с отдельных слов?`, en: `Did I start with edits to meaning rather than to individual words?` },
        { ru: `Я понимаю, почему одни клише вычёркивают, а другие переписывают?`, en: `Do I understand why some clichés get cut and others get rewritten?` },
        { ru: `В моём новом начале выбор назван прямо?`, en: `Does my new opening name the choice directly?` },
        { ru: `В моём начале нет фраз, которые подошли бы к любому эссе?`, en: `Is my opening free of sentences that would fit any essay?` }
      ],
      discuss: {
        ru: `Почему клише так легко пишутся? Что они дают автору — и что отнимают у читателя?`,
        en: `Why are clichés so easy to write? What do they give the writer — and what do they take away from the reader?`
      },
      reflect: {
        ru: `Какую из этих ошибок ты замечал в своих текстах? Как ты поймаешь её в следующий раз?`,
        en: `Which of these mistakes have you spotted in your own writing? How will you catch it next time?`
      },
      transfer: {
        ru: `Порядок «смысл → структура → слова» работает для любого текста. В рассказе умолчание о событии бывает приёмом: читатель догадывается, и это создаёт напряжение. В эссе умолчание почти всегда читается как пустота — читатель не должен гадать, что произошло.`,
        en: `The order “meaning → structure → words” works for any text. In a story, leaving an event unnamed can be a deliberate technique: the reader guesses, and that builds tension. In an essay it almost always reads as emptiness — the reader shouldn’t have to guess what happened.`
      },
      personalAlt: {
        ru: `Не хочешь писать о своём выборе — возьми совсем маленький бытовой: пойти пешком или поехать на автобусе, дочитать скучную книгу или бросить, отдать последний пирожок. Или напиши начало для вымышленного героя и пометь, что это тренировка.`,
        en: `If you don’t want to write about a choice of your own, take a tiny everyday one: walk or catch the bus, finish a dull book or give up on it, hand over the last pastry. Or write the opening for an invented character and mark it as practice.`
      },
      teacher: {
        note: {
          ru: `Эссе в упражнении — оригинальное, написано по мотивам типичных ошибок (ориентир — слабый образец EssayPro «A Leap of Faith», который мы не цитируем). Разбирайте текст, а не автора: у каждого бывают такие черновики. Для переписывания начала подходит любой, даже совсем маленький реальный выбор; не требуйте личных или болезненных историй. Хорошо работает сравнение: ученики по желанию читают новые начала, группа отмечает, где выбор назван яснее всего.`,
          en: `The essay in this exercise is original, written to model typical mistakes (loosely based on the weak EssayPro sample “A Leap of Faith”, which we don’t quote). Discuss the text, not the writer: everyone has drafts like this. Any real choice, however small, will do for the rewrite; don’t ask for personal or painful stories. Comparing works well: students who want to read out their new openings, and the group notes where the choice is named most clearly.`
        },
        source: ['essaypro-leap', 'etw', 'original']
      }
    },

    {
      id: 'contest-4',
      route: 'contest',
      n: 4,
      minutes: 10,
      skills: ['editing'],
      genres: ['contest', 'scholarship', 'statement'],
      title: { ru: `Сократи черновик на 25% без потери смысла`, en: `Cut the draft by 25% without losing meaning` },
      learn: {
        ru: `Сокращать текст до лимита, убирая сначала пустые слова и повторы, а не мысли и детали.`,
        en: `Cut a text down to the limit by removing empty words and repetition first, not ideas and details.`
      },
      hook: {
        ru: `Лимит слов на конкурсе жёсткий: иногда работу с превышением просто не принимают. Хорошая новость — почти любой черновик можно сократить на четверть, не потеряв ни одной мысли. Пустые слова есть в каждом тексте. Их нужно только найти.`,
        en: `A competition word limit is strict: sometimes an entry that runs over simply isn’t accepted. The good news is that almost any draft can lose a quarter of its length without losing a single idea. Every text has empty words in it. You just have to find them.`
      },
      technique: {
        name: { ru: `Четыре фильтра`, en: `Four filters` },
        text: {
          ru: `Сокращай в таком порядке — от самого безболезненного:

1. **Разгон.** Фразы, которые готовятся сказать, но ещё не говорят: «Хотелось бы отметить, что…», «В этом эссе я расскажу…».
2. **Усилители.** «Очень», «действительно», «абсолютно». Если без них смысл тот же — они не работали.
3. **Повторы.** Одна мысль, сказанная дважды разными словами. Оставь более точную версию.
4. **Двойные объяснения.** Сцена уже показала, что было страшно, а следом идёт «мне было страшно». Доверься сцене.

Только если этого мало, решай, какую мысль или пример убрать целиком.`,
          en: `Cut in this order, from the most painless:

1. **Throat-clearing.** Phrases that get ready to say something but don’t yet: “I would like to point out that…”, “In this essay I will tell you…”.
2. **Intensifiers.** “Very”, “really”, “absolutely”. If the meaning survives without them, they weren’t working.
3. **Repetition.** One idea said twice in different words. Keep the more precise version.
4. **Double explanations.** The scene has already shown you were scared, and then comes “I was scared”. Trust the scene.

Only if that isn’t enough, decide which idea or example to cut completely.`
        }
      },
      example: {
        before: {
          ru: `Хотелось бы начать с того, что, на мой взгляд, волонтёрство — это действительно очень важная вещь. Когда я впервые пришла в приют для животных, я очень волновалась и переживала, потому что не знала, чего ожидать. Я не знала, что меня ждёт. Но уже в первый день я поняла, что это место мне по-настоящему дорого и важно.`,
          en: `I would like to begin by saying that, in my opinion, volunteering is a really very important thing. When I first went to the animal shelter, I was very nervous and anxious, because I didn’t know what to expect. I had no idea what was waiting for me. But on the very first day I realised that this place was truly dear and important to me.`
        },
        after: {
          ru: `Когда я впервые пришла в приют для животных, я волновалась: не знала, чего ожидать. Но уже в первый день поняла, что это место мне дорого.`,
          en: `When I first went to the animal shelter, I was nervous: I didn’t know what to expect. But on the very first day I realised this place mattered to me.`
        },
        changes: [
          {
            ru: `Разгон «Хотелось бы начать с того, что, на мой взгляд» убран вместе с общей фразой о волонтёрстве: эссе и так о нём, а мнение и так твоё.`,
            en: `The throat-clearing “I would like to begin by saying that, in my opinion” has gone, along with the general line about volunteering: the essay is already about it, and the opinion is obviously yours.`
          },
          {
            ru: `Усилители «очень», «действительно», «по-настоящему» ушли — смысл не изменился.`,
            en: `The intensifiers “really”, “very” and “truly” have gone, and the meaning hasn’t changed.`
          },
          {
            ru: `Повторы сведены к одному варианту: «волновалась и переживала», «не знала, чего ожидать» и «не знала, что меня ждёт» — это одна мысль.`,
            en: `Repetition is reduced to one version: “nervous and anxious”, “didn’t know what to expect” and “had no idea what was waiting” are one thought.`
          },
          {
            ru: `Текст стал вдвое короче, а мысль та же. Освободившиеся слова можно отдать детали — например, кличке первой собаки.`,
            en: `The text is half the length and the thought is the same. The words you’ve saved can go on a detail — the name of the first dog, say.`
          }
        ]
      },
      exercise: {
        type: 'constraint',
        prompt: {
          ru: `Сократи черновик конкурсного эссе на тему «Место в городе, которое стоит сохранить» минимум на 25%. Сначала пройди четырьмя фильтрами и только потом решай, не убрать ли предложение целиком. Все факты — имя мастера, двадцать лет, кроссовок, реплика — должны остаться.`,
          en: `Cut this competition essay draft on the theme “A place in my city worth preserving” by at least 25%. Run it through the four filters first, and only then decide whether to cut a whole sentence. All the facts — the repairman’s name, the twenty years, the trainer, what he said — must stay.`
        },
        config: {
          rules: [
            {
              kind: 'cut',
              percent: 25,
              source: {
                ru: `В этом эссе я хотел бы рассказать о месте, которое, как мне кажется, действительно стоит сохранить в нашем городе. Это маленькая будка по ремонту обуви возле нашей станции метро. Честно говоря, многие люди, наверное, её даже не замечают, потому что она очень маленькая и совсем незаметная. Но для меня это место по-настоящему особенное и очень важное.

Мастера зовут дядя Серик, и он работает там, по его собственным словам, уже больше двадцати лет. Когда я впервые пришёл к нему с порванным кроссовком, я, если честно, очень сомневался, что его вообще можно починить. Я думал, что кроссовок придётся выбросить. Но дядя Серик повертел его в руках и сказал: «Завтра приходи». На следующий день кроссовок был как новый, абсолютно как новый.

Я думаю, что такие места очень важны, потому что они учат нас бережно относиться к вещам, а не выбрасывать их. Именно поэтому, на мой взгляд, такие места обязательно нужно сохранять.`,
                en: `In this essay I would like to tell you about a place that, in my opinion, really deserves to be preserved in our city. It is a tiny shoe-repair kiosk next to our metro station. To be honest, lots of people probably don’t even notice it, because it is very small and not at all eye-catching. But for me this place is truly special and very important.

The man who runs it is called Serik, and he has worked there, in his own words, for more than twenty years. When I first brought him a torn trainer, I honestly had serious doubts that it could be fixed at all. I thought I would have to throw it away. But Serik turned it over in his hands and said, “Come back tomorrow.” The next day the trainer was as good as new, absolutely as good as new.

I think places like this are very important because they teach us to look after things instead of throwing them away. That is exactly why, in my view, places like this must definitely be preserved.`
              }
            },
            {
              kind: 'ban-words',
              words: {
                ru: ['очень', 'действительно', 'абсолютно', 'обязательно', 'честно'],
                en: ['very', 'really', 'truly', 'absolutely', 'definitely', 'honestly']
              }
            }
          ]
        }
      },
      harder: {
        type: 'fields',
        prompt: {
          ru: `Возьми свой черновик конкурсного эссе (или любой текст длиннее лимита) и сократи его до лимита. Веди журнал: что убрал и почему. Журнал правок — часть итоговой работы этого маршрута.`,
          en: `Take your own competition essay draft (or any text over its limit) and cut it to the limit. Keep a log of what you cut and why. The revision log is part of this route’s final piece.`
        },
        config: {
          fields: [
            {
              id: 'limit',
              label: { ru: `Лимит и исходный объём`, en: `Limit and starting length` },
              hint: { ru: `Например: лимит 800, в черновике 1012 — убрать минимум 212 слов.`, en: `For example: limit 800, draft 1,012 — cut at least 212 words.` },
              rows: 1
            },
            {
              id: 'log',
              label: { ru: `Журнал правок`, en: `Revision log` },
              hint: { ru: `Строка на правку: что убрал → какой фильтр → сколько слов. «В этом эссе я расскажу…» → разгон → 5.`, en: `One line per cut: what went → which filter → how many words. “In this essay I will tell you…” → throat-clearing → 7.` },
              rows: 6
            },
            {
              id: 'hardest',
              label: { ru: `Самое трудное сокращение`, en: `The hardest cut` },
              hint: { ru: `Что было жалко убирать? Почему ты всё-таки решился — или оставил?`, en: `What did you hate to lose? Why did you cut it anyway — or keep it?` }
            },
            {
              id: 'better',
              label: { ru: `Что стало лучше`, en: `What got better` },
              hint: { ru: `Одно место, которое после сокращения читается сильнее. Почему?`, en: `One place that reads more strongly after the cut. Why?` }
            }
          ],
          then: {
            ru: `Вставь сюда итоговую версию и сверь объём с лимитом по счётчику.`,
            en: `Paste your final version here and check the word count against the limit.`
          }
        }
      },
      hint: {
        ru: `Начни с первого предложения: очень часто его можно удалить целиком. Потом найди каждое «очень», «действительно», «на мой взгляд», «честно говоря» и вычеркни всё, без чего смысл не меняется.`,
        en: `Start with the first sentence: it can very often go completely. Then hunt down every “very”, “really”, “in my opinion” and “to be honest”, and strike out each one the meaning can do without.`
      },
      improve: {
        ru: `Сравни исходник со своей версией. Найди место, где вместе с лишними словами ушла деталь — имя, число, реплика. Верни её, а сократи в другом месте.`,
        en: `Compare the original with your version. Find a spot where a detail — a name, a number, a line of speech — went out with the padding. Put it back and cut somewhere else.`
      },
      selfCheck: [
        { ru: `Текст короче исходного минимум на 25%?`, en: `Is the text at least 25% shorter than the original?` },
        { ru: `Все факты на месте: имя мастера, двадцать лет, кроссовок, «Завтра приходи»?`, en: `Are all the facts still there: Serik’s name, the twenty years, the trainer, “Come back tomorrow”?` },
        { ru: `Я сначала убрал разгон, усилители и повторы, а уже потом — целые мысли?`, en: `Did I cut throat-clearing, intensifiers and repetition before whole ideas?` },
        { ru: `Главная мысль — почему это место стоит сохранить — осталась?`, en: `Is the main point — why this place is worth preserving — still there?` }
      ],
      discuss: {
        ru: `Можно ли сократить слишком сильно? Как понять, что текст стал сухим, а не точным?`,
        en: `Can you cut too much? How can you tell when a text has become dry rather than precise?`
      },
      reflect: {
        ru: `Какие слова-пустышки ты чаще всего находишь у себя? Запиши их: это твой личный список для проверки.`,
        en: `Which empty words do you find most often in your own writing? Write them down — that’s your personal checklist.`
      },
      transfer: {
        ru: `Сокращение под лимит нужно на конкурсах, в заявках на стипендию и в журналистике. В рассказе лимит мягче, но тот же приём — убрать двойное объяснение — делает сцены сильнее. Разница в цене: в эссе иногда жертвуешь хорошим примером ради лимита, в рассказе — ради ритма.`,
        en: `Cutting to a limit matters in competitions, scholarship applications and journalism. In a story the limit is looser, but the same move — dropping the double explanation — makes scenes stronger. The difference is the price: in an essay you sometimes sacrifice a good example for the limit; in a story, for the rhythm.`
      },
      teacher: {
        note: {
          ru: `Счётчик проверяет только длину и слова-усилители — смысл проверяет человек. Попросите учеников сравнить версии в истории версий и показать одно самое удачное сокращение. Журнал правок из усложнённого задания — итог маршрута: его можно попросить вместе с эссе, если ученик сам захочет показать работу. Подчеркните: вырезать целую мысль — решение автора, а не обязательный шаг.`,
          en: `The checker only measures length and flags intensifiers — a person has to check the meaning. Ask students to compare versions in the version history and show their single best cut. The revision log from the harder task is the route’s final artefact: you can ask for it alongside the essay if the student chooses to share their work. Stress that cutting a whole idea is the writer’s decision, not a required step.`
        },
        source: ['original', 'owl-cw', 'yw']
      }
    }
  ]);
})();
