<template>
  <!-- 最上面搜索栏 -->
  <div class="search-main">
    <div class="jou-coll-search">
      <label>已选条件：</label>
      <div class="check-box">
        <span class="check-div">
          科学技术
          <span class="check-delete">x</span>
        </span>
      </div>
      <div class="all-cancel">全部取消</div>
      <div class="check-total">
        （共筛选出相关期刊 <span class="red">{{ searchTotal }}</span
        >本）
      </div>
    </div>
    <!-- 筛选与显示 -->
    <div class="search-body">
        <searchNav></searchNav>
    </div>
  </div>
</template>

<script>
import searchNav from "../../components/JournalCollection/searchNav/searchNav";

export default {
  name: "JournalCollectionSearch",
  props: [""],
  data() {
    return {
      searchTotal: 20,
    };
  },
  components: {
    searchNav,
  },
};
</script>

<style scoped lang="scss">
@import "JournalCollectionSearch.scss";
</style>