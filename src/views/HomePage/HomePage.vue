<template>
    <div id="HomePage">
        <Banner :imgSrc="BaseImg"></Banner>
        <div class="book-show">
            <BookIntro :bookSum="books[0]"/>
            <Book v-for="item in books2" :key="item.index" :book="item"/>
        </div>
        <Ad :imgSrc="jounralsImg"/>

        <div class="book-show guoji-show">
            <BookIntro class="book-intro" :bookSum="books[1]"/>
            <Book class="book" v-for="item in books2" :key="item.index" :book="item"/>
        </div>
        <Ad :imgSrc="zhenggaoImg"/>

        <ul class="inter-list list">
            <li v-for="item in interList" :key="item.index">{{item}}</li>
            <a href="" @click.prevent>查看全部</a>
        </ul>
        <!-- <BookShow :bookSum="books[2]"/> -->
        <div class="book-show guonei-show">
            <BookIntro class="book-intro" :bookSum="books[2]"/>
            <Book class="book" v-for="item in books2" :key="item.index" :book="item"/>
        </div>
        <Ad :imgSrc="gongchengImg"/>

        <div class="hangye">
            <ul class="commercial-list list">
                <li v-for="item in commercial" :key="item.index">{{item}}</li>
                <a href="" @click.prevent>查看全部</a>
            </ul>
            <div class="article-show">
                <Article :article="jujiao"/>
                <Article :article="qianyan"/>
            </div>
        </div>
        

        <div class="article-check book-show">
            <BookIntro class="book-intro" :bookSum="books[3]"/>
            <ul>
                <li v-for="item in articleCheck" :key="item.index">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>

        <ul class="list">
            <li v-for="item in commercial" :key="item.index">{{item}}</li>
            <a href="" @click.prevent>查看全部</a>
        </ul>
        <div class="new-article">
            <BookIntro class="book-intro" :bookSum="books[4]"/>
            <div class="article-table">
                <Table :columns="columns1" :data="data1"></Table>
                <button>查看总文献库（{{allNum}}篇）</button>
            </div>
        </div>

        <div class="web-container">
            <div class="web-rd">
                <BookIntro class="book-intro" :bookSum="books[5]"/>
                <div class="web-detail">
                    <WebIntro v-for="item in webs" :key="item.index" :web="item"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import Banner from '../../components/Banner/Banner'
    import Book from '../../components/HomePage/Book'
    import BookIntro from '../../components/HomePage/BookIntro'
    import BookShow from '../../components/HomePage/BookShow'
    import Ad from '../../components/HomePage/Ad'
    import Article from '../../components/HomePage/Article'
    import WebIntro from '../../components/HomePage/WebIntro'


    export default {

        components: {
            Banner,
            BookShow,
            Ad,
            Book,
            BookIntro,
            Article,
            WebIntro,
        },
        data(){
            return {
                BaseImg: 'http://zhimaikeji.net/imgs/wf/index_banner1.png',
                jounralsImg: "http://zhimaikeji.net/imgs/wf/ad1.png",
                zhenggaoImg: require("../../assets/images/zhenggao.png"),
                gongchengImg:"http://zhimaikeji.net/imgs/wf/ad3.jpg",
                books:[
                    {
                        bookid: 1,
                        bookNum: 47,
                        bookImg: 'http://zhimaikeji.net/imgs/wf/paper_sub.png',
                        bookTitle:'精品期刊',
                        bookEn: 'FINE JOURNALS',
                    },
                    {
                        bookid: 2,
                        bookNum: 33,
                        bookImg: 'http://zhimaikeji.net/imgs/wf/intel_qk.png',
                        bookTitle:'国际征稿',
                        bookEn: 'INTERNATIONAL JOURNALS',
                    },
                    {
                        bookid: 3,
                        bookNum: 390,
                        bookImg: 'http://zhimaikeji.net/imgs/wf/china_sub.png',
                        bookTitle:'国内征稿',
                        bookEn: 'INTERNATIONAL JOURNALS',
                    },
                    {
                        bookid: 4,
                        bookImg: 'http://zhimaikeji.net/imgs/wf/test_bg.png',
                        bookTitle:'文章检测',
                        bookEn: 'ARTICLE DETECTION',
                    },
                    {
                        bookid: 5,
                        bookImg: 'http://zhimaikeji.net/imgs/wf/new_lw.png',
                        bookTitle:'最新文献',
                        bookEn: 'LATEST LITERATURE',
                    },
                    {
                        bookid: 6,
                        bookImg: 'http://zhimaikeji.net/imgs/wf/zhimai_dev.png',
                        bookTitle:'网站研发',
                        bookEn: `RESEARCH<br/>AND DEVELOPMENT`,
                    }
                ],
                interList:[
                    "经济","教育","工程","医学",
                    "管理","农林","环境","文化",
                    "文学","地勘","冶金","化工",
                    "机械","建筑","科技","计算机",
                    "通信","电力","社会","企划"
                ],
                commercial:[
                    "OA期刊","基础","社科","自然","医药",
                    "生物","环境","核能","化学","理学",
                    "文化","艺术","文学","经济","哲学",
                    "政法","农业","工业","机械","建筑"
                ],
                books2:[
                    {
                        bookName: '内燃机与配件',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        // bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                        bookEn:'dakfjakfjka'
                    },
                    {
                        bookName: 'nimm',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                    {
                        bookName: 'nimm',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        // bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                    {
                        bookName: 'nimm',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                ],
                jujiao: {
                    title: "行业聚焦",
                    num: 1010,
                    intro: "为您整理行业最热门文献",
                    articles:[
                        {
                            name: "·互联网金融模式研究111111111111111111111111111111111",
                            time: "2012年12期"
                        },
                        {
                            name: "·互联网金融模式研究",
                            time: "2012年12期"
                        },
                        {
                            name: "·互联网金融模式研究",
                            time: "2012年12期"
                        },
                    ],
                },
                qianyan: {
                    title: "行业前沿",
                    num: 292049,
                    intro: "最新发表的优质文献",
                    articles:[
                        {
                            name: "·互联网金融模式研究111111111111111111111111111111111",
                            time: "2012年12期"
                        },
                        {
                            name: "·互联网金融模式研究",
                            time: "2012年12期"
                        },
                        {
                            name: "·互联网金融模式研究",
                            time: "2012年12期"
                        },
                    ]
                },
                articleCheck:[
                    "http://zhimaikeji.net/imgs/test1.png",
                    "http://zhimaikeji.net/imgs/test2.png",
                    "http://zhimaikeji.net/imgs/test3.png",
                    "http://zhimaikeji.net/imgs/test4.png",
                    "http://zhimaikeji.net/imgs/test5.png",
                    "http://zhimaikeji.net/imgs/test6.png",
                    "http://zhimaikeji.net/imgs/test7.png",
                    "http://zhimaikeji.net/imgs/test8.png",
                ],
                columns1: [
                    {
                        title: '标题',
                        key: 'title',
                        width: "400"
                    },
                    {
                        title: '作者',
                        key: 'author'
                    },
                    {
                        title: '刊期',
                        key: 'time'
                    },
                    {
                        title: '期刊',
                        key: 'magazine',
                        // width: "300",
                    }
                ],
                data1:[
                    {
                        title:"高光谱图像修复算法的自适应稀疏编码实现",
                        author: "许肖阳",
                        time: "2020年1期",
                        magazine: "西藏研究",
                    },
                     {
                        title:"高光谱图像修复算法的自适应稀疏编码实现",
                        author: "许肖阳",
                        time: "2020年1期",
                        magazine: "西藏研究",
                    },
                     {
                        title:"高光谱图像修复算法的自适应稀疏编码实现",
                        author: "许肖阳",
                        time: "2020年1期",
                        magazine: "西藏研究",
                    },
                     {
                        title:"高光谱图像修复算法的自适应稀疏编码实现",
                        author: "许肖阳",
                        time: "2020年1期",
                        magazine: "西藏研究",
                    },
                     {
                        title:"高光谱图像修复算法的自适应稀疏编码实现",
                        author: "许肖阳",
                        time: "2020年1期",
                        magazine: "西藏研究",
                    },
                     {
                        title:"高光谱图像修复算法的自适应稀疏编码实现",
                        author: "许肖阳",
                        time: "2020年1期",
                        magazine: "西藏研究",
                    },
                ],
                allNum: 23424,
                webs:[
                    {
                        id: '01',
                        intro: "在线写作",
                        text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
                    },
                    {
                        id: '02',
                        intro: "在线写作",
                        text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
                    },
                    {
                        id: '03',
                        intro: "在线写作",
                        text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
                    },
                    {
                        id: '04',
                        intro: "在线写作",
                        text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
                    },
                    {
                        id: '05',
                        intro: "在线写作",
                        text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
                    },
                    {
                        id: '06',
                        intro: "在线写作",
                        text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
                    },
                ],
            }
        },

    }
    
</script>

<style lang="scss" scoped>

   @import './HomePage.scss'
</style>