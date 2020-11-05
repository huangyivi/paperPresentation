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
        </div>
      </div>

      <div class="journal-info">
        <div class="journal-img">
          <img :src="imgSrc" alt />
        </div>
        <div>
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
      docs : []
    };
  },
  components: {
    DocRecommend
  },
  methods: {
    getDetails() {
      // 获取文献详细信息
      this.$http
        .get(`http://39.98.41.126:30007/doc/${this.$route.params.docid}`)
        .then(res => {
          if (res.data.code === 1) {
            this.title = res.data.data.title;
            this.content = res.data.data.abstractText;
            this.keyword = res.data.data.keyword;
            this.author = res.data.data.author;
            this.type = res.data.data.paperType;
            this.date = res.data.data.publishTime;
            this.journal = res.data.data.fromJournal;
            this.journalId = res.data.data.periodicalId;
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
        .post("http://39.98.41.126:30007/journal/getJournalById", formdata)
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
      this.$http
        .get(`http://39.98.41.126:30007/doc/${this.journalId}/1/10`)
        .then(res => {
          if(res.data.code === 1){
            this.docs = res.data.data.list
          }
        })
        .catch(err => {
          console.log(err);
        });
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