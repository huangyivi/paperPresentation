<template>
  <div class="HomePage">
    <!-- 轮播图 -->
    <div class="round-chart">
      <transition name="runbo">
        <Banner :class="{banner:!show,former:show}" v-if="show" :imgSrc="BaseImg" key="1"></Banner>
        <Banner :class="{banner:show,former:!show}" v-else-if="!show" :imgSrc="BaseImg" key="2"></Banner>
      </transition>
      <ul>
        <li :class="{active: index === picIndex}" v-for="(item,index) in imgs" :key="index" @click="changePics(index)">
        </li>
      </ul>
    </div>
    <!-- 精品期刊 -->
    <div class="book-show">
      <BookIntro :bookSum="books[0]" />
      <Book v-for="item in preciseBook.slice(0,9)" :key="item.index" :book="item" />
    </div>
    <Ad :imgSrc="jounralsImg" />
    <!-- 国际期刊 -->
    <div class="book-show guoji-show">
      <BookIntro class="book-intro" :bookSum="books[1]" />
      <Book class="book" v-for="item in international.slice(2,11)" :key="item.index" :book="item" />
    </div>
    <Ad :imgSrc="zhenggaoImg" />

    <!-- 国内期刊 -->
    <ul class="inter-list list">
      <li v-for="item in interList" :key="item.index">{{item}}</li>
      <a href="/JournalRecommend">查看全部</a>
    </ul>
    <!-- <BookShow :bookSum="books[2]"/> -->
    <div class="book-show guonei-show">
      <BookIntro class="book-intro" :bookSum="books[2]" />
      <Book class="book" v-for="item in domestic.slice(-9)" :key="item.index" :book="item" />
    </div>
    <Ad :imgSrc="gongchengImg" />

    <!-- 行业 -->
    <div class="industry">
      <ul class="commercial-list list">
        <li v-for="item in commercial" :key="item.index">{{item}}</li>
        <a href="/DocumentBase">查看全部</a>
      </ul>
      <div class="article-show">
        <Article :article="jujiao" />
        <Article :article="qianyan" />
      </div>
    </div>

    <!-- 文章检测 -->
    <div class="article-check book-show">
      <BookIntro class="book-intro" :bookSum="books[3]" />
      <ul>
        <li v-for="item in articleCheck" :key="item.index">
          <a href="/PaperCheck"><img :src="item" alt /></a>
        </li>
      </ul>
    </div>

    <!-- 最新文献 -->
    <ul class="list">
      <li v-for="item in commercial" :key="item.index">{{item}}</li>
      <a href="/DocumentBase">查看全部</a>
    </ul>
    <div class="new-article">
      <BookIntro class="book-intro" :bookSum="books[4]" />
      <div class="article-table">
        <Table :columns="columns1" :data="data1"></Table>
        <a class="article-look" href="/DocumentBase">查看总文献库（{{allNum}}篇）</a>
      </div>
    </div>

    <!-- 网站研发 -->
    <div class="web-container">
      <div class="web-rd">
        <BookIntro class="book-intro" :bookSum="books[5]" />
        <div class="web-detail">
          <WebIntro v-for="item in webs" :key="item.index" :web="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";
import Book from "../../components/HomePage/Book";
import BookIntro from "../../components/HomePage/BookIntro";
import BookShow from "../../components/HomePage/BookShow";
import Ad from "../../components/HomePage/Ad";
import Article from "../../components/HomePage/Article";
import WebIntro from "../../components/HomePage/WebIntro";

export default {
  components: {
    Banner,
    BookShow,
    Ad,
    Book,
    BookIntro,
    Article,
    WebIntro
  },
  data() {
    return {
      BaseImg: require("../../assets/images/index_banner1.png"),
      jounralsImg: "http://zhimaikeji.net/imgs/wf/ad1.png",
      zhenggaoImg: require("../../assets/images/zhenggao.png"),
      gongchengImg: "http://zhimaikeji.net/imgs/wf/ad3.jpg",
      books: [
        {
          bookid: 1,
          bookNum: 47,
          bookImg: "http://zhimaikeji.net/imgs/wf/paper_sub.png",
          bookTitle: "精品期刊",
          bookEn: "FINE JOURNALS"
        },
        {
          bookid: 2,
          bookNum: 33,
          bookImg: "http://zhimaikeji.net/imgs/wf/intel_qk.png",
          bookTitle: "国际征稿",
          bookEn: "INTERNATIONAL JOURNALS"
        },
        {
          bookid: 3,
          bookNum: 390,
          bookImg: "http://zhimaikeji.net/imgs/wf/china_sub.png",
          bookTitle: "国内征稿",
          bookEn: "INTERNATIONAL JOURNALS"
        },
        {
          bookid: 4,
          bookImg: "http://zhimaikeji.net/imgs/wf/test_bg.png",
          bookTitle: "文章检测",
          bookEn: "ARTICLE DETECTION"
        },
        {
          bookid: 5,
          bookImg: "http://zhimaikeji.net/imgs/wf/new_lw.png",
          bookTitle: "最新文献",
          bookEn: "LATEST LITERATURE"
        },
        {
          bookid: 6,
          bookImg: "http://zhimaikeji.net/imgs/wf/zhimai_dev.png",
          bookTitle: "网站研发",
          bookEn: `RESEARCH<br/>AND DEVELOPMENT`
        }
      ],
      interList: [
        "经济",
        "教育",
        "工程",
        "医学",
        "管理",
        "农林",
        "环境",
        "文化",
        "文学",
        "地勘",
        "冶金",
        "化工",
        "机械",
        "建筑",
        "科技",
        "计算机",
        "通信",
        "电力",
        "社会",
        "企划"
      ],
      commercial: [
        "OA期刊",
        "基础",
        "社科",
        "自然",
        "医药",
        "生物",
        "环境",
        "核能",
        "化学",
        "理学",
        "文化",
        "艺术",
        "文学",
        "经济",
        "哲学",
        "政法",
        "农业",
        "工业",
        "机械",
        "建筑"
      ],
      books2: [
        {
          bookName: "内燃机与配件",
          bookRank: "国家级",
          bookClass: "半月刊",
          // bookResoure: '知网、万方、维普、龙源',
          bookurl: "http://54.222.136.26:8080/uimgs/prl/nrpj.jpg",
          bookEn: "dakfjakfjka"
        },
        {
          bookName: "nimm",
          bookRank: "国家级",
          bookClass: "半月刊",
          bookResoure: "知网、万方、维普、龙源",
          bookurl: "http://54.222.136.26:8080/uimgs/prl/nrpj.jpg"
        },
        {
          bookName: "nimm",
          bookRank: "国家级",
          bookClass: "半月刊",
          // bookResoure: '知网、万方、维普、龙源',
          bookurl: "http://54.222.136.26:8080/uimgs/prl/nrpj.jpg"
        },
        {
          bookName: "nimm",
          bookRank: "国家级",
          bookClass: "半月刊",
          bookResoure: "知网、万方、维普、龙源",
          bookurl: "http://54.222.136.26:8080/uimgs/prl/nrpj.jpg"
        }
      ],
      jujiao: {
        title: "行业聚焦",
        num: 1010,
        intro: "为您整理行业最热门文献",
        articles: [
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
          }
        ]
      },
      qianyan: {
        title: "行业前沿",
        num: 292049,
        intro: "最新发表的优质文献",
        articles: [
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
          }
        ]
      },
      articleCheck: [
        "http://zhimaikeji.net/imgs/test1.png",
        "http://zhimaikeji.net/imgs/test2.png",
        "http://zhimaikeji.net/imgs/test3.png",
        "http://zhimaikeji.net/imgs/test4.png",
        "http://zhimaikeji.net/imgs/test5.png",
        "http://zhimaikeji.net/imgs/test6.png",
        "http://zhimaikeji.net/imgs/test7.png",
        "http://zhimaikeji.net/imgs/test8.png"
      ],
      columns1: [
        {
          title: "标题",
          key: "title",
          width: "400"
        },
        {
          title: "作者",
          key: "author"
        },
        {
          title: "刊期",
          key: "time"
        },
        {
          title: "期刊",
          key: "magazine"
          // width: "300",
        }
      ],
      data1: [
        {
          title: "高光谱图像修复算法的自适应稀疏编码实现",
          author: "许肖阳",
          time: "2020年1期",
          magazine: "西藏研究"
        },
        {
          title: "高光谱图像修复算法的自适应稀疏编码实现",
          author: "许肖阳",
          time: "2020年1期",
          magazine: "西藏研究"
        },
        {
          title: "高光谱图像修复算法的自适应稀疏编码实现",
          author: "许肖阳",
          time: "2020年1期",
          magazine: "西藏研究"
        },
        {
          title: "高光谱图像修复算法的自适应稀疏编码实现",
          author: "许肖阳",
          time: "2020年1期",
          magazine: "西藏研究"
        },
        {
          title: "高光谱图像修复算法的自适应稀疏编码实现",
          author: "许肖阳",
          time: "2020年1期",
          magazine: "西藏研究"
        },
        {
          title: "高光谱图像修复算法的自适应稀疏编码实现",
          author: "许肖阳",
          time: "2020年1期",
          magazine: "西藏研究"
        }
      ],
      allNum: 23424,
      //网站研发
      webs: [
        {
          id: "01",
          intro: "智能主编",
          text: `总投入500万，历时2年，服务于期刊社的自动编排印系统，已有多家期刊社应用此系统，是出版行业向人工智能技术的应用系统，口碑反馈良好。`
        },
        {
          id: "02",
          intro: "在线写作",
          text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`
        },
        {
          id: "03",
          intro: "查重系统",
          text: `目前该查重系统技术虽已成熟，系统已开发完成，测试结果良好，但因版权文献库内容正在丰富中，期待不久的未来能为广大客户服务`
        },
        {
          id: "04",
          intro: "期刊分析",
          text: `结合全网1万期刊5000万往期文献大数据研发的智能小工具，可清晰了解国内所有期刊的发文量。`
        },
        {
          id: "05",
          intro: "推荐发表",
          text: `对您的文章进行诊断，从写作方向、篇幅、查重结果、格式、文字表达错误等所有方面进行诊断，根据全网期刊大数据进行准确匹配适合发表的期刊。`
        },
        {
          id: "06",
          intro: "术语查询",
          text: `基于全国科学技术名词审定委员会公布的各行业术语标准用语及英文对照开发的查询小工具。`
        }
      ],
      //轮播图图片
      imgs:[
        require("../../assets/images/index_banner1.png"),
        require("../../assets/images/index_banner2.png"),
        require("../../assets/images/index_banner3.png"),
        require("../../assets/images/index_banner4.png"),
      ],
      picIndex: 0, //对应第几张
      show: true, //是否展示

      //新数据处理
      preciseBook: [], //精品期刊
      international: [], //国际征稿
      domestic: [],//国内征稿
      //轮播时间
      recordTime: '',
    };
  },
  
  methods:{
    //自动轮播
    roundChange(){
      this.recordTime = setInterval(()=>{
        this.picIndex++;
        if(this.picIndex >= this.imgs.length)
          this.picIndex = 0;
        this.changePics(this.picIndex);   
      },5000);
    },
    //点击选项显示图片
    changePics(index){
      //清除
      clearInterval(this.recordTime);
      //切换show展示哪部分banner，实现过渡效果
      this.show = !this.show;
      this.picIndex = index;
      this.BaseImg = this.imgs[parseInt(index)];
      //自动轮播
      this.roundChange();
    },
    //获取期刊
    getJournal(){
      var formdata = new FormData();
      formdata.append('pageNum',1);
      formdata.append('pageSize',30);
      this.$http
        .post('http://39.98.41.126:30005/journal/searchJournal',formdata)
        .then(res=>{
          console.log(res.data.data);
          let data = res.data.data;
          this.books[0].bookNum = data.total;
          data.list.forEach((item,index)=>{
            this.preciseBook.push({
              bookName: item.name,  //书名
              bookRank: item.journalLevel, //刊级
              bookClass: item.releaseCycle,  //书类别
              bookResoure: item.receiveWebsite, //书收录
              bookurl: item.journalPhoto,  //图片地址
            });
            this.international.push({
              bookEn: this.randomString(parseInt((Math.random() + 1)*10)),
              bookName:item.name, //书名
              bookRank: item.journalLevel, //刊级
              bookClass: item.releaseCycle, //书类别
              bookurl: item.journalPhoto,  //图片地址
            });
            this.domestic.push({
              bookName: item.name,  //书名
              bookRank: item.journalLevel, //刊级
              bookClass: item.releaseCycle,  //书类别
              bookurl: item.journalPhoto,  //图片地址
            })
          })
        });
    },
    //随机生成字符串
    randomString(n) {  
      let str = 'abcdefghijklmn pqrstuvwxz 9876543210';
      let tmp = '',
          i = 0,
          l = str.length;
      for (i = 0; i < n; i++) {
        tmp += str.charAt(Math.floor(Math.random() * l));
      }
      return tmp;
    },
    //获取文献
    getDocument(){
      this.$http.get('http://39.98.41.126:30007/doc',{
        params: {
          pageNum: 1,
          pageSize: 18,
        }
      })
      .then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.roundChange();
    this.getJournal();
    this.getDocument();
  }
};
</script>

<style lang="scss" scoped>
@import "./HomePage.scss";
</style>