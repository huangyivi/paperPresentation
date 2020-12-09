<template>
  <div>
    <div id="search">
      <div id="search-up">
        <input
          type="text"
          v-model="input"
          @keyup.enter="getJournals(journalType)"
        />
        <i-button
          type="primary"
          icon="ios-search"
          @click="getJournals(journalType)"
          >搜索</i-button
        >
      </div>
    </div>
    <div id="bookshelf">
      <Tabs
        :animated="false"
        active-key="key1"
        size="small"
        type="line"
        @on-click="getJournals"
      >
        <Tab-pane
          v-for="(item, key) in tabs"
          :name="item"
          :label="item"
          :key="key"
          class="books-pane"
        >
          <div id="books">
            <Book
              v-for="(item, key) in journals"
              :key="key"
              :imgSrc="item.journalPhoto"
              :title="item.name"
              :level="item.journalLevel"
              :cycle="item.releaseCycle"
              :id="'/paperhub/client/journalDetails/' + item.id"
            />
          </div>
          <h1 v-if="!isSize" class="ivu-page">暂无查询到数据</h1>
          <Page
            :total="dataCount"
            :page-size="pageSize"
            show-total
            @on-change="changePage"
          ></Page>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
import Book from "../JournalRecommend/Book";
export default {
  name: "Bookshelf",
  components: {
    Book,
  },
  data() {
    return {
      input: "",
      journalType: "",
      tabs: [
        "全部",
        "OA期刊",
        "基础",
        "社科",
        "自然",
        "医药",
        "生物",
        "环境",
        "核能",
        "化学",
        "理学",
        "文化",
        "艺术",
        "文学",
        "经济",
        "哲学",
        "政法",
        "农业",
        "工业",
        "机械",
        "建筑",
        "交通",
        "油气",
        "天文",
        "军事",
        "航空",
        "金属",
        "冶金",
        "矿业",
        "电器",
        "水利",
        "动力",
        "计算机",
        "电子",
        "语言",
      ],
      // 信息总量
      dataCount: 0,
      // 每页显示
      pageSize: 24,
      //当前页码
      currentPage: 1,
      //当前分类
      currentHead: "",
      // 是否有数据
      isSize: 1,
      // 期刊数组
      journals: [],
    };
  },
  methods: {
    // 换页
    changePage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.journals = this.journals.slice(_start, _end);
      this.currentPage = index;
      this.getJournals(this.currentHead);
    },
    getJournals(item = "") {
      if (this.currentHead != item) {
        this.currentHead = item;
        this.currentPage = 1;
      }
      if (item == "全部") {
        item = "";
      }
      this.journalType = item;
      let data = new FormData();
      data.append("name", this.input);
      data.append("pageNum", this.currentPage);
      data.append("pageSize", this.pageSize);
      data.append("journalType", item);
      const jRecMsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.$http
        .post(this.domain + "journal/searchRecommendJournal", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setTimeout(jRecMsg, 0);
          if (res.data.code == 1) {
            this.dataCount = res.data.data.total;
            this.journals = res.data.data.list;
            this.isSize = res.data.data.size;
          } else {
            this.isSize = false;
          }
        });
    },
  },
  created() {
    this.getJournals("");
  },
};
</script>
<style lang="scss" scoped>
@import "./Bookshelf.scss";
</style>