<template>
<div>
  <div id="search">
    <div id="search-up">
      <input type="text" v-model="input" @keyup.enter="getDocs(currentHead)"/>
      <i-button type="primary" icon="ios-search"  @click="getDocs(currentHead)">搜索</i-button>
    </div>
    <div id="search-type">
      <input class="doc-attach"  type="radio" name="group1" value="1" id="title" @click="changeAttach" checked />
      <label for="title">文章标题</label>
      <input class="doc-attach" type="radio" name="group1" value="2" id="author" @click="changeAttach" />
      <label for="author">作者</label>
      <input class="doc-attach" type="radio" name="group1" value="3" id="keyword" @click="changeAttach" />
      <label for="keyword">关键词</label>
    </div>
  </div>
  <div id="doc-table">
    <Tabs :animated="false" active-key="key1" size="small" type="line" @on-click="getDocs">
      <Tab-pane
        v-for="(item,key) in tabs"
        :name="item"
        :label="item"
        :key="key"
        class="table-panel"
      >
        <i-table no-data-text="加载中......" :columns="columns1" :data="docs" v-if="isSize"></i-table>
        <h1 v-if="!isSize" class="ivu-page">暂无查询到数据</h1>
        <Page
          class="doc-pages"
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
export default {
  name: "Table",
  data() {
    return {
      // 搜索内容
      input:"",
      // 搜索类型
      attach : 1,
      //标签
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
        "语言"
      ],
      // 表格行头
      columns1: [
        {
          title: "标题",
          key: "title",
          width: 300,
          align: "center",
          render: (h, params) => {
            return h(
              "a",
              {
                attrs: {
                  href: "/paperhub/client/DocDetails/" + params.row.id,
                  target: "_blank",
                  title: params.row.title
                }
              },
              params.row.title
            );
          }
        },
        {
          title: "关键词",
          key: "keyword",
          width: 200,
          align: "center"
        },
        {
          title: "作者",
          key: "author",
          align: "center"
        },
        {
          title: "发表时间",
          key: "publishTime",
          align: "center"
        },
        {
          title: "期刊",
          key: "fromJournal",
          align: "center",
          render: (h, params) => {
            return h(
              "a",
              {
                attrs: {
                  href: "/paperhub/client/JournalDetails/" + params.row.periodicalId,
                  target: "_blank",
                  title: params.row.title
                }
              },
              params.row.fromJournal
            );
          }
        },
        {
          title: "文献类型",
          key: "paperType",
          align: "center"
        }
      ],
      docs: [
        // {
        //   title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
        //   keyword: "微博平台 高职学生 心理危机",
        //   author: "陈红",
        //   publishTime: "2020-10-01",
        //   fromJournal: "长江期刊",
        //   paperType: "OA"
        // }
      ],
      // 信息总量
      dataCount: 0,
      // 每页显示
      pageSize: 10,
      //当前页码
      currentPage: 1,
      //当前分类
      currentHead: "",
      // 是否有数据
      isSize: 1
    };
  },
  methods: {
    changePage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.docs = this.docs.slice(_start, _end);
      this.currentPage = index;
      this.getDocs(this.currentHead);
    },
    getDocs(item = "") {
      if (this.currentHead != item) {
        this.currentHead = item;
        this.currentPage = 1;
      }
      if (item == "全部") {
        item = "";
      }
      const tmsg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                console.log(this.attach)
      this.$http
        .get(this.domain + "doc", {
          params: {
            head: item,
            input: this.input,
            attach: this.attach,
            pageNum: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          setTimeout(tmsg, 0);
          if (res.data.code == 1) {
            this.dataCount = res.data.data.total;
            this.docs = res.data.data.list;
            this.isSize = res.data.data.size;
          } else {
            this.isSize = false;
          }
        });
    },
    changeAttach(){
      let attachs = document.getElementsByClassName('doc-attach');
      for(let i=0;i<attachs.length;i++){
        if(attachs[i].checked){
          this.attach = attachs[i].value;
        }
      }
    }
  },
  created() {
    this.getDocs("");
  }
};
</script>
<style lang="scss" scoped>
@import './Table.scss';
</style>
<style>
.ivu-table-wrapper {
  position: relative;
  border: none;
  border-bottom: 0;
  border-right: 0;
  overflow: hidden;
}
.ivu-table::after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    z-index: 3;
}
</style>