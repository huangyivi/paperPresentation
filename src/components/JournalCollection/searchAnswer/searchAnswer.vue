<template>
  <div class="result-box">
    <div class="result-header">
      <span>期刊名称</span>
      <span>级别</span>
      <span>所属行业</span>
      <span>全网人气</span>
      <span>周期</span>
      <span>影响因子</span>
      <span>纸刊</span>
      <span>操作</span>
    </div>
    <div class="result-body">
      <div
        class="result-out"
        v-for="item in journalList"
        :key="item.id"
        :data-id="item.id"
        @mouseenter="appearNext($event)"
        @mouseleave="hideNext($event)"
      >
        <div class="result-body-list">
          <span>
            <a
              class="book-detail"
              target="_blank"
              :href="'JournalDetails/' + item.id"
              >{{ item.name }}</a
            >
          </span>
          <span>{{ item.journalLevel }}</span>
          <span>{{ item.journalType }}</span>
          <span>{{ item.totalDownloads }}</span>
          <span>{{ item.releaseCycle }}</span>
          <span>{{ item.impactFactor }}</span>
          <span v-if="item.subscriptionPrice != 0"
            ><i>{{ item.subscriptionPrice }}</i
            >/年</span
          >
          <span v-else>暂无订阅</span>
          <span>
            <a
              class="book-detail-blue"
              target="_blank"
              :href="'JournalDetails/' + item.id"
              >查看详情</a
            >
          </span>
        </div>
        <div class="result-body-detail" style="display: none">
          <div class="img-box">
            <a target="_blank" :href="'JournalDetails/' + item.id">
              <img :src="item.journalPhoto" />
            </a>
          </div>
          <div class="result-show">
            <span><label>主管单位：</label>{{ item.competentAuthority }}</span>
            <span><label>主办单位：</label>{{ item.sponsor }}</span>
            <span><label>收录网站：</label>{{ item.receiveWebsite }}</span>
            <span><label>国内刊号：</label>{{ item.homeNumber }}</span>
            <span><label>国际刊号：</label>{{ item.interNumber }}</span>
            <span><label>总发文量：</label>{{ item.totalVolume }}</span>
            <span><label>主要栏目：</label>{{ item.mainSection }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchAnswer",

  props: ["journalList"],

  methods: {
    // hover显示详细
    appearNext(e) {
      e.currentTarget.querySelector(".result-body-list").style.backgroundColor =
        "rgba(0, 0, 0, .05)";
      e.currentTarget.querySelector(".result-body-detail").style.display = "";
    },

    hideNext(e) {
      e.currentTarget.querySelector(".result-body-list").style.backgroundColor =
        "transparent";
      e.currentTarget.querySelector(".result-body-detail").style.display =
        "none";
    },
  },
};
</script>

<style scoped lang="scss">
@import "searchAnswer.scss";
</style>