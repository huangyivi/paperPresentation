<template>
  <div>
    <div class="result-box">
      <div class="result-header">
        <span>期刊名称</span>
        <span>级别</span>
        <span>所属行业</span>
        <span>全网人气</span>
        <span>最新</span>
        <span>周期</span>
        <span>影响因子</span>
        <span>电子</span>
        <span>纸刊</span>
        <span>操作</span>
      </div>
      <div class="result-body">
        <div v-for="item in allResult" :key="item.id" :data-id="item.id">
          <div class="result-body-list">
            <span>
              <a class="book-detail">{{ item.a }}</a>
            </span>
            <span>{{ item.b }}</span>
            <span>{{ item.c }}</span>
            <span>{{ item.d }}</span>
            <span>{{ item.e }}</span>
            <span>{{ item.f }}</span>
            <span>{{ item.g }}</span>
            <span>{{ item.h }}</span>
            <span>{{ item.j }}</span>
            <span>
              <a class="book-detail-blue">查看详情</a>
            </span>
          </div>
          <div class="result-body-detail">
            <div class="img-box">
              <a target="_blank">
                <img src="http://54.222.136.26:8080/uimgs/prl/xdjylc.jpg" />
              </a>
            </div>
            <div class="result-show">
              <span><label>主管单位：</label>{{ item.ee }}</span>
              <span><label>主管单位：</label>{{ item.ee }}</span>
              <span><label>主管单位：</label>{{ item.ee }}</span>
              <span><label>主管单位：</label>{{ item.ee }}</span>
              <span><label>主管单位：</label>{{ item.ee }}</span>
              <span><label>主管单位：</label>{{ item.ee }}</span>
              <span><label>主管单位：</label>{{ item.ee }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="result-page">
      <Page :total="allResult.length" />
    </div>
  </div>
</template>

<script>
export default {
  name: "searchAnswer",

  data() {
    return {
      allResult: [
        {
          id: "000",
          a: "食品街",
          b: "升级",
          c: "ccc",
          d: "ddd",
          e: "2912",
          f: "fff",
          g: "0",
          h: "--",
          j: "jjj",
          ee: "eeee",
        },
        {
          id: "000",
          a: "食品街",
          b: "升级",
          c: "ccc",
          d: "ddd",
          e: "2912",
          f: "fff",
          g: "0",
          h: "--",
          ee: "eeee",
          j: "jjj",
        },
        {
          id: "000",
          a: "食品街阿巴阿巴阿巴阿巴食品街阿巴阿巴阿巴阿巴",
          b: "升级",
          c: "ccc",
          d: "ddd",
          e: "2912",
          f: "",
          g: "0",
          h: "--",
          ee: "eeee",
          j: "",
        },
      ],
    };
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped lang="scss">
@import "searchAnswer.scss";
</style>