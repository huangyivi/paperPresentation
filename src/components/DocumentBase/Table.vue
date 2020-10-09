<template>
  <div id="doc-table">
    <Tabs active-key="key1" size="small" type="card">
      <Tab-pane v-for="(item,key) in tabs" :label="item" :key="key" class="table-panel">
        <i-table stripe :columns="columns1" :data="data1"></i-table>
        <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changePage"></Page>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
export default {
  name: "Table",
  data() {
    return {
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
                  href: "DocDetails/" + params.row.url,
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
          key: "time",
          align: "center"
        },
        {
          title: "期刊",
          key: "magazine",
          align: "center",
          render: (h, params) => {
            return h(
              "a",
              {
                attrs: {
                  href: "JournalDetails/" + params.row.url,
                  target: "_blank",
                  title: params.row.title
                }
              },
              params.row.magazine
            );
          }
        },
        {
          title: "全网下载量",
          key: "download",
          align: "center"
        },
        {
          title: "热度",
          key: "hot",
          align: "center"
        },
        {
          title: "篇幅（页）",
          key: "page",
          align: "center"
        }
      ],
      data1: [],
      // 信息总量
      dataCount: 20,
      // 每页显示
      pageSize: 10,
      //当前页码
      currentPage: 1,
      historyData: [
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10",
          url : "123"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-01",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        },
        {
          title: "微博平台建设对于高职学生 心理危机的识别及其干预分析",
          keyword: "微博平台 高职学生 心理危机",
          author: "陈红",
          time: "2020-10-02",
          magazine: "长江期刊",
          download: "999",
          hot: "hot",
          page: "10"
        }
      ]
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
#doc-table {
padding: 0 20px;
background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
    width: 100%;
  min-width: 1120px;
  min-height: 600px;
  .table-panel {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .ivu-page {
      align-self: center;
    }
  }
}
</style>