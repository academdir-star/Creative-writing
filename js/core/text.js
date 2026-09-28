/* Local text analysis. Rule-based and deliberately modest: it sees surface features
   (word lists, sentence lengths, repetition), not meaning. Russian and English use
   different rules and differ in accuracy — the UI says so. */
(function () {
  'use strict';

  var SM = window.SM;

  var WORD_RE = /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu;

  function words(text) {
    return String(text || '').match(WORD_RE) || [];
  }

  function wordCount(text) {
    return words(text).length;
  }

  // Sentences with their character offsets
  function sentences(text) {
    var src = String(text || '');
    var out = [];
    var re = /[^.!?…\n]+(?:[.!?…]+[»"”')\]]*|\n|$)/g;
    var m;
    while ((m = re.exec(src)) !== null) {
      if (!m[0]) { re.lastIndex++; continue; }
      var raw = m[0];
      var trimmed = raw.trim();
      if (trimmed && wordCount(trimmed) > 0) {
        var start = m.index + raw.indexOf(trimmed.charAt(0));
        out.push({ text: trimmed, start: start, end: start + trimmed.length, words: wordCount(trimmed) });
      }
      if (re.lastIndex === m.index) re.lastIndex++;
    }
    return out;
  }

  function paragraphs(text) {
    return String(text || '').split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean);
  }

  // ---- Language data ------------------------------------------------------

  var DATA = {
    ru: {
      emotionStems: [
        'груст', 'печал', 'радост', 'обрадов', 'счасть', 'счастлив', 'страх', 'страшн', 'боюсь', 'боял', 'боится',
        'испуг', 'ужас', 'тревог', 'тревож', 'волновал', 'волнуюсь', 'волнует', 'волнение', 'взволнов',
        'злост', 'злил', 'разозл', 'обид', 'стыд', 'одинок', 'тоск', 'восторг', 'ненавист', 'ненавиж', 'ненавид',
        'ревн', 'завист', 'завидо', 'разочаров', 'паник', 'нервнич', 'отчаян', 'гнев', 'раздраж', 'смущ', 'неловк',
        'скучал', 'скучаю', 'умиротвор', 'облегчен', 'благодарн', 'вдохнов', 'растерян', 'потрясен', 'потрясён'
      ],
      emotionWords: ['рад', 'рада', 'рады', 'злой', 'злая', 'зла', 'зол', 'грустно', 'страшно', 'скучно', 'стыдно', 'обидно', 'весело', 'любовь'],
      labels: [
        'красивый', 'красивая', 'красивое', 'красивые', 'красиво', 'уютный', 'уютная', 'уютно', 'интересный', 'интересная',
        'интересно', 'странный', 'странная', 'странно', 'обычный', 'обычная', 'обычно', 'ужасный', 'ужасная', 'ужасно',
        'прекрасный', 'прекрасная', 'прекрасно', 'замечательный', 'замечательно', 'удивительный', 'удивительно',
        'хороший', 'хорошая', 'хорошо', 'плохой', 'плохая', 'плохо', 'милый', 'милая', 'мило', 'классный', 'классно',
        'грустный', 'грустная', 'весёлый', 'веселый', 'весёлая', 'скучный', 'скучная', 'страшный', 'страшная',
        'огромный', 'огромная', 'невероятный', 'невероятно', 'потрясающий', 'потрясающе', 'необычный', 'необычно', 'особенный'
      ],
      fillers: ['очень', 'просто', 'реально', 'действительно', 'абсолютно', 'совершенно', 'невероятно', 'безумно', 'крайне',
        'буквально', 'вообще', 'типа', 'довольно', 'весьма', 'слишком', 'чрезвычайно'],
      fillerPhrases: ['как бы', 'на самом деле', 'в принципе', 'в тот момент', 'в какой-то момент', 'так сказать', 'в общем'],
      cliches: [
        'время остановилось', 'время будто остановилось', 'сердце выпрыгивало', 'сердце бешено колотилось', 'сердце ушло в пятки',
        'гробовая тишина', 'мёртвая тишина', 'мертвая тишина', 'слёзы текли ручьём', 'слезы текли ручьем', 'как две капли воды',
        'на седьмом небе', 'бабочки в животе', 'мурашки по коже', 'кровь застыла', 'кровь стыла в жилах', 'холодный пот',
        'как гром среди ясного неба', 'золотая осень', 'белоснежные зубы', 'изумрудная трава', 'бездонные глаза',
        'глаза как озёра', 'глаза как озера', 'жизнь разделилась на до и после', 'с тех пор всё изменилось', 'с тех пор все изменилось',
        'в мгновение ока', 'яркий как солнце', 'сердце разбилось', 'разбитое сердце', 'не находила себе места',
        'не находил себе места', 'земля ушла из-под ног', 'мир перевернулся', 'на тот момент', 'тёплые воспоминания',
        'теплые воспоминания', 'незабываемые впечатления', 'море эмоций', 'буря эмоций', 'шквал эмоций', 'комок в горле',
        'выйти из зоны комфорта', 'зона комфорта', 'найти себя', 'путь к себе', 'жизнь — это', 'жизнь это',
        'с самого детства', 'с раннего детства', 'я всегда мечтал', 'я всегда мечтала', 'изменило мою жизнь', 'изменил мою жизнь',
        'неизгладимое впечатление', 'рука об руку', 'на одном дыхании', 'последний луч надежды', 'луч надежды'
      ],
      sensoryStems: {
        sound: ['звук', 'звен', 'скрип', 'шурш', 'гул', 'шум', 'стук', 'хлоп', 'тиш', 'шёпот', 'шепот', 'шепч', 'гудел', 'гудит', 'тикал', 'тикает', 'лязг', 'хруст', 'свист', 'журч', 'плеск', 'грохот', 'бормот', 'эхо'],
        smell: ['пах', 'запах', 'аромат', 'вонь', 'воня', 'дым', 'гарь'],
        touch: ['тёпл', 'тепл', 'холодн', 'мокр', 'влажн', 'шершав', 'гладк', 'липк', 'колюч', 'мягк', 'жёстк', 'жестк', 'ледян', 'горяч', 'пушист'],
        taste: ['вкус', 'сладк', 'горьк', 'кисл', 'солён', 'солен', 'пресн', 'остр'],
        sight: ['свет', 'тень', 'блест', 'блеск', 'сверк', 'мерца', 'темн', 'тёмн', 'ярк', 'бледн', 'ржав', 'пятн', 'отблеск']
      },
      said: ['сказал', 'сказала', 'сказали', 'говорит', 'говорил', 'говорила', 'спросил', 'спросила', 'ответил', 'ответила'],
      explain: ['потому что', 'так как', 'из-за того что', 'поэтому', 'он понял что', 'она поняла что', 'он злился', 'она злилась'],
      weakVerbs: ['был', 'была', 'было', 'были', 'есть', 'стал', 'стала', 'стали', 'сделал', 'сделала', 'делал', 'делала',
        'пошёл', 'пошел', 'пошла', 'шёл', 'шел', 'шла', 'идти', 'иду', 'имел', 'имела', 'находился', 'находилась', 'являлся', 'являлась', 'является'],
      i: ['я'],
      first: ['я', 'меня', 'мне', 'мной', 'мой', 'моя', 'моё', 'мое', 'мои', 'моего', 'моей', 'моих', 'мы', 'нас', 'нам', 'наш', 'наша'],
      second: ['ты', 'тебя', 'тебе', 'тобой', 'твой', 'твоя', 'твои', 'вы', 'вас', 'вам'],
      third: ['он', 'она', 'они', 'его', 'её', 'ее', 'их', 'ему', 'ей', 'им', 'него', 'неё', 'нее', 'них', 'ним', 'ней'],
      stop: ['и', 'в', 'во', 'не', 'на', 'с', 'со', 'что', 'как', 'а', 'но', 'я', 'он', 'она', 'они', 'мы', 'ты', 'вы', 'это',
        'то', 'к', 'ко', 'у', 'же', 'ли', 'бы', 'по', 'из', 'за', 'от', 'до', 'о', 'об', 'для', 'так', 'его', 'её', 'ее',
        'их', 'мне', 'меня', 'был', 'была', 'было', 'были', 'все', 'всё', 'уже', 'ещё', 'еще', 'только', 'когда', 'где',
        'там', 'тут', 'вот', 'да', 'нет', 'или', 'если', 'чтобы', 'потом', 'тоже', 'даже', 'ну', 'при', 'про', 'над', 'под',
        'этот', 'эта', 'эти', 'того', 'этого', 'этом', 'том', 'кто', 'чем', 'мой', 'моя', 'свой', 'своя', 'себя', 'себе',
        'очень', 'просто', 'сказал', 'сказала', 'может', 'будет', 'есть', 'нас', 'нам', 'вас', 'им', 'ей', 'ему', 'него', 'неё'],
      adjStop: ['который', 'которая', 'которое', 'которые', 'которого', 'которой', 'которому', 'которым', 'которых', 'какой', 'какая',
        'какое', 'какие', 'какого', 'такой', 'такая', 'такое', 'такие', 'такого', 'каждый', 'каждая', 'каждое', 'каждого', 'любой',
        'любая', 'любое', 'никакой', 'никакая', 'самый', 'самая', 'самое', 'самые', 'этого', 'того', 'всего', 'моего', 'твоего',
        'своего', 'нашего', 'вашего', 'одного', 'чего', 'кого', 'ничего', 'никого', 'сегодня', 'его', 'него', 'ему', 'нему',
        'тому', 'этому', 'всему', 'кому', 'почему', 'моему', 'твоему', 'своему', 'нашему', 'одному', 'первый', 'второй',
        'третий', 'последний', 'один', 'одна', 'одно', 'одни', 'свое', 'моё', 'мое', 'твоё', 'твое', 'своё', 'мои', 'твои',
        'свои', 'вовремя', 'такими', 'какими', 'своими', 'моими', 'твоими', 'нашими', 'другими', 'всеми', 'ними', 'этими', 'теми', 'здание', 'мнение'],
      adjIeAllow: ['синие', 'ранние', 'поздние', 'последние', 'верхние', 'нижние', 'древние', 'летние', 'зимние', 'весенние',
        'осенние', 'утренние', 'вечерние', 'домашние', 'соседние', 'давние', 'крайние', 'средние', 'лишние', 'внешние',
        'внутренние', 'вчерашние', 'сегодняшние', 'здешние', 'хорошие', 'большие', 'маленькие', 'тихие', 'громкие', 'другие'],
      adjOy: ['большой', 'другой', 'молодой', 'золотой', 'пустой', 'седой', 'прямой', 'крутой', 'живой', 'простой', 'густой',
        'родной', 'чужой', 'смешной', 'дорогой', 'плохой', 'глухой', 'сухой', 'лесной', 'ночной', 'дневной', 'стальной',
        'голубой', 'морской', 'городской', 'деревянной', 'стеклянной', 'железной', 'длинной', 'старой', 'новой', 'красной',
        'белой', 'чёрной', 'черной', 'синей', 'зелёной', 'зеленой', 'холодной', 'тёплой', 'теплой', 'пустой', 'тихой', 'ровной',
        'мокрой', 'тёмной', 'темной', 'светлой', 'большой', 'маленькой', 'огромной', 'странной', 'красивой', 'уютной', 'грустной'],
      names: ['юрий', 'дмитрий', 'василий', 'георгий', 'аркадий', 'анатолий', 'геннадий', 'виталий', 'валерий', 'евгений',
        'григорий', 'арсений', 'мой', 'твой', 'свой', 'чей', 'сценарий', 'гений', 'кий']
    },
    en: {
      emotionWords: ['sad', 'sadness', 'sadly', 'unhappy', 'happy', 'happiness', 'happily', 'glad', 'joy', 'joyful', 'afraid',
        'scared', 'fear', 'feared', 'fearful', 'frightened', 'terrified', 'anxious', 'anxiety', 'nervous', 'nervously', 'worried',
        'worry', 'worrying', 'angry', 'anger', 'angrily', 'furious', 'upset', 'lonely', 'loneliness', 'ashamed', 'shame',
        'embarrassed', 'embarrassment', 'jealous', 'jealousy', 'envy', 'envious', 'disappointed', 'disappointment', 'excited',
        'excitement', 'thrilled', 'bored', 'depressed', 'miserable', 'heartbroken', 'relieved', 'relief', 'grateful',
        'gratitude', 'guilty', 'guilt', 'proud', 'pride', 'panic', 'panicked', 'hopeless', 'hopeful', 'overwhelmed', 'stressed',
        'calm', 'content', 'delighted', 'devastated', 'horrified', 'confused', 'frustrated', 'frustration', 'amazed'],
      labels: ['beautiful', 'pretty', 'nice', 'cosy', 'cozy', 'interesting', 'weird', 'strange', 'normal', 'ordinary', 'awful',
        'terrible', 'wonderful', 'amazing', 'awesome', 'incredible', 'good', 'bad', 'great', 'lovely', 'cute', 'cool', 'boring',
        'scary', 'huge', 'unique', 'special', 'fantastic', 'perfect', 'unforgettable', 'magical', 'stunning', 'breathtaking'],
      fillers: ['very', 'really', 'just', 'quite', 'actually', 'basically', 'literally', 'totally', 'extremely', 'incredibly',
        'absolutely', 'completely', 'truly', 'rather', 'somewhat', 'definitely', 'simply'],
      fillerPhrases: ['kind of', 'sort of', 'a lot of', 'in that moment', 'at that moment', 'in order to', 'the fact that'],
      cliches: [
        'time stood still', 'time seemed to stop', 'heart pounding', 'heart was pounding', 'heart skipped a beat', 'heart in my throat',
        'dead silence', 'deafening silence', 'tears streaming', 'tears rolled down', 'two peas in a pod', 'like a deer in headlights',
        'on cloud nine', 'butterflies in my stomach', 'blood ran cold', 'cold sweat', 'out of the blue', 'bolt from the blue',
        'crystal clear', 'pearly white', 'emerald green', 'piercing eyes', 'eyes like pools', 'in the blink of an eye',
        'a leap of faith', 'at the end of the day', 'my whole life changed', 'changed my life forever', 'changed my life',
        'life is a journey', 'life is a series', 'comfort zone', 'out of my comfort zone', 'find myself', 'found myself',
        'ever since i was little', 'ever since i was a child', 'since i was young', 'i have always dreamed', 'i have always wanted',
        'passion for', 'make a difference', 'a whole new world', 'the rest is history', 'little did i know', 'last but not least',
        'shackles of', 'crossroads', 'fire within', 'the universe', 'rollercoaster of emotions', 'roller coaster of emotions',
        'a lump in my throat', 'broke my heart', 'heart broke', 'all of a sudden', 'bright as the sun', 'in today’s society',
        "in today's society", 'since the dawn of time', 'first and foremost'
      ],
      sensory: {
        sound: ['sound', 'creak', 'creaked', 'rustle', 'rustled', 'rustling', 'hum', 'hummed', 'buzz', 'buzzed', 'clatter', 'clattered',
          'thud', 'bang', 'banged', 'silence', 'silent', 'whisper', 'whispered', 'murmur', 'murmured', 'tick', 'ticked', 'ticking',
          'crunch', 'crunched', 'whistle', 'hiss', 'hissed', 'splash', 'echo', 'echoed', 'rattle', 'rattled', 'click', 'clicked', 'ring', 'rang'],
        smell: ['smell', 'smelled', 'smelt', 'smells', 'scent', 'stink', 'stank', 'smoke', 'smoky', 'perfume', 'reek', 'reeked'],
        touch: ['warm', 'cold', 'wet', 'damp', 'rough', 'smooth', 'sticky', 'prickly', 'soft', 'hard', 'icy', 'hot', 'fluffy', 'greasy', 'slippery'],
        taste: ['taste', 'tasted', 'sweet', 'bitter', 'sour', 'salty', 'bland', 'spicy'],
        sight: ['light', 'shadow', 'glint', 'glinted', 'gleam', 'shine', 'shone', 'flicker', 'flickered', 'dark', 'bright', 'pale', 'rust', 'rusty', 'stain', 'stained']
      },
      said: ['said', 'says', 'say', 'asked', 'replied', 'answered', 'told'],
      explain: ['because', 'which meant', 'he realised that', 'she realised that', 'he realized that', 'she realized that', 'he was angry', 'she was angry'],
      weakVerbs: ['was', 'were', 'is', 'are', 'be', 'been', 'being', 'got', 'get', 'gets', 'went', 'go', 'goes', 'did', 'do', 'does',
        'made', 'make', 'had', 'have', 'has', 'walked', 'looked', 'seemed'],
      i: ['i'],
      first: ['i', 'me', 'my', 'mine', 'myself', 'we', 'us', 'our', 'ours'],
      second: ['you', 'your', 'yours', 'yourself'],
      third: ['he', 'she', 'they', 'him', 'her', 'them', 'his', 'hers', 'their', 'theirs'],
      stop: ['the', 'a', 'an', 'and', 'or', 'but', 'of', 'to', 'in', 'on', 'at', 'for', 'with', 'from', 'by', 'as', 'is', 'was',
        'were', 'are', 'be', 'been', 'it', 'its', 'it’s', "it's", 'i', 'me', 'my', 'we', 'you', 'he', 'she', 'they', 'them',
        'his', 'her', 'their', 'this', 'that', 'these', 'those', 'there', 'then', 'than', 'so', 'if', 'not', 'no', 'do', 'did',
        'had', 'have', 'has', 'just', 'very', 'really', 'up', 'out', 'into', 'about', 'what', 'when', 'where', 'who', 'which',
        'all', 'one', 'said', 'would', 'could', 'can', 'will', 'like', 'back', 'again', 'still', 'too', 'only', 'even'],
      adjCommon: ['old', 'new', 'big', 'small', 'little', 'long', 'short', 'high', 'low', 'young', 'large', 'dark', 'bright',
        'cold', 'warm', 'hot', 'wet', 'dry', 'quiet', 'loud', 'soft', 'hard', 'heavy', 'light', 'red', 'blue', 'green', 'yellow',
        'black', 'white', 'grey', 'gray', 'brown', 'pink', 'purple', 'orange', 'empty', 'full', 'clean', 'dirty', 'narrow',
        'wide', 'thin', 'thick', 'tall', 'sharp', 'slow', 'fast', 'quick', 'strange', 'sad', 'happy', 'tired', 'angry', 'kind',
        'cruel', 'gentle', 'rough', 'smooth', 'sweet', 'bitter', 'sour', 'fresh', 'rotten', 'broken', 'tiny', 'enormous',
        'ancient', 'modern', 'silent', 'noisy', 'lonely', 'busy', 'lazy', 'pale', 'deep', 'shallow', 'bare', 'ugly', 'nervous',
        'calm', 'gloomy', 'shiny', 'dusty', 'rusty', 'sticky', 'damp', 'icy', 'foggy', 'sunny', 'cloudy', 'rainy', 'windy',
        'crowded', 'tired', 'worn', 'faded', 'plastic', 'wooden', 'golden', 'silver', 'huge', 'soft', 'hollow', 'crooked', 'neat',
        'messy', 'shabby', 'elegant', 'fancy', 'plain', 'brave', 'shy', 'proud', 'curious', 'polite', 'rude', 'strict', 'awkward']
        .concat(['beautiful', 'pretty', 'nice', 'cosy', 'cozy', 'interesting', 'weird', 'normal', 'ordinary', 'awful', 'terrible',
          'wonderful', 'amazing', 'awesome', 'incredible', 'good', 'bad', 'great', 'lovely', 'cute', 'cool', 'boring', 'scary',
          'unique', 'special', 'fantastic', 'perfect', 'unforgettable', 'magical', 'stunning', 'breathtaking']),
      adjSuffix: /(ful|ous|less|ive|able|ible|ish|ical|esque)$/,
      adjSuffixStop: ['table', 'vegetable', 'cable', 'able', 'fable', 'stable', 'olive', 'native', 'relative', 'detective',
        'motive', 'dish', 'fish', 'wish', 'english', 'polish', 'finish', 'publish', 'radish', 'relish', 'handful', 'mouthful',
        'spoonful', 'bus', 'famous', 'unless', 'bless', 'less', 'live', 'give', 'five', 'drive', 'arrive', 'alive', 'hive', 'dive',
        'thrive', 'archive', 'variable', 'constable', 'timetable', 'syllable']
    }
  };

  function langData(lang) { return DATA[lang] || DATA.ru; }

  function lower(s) { return String(s || '').toLowerCase().replace(/ё/g, 'е'); }

  function stemMatch(word, stems) {
    for (var i = 0; i < stems.length; i++) {
      if (word.indexOf(lower(stems[i])) === 0) return true;
    }
    return false;
  }

  // Find token occurrences with offsets
  function tokens(text) {
    var out = [];
    var src = String(text || '');
    var m;
    WORD_RE.lastIndex = 0;
    while ((m = WORD_RE.exec(src)) !== null) {
      out.push({ w: m[0], lw: lower(m[0]), start: m.index, end: m.index + m[0].length });
    }
    return out;
  }

  function isEmotion(tok, lang) {
    var d = langData(lang);
    if (lang === 'en') return d.emotionWords.indexOf(tok.lw) !== -1;
    if (d.emotionWords.map(lower).indexOf(tok.lw) !== -1) return true;
    return stemMatch(tok.lw, d.emotionStems);
  }

  function isAdjectiveRu(lw) {
    var d = DATA.ru;
    if (lw.length < 4) return false;
    if (d.adjStop.map(lower).indexOf(lw) !== -1) return false;
    if (d.names.indexOf(lw) !== -1) return false;
    if (d.adjOy.map(lower).indexOf(lw) !== -1) return true;
    if (/(ый|ая|яя|ое|ые|ого|ому|ую|юю|ыми|ых|ым)$/.test(lw)) {
      if (/(ую)$/.test(lw) && /[стцщ]ую$|ствую$|ирую$/.test(lw)) return false;
      if (/ому$/.test(lw) && lw.length < 6) return false;
      return true;
    }
    if (/ий$/.test(lw)) return !/(ений|аний|арий|орий|ерий|аций|иций|ктий|стий)$/.test(lw);
    if (/ие$/.test(lw)) {
      if (d.adjIeAllow.map(lower).indexOf(lw) !== -1) return true;
      return /[кгхжшщч]ие$/.test(lw);
    }
    if (/ее$/.test(lw)) return /[нжшщч]ее$/.test(lw) && lw.length > 5;
    if (/(им|их|ими)$/.test(lw)) return /[кгхжшщч](им|их|ими)$/.test(lw);
    if (/(его|ему)$/.test(lw)) return /[нжшщч](его|ему)$/.test(lw) && lw.length > 5;
    return false;
  }

  function isAdjectiveEn(lw) {
    var d = DATA.en;
    if (d.adjCommon.indexOf(lw) !== -1) return true;
    if (lw.length > 5 && d.adjSuffix.test(lw) && d.adjSuffixStop.indexOf(lw) === -1) return true;
    return false;
  }

  function isAdjective(tok, lang) {
    return lang === 'en' ? isAdjectiveEn(tok.lw) : isAdjectiveRu(tok.lw);
  }

  function isLabel(tok, lang) {
    return langData(lang).labels.map(lower).indexOf(tok.lw) !== -1;
  }

  function isFiller(tok, lang) {
    return langData(lang).fillers.indexOf(tok.lw) !== -1;
  }

  function isWeakVerb(tok, lang) {
    return langData(lang).weakVerbs.map(lower).indexOf(tok.lw) !== -1;
  }

  function senseOf(tok, lang) {
    var d = langData(lang);
    var table = lang === 'en' ? d.sensory : d.sensoryStems;
    var senses = Object.keys(table);
    for (var i = 0; i < senses.length; i++) {
      var list = table[senses[i]];
      if (lang === 'en') { if (list.indexOf(tok.lw) !== -1) return senses[i]; }
      else if (stemMatch(tok.lw, list)) return senses[i];
    }
    return null;
  }

  function phraseHits(text, phrases) {
    var src = lower(text);
    var hits = [];
    phrases.forEach(function (p) {
      var needle = lower(p);
      var from = 0, ix;
      while ((ix = src.indexOf(needle, from)) !== -1) {
        var before = ix === 0 ? ' ' : src.charAt(ix - 1);
        var after = src.charAt(ix + needle.length) || ' ';
        if (!/[\p{L}\p{N}]/u.test(before) && !/[\p{L}\p{N}]/u.test(after)) {
          hits.push({ phrase: p, start: ix, end: ix + needle.length, text: String(text).substr(ix, needle.length) });
        }
        from = ix + needle.length;
      }
    });
    // drop overlapping (keep the longest)
    hits.sort(function (a, b) { return a.start - b.start || (b.end - b.start) - (a.end - a.start); });
    var out = [];
    hits.forEach(function (h) {
      var last = out[out.length - 1];
      if (!last || h.start >= last.end) out.push(h);
    });
    return out;
  }

  function stemRu(w) {
    return w.length > 5 ? w.slice(0, Math.max(4, w.length - 3)) : w;
  }

  function repeats(tokList, lang) {
    var d = langData(lang);
    var stop = d.stop.map(lower);
    var counts = {};
    tokList.forEach(function (t) {
      if (t.lw.length < 4 || stop.indexOf(t.lw) !== -1 || /^\d+$/.test(t.lw)) return;
      var key = lang === 'en' ? t.lw.replace(/(ing|ed|es|s)$/, '') : stemRu(t.lw);
      if (!counts[key]) counts[key] = { key: key, word: t.w, n: 0, tokens: [] };
      counts[key].n++;
      counts[key].tokens.push(t);
    });
    return Object.keys(counts).map(function (k) { return counts[k]; })
      .filter(function (c) { return c.n >= 3; })
      .sort(function (a, b) { return b.n - a.n; });
  }

  function dialogueLines(text) {
    return String(text || '').split('\n').filter(function (line) {
      var l = line.trim();
      return /^[—–-]\s*\S/.test(l) || /[«“"„].{2,}[»”"]/.test(l);
    });
  }

  function mean(arr) { return arr.length ? arr.reduce(function (a, b) { return a + b; }, 0) / arr.length : 0; }

  function stdev(arr) {
    if (arr.length < 2) return 0;
    var m = mean(arr);
    return Math.sqrt(mean(arr.map(function (x) { return (x - m) * (x - m); })));
  }

  // ---- Main analysis -------------------------------------------------------

  function analyze(text, lang) {
    lang = lang || SM.lang();
    var d = langData(lang);
    var src = String(text || '');
    var toks = tokens(src);
    var sents = sentences(src);
    var lens = sents.map(function (s) { return s.words; });

    var emotions = toks.filter(function (t) { return isEmotion(t, lang); });
    var adjectives = toks.filter(function (t) { return isAdjective(t, lang); });
    var labels = toks.filter(function (t) { return isLabel(t, lang); });
    var fillers = toks.filter(function (t) { return isFiller(t, lang); })
      .concat(phraseHits(src, d.fillerPhrases).map(function (h) { return { w: h.text, lw: lower(h.text), start: h.start, end: h.end }; }));
    var weak = toks.filter(function (t) { return isWeakVerb(t, lang); });
    var sensory = [];
    toks.forEach(function (t) { var s = senseOf(t, lang); if (s) sensory.push({ w: t.w, lw: t.lw, start: t.start, end: t.end, sense: s }); });
    var cliches = phraseHits(src, d.cliches);
    var explain = phraseHits(src, d.explain);
    var saidTok = toks.filter(function (t) { return d.said.indexOf(t.lw) !== -1; });
    var dialog = dialogueLines(src);
    var reps = repeats(toks, lang);

    var pov = { first: 0, second: 0, third: 0 };
    toks.forEach(function (t) {
      if (d.first.indexOf(t.lw) !== -1) pov.first++;
      else if (d.second.indexOf(t.lw) !== -1) pov.second++;
      else if (d.third.indexOf(t.lw) !== -1) pov.third++;
    });

    var iStarts = 0, maxIRun = 0, run = 0;
    sents.forEach(function (s) {
      var first = lower((s.text.match(WORD_RE) || [''])[0]);
      if (d.i.indexOf(first) !== -1) { iStarts++; run++; maxIRun = Math.max(maxIRun, run); } else run = 0;
    });

    var specifics = toks.filter(function (t, ix) {
      if (/^\d/.test(t.w)) return true;
      // capitalised word not at sentence start
      if (/^\p{Lu}/u.test(t.w) && ix > 0) {
        var prevChar = src.slice(Math.max(0, t.start - 3), t.start);
        return !/[.!?…\n]\s*$/.test(prevChar) && !/^[—–-]\s*$/.test(prevChar.trim()) && d.i.indexOf(t.lw) === -1;
      }
      return false;
    });

    return {
      lang: lang,
      text: src,
      words: toks.length,
      tokens: toks,
      sentences: sents,
      lengths: lens,
      avgLen: mean(lens),
      spread: stdev(lens),
      shortest: lens.length ? Math.min.apply(null, lens) : 0,
      longest: lens.length ? Math.max.apply(null, lens) : 0,
      paragraphs: paragraphs(src).length,
      emotions: emotions,
      adjectives: adjectives,
      labels: labels,
      fillers: fillers,
      weakVerbs: weak,
      sensory: sensory,
      cliches: cliches,
      explain: explain,
      said: saidTok,
      dialogue: dialog,
      repeats: reps,
      pov: pov,
      iStarts: iStarts,
      maxIRun: maxIRun,
      specifics: specifics
    };
  }

  function sentenceAt(analysis, offset) {
    for (var i = 0; i < analysis.sentences.length; i++) {
      var s = analysis.sentences[i];
      if (offset >= s.start && offset <= s.end) return s;
    }
    return null;
  }

  // ---- Constraint rules ---------------------------------------------------

  function checkRule(rule, a, extra) {
    var lang = a.lang;
    var L = function (o) { return SM.L(o); };
    switch (rule.kind) {
      case 'ban-emotions':
        return { ok: a.emotions.length === 0, hits: a.emotions, label: SM.t('rule.banEmotions'), detail: a.emotions.map(function (t) { return t.w; }) };
      case 'ban-adjectives':
        return { ok: a.adjectives.length === 0, hits: a.adjectives, label: SM.t('rule.banAdjectives'), detail: a.adjectives.map(function (t) { return t.w; }), approx: true };
      case 'max-adjectives':
        return { ok: a.adjectives.length <= rule.n, hits: a.adjectives, label: SM.t('rule.maxAdjectives', { n: rule.n, count: a.adjectives.length }), detail: a.adjectives.map(function (t) { return t.w; }), approx: true };
      case 'max-words':
        return { ok: a.words <= rule.n && a.words > 0, label: SM.t('rule.maxWords', { n: rule.n, count: a.words }) };
      case 'min-words':
        return { ok: a.words >= rule.n, label: SM.t('rule.minWords', { n: rule.n, count: a.words }) };
      case 'cut': {
        var srcWords = wordCount(SM.util.plain(L(rule.source)));
        var target = Math.floor(srcWords * (1 - rule.percent / 100));
        return { ok: a.words > 0 && a.words <= target, label: SM.t('rule.cut', { percent: rule.percent, target: target, source: srcWords, count: a.words }) };
      }
      case 'no-said':
        return { ok: a.said.length === 0, hits: a.said, label: SM.t('rule.noSaid'), detail: a.said.map(function (t) { return t.w; }) };
      case 'must-dialogue':
        return { ok: a.dialogue.length >= 2, label: SM.t('rule.mustDialogue', { count: a.dialogue.length }) };
      case 'sentence-lengths': {
        var hasShort = a.lengths.some(function (n) { return n <= 4; });
        var hasLong = a.lengths.some(function (n) { return n >= 20; });
        return { ok: hasShort && hasLong, label: SM.t('rule.sentenceLengths', { shortest: a.shortest, longest: a.longest }) };
      }
      case 'ban-words': {
        var banned = (rule.words[lang] || []).map(lower);
        var hits = a.tokens.filter(function (t) { return banned.indexOf(t.lw) !== -1; });
        return { ok: hits.length === 0, hits: hits, label: SM.t('rule.banWords', { words: (rule.words[lang] || []).join(', ') }), detail: hits.map(function (t) { return t.w; }) };
      }
      case 'must-words': {
        var needed = (extra && extra.words) || rule.words[lang] || [];
        var missing = needed.filter(function (w) {
          var lw = lower(w);
          var stem = lang === 'en' ? lw.replace(/(ing|ed|es|s)$/, '') : stemRu(lw);
          return !a.tokens.some(function (t) { return t.lw === lw || t.lw.indexOf(stem) === 0; });
        });
        return { ok: missing.length === 0 && needed.length > 0, label: SM.t('rule.mustWords', { words: needed.join(', ') }), detail: missing, missing: true };
      }
      case 'no-i-start':
        return { ok: a.maxIRun < 2, label: SM.t('rule.noIStart') };
      default:
        return { ok: true, label: rule.kind };
    }
  }

  // Wraps hits in <mark> for a mirror view
  function highlight(text, marks) {
    var src = String(text || '');
    var list = marks.filter(function (m) { return m && m.end > m.start; })
      .sort(function (a, b) { return a.start - b.start; });
    var out = '';
    var pos = 0;
    list.forEach(function (m) {
      if (m.start < pos) return;
      out += SM.util.esc(src.slice(pos, m.start));
      out += '<mark class="hl hl--' + (m.cls || 'x') + '"' + (m.title ? ' title="' + SM.util.esc(m.title) + '"' : '') + '>' + SM.util.esc(src.slice(m.start, m.end)) + '</mark>';
      pos = m.end;
    });
    out += SM.util.esc(src.slice(pos));
    return out.replace(/\n/g, '<br>');
  }

  function stemOf(word, lang) {
    var lw = lower(word);
    return lang === 'en' ? lw.replace(/(ing|ed|es|s)$/, '') : stemRu(lw);
  }

  // Count uses of a word (by crude stem) in a text
  function countWord(text, word, lang) {
    var stem = stemOf(word, lang);
    var lw = lower(word);
    if (!stem) return 0;
    return tokens(text).filter(function (t) { return t.lw === lw || (stem.length >= 3 && t.lw.indexOf(stem) === 0); }).length;
  }

  SM.text = {
    words: words,
    wordCount: wordCount,
    sentences: sentences,
    tokens: tokens,
    analyze: analyze,
    sentenceAt: sentenceAt,
    checkRule: checkRule,
    highlight: highlight,
    countWord: countWord,
    stemOf: stemOf,
    lower: lower
  };
})();
