<template>
  <div id="nav-container">
    <div>
      <div id="nav-logo">
        <img src="../../../assets/images/logo.png" alt="">
        <img id="nav-font" src="../../../assets/images/jiwenwang.png" alt="">
        </div>
      <div id="nav-content">
        <Menu mode="horizontal" :theme="theme1" active-key="0" width="100">
          <router-link to="/">
            <Menu-item key="0" name="0">首页</Menu-item>
          </router-link>
          <router-link to="/JournalCollection">
            <Menu-item key="1" name="1">期刊大全</Menu-item>
          </router-link>
          <router-link to="/JournalRecommend">
            <Menu-item key="2" name="2">期刊推荐</Menu-item>
          </router-link>
          <router-link to="/DocumentBase">
            <Menu-item key="3" name="3">文献库</Menu-item>
          </router-link>
          <router-link to="/PaperCheck">
            <Menu-item key="4" name="4">论文查重</Menu-item>
          </router-link>
          <router-link to="/OnlineSubmit">
            <Menu-item key="5" name="5">在线投稿</Menu-item>
          </router-link>
        </Menu>
      </div>
      <div id="nav-view">
        网站浏览量：{{views}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigator",
  data() {
    return {
      theme1: "light",
      select: "magazine",
      views : ""
    };
  },
  beforeCreate(){
    this.$http.get(this.domain + "view")
    .then(res=>{
      this.views = res.data;
    })
  }
};
</script>
<style lang="scss" scoped>
#nav-container {
  z-index: 999;
  width: 100%;
  height: 64px;
  position: fixed;
  top: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16);

  > div {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: auto auto;
    
    #nav-logo{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      #nav-font{
        width: 120px;
        height: 60px;
      }
    }

    #nav-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #nav-view {
      float: left;
      width: 100px;
    }
  }
}
</style>