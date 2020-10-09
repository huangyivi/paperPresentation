<template>
  <div id="search">
    <div>
      <h1>我是搜索图片</h1>
    </div>
    <div id="search-up">
      <input type="text" />
      <i-button type="primary" icon="ios-search">搜索</i-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      keywords: "title"
    };
  }
};
</script>
<style lang="scss" scoped>
#search {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 1120px;
  min-height: 200px;
  padding: 0 300px;
  #search-up {
    display: flex;
    input {
      min-width: 700px;
      min-height: 31px;
      border: 3px solid #2d8cf0;
      font-size: 24px;
      outline: none;
      margin-right: 10px;
      padding: 0 10px;
    }
  }
  #search-type {
    padding: 0 40px;
    width: 100%;
    min-width: 850px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > * {
      margin: 0 5px;
      cursor: pointer;
    }
    > *:hover {
      color: #2d8cf0;
    }
  }
}
</style>