<template>
  <div>
    <div class="doc-up">
      <div class="doc-content">
        <div class="doc-title">
          <h2>{{title}}</h2>
        </div>
        <div class="doc-main">
          <div class="doc-summary">【摘要】{{msg}}</div>
          <div class="doc-keyword">【关键词】{{keyword}}</div>
        </div>
        <div class="doc-tag">
          <span>
            <label>全网下载：</label>
            <b class="download">0</b>
          </span>
          <span>
            <label>页数：</label>
            <b class="page">0</b>
          </span>
          <span>
            <label>期刊：</label>
            <b class="journal">长江期刊</b>
          </span>
          <span>
            <label>刊期：</label>
            <b class="date">2020年9月</b>
          </span>
          <span>
            <label>价格：</label>
            <b class="price">免费</b>
          </span>
        </div>
      </div>

      <div class="journal-info">
        <div class="journal-img"></div>
        <div><label>期刊：</label><b>长江期刊</b></div>
        <div><label>全网下载量：</label><b>233</b></div>
      </div>
    </div>
    <doc-recommend></doc-recommend>
  </div>
</template>
<script>
import DocRecommend from "../../components/DocumentsRecommend/DocumentsRecommend.vue";
export default {
  name: "DocDetails",
  data() {
    return {
      // msg: this.$route.params.docid
      title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
      msg:
        "在新时期环境下，学生心理问 题受到了人们的广泛关注，在高职教育 中也常出现一些学生心理问题而造成 恶性事件的发生，面对这种情况，高职 也是十分重视对学生心理危机的识别 和干预，而微博平台作为现代化技术， 为高职学生心理危机的识别及其干预 提供了良好的条件下面，本文就针对微 博平台建设对于高职学生心理危机的 识别及其干预进行分析，希望对高职学 生心理健康工作提供一定的帮助。",
      keyword: "微博平台 高职学生 心理危 机 危机识别 危机干預"
    };
  },
  components: {
    DocRecommend
  }
};
</script>
<style lang="scss" scoped>
.doc-up {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  .doc-content {
    min-width: 820px;
    padding: 0px 100px;
    margin-bottom: 20px;
    flex: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .doc-title {
      > h2 {
        font-size: 20px;
        color: #202020;
        text-align: center;
        line-height: 60px;
        margin-bottom: 8px;
        font-weight: 400;
        margin-top: 34px;
      }
    }
    .doc-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .doc-summary,
      .doc-keyword {
        color: #585858;
        font-size: 14px;
        line-height: 28px;
        margin: 10px 0 10px 0;
        text-align: left;
        font-family: "宋体";
      }
    }
    .doc-tag {
      margin: 20px 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .download {
        color: red;
      }
    }
  }
  .journal-info {
    margin-left: 20px;
    width: 200px;
    height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .journal-img{
      width: 130px;
      height: 184px;
      background-color: red;
    }
  }
}
</style>