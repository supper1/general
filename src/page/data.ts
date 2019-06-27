export interface videoData{
    id:number;
    order:string;
    title:string;
    dec:string;
    userId:number;
    url:string;
    imgUrl:string;
}
export interface userData{
    id:number;
    name:string;
    position:string;
    langPosition:string;
    dec:string;
    imgUrl:string
}
export const vedioArr:Array<videoData> = [
    {
        id:1,
        order:"第一期",
        title:"齐路通 自强不息",
        dec:"诉说童年艰苦过往。",
        userId:2,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v1.png"
    },
    {
        id:2,
        order:"第二期",
        title:"刘阁忠 乐于助人",
        dec:"传承雷锋精神助人为乐。",
        userId:6,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v2.png"
    },
    {
        id:3,
        order:"第三期",
        title:"杨位环 自信乐观",
        dec:"沉浸书海书写自信人生。",
        userId:5,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v3.png"
    },
    {
        id:4,
        order:"第四期",
        title:"刘文清 家国情怀",
        dec:"豪情壮志诉家国情怀。",
        userId:1,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v4.png"
    },
    {
        id:5,
        order:"第五期",
        title:"鲍 奇 临危不惧",
        dec:"身处战场临危不乱。",
        userId:4,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v5.png"
    },
    {
        id:6,
        order:"第六期",
        title:"邓楚润 克己复礼",
        dec:"言传身教礼仪规范。",
        userId:3,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v6.png"
    },
    {
        id:7,
        order:"第七期",
        title:"程家荣 孝悌之德",
        dec:"忆童年往事讲家教家风。",
        userId:7,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v7.png"
    },
    {
        id:8,
        order:"第八期",
        title:"刘文清 勤奋乐学",
        dec:"勤奋乐学实现梦想。",
        userId:1,
        url:"http://www.raziel.site/general/v222.mp4",
        imgUrl:"http://www.raziel.site/general/v8.png"
    },
]
export const userArr:Array<userData> = [
    {
        id:1,
        name:"刘文清", 
        position:"少将",
        langPosition:"中国人民解放军海军航空兵原副司令",
        dec:`刘文清，男，河北临漳人，1940年出生，曾任东海舰队航空兵司令、北京海军
        航空兵参谋长、中国海军航空兵副司令，少将军衔。1958年入伍，1960年3
        月加入中国共产党，1963年5月以优异的成绩毕业，毕业后分到海军航空兵部
        队第六师成为一名战机飞行员，曾任中队长、大队长、团长、六师第六任师长，
        飞行技术为特级，先后荣立三等功4次、二等功及多种先进称号。
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
    {
        id:2,
        name:"齐路通",
        position:"少将",
        langPosition:"中国人民解放军原南京军区空军副参谋长",
        dec:`齐路通，河北蠡县人，生于1946年，1961年入伍，1992年晋升少将军衔，现
        任上海东北经济文化发展促进会会长是航天英雄杨利伟、刘洋的老师。齐路通
        将军1978年以前任航校团参谋长，1983年任空军政治学院院务部长(正师职)、
        1990年任副院长(副军职)、1992年整编后任长春飞行学院院长(高职低配)、
        1999年任南京军区空军副参谋长，2004年退休后致力于东北经济文化促进工
        作，现任上海东北经济文化发展促进会常务副会长兼秘书长        
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
    {
        id:3,
        name:"邓楚润",
        position:"少将",
        langPosition:"中国人民解放军原沈阳军区空军政治部主任",
        dec:`邓楚润1951年出生，湖北洪湖人，1969年11月入伍，1970年8月入党。历
        任战士、班长、技术员、干事、副处长、办公室主任、师政委、军政治部主任、
        沈阳军区空军政治部主任等职。中国书法家协会会员              
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
    {
        id:4,
        name:"鲍 奇",
        position:"少将",
        langPosition:"中国人民解放军原海军上海基地副参谋长",
        dec:`原海军上海基地副参谋长。祖籍江苏无锡，1924年5月生于上海。1941年9
        月入伍，曾参加抗日战争、解放战争、抗美援朝战争和解放东南沿海，屡立战功。
        2015年9月3日，作为抗战老兵参加“9•3”大阅兵                      
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
    {
        id:5,
        name:"杨位环",
        position:"少将",
        langPosition:"中国人民解放军原兰州军区空军政治部副主任",
        dec:`杨位环，男，原兰州军区空军政治部副主任。1949年出生于山东省枣庄市滕州
        市姜屯镇大杨庄村。1965年参加中国人民解放军。历任空军战士、班长、排长、
        干事、营政治教导员、师政治部组织科科长，军政治部组织处处长，军区空军政
        治部秘书处副处长、组织处处长，空军航空兵师副政治委员、政治委员，空军上
        海基地政治部主任，1999年12月任兰州军区空军政治部副主任。退休后定居
        上海。2001年7月晋升为空军少将军衔                              
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
    {
        id:6,
        name:"刘阁忠",
        position:"少将",
        langPosition:"中国人民解放军原海军福建基地政治委员",
        dec:`刘阁忠（1949--）河北省唐山市丰南区稻地镇刘唐保中街人。1968年2月入
        伍，1969年7月加入中国共产党，大专文化。1949历任班长、区队长、指导
        员、干事、秘书长、干部科长、师政治部副主任、旅政委，2001年5月任海军
        福建基地政治部主任，海军福建保障基地政治委员。期间，先后进中央党校、国
        孩大学学习，参加海军政治学院和上海华东师范大学走读研究生专业的学习。
        2007年9月退役。多次参加组织了舰艇训练和战备演习。2003年8月1日被
        中央军委授予海军少将军衔。                                    
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
    {
        id:7,
        name:"程家荣",
        position:"少将",
        langPosition:"中国人民解放军原东海舰队副政委兼东海舰队海军航空兵政委",
        dec:`程家荣，男，1946年出生，南河镇人，中共党员。1965年7月在解放军测绘
        学院学习海道测量专业。1968年毕业后分配到海军南海舰队，历任扫雷艇见习
        航海长、扫雷艇大队政治处干事、川岛水警区政治部秘书。1974年调海军政治
        部，任保卫部1处副处长、处长。1985年，任海军航空兵政治部保卫处副师职
        处长。1991年9月，任总政治部军事法院第二审判庭庭长、解放军总直属队军
        事法院院长等职。1996年5月，任东海舰队航空兵副政委，1998年7月被授
        予少将军衔，2003年3月，任东海舰队海军航空兵政委，2005年，任东海舰
        队副政委兼东海舰队海军航空兵政委。                                            
        `,
        imgUrl:"http://www.raziel.site/general/user4.jpg"
    },
]