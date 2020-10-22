<template>
  <div class="book">
    <div class="img">
      <img :src="imgSrc" alt />
    </div>
    <div>
      <a class="title" :href="id">{{title}}</a>
      <div>
        <p>{{level}}</p>
        <p>{{cycle}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Book",
  props: ["imgSrc","title","level","cycle","id"]
};
</script>
<style lang="scss" scoped>
.book {
  width: 175px;
  height: 244px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 14px 0;
  float: left;
  margin-right: 17px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: #ffa231;
  }
  &:hover .title{
    color: #3a9dc8;
    text-decoration: underline;
  }
  &:hover .img{
    transform: scale(1.05);
    transition: 0.2s  linear;
  }
  .img {
    width: 133px;
    height: 176px;
    >img{
      width: 100%;
      height: 100%;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    a {
      color: rgba(0,0,0,0.85);
      font-size: 14px;
    }
    > div {
      display: flex;
      justify-content: space-around;
      width: 100%;
      > p {
        font-size: 12px;
        color: grey;
      }
    }
  }
}
</style>