<template>
  <div id="doc-rec-container">
    <div class="rec-title">
      <div id="block"></div>
      <h2>推荐文献</h2>
    </div>
    <div class="rec-table">
      <i-table :columns="columns1" :data="docs"></i-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentsRecommend",
  props: ["docs"],
  data() {
    return {
      columns1: [
        {
          title: "标题",
          key: "title",
          width: 250,
          align: "center",
          render: (h, params) => {
            return h(
              "a",
              {
                attrs: {
                  href: "/DocDetails/" + params.row.id,
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
          width: 150,
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
          width : 200,
          align: "center",
          render: (h, params) => {
            return h(
              "a",
              {
                attrs: {
                  href: "/JournalDetails/" + params.row.id,
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
      data1: []
    };
  }
};
</script>
<style lang="scss" scoped>
#doc-rec-container {
  background-color: #fff;
  margin: 20px 0;
  padding: 10px;
  min-width: 1120px;
  .rec-title {
    margin: 20px 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    #block {
      display: block;
      width: 5px;
      height: 21px;
      background: #3a9dc8;
      border-radius: 2px;
      margin-right: 10px;
    }
  }
  .rec-table {
    margin: 20px 100px;
  }
}
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