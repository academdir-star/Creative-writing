# Спецификация контента

Контент хранится в `content/*.js` — обычные скрипты (без модулей, чтобы сайт открывался и с диска).
Каждый файл вызывает функции из `js/content-api.js`. Проверка: `node tools/validate-content.js`.

## Общие правила

- **Каждая строка для ученика — объект `{ ru: '…', en: '…' }`** (ниже — `L`). Обе версии обязательны.
  Английская версия — не дословный перевод, а естественный текст; примеры могут различаться, если
  так лучше звучит на языке, но должны показывать тот же приём.
- Пишите строки в обратных кавычках `` `…` ``, чтобы не экранировать кавычки. **Не используйте `${`.**
- Разметка внутри строк: пустая строка — новый абзац; `**жирный**`; `*курсив*`; `~~зачёркнутый~~`;
  строки, начинающиеся с `- `, — список; `> ` — цитата/выделенный пример. HTML не используется.
- Обращение к ученику: по-русски на «ты», по-английски «you». Тон — уважительный, живой, умный.
  Без сюсюканья, эмодзи, «супер!», геймификации и громких обещаний. Читатель 13–18 лет,
  17-летнему должно быть не скучно, 13-летнему — понятно.
- **Только оригинальные тексты.** Не копируйте страницы книг, чужие эссе и длинные литературные
  цитаты. Название книги и автора упоминать можно. Короткая цитата — не длиннее 8 слов.
- Места и реалии могут быть из Алматы и Казахстана (горы, Зелёный базар, метро, снег в апреле,
  дача, бабушкин чай) — естественно, без экзотизации. Имена персонажей разнообразные.
- **Правда по жанрам.** Вымысел — в рассказе и экспериментах. Репортаж, рецензия, эссе — факты.
  Personal statement и scholarship essay — только правда о себе.
- **Личное — по желанию.** Если задание про семью, чувства или личный опыт, добавьте `personalAlt`.
- Никогда не называйте опыт ученика неинтересным; не обещайте поступление, победу или «результат».
- Стилистические решения не выдавайте за законы: где уместно, пишите «часто», «в этой задаче».

## Идентификаторы

Навыки (`skills`): `ideas`, `observation`, `words`, `rhythm`, `voice`, `scene`, `character`,
`structure`, `facts`, `argument`, `reflection`, `editing`.

Жанры (`genres`): `story`, `scene`, `description`, `reportage`, `review`, `contest`,
`scholarship`, `statement`, `free`.

Источники (`teacher.source`, массив id): `sawyer` (E. Sawyer, College Essay Essentials),
`scholarship30` (G. & K. Tanabe, How to Write a Winning Scholarship Essay), `writeyourwayin`
(R. Toor, Write Your Way In), `narrative-plan` (памятка по планированию нарративного эссе),
`active-vocab` (памятка «active vocabulary»), `hse-spb` (мастер-классы Б. Судакова и Н. Фрейман,
ВШЭ СПб), `etw` (Essays That Worked, Fair Opportunity Project), `essaypro-leap`,
`essaypro-identity` (слабые образцы эссе), `values` (Values List, startwithvalues.com),
`swot` (C. Drew, Personal SWOT), `826-wyw` (826 Digital, Write Your Way), `ou-fiction`
(OpenLearn, Start Writing Fiction), `ou-know` (OpenLearn, Writing What You Know), `owl-cw`
(Purdue OWL, creative writing), `owl-cnf` (Purdue OWL, Creative Nonfiction), `wx` (Writing
Excuses), `yw` (Young Writers), `original` (собственная разработка).

## Урок — `SM.addLessons([...])`

```js
{
  id: 'free-1',            // из content/routes.js
  route: 'free',           // base | free | style | story | real | contest | admit
  n: 1,                    // номер в маршруте
  minutes: 8,              // 5–10
  skills: ['ideas'],       // 1–3
  genres: ['story', 'free'],
  title: L,                // до 6 слов
  learn: L,                // чему научится: одно предложение с глаголом действия
  hook: L,                 // зацепка, 2–4 предложения
  technique: { name: L, text: L },     // один приём; text — до 120 слов
  example: {
    before: L,             // оригинальный пример, до 80 слов
    after: L,              // та же мысль после приёма, до 100 слов
    changes: [L, L, L]     // 2–4 пункта: что изменилось и почему это работает
  },
  exercise: Exercise,      // основное упражнение (типы ниже)
  harder: { prompt: L } | Exercise,    // более сложный вариант
  hint: L,                 // «не знаю, с чего начать»: конкретный первый шаг, иногда начало фразы
  improve: L,              // шаг «Улучши»: какой фрагмент переписать и как
  selfCheck: [L, L, L],    // 3–5 критериев, вопросы «да/нет»
  discuss: L,              // вопрос для обсуждения с преподавателем или группой
  reflect: L,              // вопрос для рефлексии
  transfer: L,             // (желательно) как навык переходит в другие жанры и где отличается
  personalAlt: L,          // (если задание личное) альтернатива без личного
  teacher: { note: L, source: ['sawyer', …] }  // заметка преподавателю + источники вдохновения
}
```

## Упражнения — `Exercise`

`{ type, prompt: L, config: {...} }`. Во всех типах можно добавить `config.then: L` — второй шаг
«собери из этого текст», под ним появится поле для письма, и `config.placeholder: L`.

| type | Что делает ученик | config |
| --- | --- | --- |
| `free` | пишет свободно, можно с таймером | `minutes?`, `minWords?` |
| `list` | заполняет N пунктов | `count`, `labels?: [L]` (длина = count) |
| `rewrite` | переписывает данный текст | `source: L` (до 150 слов) |
| `constraint` | пишет с ограничениями, которые проверяются вживую | `rules: [Rule]`, `source?: L` |
| `columns` | пишет 2–4 версии рядом | `columns: [{ label: L, placeholder?: L }]`, `shared?: L` (общая ситуация) |
| `fields` | заполняет шаблон по полям | `fields: [{ id, label: L, hint?: L, rows? }]` |
| `choose` | отвечает на вопросы с вариантами, видит разбор | `text?: L`, `questions: [{ q: L, options: [L], correct: [индексы] \| null, explain: L }]` |
| `reorder` | переставляет фрагменты | `blocks: [L]` (в «исходном» порядке) или `own: N` (сначала пишет N своих фрагментов) |
| `annotate` | размечает текст: выделяет слова и фразы тегами | `text: L` (до 250 слов), `tags: [{ id, label: L }]`, `questions?: [L]` |
| `compare` | сравнивает две версии и отвечает | `a: L`, `b: L`, `questions: [L]` |
| `generator` | тянет случайные карточки из колод и пишет | `decks: [{ label: L, items: [L] (≥ 6) }]` |

`correct: null` — вопрос без единственного верного ответа: после выбора показывается `explain`.

Правила `Rule` для `constraint` (проверяются автоматически, с оговоркой о точности):

| kind | Параметры | Что проверяется |
| --- | --- | --- |
| `ban-emotions` | — | нет прямых названий чувств (грусть, страх, happy, afraid…) |
| `ban-adjectives` | — | нет прилагательных (эвристика, может ошибаться) |
| `max-adjectives` | `n` | не больше n прилагательных |
| `max-words` / `min-words` | `n` | лимит слов |
| `cut` | `source: L`, `percent` | текст короче исходного минимум на percent % |
| `no-said` | — | в диалоге нет «сказал/said» (ищем другие способы атрибуции) |
| `must-dialogue` | — | есть реплики диалога |
| `sentence-lengths` | — | есть и очень короткие (≤ 4 слов), и длинные (≥ 20 слов) предложения |
| `ban-words` | `words: { ru: [], en: [] }` | нет указанных слов |
| `must-words` | `words: { ru: [], en: [] }` | есть все указанные слова |
| `no-i-start` | — | предложения не начинаются с «Я»/«I» подряд |

## Лаборатория стиля — `SM.addLab([...])`

```js
{
  id: 'detail',
  title: L,          // название приёма
  short: L,          // одна строка: суть
  example: L,        // маленький оригинальный пример, где приём работает (до 90 слов)
  flat: L,           // «плоская» версия для песочницы: ученик её меняет (до 90 слов)
  task: L,           // что сделать с плоской версией
  helps: L,          // когда помогает
  hurts: L,          // когда мешает
  fail: { text: L, why: L },   // неудачная попытка применить приём и почему она не работает
  meter: 'adjectives' | 'emotions' | 'rhythm' | 'verbs' | 'cliches' | 'dialogue' | 'pov' | 'cut' | 'sensory' | 'repeats' | 'none',
  tryPrompt: L,      // как перенести приём на свой текст
  source: [ids]
}
```

## Библиотека — `SM.addReadings([...])`, `SM.addComparisons([...])`

```js
// Аналитическое чтение: оригинальный фрагмент, написанный для сайта
{ id, title: L, genre, minutes, text: L /* до 250 слов */,
  notes: [{ quote: L /* дословно встречается в text на своём языке */, comment: L }],  // 3–6
  questions: [L],   // что заметить: слова, ритм, детали, точка зрения, эффект
  tryIt: L }        // попробовать приём на своём материале

// Сравнение версий
{ id, title: L, task: L /* для какой задачи текст */, a: L, b: L,
  changed: L /* разбор: что изменилось и как это влияет на смысл */,
  better: L /* какая версия лучше подходит для задачи и почему; может быть «зависит от…» */ }
```
Три стандартных вопроса («Что именно изменилось?», «Как это повлияло на смысл?», «Какой вариант
подходит для этой задачи?») приложение добавляет само.

## Тематические мастерские — `SM.addWorkshops([...])`

```js
{ id: 'wedding', title: L, age: '13+' | '15+', minutes: 20,
  hook: L, angle: L,            // зачем писателю эта тема, на каком приёме фокус
  techniques: [L],              // 2–5 приёмов, по 1–2 предложения
  warmup: Exercise, main: Exercise,
  alt: L,                       // альтернатива для тех, кто не хочет писать о семье/личном
  avoid: L,                     // ловушки и клише темы
  reading: [{ title, author, age: '13+'|'15+'|'16+' }],   // по желанию, только подходящее по возрасту
  teacher: { note: L, source: [ids] } }
```

## Каждый день и вызов недели — `SM.addDaily([...])`, `SM.addWeekly([...])`

```js
{ id: 'd01', skill: 'observation', prompt: L /* задание на 5 минут */, twist: L /* необязательное усложнение */ }
{ id: 'w01', title: L, brief: L, steps: [L] /* 3–5 шагов на неделю */, share: L /* что показать преподавателю, по желанию */ }
```

## Словарь — `SM.setVocab({...})`

```js
{ intro: L,          // разница между «знаю слово» и «умею его уместно использовать»
  method: L,         // как реалистично отслеживать прогресс 2–3 месяца, без гарантий
  weekPlan: [L],     // ритм недели: 10–15 минут в день
  drills: [{ id, title: L, how: L, exercise: Exercise }],   // ≥ 6: оттенки, сильные глаголы, контекст, регистры, чтение, повторное использование
  shades: { ru: [{ base, words: [...] , note }], en: [...] },  // ряды синонимов с разными оттенками
  registers: { ru: [{ neutral, formal, casual }], en: [...] } }
```

## Мастерская эссе — `SM.setEssay({...})`

```js
{ types: { contest: {title: L, about: L}, statement: {...}, scholarship: {...} },
  prompts: [{ id, type, text: L, limit, note: L }],          // примеры заданий (свои формулировки)
  stages: [{ id, title: L, why: L, steps: [L], fields: [{ id, label: L, hint: L }] }],  // 8 этапов
  weakEssay: { title: L, text: L, questions: [...как в choose] },
  values: { groups: [{ id, title: L, items: [L] }] },
  feelings: { ru: [...], en: [...] }, needs: { ru: [...], en: [...] },
  questionBank: { [stageId]: [L] },     // вопросы помощника по этапам
  moves: [{ id, title: L, how: L }],    // меню редакторских решений (сократить, переставить, уточнить…)
  truthCheck: [L],                      // чек-лист правдивости и фактов
  rules: L }                            // что помощник делает и чего не делает
```

## Для преподавателя — `SM.setTeacher({...})`

```js
{ principles: [{ title: L, text: L }], howTo: L, feedback: L, safety: L,
  sources: [{ id, title, author, year, url?, licence?, used: L }],
  readingLists: [{ theme: L, books: [{ title, author, age }] }] }
```
