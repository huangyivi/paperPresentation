<template>
  <div class="HomePage">
    <!-- 轮播图 -->
    <div class="round-chart">
      <transition-group name="runbo">
      <div class="banner doc-banner" v-show="show == 0" key="0">
        <img src="../../assets/images/index_banner1.png" />
      </div>
      <div class="banner doc-banner" v-show="show == 1" key="1">
        <img src="../../assets/images/index_banner2.png" />
      </div>
      <div class="banner doc-banner" v-show="show == 2" key="2">
        <img src="../../assets/images/index_banner3.png" />
      </div>
      <div class="banner doc-banner" v-show="show == 3" key="3">
        <img src="../../assets/images/index_banner4.png" />
      </div>

      </transition-group>

      <ul>
        <li
          :class="{ active: index === show }"
          v-for="index in [0, 1, 2, 3]"
          :key="index"
          @click="changePics(index)"
        ></li>
      </ul>
    </div>
    <!-- 精品期刊 -->
    <div class="book-show">
      <BookIntro :bookSum="books[0]" />
      <Book
        v-for="item in preciseBook.slice(0, 9)"
        :key="item.index"
        :book="item"
      />
    </div>
    <Ad :imgSrc="jounralsImg" />
    <!-- 国际期刊 -->
    <div class="book-show guoji-show">
      <BookIntro class="book-intro" :bookSum="books[1]" />
      <Book
        class="book"
        v-for="item in international.slice(2, 11)"
        :key="item.index"
        :book="item"
      />
    </div>
    <Ad :imgSrc="zhenggaoImg" />

    <!-- 国内期刊 -->
    <ul class="inter-list list">
      <li
        :class="{ active: index == interListIndex }"
        v-for="(item, index) in interList"
        :key="item.index"
        @click="changeInterPage(index)"
      >
        {{ item }}
      </li>
      <!-- <a href="/paperhub/client/JournalRecommend">查看全部</a> -->
      <router-link to="/JournalRecommend">查看全部</router-link>
    </ul>

    <div class="book-show guonei-show">
      <BookIntro class="book-intro" :bookSum="books[2]" />
      <Book
        class="book"
        v-for="item in domestic"
        :key="item.index"
        :book="item"
      />
      <div class="no-data" v-if="isNoData">
        <h1>暂无数据</h1>
      </div>
    </div>
    <Ad :imgSrc="gongchengImg" />

    <!-- 行业 -->
    <div class="industry">
      <ul class="commercial-list list">
        <li
          :class="{ active: index == industryIndex }"
          v-for="(item, index) in commercial"
          :key="item.index"
          @click="changeIndustryPage(index)"
        >
          {{ item }}
        </li>
        <!-- <a href="/paperhub/client/DocumentBase">查看全部</a> -->
        <router-link to="/DocumentBase">查看全部</router-link>
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
          <!-- <a href="/paperhub/client/PaperCheck"><img :src="item" alt /></a> -->
          <router-link to="/PaperCheck"><img :src="item" alt /></router-link>
        </li>
      </ul>
    </div>

    <!-- 最新文献 -->
    <ul class="list">
      <li
        :class="{ active: index == newListIndex }"
        v-for="(item, index) in commercial"
        :key="item.index"
        @click="changeNewDocu(index)"
      >
        {{ item }}
      </li>
      <!-- <a href="/paperhub/client/DocumentBase">查看全部</a> -->
      <router-link to="/DocumentBase">查看全部</router-link>
    </ul>
    <div class="new-article">
      <BookIntro class="book-intro" :bookSum="books[4]" />
      <div class="article-table">
        <Table :columns="columns1" :data="newDocu.slice(0, 6)"></Table>
        <!-- <a class="article-look" href="/paperhub/client/DocumentBase"
          >查看总文献库（{{ allNum }}篇）</a
        > -->
        <router-link class="article-look" to="/DocumentBase"
          >查看总文献库（{{ allNum }}篇）</router-link
        >
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
import Book from "../../components/HomePage/Book";
import BookIntro from "../../components/HomePage/BookIntro";
import Ad from "../../components/HomePage/Ad";
import Article from "../../components/HomePage/Article";
import WebIntro from "../../components/HomePage/WebIntro";

export default {
  components: {
    Ad,
    Book,
    BookIntro,
    Article,
    WebIntro,
  },
  data() {
    return {
      isNoData: false,
      // BaseImg: require("../../assets/images/index_banner1.png"),
      jounralsImg: require("../../assets/images/journalsDemand.jpg"),
      zhenggaoImg: require("../../assets/images/zhenggao.png"),
      gongchengImg: require("../../assets/images/engineering.jpg"),
      books: [
        {
          bookid: 1,
          bookNum: 47,
          bookImg: require("../../assets/images/clock.jpg"),
          bookTitle: "精品期刊",
          bookEn: "FINE JOURNALS",
        },
        {
          bookid: 2,
          bookNum: 33,
          bookImg: require("../../assets/images/building.jpg"),
          bookTitle: "国际征稿",
          bookEn: "INTERNATIONAL JOURNALS",
        },
        {
          bookid: 3,
          bookNum: 390,
          bookImg: require("../../assets/images/mountain.jpg"),
          bookTitle: "国内征稿",
          bookEn: "INTERNATIONAL JOURNALS",
        },
        {
          bookid: 4,
          bookImg: require("../../assets/images/sky.jpg"),
          bookTitle: "文章检测",
          bookEn: "ARTICLE DETECTION",
        },
        {
          bookid: 5,
          bookImg: require("../../assets/images/thegreatwall.jpg"),
          bookTitle: "最新文献",
          bookEn: "LATEST LITERATURE",
        },
        {
          bookid: 6,
          bookImg: require("../../assets/images/sea.jpg"),
          bookTitle: "网站研发",
          bookEn: `RESEARCH<br/>AND DEVELOPMENT`,
        },
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
        "企划",
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
        "建筑",
      ],
      jujiao: {
        title: "行业聚焦",
        num: 1010,
        intro: "为您整理行业最热门文献",
        articles: [],
      },
      qianyan: {
        title: "行业前沿",
        num: 292049,
        intro: "最新发表的优质文献",
        articles: [],
      },
      articleCheck: [
        require("../../assets/images/cnki.jpg"),
        require("../../assets/images/wanfang.jpg"),
        require("../../assets/images/wpeducation.jpg"),
        require("../../assets/images/paperyy.jpg"),
        require("../../assets/images/turnitin.png"),
        require("../../assets/images/Gocheck.png"),
        require("../../assets/images/Paper Pass.png"),
        require("../../assets/images/PaperOK.png"),
      ],
      columns1: [
        {
          title: "标题",
          key: "title",
          width: "400",
          render: (h, params) => {
            return h(
              "a",
              {
                attrs: {
                  href: "/paperhub/client/DocDetails/" + params.row.id,
                  target: "_blank",
                  title: params.row.title,
                },
              },
              params.row.title
            );
          },
        },
        {
          title: "作者",
          key: "author",
        },
        {
          title: "刊期",
          key: "time",
        },
        {
          title: "期刊",
          key: "magazine",
          // width: "300",
        },
      ],
      allNum: "",
      //网站研发
      webs: [
        {
          id: "01",
          intro: "智能主编",
          text: `总投入500万，历时2年，服务于期刊社的自动编排印系统，已有多家期刊社应用此系统，是出版行业向人工智能技术的应用系统，口碑反馈良好。`,
        },
        {
          id: "02",
          intro: "在线写作",
          text: `目前仅为1.0版本，未来将在2.0及3.0版本增加参考拟题，参考摘要，参考大纲，多人异地同时写作、
                            科大讯飞听你说等智能辅助工具，帮助您随时随地进行创作`,
        },
        {
          id: "03",
          intro: "查重系统",
          text: `目前该查重系统技术虽已成熟，系统已开发完成，测试结果良好，但因版权文献库内容正在丰富中，期待不久的未来能为广大客户服务`,
        },
        {
          id: "04",
          intro: "期刊分析",
          text: `结合全网1万期刊5000万往期文献大数据研发的智能小工具，可清晰了解国内所有期刊的发文量。`,
        },
        {
          id: "05",
          intro: "推荐发表",
          text: `对您的文章进行诊断，从写作方向、篇幅、查重结果、格式、文字表达错误等所有方面进行诊断，根据全网期刊大数据进行准确匹配适合发表的期刊。`,
        },
        {
          id: "06",
          intro: "术语查询",
          text: `基于全国科学技术名词审定委员会公布的各行业术语标准用语及英文对照开发的查询小工具。`,
        },
      ],
      picIndex: 0, //对应第几张
      show: 0,
      showPages: [true, false, false, false], //展示第几张

      //新数据处理
      preciseBook: [], //精品期刊
      international: [], //国际征稿
      domestic: [], //国内征稿
      front: [], //行业前沿
      focusing: [], //行业聚焦
      newDocu: [], //最新文献
      //轮播时间
      recordTime: "",
      interListIndex: -1, //国内期刊导航栏索引
      industryIndex: -1, //行业导航栏索引
      newListIndex: -1, //最新文献导航栏索引
    };
  },

  methods: {
    //自动轮播
    roundChange() {
      this.recordTime = setInterval(() => {
        this.show++;
        if (this.show > 3) this.show = 0;
      }, 5000);
    },
    //点击选项显示图片
    changePics(index) {
      console.log(index);
      //清除
      clearInterval(this.recordTime);
      //切换show展示哪部分banner，实现过渡效果
      this.show = index;
      //自动轮播
      this.roundChange();
    },

    //获取期刊
    getJournal() {
      const docsmsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      var formdata = new FormData();
      formdata.append("pageNum", 1);
      formdata.append("pageSize", 30);
      this.$http
        .post(this.domain + "journal/searchJournal", formdata)
        .then((res) => {
          setTimeout(docsmsg, 0);
          console.log(res.data.data);
          let data = res.data.data;
          this.books[0].bookNum = data.total;
          this.books[1].bookNum = data.total;
          this.books[2].bookNum = data.total;
          data.list.forEach((item, index) => {
            this.preciseBook.push({
              id: item.id,
              bookName: item.name, //书名
              bookRank: item.journalLevel, //刊级
              bookClass: item.releaseCycle, //书类别
              bookResoure: item.receiveWebsite, //书收录
              bookurl: item.journalPhoto, //图片地址
            });
            this.international.push({
              id: item.id,
              // bookEn: this.randomString(parseInt((Math.random() + 1) * 10)),
              bookName: item.name, //书名
              bookRank: item.journalLevel, //刊级
              bookClass: item.releaseCycle, //书类别
              bookurl: item.journalPhoto, //图片地址
            });
            this.domestic.push({
              id: item.id,
              bookName: item.name, //书名
              bookRank: item.journalLevel, //刊级
              bookClass: item.releaseCycle, //书类别
              bookurl: item.journalPhoto, //图片地址
            });
          });
          this.domestic = this.domestic.slice(-9);
        })
        .catch((err) => {
          console.log(err, "期刊");
          setTimeout(docsmsg, 0);
          this.$Message.error("服务器连接失败");
        });
    },
    //获取文献
    getDocument() {
      const docsmsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.$http
        .get(this.domain + "doc", {
          params: {
            pageNum: 1,
            pageSize: 18,
          },
        })
        .then((res) => {
          setTimeout(docsmsg, 0);
          let data = res.data.data;
          this.allNum = data.total;
          this.qianyan.num = data.total;
          this.jujiao.num = data.total;
          data.list.forEach((item, index) => {
            //行业前沿
            this.qianyan.articles.push({
              id: item.id,
              name: item.title, //标题
              time: item.publishTime, //时间
            });
            //最新文献
            this.newDocu.push({
              id: item.id, //id
              title: item.title, //标题
              author: item.author, //作者
              time: item.publishTime, //刊期
              magazine: item.fromJournal, //期刊
            });
          });
          this.jujiao.articles = this.qianyan.articles.slice(-6); //行业聚焦
          this.qianyan.articles = this.qianyan.articles.slice(0, 6);
        })
        .catch((err) => {
          console.log(err, "文献");
          setTimeout(docsmsg, 0);
          this.$Message.error("服务器连接失败");
        });
    },
    //切换国内征稿
    changeInterPage(index) {
      this.interListIndex = index;
      this.domestic.length = 0; //清空一波数组
      var data = new FormData();
      data.append("pageNum", 1);
      data.append("pageSize", 9);
      data.append("name", this.interList[index]); //名称
      const docsmsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.$http
        .post(this.domain + "journal/searchRecommendJournal", data)
        .then((res) => {
          let data = res.data.data;
          setTimeout(docsmsg, 0);
          if (data.list.length) {
            data.list.forEach((item, index) => {
              this.domestic.push({
                bookName: item.name, //书名
                bookRank: item.journalLevel, //刊级
                bookClass: item.releaseCycle, //书类别
                bookurl: item.journalPhoto, //图片地址
              });
            });
            this.isNoData = false;
          } else {
            this.isNoData = true;
          }
        })
        .catch((err) => {
          console.log(err);
          setTimeout(docsmsg, 0);
          this.$Message.error("服务器连接失败");
        });
    },
    //切换行业
    changeIndustryPage(index) {
      const docsmsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.industryIndex = index;
      this.qianyan.articles.length = 0;
      this.jujiao.articles.length = 0;
      this.$http
        .get(this.domain + "doc", {
          params: {
            head: this.commercial[index],
            pageNum: 1,
            pageSize: 12,
          },
        })
        .then((res) => {
          setTimeout(docsmsg, 0);
          let data = res.data.data;
          data.list.forEach((item, index) => {
            //行业前沿
            this.qianyan.articles.push({
              id: item.id,
              name: item.title, //标题
              time: item.publishTime, //时间
            });
          });
          this.jujiao.articles = this.qianyan.articles.slice(-6); //行业聚焦
          this.qianyan.articles = this.qianyan.articles.slice(0, 6);
        })
        .catch((err) => {
          console.log(err);
          setTimeout(docsmsg, 0);
          this.$Message.error("服务器连接失败");
        });
    },
    //切换最新文献
    changeNewDocu(index) {
      this.newListIndex = index;
      this.newDocu.length = 0;
      const docsmsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.$http
        .get(this.domain + "doc", {
          params: {
            head: this.commercial[index],
            pageNum: 1,
            pageSize: 6,
          },
        })
        .then((res) => {
          let data = res.data.data;
          setTimeout(docsmsg, 0);
          data.list.forEach((item, index) => {
            //最新文献
            this.newDocu.push({
              id: item.id, //id
              title: item.title, //标题
              author: item.author, //作者
              time: item.publishTime, //刊期
              magazine: item.fromJournal, //期刊
            });
          });
        })
        .catch((err) => {
          console.log(err);
          setTimeout(docsmsg, 0);
          this.$Message.error("服务器连接失败");
        });
    },
  },
  mounted() {
    this.roundChange();
    this.getJournal();
    this.getDocument();
  },
};
</script>

<style lang="scss" scoped>
@import "./HomePage.scss";
</style>