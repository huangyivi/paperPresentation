<template>
  <div class="min-w">
    <div class="j-detail-main">
      <div class="j-detail-img">
        <img :src="journalDetailData.journalPhoto" alt />
      </div>
      <div class="j-detail-message">
        <h1>{{ journalDetailData.name }}</h1>
        <div class="j-message-span">
          <span><label>主管单位</label>{{ journalDetailData.competentAuthority }}</span>
          <span><label>审稿周期</label>{{ journalDetailData.reviewCycle }}</span>
          <span><label>主办单位</label>{{ journalDetailData.sponsor }}</span>
          <span><label>数据库收录</label>{{ journalDetailData.receiveWebsite }}</span>
          <span><label>国内刊号</label>{{ journalDetailData.homeNumber }}</span>
          <span><label>影响因子</label>{{ journalDetailData.impactFactor }}</span>
          <span><label>国际刊号</label>{{ journalDetailData.interNumber }}</span>
          <span><label>总发文量</label>{{ journalDetailData.totalVolume }}</span>
          <span><label>级别(单位)</label>{{ journalDetailData.journalLevel }}</span>
          <span><label>被引频次</label>{{ journalDetailData.totalUsed }}</span>
          <span><label>出版周期</label>{{ journalDetailData.releaseCycle }}</span>
        </div>
        <div class="j-message-lanmu">
          <span>
            <label>期刊栏目</label>
            {{ journalDetailData.mainSection }}
          </span>
        </div>
      </div>
      <div class="j-detail-us">
        <a href="#"><i></i>在线咨询</a>
        <img src="http://zhimaikeji.net/imgs/wf/contact_us.png" alt />
        <div class="j-us-phone">
          <p><label>咨询热线</label>17666665234</p>
          <p><label>咨询邮箱</label>429075156@qq.com</p>
        </div>
      </div>
    </div>
    <div class="j-detail-body">
      <div class="j-detail-flex">
        <div class="jd-right">
          <JournalDetailsRight
            :introduction="journalDetailData.journalIntroduction"
            :JournalHonor="journalDetailData.journalHonors"
          ></JournalDetailsRight>
        </div>
        <JournalDetailsLeft :JName="journalDetailData.name"></JournalDetailsLeft>
      </div>
    </div>
  </div>
</template>

<script>
import JournalDetailsRight from "../../components/JournalDetails/JournalDetailsRight/JournalDetailsRight";
import JournalDetailsLeft from "../../components/JournalDetails/JournalDetailsLeft/JournalDetailsLeft";

export default {
  name: "JournalDetails",

  props: [],

  components: {
    JournalDetailsRight,
    JournalDetailsLeft,
  },

  data() {
    return {
      imgSrc: "http://54.222.136.26:8080/uimgs/prl/spjqk.jpg",
      visible: false,
      introduction: "hhhhhhh",
      JournalHonor: "nb",
      journalDetailData: "",
    };
  },

  methods: {
    getJournalDetails() {
      var formdata = new FormData();
      formdata.append("id", this.$route.params.jid);
      this.$http
        .post("http://39.98.41.126:30007/journal/getJournalById", formdata)
        .then((res) => {
          if (res.data.code === 1) {
            this.journalDetailData = res.data.data;
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getJournalDetails();
  },
};
</script>

<style scoped lang="scss">
@import "JournalDetails.scss";
</style>