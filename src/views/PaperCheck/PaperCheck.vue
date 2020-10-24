<template>
  <div class="min-w">
    <!-- 测试分支 -->
    <div class="paper-title">
      <img src="http://zhimaikeji.net/imgs/wf/test_banner.png" alt />
    </div>
    <div class="paper-body">
      <CheckDuplicate
        v-for="(item, index) in paperCheck"
        :key="index"
        :img="item.img"
        :title="item.title"
        :detail="item.detail"
        :href="item.href"
      ></CheckDuplicate>
    </div>
  </div>
</template>

<script>
import CheckDuplicate from "../../components/CheckDuplicate/CheckDuplicate";

export default {
  name: "PaperCheck",

  props: {},

  components: {
    CheckDuplicate,
  },

  data() {
    return {
      paperCheck: [
        {
          img: "http://zhimaikeji.net/imgs/test1.png",
          title: "中国知网",
          detail:
            "知网大分解学术不端文献检测系统，知网学术不端检测，一般用于硕博、本科、专科生的毕业论文分段进行检测，区别是需要将论文分成段落来进行检测，最终分段后检测出的结果再进行简单计算可获得最终的抄袭结果，检测的文献库范围跟知网VIP5.0系统一致，也同样包含…",
          href: "https://www.cnki.net/",
        },
        {
          img: "http://zhimaikeji.net/imgs/test8.png",
          title: "万方数据",
          detail:
            '万方数据论文相似性检测适用于对毕业论文、新投稿论文等进行检测，检测范围有中国学术期刊数据库、中国学位论文全文数据库、中国学术会议论文数据库、中国 学术网页数据库等。万方自主研发的"基于滑动窗口的低频特征部分匹配算法"，能准确识别细微改…',
          href: "http://www.wanfangdata.com.cn/index.html",
        },
        {
          img: "http://zhimaikeji.net/imgs/test2.png",
          title: "维普论文",
          detail:
            "采用国际领先的海量论文动态语义跨域识别加指纹对比基数，通过运用最新的云检测服务部署使其能够快捷、稳定、准确地检测到文章中存在的抄袭和不当引用现 象。系统主要包括已发表文献检测、论文检测。可快速准确地检测出论文中不当引用、过度引用甚至是抄袭…",
          href: "http://www.cqvip.com/",
        },
        {
          img: "http://zhimaikeji.net/imgs/test3.png",
          title: "Pager YY",
          detail:
            "PaperYY论文检测系统，通过与国内外院校合作方式和用户共享方式收录了海量资源，覆盖图书，期刊，学位论文，会议论文，专利，标准，报纸，互联网数据等超过1200亿条指纹，PaperYY拥有海归博士多年研发基于大数据指纹比对算法，相比常规比对速度提升10倍…",
          href: "https://www.paperyy.com/",
        },
        {
          img: "http://zhimaikeji.net/imgs/test7.png",
          title: "Turnitin 国际检测",
          detail:
            "Turnitin论文检测系统，领先全球的防范剽窃与提供丰富反馈的技术，3亿份的归档文稿，110,000以上的周刊和书籍，400亿以上的网页，适合外语检测，留学生论文检测， sci、ei等国际论文，本系统为Turnitin国际版，适用于美洲、澳洲、香港、韩国等国家留学生或发表投稿使用。",
          href: "http://www.turnitin.com.cn/",
        },
        {
          img: "http://zhimaikeji.net/imgs/test4.png",
          title: "Gocheck",
          detail:
            "Gocheck论文检测专家是全球首个面向论文写作者开发的文本相似度对比检测系统，基于国内最大中文文献资源库（总文献量超过100000000篇）以及数十亿的中英文互联网网页，提供最精准的论文抄袭检测自查服务，系统自推出以来已经获得超过1000万次用户使用的信赖。",
          href: "http://www.gocheck.cn/",
        },
        
        {
          img: "http://zhimaikeji.net/imgs/test5.png",
          title: "Paper Pass",
          detail:
            "PaperPass检测系统是北京智齿数汇科技有限公司旗下产品，网站诞生于2007年，运营多年来，已经发展成为国内可信赖的中文原创性检查和预防剽窃的在线网站。 系统采用自主研发的动态指纹越级扫描检测技术，该项技术检测速度快、精度高，市场反映良好。",
          href: "https://www.paperpass.com/",
        },
        {
          img: "http://zhimaikeji.net/imgs/test6.png",
          title: "PaperOK",
          detail:
            "PaperOK论文修改，是在已查重文稿的基础上，进行实时在线边修改边查重，用户能在第一时间获得最佳效果，在线实时修改功能由用户查重后自行进行修改，系统或公司不提供代改服务。此功能摒弃了传统修改过程中，对照检测报告，在word中一字一句修改，这种不直观的方式。",
          href: "https://www.paperok.com/",
        },
      ],
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style scoped lang="scss">
.min-w {
  width: 100%;
  margin: 0 auto;
}

.paper-title {
  height: 225px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background-color: rgb(0, 120, 132);

  img {
    height: 100%;
    border: none;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 50%;
    margin-left: -960px;
  }
}

.paper-body {
  width: 100%;
  margin: 26px auto;
}
</style>