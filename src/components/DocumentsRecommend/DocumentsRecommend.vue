<template>
  <div id="doc-rec-container">
    <div class="rec-title">
      <div id="block"></div>
      <h2>推荐文献</h2>
    </div>
    <div class="rec-table">
      <i-table :columns="columns1" :data="data1"></i-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentsRecommend",
  data() {
    return {
      columns1: [
        {
          title: "标题",
          key: "title",
          width : 300,
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
          title: "作者",
          key: "author"
        },
        {
          title: "发表时间",
          key: "date"
        },
        {
          title: "期刊",
          key: "journal"
        },
        {
          title: "全网下载量",
          key: "download"
        },
        {
          title: "热度",
          key: "hot"
        }
      ],
      data1: [
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
        {
          title: "高职学生心理健康现状分析及危机干预对策",
          author: "孙佳伟",
          date: "2018年19期",
          journal : "长江期刊",
          download : 0,
          hot : 5
        },
      ]
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