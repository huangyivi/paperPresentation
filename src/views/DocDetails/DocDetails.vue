<template>
  <div>
    <div class="doc-up">
      <div class="doc-content">
        <div class="doc-title">
          <h2>{{title}}</h2>
        </div>
        <div class="doc-main">
          <div class="doc-summary">【摘要】{{content}}</div>
          <div class="doc-keyword">【关键词】{{keyword}}</div>
        </div>
        <div class="doc-tag">
          <span>
            <label>作者：</label>
            <b class="author">{{author}}</b>
          </span>
          <span>
            <label>类型：</label>
            <b class="type">{{type}}</b>
          </span>
          <span>
            <label>期刊：</label>
            <b class="journal">{{journal}}</b>
          </span>
          <span>
            <label>刊期：</label>
            <b class="date">{{date}}</b>
          </span>
          <span>
            <label>浏览量：</label>
            <b class="view">{{view}}</b>
          </span>
        </div>
      </div>

      <div class="journal-info">
        <div class="journal-img" @click="toJournal">
          <img :src="imgSrc" alt />
        </div>
        <div class="journal-name" @click="toJournal">
          <label>期刊：</label>
          <b>{{journal}}</b>
        </div>
      </div>
    </div>
    <doc-recommend :docs="docs"></doc-recommend>
  </div>
</template>
<script>
import DocRecommend from "../../components/DocumentsRecommend/DocumentsRecommend.vue";
export default {
  name: "DocDetails",
  data() {
    return {
      // msg: this.$route.params.docid,
      title: "",
      content: "",
      keyword: "",
      author: "",
      type: "",
      journal: "",
      date: "",
      imgSrc: "",
      journalId: "",
      view : "",
      docs : []
    };
  },
  components: {
    DocRecommend
  },
  methods: {
    getDetails() {
      // 获取文献详细信息
      const dmsg = this.$Message.loading({
          content: "Loading...",
          duration: 0,
        });
      this.$http
        .get(this.domain + `doc/${this.$route.params.docid}`)
        .then(res => {
          setTimeout(dmsg, 0);
          if (res.data.code === 1) {
            this.title = res.data.data.title;
            this.content = res.data.data.abstractText;
            this.keyword = res.data.data.keyword;
            this.author = res.data.data.author;
            this.type = res.data.data.paperType;
            this.date = res.data.data.publishTime;
            this.journal = res.data.data.fromJournal;
            this.journalId = res.data.data.periodicalId;
            this.view = res.data.data.view
          }
        }).then(()=>{
          this.getJournalImg();
          this.getRecoms();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getJournalImg() {
      // 获取期刊封面
      var formdata = new FormData();
      formdata.append("id", this.journalId);
      this.$http
        .post(this.domain + "journal/getJournalById", formdata)
        .then(res => {
          if (res.data.code === 1) {
            this.imgSrc = res.data.data.journalPhoto;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRecoms() {
      // 获取推荐文献
      let data = new FormData();
      data.append('perId',this.journalId);
      data.append('pageNum',1);
      data.append('pageSize',10);
      this.$http
        .post(this.domain + 'doc/list',data)
        .then(res => {
          if(res.data.code === 1){
            this.docs = res.data.data.list
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toJournal() {
        window.open(`/JournalDetails/${this.journalId}`);
    }
  },
  created() {
    this.getDetails();
  }
};
</script>
<style lang="scss" scoped>
@import "./DocDetails.scss";
</style>