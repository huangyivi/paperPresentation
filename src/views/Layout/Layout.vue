<template>
  <div id="layout">
    <Header/>
    <Nav/>
    <router-view id="router"></router-view>
    <Footer/>
  </div>
</template>
<script>
import Header from "./Header/Header";
import Nav from "./Navigator/Navigator";
import Footer from "./Footer/Footer";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>
<style scoped lang="scss">
#layout{
    width: 100%;
    padding-top: 80px;
    background-color: rgb(249,249,249);
    #router{
        padding: 0 200px;
    }
}
</style>