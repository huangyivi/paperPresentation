<template>
  <div id="doc-banner">
    <img :src="imgSrc" alt />
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: ["imgSrc"]
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