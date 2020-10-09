<template>
  <div class="book">
    <div class="img">
        <img :src="imgSrc" alt="">
    </div>
    <div>
      <a href>我是标题</a>
      <div>
        <p>类别</p>
        <p>期刊</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Book",
  props:['imgSrc']
};
</script>
<style lang="scss" scoped>
.book {
  margin: 10px;
  width: 150px;
  height: 244px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .imgs {
    width: 90%;
    height: 220px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    a {
      color: #000;
      font-size: 14px;
    }
    > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
      > p {
        font-size: 12px;
        color: grey;
      }
    }
  }
}
</style>