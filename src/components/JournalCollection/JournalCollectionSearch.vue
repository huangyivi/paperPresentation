<template>
  <!-- 最上面搜索栏 -->
  <div class="search-main">
    <!-- 筛选与显示 -->
    <div class="search-body">
      <searchNav @toJCS="getSearchNavMsg"></searchNav>
      <div class="search-right">
        <div class="search-list">
          <div>
            <div class="dropdown">
              {{ realLabels.journalType }}
              <span @click="deleteRealLabel">x</span>
            </div>
            <div class="dropdown">
              <select class="drop-down" v-model="realLabels.journalLevel">
                <option disabled selected>期刊级别</option>
                <option
                  v-for="(item, index) in journalOption[0]"
                  :value="item"
                  :key="index"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="dropdown">
              <select class="drop-down" v-model="realLabels.releaseCycle">
                <option disabled selected>发行周期</option>
                <option
                  v-for="(item, index) in journalOption[1]"
                  :value="item"
                  :key="index"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="dropdown">
              <select class="drop-down" v-model="realLabels.impactFactor">
                <option disabled selected>影响因子</option>
                <option
                  v-for="(item, index) in journalOption[2]"
                  :value="item"
                  :key="index"
                >
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="search-ans">
          <searchAnswer :journalList="journalData.list"></searchAnswer>
          <div class="result-page">
            <Page :total="journalData.total / 2" @on-change="changePage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchNav from "../../components/JournalCollection/searchNav/searchNav";
import searchAnswer from "../../components/JournalCollection/searchAnswer/searchAnswer";

export default {
  name: "JournalCollectionSearch",
  props: [""],
  data() {
    return {
      searchTotal: 20,
      visible: false,
      journalOption: [
        [
          "不限",
          "核心（南大）",
          "国家级",
          "省级",
          "核心（北大）",
          "核心（北大.南大）",
          "未分级",
        ],
        [
          "不限",
          "年刊",
          "半年刊",
          "季刊",
          "双月刊",
          "月刊",
          "半月刊",
          "旬刊",
          "周刊",
          "其他",
        ],
        [
          "不限",
          "0.5以上",
          "1.0以上",
          "2.0以上",
          "3.0以上",
          "4.0以上",
          "5.0以上",
          "6.0以上",
          "7.0以上",
          "8.0以上",
        ],
      ],
      realLabels: {
        journalType: "期刊类别",
        journalLevel: "期刊级别",
        releaseCycle: "发行周期",
        impactFactor: "影响因子",
        pageNum: 1,
        pageSize: 20,
      },
      journalData: "",
    };
  },

  components: {
    searchNav,
    searchAnswer,
  },

  methods: {
    // 处理子组件传来的期刊类别
    getSearchNavMsg(data) {
      if (data) this.realLabels.journalType = data;
    },

    // 期刊类别点击x清空
    deleteRealLabel() {
      this.realLabels.journalType = "期刊类别";
    },

    // 当筛选条件改变时进行搜索
    getSearchAnswer() {
      this.journalData = "";
      var formdata = new FormData();
      formdata.append(
        "journalType",
        this.getRealData(this.realLabels.journalType)
      );
      formdata.append(
        "journalLevel",
        this.getRealData(this.realLabels.journalLevel)
      );
      formdata.append(
        "releaseCycle",
        this.getRealData(this.realLabels.releaseCycle)
      );
      formdata.append(
        "impactFactor",
        this.getRealData(this.realLabels.impactFactor)
      );
      formdata.append("pageNum", this.realLabels.pageNum);
      formdata.append("pageSize", this.realLabels.pageSize);
      this.$http
        .post("http://39.98.41.126:30004/journal/searchJournal", formdata)
        .then((res) => {
          if (res.data.code === 1) {
            this.journalData = res.data.data;
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 处理筛选数据
    getRealData(str) {
      if (
        str == "期刊级别" ||
        str == "不限" ||
        str == "期刊类别" ||
        str == "发行周期" ||
        str == "影响因子"
      )
        return "";
      else {
        return str;
      }
    },

    // 分页
    changePage(page) {
      this.realLabels.pageNum = page;
    },
  },

  // 监听条件是否改变
  watch: {
    realLabels: {
      handler(val, oldVal) {
        this.getSearchAnswer();
      },
      deep: true,
    },
  },

  mounted() {
    this.getSearchNavMsg();
    this.getSearchAnswer();
  },
};
</script>

<style scoped lang="scss">
@import "JournalCollectionSearch.scss";
</style>