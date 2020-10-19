<template>
  <div id="layout">
    <Header/>
    <Nav/>
    <router-view id="router"></router-view>
    <Footer/>
    <SideNav/>
    <customer-service/>
  </div>
</template>
<script>
import Header from "./Header/Header";
import Nav from "./Navigator/Navigator";
import Footer from "./Footer/Footer";
import SideNav from "./SideNav/SideNav";
import CustomerService from "../../components/CustomerService/CustomerService"
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Header,
    Nav,
    Footer,
    SideNav,
    CustomerService
  }
};
</script>
<style scoped lang="scss">
#layout{
    width: 100%;
    padding-top: 80px;
    background-color: rgb(248,248,248);
    #router{
        padding: 0 200px;
    }
}
</style>