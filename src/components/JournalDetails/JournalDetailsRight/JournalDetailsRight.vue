<template>
  <div class="jd-right-main">
    <div class="jd-right-title">
      <span>期刊简介</span>
      <i>INTRODUCTION</i>
    </div>
    <p>{{introduction}}</p>
    <div class="jd-honer">
      <label>期刊荣誉</label>
      <p class="jd-honer-p">{{JournalHonor}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JournalDetailsRight",
  props: ["introduction", "JournalHonor"],
};
</script>

<style scoped lang="scss">
.jd-right-main {
  p {
    color: #101010;
    line-height: 22px;
    font-size: 12px;
    text-indent: 2em;
    text-align: justify;
    margin: 18px 0;
    width: 100%;
    overflow: hidden;
  }

  .jd-right-title {
    width: 100%;
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    border-top: 1px solid #2980da;
    border-bottom: 1px solid #e5e5e5;

    span {
      float: left;
      color: #101010;
      font-size: 16px;
      font-weight: 600;
    }

    i {
      font-size: 12px;
      color: #787878;
      float: right;
      font-style: normal;
    }
  }

  .jd-honer {
    border: 1px solid #e5e5e5;
    padding: 20px 14px 7px;
    position: relative;
    margin-bottom: 40px;

    label {
      color: #2980da;
      font-size: 14px;
      display: block;
      width: 66px;
      height: 20px;
      background: #fff;
      position: absolute;
      top: -10px;
      left: 20px;
      text-align: center;
    }

    p {
      font-size: 12px;
      color: #101010;
      line-height: 18px;
    }
  }
}
</style>