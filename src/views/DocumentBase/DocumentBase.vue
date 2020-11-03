<template>
  <div>
    <div id="doc-banner">
      <img src="../../assets/images/documents.jpg" alt />
    </div>
    <Table />
  </div>
</template>
<script>
import Table from "../../components/DocumentBase/Table";
export default {
  name: "DocumentBase",
  components: {
    Table
  },
};
</script>
<style lang="scss" scoped>
#doc-banner {
  width: 100%;
  // width: 1200px;
  height: 300px;
  background-color: grey;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16);
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>