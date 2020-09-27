<template>
  <div id="nav-container">
    <div id="mav-logo">我是logo</div>
    <div id="nav-content">
      <Menu mode="horizontal" :theme="theme1" active-key="0" width="100">
        <Menu-item key="0" name="0">
          <router-link to="HomePage">首页</router-link>
        </Menu-item>
        <Menu-item key="1" name="1">
          <router-link to="JournalCollection">期刊大全</router-link>
        </Menu-item>
        <Menu-item key="2" name="2">
          <router-link to="JournalRecommend">期刊推荐</router-link>
        </Menu-item>
        <Menu-item key="3" name="3">
          <router-link to="DocumentBase">文献库</router-link>
        </Menu-item>
        <Menu-item key="4" name="4">
          <router-link to="PaperCheck">论文查重</router-link>
        </Menu-item>
        <Menu-item key="5" name="5">
          <router-link to="OnlineSubmit">在线投稿</router-link>
        </Menu-item>
      </Menu>
    </div>
    <div id="nav-search">
      <i-input>
        <i-select :model.sync="select" slot="prepend" style="width: 80px">
          <i-option value="magazine">期刊</i-option>
          <i-option value="paper">文献</i-option>
          <i-option value="title">标题</i-option>
          <i-option value="author">作者</i-option>
          <i-option value="keyword">关键词</i-option>
          <i-option value="passage">全文</i-option>
          <i-option value="unit">单位</i-option>
          <i-option value="abstract">摘要</i-option>
        </i-select>
      </i-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigator",
  data() {
    return {
      theme1: "light",
      select: 'magazine'
    };
  }
};
</script>
<style lang="scss" scoped>
#nav-container {
  width: 100%;
  min-width: 1460px;
  height: 60px;
  display: flex;
  position: fixed;
  top: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16);
  #mav-logo {
    margin-left: 150px;
  }
  #nav-content{
  }
  #nav-search {
    margin-right: 150px;
  }
}
</style>