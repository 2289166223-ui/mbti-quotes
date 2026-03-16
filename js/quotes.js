// MBTI Quotes Data
// 每个类型包含符合其性格特点的语录，带有来源标注

const mbtiData = {
    // ========== 分析家 Analysts ==========
    "INTJ": {
        name: "INTJ - 建筑师",
        desc: "富有想象力的战略家，一切皆在计划之中",
        quotes: [
            { text: "我思故我在。", source: "《第一哲学沉思集》— 笛卡尔" },
            { text: "The best way to predict the future is to create it.", source: "Peter Drucker" },
            { text: "未经审视的人生不值得过。", source: "《申辩篇》— 苏格拉底" },
            { text: "Vision without execution is just hallucination.", source: "Thomas Edison" },
            { text: "知识就是力量。", source: "《沉思录》— 弗朗西斯·培根" },
            { text: "The only true wisdom is in knowing you know nothing.", source: "Socrates" },
            { text: "孤独是一个人的狂欢。", source: "《百年孤独》— 马尔克斯" },
            { text: "In the middle of difficulty lies opportunity.", source: "Albert Einstein" },
            { text: "博学之，审问之，慎思之，明辨之，笃行之。", source: "《中庸》" },
            { text: "The mind is everything. What you think you become.", source: "Buddha" },
            { text: "吾生也有涯，而知也无涯。", source: "《庄子·养生主》" },
            { text: "Simplicity is the ultimate sophistication.", source: "Leonardo da Vinci" }
        ]
    },
    "INTP": {
        name: "INTP - 逻辑学家",
        desc: "富有创造力的发明家，对知识有着不懈的追求",
        quotes: [
            { text: "想象力比知识更重要。", source: "Albert Einstein" },
            { text: "Question everything, assume nothing.", source: "Euripides" },
            { text: "学而不思则罔，思而不学则殆。", source: "《论语》— 孔子" },
            { text: "The important thing is not to stop questioning.", source: "Albert Einstein" },
            { text: "真理只有一个，但谬误有千种。", source: "《人性论》— 休谟" },
            { text: "I have no special talents. I am only passionately curious.", source: "Albert Einstein" },
            { text: "逻辑会把你从A带到B，想象力会把你带到任何地方。", source: "Albert Einstein" },
            { text: "The universe is made of stories, not of atoms.", source: "Muriel Rukeyser" },
            { text: "格物致知。", source: "《大学》" },
            { text: "Curiosity is the wick in the candle of learning.", source: "William Arthur Ward" },
            { text: "万物皆有裂痕，那是光照进来的地方。", source: "《Anthem》— Leonard Cohen" },
            { text: "Science is organized knowledge. Wisdom is organized life.", source: "Immanuel Kant" }
        ]
    },
    "ENTJ": {
        name: "ENTJ - 指挥官",
        desc: "大胆、富有想象力的领导者",
        quotes: [
            { text: "天行健，君子以自强不息。", source: "《周易》" },
            { text: "Efficiency is doing things right; effectiveness is doing the right things.", source: "Peter Drucker" },
            { text: "将相本无种，男儿当自强。", source: "《神童诗》— 汪洙" },
            { text: "The best time to plant a tree was 20 years ago. The second best time is now.", source: "Chinese Proverb" },
            { text: "不谋万世者，不足谋一时；不谋全局者，不足谋一域。", source: "《寤言二·迁都建藩议》— 陈澹然" },
            { text: "Success is walking from failure to failure with no loss of enthusiasm.", source: "Winston Churchill" },
            { text: "燕雀安知鸿鹄之志。", source: "《史记·陈涉世家》" },
            { text: "Leadership is not about being in charge. It's about taking care of those in your charge.", source: "Simon Sinek" },
            { text: "千里之行，始于足下。", source: "《道德经》— 老子" },
            { text: "Action is the foundational key to all success.", source: "Pablo Picasso" },
            { text: "志不强者智不达。", source: "《墨子·修身》" },
            { text: "The way to get started is to quit talking and begin doing.", source: "Walt Disney" }
        ]
    },
    "ENTP": {
        name: "ENTP - 辩论家",
        desc: "聪明好奇的思想家，不会放过任何智力挑战",
        quotes: [
            { text: "打破常规，才能超越平凡。", source: "《创新者的窘境》— 克莱顿·克里斯坦森" },
            { text: "Innovation distinguishes between a leader and a follower.", source: "Steve Jobs" },
            { text: "世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。", source: "《悲惨世界》— 雨果" },
            { text: "Stay hungry, stay foolish.", source: "Steve Jobs" },
            { text: "我不同意你的观点，但我誓死捍卫你说话的权利。", source: "伏尔泰（常被引用）" },
            { text: "Creativity is intelligence having fun.", source: "Albert Einstein" },
            { text: "穷则变，变则通，通则久。", source: "《周易·系辞下》" },
            { text: "The only way to do great work is to love what you do.", source: "Steve Jobs" },
            { text: "不破不立，不塞不流，不止不行。", source: "《原道》— 韩愈" },
            { text: "Think different.", source: "Apple Inc." },
            { text: "知者不惑，仁者不忧，勇者不惧。", source: "《论语》— 孔子" },
            { text: "Progress is impossible without change.", source: "George Bernard Shaw" }
        ]
    },

    // ========== 外交家 Diplomats ==========
    "INFJ": {
        name: "INFJ - 提倡者",
        desc: "安静而神秘，同时又鼓舞人心",
        quotes: [
            { text: "己所不欲，勿施于人。", source: "《论语》— 孔子" },
            { text: "Be the change you wish to see in the world.", source: "Mahatma Gandhi" },
            { text: "人生如逆旅，我亦是行人。", source: "《临江仙》— 苏轼" },
            { text: "In a gentle way, you can shake the world.", source: "Mahatma Gandhi" },
            { text: "从前的日色变得慢，车马邮件都慢，一生只够爱一个人。", source: "《从前慢》— 木心" },
            { text: "The privilege of a lifetime is to become who you truly are.", source: "Carl Jung" },
            { text: "心有猛虎，细嗅蔷薇。", source: "《于飞》— 萨松（余光中译）" },
            { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", source: "Ralph Waldo Emerson" },
            { text: "采菊东篱下，悠然见南山。", source: "《饮酒》— 陶渊明" },
            { text: "The soul always knows what to do to heal itself.", source: "Caroline Myss" },
            { text: "落红不是无情物，化作春泥更护花。", source: "《己亥杂诗》— 龚自珍" },
            { text: "Quiet people have the loudest minds.", source: "Stephen Hawking" }
        ]
    },
    "INFP": {
        name: "INFP - 调停者",
        desc: "诗意、善良的利他主义者，总是热情地帮助正义事业",
        quotes: [
            { text: "面朝大海，春暖花开。", source: "《面朝大海，春暖花开》— 海子" },
            { text: "Not all those who wander are lost.", source: "《指环王》— J.R.R. Tolkien" },
            { text: "醉过才知酒浓，爱过才知情重。", source: "《天净沙·秋思》— 胡适" },
            { text: "To live is the rarest thing in the world. Most people exist, that is all.", source: "Oscar Wilde" },
            { text: "你要做一个不动声色的大人了。不准情绪化，不准偷偷想念，不准回头看。", source: "《舞！舞！舞！》— 村上春树" },
            { text: "The world is full of magic things, patiently waiting for our senses to grow sharper.", source: "W.B. Yeats" },
            { text: "我荒废了时间，时间便把我荒废了。", source: "《理查二世》— 莎士比亚" },
            { text: "Be yourself; everyone else is already taken.", source: "Oscar Wilde" },
            { text: "人间有味是清欢。", source: "《浣溪沙》— 苏轼" },
            { text: "Art enables us to find ourselves and lose ourselves at the same time.", source: "Thomas Merton" },
            { text: "人生若只如初见，何事秋风悲画扇。", source: "《木兰花令》— 纳兰性德" },
            { text: "Follow your heart, but take your brain with you.", source: "Alfred Adler" }
        ]
    },
    "ENFJ": {
        name: "ENFJ - 主人公",
        desc: "富有魅力的鼓舞人心的领导者，能够吸引听众",
        quotes: [
            { text: "赠人玫瑰，手有余香。", source: "印度谚语" },
            { text: "The best way to find yourself is to lose yourself in the service of others.", source: "Mahatma Gandhi" },
            { text: "一个人的价值，应该看他贡献什么，而不是看他取得什么。", source: "Albert Einstein" },
            { text: "We rise by lifting others.", source: "Robert Ingersoll" },
            { text: "穷则独善其身，达则兼济天下。", source: "《孟子》" },
            { text: "Alone we can do so little; together we can do so much.", source: "Helen Keller" },
            { text: "教育的本质意味着：一棵树摇动另一棵树，一朵云推动另一朵云，一个灵魂唤醒另一个灵魂。", source: "《什么是教育》— 雅斯贝尔斯" },
            { text: "The purpose of life is not to be happy. It is to be useful.", source: "Ralph Waldo Emerson" },
            { text: "先天下之忧而忧，后天下之乐而乐。", source: "《岳阳楼记》— 范仲淹" },
            { text: "No one has ever become poor by giving.", source: "Anne Frank" },
            { text: "随风潜入夜，润物细无声。", source: "《春夜喜雨》— 杜甫" },
            { text: "Leadership is not about being in charge. It's about taking care of those in your charge.", source: "Simon Sinek" }
        ]
    },
    "ENFP": {
        name: "ENFP - 竞选者",
        desc: "热情、有创造力、社交能力强的自由精灵",
        quotes: [
            { text: "生活不止眼前的苟且，还有诗和远方。", source: "高晓松" },
            { text: "Life is either a daring adventure or nothing at all.", source: "Helen Keller" },
            { text: "我是人间惆怅客，知君何事泪纵横。", source: "《浣溪沙》— 纳兰性德" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", source: "Eleanor Roosevelt" },
            { text: "我曾踏月而来，只因你在山中。", source: "《山中》— 席慕蓉" },
            { text: "Adventure is worthwhile in itself.", source: "Amelia Earhart" },
            { text: "永远年轻，永远热泪盈眶。", source: "《达摩流浪者》— 杰克·凯鲁亚克" },
            { text: "Life begins at the end of your comfort zone.", source: "Neale Donald Walsch" },
            { text: "山川异域，风月同天。", source: "《绣袈裟衣缘》— 长屋王" },
            { text: "Happiness is not something ready made. It comes from your own actions.", source: "Dalai Lama" },
            { text: "既然选择了远方，便只顾风雨兼程。", source: "《热爱生命》— 汪国真" },
            { text: "The only impossible journey is the one you never begin.", source: "Tony Robbins" }
        ]
    },

    // ========== 守护者 Sentinels ==========
    "ISTJ": {
        name: "ISTJ - 物流师",
        desc: "实际且注重事实，可靠性无可置疑",
        quotes: [
            { text: "千里之堤，毁于蚁穴。", source: "《韩非子》" },
            { text: "The secret of getting ahead is getting started.", source: "Mark Twain" },
            { text: "勿以恶小而为之，勿以善小而不为。", source: "《三国志》— 刘备" },
            { text: "Well done is better than well said.", source: "Benjamin Franklin" },
            { text: "不积跬步，无以至千里；不积小流，无以成江海。", source: "《劝学》— 荀子" },
            { text: "Discipline is the bridge between goals and accomplishment.", source: "Jim Rohn" },
            { text: "言必信，行必果。", source: "《论语》— 孔子" },
            { text: "Quality means doing it right when no one is looking.", source: "Henry Ford" },
            { text: "业精于勤，荒于嬉；行成于思，毁于随。", source: "《进学解》— 韩愈" },
            { text: "Success is the sum of small efforts, repeated day in and day out.", source: "Robert Collier" },
            { text: "锲而舍之，朽木不折；锲而不舍，金石可镂。", source: "《劝学》— 荀子" },
            { text: "A place for everything, everything in its place.", source: "Benjamin Franklin" }
        ]
    },
    "ISFJ": {
        name: "ISFJ - 守卫者",
        desc: "非常专注且热情的保护者，时刻准备着保护所爱的人",
        quotes: [
            { text: "谁言寸草心，报得三春晖。", source: "《游子吟》— 孟郊" },
            { text: "Kindness is a language which the deaf can hear and the blind can see.", source: "Mark Twain" },
            { text: "但愿人长久，千里共婵娟。", source: "《水调歌头》— 苏轼" },
            { text: "The greatest thing you'll ever learn is just to love and be loved in return.", source: "《Nature Boy》— Eden Ahbez" },
            { text: "家是最小国，国是千万家。", source: "《国家》— 歌曲" },
            { text: "Home is not a place, it's a feeling.", source: "Cecelia Ahern" },
            { text: "慈母手中线，游子身上衣。", source: "《游子吟》— 孟郊" },
            { text: "Carry out a random act of kindness, with no expectation of reward.", source: "Princess Diana" },
            { text: "岁月静好，现世安稳。", source: "《倾城之恋》— 张爱玲" },
            { text: "In the end, we only regret the chances we didn't take.", source: "Lewis Carroll" },
            { text: "此情可待成追忆，只是当时已惘然。", source: "《锦瑟》— 李商隐" },
            { text: "The best portion of a good man's life is his little, nameless, unremembered acts of kindness.", source: "William Wordsworth" }
        ]
    },
    "ESTJ": {
        name: "ESTJ - 总经理",
        desc: "出色的管理者，在管理事务或人员方面无与伦比",
        quotes: [
            { text: "凡事预则立，不预则废。", source: "《礼记·中庸》" },
            { text: "The way to get started is to quit talking and begin doing.", source: "Walt Disney" },
            { text: "有志者事竟成。", source: "《后汉书》" },
            { text: "Management is doing things right; leadership is doing the right things.", source: "Peter Drucker" },
            { text: "工欲善其事，必先利其器。", source: "《论语》— 孔子" },
            { text: "Time is what we want most, but what we use worst.", source: "William Penn" },
            { text: "天下难事，必作于易；天下大事，必作于细。", source: "《道德经》— 老子" },
            { text: "Plans are nothing; planning is everything.", source: "Dwight D. Eisenhower" },
            { text: "没有规矩，不成方圆。", source: "《孟子》" },
            { text: "Productivity is never an accident. It is always the result of intelligent effort.", source: "Paul J. Meyer" },
            { text: "纸上得来终觉浅，绝知此事要躬行。", source: "《冬夜读书示子聿》— 陆游" },
            { text: "It is not enough to do your best; you must know what to do, and then do your best.", source: "W. Edwards Deming" }
        ]
    },
    "ESFJ": {
        name: "ESFJ - 执政官",
        desc: "极具同情心、善于社交且受欢迎的人",
        quotes: [
            { text: "海内存知己，天涯若比邻。", source: "《送杜少府之任蜀州》— 王勃" },
            { text: "No act of kindness, no matter how small, is ever wasted.", source: "Aesop" },
            { text: "与朋友交，言而有信。", source: "《论语》— 孔子" },
            { text: "The best thing to hold onto in life is each other.", source: "Audrey Hepburn" },
            { text: "独乐乐不如众乐乐。", source: "《孟子》" },
            { text: "You have not lived today until you have done something for someone who can never repay you.", source: "John Bunyan" },
            { text: "桃李不言，下自成蹊。", source: "《史记》" },
            { text: "The most beautiful things in life are not things. They're people and places and memories.", source: "Unknown" },
            { text: "投我以桃，报之以李。", source: "《诗经》" },
            { text: "A friend is one who knows you and loves you just the same.", source: "Elbert Hubbard" },
            { text: "有朋自远方来，不亦乐乎。", source: "《论语》— 孔子" },
            { text: "Happiness is only real when shared.", source: "《Into the Wild》— Christopher McCandless" }
        ]
    },

    // ========== 探险家 Explorers ==========
    "ISTP": {
        name: "ISTP - 鉴赏家",
        desc: "大胆而实际的实验者，精通各种工具",
        quotes: [
            { text: "纸上得来终觉浅，绝知此事要躬行。", source: "《冬夜读书示子聿》— 陆游" },
            { text: "The only source of knowledge is experience.", source: "Albert Einstein" },
            { text: "实践是检验真理的唯一标准。", source: "《实践论》— 毛泽东" },
            { text: "I hear and I forget. I see and I remember. I do and I understand.", source: "Confucius" },
            { text: "大道至简。", source: "《道德经》— 老子" },
            { text: "Simplicity is the ultimate sophistication.", source: "Leonardo da Vinci" },
            { text: "兵来将挡，水来土掩。", source: "民间谚语" },
            { text: "Adapt or perish, now as ever, is nature's inexorable imperative.", source: "H.G. Wells" },
            { text: "君子性非异也，善假于物也。", source: "《劝学》— 荀子" },
            { text: "Think like a man of action, act like a man of thought.", source: "Henri Bergson" },
            { text: "知行合一。", source: "王阳明" },
            { text: "Skill to do comes of doing.", source: "Ralph Waldo Emerson" }
        ]
    },
    "ISFP": {
        name: "ISFP - 探险家",
        desc: "灵活、有魅力的艺术家，时刻准备探索新事物",
        quotes: [
            { text: "一花一世界，一叶一菩提。", source: "《华严经》" },
            { text: "Every artist was first an amateur.", source: "Ralph Waldo Emerson" },
            { text: "春有百花秋有月，夏有凉风冬有雪。", source: "《无门关》— 无门慧开" },
            { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", source: "Maya Angelou" },
            { text: "此中有真意，欲辨已忘言。", source: "《饮酒》— 陶渊明" },
            { text: "The earth has music for those who listen.", source: "William Shakespeare" },
            { text: "行到水穷处，坐看云起时。", source: "《终南别业》— 王维" },
            { text: "Creativity takes courage.", source: "Henri Matisse" },
            { text: "明月松间照，清泉石上流。", source: "《山居秋暝》— 王维" },
            { text: "In every walk with nature, one receives far more than he seeks.", source: "John Muir" },
            { text: "人闲桂花落，夜静春山空。", source: "《鸟鸣涧》— 王维" },
            { text: "Art is not what you see, but what you make others see.", source: "Edgar Degas" }
        ]
    },
    "ESTP": {
        name: "ESTP - 企业家",
        desc: "聪明、精力充沛、善于感知的人",
        quotes: [
            { text: "天下武功，唯快不破。", source: "武侠小说常用语" },
            { text: "Fortune favors the bold.", source: "Latin Proverb" },
            { text: "机不可失，时不再来。", source: "《旧五代史》" },
            { text: "The biggest risk is not taking any risk.", source: "Mark Zuckerberg" },
            { text: "当断不断，反受其乱。", source: "《史记》" },
            { text: "Life is short. Don't be lazy.", source: "Sophia Amoruso" },
            { text: "好风凭借力，送我上青云。", source: "《红楼梦》— 曹雪芹" },
            { text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do.", source: "Mark Twain" },
            { text: "敢为天下先。", source: "《道德经》— 老子" },
            { text: "Speed is useful only if you are running in the right direction.", source: "Joel Barker" },
            { text: "长风破浪会有时，直挂云帆济沧海。", source: "《行路难》— 李白" },
            { text: "The way to develop self-confidence is to do the thing you fear.", source: "William Jennings Bryan" }
        ]
    },
    "ESFP": {
        name: "ESFP - 表演者",
        desc: "自发性、精力充沛且热情的表演者",
        quotes: [
            { text: "人生得意须尽欢，莫使金樽空对月。", source: "《将进酒》— 李白" },
            { text: "The purpose of life is to live it, to taste experience to the utmost.", source: "Eleanor Roosevelt" },
            { text: "今朝有酒今朝醉。", source: "《自遣》— 罗隐" },
            { text: "Dance like nobody's watching, love like you've never been hurt.", source: "Satchel Paige" },
            { text: "一万年太久，只争朝夕。", source: "《满江红》— 毛泽东" },
            { text: "Happiness is not a goal; it is a by-product.", source: "Eleanor Roosevelt" },
            { text: "且将新火试新茶，诗酒趁年华。", source: "《望江南》— 苏轼" },
            { text: "You only live once, but if you do it right, once is enough.", source: "Mae West" },
            { text: "莫愁前路无知己，天下谁人不识君。", source: "《别董大》— 高适" },
            { text: "Be so good they can't ignore you.", source: "Steve Martin" },
            { text: "花开堪折直须折，莫待无花空折枝。", source: "《金缕衣》— 杜秋娘" },
            { text: "The most wasted of days is one without laughter.", source: "E.E. Cummings" }
        ]
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mbtiData;
}
