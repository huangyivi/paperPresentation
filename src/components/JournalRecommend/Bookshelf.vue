<template>
  <div id="bookshelf">
    <Tabs active-key="key1" size="small" type="card">
      <Tab-pane v-for="(item,key) in tabs" :label="item" :key="key" class="books-pane">
        <div id="books">
          <Book v-for="(item,key) in 24" :key="key" :imgSrc="imgsrc" />
        </div>
        <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changePage"></Page>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
import Book from "../JournalRecommend/Book";
export default {
  name: "Bookshelf",
  components: {
    Book
  },
  data() {
    return {
      imgsrc : '',
      tabs: [
        "全部",
        "OA期刊",
        "基础",
        "社科",
        "自然",
        "全部",
        "OA期刊",
        "基础",
        "社科",
        "自然",
        "全部",
        "OA期刊",
        "基础",
        "社科",
        "自然",
        "全部",
        "OA期刊",
        "基础",
        "社科",
        "自然",
        "全部",
        "OA期刊",
        "基础",
        "社科",
        "自然"
      ],
      data1: [],
      // 信息总量
      dataCount: 24,
      // 每页显示
      pageSize: 24,
      //当前页码
      currentPage: 1,
      historyData: []
    };
  },
  methods: {
    // 处理首页
    handleFirst() {
      if (this.historyData.length < this.pageSize) {
        this.data1 = this.historyData;
      } else {
        this.data1 = this.historyData.slice(0, this.pageSize);
      }
    },
    changePage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.data1 = this.historyData.slice(_start, _end);
    }
  },
  created() {
    this.handleFirst();
  }
};
</script>
<style lang="scss" scoped>
#bookshelf {
  background-color: #fff;
  width: 100%;
  min-width: 1120px;
  padding: 0px 20px;
  margin-bottom: 20px;
  .books-pane {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
    #books {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>