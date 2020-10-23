<template>
  <div class="submission-look">
    <div>
      <div>
        <label>审稿时间</label>
        <span>数据缺失</span>
      </div>
      <div>
        <label>题目</label>
        <span>20字符以内为宜</span>
      </div>
      <div>
        <label>查重要求</label>
        <span>各网 30%以下</span>
      </div>
      <div>
        <label>摘要</label>
        <span>200-300字符（以中文字数统计）</span>
      </div>
      <div>
        <label>参考文献</label>
        <span>不少于3条</span>
      </div>
      <div>
        <label>正文</label>
        <span>2000以上（包含参考文献）</span>
      </div>
      <div>
        <label>关键词数</label>
        <span
          >3-5词为宜（关键词应该选取正文中出现频次较高的主题词、论文的核心概念词、不能选区无实际意义的虚词）</span
        >
      </div>
    </div>
    <div class="goto-submit">
      <router-link to="/OnlineSubmit" target="_blank">点击投稿</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMissionLook",
};
</script>

<style lang="scss">
.submission-look {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding: 24px;

  .goto-submit {
    text-align: center;
    height: 48px;
    line-height: 48px;
    margin: 16px auto 0;
    a {
      display: inline-block;
      background-color: #00a0ff;
      width: 120px;
      border-radius: 5px;
      color: white;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
    }
    a:hover {
      background-color: rgba($color: #00a0ff, $alpha: .8)
    }
  }

  > div > div {
    display: inline-block;
    width: 49%;

    label {
      font-size: 12px;
      line-height: 30px;
      color: #767676;
      font-weight: 400;
      margin-right: 6px;
      text-align: right;
      width: 54px;
    }

    span {
      color: #101010;
      width: calc(100% - 50px);
      font-size: 12px;
      line-height: 30px;
      height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  > div > div:last-child {
    width: 100%;
  }
}
</style>