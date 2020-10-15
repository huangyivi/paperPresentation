<template>
  <div class="jd-right-main">
    <div class="jd-right-title">
      <span>期刊简介</span>
      <i>INTRODUCTION</i>
    </div>
    <p>
      《食品界》（月刊）创刊于2013年，是由北京食品科学研究院主办，中国食品杂志社出版的国家级食品行业期刊。《食品界》以“关注食品企业成长、引领食品产业发展、把握食品领域前沿、解析食品政策法规”为理念，为读者提供最新的食品产业信息。杂志读者包括食品企业的经营者及管理者、食品领域的专家及学者、业内成功人士等，他们多是对食品产业最为关注的读者，是当前食品产业的中坚力量。
      《食品界》以开阔的视野、专业的观点、活泼的文字、精美的制作带给读者一份阅读的愉悦和期待。自创刊以来，一直秉承《食品界》的编辑理念，关注食品领域的最新动态，倡导独树一帜的市场理念，推动全方位的营销手段，用“全新”的面孔，“互动”的装扮，闪亮登场。
      《食品界》目前主要以“新闻资讯”、“产业财经”、“信息发布”、“时尚生活”四大板块构成：——新闻资讯：包括封面故事、关注、内幕、资讯等栏目。通过讲述事件、人物、新闻话题，梳理事件来龙去脉，分析其背后的故事，使读者更清晰的了解全过程。——产业财经：包括财经、资本、解读、案例、区域、品牌等栏目。为读者提供食品产业相关信息，通过剖析典型性的企业案例，总结经验，推动食品企业快速发展。——信息发布：包括报告、月报、警示等栏目。发布专业检测机构的行业报告、市场监测信息或记者调查产品质量和食品安全领域的调查报道。——时尚生活：包括E-科技、品味、时尚汇、速览等栏目。通过品味时尚、鉴赏文化、了解最新时尚资讯，陶冶读者内心。《食品界》正以一道清新亮丽的风景，在众多的科普类刊物中脱颖而出，呈现给中国成百上千万关心食品领域、关注食品行业、关爱食品企业的读者朋友们。
    </p>
    <div class="jd-honer">
      <label>期刊荣誉</label>
      <p class="jd-honer-p">
        新闻资讯 | 产业财经 | 信息发布 |
        时尚生活中国学术期刊（光盘版）全文收录期刊中国期刊全文数据库（CJFD）中国核心期刊遴选数据库
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JournalDetailsRight",

  props: {},

  components: {},

  data() {
    return {};
  },

  methods: {},

  mounted() {},
};
</script>

<style scoped lang="scss">
.jd-right-main {
  p {
    color: #101010;
    line-height: 22px;
    font-size: 12px;
    text-indent: 2em;
    text-align: justify;
    margin: 18px 0;
    width: 100%;
    overflow: hidden;
  }

  .jd-right-title {
    width: 100%;
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    border-top: 1px solid #2980da;
    border-bottom: 1px solid #e5e5e5;

    span {
      float: left;
      color: #101010;
      font-size: 16px;
      font-weight: 600;
    }

    i {
      font-size: 12px;
      color: #787878;
      float: right;
      font-style: normal;
    }
  }

  .jd-honer {
    border: 1px solid #e5e5e5;
    padding: 20px 14px 7px;
    position: relative;
    margin-bottom: 40px;

    label {
      color: #2980da;
      font-size: 14px;
      display: block;
      width: 66px;
      height: 20px;
      background: #fff;
      position: absolute;
      top: -10px;
      left: 20px;
      text-align: center;
    }

    p {
      font-size: 12px;
      color: #101010;
      line-height: 18px;
    }
  }
}
</style>