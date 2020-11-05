<template>
  <div class="jd-left">
    <div class="jd-title">投稿必看<span>/稿件要求及注意事项</span></div>
    <SubMissionLook></SubMissionLook>
    <!-- 文献模块 -->
    <div class="jd-title">
      期刊文献<span>/期刊优质文献免费阅读</span>
      <div class="wx-search">
        <div class="jd-dropdown-btn">
          <input
            placeholder="刊内搜索"
            v-model="wxCondition"
            @keyup.enter="getSearchWX"
          />
          <Icon type="ios-search" size="21" id="search"/>
        </div>
      </div>
    </div>
    <div class="jd-search-ans">
      <div v-for="item in WXData" :key="item.title" class="list-out">
        <div class="wx-ans-title">
          <a :href='"/DocDetails/" + item.id' >{{ item.title }}</a>
        </div>
        <p>{{ item.abstractText }}</p>
        <div class="list-bottom">
          <span>{{ item.author }}</span>
        </div>
      </div>
      <Page :total="total * 2" class="jd-list-page" @on-change="changePage"/>
    </div>

    <div class="jd-title">发表流程<span>/你需要知道的论文发表流程</span></div>
    <img
      class="progress-img"
      src="http://zhimaikeji.net/imgs/wf/progress.png"
      alt
    />
  </div>
</template>

<script>
import SubMissionLook from "../SubMissionLook/SubMissionLook";

export default {
  name: "JournalDetailsLeft",

  components: {
    SubMissionLook,
  },

  props: ["JName"],

  data() {
    return {
      wxCondition: "",
      WXData: "",
      nowPage: 1,
      total: 0,
    };
  },

  methods: {
    // 搜索框回车查询
    getSearchWX() {
      this.$http
        .get(`http://39.98.41.126:30007/doc/${this.$route.params.jid}/${this.nowPage}/5/${this.wxCondition}`)
        .then((res) => {
          if (res.data.code === 1) {
            console.log(res);
            this.WXData = res.data.data.list;
            this.total = res.data.data.total;
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 分页
    changePage(page) {
      this.nowPage = page;
    },
  },

  mounted() {
    this.getSearchWX();
  },

  // 检测年月变化
  watch: {
    nowPage: function (newVal, oldVal) {
      this.getSearchWX();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "JournalDetailsLeft";
</style>