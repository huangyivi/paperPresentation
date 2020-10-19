<template>
  <div class="jd-left">
    <DetailOnlineSubMission
      :journalName="JName"
      :jid="this.$route.params.jid"
    ></DetailOnlineSubMission>
    <div class="jd-title">投稿必看<span>/稿件要求及注意事项</span></div>
    <SubMissionLook></SubMissionLook>
    <!-- 文献模块 -->
    <div class="jd-title">
      期刊文献<span>/期刊优质文献免费阅读</span>
      <div class="wx-search">
        <div class="jd-dropdown-btn">
          <input
            placeholder="刊内搜索"
            v-model="wxCondition.input"
            @keyup.enter="getSearchWX"
          />
          <Icon type="ios-search" size="21" />
        </div>
        <div class="jd-dropdown-btn">
          <select v-model="wxCondition.year">
            <option>不限</option>
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>
        <div class="jd-dropdown-btn">
          <select v-model="wxCondition.month">
            <option>不限</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
      </div>
    </div>
    <div class="jd-search-ans">
      <div v-for="item in data" :key="item.title" class="list-out">
        <div class="wx-ans-title">
          <a href="#">{{ item.title }}</a>
        </div>
        <p>{{ item.content }}</p>
        <div class="list-bottom">
          <span>{{ item.authod }}</span>
        </div>
      </div>
      <Page :total="data.length" class="jd-list-page" />
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
import DetailOnlineSubMission from "../DetailOnlineSubMission/DetailOnlineSubMission";
import SubMissionLook from "../SubMissionLook/SubMissionLook";

export default {
  name: "JournalDetailsLeft",

  components: {
    DetailOnlineSubMission,
    SubMissionLook,
  },

  props: ["JName"],

  data() {
    return {
      data: [
        {
          title: "This is title 1",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          authod: "this is the authod",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          title: "This is title 2",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          authod: "this is the authod222",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          title: "This is title 3",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          authod: "this is the autho2333d",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
      ],
      wxCondition: {
        year: "不限",
        month: "不限",
        input: "",
      },
      WXData: "",
    };
  },

  methods: {
    // 年月改变，或者搜索框回车查询
    getSearchWX() {
      // 未完成
      console.log(this.wxCondition);
    },

    // 进入页面进行搜索所有文献，查询全部
    getWXFirst() {
      this.$http
        .get(`http://39.98.41.126:30007/doc/${this.$route.params.jid}/1/10`)
        .then((res) => {
          if (res.data.code === 1) {
            this.WXData = res.data.data.list;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getTrue(str) {
      if (str != "不限") return str;
      else return "";
    },
  },

  mounted() {
    this.getWXFirst();
  },

  // 检测年月变化
  watch: {
    "wxCondition.year": function (newVal, oldVal) {
      this.getSearchWX();
    },
    "wxCondition.month": function (newVal, oldVal) {
      this.getSearchWX();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "JournalDetailsLeft";
</style>