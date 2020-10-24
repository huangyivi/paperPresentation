<template>
  <div class="check-duplicate">
    <div>
      <img :src="img" alt />
      <h3>{{ title }}</h3>
      <p>{{ detail }}</p>
      <a :href="href" target="_blank">立即检测</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckDuplicate",
  props: ["img", "title", "detail", "href"],
};
</script>

<style scoped lang="scss">
.check-duplicate > div:hover {
  border-color: #3abbc8;
}
.check-duplicate {
  display: inline-block;
  width: 25%;
  padding: 5px 5px 0;

  > div {
    height: 340px;
    background: #fff;
    border: 1px solid #ededed;
    text-align: center;
    padding: 0 30px;
    margin-top: 10px;
    border-radius: 4px;

    img {
      border: none;
      vertical-align: top;
      margin-top: 16px;
      width: 200px;
    }

    h3 {
      color: rgba(0, 0, 0, 0.85);
      font-size: 16px;
      font-weight: 400;
      margin: 10px auto 20px;
    }

    p {
      color: rgba(0, 0, 0, 0.65);
      font-size: 12px;
      text-indent: 2em;
      text-align: left;
      line-height: 18px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 7;
      overflow: hidden;
    }

    a {
      display: block;
      width: 113px;
      height: 34px;
      background: #3abbc8;
      border-radius: 4px;
      text-align: center;
      line-height: 34px;
      color: #fff;
      font-size: 12px;
      margin: 24px auto;
    }
  }
}
</style>