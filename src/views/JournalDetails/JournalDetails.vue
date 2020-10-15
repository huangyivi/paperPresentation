<template>
  <div class="min-w">
    <div class="j-detail-main">
      <div class="j-detail-img">
        <img :src="imgSrc" alt />
      </div>
      <div class="j-detail-message">
        <h1>食品街</h1>
        <div class="j-message-span">
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>北京食品科学研究院</span>
          <span
            ><label>主管单位</label
            >中国联合会中国联合会中国联合会中国联合会</span
          >
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>数据库收录</label>知网、万方、维普</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
          <span><label>主管单位</label>中国联合会</span>
        </div>
        <div class="j-message-lanmu">
          <span
            ><label>期刊栏目</label>新闻资讯 | 产业财经 | 信息发布 |
            时尚生活</span
          >
        </div>
      </div>
      <div class="j-detail-us">
        <a href="#"><i></i>在线咨询</a>
        <img src="http://zhimaikeji.net/imgs/wf/contact_us.png" alt />
        <div class="j-us-phone">
          <p><label>咨询热线</label>12345678910</p>
          <p><label>咨询热线</label>12345678910</p>
          <p><label>咨询热线</label>12345678910</p>
          <p><label>咨询热线</label>12345678910@qq.com</p>
        </div>
      </div>
    </div>
    <div class="j-detail-body">
      <div class="j-detail-flex">
        <div class="jd-right">
          <JournalDetailsRight></JournalDetailsRight>
        </div>
        <div class="jd-left">
          <DetailOnlineSubMission></DetailOnlineSubMission>
          <p class="jd-title">投稿必看<span>/稿件要求及注意事项</span></p>
          <SubMissionLook></SubMissionLook>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JournalDetailsRight from "../../components/JournalDetails/JournalDetailsRight/JournalDetailsRight";
import DetailOnlineSubMission from "../../components/JournalDetails/DetailOnlineSubMission/DetailOnlineSubMission";
import SubMissionLook from "../../components/JournalDetails/SubMissionLook/SubMissionLook";


export default {
  name: "JournalDetails",

  props: [],

  components: {
    JournalDetailsRight,
    DetailOnlineSubMission,
    SubMissionLook,
  },

  data() {
    return {
      imgSrc: "http://54.222.136.26:8080/uimgs/prl/spjqk.jpg",
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style scoped lang="scss">
@import "JournalDetails.scss";
</style>