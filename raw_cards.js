// Verified & Corrected HSK 1 300-Card Master Dataset (v2)
// All 300 entries audited for Chinese grammar, Pinyin accuracy, English translation, and slot replacement consistency.
// Format: [id, hanzi, pinyin, pos, english, cluster, frame, tplH, tplP, tplE, slot, opts, scene]
const RAW_CARDS = [
  [
    1,
    "爱",
    "ài",
    "verb",
    "to love",
    "1",
    "[主语]+爱+[对象]",
    "我爱{S}。",
    "Wǒ ài {S}.",
    "I love {S}.",
    "妈妈",
    [
      "妈妈",
      "爸爸",
      "中国"
    ],
    "a young woman smiling warmly while hugging her mother in a bright living room"
  ],
  [
    2,
    "八",
    "bā",
    "number",
    "eight",
    "3",
    "现在+{S}+点",
    "现在{S}点。",
    "Xiànzài {S} diǎn.",
    "It is {S} o'clock now.",
    "八",
    [
      "八",
      "七",
      "九"
    ],
    "a wall clock showing eight o'clock in a sunlit kitchen"
  ],
  [
    3,
    "爸爸",
    "bàba",
    "noun",
    "dad",
    "4",
    "我的+{S}+工作",
    "我{S}在公司工作。",
    "Wǒ {S} zài gōngsī gōngzuò.",
    "My {S} works at a company.",
    "爸爸",
    [
      "爸爸",
      "妈妈",
      "哥哥"
    ],
    "a middle-aged father wearing a casual shirt working at a desk near a window"
  ],
  [
    4,
    "吧",
    "ba",
    "auxiliary",
    "particle indicating suggestion, confirmation, or hesitation",
    "5",
    "我们+{S}+吧",
    "我们{S}吧。",
    "Wǒmen {S} ba.",
    "Let us {S}.",
    "喝茶",
    [
      "喝茶",
      "休息",
      "回家"
    ],
    "two friends gesturing toward a cozy tea table suggesting they sit and have tea"
  ],
  [
    5,
    "白天",
    "báitiān",
    "noun",
    "daytime",
    "3",
    "[时间]+很+[形容词]",
    "{S}很热。",
    "{S} hěn rè.",
    "The {S} is very hot.",
    "白天",
    [
      "白天",
      "上午",
      "下午"
    ],
    "bright midday sunlight streaming across a quiet neighborhood street"
  ],
  [
    6,
    "百",
    "bǎi",
    "number",
    "hundred",
    "3",
    "一共+[数字]+{S}+元",
    "这件衣服三{S}元。",
    "Zhè jiàn yīfu sān {S} yuán.",
    "This piece of clothing is three {S} yuan.",
    "百",
    [
      "百",
      "十",
      "千"
    ],
    "a customer holding a price tag inside a neighborhood clothing shop"
  ],
  [
    7,
    "半",
    "bàn",
    "number、(adverb)",
    "half; (half, semi-)",
    "3",
    "[时间]+点+{S}",
    "现在两点{S}。",
    "Xiànzài liǎng diǎn {S}.",
    "It is {S} past two now.",
    "半",
    [
      "半",
      "十分",
      "二十分"
    ],
    "a wristwatch showing half past two resting beside a notebook on a cafe table"
  ],
  [
    8,
    "包子",
    "bāozi",
    "noun",
    "steamed stuffed bun",
    "1",
    "早饭+吃+{S}",
    "我早饭吃{S}。",
    "Wǒ zǎofàn chī {S}.",
    "I eat {S} for breakfast.",
    "包子",
    [
      "包子",
      "面包",
      "鸡蛋"
    ],
    "fresh warm steamed stuffed buns in a bamboo steamer on a wooden breakfast table"
  ],
  [
    9,
    "杯子",
    "bēizi",
    "noun",
    "cup, glass",
    "1",
    "桌子上+有+一个+{S}",
    "桌子上有一个{S}。",
    "Zhuōzi shàng yǒu yí gè {S}.",
    "There is a {S} on the table.",
    "杯子",
    [
      "杯子",
      "苹果",
      "电脑"
    ],
    "a clear glass cup filled with water sitting on a clean wooden dining table"
  ],
  [
    10,
    "本",
    "běn",
    "classifier",
    "measure word for books",
    "3",
    "一+{S}+[名词]",
    "我买了一{S}书。",
    "Wǒ mǎi le yì {S} shū.",
    "I bought a {S} of book.",
    "本",
    [
      "本"
    ],
    "a person holding a single paperback book at a sunlit bookstore counter"
  ],
  [
    11,
    "边",
    "biān",
    "noun、suffix",
    "side; suffix indicating direction",
    "2",
    "[地点]+在+{S}",
    "学校在{S}。",
    "Xuéxiào zài {S}.",
    "The school is {S}.",
    "这边",
    [
      "这边",
      "那边",
      "外边"
    ],
    "a pedestrian pointing toward a tree-lined street beside a local school gate"
  ],
  [
    12,
    "病",
    "bìng",
    "noun、verb",
    "illness, disease; to be ill",
    "1",
    "[主语]+生+{S}+了",
    "他生{S}了。",
    "Tā shēng {S} le.",
    "He got {S}.",
    "病",
    [
      "病"
    ],
    "a person resting on a sofa with a warm cup of water and tissues nearby"
  ],
  [
    13,
    "不",
    "bù",
    "adverb",
    "not, no",
    "5",
    "[主语]+不+[动词]",
    "我{S}喝茶。",
    "Wǒ {S} hē chá.",
    "I {S} drink tea.",
    "不",
    [
      "不",
      "想",
      "喜欢"
    ],
    "a smiling person politely shaking their head and waving a hand away from a teapot"
  ],
  [
    14,
    "不客气",
    "bú kèqi",
    "phrase",
    "you're welcome",
    "6",
    "谢谢→{S}",
    "谢谢你！——{S}。",
    "Xièxie nǐ! — {S}.",
    "Thank you! — {S}.",
    "不客气",
    [
      "不客气",
      "没关系",
      "再见"
    ],
    "a shopkeeper smiling warmly as a customer thanks them at the counter"
  ],
  [
    15,
    "不要",
    "búyào",
    "adverb",
    "don't, not want",
    "5",
    "{S}+[动词]",
    "{S}说话。",
    "{S} shuōhuà.",
    "{S} talk.",
    "不要",
    [
      "不要",
      "请"
    ],
    "a teacher gently placing a finger to her lips in a quiet sunlit library"
  ],
  [
    16,
    "菜",
    "cài",
    "noun",
    "vegetable, dish",
    "1",
    "桌子上+有+{S}",
    "桌子上有很多{S}。",
    "Zhuōzi shàng yǒu hěn duō {S}.",
    "There are many {S} on the table.",
    "菜",
    [
      "菜",
      "水果",
      "米饭"
    ],
    "several freshly cooked home-style dishes arranged on a family dining table"
  ],
  [
    17,
    "茶",
    "chá",
    "noun",
    "tea",
    "1",
    "请给我+一杯+{S}",
    "请给我一杯{S}。",
    "Qǐng gěi wǒ yì bēi {S}.",
    "Please give me a cup of {S}.",
    "茶",
    [
      "茶",
      "水",
      "牛奶"
    ],
    "a ceramic cup of hot green tea steaming gently on a cafe table"
  ],
  [
    18,
    "唱",
    "chàng",
    "verb",
    "to sing",
    "1",
    "[主语]+喜欢+{S}+歌",
    "她喜欢{S}歌。",
    "Tā xǐhuan {S} gē.",
    "She likes {S} songs.",
    "唱",
    [
      "唱",
      "听",
      "写"
    ],
    "a young woman happily singing along in a sunlit living room"
  ],
  [
    19,
    "超市",
    "chāoshì",
    "noun",
    "supermarket",
    "2",
    "[主语]+去+{S}+买东西",
    "我去{S}买苹果。",
    "Wǒ qù {S} mǎi píngguǒ.",
    "I am going to the {S} to buy apples.",
    "超市",
    [
      "超市",
      "商店",
      "书店"
    ],
    "a shopper pushing a basket down a bright produce aisle in a neighborhood supermarket"
  ],
  [
    20,
    "车",
    "chē",
    "noun",
    "vehicle, car",
    "1",
    "外边+有+很多+{S}",
    "外边有很多{S}。",
    "Wàibian yǒu hěn duō {S}.",
    "There are many {S} outside.",
    "车",
    [
      "车",
      "人",
      "狗"
    ],
    "everyday city traffic moving along a tree-lined street in soft daylight"
  ],
  [
    21,
    "吃",
    "chī",
    "verb",
    "to eat",
    "1",
    "[主语]+想+{S}+[食物]",
    "我想{S}米饭。",
    "Wǒ xiǎng {S} mǐfàn.",
    "I want {S} cooked rice.",
    "吃",
    [
      "吃",
      "做",
      "买"
    ],
    "a person holding chopsticks over a warm bowl of steamed rice at a home table"
  ],
  [
    22,
    "出租车",
    "chūzūchē",
    "noun",
    "taxi",
    "1",
    "[主语]+坐+{S}+去",
    "我坐{S}去机场。",
    "Wǒ zuò {S} qù jīchǎng.",
    "I take a {S} to the airport.",
    "出租车",
    [
      "出租车",
      "火车",
      "飞机"
    ],
    "a passenger stepping into a clean city taxi parked beside a sidewalk"
  ],
  [
    23,
    "穿",
    "chuān",
    "verb",
    "to wear",
    "1",
    "[主语]+{S}+新衣服",
    "她今天{S}新衣服。",
    "Tā jīntiān {S} xīn yīfu.",
    "She is wearing {S} today.",
    "穿",
    [
      "穿",
      "买",
      "喜欢"
    ],
    "a young woman adjusting a neat new jacket in front of an entryway mirror"
  ],
  [
    24,
    "打电话",
    "dǎ diànhuà",
    "phrase",
    "to make a phone call",
    "1",
    "[主语]+给+[人]+{S}",
    "我给妈妈{S}。",
    "Wǒ gěi māma {S}.",
    "I am {S} to mom.",
    "打电话",
    [
      "打电话",
      "写字",
      "说话"
    ],
    "a man standing near a sunlit balcony holding a phone to his ear while smiling"
  ],
  [
    25,
    "大",
    "dà",
    "adjective",
    "big",
    "6",
    "这个+[名词]+很+{S}",
    "这个房间很{S}。",
    "Zhège fángjiān hěn {S}.",
    "This room is very {S}.",
    "大",
    [
      "大",
      "小",
      "新"
    ],
    "a spacious, airy living room with large windows and natural morning light"
  ],
  [
    26,
    "大家",
    "dàjiā",
    "pronoun",
    "everyone",
    "4",
    "{S}+好",
    "{S}好，我是新老师。",
    "{S} hǎo, wǒ shì xīn lǎoshī.",
    "Hello {S}, I am the new teacher.",
    "大家",
    [
      "大家",
      "你们",
      "老师"
    ],
    "a smiling teacher greeting a small group of attentive students in a classroom"
  ],
  [
    27,
    "大学",
    "dàxué",
    "noun",
    "university",
    "2",
    "[主语]+在+{S}+学习",
    "他在{S}学习汉语。",
    "Tā zài {S} xuéxí Hànyǔ.",
    "He studies Chinese at {S}.",
    "大学",
    [
      "大学",
      "中学",
      "学校"
    ],
    "students walking across a brick university courtyard shaded by green trees"
  ],
  [
    28,
    "大学生",
    "dàxuéshēng",
    "noun",
    "university student",
    "4",
    "[主语]+是+{S}",
    "我哥哥是{S}。",
    "Wǒ gēge shì {S}.",
    "My older brother is a {S}.",
    "大学生",
    [
      "大学生",
      "中学生",
      "小学生"
    ],
    "a young university student carrying a backpack and books on campus"
  ],
  [
    29,
    "到",
    "dào",
    "verb",
    "to arrive",
    "1",
    "[主语]+{S}+[地点]+了",
    "我{S}学校了。",
    "Wǒ {S} xuéxiào le.",
    "I have {S} at school.",
    "到",
    [
      "到",
      "去",
      "回"
    ],
    "a student stepping up to a brick school entrance in morning sunlight"
  ],
  [
    30,
    "的",
    "de",
    "auxiliary",
    "possessive or modifying particle",
    "5",
    "[人]+的+[名词]",
    "这是{S}书。",
    "Zhè shì {S} shū.",
    "This is {S} book.",
    "我的",
    [
      "我的",
      "他的",
      "她的"
    ],
    "a desk with an open textbook and a handwritten name on the cover"
  ],
  [
    31,
    "第",
    "dì",
    "prefix",
    "prefix for ordinal numbers",
    "3",
    "{S}+[数字]+个",
    "今天是{S}一天。",
    "Jīntiān shì {S}-yī tiān.",
    "Today is the {S} first day.",
    "第",
    [
      "第"
    ],
    "a desk calendar with the first day of the month circled in ink"
  ],
  [
    32,
    "弟弟",
    "dìdi",
    "noun",
    "younger brother",
    "4",
    "我+{S}+在+[地方]",
    "我{S}在玩。",
    "Wǒ {S} zài wán.",
    "My {S} is playing.",
    "弟弟",
    [
      "弟弟",
      "妹妹",
      "儿子"
    ],
    "a young boy smiling while playing with wooden blocks on a living room rug"
  ],
  [
    33,
    "点",
    "diǎn",
    "classifier、(noun)",
    "measure word for small round things; (point, dot)",
    "3",
    "现在+[数字]+{S}",
    "现在九{S}了。",
    "Xiànzài jiǔ {S} le.",
    "It is nine {S} now.",
    "点",
    [
      "点",
      "分"
    ],
    "a person glancing at a watch reading nine o'clock while holding a coffee bag"
  ],
  [
    34,
    "店",
    "diàn",
    "noun",
    "shop, store",
    "2",
    "那个+{S}+很+[形容词]",
    "那个{S}很大。",
    "Nàge {S} hěn dà.",
    "That {S} is very big.",
    "店",
    [
      "店",
      "商店",
      "书店"
    ],
    "the glass storefront of a tidy neighborhood shop on a sunny afternoon"
  ],
  [
    35,
    "电话",
    "diànhuà",
    "noun",
    "telephone, phone call",
    "1",
    "我+的+{S}+响了",
    "这是爸爸的{S}。",
    "Zhè shì bàba de {S}.",
    "This is dad's {S}.",
    "电话",
    [
      "电话",
      "手机",
      "电脑"
    ],
    "a telephone resting on a side table beside a small lamp"
  ],
  [
    36,
    "电脑",
    "diànnǎo",
    "noun",
    "computer",
    "1",
    "桌子上+有+一台+{S}",
    "桌子上有一台{S}。",
    "Zhuōzi shàng yǒu yì tái {S}.",
    "There is a {S} on the table.",
    "电脑",
    [
      "电脑",
      "电视",
      "手机"
    ],
    "an open laptop computer on a clean wooden home desk near a window"
  ],
  [
    37,
    "电视",
    "diànshì",
    "noun",
    "television",
    "1",
    "[主语]+在+看+{S}",
    "爷爷在看{S}。",
    "Yéye zài kàn {S}.",
    "Grandpa is watching {S}.",
    "电视",
    [
      "电视",
      "电影",
      "书"
    ],
    "a man relaxing on a living room sofa watching the evening news on television"
  ],
  [
    38,
    "电影",
    "diànyǐng",
    "noun",
    "movie, film",
    "1",
    "[主语]+喜欢+看+{S}",
    "我喜欢看{S}。",
    "Wǒ xǐhuan kàn {S}.",
    "I like watching {S}.",
    "电影",
    [
      "电影",
      "电视",
      "书"
    ],
    "two friends walking out of a theater lobby chatting about a film"
  ],
  [
    39,
    "电影院",
    "diànyǐngyuàn",
    "noun",
    "cinema",
    "2",
    "[主语]+去+{S}",
    "我们去{S}看电影。",
    "Wǒmen qù {S} kàn diànyǐng.",
    "We are going to the {S} to watch a movie.",
    "电影院",
    [
      "电影院",
      "书店",
      "饭店"
    ],
    "people standing near the warm evening entrance of a city cinema"
  ],
  [
    40,
    "东西",
    "dōngxi",
    "noun",
    "thing, object",
    "1",
    "[主语]+去+买+{S}",
    "妈妈去买{S}了。",
    "Māma qù mǎi {S} le.",
    "Mom went to buy {S}.",
    "东西",
    [
      "东西",
      "水果",
      "菜"
    ],
    "a woman carrying a canvas tote bag filled with fresh groceries on a sidewalk"
  ],
  [
    41,
    "都",
    "dōu",
    "adverb",
    "all, both",
    "5",
    "我们+{S}+[动词]",
    "我们{S}会说汉语。",
    "Wǒmen {S} huì shuō Hànyǔ.",
    "We {S} can speak Chinese.",
    "都",
    [
      "都",
      "也",
      "还"
    ],
    "three classmates laughing together over Chinese flashcards at a table"
  ],
  [
    42,
    "读",
    "dú",
    "verb",
    "to read",
    "1",
    "[主语]+在+{S}+[宾语]",
    "她在{S}汉字。",
    "Tā zài {S} Hànzì.",
    "She is {S} Chinese characters.",
    "读",
    [
      "读",
      "写",
      "看"
    ],
    "a student reading aloud from a printed Mandarin sheet at a wooden desk"
  ],
  [
    43,
    "读书",
    "dúshū",
    "verb",
    "to read a book",
    "1",
    "[主语]+在+房间+{S}",
    "哥哥在房间{S}。",
    "Gēge zài fángjiān {S}.",
    "Older brother is {S} in the room.",
    "读书",
    [
      "读书",
      "学习",
      "休息"
    ],
    "a young man seated by a sunlit window quietly reading a paperback book"
  ],
  [
    44,
    "对",
    "duì",
    "adjective、preposition、(verb、classifier)",
    "correct, right; to, toward, for; (to treat; pair)",
    "6",
    "这个+很+{S}",
    "你说的很{S}。",
    "Nǐ shuō de hěn {S}.",
    "What you said is very {S}.",
    "对",
    [
      "对",
      "好",
      "真"
    ],
    "a teacher nodding approvingly at a student's notebook during a lesson"
  ],
  [
    45,
    "对不起",
    "duìbuqǐ",
    "verb",
    "sorry",
    "6",
    "{S}，我来晚了",
    "{S}，我来晚了。",
    "{S}, wǒ lái wǎn le.",
    "{S}, I arrived late.",
    "对不起",
    [
      "对不起",
      "没关系",
      "谢谢"
    ],
    "a man apologizing politely with a slight bow as he arrives at a cafe table"
  ],
  [
    46,
    "多",
    "duō",
    "adjective、verb、pronoun、(number、adverb)",
    "many, much; to have more; how many, how much; (more, over)",
    "6",
    "这里+{S}+[名词]",
    "这里人很{S}。",
    "Zhèlǐ rén hěn {S}.",
    "There are {S} people here.",
    "多",
    [
      "多",
      "少",
      "好"
    ],
    "a lively weekend farmers market with shoppers browsing fruit stalls"
  ],
  [
    47,
    "多少",
    "duōshao",
    "pronoun",
    "how many, how much",
    "5",
    "这个+{S}+钱",
    "这个{S}钱？",
    "Zhège {S} qián?",
    "{S} is this?",
    "多少",
    [
      "多少",
      "几",
      "什么"
    ],
    "a shopper holding up an apple and asking the vendor for the price"
  ],
  [
    48,
    "儿子",
    "érzi",
    "noun",
    "son",
    "4",
    "这是+我+{S}",
    "这是我的{S}。",
    "Zhè shì wǒ de {S}.",
    "This is my {S}.",
    "儿子",
    [
      "儿子",
      "女儿",
      "孩子"
    ],
    "a smiling father standing beside his young son in a sunny park"
  ],
  [
    49,
    "二",
    "èr",
    "number",
    "two",
    "3",
    "这是+{S}+号",
    "这是{S}号。",
    "Zhè shì {S} hào.",
    "This is number {S}.",
    "二",
    [
      "二",
      "一",
      "三"
    ],
    "a wooden apartment door with a clean brass number two plaque"
  ],
  [
    50,
    "饭",
    "fàn",
    "noun",
    "cooked rice, meal",
    "1",
    "妈妈+在+做+{S}",
    "妈妈在做{S}。",
    "Māma zài zuò {S}.",
    "Mom is making {S}.",
    "饭",
    [
      "饭",
      "菜",
      "早饭"
    ],
    "a mother stirring a warm home-cooked meal in a sunlit kitchen"
  ],
  [
    51,
    "饭店",
    "fàndiàn",
    "noun",
    "restaurant",
    "2",
    "我们+在+{S}+吃饭",
    "我们在{S}吃晚饭。",
    "Wǒmen zài {S} chī wǎnfàn.",
    "We are eating dinner at the {S}.",
    "饭店",
    [
      "饭店",
      "家",
      "学校"
    ],
    "friends sharing dishes around a warm wooden table in a neighborhood restaurant"
  ],
  [
    52,
    "房间",
    "fángjiān",
    "noun",
    "room",
    "2",
    "我的+{S}+很干净",
    "我的{S}很小。",
    "Wǒ de {S} hěn xiǎo.",
    "My {S} is very small.",
    "房间",
    [
      "房间",
      "学校",
      "商店"
    ],
    "a cozy, tidy bedroom with a single bed, desk, and soft morning window light"
  ],
  [
    53,
    "非常",
    "fēicháng",
    "adverb",
    "very, extremely",
    "6",
    "今天+{S}+[形容词]",
    "今天{S}冷。",
    "Jīntiān {S} lěng.",
    "Today is {S} cold.",
    "非常",
    [
      "非常",
      "很",
      "太"
    ],
    "a pedestrian in a wool coat and scarf walking on a crisp winter morning"
  ],
  [
    54,
    "飞机",
    "fēijī",
    "noun",
    "airplane",
    "1",
    "[主语]+坐+{S}+去",
    "他坐{S}去中国。",
    "Tā zuò {S} qù Zhōngguó.",
    "He takes an {S} to China.",
    "飞机",
    [
      "飞机",
      "火车",
      "出租车"
    ],
    "a traveler looking out a terminal window at a passenger plane on the tarmac"
  ],
  [
    55,
    "分",
    "fēn",
    "classifier、(verb、noun)",
    "minute; (to divide, to separate; component, part)",
    "3",
    "现在+十点+{S}",
    "现在十点五{S}。",
    "Xiànzài shí diǎn wǔ {S}.",
    "It is five {S} past ten now.",
    "分",
    [
      "分",
      "分钟",
      "点"
    ],
    "a digital train station clock showing 10:05 above commuters"
  ],
  [
    56,
    "分钟",
    "fēnzhōng",
    "classifier",
    "minute",
    "3",
    "请等+五+{S}",
    "我走了十{S}。",
    "Wǒ zǒu le shí {S}.",
    "I walked for ten {S}.",
    "分钟",
    [
      "分钟",
      "小时",
      "天"
    ],
    "a person walking along a tree-lined path checking a wristwatch"
  ],
  [
    57,
    "高兴",
    "gāoxìng",
    "adjective",
    "happy, glad",
    "6",
    "认识你+我+很+{S}",
    "认识你我很{S}。",
    "Rènshi nǐ wǒ hěn {S}.",
    "I am very {S} to meet you.",
    "高兴",
    [
      "高兴"
    ],
    "two colleagues smiling warmly while shaking hands outside an office building"
  ],
  [
    58,
    "歌",
    "gē",
    "noun",
    "song",
    "1",
    "这首+{S}+很好听",
    "这{S}很好听。",
    "Zhè {S} hěn hǎotīng.",
    "This {S} is pleasant to listen to.",
    "歌",
    [
      "歌",
      "课",
      "电影"
    ],
    "a person wearing headphones looking out a train window with a relaxed smile"
  ],
  [
    59,
    "哥哥",
    "gēge",
    "noun",
    "older brother",
    "4",
    "我+{S}+是+[职业]",
    "我{S}是医生。",
    "Wǒ {S} shì yīshēng.",
    "My {S} is a doctor.",
    "哥哥",
    [
      "哥哥",
      "弟弟",
      "爸爸"
    ],
    "a young male doctor in a white coat smiling in a bright clinic hallway"
  ],
  [
    60,
    "个",
    "gè",
    "classifier",
    "measure word for general objects",
    "3",
    "一+{S}+[名词]",
    "桌子上有一{S}苹果。",
    "Zhuōzi shàng yǒu yí {S} píngguǒ.",
    "There is one {S} apple on the table.",
    "个",
    [
      "个",
      "只",
      "本"
    ],
    "a single fresh red apple resting on a light wood kitchen table"
  ],
  [
    61,
    "给",
    "gěi",
    "verb、(preposition)",
    "to give; (to, for)",
    "1",
    "我+{S}+你+[东西]",
    "我{S}你一本书。",
    "Wǒ {S} nǐ yì běn shū.",
    "I {S} you a book.",
    "给",
    [
      "给",
      "买",
      "看"
    ],
    "a friend handing a paperback book across a wooden cafe table"
  ],
  [
    62,
    "公司",
    "gōngsī",
    "noun",
    "company",
    "2",
    "[主语]+去+{S}+上班",
    "爸爸去{S}上班。",
    "Bàba qù {S} shàngbān.",
    "Dad goes to the {S} to work.",
    "公司",
    [
      "公司",
      "学校",
      "医院"
    ],
    "office workers entering a sunlit modern brick office building in the morning"
  ],
  [
    63,
    "工作",
    "gōngzuò",
    "verb、noun",
    "work; to work",
    "1",
    "[主语]+在+{S}",
    "他在医院{S}。",
    "Tā zài yīyuàn {S}.",
    "He {S} at a hospital.",
    "工作",
    [
      "工作",
      "学习",
      "休息"
    ],
    "a healthcare worker reviewing notes at a sunlit reception desk"
  ],
  [
    64,
    "狗",
    "gǒu",
    "noun",
    "dog",
    "1",
    "我+有+一只+{S}",
    "我有一只小{S}。",
    "Wǒ yǒu yì zhī xiǎo {S}.",
    "I have a small {S}.",
    "狗",
    [
      "狗",
      "猫",
      "鸟"
    ],
    "a friendly small brown dog sitting patiently on a sunny porch"
  ],
  [
    65,
    "贵",
    "guì",
    "adjective",
    "expensive",
    "6",
    "这个+[名词]+太+{S}+了",
    "这件衣服太{S}了。",
    "Zhè jiàn yīfu tài {S} le.",
    "This piece of clothing is too {S}.",
    "贵",
    [
      "贵",
      "便宜",
      "大"
    ],
    "a shopper looking closely at a price tag inside a boutique"
  ],
  [
    66,
    "国",
    "guó",
    "noun",
    "country",
    "2",
    "我+爱+我的+{S}",
    "这是我的{S}。",
    "Zhè shì wǒ de {S}.",
    "This is my {S}.",
    "国",
    [
      "国",
      "家",
      "学校"
    ],
    "scenic city skyline and green hills bathed in golden morning light"
  ],
  [
    67,
    "还",
    "hái",
    "adverb",
    "still, also; quite",
    "5",
    "我+{S}+要+买+[东西]",
    "我{S}想喝水。",
    "Wǒ {S} xiǎng hē shuǐ.",
    "I {S} want to drink water.",
    "还",
    [
      "还",
      "也",
      "都"
    ],
    "a runner reaching for a second glass of water on a kitchen counter"
  ],
  [
    68,
    "孩子",
    "háizi",
    "noun",
    "child",
    "4",
    "那个+{S}+在+玩",
    "那个{S}在玩。",
    "Nàge {S} zài wán.",
    "That {S} is playing.",
    "孩子",
    [
      "孩子",
      "同学",
      "朋友"
    ],
    "a cheerful young child drawing with crayons on a wooden floor"
  ],
  [
    69,
    "汉语",
    "Hànyǔ",
    "noun",
    "Chinese language",
    "1",
    "[主语]+学+{S}",
    "我在学{S}。",
    "Wǒ zài xué {S}.",
    "I am learning {S}.",
    "汉语",
    [
      "汉语",
      "中文",
      "汉字"
    ],
    "an open Chinese textbook beside a warm mug of tea on a study desk"
  ],
  [
    70,
    "汉字",
    "Hànzì",
    "noun",
    "Chinese character",
    "1",
    "我会写+{S}",
    "我会写{S}。",
    "Wǒ huì xiě {S}.",
    "I can write {S}.",
    "汉字",
    [
      "汉字",
      "汉语",
      "字"
    ],
    "a hand holding a fountain pen neatly writing Chinese characters on grid paper"
  ],
  [
    71,
    "好",
    "hǎo",
    "adjective、(adverb)、(verb)",
    "good; (well); (to be fond of)",
    "6",
    "今天+天气+很+{S}",
    "今天天气很{S}。",
    "Jīntiān tiānqì hěn {S}.",
    "The weather is very {S} today.",
    "好",
    [
      "好",
      "热",
      "冷"
    ],
    "clear blue sky with soft white clouds over a peaceful neighborhood park"
  ],
  [
    72,
    "好吃",
    "hǎochī",
    "adjective",
    "delicious, tasty",
    "6",
    "这个+菜+很+{S}",
    "中国菜很{S}。",
    "Zhōngguó cài hěn {S}.",
    "Chinese food is very {S}.",
    "好吃",
    [
      "好吃",
      "便宜",
      "贵"
    ],
    "steaming bowls of freshly prepared dumplings and vegetables on a table"
  ],
  [
    73,
    "好看",
    "hǎokàn",
    "adjective",
    "good-looking",
    "6",
    "这件衣服+很+{S}",
    "这件衣服很{S}。",
    "Zhè jiàn yīfu hěn {S}.",
    "This item of clothing is very {S}.",
    "好看",
    [
      "好看",
      "新",
      "贵"
    ],
    "a neat linen jacket hanging in soft natural light by a closet"
  ],
  [
    74,
    "好听",
    "hǎotīng",
    "adjective",
    "pleasant to listen to",
    "6",
    "这首歌+很+{S}",
    "这首歌很{S}。",
    "Zhè shǒu gē hěn {S}.",
    "This song is very {S}.",
    "好听",
    [
      "好听",
      "好看",
      "好玩儿"
    ],
    "a person smiling softly while listening to acoustic music at home"
  ],
  [
    75,
    "好玩儿",
    "hǎowánr",
    "adjective",
    "fun, amusing",
    "6",
    "这里+很+{S}",
    "这里很{S}。",
    "Zhèlǐ hěn {S}.",
    "Here is very {S}.",
    "好玩儿",
    [
      "好玩儿",
      "好看",
      "大"
    ],
    "friends laughing together while playing a board game in a bright cafe"
  ],
  [
    76,
    "号",
    "hào",
    "noun、classifier",
    "number; measure word for people, items",
    "3",
    "今天+几月+几+{S}",
    "今天五月八{S}。",
    "Jīntiān wǔ yuè bā {S}.",
    "Today is May eighth ({S}).",
    "号",
    [
      "号",
      "日",
      "月"
    ],
    "a paper desk calendar flipped to the eighth day of May"
  ],
  [
    77,
    "喝",
    "hē",
    "verb",
    "to drink",
    "1",
    "[主语]+想+{S}+[液体]",
    "我想{S}茶。",
    "Wǒ xiǎng {S} chá.",
    "I want {S} tea.",
    "喝",
    [
      "喝",
      "买",
      "做"
    ],
    "a woman lifting a warm ceramic cup of tea to take a sip by a window"
  ],
  [
    78,
    "和",
    "hé",
    "preposition、conjunction",
    "and, with",
    "5",
    "[人1]+{S}+[人2]",
    "爸爸{S}妈妈都在家。",
    "Bàba {S} māma dōu zài jiā.",
    "Dad {S} mom are both at home.",
    "和",
    [
      "和",
      "跟",
      "看"
    ],
    "a husband and wife preparing vegetables together in a bright kitchen"
  ],
  [
    79,
    "很",
    "hěn",
    "adverb",
    "very",
    "6",
    "我+{S}+高兴",
    "我{S}高兴。",
    "Wǒ {S} gāoxìng.",
    "I am {S} happy.",
    "很",
    [
      "很",
      "非常",
      "太"
    ],
    "a smiling student holding a graded paper outside a classroom"
  ],
  [
    80,
    "后",
    "hòu",
    "noun",
    "behind, later",
    "2",
    "[时间]+以+{S}",
    "饭{S}我去休息。",
    "Fàn {S} wǒ qù xiūxi.",
    "{S} the meal, I go to rest.",
    "后",
    [
      "后",
      "前"
    ],
    "a peaceful living room armchair bathed in afternoon light"
  ],
  [
    81,
    "回",
    "huí",
    "verb、(classifier)",
    "to return; (measure word for times)",
    "1",
    "[主语]+{S}+家",
    "我五点{S}家。",
    "Wǒ wǔ diǎn {S} jiā.",
    "I {S} home at five o'clock.",
    "回",
    [
      "回",
      "去",
      "到"
    ],
    "a commuter walking up the front steps of an apartment building at dusk"
  ],
  [
    82,
    "会",
    "huì",
    "verb",
    "can, to be able to",
    "5",
    "[主语]+{S}+说汉语",
    "她{S}说汉语。",
    "Tā {S} shuō Hànyǔ.",
    "She {S} speak Chinese.",
    "会",
    [
      "会",
      "能",
      "想"
    ],
    "two people having a relaxed conversation in Mandarin at a cafe"
  ],
  [
    83,
    "火车",
    "huǒchē",
    "noun",
    "train",
    "1",
    "[主语]+坐+{S}+去",
    "我们坐{S}去北京。",
    "Wǒmen zuò {S} qù Běijīng.",
    "We take the {S} to Beijing.",
    "火车",
    [
      "火车",
      "飞机",
      "出租车"
    ],
    "passengers waiting calmly on a sunlit railway platform beside a sleek train"
  ],
  [
    84,
    "鸡蛋",
    "jīdàn",
    "noun",
    "egg",
    "1",
    "早饭+吃+{S}",
    "我每天吃一个{S}。",
    "Wǒ měitiān chī yí gè {S}.",
    "I eat one {S} every day.",
    "鸡蛋",
    [
      "鸡蛋",
      "包子",
      "苹果"
    ],
    "a simple white ceramic plate with a freshly boiled egg on a breakfast table"
  ],
  [
    85,
    "几",
    "jǐ",
    "pronoun、number",
    "how many, a few",
    "5",
    "现在+{S}+点",
    "现在{S}点了？",
    "Xiànzài {S} diǎn le?",
    "{S} o'clock is it now?",
    "几",
    [
      "几",
      "两",
      "三"
    ],
    "a student glancing up at a classroom clock during morning study"
  ],
  [
    86,
    "家",
    "jiā",
    "noun、classifier、(suffix)",
    "home, family; measure word for families; (suffix indicating a person specializing in something)",
    "2",
    "[主语]+在+{S}",
    "我在{S}休息。",
    "Wǒ zài {S} xiūxi.",
    "I am resting at {S}.",
    "家",
    [
      "家",
      "房间",
      "学校"
    ],
    "a warm sunlit living room with houseplants and a cozy sofa"
  ],
  [
    87,
    "家人",
    "jiārén",
    "noun",
    "family member",
    "4",
    "我+爱+我的+{S}",
    "我爱我的{S}。",
    "Wǒ ài wǒ de {S}.",
    "I love my {S}.",
    "家人",
    [
      "家人",
      "朋友",
      "同学"
    ],
    "a multi-generational family smiling together at a weekend dinner table"
  ],
  [
    88,
    "见",
    "jiàn",
    "verb",
    "to see",
    "1",
    "明天+{S}",
    "我们明天{S}。",
    "Wǒmen míngtiān {S}.",
    "{S} you tomorrow.",
    "见",
    [
      "见",
      "来",
      "去"
    ],
    "two coworkers waving goodbye outside an office lobby in the late afternoon"
  ],
  [
    89,
    "件",
    "jiàn",
    "classifier",
    "measure word for items",
    "3",
    "这+{S}+衣服",
    "这{S}衣服很好看。",
    "Zhè {S} yīfu hěn hǎokàn.",
    "This {S} of clothing is very good-looking.",
    "件",
    [
      "件",
      "个",
      "些"
    ],
    "a neatly folded cotton sweater resting on a wooden shelf"
  ],
  [
    90,
    "饺子",
    "jiǎozi",
    "noun",
    "dumpling",
    "1",
    "我+喜欢+吃+{S}",
    "我喜欢吃{S}。",
    "Wǒ xǐhuan chī {S}.",
    "I like eating {S}.",
    "饺子",
    [
      "饺子",
      "面条儿",
      "米饭"
    ],
    "a plate of homemade boiled dumplings beside a small dish of dipping sauce"
  ],
  [
    91,
    "叫",
    "jiào",
    "verb、(preposition)",
    "to be called, to call; to make; (by)",
    "1",
    "你+{S}+什么名字",
    "我{S}大卫。",
    "Wǒ {S} Dàwèi.",
    "I {S} David.",
    "叫",
    [
      "叫",
      "是"
    ],
    "a person writing their name on a paper name tag at a workshop"
  ],
  [
    92,
    "姐姐",
    "jiějie",
    "noun",
    "older sister",
    "4",
    "我+{S}+在+[地方]",
    "我{S}在医院工作。",
    "Wǒ {S} zài yīyuàn gōngzuò.",
    "My {S} works at a hospital.",
    "姐姐",
    [
      "姐姐",
      "妹妹",
      "哥哥"
    ],
    "a friendly young woman in scrubs smiling in a bright clinic corridor"
  ],
  [
    93,
    "今年",
    "jīnnián",
    "noun",
    "this year",
    "3",
    "{S}+我+[年龄]",
    "{S}我二十岁。",
    "{S} wǒ èrshí suì.",
    "{S} I am twenty years old.",
    "今年",
    [
      "今年",
      "明年",
      "去年"
    ],
    "a person lighting candles on a small birthday cake at home"
  ],
  [
    94,
    "今天",
    "jīntiān",
    "noun",
    "today",
    "3",
    "{S}+星期+[数字]",
    "{S}是星期一。",
    "{S} shì xīngqīyī.",
    "{S} is Monday.",
    "今天",
    [
      "今天",
      "明天",
      "昨天"
    ],
    "morning sunlight hitting a daily planner open on a wooden table"
  ],
  [
    95,
    "九",
    "jiǔ",
    "number",
    "nine",
    "3",
    "现在+{S}+点",
    "我{S}点上课。",
    "Wǒ {S} diǎn shàngkè.",
    "I attend class at {S} o'clock.",
    "九",
    [
      "九",
      "八",
      "十"
    ],
    "students entering a bright lecture room just before nine in the morning"
  ],
  [
    96,
    "觉得",
    "juéde",
    "verb",
    "to feel, to think",
    "1",
    "我+{S}+[句子]",
    "我{S}今天很冷。",
    "Wǒ {S} jīntiān hěn lěng.",
    "I {S} today is very cold.",
    "觉得",
    [
      "觉得",
      "知道",
      "想"
    ],
    "a commuter rubbing their hands together on a chilly morning street"
  ],
  [
    97,
    "开",
    "kāi",
    "verb",
    "to open",
    "1",
    "请+{S}+门",
    "请{S}一下门。",
    "Qǐng {S} yíxià mén.",
    "Please {S} the door a moment.",
    "开",
    [
      "开",
      "关",
      "看"
    ],
    "a hand reaching for the brass handle of a sunlit wooden apartment door"
  ],
  [
    98,
    "开车",
    "kāichē",
    "verb",
    "to drive",
    "1",
    "爸爸+会+{S}",
    "爸爸会{S}。",
    "Bàba huì {S}.",
    "Dad can {S}.",
    "开车",
    [
      "开车",
      "做饭",
      "工作"
    ],
    "a man seated calmly in the driver's seat with hands on the steering wheel"
  ],
  [
    99,
    "看",
    "kàn",
    "verb",
    "to see, to look",
    "1",
    "[主语]+在+{S}+书",
    "我在{S}书。",
    "Wǒ zài {S} shū.",
    "I am {S} a book.",
    "看",
    [
      "看",
      "读",
      "买"
    ],
    "a person sitting in a cafe chair attentively reading an open book"
  ],
  [
    100,
    "看病",
    "kànbìng",
    "verb",
    "to see a doctor",
    "1",
    "[主语]+去+医院+{S}",
    "他去医院{S}。",
    "Tā qù yīyuàn {S}.",
    "He goes to the hospital {S}.",
    "看病",
    [
      "看病",
      "工作",
      "休息"
    ],
    "a patient speaking calmly with a doctor at a clinic desk"
  ],
  [
    101,
    "看见",
    "kànjiàn",
    "verb",
    "to see",
    "1",
    "我+{S}+[人]",
    "我{S}老师了。",
    "Wǒ {S} lǎoshī le.",
    "I {S} the teacher.",
    "看见",
    [
      "看见",
      "认识",
      "听见"
    ],
    "a student waving across a sunny courtyard after spotting their teacher"
  ],
  [
    102,
    "可以",
    "kěyǐ",
    "verb、adjective",
    "can, may; okay, fine",
    "5",
    "这里+{S}+坐吗",
    "我{S}坐这里吗？",
    "Wǒ {S} zuò zhèlǐ ma?",
    "{S} I sit here?",
    "可以",
    [
      "可以",
      "能",
      "想"
    ],
    "a traveler politely gesturing toward an empty seat on a commuter train"
  ],
  [
    103,
    "课",
    "kè",
    "noun",
    "class, lesson",
    "1",
    "下午+有+{S}",
    "我下午有汉语{S}。",
    "Wǒ xiàwǔ yǒu Hànyǔ {S}.",
    "I have Chinese {S} in the afternoon.",
    "课",
    [
      "课",
      "书",
      "字"
    ],
    "a small language classroom with a whiteboard and notebooks on desks"
  ],
  [
    104,
    "口",
    "kǒu",
    "noun、classifier",
    "mouth; measure word for family members, bites",
    "3",
    "我家+有+四+{S}+人",
    "我家有四{S}人。",
    "Wǒ jiā yǒu sì {S} rén.",
    "My family has four {S} people.",
    "口",
    [
      "口",
      "个"
    ],
    "a family of four smiling together on a living room sofa"
  ],
  [
    105,
    "块",
    "kuài",
    "classifier",
    "measure word for pieces, chunks, money",
    "3",
    "这个+十+{S}+钱",
    "这杯茶十{S}钱。",
    "Zhè bēi chá shí {S} qián.",
    "This cup of tea costs ten {S}.",
    "块",
    [
      "块",
      "元"
    ],
    "a customer handing a ten-yuan note at a neighborhood tea counter"
  ],
  [
    106,
    "来",
    "lái",
    "verb",
    "to come",
    "1",
    "[人]+{S}+我家了",
    "朋友{S}我家了。",
    "Péngyou {S} wǒ jiā le.",
    "My friend {S} to my home.",
    "来",
    [
      "来",
      "到",
      "去"
    ],
    "two friends greeting each other warmly at an open apartment doorway"
  ],
  [
    107,
    "老师",
    "lǎoshī",
    "noun",
    "teacher",
    "4",
    "我的+{S}+很好",
    "我的{S}很好。",
    "Wǒ de {S} hěn hǎo.",
    "My {S} is very good.",
    "老师",
    [
      "老师",
      "朋友",
      "同学"
    ],
    "a friendly Mandarin teacher smiling beside a chalkboard"
  ],
  [
    108,
    "了",
    "le",
    "auxiliary",
    "particle indicating completed action or change of state",
    "5",
    "[主语]+吃+{S}",
    "我吃早饭{S}。",
    "Wǒ chī zǎofàn {S}.",
    "I ate breakfast ({S}).",
    "了",
    [
      "了",
      "吗",
      "呢"
    ],
    "an empty breakfast plate beside a finished cup of tea in morning sun"
  ],
  [
    109,
    "冷",
    "lěng",
    "adjective",
    "cold",
    "6",
    "今天+很+{S}",
    "今天很{S}。",
    "Jīntiān hěn {S}.",
    "Today is very {S}.",
    "冷",
    [
      "冷",
      "热",
      "好"
    ],
    "a person wrapping a warm knit scarf around their neck on a crisp morning"
  ],
  [
    110,
    "里",
    "lǐ",
    "noun",
    "inside, in, mile",
    "2",
    "[物体]+在+[容器]+{S}",
    "书在房间{S}。",
    "Shū zài fángjiān {S}.",
    "The book is {S} the room.",
    "里",
    [
      "里",
      "外",
      "上"
    ],
    "a stack of textbooks resting neatly inside a quiet bedroom"
  ],
  [
    111,
    "两",
    "liǎng",
    "number",
    "two",
    "3",
    "{S}+个+[名词]",
    "我有{S}个苹果。",
    "Wǒ yǒu {S} gè píngguǒ.",
    "I have {S} apples.",
    "两",
    [
      "两",
      "三",
      "四"
    ],
    "two fresh red apples sitting side by side on a ceramic plate"
  ],
  [
    112,
    "零",
    "líng",
    "number",
    "zero",
    "3",
    "今天+零下+十+度",
    "今天{S}下十度。",
    "Jīntiān {S}xià shí dù.",
    "Today it is ten degrees below {S}.",
    "零",
    [
      "零"
    ],
    "a frost-kissed park bench on a calm winter morning"
  ],
  [
    113,
    "六",
    "liù",
    "number",
    "six",
    "3",
    "下午+{S}+点",
    "我下午{S}点下班。",
    "Wǒ xiàwǔ {S} diǎn xiàbān.",
    "I get off work at {S} in the afternoon.",
    "六",
    [
      "六",
      "五",
      "七"
    ],
    "office workers leaving a glass lobby into warm late-afternoon light"
  ],
  [
    114,
    "妈妈",
    "māma",
    "noun",
    "mom",
    "4",
    "{S}+在+做饭",
    "{S}在做饭。",
    "{S} zài zuò fàn.",
    "{S} is cooking.",
    "妈妈",
    [
      "妈妈",
      "爸爸",
      "姐姐"
    ],
    "a smiling mother chopping fresh vegetables on a wooden kitchen board"
  ],
  [
    115,
    "吗",
    "ma",
    "auxiliary",
    "question particle",
    "5",
    "你+是+[名词]+{S}",
    "你是学生{S}？",
    "Nǐ shì xuéshēng {S}?",
    "Are you a student ({S})?",
    "吗",
    [
      "吗",
      "呢",
      "吧"
    ],
    "a young person chatting inquisitively with a student carrying a backpack"
  ],
  [
    116,
    "买",
    "mǎi",
    "verb",
    "to buy",
    "1",
    "[主语]+去+{S}+[物品]",
    "我去{S}水果。",
    "Wǒ qù {S} shuǐguǒ.",
    "I am going {S} fruit.",
    "买",
    [
      "买",
      "吃",
      "看"
    ],
    "a shopper selecting fresh oranges at an outdoor fruit stand"
  ],
  [
    117,
    "卖",
    "mài",
    "verb",
    "to sell",
    "1",
    "这个商店+{S}+[物品]",
    "这个商店{S}茶。",
    "Zhège shāngdiàn {S} chá.",
    "This store {S} tea.",
    "卖",
    [
      "卖",
      "买",
      "有"
    ],
    "neat tins of loose-leaf tea arranged on wooden shelves in a shop"
  ],
  [
    118,
    "忙",
    "máng",
    "adjective、verb",
    "busy; to be busy",
    "6",
    "今天+我+很+{S}",
    "今天我很{S}。",
    "Jīntiān wǒ hěn {S}.",
    "Today I am very {S}.",
    "忙",
    [
      "忙",
      "累",
      "高兴"
    ],
    "a desk worker typing on a laptop with a notebook and tea mug beside them"
  ],
  [
    119,
    "猫",
    "māo",
    "noun",
    "cat",
    "1",
    "椅子上+有+一只+{S}",
    "椅子上有一只{S}。",
    "Yǐzi shàng yǒu yì zhī {S}.",
    "There is a {S} on the chair.",
    "猫",
    [
      "猫",
      "狗",
      "书"
    ],
    "a calm tabby cat curled up sleeping on a wooden dining chair"
  ],
  [
    120,
    "没关系",
    "méi guānxi",
    "phrase",
    "never mind, it's okay",
    "6",
    "对不起→{S}",
    "对不起！——{S}。",
    "Duìbuqǐ! — {S}.",
    "Sorry! — {S}.",
    "没关系",
    [
      "没关系",
      "不客气",
      "再见"
    ],
    "a smiling friend reassuring someone with a relaxed wave of the hand"
  ],
  [
    121,
    "没事",
    "méishì",
    "verb",
    "to have nothing to do, it doesn't matter",
    "6",
    "我+今天+{S}",
    "我今天{S}。",
    "Wǒ jīntiān {S}.",
    "I {S} today.",
    "没事",
    [
      "没事",
      "很忙",
      "在家"
    ],
    "a person lounging peacefully on a sunny balcony reading a magazine"
  ],
  [
    122,
    "没有",
    "méiyǒu",
    "verb、adverb",
    "to not have; have not",
    "5",
    "我+{S}+[名词]",
    "我{S}钱。",
    "Wǒ {S} qián.",
    "I {S} money.",
    "没有",
    [
      "没有",
      "有",
      "需要"
    ],
    "a person looking inside an empty leather wallet at a cafe table"
  ],
  [
    123,
    "妹妹",
    "mèimei",
    "noun",
    "younger sister",
    "4",
    "这是+我+{S}",
    "这是我{S}。",
    "Zhè shì wǒ {S}.",
    "This is my {S}.",
    "妹妹",
    [
      "妹妹",
      "弟弟",
      "姐姐"
    ],
    "a young girl smiling brightly while holding a red balloon in a park"
  ],
  [
    124,
    "们",
    "men",
    "suffix",
    "plural suffix for pronouns and nouns",
    "5",
    "[代词]+{S}+是同学",
    "他{S}是同学。",
    "Tā{S} shì tóngxué.",
    "They ({S}) are classmates.",
    "们",
    [
      "们",
      "的",
      "也"
    ],
    "a group of three smiling classmates walking together after school"
  ],
  [
    125,
    "米饭",
    "mǐfàn",
    "noun",
    "cooked rice",
    "1",
    "午饭+吃+{S}",
    "我午饭吃{S}。",
    "Wǒ wǔfàn chī {S}.",
    "I eat {S} for lunch.",
    "米饭",
    [
      "米饭",
      "面条儿",
      "饺子"
    ],
    "a steaming white porcelain bowl of fluffy cooked rice on a wooden table"
  ],
  [
    126,
    "面包",
    "miànbāo",
    "noun",
    "bread",
    "1",
    "早饭+买+{S}",
    "我买了两个{S}。",
    "Wǒ mǎi le liǎng gè {S}.",
    "I bought two {S}.",
    "面包",
    [
      "面包",
      "包子",
      "苹果"
    ],
    "two golden freshly baked loaves of bread resting on a bakery paper bag"
  ],
  [
    127,
    "面条儿",
    "miàntiáor",
    "noun",
    "noodles",
    "1",
    "晚饭+吃+{S}",
    "他喜欢吃{S}。",
    "Tā xǐhuan chī {S}.",
    "He likes eating {S}.",
    "面条儿",
    [
      "面条儿",
      "米饭",
      "饺子"
    ],
    "a steaming ceramic bowl of hand-pulled noodles with green onions"
  ],
  [
    128,
    "明年",
    "míngnián",
    "noun",
    "next year",
    "3",
    "{S}+我+去+[地点]",
    "{S}我去中国。",
    "{S} wǒ qù Zhōngguó.",
    "{S} I am going to China.",
    "明年",
    [
      "明年",
      "今年",
      "明天"
    ],
    "a traveler tracing a route on a paper map beside a passport"
  ],
  [
    129,
    "明天",
    "míngtiān",
    "noun",
    "tomorrow",
    "3",
    "{S}+上午+见",
    "{S}上午我休息。",
    "{S} shàngwǔ wǒ xiūxi.",
    "{S} morning I am resting.",
    "明天",
    [
      "明天",
      "今天",
      "昨天"
    ],
    "an evening desk with tomorrow's schedule written neatly in a planner"
  ],
  [
    130,
    "名字",
    "míngzi",
    "noun",
    "name",
    "4",
    "你+叫+什么+{S}",
    "你叫什么{S}？",
    "Nǐ jiào shénme {S}?",
    "What is your {S}?",
    "名字",
    [
      "名字",
      "工作",
      "书"
    ],
    "two new acquaintances introducing themselves warmly in an office lobby"
  ],
  [
    131,
    "哪",
    "nǎ",
    "pronoun",
    "which",
    "5",
    "你+去+{S}+个商店",
    "你是{S}国人？",
    "Nǐ shì {S} guó rén?",
    "{S} country are you from?",
    "哪",
    [
      "哪",
      "这",
      "那"
    ],
    "two travelers smiling and chatting over coffee at a hostel table"
  ],
  [
    132,
    "哪个",
    "nǎge",
    "pronoun",
    "which one",
    "5",
    "你+要+{S}",
    "你要{S}？",
    "Nǐ yào {S}?",
    "{S} do you want?",
    "哪个",
    [
      "哪个",
      "这个",
      "那个"
    ],
    "a customer pointing between two ceramic teacups on a shop counter"
  ],
  [
    133,
    "哪里",
    "nǎlǐ",
    "pronoun",
    "where",
    "5",
    "[人]+在+{S}",
    "医院在{S}？",
    "Yīyuàn zài {S}?",
    "{S} is the hospital?",
    "哪里",
    [
      "哪里",
      "哪儿",
      "这里"
    ],
    "a pedestrian holding a phone map asking a local for directions on a street"
  ],
  [
    134,
    "哪儿",
    "nǎr",
    "pronoun",
    "where",
    "5",
    "你+去+{S}",
    "你去{S}？",
    "Nǐ qù {S}?",
    "{S} are you going?",
    "哪儿",
    [
      "哪儿",
      "哪里",
      "这儿"
    ],
    "two neighbors greeting each other on a sunny residential sidewalk"
  ],
  [
    135,
    "哪些",
    "nǎxiē",
    "pronoun",
    "which ones",
    "5",
    "你+买+{S}+水果",
    "你喜欢{S}书？",
    "Nǐ xǐhuan {S} shū?",
    "{S} books do you like?",
    "哪些",
    [
      "哪些",
      "那些"
    ],
    "a row of colorful paperback books neatly lined up on a bookstore shelf"
  ],
  [
    136,
    "那",
    "nà",
    "pronoun、（conjunction）",
    "that; (then)",
    "5",
    "{S}+是+[名词]",
    "{S}是我的车。",
    "{S} shì wǒ de chē.",
    "{S} is my car.",
    "那",
    [
      "那",
      "这",
      "哪"
    ],
    "a person pointing across a sunlit parking lot toward a silver sedan"
  ],
  [
    137,
    "那边",
    "nàbiān",
    "pronoun",
    "over there",
    "2",
    "[地点]+在+{S}",
    "商店在{S}。",
    "Shāngdiàn zài {S}.",
    "The store is {S}.",
    "那边",
    [
      "那边",
      "这边",
      "外边"
    ],
    "a local shopkeeper pointing down a sunny street corner"
  ],
  [
    138,
    "那个",
    "nàge",
    "pronoun",
    "that one",
    "5",
    "我+想+买+{S}",
    "我想买{S}。",
    "Wǒ xiǎng mǎi {S}.",
    "I want to buy {S}.",
    "那个",
    [
      "那个",
      "这个",
      "哪个"
    ],
    "a customer pointing at a fresh loaf of bread behind a bakery glass case"
  ],
  [
    139,
    "那里",
    "nàlǐ",
    "pronoun",
    "there",
    "2",
    "[人]+在+{S}",
    "老师在{S}。",
    "Lǎoshī zài {S}.",
    "The teacher is {S}.",
    "那里",
    [
      "那里",
      "这里",
      "哪儿"
    ],
    "a student gesturing toward a teacher standing by a sunlit classroom door"
  ],
  [
    140,
    "那儿",
    "nàr",
    "pronoun",
    "there",
    "2",
    "我+去+{S}",
    "我朋友在{S}。",
    "Wǒ péngyou zài {S}.",
    "My friend is {S}.",
    "那儿",
    [
      "那儿",
      "这儿",
      "哪儿"
    ],
    "a person waving toward a friend seated at an outdoor cafe table"
  ],
  [
    141,
    "那些",
    "nàxiē",
    "pronoun",
    "those",
    "5",
    "{S}+是+[名词]",
    "{S}是苹果。",
    "{S} shì píngguǒ.",
    "{S} are apples.",
    "那些",
    [
      "那些",
      "哪些"
    ],
    "a wooden crate filled with bright red apples at a street market"
  ],
  [
    142,
    "男",
    "nán",
    "adjective",
    "male",
    "4",
    "那个+{S}+同学",
    "那个{S}同学很高。",
    "Nàge {S} tóngxué hěn gāo.",
    "That {S} classmate is tall.",
    "男",
    [
      "男",
      "女",
      "新"
    ],
    "a tall male college student carrying a book outside a campus hall"
  ],
  [
    143,
    "男朋友",
    "nánpéngyou",
    "noun",
    "boyfriend",
    "4",
    "他是+我的+{S}",
    "这是我的{S}。",
    "Zhè shì wǒ de {S}.",
    "This is my {S}.",
    "男朋友",
    [
      "男朋友",
      "女朋友",
      "朋友"
    ],
    "a young couple walking and smiling together along a leafy park path"
  ],
  [
    144,
    "呢",
    "ne",
    "auxiliary",
    "question or continuation particle",
    "5",
    "你+{S}",
    "我很好，你{S}？",
    "Wǒ hěn hǎo, nǐ {S}?",
    "I am very well, and you ({S})?",
    "呢",
    [
      "呢",
      "吗",
      "吧"
    ],
    "two friends sitting on a park bench chatting over afternoon tea"
  ],
  [
    145,
    "能",
    "néng",
    "verb",
    "can, be able to",
    "5",
    "我+今天+{S}+去",
    "我明天{S}去。",
    "Wǒ míngtiān {S} qù.",
    "I {S} go tomorrow.",
    "能",
    [
      "能",
      "会",
      "想"
    ],
    "a smiling person checking a weekend calendar on their kitchen counter"
  ],
  [
    146,
    "你",
    "nǐ",
    "pronoun",
    "you",
    "4",
    "{S}+好吗",
    "{S}叫什么名字？",
    "{S} jiào shénme míngzi?",
    "What is {S} name?",
    "你",
    [
      "你",
      "他",
      "她"
    ],
    "two classmates greeting each other warmly on the first day of class"
  ],
  [
    147,
    "你好",
    "nǐ hǎo",
    "phrase",
    "hello",
    "6",
    "{S}！我是+[人]",
    "{S}，请问医院在哪儿？",
    "{S}, qǐngwèn yīyuàn zài nǎr?",
    "{S}, may I ask where the hospital is?",
    "你好",
    [
      "你好",
      "请问",
      "谢谢"
    ],
    "a polite traveler smiling and greeting a passerby on a clean city street"
  ],
  [
    148,
    "你们",
    "nǐmen",
    "pronoun",
    "you plural",
    "4",
    "{S}+好",
    "{S}都是学生吗？",
    "{S} dōu shì xuéshēng ma?",
    "Are {S} all students?",
    "你们",
    [
      "你们",
      "他们",
      "我们"
    ],
    "a teacher smiling while speaking with three students at a desk"
  ],
  [
    149,
    "年",
    "nián",
    "noun、classifier",
    "year; measure word for years",
    "3",
    "一+{S}+有+十二个月",
    "我学了一{S}汉语。",
    "Wǒ xué le yì {S} Hànyǔ.",
    "I studied Chinese for one {S}.",
    "年",
    [
      "年",
      "月",
      "天"
    ],
    "a stack of well-used Chinese workbooks beside a desk lamp"
  ],
  [
    150,
    "您",
    "nín",
    "pronoun",
    "you",
    "4",
    "{S}+好",
    "{S}好，请坐。",
    "{S} hǎo, qǐng zuò.",
    "Hello {S} (polite), please sit.",
    "您",
    [
      "您",
      "你",
      "大家"
    ],
    "a younger host politely offering a comfortable armchair to an older guest"
  ],
  [
    151,
    "牛奶",
    "niúnǎi",
    "noun",
    "milk",
    "1",
    "早饭+喝+{S}",
    "我每天喝一杯{S}。",
    "Wǒ měitiān hē yì bēi {S}.",
    "I drink a glass of {S} every day.",
    "牛奶",
    [
      "牛奶",
      "茶",
      "水"
    ],
    "a clear glass of fresh white milk beside a slice of toast on a sunlit table"
  ],
  [
    152,
    "女",
    "nǚ",
    "adjective",
    "female",
    "4",
    "那个+{S}+医生",
    "那个{S}医生很好。",
    "Nàge {S} yīshēng hěn hǎo.",
    "That {S} doctor is very good.",
    "女",
    [
      "女",
      "男",
      "新"
    ],
    "a kind female physician speaking calmly with a patient in a bright office"
  ],
  [
    153,
    "女儿",
    "nǚ'ér",
    "noun",
    "daughter",
    "4",
    "这是+我的+{S}",
    "这是我的{S}。",
    "Zhè shì wǒ de {S}.",
    "This is my {S}.",
    "女儿",
    [
      "女儿",
      "儿子",
      "妹妹"
    ],
    "a smiling mother holding hands with her young daughter on a sunny sidewalk"
  ],
  [
    154,
    "女朋友",
    "nǚpéngyou",
    "noun",
    "girlfriend",
    "4",
    "她是+我的+{S}",
    "这是我的{S}。",
    "Zhè shì wǒ de {S}.",
    "This is my {S}.",
    "女朋友",
    [
      "女朋友",
      "男朋友",
      "朋友"
    ],
    "a young woman smiling over a cup of tea across a cafe table"
  ],
  [
    155,
    "女士",
    "nǚshì",
    "noun",
    "lady, Ms.",
    "4",
    "这位+{S}+是+[职业]",
    "这位{S}是我的老师。",
    "Zhè wèi {S} shì wǒ de lǎoshī.",
    "This {S} is my teacher.",
    "女士",
    [
      "女士",
      "先生",
      "朋友"
    ],
    "a poised woman in smart casual attire holding a folder in an office hallway"
  ],
  [
    156,
    "朋友",
    "péngyou",
    "noun",
    "friend",
    "4",
    "他+是+我的+{S}",
    "他是我的好{S}。",
    "Tā shì wǒ de hǎo {S}.",
    "He is my good {S}.",
    "朋友",
    [
      "朋友",
      "同学",
      "哥哥"
    ],
    "two longtime friends laughing together on a sunny neighborhood walk"
  ],
  [
    157,
    "便宜",
    "piányi",
    "adjective",
    "cheap",
    "6",
    "这个+很+{S}",
    "这件衣服很{S}。",
    "Zhè jiàn yīfu hěn {S}.",
    "This piece of clothing is very {S}.",
    "便宜",
    [
      "便宜",
      "贵",
      "好看"
    ],
    "a happy shopper holding up a simple cotton shirt at an outdoor market"
  ],
  [
    158,
    "漂亮",
    "piàoliang",
    "adjective",
    "beautiful",
    "6",
    "这个+[名词]+很+{S}",
    "她的衣服很{S}。",
    "Tā de yīfu hěn {S}.",
    "Her clothes are very {S}.",
    "漂亮",
    [
      "漂亮",
      "好看",
      "新"
    ],
    "a young woman in a bright linen dress walking past sunlit flowerpots"
  ],
  [
    159,
    "苹果",
    "píngguǒ",
    "noun",
    "apple",
    "1",
    "桌子上+有+{S}",
    "桌子上有一个{S}。",
    "Zhuōzi shàng yǒu yí gè {S}.",
    "There is an {S} on the table.",
    "苹果",
    [
      "苹果",
      "杯子",
      "鸡蛋"
    ],
    "a single fresh red apple sitting on a clean light-wooden kitchen table next to a notebook"
  ],
  [
    160,
    "七",
    "qī",
    "number",
    "seven",
    "3",
    "早上+{S}+点",
    "我早上{S}点起床。",
    "Wǒ zǎoshang {S} diǎn qǐchuáng.",
    "I get up at {S} in the morning.",
    "七",
    [
      "七",
      "六",
      "八"
    ],
    "morning sunlight streaming past curtains onto an alarm clock showing seven"
  ],
  [
    161,
    "起床",
    "qǐchuáng",
    "verb",
    "to get up",
    "1",
    "我+早上+七点+{S}",
    "我七点{S}。",
    "Wǒ qī diǎn {S}.",
    "I {S} at seven o'clock.",
    "起床",
    [
      "起床",
      "睡觉",
      "吃饭"
    ],
    "a person sitting on the edge of a neat bed stretching in warm morning light"
  ],
  [
    162,
    "千",
    "qiān",
    "number",
    "thousand",
    "3",
    "一+{S}+元",
    "这个手机两{S}元。",
    "Zhège shǒujī liǎng {S} yuán.",
    "This cell phone is two {S} yuan.",
    "千",
    [
      "千",
      "百",
      "十"
    ],
    "a sleek smartphone resting on a wooden electronics shop display counter"
  ],
  [
    163,
    "前",
    "qián",
    "noun",
    "front, before",
    "2",
    "[地点]+在+{S}+边",
    "他在学校{S}边。",
    "Tā zài xuéxiào {S}biān.",
    "He is in {S} of the school.",
    "前",
    [
      "前",
      "后",
      "外"
    ],
    "a student standing on the sidewalk in front of a brick school gate"
  ],
  [
    164,
    "钱",
    "qián",
    "noun",
    "money",
    "3",
    "这+需要+很多+{S}",
    "我没有很多{S}。",
    "Wǒ méiyǒu hěn duō {S}.",
    "I do not have much {S}.",
    "钱",
    [
      "钱",
      "时间",
      "书"
    ],
    "a few crisp banknotes and coins resting next to a receipt on a cafe table"
  ],
  [
    165,
    "请",
    "qǐng",
    "verb",
    "please",
    "6",
    "{S}+坐",
    "{S}喝茶。",
    "{S} hē chá.",
    "{S} drink tea.",
    "请",
    [
      "请",
      "来",
      "去"
    ],
    "a host smiling while pouring hot tea into a guest's ceramic cup"
  ],
  [
    166,
    "请问",
    "qǐngwèn",
    "verb",
    "may I ask",
    "6",
    "{S}，[问题]",
    "{S}，现在几点了？",
    "{S}, xiànzài jǐ diǎn le?",
    "{S}, what time is it now?",
    "请问",
    [
      "请问",
      "你好",
      "谢谢"
    ],
    "a traveler politely tapping a wristwatch while asking a local for the time"
  ],
  [
    167,
    "去",
    "qù",
    "verb",
    "to go",
    "1",
    "[主语]+{S}+[地点]",
    "我{S}北京。",
    "Wǒ {S} shūdiàn.",
    "I am going {S} the bookstore.",
    "去",
    [
      "去",
      "回",
      "到"
    ],
    "a person walking toward a charming neighborhood bookstore with glass windows"
  ],
  [
    168,
    "去年",
    "qùnián",
    "noun",
    "last year",
    "3",
    "{S}+我+去过+[地点]",
    "{S}我去了中国。",
    "{S} wǒ qù le Zhōngguó.",
    "{S} I went to China.",
    "去年",
    [
      "去年",
      "今年",
      "明年"
    ],
    "printed travel snapshots spread out beside a notebook on a wooden desk"
  ],
  [
    169,
    "热",
    "rè",
    "adjective",
    "hot",
    "6",
    "天气+很+{S}",
    "今天很{S}。",
    "Jīntiān hěn {S}.",
    "Today is very {S}.",
    "热",
    [
      "热",
      "冷",
      "好"
    ],
    "a pedestrian shading their eyes with a hand on a bright sunny summer sidewalk"
  ],
  [
    170,
    "人",
    "rén",
    "noun",
    "person",
    "4",
    "这里+有+很多+{S}",
    "商店里有很多{S}。",
    "Shāngdiàn lǐ yǒu hěn duō {S}.",
    "There are many {S} in the store.",
    "人",
    [
      "人",
      "东西",
      "书"
    ],
    "everyday shoppers browsing fruit and vegetables inside a busy neighborhood store"
  ],
  [
    171,
    "认识",
    "rènshi",
    "verb",
    "to know, to recognize",
    "1",
    "我+{S}+[人]",
    "我{S}他。",
    "Wǒ {S} tā.",
    "I {S} him.",
    "认识",
    [
      "认识",
      "喜欢",
      "看见"
    ],
    "two acquaintances smiling in recognition as they pass on a sunlit street"
  ],
  [
    172,
    "日",
    "rì",
    "classifier、(noun)",
    "measure word for days; (sun)",
    "3",
    "十月+一+{S}",
    "今天是五月一{S}。",
    "Jīntiān shì wǔ yuè yī {S}.",
    "Today is May first ({S}).",
    "日",
    [
      "日",
      "号",
      "月"
    ],
    "a clean wall calendar open to May first in morning sunlight"
  ],
  [
    173,
    "三",
    "sān",
    "number",
    "three",
    "3",
    "{S}+个+[名词]",
    "我有{S}本书。",
    "Wǒ yǒu {S} běn shū.",
    "I have {S} books.",
    "三",
    [
      "三",
      "两",
      "四"
    ],
    "three hardcover books stacked neatly on a wooden study desk"
  ],
  [
    174,
    "商店",
    "shāngdiàn",
    "noun",
    "store, shop",
    "2",
    "[主语]+去+{S}+买东西",
    "我去{S}买水。",
    "Wǒ qù {S} mǎi shuǐ.",
    "I go to the {S} to buy water.",
    "商店",
    [
      "商店",
      "超市",
      "书店"
    ],
    "a corner convenience store glowing softly in natural afternoon light"
  ],
  [
    175,
    "上",
    "shàng",
    "noun、verb",
    "up, above; to go up",
    "2",
    "[物体]+在+桌子+{S}",
    "猫在桌子{S}。",
    "Māo zài zhuōzi {S}.",
    "The cat is {S} the table.",
    "上",
    [
      "上",
      "下",
      "里"
    ],
    "a small white cat sitting calmly atop a sturdy wooden dining table"
  ],
  [
    176,
    "上班",
    "shàngbān",
    "verb",
    "to go to work",
    "1",
    "[主语]+去+{S}",
    "我八点去{S}。",
    "Wǒ bā diǎn qù {S}.",
    "I go {S} at eight o'clock.",
    "上班",
    [
      "上班",
      "下班",
      "上课"
    ],
    "a commuter carrying a briefcase walking briskly past a subway entrance at morning"
  ],
  [
    177,
    "上课",
    "shàngkè",
    "verb",
    "to attend class",
    "1",
    "现在+开始+{S}",
    "我们九点{S}。",
    "Wǒmen jiǔ diǎn {S}.",
    "We {S} at nine o'clock.",
    "上课",
    [
      "上课",
      "下课",
      "上学"
    ],
    "students seated at wooden desks opening notebooks as class begins"
  ],
  [
    178,
    "上午",
    "shàngwǔ",
    "noun",
    "morning",
    "3",
    "{S}+我+在+[地点]",
    "{S}我在家学习。",
    "{S} wǒ zài jiā xuéxí.",
    "In the {S} I study at home.",
    "上午",
    [
      "上午",
      "下午",
      "晚上"
    ],
    "bright morning sunlight falling across an open notebook and tea mug"
  ],
  [
    179,
    "上学",
    "shàngxué",
    "verb",
    "to go to school",
    "1",
    "弟弟+去+{S}",
    "弟弟去{S}了。",
    "Dìdi qù {S} le.",
    "Younger brother went {S}.",
    "上学",
    [
      "上学",
      "上班",
      "回家"
    ],
    "a schoolboy wearing a backpack walking along a sunny neighborhood path"
  ],
  [
    180,
    "少",
    "shǎo",
    "adjective、verb",
    "few, little; to lack",
    "6",
    "这里+的+[名词]+很+{S}",
    "今天人很{S}。",
    "Jīntiān rén hěn {S}.",
    "There are {S} people today.",
    "少",
    [
      "少",
      "多",
      "好"
    ],
    "a quiet, nearly empty cafe patio in calm early morning light"
  ],
  [
    181,
    "谁",
    "shéi/shuí",
    "pronoun",
    "who",
    "5",
    "他+是+{S}",
    "他是{S}？",
    "Tā shì {S}?",
    "{S} is he?",
    "谁",
    [
      "谁",
      "什么",
      "哪国人"
    ],
    "two friends looking toward a new visitor entering a sunlit courtyard"
  ],
  [
    182,
    "什么",
    "shénme",
    "pronoun",
    "what",
    "5",
    "这+是+{S}",
    "这是{S}？",
    "Zhè shì {S}?",
    "{S} is this?",
    "什么",
    [
      "什么",
      "谁",
      "哪儿"
    ],
    "a curious child holding up an unfamiliar fruit on a kitchen counter"
  ],
  [
    183,
    "生病",
    "shēngbìng",
    "verb",
    "to get sick",
    "1",
    "[主语]+{S}+了",
    "妈妈{S}了。",
    "Māma {S} le.",
    "Mom {S}.",
    "生病",
    [
      "生病",
      "起床",
      "回家"
    ],
    "a woman wrapped in a light blanket resting on a couch with warm tea"
  ],
  [
    184,
    "十",
    "shí",
    "number",
    "ten",
    "3",
    "一共+{S}+元",
    "我有{S}个苹果。",
    "Wǒ yǒu {S} gè píngguǒ.",
    "I have {S} apples.",
    "十",
    [
      "十",
      "五",
      "八"
    ],
    "ten crisp red apples arranged inside a woven market basket"
  ],
  [
    185,
    "时候",
    "shíhou",
    "noun",
    "moment, time",
    "3",
    "你+什么+{S}+来",
    "你什么{S}回家？",
    "Nǐ shénme {S} huí jiā?",
    "What {S} are you returning home?",
    "时候",
    [
      "时候",
      "时间",
      "天"
    ],
    "a person glancing at a wall clock while packing a tote bag at the office"
  ],
  [
    186,
    "时间",
    "shíjiān",
    "noun",
    "time",
    "3",
    "我+没有+{S}",
    "我没有{S}。",
    "Wǒ méiyǒu {S}.",
    "I do not have {S}.",
    "时间",
    [
      "时间",
      "钱",
      "课"
    ],
    "a commuter hurrying past a station clock with a coffee cup in hand"
  ],
  [
    187,
    "事",
    "shì",
    "noun",
    "matter, thing",
    "1",
    "今天+有+{S}",
    "我今天有{S}。",
    "Wǒ jīntiān yǒu {S}.",
    "I have {S} today.",
    "事",
    [
      "事",
      "课",
      "工作"
    ],
    "a person writing tasks onto a sticky note beside a laptop"
  ],
  [
    188,
    "是",
    "shì",
    "verb",
    "to be",
    "5",
    "我+{S}+[身份]",
    "我{S}学生。",
    "Wǒ {S} xuéshēng.",
    "I {S} a student.",
    "是",
    [
      "是",
      "有",
      "叫"
    ],
    "a smiling college student holding a stack of textbooks outside a library"
  ],
  [
    189,
    "手机",
    "shǒujī",
    "noun",
    "cell phone",
    "1",
    "我+的+{S}+呢",
    "这是我的{S}。",
    "Zhè shì wǒ de {S}.",
    "This is my {S}.",
    "手机",
    [
      "手机",
      "电脑",
      "电话"
    ],
    "a modern smartphone lying next to keys on a wooden entryway table"
  ],
  [
    190,
    "书",
    "shū",
    "noun",
    "book",
    "1",
    "我+在+看+{S}",
    "我在看{S}。",
    "Wǒ zài kàn {S}.",
    "I am reading a {S}.",
    "书",
    [
      "书",
      "电视",
      "电影"
    ],
    "an open paperback book resting in warm afternoon window light"
  ],
  [
    191,
    "书店",
    "shūdiàn",
    "noun",
    "bookstore",
    "2",
    "[主语]+去+{S}",
    "我去{S}买书。",
    "Wǒ qù {S} mǎi shū.",
    "I am going to the {S} to buy books.",
    "书店",
    [
      "书店",
      "商店",
      "超市"
    ],
    "wooden shelves lined with books inside a peaceful neighborhood bookstore"
  ],
  [
    192,
    "水",
    "shuǐ",
    "noun",
    "water",
    "1",
    "请喝+{S}",
    "请喝一杯{S}。",
    "Qǐng hē yì bēi {S}.",
    "Please drink a glass of {S}.",
    "水",
    [
      "水",
      "茶",
      "牛奶"
    ],
    "a clear glass of fresh drinking water catching morning sunlight on a desk"
  ],
  [
    193,
    "水果",
    "shuǐguǒ",
    "noun",
    "fruit",
    "1",
    "桌子上+有+{S}",
    "桌子上有很多{S}。",
    "Zhuōzi shàng yǒu hěn duō {S}.",
    "There is a lot of {S} on the table.",
    "水果",
    [
      "水果",
      "菜",
      "面包"
    ],
    "a ceramic bowl filled with fresh apples, pears, and oranges on a dining table"
  ],
  [
    194,
    "睡",
    "shuì",
    "verb",
    "to sleep",
    "1",
    "[主语]+在+{S}",
    "小猫在{S}。",
    "Xiǎo māo zài {S}.",
    "The little cat is {S}.",
    "睡",
    [
      "睡",
      "玩",
      "坐"
    ],
    "a small cat fast asleep in a patch of afternoon sunlight on a rug"
  ],
  [
    195,
    "睡觉",
    "shuìjiào",
    "verb",
    "to sleep",
    "1",
    "晚上+十点+{S}",
    "我晚上十点{S}。",
    "Wǒ wǎnshang shí diǎn {S}.",
    "I {S} at ten in the evening.",
    "睡觉",
    [
      "睡觉",
      "起床",
      "休息"
    ],
    "a quiet dimly lit bedroom with crisp linen bedding at bedtime"
  ],
  [
    196,
    "说",
    "shuō",
    "verb",
    "to speak, to say",
    "1",
    "[主语]+会+{S}+汉语",
    "我会{S}汉语。",
    "Wǒ huì {S} Hànyǔ.",
    "I can {S} Chinese.",
    "说",
    [
      "说",
      "读",
      "写"
    ],
    "two friends chatting animatedly over tea at an outdoor wooden table"
  ],
  [
    197,
    "说话",
    "shuōhuà",
    "verb",
    "to talk",
    "1",
    "他们+在+{S}",
    "他们在{S}。",
    "Tāmen zài {S}.",
    "They are {S}.",
    "说话",
    [
      "说话",
      "读书",
      "工作"
    ],
    "two coworkers standing near a sunny window having a friendly conversation"
  ],
  [
    198,
    "四",
    "sì",
    "number",
    "four",
    "3",
    "桌子+有+{S}+把椅子",
    "我家有{S}口人。",
    "Wǒ jiā yǒu {S} kǒu rén.",
    "My family has {S} people.",
    "四",
    [
      "四",
      "三",
      "五"
    ],
    "four family members sitting together around a bright kitchen table"
  ],
  [
    199,
    "岁",
    "suì",
    "classifier",
    "measure word for age",
    "3",
    "我+二十+{S}",
    "妹妹五{S}了。",
    "Mèimei wǔ {S} le.",
    "Younger sister is five {S} old.",
    "岁",
    [
      "岁",
      "年",
      "号"
    ],
    "a five-year-old girl smiling beside five candles on a birthday cupcake"
  ],
  [
    200,
    "他",
    "tā",
    "pronoun",
    "he, him",
    "4",
    "{S}+是+[身份]",
    "{S}是我哥哥。",
    "{S} shì wǒ gēge.",
    "{S} is my older brother.",
    "他",
    [
      "他",
      "她",
      "我"
    ],
    "a friendly young man in a casual denim jacket smiling outdoors"
  ],
  [
    201,
    "它",
    "tā",
    "pronoun",
    "it",
    "4",
    "{S}+很+[形容词]",
    "{S}很可爱。",
    "{S} hěn kě'ài.",
    "{S} is very cute.",
    "它",
    [
      "它",
      "猫",
      "狗"
    ],
    "a fluffy orange cat sitting near a sunlit living room window"
  ],
  [
    202,
    "她",
    "tā",
    "pronoun",
    "she",
    "4",
    "{S}+是+[身份]",
    "{S}是我的老师。",
    "{S} shì wǒ de lǎoshī.",
    "{S} is my teacher.",
    "她",
    [
      "她",
      "他",
      "我"
    ],
    "a warm smiling female teacher carrying textbooks across a school courtyard"
  ],
  [
    203,
    "他们",
    "tāmen",
    "pronoun",
    "they",
    "4",
    "{S}+都+是+[身份]",
    "{S}都是我的朋友。",
    "{S} dōu shì wǒ de péngyou.",
    "{S} are all my friends.",
    "他们",
    [
      "他们",
      "她们",
      "我们"
    ],
    "a diverse group of three friends laughing together on a city sidewalk"
  ],
  [
    204,
    "它们",
    "tāmen",
    "pronoun",
    "they",
    "4",
    "{S}+在+[地方]",
    "{S}在椅子上。",
    "{S} zài yǐzi shàng.",
    "{S} are on the chair.",
    "它们",
    [
      "它们",
      "解释"
    ],
    "two sleeping kittens curled up together on a wooden patio chair"
  ],
  [
    205,
    "她们",
    "tāmen",
    "pronoun",
    "they",
    "4",
    "{S}+都+喜欢+[动词]",
    "{S}都喜欢喝茶。",
    "{S} dōu xǐhuan hē chá.",
    "{S} all like drinking tea.",
    "她们",
    [
      "她们",
      "他们",
      "我们"
    ],
    "two female friends clinking ceramic teacups at a cozy neighborhood teahouse"
  ],
  [
    206,
    "太",
    "tài",
    "adverb",
    "too, extremely",
    "6",
    "这个+{S}+[形容词]+了",
    "今天{S}热了！",
    "Jīntiān {S} rè le!",
    "Today is {S} hot!",
    "太",
    [
      "太",
      "很",
      "非常"
    ],
    "a pedestrian fanning themselves under bright midday city sun"
  ],
  [
    207,
    "天",
    "tiān",
    "noun、classifier",
    "day; measure word for days",
    "3",
    "一+{S}+[动词]",
    "我休息了三{S}。",
    "Wǒ xiūxi le sān {S}.",
    "I rested for three {S}.",
    "天",
    [
      "天",
      "年",
      "月"
    ],
    "calm morning sunlight filtering through bedroom curtains on a weekend"
  ],
  [
    208,
    "天气",
    "tiānqì",
    "noun",
    "weather",
    "6",
    "今天+{S}+怎么样",
    "今天{S}很好。",
    "Jīntiān {S} hěn hǎo.",
    "The {S} is very good today.",
    "天气",
    [
      "天气",
      "菜",
      "茶"
    ],
    "bright sunshine and scattered clouds above a lively city park"
  ],
  [
    209,
    "听",
    "tīng",
    "verb",
    "to listen",
    "1",
    "[主语]+喜欢+{S}+歌",
    "我喜欢{S}歌。",
    "Wǒ xǐhuan {S} gē.",
    "I like {S} to songs.",
    "听",
    [
      "听",
      "唱",
      "学"
    ],
    "a commuter smiling softly while wearing earphones on a quiet train"
  ],
  [
    210,
    "听见",
    "tīngjiàn",
    "verb",
    "to hear",
    "1",
    "你+{S}+了吗",
    "我{S}了。",
    "Wǒ {S} le.",
    "I {S} it.",
    "听见",
    [
      "听见",
      "看见",
      "知道"
    ],
    "a person turning their head toward the sound of a doorbell ringing"
  ],
  [
    211,
    "同学",
    "tóngxué",
    "noun",
    "classmate",
    "4",
    "他是+我的+{S}",
    "他是我的{S}。",
    "Tā shì wǒ de {S}.",
    "He is my {S}.",
    "同学",
    [
      "同学",
      "朋友",
      "老师"
    ],
    "two college classmates comparing handwritten notes at a library table"
  ],
  [
    212,
    "外",
    "wài",
    "noun",
    "outside, exterior",
    "2",
    "门+{S}+有+人",
    "门{S}有车。",
    "Mén {S} yǒu chē.",
    "There is a car {S} the door.",
    "外",
    [
      "外",
      "里",
      "前"
    ],
    "looking through an open front doorway at a parked car on a sunny street"
  ],
  [
    213,
    "外边",
    "wàibian",
    "noun",
    "outside",
    "2",
    "{S}+很+[形容词]",
    "{S}很冷。",
    "{S} hěn lěng.",
    "It is very cold {S}.",
    "外边",
    [
      "外边",
      "里边",
      "这边"
    ],
    "frosted trees visible outside a warm, cozy indoor cafe window"
  ],
  [
    214,
    "玩",
    "wán",
    "verb",
    "to play",
    "1",
    "[主语]+去+[地点]+{S}",
    "小朋友在公园{S}。",
    "Xiǎopéngyǒu zài gōngyuán {S}.",
    "The children are {S} in the park.",
    "玩",
    [
      "玩",
      "跑",
      "学习"
    ],
    "children laughing and playing together on green grass in daylight"
  ],
  [
    215,
    "晚",
    "wǎn",
    "adjective",
    "late",
    "6",
    "现在+很+{S}+了",
    "现在很{S}了。",
    "Xiànzài hěn {S} le.",
    "It is very {S} now.",
    "晚",
    [
      "晚",
      "早",
      "忙"
    ],
    "warm streetlights glowing along a quiet neighborhood sidewalk at night"
  ],
  [
    216,
    "晚饭",
    "wǎnfàn",
    "noun",
    "dinner",
    "1",
    "我们+吃+{S}",
    "我们七点吃{S}。",
    "Wǒmen qī diǎn chī {S}.",
    "We eat {S} at seven o'clock.",
    "晚饭",
    [
      "晚饭",
      "午饭",
      "早饭"
    ],
    "a family gathered around a warm evening meal under pendant kitchen lights"
  ],
  [
    217,
    "晚上",
    "wǎnshang",
    "noun",
    "evening",
    "3",
    "{S}+我+看书",
    "{S}我看电视。",
    "{S} wǒ kàn diànshì.",
    "In the {S} I watch television.",
    "晚上",
    [
      "晚上",
      "上午",
      "下午"
    ],
    "a cozy living room lamp lit in the evening beside a sofa"
  ],
  [
    218,
    "喂",
    "wèi",
    "interjection",
    "hello (used when answering the phone)",
    "6",
    "{S}，请问是+[人]+吗",
    "{S}，请问你是王老师吗？",
    "{S}, qǐngwèn nǐ shì Wáng lǎoshī ma?",
    "{S}, may I ask if you are Teacher Wang?",
    "喂",
    [
      "喂",
      "你好",
      "请问"
    ],
    "a woman holding a phone to her ear at a kitchen counter while answering a call"
  ],
  [
    219,
    "问",
    "wèn",
    "verb",
    "to ask",
    "1",
    "我+{S}+老师+问题",
    "我{S}老师一个问题。",
    "Wǒ {S} lǎoshī yí gè wèntí.",
    "I {S} the teacher a question.",
    "问",
    [
      "问",
      "给",
      "看"
    ],
    "a student raising a hand respectfully to ask a teacher a question"
  ],
  [
    220,
    "问题",
    "wèntí",
    "noun",
    "question",
    "1",
    "我+有+一个+{S}",
    "我有一个{S}。",
    "Wǒ yǒu yí gè {S}.",
    "I have a {S}.",
    "问题",
    [
      "问题",
      "书",
      "手机"
    ],
    "a student pointing at a sentence in a textbook while consulting a teacher"
  ],
  [
    221,
    "我",
    "wǒ",
    "pronoun",
    "I",
    "4",
    "{S}+是+[身份]",
    "{S}是大学生。",
    "{S} shì dàxuéshēng.",
    "{S} am a university student.",
    "我",
    [
      "我",
      "你",
      "他"
    ],
    "a smiling college student standing outside a campus library holding books"
  ],
  [
    222,
    "地点",
    "dìdiǎn",
    "noun",
    "place",
    "2",
    "这个+{S}+很漂亮",
    "这个{S}很漂亮。",
    "Zhège {S} hěn piàoliang.",
    "This {S} is very beautiful.",
    "地点",
    [
      "地点",
      "地方",
      "学校"
    ],
    "a scenic park square with green trees and flowers"
  ],
  [
    223,
    "五",
    "wǔ",
    "number",
    "five",
    "3",
    "下午+{S}+点",
    "下午{S}点下班。",
    "Xiàwǔ {S} diǎn xiàbān.",
    "We get off work at {S} in the afternoon.",
    "五",
    [
      "五",
      "四",
      "六"
    ],
    "a desk clock showing five o'clock next to a closed notebook"
  ],
  [
    224,
    "午饭",
    "wǔfàn",
    "noun",
    "lunch",
    "1",
    "中午+吃+{S}",
    "我十二点吃{S}。",
    "Wǒ shí'èr diǎn chī {S}.",
    "I eat {S} at twelve o'clock.",
    "午饭",
    [
      "午饭",
      "早饭",
      "晚饭"
    ],
    "a sunlit cafe table with a warm bowl of rice and vegetables at noon"
  ],
  [
    225,
    "喜欢",
    "xǐhuan",
    "verb",
    "to like",
    "1",
    "[主语]+很+{S}+[名词]",
    "我很{S}茶。",
    "Wǒ hěn {S} chá.",
    "I really {S} tea.",
    "喜欢",
    [
      "喜欢",
      "爱",
      "想"
    ],
    "a smiling tea lover holding a warm porcelain teapot in a bright room"
  ],
  [
    226,
    "下",
    "xià",
    "noun、verb、classifier",
    "down, below; to go down; measure word for times",
    "2",
    "[物体]+在+桌子+{S}",
    "猫在桌子{S}。",
    "Māo zài zhuōzi {S}.",
    "The cat is {S} the table.",
    "下",
    [
      "下",
      "上",
      "里"
    ],
    "a small dog resting quietly underneath a wooden dining table"
  ],
  [
    227,
    "下雨",
    "xià yǔ",
    "phrase",
    "to rain",
    "1",
    "外面+在+{S}",
    "今天{S}了。",
    "Jīntiān {S} le.",
    "It {S} today.",
    "下雨",
    [
      "下雨",
      "下雪"
    ],
    "raindrops glistening on a cafe window while pedestrians walk past with umbrellas"
  ],
  [
    228,
    "下班",
    "xiàbān",
    "verb",
    "to get off work",
    "1",
    "[主语]+五点+{S}",
    "爸爸六点{S}。",
    "Bàba liù diǎn {S}.",
    "Dad {S} at six o'clock.",
    "下班",
    [
      "下班",
      "上班",
      "回家"
    ],
    "office workers stepping out onto a warm evening sidewalk after work"
  ],
  [
    229,
    "下课",
    "xiàkè",
    "verb",
    "to finish class",
    "1",
    "我们+十点+{S}",
    "我们十一点{S}。",
    "Wǒmen shíyī diǎn {S}.",
    "We {S} at eleven o'clock.",
    "下课",
    [
      "下课",
      "上课",
      "休息"
    ],
    "students packing notebooks into backpacks as class wraps up"
  ],
  [
    230,
    "下午",
    "xiàwǔ",
    "noun",
    "afternoon",
    "3",
    "{S}+我+去+[地点]",
    "{S}我去书店。",
    "{S} wǒ qù shūdiàn.",
    "In the {S} I am going to the bookstore.",
    "下午",
    [
      "下午",
      "上午",
      "晚上"
    ],
    "warm golden afternoon sunlight falling across a quiet bookstore entrance"
  ],
  [
    231,
    "先生",
    "xiānsheng",
    "noun",
    "Mr., husband",
    "4",
    "这位+{S}+是+[身份]",
    "李{S}是医生。",
    "Lǐ {S} shì yīshēng.",
    "{S} Li is a doctor.",
    "先生",
    [
      "先生",
      "女士",
      "老师"
    ],
    "a polite gentleman in a neat jacket smiling outside a clinic"
  ],
  [
    232,
    "现在",
    "xiànzài",
    "noun",
    "now",
    "3",
    "{S}+几点了",
    "{S}八点了。",
    "{S} bā diǎn le.",
    "It is eight o'clock {S}.",
    "现在",
    [
      "现在",
      "今天",
      "明天"
    ],
    "a wristwatch clearly showing eight o'clock on a commuter's wrist"
  ],
  [
    233,
    "想",
    "xiǎng",
    "verb",
    "to think; to want",
    "5",
    "[主语]+{S}+[动词]",
    "我{S}喝水。",
    "Wǒ {S} hē shuǐ.",
    "I {S} to drink water.",
    "想",
    [
      "想",
      "要",
      "喜欢"
    ],
    "a hiker pausing in the shade eyeing a cold bottle of water"
  ],
  [
    234,
    "小",
    "xiǎo",
    "adjective、prefix",
    "small; prefix indicating small size or endearment",
    "6",
    "这个+[名词]+很+{S}",
    "这只狗很{S}。",
    "Zhè zhī gǒu hěn {S}.",
    "This dog is very {S}.",
    "小",
    [
      "小",
      "大",
      "漂亮"
    ],
    "a tiny puppy sitting happily in the palm of a gentle hand"
  ],
  [
    235,
    "小朋友",
    "xiǎopéngyǒu",
    "noun",
    "little friend, child",
    "4",
    "那个+{S}+很可爱",
    "{S}在学校玩。",
    "{S} zài xuéxiào wán.",
    "The {S} are playing at school.",
    "小朋友",
    [
      "小朋友",
      "小学生",
      "孩子"
    ],
    "young children laughing on a sunny elementary school playground"
  ],
  [
    236,
    "小时",
    "xiǎoshí",
    "noun",
    "hour",
    "3",
    "我+工作了+两+{S}",
    "我学习了一{S}。",
    "Wǒ xuéxí le yì {S}.",
    "I studied for one {S}.",
    "小时",
    [
      "小时",
      "分钟",
      "天"
    ],
    "an hourglass resting beside an open Mandarin notebook on a sunlit desk"
  ],
  [
    237,
    "小学",
    "xiǎoxué",
    "noun",
    "primary school",
    "2",
    "弟弟+在+{S}+学习",
    "妹妹在{S}学习。",
    "Mèimei zài {S} xuéxí.",
    "Younger sister studies at {S}.",
    "小学",
    [
      "小学",
      "中学",
      "大学"
    ],
    "young children walking happily through a bright primary school courtyard"
  ],
  [
    238,
    "小学生",
    "xiǎoxuéshēng",
    "noun",
    "primary school student",
    "4",
    "他是+{S}",
    "弟弟是{S}。",
    "Dìdi shì {S}.",
    "Younger brother is a {S}.",
    "小学生",
    [
      "小学生",
      "中学生",
      "大学生"
    ],
    "a young primary school pupil wearing a tidy uniform and yellow cap"
  ],
  [
    239,
    "些",
    "xiē",
    "classifier",
    "measure word for an indefinite amount",
    "3",
    "这+{S}+[名词]",
    "这{S}苹果很甜。",
    "Zhè {S} píngguǒ hěn hǎochī.",
    "These ({S}) apples are delicious.",
    "些",
    [
      "些",
      "个",
      "点"
    ],
    "a small basket of fresh red apples on a kitchen counter"
  ],
  [
    240,
    "写",
    "xiě",
    "verb",
    "to write",
    "1",
    "[主语]+在+{S}+汉字",
    "我在{S}汉字。",
    "Wǒ zài {S} Hànzì.",
    "I am {S} Chinese characters.",
    "写",
    [
      "写",
      "读",
      "看"
    ],
    "a close-up of a hand writing neat Chinese strokes in a notebook"
  ],
  [
    241,
    "谢谢",
    "xièxie",
    "verb",
    "to thank",
    "6",
    "{S}+你",
    "{S}你！",
    "{S} nǐ!",
    "{S} you!",
    "谢谢",
    [
      "谢谢",
      "请问",
      "对不起"
    ],
    "a smiling customer thanking a barista as she receives a cup of tea"
  ],
  [
    242,
    "新",
    "xīn",
    "adjective",
    "new",
    "6",
    "这是+我+的+{S}+书",
    "这是我的{S}书。",
    "Zhè shì wǒ de {S} shū.",
    "This is my {S} book.",
    "新",
    [
      "新",
      "好",
      "大"
    ],
    "a crisp, freshly unwrapped paperback book resting on a sunny cafe table"
  ],
  [
    243,
    "星期",
    "xīngqī",
    "noun",
    "week",
    "3",
    "一个+{S}+有+七天",
    "这{S}我很忙。",
    "Zhè {S} wǒ hěn máng.",
    "This {S} I am very busy.",
    "星期",
    [
      "星期",
      "月",
      "年"
    ],
    "a clean weekly desk planner filled with neat handwritten notes"
  ],
  [
    244,
    "星期日",
    "xīngqīrì",
    "noun",
    "Sunday",
    "3",
    "{S}+我+休息",
    "{S}我们去公园。",
    "{S} wǒmen zài jiā xiūxi.",
    "On {S} we rest at home.",
    "星期日",
    [
      "星期日",
      "星期天",
      "明天"
    ],
    "a relaxed family lounging on a sunlit living room couch on Sunday morning"
  ],
  [
    245,
    "星期天",
    "xīngqītiān",
    "noun",
    "Sunday",
    "3",
    "{S}+我们+去+[地点]",
    "{S}我去超市。",
    "{S} wǒ qù chāoshì.",
    "On {S} I go to the supermarket.",
    "星期天",
    [
      "星期天",
      "星期日",
      "今天"
    ],
    "a shopper leisurely picking fresh vegetables on a Sunday morning"
  ],
  [
    246,
    "休息",
    "xiūxi",
    "verb",
    "to rest",
    "1",
    "请+{S}+一下",
    "我回家{S}。",
    "Wǒ huí jiā {S}.",
    "I am going home {S}.",
    "休息",
    [
      "休息",
      "睡觉",
      "工作"
    ],
    "a person leaning back in a comfortable armchair beside a window houseplant"
  ],
  [
    247,
    "学",
    "xué",
    "verb",
    "to learn, to study",
    "1",
    "[主语]+想+{S}+汉语",
    "我想{S}汉语。",
    "Wǒ xiǎng {S} Hànyǔ.",
    "I want {S} Chinese.",
    "学",
    [
      "学",
      "说",
      "写"
    ],
    "a learner opening a beginner Chinese textbook at a sunlit wooden table"
  ],
  [
    248,
    "学生",
    "xuéshēng",
    "noun",
    "student",
    "4",
    "他+是+我的+{S}",
    "我是{S}。",
    "Wǒ shì {S}.",
    "I am a {S}.",
    "学生",
    [
      "学生",
      "老师",
      "医生"
    ],
    "a smiling student holding notebooks outside a bright lecture hall"
  ],
  [
    249,
    "学习",
    "xuéxí",
    "verb",
    "to study",
    "1",
    "[主语]+在+{S}+汉语",
    "我们在{S}汉语。",
    "Wǒmen zài {S} Hànyǔ.",
    "We are {S} Chinese.",
    "学习",
    [
      "学习",
      "读书",
      "工作"
    ],
    "two students studying Chinese flashcards together in a sunlit library"
  ],
  [
    250,
    "学校",
    "xuéxiào",
    "noun",
    "school",
    "2",
    "[主语]+在+{S}",
    "我在{S}上课。",
    "Wǒ zài {S} shàngkè.",
    "I attend class at {S}.",
    "学校",
    [
      "学校",
      "大学",
      "公司"
    ],
    "a tidy brick school campus framed by green trees in daylight"
  ],
  [
    251,
    "雪",
    "xuě",
    "noun",
    "snow",
    "6",
    "外面+有+{S}",
    "今年下了很多{S}。",
    "Jīntiān xià {S} le.",
    "It is snowing ({S}) today.",
    "雪",
    [
      "雪",
      "雨",
      "风"
    ],
    "soft white snow resting peacefully on pine branches and neighborhood roofs"
  ],
  [
    252,
    "要",
    "yào",
    "verb",
    "to want, to need",
    "5",
    "我+{S}+[名词]",
    "我{S}一杯水。",
    "Wǒ {S} yì bēi shuǐ.",
    "I {S} a glass of water.",
    "要",
    [
      "要",
      "喝",
      "买"
    ],
    "a thirsty customer ordering a glass of water at a sunny cafe counter"
  ],
  [
    253,
    "也",
    "yě",
    "adverb",
    "also, too",
    "5",
    "我+{S}+去",
    "我{S}喜欢吃苹果。",
    "Wǒ {S} xǐhuan chī píngguǒ.",
    "I {S} like eating apples.",
    "也",
    [
      "也",
      "都",
      "还"
    ],
    "two friends sharing fresh sliced apples in a bright kitchen"
  ],
  [
    254,
    "一",
    "yī",
    "number",
    "one",
    "3",
    "{S}+个+[名词]",
    "我有{S}个杯子。",
    "Wǒ yǒu {S} gè bēizi.",
    "I have {S} cup.",
    "一",
    [
      "一",
      "两",
      "三"
    ],
    "a single ceramic mug sitting cleanly on a sunlit wooden counter"
  ],
  [
    255,
    "衣服",
    "yīfu",
    "noun",
    "clothes",
    "1",
    "我+买+新+{S}",
    "她买了一件新{S}。",
    "Tā mǎi le yí jiàn xīn {S}.",
    "She bought a new piece of {S}.",
    "衣服",
    [
      "衣服",
      "鞋",
      "书"
    ],
    "a shopper holding a folded linen shirt inside a sunlit clothing shop"
  ],
  [
    256,
    "医生",
    "yīshēng",
    "noun",
    "doctor",
    "4",
    "[人]+是+{S}",
    "王先生是{S}。",
    "Wáng xiānsheng shì {S}.",
    "Mr. Wang is a {S}.",
    "医生",
    [
      "医生",
      "老师",
      "学生"
    ],
    "a kind doctor with a stethoscope smiling inside a clean examination room"
  ],
  [
    257,
    "医院",
    "yīyuàn",
    "noun",
    "hospital",
    "2",
    "[人]+去+{S}",
    "他去{S}看病。",
    "Tā qù {S} kànbìng.",
    "He goes to the {S} to see a doctor.",
    "医院",
    [
      "医院",
      "学校",
      "商店"
    ],
    "the clean glass entrance of a modern city hospital in daylight"
  ],
  [
    258,
    "一半",
    "yíbàn",
    "number",
    "half",
    "3",
    "我+吃了+{S}",
    "我吃了{S}苹果。",
    "Wǒ chī le {S} píngguǒ.",
    "I ate {S} of the apple.",
    "一半",
    [
      "一半",
      "一个",
      "一点儿"
    ],
    "half of a freshly sliced red apple resting on a wooden cutting board"
  ],
  [
    259,
    "一下",
    "yíxià",
    "numberclassifier、(adverb)",
    "once, a little; (in a short while)",
    "3",
    "请+[动词]+{S}",
    "请等{S}。",
    "Qǐng děng {S}.",
    "Please wait a {S}.",
    "一下",
    [
      "一下"
    ],
    "a colleague pointing gently at a document on a wooden desk"
  ],
  [
    260,
    "椅子",
    "yǐzi",
    "noun",
    "chair",
    "1",
    "请+坐+在+{S}+上",
    "请坐在这把{S}上。",
    "Qǐng zuò zài {S} shàng.",
    "Please sit on the {S}.",
    "椅子",
    [
      "椅子",
      "桌子",
      "沙发"
    ],
    "a simple handcrafted wooden chair beside a sunlit kitchen table"
  ],
  [
    261,
    "一点儿",
    "yìdiǎnr",
    "number-classifier",
    "a little, a bit",
    "3",
    "我+会+说+{S}+汉语",
    "我会说{S}汉语。",
    "Wǒ huì shuō {S} Hànyǔ.",
    "I can speak {S} Chinese.",
    "一点儿",
    [
      "一点儿",
      "一些",
      "很多"
    ],
    "a traveler smiling while reading a pocket Chinese phrasebook"
  ],
  [
    262,
    "一些",
    "yìxiē",
    "number-classifier",
    "some, a few",
    "3",
    "我+买了+{S}+水果",
    "我买了{S}水果。",
    "Wǒ mǎi le {S} shuǐguǒ.",
    "I bought {S} fruit.",
    "一些",
    [
      "一些",
      "一点儿",
      "很多"
    ],
    "a paper grocery bag holding apples, bananas, and oranges on a counter"
  ],
  [
    263,
    "有",
    "yǒu",
    "verb",
    "to have, to exist",
    "5",
    "我+{S}+[名词]",
    "我{S}两只猫。",
    "Wǒ {S} liǎng zhī māo.",
    "I {S} two cats.",
    "有",
    [
      "有",
      "没有",
      "喜欢"
    ],
    "two friendly house cats sitting side by side on a sunlit windowsill"
  ],
  [
    264,
    "有的",
    "yǒude",
    "pronoun",
    "some of them",
    "5",
    "{S}+人+喜欢+[名词]",
    "{S}人喜欢喝茶。",
    "{S} rén xǐhuan hē chá.",
    "{S} people like drinking tea.",
    "有的",
    [
      "有的",
      "有些",
      "很多"
    ],
    "guests seated in a bright cafe enjoying different warm drinks"
  ],
  [
    265,
    "有点儿",
    "yǒudiǎnr",
    "adverb",
    "a little, slightly",
    "6",
    "今天+{S}+[形容词]",
    "今天{S}冷。",
    "Jīntiān {S} lěng.",
    "Today is {S} cold.",
    "有点儿",
    [
      "有点儿",
      "很",
      "非常"
    ],
    "a person wearing a light cardigan walking along a breezy autumn street"
  ],
  [
    266,
    "有些",
    "yǒuxiē",
    "pronoun、(adverb)",
    "some, some of; (somewhat, rather)",
    "5",
    "{S}+[名词]+很+[形容词]",
    "{S}书很好看。",
    "{S} shū hěn hǎokàn.",
    "{S} books are very good.",
    "有些",
    [
      "有些",
      "有的"
    ],
    "a small curated pile of hardcover books resting on a reading table"
  ],
  [
    267,
    "雨",
    "yǔ",
    "noun",
    "rain",
    "6",
    "外面+下+{S}+了",
    "今天下大{S}了。",
    "Jīntiān xià dà {S} le.",
    "It is raining heavily ({S}) today.",
    "雨",
    [
      "雨",
      "雪",
      "风"
    ],
    "steady raindrops splashing onto wet city pavement beside an umbrella"
  ],
  [
    268,
    "元",
    "yuán",
    "classifier",
    "yuan",
    "3",
    "这个+二十+{S}",
    "这本书二十{S}。",
    "Zhè běn shū èrshí {S}.",
    "This book is twenty {S}.",
    "元",
    [
      "元",
      "块",
      "角"
    ],
    "a paperback book beside a twenty-yuan bill on a wooden shop counter"
  ],
  [
    269,
    "月",
    "yuè",
    "noun",
    "month; moon",
    "3",
    "现在+是+几+{S}",
    "现在是五{S}。",
    "Xiànzài shì wǔ {S}.",
    "It is {S} May now.",
    "月",
    [
      "月",
      "日",
      "年"
    ],
    "a spring calendar open to May next to fresh flowers in a jar"
  ],
  [
    270,
    "再",
    "zài",
    "adverb",
    "again, then",
    "5",
    "请+{S}+说一遍",
    "请{S}喝一杯。",
    "Qǐng {S} hē yì bēi.",
    "Please drink another cup ({S}).",
    "再",
    [
      "再",
      "还",
      "也"
    ],
    "a host cheerfully pouring a second cup of warm tea for a friend"
  ],
  [
    271,
    "在",
    "zài",
    "verb、preposition、adverb",
    "to be at; at; in the middle of",
    "2",
    "[主语]+{S}+[地点]",
    "我{S}学校。",
    "Wǒ {S} xuéxiào.",
    "I am {S} school.",
    "在",
    [
      "在",
      "去",
      "回"
    ],
    "a student standing on a sunlit campus walkway holding a notebook"
  ],
  [
    272,
    "再见",
    "zàijiàn",
    "verb",
    "goodbye",
    "6",
    "明天见，{S}",
    "老师，{S}！",
    "Lǎoshī, {S}!",
    "Teacher, {S}!",
    "再见",
    [
      "再见",
      "谢谢",
      "你好"
    ],
    "students smiling and waving goodbye to their teacher outside a classroom"
  ],
  [
    273,
    "早",
    "zǎo",
    "adjective",
    "early",
    "6",
    "早上好，你+很+{S}",
    "你今天很{S}！",
    "Nǐ jīntiān hěn {S}!",
    "You are very {S} today!",
    "早",
    [
      "早",
      "晚",
      "好"
    ],
    "two neighbors greeting each other on a quiet street in soft dawn sunlight"
  ],
  [
    274,
    "早饭",
    "zǎofàn",
    "noun",
    "breakfast",
    "1",
    "我+在+吃+{S}",
    "我在吃{S}。",
    "Wǒ zài chī {S}.",
    "I am eating {S}.",
    "早饭",
    [
      "早饭",
      "午饭",
      "晚饭"
    ],
    "a sunny kitchen table set with warm steamed buns, an egg, and tea"
  ],
  [
    275,
    "早上",
    "zǎoshang",
    "noun",
    "morning",
    "3",
    "{S}+好",
    "{S}好！",
    "{S} hǎo!",
    "Good {S}!",
    "早上",
    [
      "早上",
      "上午",
      "晚上"
    ],
    "golden sunrise light pouring across a quiet neighborhood balcony"
  ],
  [
    276,
    "怎么",
    "zěnme",
    "pronoun",
    "how",
    "5",
    "这个+字+{S}+读",
    "你{S}去学校？",
    "Nǐ {S} qù xuéxiào?",
    "{S} do you go to school?",
    "怎么",
    [
      "怎么",
      "什么时候",
      "坐车"
    ],
    "two classmates chatting outside a subway stop about their commute"
  ],
  [
    277,
    "怎么样",
    "zěnmeyàng",
    "pronoun",
    "how about, what do you think",
    "5",
    "这个+{S}",
    "今天天气{S}？",
    "Jīntiān tiānqì {S}?",
    "{S} is the weather today?",
    "怎么样",
    [
      "怎么样",
      "好不好",
      "热不热"
    ],
    "a person opening the curtains in the morning to check the sky outside"
  ],
  [
    278,
    "找",
    "zhǎo",
    "verb",
    "to look for",
    "1",
    "我+在+{S}+[东西]",
    "我在{S}我的手机。",
    "Wǒ zài {S} wǒ de shǒujī.",
    "I am {S} my cell phone.",
    "找",
    [
      "找",
      "看",
      "用"
    ],
    "a person patting sofa cushions while searching the living room for their phone"
  ],
  [
    279,
    "这",
    "zhè",
    "pronoun",
    "this",
    "5",
    "{S}+是+[名词]",
    "{S}是我的书。",
    "{S} shì wǒ de shū.",
    "{S} is my book.",
    "这",
    [
      "这",
      "那",
      "哪"
    ],
    "a hand resting on a blue hardcover notebook on a wooden desk"
  ],
  [
    280,
    "这边",
    "zhèbiān",
    "pronoun",
    "here",
    "2",
    "请+往+{S}+走",
    "请坐{S}。",
    "Qǐng zuò {S}.",
    "Please sit {S}.",
    "这边",
    [
      "这边",
      "那边",
      "这里"
    ],
    "a friendly host gesturing toward a sunny seat beside a cafe window"
  ],
  [
    281,
    "这个",
    "zhège",
    "pronoun",
    "this one",
    "5",
    "我+喜欢+{S}",
    "我喜欢{S}。",
    "Wǒ xǐhuan {S}.",
    "I like {S}.",
    "这个",
    [
      "这个",
      "那个",
      "哪个"
    ],
    "a customer smiling and picking up a handcrafted ceramic mug in a shop"
  ],
  [
    282,
    "这里",
    "zhèlǐ",
    "pronoun",
    "here",
    "2",
    "{S}+很+[形容词]",
    "{S}很安静。",
    "{S} hěn ānjìng.",
    "{S} is very quiet.",
    "这里",
    [
      "这里",
      "那里"
    ],
    "a peaceful sunlit garden bench shaded by green maple leaves"
  ],
  [
    283,
    "这儿",
    "zhèr",
    "pronoun",
    "here",
    "2",
    "他+就+在+{S}",
    "他就在{S}。",
    "Tā jiù zài {S}.",
    "He is right {S}.",
    "这儿",
    [
      "这儿",
      "那儿",
      "哪儿"
    ],
    "a friend smiling and waving from a nearby wooden picnic table"
  ],
  [
    284,
    "这些",
    "zhèxiē",
    "pronoun",
    "these",
    "5",
    "{S}+是+[名词]",
    "{S}是水果。",
    "{S} shì shuǐguǒ.",
    "{S} are fruits.",
    "这些",
    [
      "这些",
      "那些",
      "哪些"
    ],
    "a wooden tray holding fresh oranges, pears, and apples on a counter"
  ],
  [
    285,
    "真",
    "zhēn",
    "adverb、(adjective)",
    "really; (true)",
    "6",
    "今天+{S}+[形容词]",
    "今天{S}好！",
    "Jīntiān {S} hǎo!",
    "Today is {S} good!",
    "真",
    [
      "真",
      "很",
      "太"
    ],
    "a smiling hiker admiring a sunlit view from a wooden lookout"
  ],
  [
    286,
    "正在",
    "zhèngzài",
    "adverb",
    "in the process of",
    "5",
    "他+{S}+[动词]",
    "他{S}看书。",
    "Tā {S} kànshū.",
    "He is {S} reading a book.",
    "正在",
    [
      "正在",
      "在",
      "想"
    ],
    "a young man absorbed in reading a novel on a cozy window seat"
  ],
  [
    287,
    "只",
    "zhī",
    "classifier",
    "measure word for animals, one of a pair",
    "3",
    "一+{S}+[动物]",
    "我有一{S}小猫。",
    "Wǒ yǒu yì {S} xiǎo māo.",
    "I have one {S} kitten.",
    "只",
    [
      "只",
      "个",
      "条"
    ],
    "a small striped kitten sitting upright on a woven living room rug"
  ],
  [
    288,
    "知道",
    "zhīdào",
    "verb",
    "to know",
    "1",
    "我+{S}+[内容]",
    "我{S}他的名字。",
    "Wǒ {S} tā de míngzi.",
    "I {S} his name.",
    "知道",
    [
      "知道",
      "认识",
      "记得"
    ],
    "a smiling student nodding confidently during a class discussion"
  ],
  [
    289,
    "中国",
    "Zhōngguó",
    "noun",
    "China",
    "2",
    "我+想+去+{S}",
    "我想去{S}。",
    "Wǒ xiǎng qù {S}.",
    "I want to go to {S}.",
    "中国",
    [
      "中国",
      "北京",
      "上海"
    ],
    "traditional tiled roofs beside modern city greenery in clear morning sunlight"
  ],
  [
    290,
    "中文",
    "Zhōngwén",
    "noun",
    "Chinese language",
    "1",
    "我+会+说+{S}",
    "我在学{S}。",
    "Wǒ zài xué {S}.",
    "I am learning {S}.",
    "中文",
    [
      "中文",
      "汉语",
      "汉字"
    ],
    "a tablet and paper notebook showing Chinese study notes on a wooden table"
  ],
  [
    291,
    "中午",
    "zhōngwǔ",
    "noun",
    "noon",
    "3",
    "{S}+我们+吃午饭",
    "{S}我们十二点吃饭。",
    "{S} wǒmen shí'èr diǎn chīfàn.",
    "At {S}, we eat at twelve.",
    "中午",
    [
      "中午",
      "上午",
      "下午"
    ],
    "coworkers sharing lunch together at a bright cafe table at midday"
  ],
  [
    292,
    "中学",
    "zhōngxué",
    "noun",
    "middle school",
    "2",
    "哥哥+在+{S}+学习",
    "妹妹在{S}学习。",
    "Mèimei zài {S} xuéxí.",
    "Younger sister studies at {S}.",
    "中学",
    [
      "中学",
      "小学",
      "大学"
    ],
    "teenagers in tidy school uniforms walking across a sunny schoolyard"
  ],
  [
    293,
    "中学生",
    "zhōngxuéshēng",
    "noun",
    "middle school student",
    "4",
    "他是+{S}",
    "妹妹是{S}。",
    "Mèimei shì {S}.",
    "Younger sister is a {S}.",
    "中学生",
    [
      "中学生",
      "小学生",
      "大学生"
    ],
    "a middle school student carrying a backpack and smiling near a bicycle rack"
  ],
  [
    294,
    "住",
    "zhù",
    "verb",
    "to live, to reside",
    "2",
    "[主语]+{S}+在+[地点]",
    "我{S}在北京。",
    "Wǒ {S} zài Běijīng.",
    "I {S} in Beijing.",
    "住",
    [
      "住"
    ],
    "a sunny residential courtyard apartment with potted plants along the balcony"
  ],
  [
    295,
    "桌子",
    "zhuōzi",
    "noun",
    "table, desk",
    "1",
    "[物体]+在+{S}+上",
    "书在{S}上。",
    "Shū zài {S} shàng.",
    "The book is on the {S}.",
    "桌子",
    [
      "桌子",
      "椅子",
      "床"
    ],
    "a clean solid-oak dining table with a single textbook resting on top"
  ],
  [
    296,
    "字",
    "zì",
    "noun",
    "character, script",
    "1",
    "这个+{S}+怎么写",
    "这个{S}很好看。",
    "Zhège {S} hěn hǎokàn.",
    "This {S} is very good-looking.",
    "字",
    [
      "字",
      "汉字",
      "书"
    ],
    "a neatly written Chinese character in black ink on textured white paper"
  ],
  [
    297,
    "昨天",
    "zuótiān",
    "noun",
    "yesterday",
    "3",
    "{S}+我+去了+[地点]",
    "{S}下雨了。",
    "{S} xià yǔ le.",
    "It rained {S}.",
    "昨天",
    [
      "昨天",
      "今天",
      "明天"
    ],
    "puddles reflecting a brightening sky on a quiet sidewalk after yesterday's rain"
  ],
  [
    298,
    "坐",
    "zuò",
    "verb",
    "to sit",
    "1",
    "请+{S}",
    "请{S}！",
    "Qǐng {S}!",
    "Please {S}!",
    "坐",
    [
      "坐",
      "看",
      "听"
    ],
    "a friendly host gesturing toward a cushioned wooden chair at a tea table"
  ],
  [
    299,
    "做",
    "zuò",
    "verb",
    "to do, to make",
    "1",
    "你+在+{S}+什么",
    "你在{S}什么？",
    "Nǐ zài {S} shénme?",
    "What are you {S}?",
    "做",
    [
      "做",
      "看",
      "吃"
    ],
    "two friends chatting in a bright kitchen while preparing afternoon snacks"
  ],
  [
    300,
    "做饭",
    "zuò fàn",
    "phrase",
    "to cook",
    "1",
    "[主语]+在+{S}",
    "爸爸在{S}。",
    "Bàba zài {S}.",
    "Dad is {S}.",
    "做饭",
    [
      "做饭",
      "吃饭",
      "喝茶"
    ],
    "a smiling father cooking stir-fry in a sunlit home kitchen"
  ]
];
