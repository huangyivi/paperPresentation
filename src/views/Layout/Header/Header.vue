<template>
  <div id="header-container">
    <div>
      <div id="left-session">
        <p>您好，欢迎来到集文网</p>
        <p>咨询电话:17666665234</p>
      </div>
      <div id="right-session">
        <div class="login-wrap">
          <img class="icon" src="../../../assets/images/my.png" />
          <router-link v-if="!userInfo.name" class="login" to="/Login"
            >游客登录</router-link
          >
          <div v-else class="user">
            <div class="user-name" :title="userInfo.name">
              {{ userInfo.name }}
            </div>
            <div class="exit" @click="handleExit()">退出</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      userInfo: {}, //用户信息
    };
  },
  methods: {
    //退出登录
    handleExit() {
      this.$Modal.confirm({
        title: "退出登录？",
        onOk: () => {
          //清楚缓存中数据
          window.sessionStorage.removeItem("userInfo");
          this.userInfo = {};
          this.$Message.success("已退出登录");
        },
      });
    },
  },
  created() {},
  mounted() {
    //从缓存中获取用户数据，在渲染
    const userInfo = window.sessionStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./Header.scss";
</style>