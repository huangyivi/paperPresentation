<template>
  <div class="search-nav">
    <div class="search-nav-title">期刊大全</div>
  </div>
</template>

<script>
export default {
  name: "searchNav",
  props: [""],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.search-nav {
  background: #fff;
  width: 222px;
  min-height: 340px;
  float: left;
  border-right: 1px solid black;

  .search-nav-title {
      width: 100px;
    height: 40px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    line-height: 40px;
    font-size: 20px;
  }
}
</style>